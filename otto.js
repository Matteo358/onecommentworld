// One Comment World – "Find Otto" (nascondino sulla mappa). Otto col palloncino giallo è nascosto in un giardino di una città.
// Dove sta è cifrato in hide.json (AES-GCM, chiave PBKDF2 dal nome della città): il sito lo prova solo per le città che guardi da vicino.
// Lo trovi zoomando fino a lui: si apre la scheda col codice da mandare in DM. Crea un round: hide/crea_otto.py (project files).
(() => {
  const S = window.OCW_SITE; if (!S) return;
  let H = null, found = null, tried = new Map(), mesh = null, shown = false, t0 = performance.now();
  const hexB = h => new Uint8Array(h.match(/../g).map(x => parseInt(x, 16)));
  const norm = s => String(s).toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
  async function dec(b, secret) {
    try {
      const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), 'PBKDF2', false, ['deriveKey']);
      const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt: hexB(b.salt), iterations: H.iter, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
      return JSON.parse(new TextDecoder().decode(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: hexB(b.iv) }, key, hexB(b.ct))));
    } catch (e) { return null; }
  }
  function build(api, V, d) {   // Otto: tuta arancione, berretto rosso, palloncino giallo che ondeggia (si vede da lontano)
    const T = api.THREE, g = new T.Group(), M = c => new T.MeshLambertMaterial({ color: c });
    const box = (w, h, dd, c, x, y, z) => { const m = new T.Mesh(new T.BoxGeometry(w, h, dd), M(c)); m.position.set(x, y, z); m.castShadow = true; g.add(m); return m; };
    const S2 = 1.5;
    box(0.35 * S2, 0.9 * S2, 0.35 * S2, '#2f4f8f', -0.22 * S2, 0.45 * S2, 0); box(0.35 * S2, 0.9 * S2, 0.35 * S2, '#2f4f8f', 0.22 * S2, 0.45 * S2, 0);
    box(0.9 * S2, 0.95 * S2, 0.5 * S2, '#ff7a1a', 0, 1.37 * S2, 0);
    const head = new T.Mesh(new T.SphereGeometry(0.33 * S2, 10, 8), M('#f2c7a5')); head.position.set(0, 2.1 * S2, 0); g.add(head);
    box(0.72 * S2, 0.22 * S2, 0.72 * S2, '#e8323c', 0, 2.42 * S2, 0); box(0.5 * S2, 0.08 * S2, 0.4 * S2, '#e8323c', 0, 2.33 * S2, -0.45 * S2);
    box(0.2 * S2, 0.8 * S2, 0.2 * S2, '#ff7a1a', 0.58 * S2, 1.75 * S2, 0);   // braccio alzato che tiene il filo
    const bal = new T.Group(); bal.position.set(0.6 * S2, 0, 0); g.add(bal);
    const str = new T.Mesh(new T.CylinderGeometry(0.03, 0.03, 6.5, 4), M('#555555')); str.position.set(0, 2.2 * S2 + 3.25, 0); bal.add(str);
    const b = new T.Mesh(new T.SphereGeometry(1.6, 14, 12), new T.MeshLambertMaterial({ color: '#ffd23f', emissive: '#6b4f00' })); b.scale.set(1, 1.2, 1); b.position.set(0, 2.2 * S2 + 6.5 + 1.6, 0); b.castShadow = true; bal.add(b);
    g.traverse(o => { if (o.isMesh) o.renderOrder = 11; });   // dopo terreno e prati (disegnati senza depth test)
    g.position.set(d.x, 0, d.z); g.rotation.y = d.ry || 0; g.userData.bal = bal;
    V.grp.add(g); return g;
  }
  function card(d) {
    if (shown) return; shown = true;
    const el = document.createElement('div'); el.className = 'otto-card';
    el.innerHTML = `<div class="otto-in"><div class="otto-ico">🎈</div><div class="otto-eye">Find Otto #${H.n} · ${d.city}</div>
      <h2>You found Otto!</h2><p>Your secret code:</p><div class="otto-code">${d.code}</div>
      <ol><li><b>Screenshot this</b> and copy the code.</li><li><b>Send it in DM</b> to @onecommentworld.</li><li>${H.prize || 'The first follower who sends it wins the <b>Otto Hunter 🎈</b> badge on their house, forever.'}</li></ol>
      <div class="otto-b"><button class="otto-copy">Copy code</button><a href="https://ig.me/m/onecommentworld" target="_blank" rel="noopener">Open the DM</a></div>
      <p class="otto-h">You must follow @onecommentworld and have a house on the map. Shhh: don't post where he is 🤫</p><button class="otto-x" aria-label="Close">×</button></div>`;
    document.body.appendChild(el);
    el.querySelector('.otto-x').onclick = () => el.remove();
    el.querySelector('.otto-copy').onclick = () => { try { navigator.clipboard.writeText(d.code); el.querySelector('.otto-copy').textContent = 'Copied ✓'; } catch (e) {} };
    try { localStorage.setItem('ocw-otto' + H.n, '1'); } catch (e) {}
  }
  function banner() {   // pulsante "Find Otto" sulla mappa con l'indizio del sito
    const b = document.createElement('button'); b.className = 'otto-btn'; b.innerHTML = '🎈 Find Otto';
    b.onclick = () => {
      const el = document.createElement('div'); el.className = 'otto-card';
      const w = (H.winners || []).map(x => `<span>🎈 ${x.user}</span>`).join(' ');
      el.innerHTML = `<div class="otto-in"><div class="otto-ico">🎈</div><div class="otto-eye">Find Otto #${H.n}</div><h2>Otto is lost somewhere on this map</h2>
        <p>He's standing in someone's garden, holding a yellow balloon. Watch the <b>@onecommentworld</b> reels for clues, fly to the right city and <b>zoom in until you see him</b>.</p>
        ${H.clue ? `<p class="otto-clue">Clue on the site: “${H.clue}”</p>` : ''}
        <p>${H.prize || 'First follower to find him and DM the secret code wins the <b>Otto Hunter 🎈</b> badge.'}</p>
        ${w ? `<p class="otto-h">Found by: ${w}</p>` : ''}<button class="otto-x" aria-label="Close">×</button></div>`;
      document.body.appendChild(el); el.querySelector('.otto-x').onclick = () => el.remove();
    };
    document.body.appendChild(b);
  }
  function tick() {
    const api = S.api; if (!api || !H) return;
    const v = api.view, now = performance.now();
    if (!found) {   // la città più vicina al centro della vista: prova la chiave (una volta sola per città)
      let best = null, bd = 1e9;
      for (const V of api.villages) { const dx = V.v.cx - v.x, dy = V.v.cy - v.y, dd = dx * dx + dy * dy; if (dd < bd) { bd = dd; best = V; } }
      if (best && v.h < 3 * best.v.k && Math.sqrt(bd) < 1.5 * best.v.k) {
        const nm = norm(best.v.name);
        if (!tried.has(nm)) { tried.set(nm, 1); dec(H, nm).then(d => { if (d) { found = { ...d, V: best }; } }); }
      }
    }
    if (found && !mesh && found.V.grp) { mesh = build(api, found.V, found); }
    if (mesh) {
      const bl = mesh.userData.bal; bl.rotation.z = Math.sin((now - t0) / 700) * 0.12; bl.rotation.x = Math.sin((now - t0) / 1100) * 0.08;
      const vv = found.V.v, wx = vv.cx + found.x / 1000 * vv.k, wy = vv.cy - found.z / 1000 * vv.k;
      if (v.h < 0.32 * vv.k && found.V.grp.visible) {
        const [sx, sy, z] = api.project(wx, wy, 0.002 * vv.k), r = api.renderer.domElement.getBoundingClientRect();
        if (z < 1 && Math.abs(sx - r.width / 2) < r.width * 0.3 && Math.abs(sy - r.height / 2) < r.height * 0.3) card(found);
      }
      S.redraw && S.redraw();
    }
  }
  async function start() {
    if (!S.api) return setTimeout(start, 800);
    try { H = window.OCW_HIDE || await (await fetch('hide.json?t=' + Math.floor(Date.now() / 6e5), { cache: 'no-store' })).json(); } catch (e) { H = null; }
    if (!H || !H.ct || H.closed) return;
    banner(); setInterval(tick, 250);
  }
  const css = document.createElement('style'); css.textContent = `
  .otto-btn{position:fixed;left:24px;bottom:300px;z-index:30;font:400 17px/1 "Lilita One",system-ui,sans-serif;background:#ffd23f;color:#2a2100;border:3px solid #10232b;border-radius:14px;padding:10px 14px;box-shadow:0 3px 0 #10232b;cursor:pointer}
  .otto-card{position:fixed;inset:0;z-index:60;background:rgba(8,20,26,.55);display:flex;align-items:center;justify-content:center;padding:16px}
  .otto-in{position:relative;max-width:380px;width:100%;background:#13262f;color:#f3f7f4;border-radius:18px;padding:20px 18px;font:15px/1.4 Figtree,system-ui,sans-serif;box-shadow:0 10px 40px rgba(0,0,0,.4)}
  .otto-in h2{font:400 26px/1.1 "Lilita One",system-ui,sans-serif;margin:4px 0 8px}.otto-ico{font-size:40px}.otto-eye{color:#ffcf3f;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em}
  .otto-code{font:400 26px/1 "Lilita One",monospace;background:#ffcf3f;color:#2a2100;border-radius:10px;padding:10px;text-align:center;margin:6px 0 10px;user-select:all}
  .otto-in ol{padding-left:18px;margin:6px 0}.otto-b{display:flex;gap:8px;margin-top:10px}.otto-b>*{flex:1;text-align:center;padding:10px;border-radius:10px;font-weight:800;border:0;cursor:pointer;text-decoration:none}
  .otto-copy{background:#ffcf3f;color:#2a2100}.otto-b a{background:#1b3440;color:#f3f7f4}.otto-h{color:#b9c9cf;font-size:12.5px}.otto-clue{background:#1b3440;border-radius:10px;padding:8px 10px;font-style:italic}
  .otto-x{position:absolute;top:8px;right:10px;background:none;border:0;color:#b9c9cf;font-size:26px;cursor:pointer}
  @media (max-width:700px){.otto-btn{left:12px;bottom:auto;top:84px;font-size:15px;padding:8px 11px}}`;
  document.head.appendChild(css);
  start();
})();
