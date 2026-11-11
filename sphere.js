// ---------- The Sphere: live drawing (2026-11-11) ----------
// A giant LED sphere next to the city with the most people. Tap it (or the 🎨 button) to open it and draw.
// Rules: a drawing lives 24 h, one drawing per person every 24 h, 7 minutes from the first stroke, thin brushes, limited ink.
// Server: sphere-server/ (Cloudflare Worker + Durable Object). Test: ?sphere=http://localhost:8787   Moderation: ?admin=KEY
(function () {
  const QS = new URLSearchParams(location.search);
  let toastT = null;
  function toast(t) { const el = document.getElementById('toast'); if (!el) return; el.textContent = t; el.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => el.hidden = true, 3200); }
  const SERVER = (QS.get('sphere') || 'https://ocw-sphere.onecommentworld.workers.dev').replace(/\/$/, '');
  const ADMIN = QS.get('admin');
  const DEMO = SERVER === 'demo';      // ?sphere=demo : no server, fake people drawing (to try it out)
  const W = 4096, H = 2048, TW = 4096, TH = 2048, SC = TW / W;   // drawing texture at full resolution (1 unit = 1 px)
  const NOD = Math.round(H * 125 / 180);   // below 35°S (the bottom of the sphere) nobody can draw: you couldn't see it from the map
  const LIFE = 24 * 3600e3, FADE = 3600e3;
  const COLORS = ['#ffffff', '#ffcf3f', '#ff9f1c', '#ff4d4d', '#ff5fa2', '#b06bff', '#4d7cff', '#38c6ff',
                  '#2ee6c5', '#7fc25d', '#3a9a3f', '#c98a4b', '#f1c9a5', '#9aa7ad', '#ff2e2e', '#111111'];
  const WIDTHS = [2, 4, 6];            // canvas units (the sphere is 4096 around): thin on purpose
  const BG = '#0d1c26';
  const R_M = 78;                      // radius in metres (the Las Vegas Sphere is 157 m wide)

  // ---- state: strokes ----
  const strokes = new Map();           // id -> {c,w,pts:[], t0 (local ms of birth)}
  const tex = document.createElement('canvas'); tex.width = TW; tex.height = TH;
  const g = tex.getContext('2d', { willReadFrequently: true });   // we read back small rectangles to upload them
  let texDirty = true, textures = [], mapDirty = true, fullDirty = true, dirtyR = null;   // dirtyR: [x0,y0,x1,y1] in texture px, uploaded alone (fast)
  function markR(x0, y0, x1, y1) { if (!dirtyR) dirtyR = [x0, y0, x1, y1]; else { dirtyR[0] = Math.min(dirtyR[0], x0); dirtyR[1] = Math.min(dirtyR[1], y0); dirtyR[2] = Math.max(dirtyR[2], x1); dirtyR[3] = Math.max(dirtyR[3], y1); } }
  const small = document.createElement('canvas'); small.width = 2048; small.height = 1024;   // the sphere on the map is small: half resolution is plenty
  const sg = small.getContext('2d');
  function paintBg() {
    g.globalAlpha = 1; g.fillStyle = BG; g.fillRect(0, 0, TW, TH);
    // the no-drawing zone at the bottom: dark band with faint hazard stripes and a yellow edge
    g.save(); g.beginPath(); g.rect(0, NOD * SC, TW, TH - NOD * SC); g.clip();
    g.fillStyle = '#081117'; g.fillRect(0, NOD * SC, TW, TH);
    g.strokeStyle = 'rgba(255,207,63,.10)'; g.lineWidth = 18 * SC;
    for (let x = -TH; x < TW; x += 64 * SC) { g.beginPath(); g.moveTo(x, NOD * SC); g.lineTo(x + TH, NOD * SC + TH); g.stroke(); }
    g.restore();
    g.fillStyle = 'rgba(255,207,63,.55)'; g.fillRect(0, NOD * SC - 3 * SC, TW, 6 * SC);
    // LED grid: faint meridians and parallels
    g.strokeStyle = 'rgba(120,180,200,.08)'; g.lineWidth = 2 * SC;
    for (let x = 0; x < TW; x += TW / 48) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, NOD * SC); g.stroke(); }
    for (let y = 0; y < NOD * SC; y += TH / 24) { g.beginPath(); g.moveTo(0, y); g.lineTo(TW, y); g.stroke(); }
    // faint screen text around the equator, like the real Sphere when it's idle
    g.fillStyle = 'rgba(56,198,255,.16)'; g.font = `400 ${TH / 15}px "Lilita One","Arial Rounded MT Bold",sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
    for (let i = 0; i < 2; i++) g.fillText('THE SPHERE  ·  ONE COMMENT WORLD', TW * (0.25 + i * 0.5), TH * 0.42);
    g.fillStyle = 'rgba(255,207,63,.28)'; g.font = `400 ${TH / 32}px "Lilita One","Arial Rounded MT Bold",sans-serif`;
    for (let i = 0; i < 4; i++) g.fillText('NO DRAWING ZONE', TW * (0.125 + i * 0.25), (NOD + 70) * SC);
  }
  function alphaOf(s, now) { const age = now - s.t0; return age > LIFE ? 0 : age > LIFE - FADE ? (LIFE - age) / FADE : 1; }
  function seg(s, from, alpha) {         // draw points [from..] of stroke s (from = index of a point, in numbers)
    const p = s.pts; if (p.length < 2) return;
    g.globalAlpha = alpha; g.strokeStyle = COLORS[s.c] || '#fff'; g.fillStyle = g.strokeStyle;
    g.lineWidth = WIDTHS[s.w] * SC; g.lineCap = 'round'; g.lineJoin = 'round';
    const i0 = Math.max(0, from - 2), m = WIDTHS[s.w] * SC + 2;
    { let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; for (let i = i0; i < p.length; i += 2) { const x = p[i] * SC, y = p[i + 1] * SC; if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; } markR(x0 - m, y0 - m, x1 + m, y1 + m); }
    if (p.length - i0 <= 2) { g.beginPath(); g.arc(p[i0] * SC, p[i0 + 1] * SC, Math.max(.6, WIDTHS[s.w] * SC / 2), 0, 7); g.fill(); return; }
    g.beginPath(); g.moveTo(p[i0] * SC, p[i0 + 1] * SC);
    for (let i = i0 + 2; i < p.length; i += 2) g.lineTo(p[i] * SC, p[i + 1] * SC);
    g.stroke();
  }
  function redraw() {
    const now = Date.now(); paintBg();
    for (const [id, s] of strokes) { const a = alphaOf(s, now); if (a <= 0) { strokes.delete(id); continue; } seg(s, 0, a); }
    texDirty = mapDirty = fullDirty = true;
  }
  function addPts(id, c, w, pts, t0) {
    let s = strokes.get(id);
    if (!s) { s = { c, w, pts: [], t0: t0 || Date.now() }; strokes.set(id, s); }
    const from = s.pts.length; s.pts.push(...pts); seg(s, from, alphaOf(s, Date.now())); texDirty = mapDirty = true;
  }
  paintBg();
  setInterval(redraw, 60e3);            // fading and the 24 h expiry
  try { document.fonts.ready.then(redraw); } catch (e) { }

  // ---- network ----
  let myCode = null, ws = null, wsWant = false, online = 0, drawingNow = 0, me = null, meAt = 0, stateLoaded = false, retry = 1000;
  const dev = (() => { try { let d = localStorage.getItem('ocw-dev'); if (!d) { d = [...crypto.getRandomValues(new Uint8Array(12))].map(b => b.toString(16).padStart(2, '0')).join(''); localStorage.setItem('ocw-dev', d); } return d; } catch (e) { return 'x' + Math.random().toString(16).slice(2); } })();
  async function loadState() {
    if (DEMO) { demoSeed(); stateLoaded = true; redraw(); ui(); return; }
    try {
      const r = await fetch(SERVER + '/state', { cache: 'no-store' }); if (!r.ok) throw 0;
      const ab = await new Response(r.body.pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
      const v = new DataView(ab); let o = 8; const n = v.getUint32(4, true), now = Date.now();
      strokes.clear();
      for (let i = 0; i < n; i++) {
        const id = v.getUint32(o, true), age = v.getUint32(o + 4, true), c = v.getUint8(o + 8), w = v.getUint8(o + 9), np = v.getUint16(o + 10, true); o += 12;
        const pts = new Array(np * 2); for (let j = 0; j < np * 2; j++) { pts[j] = v.getUint16(o, true); o += 2; }
        strokes.set(id, { c, w, pts, t0: now - age * 1000 });
      }
      stateLoaded = true; redraw(); ui();
    } catch (e) { setTimeout(loadState, 8000); }
  }
  function connect() {
    if (ws || !wsWant) return;
    try { ws = DEMO ? new FakeWS() : new WebSocket(SERVER.replace(/^http/, 'ws') + '/ws'); } catch (e) { ws = null; return; }
    ws.onopen = () => { retry = 1000; ws.send(JSON.stringify({ t: 'hello', dev })); if (!stateLoaded) loadState(); };
    ws.onmessage = e => {
      let m; try { m = JSON.parse(e.data); } catch (x) { return; }
      if (m.t === 'b') { online = m.n; drawingNow = m.d; for (const [id, c, w, p] of m.dr) addPts(id, c, w, p); ui(); }
      else if (m.t === 'code') { myCode = m.code; ui(); }
      else if (m.t === 'me') { me = m; meAt = Date.now(); if (me.state !== 'active' && me.state !== 'new') pen.mode = 'move'; ui(); }
      else if (m.t === 'del') { for (const id of m.ids) strokes.delete(id); redraw(); }
      else if (m.t === 'wipe') { strokes.clear(); redraw(); }
      else if (m.t === 'no') { if (me) me.state = m.why === 'ink' ? 'inkout' : 'done'; pen.mode = 'move'; ui(); toast(m.why === 'ink' ? 'Your ink is finished. Your drawing stays on the Sphere for 24 h ✨' : 'Time is up! Your drawing stays on the Sphere for 24 h ✨'); }
    };
    ws.onclose = () => { ws = null; if (wsWant) { setTimeout(connect, retry); retry = Math.min(30000, retry * 2); } };
  }
  function want(on) { wsWant = on; if (on) { connect(); if (!stateLoaded) loadState(); } else if (ws) { const w = ws; ws = null; try { w.close(); } catch (e) { } } }
  // ---- demo: a fake server with fake people (only with ?sphere=demo) ----
  const rnd = (a, b) => a + Math.random() * (b - a), pick = a => a[Math.floor(Math.random() * a.length)];
  function shape(kind, cx, cy, sz) {         // -> list of strokes [[c,w,[x,y,...]],...] in canvas units
    const P = (f, n = 60) => { const o = []; for (let i = 0; i <= n; i++) { const [x, y] = f(i / n); o.push(Math.round(cx + x * sz), Math.round(cy + y * sz)); } return o; };
    const circ = (r, ox = 0, oy = 0, a0 = 0, a1 = 1) => P(t => { const a = (a0 + (a1 - a0) * t) * Math.PI * 2; return [ox + Math.cos(a) * r, oy + Math.sin(a) * r]; });
    const c = Math.floor(rnd(0, 14)), w = Math.floor(rnd(0, 3));
    if (kind === 'heart') return [[pick([3, 4, 14]), w, P(t => { const a = t * Math.PI * 2; return [Math.sin(a) ** 3, -(13 * Math.cos(a) - 5 * Math.cos(2 * a) - 2 * Math.cos(3 * a) - Math.cos(4 * a)) / 16]; }, 80)]];
    if (kind === 'smile') return [[1, w, circ(1)], [15, w, circ(.12, -.35, -.3)], [15, w, circ(.12, .35, -.3)], [15, w, circ(.55, 0, 0, .08, .42)]];
    if (kind === 'star') return [[1, w, P(t => { const i = Math.floor(t * 10 + .001), a = i / 10 * Math.PI * 2 - Math.PI / 2, r = i % 2 ? .45 : 1; return [Math.cos(a) * r, Math.sin(a) * r]; }, 10)]];
    if (kind === 'spiral') return [[c, w, P(t => [Math.cos(t * 30) * t, Math.sin(t * 30) * t], 120)]];
    if (kind === 'flower') return [[c, w, P(t => { const a = t * Math.PI * 2, r = .5 + .5 * Math.abs(Math.cos(a * 2.5)); return [Math.cos(a) * r, Math.sin(a) * r]; }, 120)], [1, w, circ(.18)], [9, w, P(t => [0, .5 + t * 1.6], 10)]];
    if (kind === 'house') return [[11, w, P(t => { const q = [[-.8, 1], [-.8, 0], [0, -.8], [.8, 0], [.8, 1], [-.8, 1]], f = t * 5, i = Math.min(4, Math.floor(f)), u = f - i; return [q[i][0] + (q[i + 1][0] - q[i][0]) * u, q[i][1] + (q[i + 1][1] - q[i][1]) * u]; }, 50)], [3, w, P(t => [-.2 + (t < .5 ? 0 : .4), 1 - (t < .5 ? t * 2 : 2 - t * 2) * .6], 20)]];
    if (kind.startsWith('flag')) {        // filled flag, thin zigzag rows (the "flag wars")
      const F = { flagSE: y => y > .38 && y < .62 ? 1 : 6, flagIT: (y, x) => x < .33 ? 10 : x < .66 ? 0 : 3, flagRS: y => y < .33 ? 3 : y < .66 ? 6 : 0, flagBR: y => y > .3 && y < .7 ? 1 : 10, flagJP: (y, x) => Math.hypot(x - .5, (y - .5) * .66) < .2 ? 3 : 0 }[kind];
      const out = [], rows = 14;
      for (let r = 0; r < rows; r++) {
        const y = r / rows, segs = [];
        let curC = F(y, 0), pts = [];
        for (let i = 0; i <= 30; i++) { const x = i / 30, cc = F(y, x); if (cc !== curC) { segs.push([curC, pts]); pts = [pts[pts.length - 2], pts[pts.length - 1]]; curC = cc; } pts.push(Math.round(cx + (x - .5) * sz * 2.2), Math.round(cy + (y - .5) * sz * 1.4)); }
        segs.push([curC, pts]); for (const [cc, pp] of segs) out.push([cc, 2, pp]);
      }
      return out;
    }
    return [[c, w, circ(1)]];
  }
  const KINDS = ['heart', 'smile', 'star', 'spiral', 'flower', 'house', 'flagSE', 'flagIT', 'flagRS', 'flagBR', 'flagJP', 'heart', 'smile', 'flower'];
  let demoId = 1e6;
  function demoSeed() {
    strokes.clear(); const now = Date.now();
    for (let i = 0; i < 70; i++) {
      const age = rnd(0, 24) * 3600e3;
      for (const [c, w, pts] of shape(pick(KINDS), rnd(80, W - 80), rnd(260, NOD - 160), rnd(25, 70))) strokes.set(demoId++, { c, w, pts, t0: now - age });
    }
  }
  class FakeWS {
    constructor() {
      this.readyState = 1; this.bots = [];
      setTimeout(() => this.onopen && this.onopen(), 50);
      this.iv = setInterval(() => this.tick(), 120);
    }
    emit(o) { this.onmessage && this.onmessage({ data: JSON.stringify(o) }); }
    tick() {
      while (this.bots.length < 24) {            // the side facing you gets the most people, so you see them draw
        const near = view && Math.random() < .7, u = near ? ((0.25 - view.yaw / (Math.PI * 2)) % 1 + 1) % 1 : Math.random();
        const sk = shape(pick(KINDS), Math.round(u * W + rnd(-500, 500) + W) % W, rnd(330, NOD - 200), rnd(25, 70));
        this.bots.push({ q: sk.map(([c, w, p]) => ({ id: demoId++, c, w, p, i: 0 })), wait: Math.floor(rnd(0, 30)) });
      }
      const dr = [];
      for (const b of this.bots) {
        if (b.wait-- > 0) continue; const s = b.q[0]; if (!s) continue;
        const n = Math.min(s.p.length - s.i, 2 * Math.floor(rnd(3, 7))); dr.push([s.id, s.c, s.w, s.p.slice(s.i, s.i + n)]); s.i += n;
        if (s.i >= s.p.length) { b.q.shift(); b.wait = 3; }
      }
      this.bots = this.bots.filter(b => b.q.length);
      this.n = Math.round((this.n || 214) + rnd(-2, 2.4));
      this.emit({ t: 'b', n: this.n, d: this.bots.filter(b => b.wait <= 0).length, dr });
    }
    send(raw) {
      const m = JSON.parse(raw);
      if (m.t === 'hello') { this.me = { t: 'me', state: 'verify', draw: 7 * 60e3, life: LIFE, ink: 12000, used: 0, user: null }; this.emit(this.me); }
      if (m.t === 'code') this.emit({ t: 'code', code: 'DRAW ' + (1000 + Math.floor(Math.random() * 9000)) + String.fromCharCode(65 + Math.floor(Math.random() * 26)) });
    }
    verify() { setTimeout(() => { this.me = { ...this.me, state: 'new', user: '@you' }; this.emit(this.me); toast('Unlocked! You follow @onecommentworld 🎉'); }, 3000); }   // demo: pretend the DM arrived
    close() { clearInterval(this.iv); this.readyState = 3; }
  }
  const send = o => { if (ws && ws.readyState === 1) ws.send(JSON.stringify(o)); };

  // ---- the sphere on the map ----
  let host = null, mesh = null, site = null, pos = null;
  function topTown() { const ts = window.OCW_SITE_X ? OCW_SITE_X.towns() : []; return ts.filter(t => t.v && !t.ghost).sort((a, b) => b.abitanti - a.abitanti)[0]; }
  function placeOnMap() {
    const api = site.api, THREE = api.THREE, t = topTown(); if (!t) return false;
    host = t; const v = t.v; let minX = 0;
    for (const L of v.lots || []) minX = Math.min(minX, L.x);
    for (const c of v.civic || []) minX = Math.min(minX, c.x - (c.w || 22));
    const lx = minX - 40 - R_M * 1.6, ly = 0, s = v.k / 1000;          // west of the houses (the airport is east)
    pos = { x: v.cx + lx * s, y: v.cy + ly * s, r: R_M * s };
    const tx = new THREE.CanvasTexture(small); tx.colorSpace = THREE.SRGBColorSpace; tx.anisotropy = 4; let lastCopy = 0;
    const grp = new THREE.Group();
    mesh = new THREE.Mesh(new THREE.SphereGeometry(pos.r, 64, 32), new THREE.MeshLambertMaterial({ color: 0x2a4652, emissive: 0xffffff, emissiveMap: tx }));
    mesh.castShadow = true;
    mesh.position.y = pos.r * 1.02;                                     // standing straight on the ground, like the real one
    const plaza = new THREE.Mesh(new THREE.CylinderGeometry(pos.r * 1.45, pos.r * 1.5, pos.r * 0.04, 48), new THREE.MeshLambertMaterial({ color: 0xcfd6d2 }));
    plaza.position.y = pos.r * 0.02; plaza.receiveShadow = true;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(pos.r * 1.32, pos.r * 0.035, 8, 64), new THREE.MeshBasicMaterial({ color: 0xffcf3f }));
    ring.rotation.x = Math.PI / 2; ring.position.y = pos.r * 0.05;
    grp.add(plaza, ring, mesh); grp.renderOrder = 12; mesh.renderOrder = 12;
    api.scene.add(grp);
    const r0 = api.render;
    api.render = function () {
      if (open) return;                                                 // the drawing view covers the map: don't draw both
      const vw = api.view;
      grp.position.set(pos.x - vw.x, 0, -(pos.y - vw.y));
      grp.visible = vw.h < 60;
      mesh.rotation.y = (performance.now() / 1000) * (Math.PI * 2 / 240);   // one turn every 4 minutes
      if (mapDirty && grp.visible && performance.now() - lastCopy > 250) { sg.drawImage(tex, 0, 0, 2048, 1024); tx.needsUpdate = true; mapDirty = false; lastCopy = performance.now(); }
      r0.apply(this, arguments);
      mapBadge();
    };
    return true;
  }
  // label over the sphere + tap to open
  const badge = document.createElement('button'); badge.className = 'sph-badge'; badge.type = 'button'; badge.hidden = true;
  badge.innerHTML = '<span class="dot"></span>THE SPHERE<small>tap to draw live</small>';
  badge.onclick = () => openSphere();
  function mapBadge() {
    if (!pos || !site) return; const api = site.api, vw = api.view;
    if (vw.h > 60) { badge.hidden = true; return; }
    const [sx, sy, z] = api.project(pos.x, pos.y - pos.r * 1.55, 0);   // on the plaza, in front of the sphere
    const mapEl = document.getElementById('map'), W0 = mapEl.clientWidth, H0 = mapEl.clientHeight;
    if (z > 1 || sx < -50 || sy < -50 || sx > W0 + 50 || sy > H0 + 50) { badge.hidden = true; return; }
    badge.hidden = false; badge.style.transform = `translate(${sx | 0}px,${sy | 0}px) translate(-50%,-30%)`;
    // live connection only when the sphere is on screen
    if (!wsWant) want(true); lastSeen = Date.now();
  }
  let lastSeen = 0;
  setInterval(() => { if (wsWant && !open && Date.now() - lastSeen > 30000) want(false); }, 5000);
  // keep the map redrawing while strokes arrive and the sphere is visible
  setInterval(() => { if (site && site.api && mapDirty && !badge.hidden) { const v = site.api.view; site.go(v.x, v.y, v.h); } }, 120);

  // the 🎨 button with the map controls
  function addButton() {
    const ctl = document.querySelector('.ctl'); if (!ctl || ctl.querySelector('#c-sphere')) return;
    const b = document.createElement('button'); b.id = 'c-sphere'; b.type = 'button'; b.className = 'rules-btn sph-btn';
    b.setAttribute('aria-label', 'The Sphere: draw live');
    b.innerHTML = '<span aria-hidden="true">🎨</span><span class="long">The Sphere</span><span class="short">Sphere</span>';
    b.onclick = () => flyToSphere(true);
    ctl.insertBefore(b, ctl.firstChild);
  }
  function flyToSphere(thenOpen) {
    if (!pos) return;
    const h = pos.r * 11, target = typeof panelOffset === 'function' ? panelOffset({ x: pos.x, y: pos.y }, h) : { x: pos.x, y: pos.y, h };
    if (typeof flyTo === 'function') flyTo(target); else site.go(target.x, target.y, target.h);
    if (!thenOpen) return;
    const t0 = Date.now(), wait = setInterval(() => { if (!site.flyA || Date.now() - t0 > 9000) { clearInterval(wait); setTimeout(openSphere, 300); } }, 100);
  }

  // ---- the drawing view ----
  let open = false, view = null;
  const pen = { mode: 'move', c: 1, w: 1 };
  const ov = document.createElement('div'); ov.className = 'sph-ov'; ov.hidden = true;
  ov.innerHTML = `
    <div class="sph-top">
      <button class="sph-x" type="button" aria-label="Close the Sphere">✕</button>
      <div class="sph-title"><b>THE SPHERE</b><span class="sph-live"><span class="dot"></span><span id="sph-n">connecting…</span></span></div>
    </div>
    <div class="sph-stage"><canvas class="sph-c" aria-label="The Sphere: drag to turn it, draw on it"></canvas><div class="sph-rect" hidden></div></div>
    <div class="sph-bar">
      <div class="sph-msg" id="sph-msg"></div>
      <div class="sph-meter" id="sph-meter" hidden><span class="sph-time" id="sph-time"></span><span class="sph-ink"><i id="sph-ink"></i></span></div>
      <div class="sph-tools">
        <div class="sph-modes">
          <button type="button" data-m="move" class="on" aria-label="Turn the sphere">✋ Turn</button>
          <button type="button" data-m="draw" aria-label="Draw">✏️ Draw</button>
          ${ADMIN ? '<button type="button" data-m="erase" aria-label="Erase an area and ban its authors">🧹 Erase</button>' : ''}
        </div>
        <div class="sph-w">${WIDTHS.map((w, i) => `<button type="button" data-w="${i}" aria-label="Brush ${i + 1}"><i style="width:${3 + i * 3}px;height:${3 + i * 3}px"></i></button>`).join('')}</div>
      </div>
      <div class="sph-pal">${COLORS.map((c, i) => `<button type="button" data-c="${i}" style="--c:${c}" aria-label="Color ${i + 1}"></button>`).join('')}</div>
    </div>`;
  const $ = s => ov.querySelector(s);
  const esc = x => String(x).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  function fmt(ms) { ms = Math.max(0, ms); const h = Math.floor(ms / 3600e3), m = Math.floor(ms % 3600e3 / 60e3), s = Math.floor(ms % 60e3 / 1000); return h ? `${h}h ${m}m` : `${m}:${String(s).padStart(2, '0')}`; }
  function ui() {
    if (!open) return;
    $('#sph-n').textContent = ws && ws.readyState === 1 ? `LIVE · ${online} watching · ${drawingNow} drawing` : 'connecting…';
    const msg = $('#sph-msg'), meter = $('#sph-meter'); let t = '';
    const st = me ? me.state : null;
    if (!st) t = 'Connecting to the Sphere…';
    else if (st === 'new') t = pen.mode === 'draw' ? 'Draw anywhere. Your 7 minutes start with your first stroke.' : 'You have <b>1 drawing</b> today: 7 minutes, it stays 24 h. Tap ✏️ Draw.';
    else if (st === 'active') t = pen.mode === 'draw' ? 'Drawing… two fingers to turn and zoom.' : 'Tap ✏️ Draw to keep drawing.';
    else if (st === 'done' || st === 'inkout') t = `Your drawing is on the Sphere ✨ Next one in <b>${fmt(me.next || (LIFE - (me.draw || 0)))}</b>.`;
    else if (st === 'banned') t = 'You can\'t draw on the Sphere right now.';
    else if (st === 'ipfull') t = 'Too many drawings from this connection today. Try tomorrow!';
    else if (st === 'verify' || st === 'notfollower') {
      const head = st === 'verify' ? '<b>Followers only.</b> Follow @onecommentworld, then send this code in DM to unlock your drawing:'
        : `<b>${esc(me.user || '')}</b>, you don't follow @onecommentworld yet. Follow, then send a new code:`;
      t = `${head}<div class="sph-code">${myCode && st === 'verify' ? `<b class="sph-c-txt">${esc(myCode)}</b><button type="button" data-a="copy">Copy</button><a href="https://ig.me/m/onecommentworld" target="_blank" rel="noopener" data-a="dm">Open DM</a>`
        : '<button type="button" data-a="code">Get my code</button>'}</div>` + (myCode && st === 'verify' ? '<small>It unlocks here by itself a few seconds after you send it.</small>' : '');
    }
    if (st !== 'verify' && st !== 'notfollower' && me && me.user) t += ` <small class="sph-who">Drawing as <b>${esc(me.user)}</b></small>`;
    if (msg.dataset.t !== t) { msg.innerHTML = t; msg.dataset.t = t; }
    meter.hidden = st !== 'active' && st !== 'new';
    if (!meter.hidden) {
      const left = st === 'active' ? me.left - (Date.now() - meAt) : me.draw;
      $('#sph-time').textContent = '⏱ ' + fmt(left);
      $('#sph-ink').style.width = Math.max(0, 100 - (inkUsed() / (me.ink || 12000)) * 100) + '%';
      if (st === 'active' && left <= 0) { me.state = 'done'; me.next = LIFE - me.draw; pen.mode = 'move'; }
    }
    const canDraw = st === 'new' || st === 'active';
    ov.querySelector('[data-m="draw"]').disabled = !canDraw;
    ov.querySelectorAll('.sph-modes button').forEach(b => b.classList.toggle('on', b.dataset.m === pen.mode));
    ov.querySelectorAll('.sph-pal button').forEach(b => b.classList.toggle('on', +b.dataset.c === pen.c));
    ov.querySelectorAll('.sph-w button').forEach(b => b.classList.toggle('on', +b.dataset.w === pen.w));
    ov.classList.toggle('drawing', pen.mode !== 'move');
  }
  setInterval(() => { if (open) ui(); }, 500);
  let localInk = 0;
  const inkUsed = () => Math.max(localInk, me ? me.used || 0 : 0);

  // send only the changed rectangle to the GPU (a full 4096 x 2048 upload is what made drawing lag)
  function upload(v, tx) {
    const now = performance.now(), gl = v.renderer.getContext(), P = v.renderer.properties.get(tx);
    if (fullDirty || !P.__webglTexture) {
      if (now - (v.up || 0) < 400 && P.__webglTexture) return;      // full redraws are rare (fading, deletes): at most every 0.4 s
      tx.needsUpdate = true; fullDirty = false; dirtyR = null; v.up = now; v.mip = false; return;
    }
    if (dirtyR) {
      const x0 = Math.max(0, Math.floor(dirtyR[0])), y0 = Math.max(0, Math.floor(dirtyR[1])), x1 = Math.min(TW, Math.ceil(dirtyR[2])), y1 = Math.min(TH, Math.ceil(dirtyR[3]));
      dirtyR = null;
      if (x1 > x0 && y1 > y0) {
        const img = g.getImageData(x0, y0, x1 - x0, y1 - y0);
        v.renderer.state.activeTexture(gl.TEXTURE0); v.renderer.state.bindTexture(gl.TEXTURE_2D, P.__webglTexture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true); gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false); gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
        gl.texSubImage2D(gl.TEXTURE_2D, 0, x0, TH - y1, gl.RGBA, gl.UNSIGNED_BYTE, img);
        v.mip = true;
      }
    }
    if (v.mip && now - (v.mipAt || 0) > 250) {                         // smaller copies for when you zoom out, refreshed 4 times a second
      v.renderer.state.activeTexture(gl.TEXTURE0); v.renderer.state.bindTexture(gl.TEXTURE_2D, P.__webglTexture);
      gl.generateMipmap(gl.TEXTURE_2D); v.mip = false; v.mipAt = now;
    }
  }
  function makeView() {
    const THREE = site.api.THREE, cv = $('.sph-c');
    const renderer = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, devicePixelRatio || 1));
    const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    const tx = new THREE.CanvasTexture(tex); tx.colorSpace = THREE.SRGBColorSpace; tx.anisotropy = renderer.capabilities.getMaxAnisotropy(); textures.push(tx);
    const sph = new THREE.Mesh(new THREE.SphereGeometry(1, 128, 64), new THREE.MeshBasicMaterial({ map: tx }));
    const glow = new THREE.Mesh(new THREE.SphereGeometry(1.06, 48, 24), new THREE.MeshBasicMaterial({ color: 0x38c6ff, transparent: true, opacity: .08, side: THREE.BackSide }));
    scene.add(sph, glow);
    const v = { renderer, scene, cam, sph, yaw: 0, pitch: 0.3, z: 1, ray: new THREE.Raycaster(), THREE, ball: new THREE.Sphere(new THREE.Vector3(), 1), tmp: new THREE.Vector3(), inv: new THREE.Matrix4() };   // z: 1 = whole sphere, small = close up
    v.size = () => { const r = cv.parentElement.getBoundingClientRect(); renderer.setSize(r.width, r.height, false); cam.aspect = r.width / r.height; cam.updateProjectionMatrix(); v.W = r.width; v.H = r.height; };
    v.frame = () => {
      if (!open) return;
      sph.rotation.set(v.pitch, v.yaw, 0, 'XYZ');
      const half = Math.min(17.5, Math.atan(Math.tan(17.5 * Math.PI / 180) * v.W / v.H) * 180 / Math.PI) * Math.PI / 180;
      const fit = 1.1 / Math.sin(half);                      // distance that shows the whole sphere
      cam.position.set(0, 0, 1 + (fit - 1) * v.z); cam.near = 0.01; cam.updateProjectionMatrix(); cam.lookAt(0, 0, 0);
      upload(v, tx);
      renderer.render(scene, cam); requestAnimationFrame(v.frame);
    };
    // screen point -> canvas units on the sphere
    v.pick = (cx, cy) => {
      const r = cv.getBoundingClientRect(), nd = new THREE.Vector2((cx - r.left) / r.width * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
      // ray / unit sphere, no mesh raycast: cheap on every finger move
      v.ray.setFromCamera(nd, cam); const hit = v.ray.ray.intersectSphere(v.ball, v.tmp); if (!hit) return null;
      sph.updateMatrixWorld(); v.inv.copy(sph.matrixWorld).invert(); const q = hit.applyMatrix4(v.inv);
      let phi = Math.atan2(q.z, -q.x); if (phi < 0) phi += Math.PI * 2;
      const u = phi / (Math.PI * 2), y = Math.round(Math.acos(Math.max(-1, Math.min(1, q.y))) / Math.PI * H);
      if (y >= NOD - 2) return null;
      return { x: Math.max(0, Math.min(W - 1, Math.round(u * W))), y: Math.max(0, y) };
    };
    addEventListener('resize', () => open && v.size());
    return v;
  }

  // input: one finger draws (in Draw) or turns (in Turn); two fingers always turn + zoom
  const ptrs = new Map(); let gest = null, cur = null, keyN = 0, outBuf = [], lastSend = 0, erase0 = null;
  function startStroke() { cur = { k: (Date.now() % 1e7).toString(36) + (keyN++), c: pen.c, w: pen.w, last: null, id: 'l' + keyN }; }
  function pushPt(p) {
    if (!cur) startStroke();
    if (cur.last) {
      if (Math.abs(p.x - cur.last.x) > W / 2) { endStroke(); startStroke(); }        // crossed the seam
      else { const d = Math.hypot(p.x - cur.last.x, p.y - cur.last.y); if (d < 3) return; if (inkUsed() + d > (me && me.ink || 12000)) { endStroke(); return; } localInk += d; }
    }
    cur.last = p; outBuf.push(p.x, p.y);
    addPts(cur.id, cur.c, cur.w, [p.x, p.y]);                                          // see it at once
    if (me && me.state === 'new') { me.state = 'active'; me.left = me.draw; meAt = Date.now(); }
    flush(false);
  }
  function flush(force) {
    if (!cur || !outBuf.length) return; const now = performance.now();
    if (!force && now - lastSend < 110) { setTimeout(() => flush(true), 120); return; }
    send({ t: 'p', k: cur.k, c: cur.c, w: cur.w, p: outBuf }); outBuf = []; lastSend = now;
  }
  function endStroke() { if (!cur) return; flush(true); send({ t: 'e', k: cur.k }); cur = null; }
  function bindInput() {
    const cv = $('.sph-c');
    cv.addEventListener('pointerdown', e => {
      cv.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (ptrs.size === 2) { endStroke(); const [a, b] = [...ptrs.values()]; gest = { d: Math.hypot(a.x - b.x, a.y - b.y), z: view.z, mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 }; return; }
      if (pen.mode === 'draw') { const p = view.pick(e.clientX, e.clientY); if (p) { startStroke(); pushPt(p); } }
      else if (pen.mode === 'erase') { erase0 = view.pick(e.clientX, e.clientY); erase0 && (erase0.sx = e.clientX, erase0.sy = e.clientY); }
    });
    cv.addEventListener('pointermove', e => {
      const prev = ptrs.get(e.pointerId); if (!prev) return;
      const p = { x: e.clientX, y: e.clientY }; ptrs.set(e.pointerId, p);
      const k = 2.6 / Math.min(view.W, view.H) * Math.max(0.05, view.z);
      if (ptrs.size === 2 && gest) {
        const [a, b] = [...ptrs.values()], d = Math.hypot(a.x - b.x, a.y - b.y), mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        view.z = Math.max(0.03, Math.min(1, gest.z * gest.d / Math.max(20, d)));
        view.yaw += (mx - gest.mx) * k * 1.6; view.pitch = Math.max(-1.2, Math.min(1.2, view.pitch + (my - gest.my) * k * 1.6)); gest.mx = mx; gest.my = my; return;
      }
      if (pen.mode === 'draw' && cur) { const q = view.pick(e.clientX, e.clientY); if (q) pushPt(q); return; }
      if (pen.mode === 'erase' && erase0) { const r = $('.sph-rect'); r.hidden = false; Object.assign(r.style, { left: Math.min(erase0.sx, p.x) + 'px', top: Math.min(erase0.sy, p.y) + 'px', width: Math.abs(p.x - erase0.sx) + 'px', height: Math.abs(p.y - erase0.sy) + 'px' }); return; }
      if (pen.mode === 'move') { view.yaw += (p.x - prev.x) * k * 1.6; view.pitch = Math.max(-1.2, Math.min(1.2, view.pitch + (p.y - prev.y) * k * 1.6)); }
    });
    const up = e => {
      ptrs.delete(e.pointerId); if (ptrs.size < 2) gest = null;
      if (cur && !ptrs.size) endStroke();
      if (pen.mode === 'erase' && erase0) {
        const q = view.pick(e.clientX, e.clientY); $('.sph-rect').hidden = true;
        if (q && confirm('Erase every drawing that touches this area and ban its authors for 7 days?')) {
          fetch(`${SERVER}/admin/erase?key=${encodeURIComponent(ADMIN)}&ban=1&x0=${Math.min(erase0.x, q.x)}&y0=${Math.min(erase0.y, q.y)}&x1=${Math.max(erase0.x, q.x)}&y1=${Math.max(erase0.y, q.y)}`, { method: 'POST' })
            .then(r => r.json()).then(j => toast(j.ok ? `Erased ${j.deleted} strokes, ${j.authors} banned.` : 'Wrong admin key.'));
        }
        erase0 = null;
      }
    };
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
    cv.addEventListener('wheel', e => { e.preventDefault(); view.z = Math.max(0.03, Math.min(1, view.z * Math.exp(e.deltaY * 0.0015))); }, { passive: false });
    ov.querySelectorAll('.sph-modes button').forEach(b => b.onclick = () => { pen.mode = b.dataset.m; if (pen.mode === 'draw' && view.z > 0.5) view.z = 0.4; ui(); });
    ov.querySelectorAll('.sph-pal button').forEach(b => b.onclick = () => { pen.c = +b.dataset.c; if (pen.mode === 'move' && !$('[data-m="draw"]').disabled) { pen.mode = 'draw'; if (view.z > 0.5) view.z = 0.4; } ui(); });
    ov.querySelectorAll('.sph-w button').forEach(b => b.onclick = () => { pen.w = +b.dataset.w; ui(); });
    $('#sph-msg').addEventListener('click', e => {
      const a = e.target.closest('[data-a]'); if (!a) return;
      if (a.dataset.a === 'code') { if (me && me.state === 'notfollower') me.state = 'verify'; myCode = null; send({ t: 'code' }); ui(); }
      if (a.dataset.a === 'copy') { try { navigator.clipboard.writeText(myCode).then(() => toast('Code copied. Paste it in DM to @onecommentworld.'), () => toast('Copy didn\'t work here: type ' + myCode)); } catch (x) { toast('Type ' + myCode + ' in DM'); } }
      if (a.dataset.a === 'dm' && DEMO && ws && ws.verify) ws.verify();
    });
    $('.sph-x').onclick = closeSphere;
    addEventListener('keydown', e => { if (open && e.key === 'Escape') closeSphere(); });
  }
  function openSphere() {
    if (!site || !site.api) return;
    if (!view) { view = makeView(); bindInput(); }
    open = true; ov.hidden = false; document.body.classList.add('sph-open');
    want(true); view.size(); ui(); requestAnimationFrame(view.frame);
    try { history.replaceState(null, '', location.pathname + location.search + '#sphere'); } catch (e) { }
  }
  function closeSphere() {
    endStroke(); open = false; ov.hidden = true; document.body.classList.remove('sph-open'); mapDirty = true;
    if (site && site.api) { const v = site.api.view; site.go(v.x, v.y, v.h); }
    try { if (location.hash === '#sphere') history.replaceState(null, '', location.pathname + location.search); } catch (e) { }
  }
  window.OCW_SPHERE = { open: openSphere, close: closeSphere, fly: flyToSphere, get pos() { return pos; }, get host() { return host; }, get strokes() { return strokes; }, view: () => view };

  // ---- start when the map is ready ----
  const boot = setInterval(() => {
    site = window.OCW_SITE; if (!site || !site.api || !window.OCW_SITE_X) return;
    clearInterval(boot);
    if (!placeOnMap()) return;
    document.getElementById('app').appendChild(ov);
    (document.getElementById('labels') || document.body).appendChild(badge);
    addButton();
    if (location.hash === '#sphere') flyToSphere(true);
    const v = site.api.view; site.go(v.x, v.y, v.h);
  }, 300);
})();
