// Alerts Orbit v1.0.0 — MIT
const TYPE = 'ha-alerts-orbit-card';
const CARD_NAME = 'Alerts Orbit';
const DESCRIPTION = 'Read-only selected binary-sensor alerts.';
const DEFAULTS = {"title":"Alerts Orbit","palette":"aurora","show_inactive":true};
const ENTITY = /^binary_sensor\.[a-z0-9_]+$/;
const HEADER_ICON = 'mdi:shield-alert-outline';
const SEMANTICS = {"door":["Open","Closed","mdi:door"],"window":["Open","Closed","mdi:window-closed"],"opening":["Open","Closed","mdi:door-open"],"garage_door":["Open","Closed","mdi:garage"],"moisture":["Wet","Dry","mdi:water-alert"],"smoke":["Smoke detected","Clear","mdi:smoke-detector"],"gas":["Gas detected","Clear","mdi:gas-cylinder"],"carbon_monoxide":["Carbon monoxide detected","Clear","mdi:molecule-co"],"safety":["Unsafe","Safe","mdi:shield-alert"],"motion":["Motion detected","Clear","mdi:motion-sensor"],"occupancy":["Occupied","Clear","mdi:home-account"],"tamper":["Tampering detected","Clear","mdi:shield-alert-outline"],"problem":["Problem detected","OK","mdi:alert-circle-outline"],"battery":["Low battery","Battery normal","mdi:battery-alert"],"cold":["Cold","Normal","mdi:snowflake-alert"],"heat":["Hot","Normal","mdi:thermometer-alert"],"vibration":["Vibration detected","Clear","mdi:vibrate"],"sound":["Sound detected","Clear","mdi:volume-high"],"glass_break":["Glass break detected","Clear","mdi:window-open"],"lock":["Unlocked","Locked","mdi:lock-open-alert"],"update":["Update available","Up to date","mdi:update"]};
const PALETTES = ['aurora', 'ocean', 'sunset', 'lavender'];
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const icon = (value) => '<ha-icon icon="' + esc(value) + '"></ha-icon>';
const STYLE = ":host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color,#202b3c)}*{box-sizing:border-box}ha-card{display:block;container:orbit/inline-size;overflow:hidden;min-width:0;max-width:100%;border-radius:18px;border:1px solid var(--divider-color,#dfe5eb);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 2px 5px #14233712);--accent:#078f72;--accent2:#27b7b0}ha-card[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7}ha-card[data-palette=sunset]{--accent:#cf573e;--accent2:#ee973f}ha-card[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8}.shell{padding:14px;background:radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--accent2) 10%,transparent),transparent 65%);border-top:2px solid var(--accent)}header{display:flex;gap:10px;align-items:center;min-width:0}.orbit{position:relative;display:grid;place-items:center;width:34px;height:34px;flex:none;border:1px solid color-mix(in srgb,var(--accent) 35%,transparent);border-radius:50%;color:var(--accent);background:color-mix(in srgb,var(--accent) 8%,transparent)}.orbit:after{content:'';position:absolute;top:-2px;right:3px;width:6px;height:6px;border-radius:50%;background:var(--accent2)}ha-icon{--mdc-icon-size:20px;flex:none}.heading{min-width:0;flex:1}h2{margin:0;font-size:15px;line-height:20px;font-weight:700;overflow-wrap:anywhere}.summary{font-size:11px;line-height:17px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}.counts{display:flex;flex-wrap:wrap;gap:4px 10px;margin-top:10px;font-size:11px;line-height:17px;color:var(--secondary-text-color,#637080)}.counts b{color:var(--primary-text-color,#202b3c)}.rows{margin-top:8px;display:grid;gap:4px}button{display:flex;width:100%;min-width:0;gap:9px;align-items:center;min-height:44px;padding:7px 8px;border:0;border-radius:10px;background:color-mix(in srgb,var(--accent) 5%,transparent);color:inherit;font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent}button:hover{background:color-mix(in srgb,var(--accent) 12%,transparent)}button:focus-visible{outline:2px solid var(--accent);outline-offset:-2px}button ha-icon{color:var(--accent)}.copy{flex:1;min-width:0}.name{font-size:12px;line-height:17px;overflow-wrap:anywhere}.value{font-size:11px;line-height:16px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}.meter{height:3px;border-radius:2px;overflow:hidden;background:var(--divider-color,#dfe5eb);margin-top:4px}.meter i{display:block;height:100%;width:var(--level);background:var(--accent)}button[data-status=critical],button[data-status=active]{--accent:var(--error-color,#c74343)}button[data-status=low]{--accent:var(--warning-color,#a66a08)}button[data-status=unknown]{--accent:var(--secondary-text-color,#637080)}.hint{margin:10px 0 0;font-size:12px;line-height:18px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}@container orbit (max-width:240px){.shell{padding:11px}header{gap:8px}.orbit{width:30px;height:30px}h2{font-size:14px}button{padding:7px 5px;gap:7px}}";
function validate(config) {
 if (!config || typeof config !== 'object' || Array.isArray(config)) throw new Error('Configuration must be an object.');
 if (config.title != null && typeof config.title !== 'string') throw new Error('title must be text.');
 if (config.palette != null && !PALETTES.includes(config.palette)) throw new Error('Choose aurora, ocean, sunset or lavender.');
 if (config.entities != null && (!Array.isArray(config.entities) || config.entities.some((id) => typeof id !== 'string' || !ENTITY.test(id)))) throw new Error('entities must be a list of supported entity IDs.');
 if (config.show_inactive != null && typeof config.show_inactive !== 'boolean') throw new Error('show_inactive must be true or false.');
 return { ...DEFAULTS, ...Object.fromEntries(Object.entries(config).filter(([,v]) => v != null)), entities: [...new Set(config.entities || [])] };
}
class OrbitCard extends HTMLElement {
 static getStubConfig() { return { ...DEFAULTS, entities: [] }; }
 static getConfigForm() {
  const labels = {"title":"Card title","entities":"Alert entities (optional)","palette":"Orbit palette","show_inactive":"Show inactive rows"};
  return { schema: [
   { name: 'title', default: DEFAULTS.title, selector: { text: {} } },
   { name: 'entities', default: [], selector: { entity: { multiple: true, filter: [{"domain":"binary_sensor","device_class":["door","window","opening","garage_door","moisture","smoke","gas","carbon_monoxide","safety","motion","occupancy","tamper","problem","battery","cold","heat","vibration","sound","glass_break","lock","update"]}] } } },
   { name: 'palette', default: DEFAULTS.palette, selector: { select: { options: PALETTES, mode: 'dropdown' } } },
   { name: 'show_inactive', default: true, selector: { boolean: {} } },
  ], computeLabel: ({ name }) => labels[name], computeHelper: ({ name }) => name === 'entities' ? "Choose supported alert binary sensors. Unsupported classes are marked unknown, never all-clear." : undefined, assertConfig: validate };
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
  const cls = state.attributes?.device_class;
  if (!Object.hasOwn(SEMANTICS, cls)) return { status: 'unknown', label: 'Unsupported device class' };
  if (!['on', 'off'].includes(state.state)) return { status: 'unknown', label: 'Invalid binary state' };
  return { status: state.state === 'on' ? 'active' : 'inactive', label: SEMANTICS[cls][state.state === 'on' ? 0 : 1] };
 }
 _defaultIcon(id, state) { const cls = state?.attributes?.device_class; return Object.hasOwn(SEMANTICS, cls) ? SEMANTICS[cls][2] : 'mdi:help-circle-outline'; }
 _rank(row) { return { active: 0, unknown: 1, inactive: 2 }[row.status]; }
 _counts(rows) { return Object.fromEntries(['active', 'inactive', 'unknown'].map((status) => [status, rows.filter((r) => r.status === status).length])); }
 _visible(rows) { return this._config.show_inactive ? rows : rows.filter((row) => row.status !== 'inactive'); }
 _summary(rows, c) { return !rows.length ? 'No alerts selected' : c.active ? c.active + ' active' + (c.unknown ? ' · ' + c.unknown + ' unknown' : '') : c.unknown ? 'Status incomplete · ' + c.unknown + ' unknown' : 'All selected alerts clear'; }
}
if (!customElements.get(TYPE)) customElements.define(TYPE, OrbitCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === TYPE)) window.customCards.push({ type: TYPE, name: CARD_NAME, description: DESCRIPTION, preview: true });
