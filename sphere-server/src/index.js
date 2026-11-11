// The Sphere: live drawing server for One Comment World (Cloudflare Worker + one Durable Object).
// Rules: a drawing lives 24 h, one drawing per person every 24 h, 7 minutes to draw it (from the first stroke).
// Canvas = the whole sphere, equirectangular W x H (x = longitude, y = latitude), integer points.
//
// HTTP  GET  /state                     -> gzip binary with every live stroke (see encodeState)
//       GET  /ws                        -> WebSocket (live strokes)
//       POST /admin/erase?key=..&x0..y1&ban=1  -> delete strokes touching a rectangle (+ ban their authors 7 days)
//       POST /admin/wipe?key=..         -> delete everything
// WS  C->S {t:"hello",dev}  {t:"p",k,c,w,p:[x,y,...]}  {t:"e",k}
//     S->C {t:"me",...}  {t:"b",n,d,dr:[[id,c,w,[pts]]...]}  {t:"del",ids}  {t:"wipe"}  {t:"no",why}

const W = 4096, H = 2048, NOD = Math.round(H * 125 / 180);   // below NOD (35°S, the bottom of the sphere) nobody can draw
const LIFE = 24 * 3600e3, DRAW = 7 * 60e3, GRACE = 8e3, BAN = 7 * 24 * 3600e3;
const PER_IP_DEFAULT = 3;                 // drawings per IP per 24 h (several phones can share one mobile IP)
const MAX_PTS_MSG = 240, MAX_PTS_S = 90, COLORS = 16, WIDTHS = 3;
const INK = 12000;                // total stroke length per drawing (canvas units, the sphere is 4096 around): generous, but nobody covers more than ~1%
const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS' };

export default {
  async fetch(req, env) {
    if (req.method === 'OPTIONS') return new Response(null, { headers: CORS });
    const id = env.SPHERE.idFromName('world');
    return env.SPHERE.get(id).fetch(req);
  },
};

const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'content-type': 'application/json', ...CORS } });

export class Sphere {
  constructor(state, env) {
    this.state = state; this.env = env; this.sql = state.storage.sql;
    this.sql.exec(`CREATE TABLE IF NOT EXISTS strokes(id INTEGER PRIMARY KEY, dev TEXT, t INTEGER, c INTEGER, w INTEGER, pts BLOB);
      CREATE TABLE IF NOT EXISTS sessions(dev TEXT PRIMARY KEY, ip TEXT, start INTEGER, ink REAL DEFAULT 0);
      CREATE TABLE IF NOT EXISTS bans(who TEXT PRIMARY KEY, until INTEGER);
      CREATE TABLE IF NOT EXISTS meta(k TEXT PRIMARY KEY, v INTEGER);`);
    this.strokes = null;          // id -> {id,dev,t,c,w,pts:number[],dirty}
    this.out = []; this.outDel = []; this.timer = null; this.ink = new Map();   // dev -> {v, dirty}
  }
  load() {
    if (this.strokes) return;
    this.strokes = new Map();
    const now = Date.now();
    this.sql.exec('DELETE FROM strokes WHERE t < ?', now - LIFE);
    for (const r of this.sql.exec('SELECT id,dev,t,c,w,pts FROM strokes ORDER BY id')) {
      this.strokes.set(r.id, { id: r.id, dev: r.dev, t: r.t, c: r.c, w: r.w, pts: Array.from(new Uint16Array(r.pts)), dirty: false });
    }
    const m = [...this.sql.exec("SELECT v FROM meta WHERE k='next'")][0];
    this.next = m ? m.v : 1;
  }
  prune() {
    const old = Date.now() - LIFE, ids = [];
    for (const s of this.strokes.values()) if (s.t < old) { ids.push(s.id); this.strokes.delete(s.id); }
    if (ids.length) this.sql.exec('DELETE FROM strokes WHERE t < ?', old);
    this.sql.exec('DELETE FROM sessions WHERE start < ?', Date.now() - LIFE);
    this.sql.exec('DELETE FROM bans WHERE until < ?', Date.now());
  }
  flush() {
    let n = 0;
    for (const s of this.strokes.values()) if (s.dirty) {
      this.sql.exec('INSERT OR REPLACE INTO strokes(id,dev,t,c,w,pts) VALUES(?,?,?,?,?,?)', s.id, s.dev, s.t, s.c, s.w, new Uint16Array(s.pts).buffer);
      s.dirty = false; n++;
    }
    if (n) this.sql.exec("INSERT OR REPLACE INTO meta(k,v) VALUES('next',?)", this.next);
    for (const [d, o] of this.ink) if (o.dirty) { this.sql.exec('UPDATE sessions SET ink=? WHERE dev=?', o.v, d); o.dirty = false; }
  }
  async alarm() { this.load(); this.flush(); this.prune(); }

  async fetch(req) {
    this.load();
    const url = new URL(req.url), ip = req.headers.get('CF-Connecting-IP') || 'local';
    if (url.pathname === '/ws') {
      if (req.headers.get('Upgrade') !== 'websocket') return new Response('expected websocket', { status: 426 });
      const pair = new WebSocketPair();
      this.state.acceptWebSocket(pair[1]);
      pair[1].serializeAttachment({ ip, dev: null, keys: {}, budget: MAX_PTS_S * 2, at: Date.now() });
      return new Response(null, { status: 101, webSocket: pair[0] });
    }
    if (url.pathname === '/state') {
      this.prune();
      const gz = new Blob([this.encodeState()]).stream().pipeThrough(new CompressionStream('gzip'));
      return new Response(gz, { headers: { 'content-type': 'application/octet-stream', 'cache-control': 'no-store', ...CORS } });
    }
    if (url.pathname.startsWith('/admin/')) {
      if (req.method !== 'POST' || !this.env.ADMIN_KEY || url.searchParams.get('key') !== this.env.ADMIN_KEY) return json({ ok: false }, 403);
      if (url.pathname === '/admin/wipe') {
        this.strokes.clear(); this.sql.exec('DELETE FROM strokes'); this.send({ t: 'wipe' }); return json({ ok: true });
      }
      if (url.pathname === '/admin/erase') {
        const q = k => +url.searchParams.get(k);
        const [x0, y0, x1, y1] = [q('x0'), q('y0'), q('x1'), q('y1')], ids = [], devs = new Set();
        for (const s of this.strokes.values()) {
          for (let i = 0; i < s.pts.length; i += 2) if (s.pts[i] >= x0 && s.pts[i] <= x1 && s.pts[i + 1] >= y0 && s.pts[i + 1] <= y1) { ids.push(s.id); devs.add(s.dev); break; }
        }
        if (url.searchParams.get('ban') === '1') {
          // the whole drawing of each author goes, and they can't draw for 7 days (device + IP)
          for (const s of this.strokes.values()) if (devs.has(s.dev) && !ids.includes(s.id)) ids.push(s.id);
          for (const d of devs) {
            this.sql.exec('INSERT OR REPLACE INTO bans(who,until) VALUES(?,?)', 'd:' + d, Date.now() + BAN);
            const r = [...this.sql.exec('SELECT ip FROM sessions WHERE dev=?', d)][0];
            if (r) this.sql.exec('INSERT OR REPLACE INTO bans(who,until) VALUES(?,?)', 'i:' + r.ip, Date.now() + BAN);
          }
        }
        for (const id of ids) { this.strokes.delete(id); this.sql.exec('DELETE FROM strokes WHERE id=?', id); }
        this.outDel.push(...ids); this.schedule();
        return json({ ok: true, deleted: ids.length, authors: devs.size });
      }
    }
    return json({ ok: true, name: 'The Sphere', strokes: this.strokes.size });
  }

  encodeState() {
    // u32 now/1000, u32 count, then per stroke: u32 id, u32 ageSec, u8 c, u8 w, u16 npts, npts*(u16 x, u16 y)
    const now = Date.now(); let size = 8;
    for (const s of this.strokes.values()) size += 12 + s.pts.length * 2;
    const b = new ArrayBuffer(size), v = new DataView(b); let o = 0;
    v.setUint32(o, Math.floor(now / 1000), true); o += 4; v.setUint32(o, this.strokes.size, true); o += 4;
    for (const s of this.strokes.values()) {
      v.setUint32(o, s.id, true); v.setUint32(o + 4, Math.max(0, Math.floor((now - s.t) / 1000)), true);
      v.setUint8(o + 8, s.c); v.setUint8(o + 9, s.w); v.setUint16(o + 10, s.pts.length / 2, true); o += 12;
      for (const p of s.pts) { v.setUint16(o, p, true); o += 2; }
    }
    return b;
  }

  session(dev) { return [...this.sql.exec('SELECT ip,start,ink FROM sessions WHERE dev=?', dev)][0]; }
  inkOf(dev) { let o = this.ink.get(dev); if (!o) { const s = this.session(dev); o = { v: s ? s.ink : 0, dirty: false }; this.ink.set(dev, o); } return o; }
  banned(dev, ip) {
    const r = [...this.sql.exec('SELECT 1 FROM bans WHERE (who=? OR who=?) AND until>?', 'd:' + dev, 'i:' + ip, Date.now())];
    return r.length > 0;
  }
  me(ws, a, quiet) {
    const now = Date.now(), s = this.session(a.dev);
    const m = { t: 'me', draw: DRAW, life: LIFE, ink: INK, used: s ? this.inkOf(a.dev).v : 0 };
    if (this.banned(a.dev, a.ip)) m.state = 'banned';
    else if (!s) m.state = [...this.sql.exec('SELECT COUNT(*) n FROM sessions WHERE ip=? AND start>?', a.ip, now - LIFE)][0].n >= (+this.env.PER_IP || PER_IP_DEFAULT) ? 'ipfull' : 'new';
    else if (now < s.start + DRAW && this.inkOf(a.dev).v < INK) { m.state = 'active'; m.left = s.start + DRAW - now; }
    else { m.state = 'done'; m.next = s.start + LIFE - now; }
    if (!quiet) ws.send(JSON.stringify(m));
    return m.state;
  }

  async webSocketMessage(ws, raw) {
    this.load();
    let m; try { m = JSON.parse(raw); } catch { return; }
    const a = ws.deserializeAttachment(), now = Date.now();
    if (m.t === 'hello') {
      a.dev = String(m.dev || '').replace(/[^a-z0-9]/gi, '').slice(0, 40) || null;
      ws.serializeAttachment(a); if (a.dev) this.me(ws, a);
      ws.send(JSON.stringify({ t: 'b', n: this.state.getWebSockets().length, d: this.drawingNow(), dr: [] }));
      return;
    }
    if (!a.dev) return;
    if (m.t === 'p') {
      // session: the first point starts the 7 minutes
      let s = this.session(a.dev);
      if (!s) {
        const st = this.me(ws, a, true); if (st !== 'new') { this.me(ws, a); return; }
        this.sql.exec('INSERT INTO sessions(dev,ip,start) VALUES(?,?,?)', a.dev, a.ip, now);
        s = { ip: a.ip, start: now }; this.me(ws, a);
      }
      if (now > s.start + DRAW + GRACE || this.banned(a.dev, a.ip)) { ws.send(JSON.stringify({ t: 'no', why: 'time' })); return; }
      // rate limit: token bucket of points
      a.budget = Math.min(MAX_PTS_S * 2, a.budget + (now - a.at) / 1000 * MAX_PTS_S); a.at = now;
      let p = Array.isArray(m.p) ? m.p.slice(0, MAX_PTS_MSG * 2) : [];
      const allow = Math.floor(a.budget) * 2; if (p.length > allow) p = p.slice(0, allow);
      p = p.map((x, i) => Math.max(0, Math.min(i % 2 ? H - 1 : W - 1, x | 0)));
      if (p.length % 2) p.pop();
      { const q = []; for (let i = 0; i < p.length; i += 2) if (p[i + 1] < NOD) q.push(p[i], p[i + 1]); p = q; }
      if (!p.length) { ws.serializeAttachment(a); return; }
      a.budget -= p.length / 2;
      const k = String(m.k).slice(0, 12);
      let id = a.keys[k], st = id && this.strokes.get(id);
      if (!st) {
        if (Object.keys(a.keys).length > 4000) return;
        id = this.next++; a.keys[k] = id;
        st = { id, dev: a.dev, t: now, c: Math.abs(m.c | 0) % COLORS, w: Math.abs(m.w | 0) % WIDTHS, pts: [], dirty: true };
        this.strokes.set(id, st);
      }
      if (st.pts.length > 20000) { ws.serializeAttachment(a); return; }
      // ink: cut the points once the drawing's total length reaches INK
      const ink = this.inkOf(a.dev); let lx = st.pts[st.pts.length - 2], ly = st.pts[st.pts.length - 1], keep = 0;
      for (let i = 0; i < p.length; i += 2) {
        const d = lx === undefined ? 0 : Math.hypot(p[i] - lx, p[i + 1] - ly);
        if (ink.v + d > INK) break;
        ink.v += d; lx = p[i]; ly = p[i + 1]; keep = i + 2;
      }
      ink.dirty = true; p = p.slice(0, keep);
      if (!p.length) { ws.send(JSON.stringify({ t: 'no', why: 'ink' })); ws.serializeAttachment(a); return; }
      st.pts.push(...p); st.dirty = true; a.last = now;
      ws.serializeAttachment(a);
      this.out.push([id, st.c, st.w, p]); this.schedule();
      if (!(await this.state.storage.getAlarm())) await this.state.storage.setAlarm(now + 3000);
    }
    if (m.t === 'e') { const id = a.keys[String(m.k)]; if (id && !(await this.state.storage.getAlarm())) await this.state.storage.setAlarm(now + 1000); }
  }
  drawingNow() {
    const now = Date.now(); let n = 0;
    for (const ws of this.state.getWebSockets()) { const a = ws.deserializeAttachment(); if (a && a.last && now - a.last < 8000) n++; }
    return n;
  }
  schedule() {
    if (this.timer) return;
    this.timer = setTimeout(() => {
      this.timer = null;
      const msg = { t: 'b', n: this.state.getWebSockets().length, d: this.drawingNow(), dr: this.out };
      this.out = [];
      if (this.outDel.length) { this.send({ t: 'del', ids: this.outDel }); this.outDel = []; }
      if (msg.dr.length) this.send(msg);
    }, 100);
  }
  send(o) { const s = JSON.stringify(o); for (const ws of this.state.getWebSockets()) { try { ws.send(s); } catch { } } }
  async webSocketClose(ws) { try { ws.close(); } catch { } }
  async webSocketError(ws) { try { ws.close(); } catch { } }
}
