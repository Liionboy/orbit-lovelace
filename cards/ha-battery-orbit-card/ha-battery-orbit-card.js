// Battery Orbit v1.0.0 — MIT
const TYPE = 'ha-battery-orbit-card';
const CARD_NAME = 'Battery Orbit';
const DESCRIPTION = 'Read-only battery percentages and low-battery flags.';
const DEFAULTS = {"title":"Battery Orbit","palette":"aurora","critical":10,"low":25};
const ENTITY = /^(sensor|binary_sensor)\.[a-z0-9_]+$/;
const HEADER_ICON = 'mdi:battery-outline';
const PALETTES = ['aurora', 'ocean', 'sunset', 'lavender'];
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const icon = (value) => '<ha-icon icon="' + esc(value) + '"></ha-icon>';
const STYLE = ":host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color,#202b3c)}*{box-sizing:border-box}ha-card{display:block;container:orbit/inline-size;overflow:hidden;min-width:0;max-width:100%;border-radius:18px;border:1px solid var(--divider-color,#dfe5eb);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 2px 5px #14233712);--accent:#078f72;--accent2:#27b7b0}ha-card[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7}ha-card[data-palette=sunset]{--accent:#cf573e;--accent2:#ee973f}ha-card[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8}.shell{padding:14px;background:radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--accent2) 10%,transparent),transparent 65%);border-top:2px solid var(--accent)}header{display:flex;gap:10px;align-items:center;min-width:0}.orbit{position:relative;display:grid;place-items:center;width:34px;height:34px;flex:none;border:1px solid color-mix(in srgb,var(--accent) 35%,transparent);border-radius:50%;color:var(--accent);background:color-mix(in srgb,var(--accent) 8%,transparent)}.orbit:after{content:'';position:absolute;top:-2px;right:3px;width:6px;height:6px;border-radius:50%;background:var(--accent2)}ha-icon{--mdc-icon-size:20px;flex:none}.heading{min-width:0;flex:1}h2{margin:0;font-size:15px;line-height:20px;font-weight:700;overflow-wrap:anywhere}.summary{font-size:11px;line-height:17px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}.counts{display:flex;flex-wrap:wrap;gap:4px 10px;margin-top:10px;font-size:11px;line-height:17px;color:var(--secondary-text-color,#637080)}.counts b{color:var(--primary-text-color,#202b3c)}.rows{margin-top:8px;display:grid;gap:4px}button{display:flex;width:100%;min-width:0;gap:9px;align-items:center;min-height:44px;padding:7px 8px;border:0;border-radius:10px;background:color-mix(in srgb,var(--accent) 5%,transparent);color:inherit;font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent}button:hover{background:color-mix(in srgb,var(--accent) 12%,transparent)}button:focus-visible{outline:2px solid var(--accent);outline-offset:-2px}button ha-icon{color:var(--accent)}.copy{flex:1;min-width:0}.name{font-size:12px;line-height:17px;overflow-wrap:anywhere}.value{font-size:11px;line-height:16px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}.meter{height:3px;border-radius:2px;overflow:hidden;background:var(--divider-color,#dfe5eb);margin-top:4px}.meter i{display:block;height:100%;width:var(--level);background:var(--accent)}button[data-status=critical],button[data-status=active]{--accent:var(--error-color,#c74343)}button[data-status=low]{--accent:var(--warning-color,#a66a08)}button[data-status=unknown]{--accent:var(--secondary-text-color,#637080)}.hint{margin:10px 0 0;font-size:12px;line-height:18px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}@container orbit (max-width:240px){.shell{padding:11px}header{gap:8px}.orbit{width:30px;height:30px}h2{font-size:14px}button{padding:7px 5px;gap:7px}}";
function validate(config) {
 if (!config || typeof config !== 'object' || Array.isArray(config)) throw new Error('Configuration must be an object.');
 if (config.title != null && typeof config.title !== 'string') throw new Error('title must be text.');
 if (config.palette != null && !PALETTES.includes(config.palette)) throw new Error('Choose aurora, ocean, sunset or lavender.');
 if (config.entities != null && (!Array.isArray(config.entities) || config.entities.some((id) => typeof id !== 'string' || !ENTITY.test(id)))) throw new Error('entities must be a list of supported entity IDs.');
 for (const key of ['critical', 'low']) if (config[key] != null && (typeof config[key] !== 'number' || !Number.isFinite(config[key]))) throw new Error(key + ' must be a finite number.');
 const critical = config.critical ?? DEFAULTS.critical, low = config.low ?? DEFAULTS.low;
 if (!(0 <= critical && critical < low && low <= 100)) throw new Error('Thresholds must satisfy 0 <= critical < low <= 100.');
 return { ...DEFAULTS, ...Object.fromEntries(Object.entries(config).filter(([,v]) => v != null)), entities: [...new Set(config.entities || [])] };
}
class OrbitCard extends HTMLElement {
 static getStubConfig() { return { ...DEFAULTS, entities: [] }; }
 static getConfigForm() {
  const labels = {"title":"Card title","entities":"Battery entities (optional)","palette":"Orbit palette","critical":"Critical at or below (%)","low":"Low at or below (%)"};
  return { schema: [
   { name: 'title', default: DEFAULTS.title, selector: { text: {} } },
   { name: 'entities', default: [], selector: { entity: { multiple: true, filter: [{"domain":"sensor"},{"domain":"binary_sensor","device_class":"battery"}] } } },
   { name: 'palette', default: DEFAULTS.palette, selector: { select: { options: PALETTES, mode: 'dropdown' } } },
   ...['critical', 'low'].map((name) => ({ name, default: DEFAULTS[name], selector: { number: { min: 0, max: 100, step: 'any', mode: 'box' } } })),
  ], computeLabel: ({ name }) => labels[name], computeHelper: ({ name }) => name === 'entities' ? "Select percentage battery sensors or battery-class binary sensors. No automatic discovery." : undefined, assertConfig: validate };
 }
 constructor() {
  super(); this.attachShadow({ mode: 'open' }); this._config = { ...DEFAULTS, entities: [] }; this._signature = '';
  this.shadowRoot.addEventListener('click', (event) => {
   const row = event.composedPath().find((node) => node?.dataset?.entity);
   if (!row || !this._config.entities.includes(row.dataset.entity)) return;
   this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: row.dataset.entity }, bubbles: true, composed: true }));
  });
 }
 setConfig(config) { this._config = validate(config); this._signature = ''; this._update(); }
 set hass(value) { this._hass = value; this._update(); }
 get hass() { return this._hass; }
 connectedCallback() { this._update(); }
 getCardSize() { return Math.max(2, 2 + this._config.entities.length); }
 getGridOptions() { return { columns: 12, min_columns: 6 }; }
 _update() {
  const rows = this._rows();
  const signature = JSON.stringify([this._config, rows]);
  if (signature === this._signature) return;
  this._signature = signature; this._render(rows);
 }
 _rows() {
  return this._config.entities.map((id, index) => {
   const state = this._hass?.states?.[id], attrs = state?.attributes || {};
   return { id, index, name: String(attrs.friendly_name || id), ...this._classify(id, state), icon: String(attrs.icon || this._defaultIcon(id, state)) };
  }).sort((a, b) => this._rank(a) - this._rank(b) || (a.percent ?? 101) - (b.percent ?? 101) || a.index - b.index);
 }
 _render(rows) {
  const counts = this._counts(rows), shown = this._visible(rows);
  this.shadowRoot.innerHTML = '<style>' + STYLE + '</style><ha-card data-palette="' + this._config.palette + '"><div class="shell"><header><div class="orbit">' + icon(HEADER_ICON) + '</div><div class="heading"><h2>' + esc(this._config.title) + '</h2><div class="summary" role="status">' + esc(this._summary(rows, counts)) + '</div></div></header>' + (rows.length ? '<div class="counts">' + Object.entries(counts).map(([key, value]) => '<span><b>' + value + '</b> ' + esc(key) + '</span>').join('') + '</div>' : '') + '<div class="rows">' + shown.map((row) => '<button type="button" data-entity="' + esc(row.id) + '" data-status="' + row.status + '" aria-label="More information: ' + esc(row.name) + '">' + icon(row.icon) + '<span class="copy"><span class="name">' + esc(row.name) + '</span><div class="value">' + esc(row.label) + '</div>' + (row.percent != null ? '<div class="meter" aria-hidden="true"><i style="--level:' + row.percent + '%"></i></div>' : '') + '</span></button>').join('') + '</div>' + (!rows.length ? '<p class="hint">Select entities in the visual editor to get started.</p>' : !shown.length ? '<p class="hint">Inactive rows are hidden.</p>' : '') + '</div></ha-card>';
 }
 _classify(id, state) {
  if (!state) return { status: 'unknown', label: 'Missing entity' };
  if (state.state === 'unavailable') return { status: 'unknown', label: 'Unavailable' };
  if (state.state === 'unknown') return { status: 'unknown', label: 'Unknown' };
  const a = state.attributes || {};
  if (id.startsWith('binary_sensor.')) {
   if (a.device_class !== 'battery') return { status: 'unknown', label: 'Unsupported device class' };
   return state.state === 'on' ? { status: 'low', label: 'Low battery' } : state.state === 'off' ? { status: 'healthy', label: 'Battery normal' } : { status: 'unknown', label: 'Invalid battery flag' };
  }
  if (a.unit_of_measurement !== '%' || (a.device_class && a.device_class !== 'battery')) return { status: 'unknown', label: 'Expected battery percentage (%)' };
  const raw = state.state;
  if (typeof raw !== 'string' || !/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(raw.trim())) return { status: 'unknown', label: 'Invalid percentage' };
  const percent = Number(raw);
  if (!Number.isFinite(percent) || percent < 0 || percent > 100) return { status: 'unknown', label: 'Invalid percentage' };
  const status = percent <= this._config.critical ? 'critical' : percent <= this._config.low ? 'low' : 'healthy';
  return { percent, status, label: percent + '% · ' + ({ critical: 'Critical', low: 'Low', healthy: 'Healthy' })[status] };
 }
 _defaultIcon() { return 'mdi:battery-outline'; }
 _rank(row) { return row.status === 'low' && row.percent == null ? -1 : row.status === 'unknown' ? 1 : row.status === 'healthy' ? 2 : 0; }
 _counts(rows) { return Object.fromEntries(['critical', 'low', 'healthy', 'unknown'].map((status) => [status, rows.filter((r) => r.status === status).length])); }
 _visible(rows) { return rows; }
 _summary(rows, c) { return !rows.length ? 'No batteries selected' : c.critical || c.low ? (c.critical + c.low) + ' need attention' + (c.unknown ? ' · ' + c.unknown + ' unknown' : '') : c.unknown ? 'Battery status incomplete' : 'All selected batteries healthy'; }
}
if (!customElements.get(TYPE)) customElements.define(TYPE, OrbitCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === TYPE)) window.customCards.push({ type: TYPE, name: CARD_NAME, description: DESCRIPTION, preview: true });
