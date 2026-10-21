/* Sensor Graph Orbit Card v1.0.0 — MIT */
(() => {
 const TYPE = 'ha-sensor-graph-orbit-card';
 const PALETTES = ['aurora', 'ocean', 'sunset', 'lavender'];
 const COLORS = ['blue', 'cyan', 'green', 'amber', 'orange', 'red', 'purple'];
 const DEFAULTS = { title: 'Sensor history', entities: [], hours_to_show: 24, palette: 'aurora', show_readout: true, low_color: 'blue', high_color: 'orange' };
 const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
 const numeric = (v) => (typeof v === 'string' && v.trim() !== '' || typeof v === 'number') && Number.isFinite(Number(v)) ? Number(v) : null;
 const validId = (v) => typeof v === 'string' && /^sensor[.][a-z0-9_]+$/.test(v);
 const MAX_POINTS = 240;
 const STYLE = [
 ':host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color,#233044)}*{box-sizing:border-box}',
 'ha-card{display:block;container:graph/inline-size;overflow:hidden;border-radius:20px;border:1px solid var(--divider-color,#e1e7ed);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 2px 6px #14233712);--accent:#078f72;--accent2:#28b7b0}',
 '[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7}[data-palette=sunset]{--accent:#d75b43;--accent2:#e79940}[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8}',
 '.shell{padding:16px;background:radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--accent2) 8%,transparent),transparent 65%);border-top:2px solid var(--accent)}',
 'header{display:flex;align-items:center;gap:8px;margin-bottom:10px}header ha-icon{--mdc-icon-size:19px;color:var(--accent)}h2{font-size:14px;line-height:20px;margin:0;overflow-wrap:anywhere;flex:1;min-width:0}.period{font-size:10px;color:var(--secondary-text-color,#68778a);white-space:nowrap}',
 '.series{border-top:1px solid color-mix(in srgb,var(--divider-color,#e1e7ed) 65%,transparent);padding-top:8px;margin-top:8px;min-width:0}.summary{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}.info{font:inherit;background:none;border:0;color:inherit;padding:3px 0;min-width:0;max-width:100%;text-align:left;cursor:pointer;font-size:12px;line-height:18px;overflow-wrap:anywhere}.info:disabled{cursor:default}.reading{display:inline-flex;align-items:center;margin-left:auto;font-size:15px;line-height:22px;font-weight:650;overflow-wrap:anywhere;max-width:100%}.reading small{font-size:10px;font-weight:400;margin-left:3px}.chart{width:100%;height:52px;display:block;color:var(--accent)}.chart path{fill:none;stroke:currentColor;stroke-width:2;vector-effect:non-scaling-stroke;stroke-linecap:round;stroke-linejoin:round}.chart circle{fill:currentColor}.axis{display:flex;justify-content:space-between;gap:6px;font-size:9px;color:var(--secondary-text-color,#68778a);overflow-wrap:anywhere}.axis span{min-width:0}.note,.status{font-size:11px;line-height:17px;color:var(--secondary-text-color,#68778a);overflow-wrap:anywhere}.note{padding:7px 0}.status{margin-top:10px;display:flex;gap:8px;align-items:center;flex-wrap:wrap}.retry{font:inherit;cursor:pointer;border:1px solid var(--divider-color,#dce3ea);background:transparent;color:inherit;padding:5px 9px;border-radius:8px}.retry:disabled{opacity:.5;cursor:wait}button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}',
 '[data-color=blue]{color:#3886df}[data-color=cyan]{color:#159caf}[data-color=green]{color:#258a57}[data-color=amber]{color:#b8820a}[data-color=orange]{color:#d47428}[data-color=red]{color:#d45259}[data-color=purple]{color:#9a66ce}',
 '@container graph (max-width:240px){.shell{padding:12px}header{flex-wrap:wrap;gap:5px}.period{margin-left:27px}.reading{font-size:14px}.chart{height:48px}}',
 ].join('');
 function normalize(config) {
  if (!config || typeof config !== 'object' || Array.isArray(config)) throw Error('Use an object configuration.');
  if (config.entities != null && !Array.isArray(config.entities)) throw Error('entities must be a list of sensor IDs.');
  const c = { ...DEFAULTS, ...config, entities: [...(config.entities ?? [])] };
  if (c.entities.length > 6 || c.entities.some((id) => !validId(id)) || new Set(c.entities).size !== c.entities.length) throw Error('Choose up to six distinct sensor entity IDs.');
  if (typeof c.title !== 'string') throw Error('title must be text.');
  if (typeof c.hours_to_show !== 'number' || !Number.isFinite(c.hours_to_show) || c.hours_to_show < 1 || c.hours_to_show > 168) throw Error('hours_to_show must be 1–168.');
  if (!PALETTES.includes(c.palette)) throw Error('Choose an Orbit palette.');
  if (typeof c.show_readout !== 'boolean') throw Error('show_readout must be true or false.');
  for (const k of ['low_threshold', 'high_threshold']) { if (c[k] == null || c[k] === '') delete c[k]; else if (typeof c[k] !== 'number' || !Number.isFinite(c[k])) throw Error(k + ' must be a finite number.'); }
  if (c.low_threshold != null && c.high_threshold != null && c.low_threshold >= c.high_threshold) throw Error('Low threshold must be below high threshold.');
  for (const k of ['low_color', 'high_color']) if (!COLORS.includes(c[k])) throw Error('Choose a supported threshold color.');
  return c;
 }
 // Drop points, but never bridge a discarded unavailable/unknown sample.
 function bounded(points) {
  if (points.length <= MAX_POINTS) return points;
  const out = []; const step = (points.length - 1) / (MAX_POINTS - 1); let previous = -1;
  for (let i = 0; i < MAX_POINTS; i++) {
   const index = Math.round(i * step), point = points[index];
   const gap = points.slice(previous + 1, index + 1).some((p) => p.v === null);
   out.push({ ...point, breakBefore: gap }); previous = index;
  }
  return out;
 }
 function parseHistory(response, ids, start, end) {
  if (!Array.isArray(response)) throw Error('Invalid history response');
  const result = Object.fromEntries(ids.map((id) => [id, []]));
  for (const rows of response) {
   if (!Array.isArray(rows) || !rows.length) continue;
   const id = rows.find((row) => row && validId(row.entity_id))?.entity_id;
   // REST first state identifies its series; never associate by array position.
   if (!ids.includes(id)) continue;
   const points = [];
   for (const row of rows) {
    if (!row || typeof row !== 'object' || row.entity_id && row.entity_id !== id) continue;
    const stamp = row.last_changed ?? row.last_updated ?? row.lc ?? row.lu;
    const t = typeof stamp === 'number' ? stamp * 1000 : typeof stamp === 'string' ? Date.parse(stamp) : NaN;
    if (!Number.isFinite(t) || t < start || t > end) continue;
    points.push({ t, v: numeric(row.state ?? row.s) });
   }
   points.sort((a, b) => a.t - b.t);
   const unique = [...new Map(points.map((p) => [p.t, p])).values()];
   result[id] = bounded(unique);
  }
  return result;
 }
 function geometry(points, start, end) {
  const values = points.filter((p) => p.v !== null).map((p) => p.v);
  if (!values.length) return { path: '', dots: [], min: null, max: null };
  const min = Math.min(...values), max = Math.max(...values), scale = Math.max(Math.abs(min), Math.abs(max), 1);
  const low = min / scale, high = max / scale;
  const xy = (p) => [2 + Math.max(0, Math.min(1, (p.t - start) / (end - start))) * 296, high === low ? 26 : 48 - ((p.v / scale - low) / (high - low)) * 44];
  let path = '', active = false; const dots = [];
  for (const p of points) {
   if (p.v === null) { active = false; continue; }
   if (p.breakBefore) active = false;
   const [x, y] = xy(p); path += (active ? ' L' : ' M') + x.toFixed(2) + ',' + y.toFixed(2); active = true; dots.push([x.toFixed(2), y.toFixed(2)]);
  }
  return { path: path.trim(), dots, min, max };
 }
 class SensorGraphOrbitCard extends HTMLElement {
  static getStubConfig() { return { ...DEFAULTS, entities: [] }; }
  static getConfigForm() {
   const schema = [
    { name: 'title', default: DEFAULTS.title, selector: { text: {} } },
    { name: 'entities', default: [], selector: { entity: { domain: 'sensor', multiple: true } } },
    { name: 'hours_to_show', default: 24, selector: { number: { min: 1, max: 168, step: 1, mode: 'box' } } },
    { name: 'palette', default: 'aurora', selector: { select: { options: PALETTES, mode: 'dropdown' } } },
    { name: 'show_readout', default: true, selector: { boolean: {} } },
    ...['low', 'high'].flatMap((prefix) => [
     { name: prefix + '_threshold', selector: { number: { mode: 'box', step: 'any' } } },
     { name: prefix + '_color', default: DEFAULTS[prefix + '_color'], selector: { select: { options: COLORS, mode: 'dropdown' } } },
    ]),
   ];
   return { schema, computeLabel: ({ name }) => ({ title: 'Title', entities: 'Sensors (up to six, optional)', hours_to_show: 'Hours of history', palette: 'Orbit palette', show_readout: 'Show current readings', low_threshold: 'Low threshold (optional, inclusive)', high_threshold: 'High threshold (optional, inclusive)', low_color: 'Low color', high_color: 'High color' })[name], computeHelper: ({ name }) => name.includes('threshold') ? 'Compared with each current reading in its own reported unit; leave empty to disable.' : undefined, assertConfig: normalize };
  }
  constructor() {
   super(); this.attachShadow({ mode: 'open' }); this._config = SensorGraphOrbitCard.getStubConfig(); this._history = {}; this._generation = 0; this._lastAttempt = -Infinity; this._status = ''; this._signature = '';
   this.shadowRoot.addEventListener('click', (e) => {
    const target = e.composedPath().find((el) => el?.dataset?.action);
    if (!target || target.disabled) return;
    if (target.dataset.action === 'retry') { void this._fetch(true); return; }
    const id = target.dataset.entity;
    if (target.dataset.action === 'info' && this._config.entities.includes(id) && this._hass?.states?.[id]) this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: id }, bubbles: true, composed: true }));
   });
  }
  connectedCallback() { this._mounted = true; if (!this._timer) this._timer = setInterval(() => void this._fetch(), 60000); this._update(); void this._fetch(); }
  disconnectedCallback() { this._mounted = false; clearInterval(this._timer); this._timer = undefined; this._generation++; this._pending = null; this._lastAttempt = -Infinity; }
  setConfig(value) {
   const c = normalize(value); const changed = JSON.stringify([c.entities, c.hours_to_show]) !== JSON.stringify([this._config.entities, this._config.hours_to_show]); this._config = c;
   if (changed) { this._generation++; this._pending = null; this._lastAttempt = -Infinity; this._history = {}; this._status = ''; this._range = null; }
   this._signature = ''; this._update(); if (changed) void this._fetch();
  }
  set hass(value) { this._hass = value; this._update(); if (this._lastAttempt === -Infinity) void this._fetch(); }
  get hass() { return this._hass; }
  getCardSize() { return 1 + this._config.entities.length * 2; }
  getGridOptions() { return { columns: 12, min_columns: 6 }; }
  _now() { return Date.now(); }
  async _fetch(force = false) {
   if (!this._mounted || !this._hass || !this._config.entities.length || this._pending || !force && this._now() - this._lastAttempt < 60000 || force && this._now() - this._lastAttempt < 5000) return;
   const generation = this._generation, token = {}, end = this._now(), start = end - this._config.hours_to_show * 3600000, ids = [...this._config.entities];
   this._pending = token; this._lastAttempt = end; this._status = 'loading'; this._update();
   try {
    if (typeof this._hass.callApi !== 'function') throw Error('History unavailable');
    const query = 'filter_entity_id=' + encodeURIComponent(ids.join(',')) + '&end_time=' + encodeURIComponent(new Date(end).toISOString()) + '&minimal_response&no_attributes&significant_changes_only=0';
    const response = await this._hass.callApi('GET', 'history/period/' + new Date(start).toISOString() + '?' + query);
    if (generation !== this._generation || !this._mounted) return;
    this._history = parseHistory(response, ids, start, end); this._range = [start, end]; this._status = 'ready';
   } catch {
    if (generation !== this._generation || !this._mounted) return;
    this._status = 'error'; this._history = {}; this._range = null;
   } finally { if (this._pending === token) { this._pending = null; this._update(); } }
  }
  _update() {
   const states = this._config.entities.map((id) => { const s = this._hass?.states?.[id]; return [s?.state, s?.attributes?.friendly_name, s?.attributes?.unit_of_measurement]; });
   const signature = JSON.stringify([this._config, states, this._status, this._history, this._range, !!this._pending]);
   if (signature === this._signature) return; this._signature = signature; this._render();
  }
  _render() {
   const c = this._config;
   const series = c.entities.map((id) => {
    const s = this._hass?.states?.[id], name = s?.attributes?.friendly_name || id, unit = s?.attributes?.unit_of_measurement || '', value = numeric(s?.state), points = this._history[id] || [];
    const g = geometry(points, ...(this._range || [0, 1])); const color = value !== null && c.low_threshold != null && value <= c.low_threshold ? c.low_color : value !== null && c.high_threshold != null && value >= c.high_threshold ? c.high_color : '';
    const reading = value === null ? !s ? 'Entity missing' : ['unknown', 'unavailable'].includes(s.state) ? s.state === 'unknown' ? 'Unknown' : 'Unavailable' : 'Not numeric' : String(value);
    const chart = g.dots.length ? '<svg class="chart" viewBox="0 0 300 52" preserveAspectRatio="none" role="img" aria-label="' + esc(name + ' history, ' + g.dots.length + ' numeric samples') + '" data-color="' + color + '"><path d="' + g.path + '"></path>' + g.dots.map(([x, y]) => '<circle cx="' + x + '" cy="' + y + '" r="1.5"></circle>').join('') + '</svg><div class="axis"><span>' + esc(g.min + (unit ? ' ' + unit : '')) + '</span><span>' + esc(g.max + (unit ? ' ' + unit : '')) + '</span></div>' : '<div class="note">' + (this._status === 'loading' ? 'Loading history…' : this._status === 'error' ? 'History unavailable' : 'No numeric history in this period') + '</div>';
    return '<section class="series"><div class="summary"><button class="info" data-action="info" data-entity="' + esc(id) + '" aria-label="More information: ' + esc(name) + '"' + (!s ? ' disabled' : '') + '>' + esc(name) + '</button>' + (c.show_readout ? '<span class="reading" data-color="' + color + '">' + esc(reading) + (value !== null ? '<small>' + esc(unit) + '</small>' : '') + '</span>' : '') + '</div>' + chart + (g.dots.length === 1 ? '<div class="note">One recorded sample</div>' : '') + '</section>';
   }).join('');
   const message = this._status === 'error' ? 'History could not be loaded. Check Recorder, history access and your connection. Current readings remain available.' : this._status === 'loading' ? 'Loading history…' : 'Independent scales · last ' + c.hours_to_show + 'h · refresh every 60s';
   const focused = this.shadowRoot.activeElement, action = focused?.dataset?.action, entity = focused?.dataset?.entity;
   this.shadowRoot.innerHTML = '<style>' + STYLE + '</style><ha-card data-palette="' + c.palette + '"><div class="shell"><header><ha-icon icon="mdi:chart-timeline-variant"></ha-icon><h2>' + esc(c.title || 'Sensor history') + '</h2><span class="period">' + c.hours_to_show + ' hour window</span></header>' + (series || '<div class="note">Choose up to six sensors in the card editor to show numeric history. No sensors are selected automatically.</div>') + (series ? '<div class="status" role="status"><span>' + message + '</span>' + (this._status === 'error' ? '<button class="retry" data-action="retry">Retry</button>' : '') + '</div>' : '') + '</div></ha-card>';
   if (action) [...this.shadowRoot.querySelectorAll('[data-action]')].find((el) => el.dataset.action === action && el.dataset.entity === entity)?.focus();
  }
 }
 if (!customElements.get(TYPE)) customElements.define(TYPE, SensorGraphOrbitCard);
 window.customCards = window.customCards || [];
 if (!window.customCards.some((c) => c.type === TYPE)) window.customCards.push({ type: TYPE, name: 'Sensor Graph Orbit Card', description: 'Read-only numeric sensor history, independent sparklines and current readings.', preview: true });
})();
