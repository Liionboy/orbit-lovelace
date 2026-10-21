// Fan Orbit Card 1.0.0 — dependency-free Home Assistant Dashboard card.
const TYPE = 'ha-fan-orbit-card';
const PALETTES = ['aurora', 'ocean', 'sunset', 'lavender'];
const DEFAULTS = { entity: '', name: '', icon: '', palette: 'aurora', read_only: false };
const FEATURES = { speed: 1, oscillate: 2, direction: 4, preset: 8, turn_off: 16, turn_on: 32 };
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
// Do not coerce empty strings, booleans, null, NaN or infinity to zero.
const numeric = (v) => (typeof v === 'number' || (typeof v === 'string' && v.trim() !== '')) && Number.isFinite(Number(v)) ? Number(v) : null;
const stepValue = (v) => { const n = numeric(v); return n !== null && n > 0 && n <= 100 ? n : 1; };
const snap = (value, step) => Math.round(Math.max(0, Math.min(100, Math.round(Math.max(0, Math.min(100, value)) / step) * step)));
const STYLE = [
 ':host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color,#202b3c)}*{box-sizing:border-box}',
 'ha-card{display:block;container:fan/inline-size;min-width:0;overflow:hidden;border-radius:20px;border:1px solid var(--divider-color,#dfe5eb);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 2px 5px #14233716);--accent:#078f72;--accent2:#27b7b0}',
 'ha-card[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7}ha-card[data-palette=sunset]{--accent:#df5d42;--accent2:#ee973f}ha-card[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8}',
 '.shell{padding:16px;position:relative;background:radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 70%)}.shell:before{content:"";position:absolute;left:20px;right:20px;top:0;height:2px;background:linear-gradient(90deg,var(--accent),var(--accent2));pointer-events:none}',
 'button,input,select{font:inherit;color:inherit}button,select{cursor:pointer}button{border:0}button:disabled,input:disabled,select:disabled{opacity:.48;cursor:not-allowed}button:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid var(--accent);outline-offset:3px}',
 '.head{display:flex;align-items:center;gap:12px;min-width:0}.info{display:flex;align-items:center;gap:12px;flex:1;min-width:0;padding:0;text-align:left;background:none}.orbit{position:relative;display:grid;place-items:center;width:44px;height:44px;flex:none;border-radius:50%;background:color-mix(in srgb,var(--accent) 12%,transparent);color:var(--accent);outline:1px solid color-mix(in srgb,var(--accent) 25%,transparent);outline-offset:3px}.orbit ha-icon{--mdc-icon-size:24px}.copy{min-width:0;flex:1}.name{display:block;font-weight:750;font-size:15px;line-height:20px;overflow-wrap:anywhere}.status{display:block;font-size:11px;line-height:17px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}.power{border-radius:12px;min-height:42px;padding:9px 12px;flex:none;background:color-mix(in srgb,var(--accent) 12%,transparent);color:var(--accent);font-size:12px;font-weight:650}',
 '.controls{display:grid;gap:10px;margin-top:16px}.row{display:grid;gap:6px;min-width:0}label,.row-head{font-size:11px;font-weight:650}.row-head{display:flex;justify-content:space-between;gap:8px}.value{color:var(--accent);font-variant-numeric:tabular-nums}input[type=range]{display:block;min-width:0;width:100%;margin:0;accent-color:var(--accent);height:28px}select{width:100%;min-width:0;max-width:100%;height:36px;border:1px solid var(--divider-color,#dfe5eb);border-radius:10px;background:var(--ha-card-background,var(--card-background-color,#fff));padding:0 8px;font-size:12px}.oscillate{min-height:36px;border-radius:10px;background:color-mix(in srgb,var(--accent) 9%,transparent);font-size:12px;text-align:left;padding:8px 10px}.hint,.message{font-size:11px;line-height:16px;color:var(--secondary-text-color,#637080);margin:10px 0 0;overflow-wrap:anywhere}.message:empty{display:none}.error{color:var(--error-color,#b33a3a)}',
 '@container fan (max-width:240px){.shell{padding:12px}.head,.info{gap:8px}.orbit{width:32px;height:32px}.orbit ha-icon{--mdc-icon-size:20px}.power{padding:8px;font-size:11px}.name{font-size:13px}.controls{margin-top:12px;gap:8px}}',
].join('');
class FanOrbitCard extends HTMLElement {
 static getStubConfig() { return { ...DEFAULTS }; }
 static getConfigForm() {
  const labels = { entity: 'Fan entity (optional)', name: 'Name override (optional)', icon: 'Icon override (optional)', palette: 'Orbit palette', read_only: 'Read-only controls' };
  return { schema: [
   { name: 'entity', selector: { entity: { domain: 'fan' } } },
   { name: 'name', selector: { text: {} } }, { name: 'icon', selector: { icon: {} } },
   { name: 'palette', default: 'aurora', selector: { select: { options: PALETTES, mode: 'dropdown' } } },
   { name: 'read_only', default: false, selector: { boolean: {} } },
  ], computeLabel: ({ name }) => labels[name], computeHelper: ({ name }) => name === 'entity' ? 'Select one fan. No device is selected automatically.' : undefined };
 }
 constructor() {
  super(); this.attachShadow({ mode: 'open' }); this._config = { ...DEFAULTS }; this._signature = ''; this._busy = false; this._message = ''; this._error = false;
  this.shadowRoot.addEventListener('click', (event) => {
   const el = event.composedPath().find((node) => node?.dataset?.action);
   if (el && !el.disabled && ['info', 'power', 'oscillate'].includes(el.dataset.action)) void this._activate(el.dataset.action);
  });
  this.shadowRoot.addEventListener('change', (event) => {
   const el = event.composedPath().find((node) => node?.dataset?.action);
   if (el && !el.disabled && ['speed', 'preset', 'direction'].includes(el.dataset.action)) void this._activate(el.dataset.action, el.value);
  });
 }
 setConfig(config) {
  if (!config || typeof config !== 'object' || Array.isArray(config)) throw new Error('Fan Orbit requires an object configuration.');
  for (const key of ['entity', 'name', 'icon', 'palette']) if (config[key] != null && typeof config[key] !== 'string') throw new Error(key + ' must be text.');
  if (config.entity && !/^fan\.[a-z0-9_]+$/.test(config.entity)) throw new Error('Select a fan entity ID.');
  if (config.read_only != null && typeof config.read_only !== 'boolean') throw new Error('read_only must be true or false.');
  this._config = { ...DEFAULTS, ...Object.fromEntries(Object.entries(config).filter(([, v]) => v != null)), palette: PALETTES.includes(config.palette) ? config.palette : 'aurora' };
  this._signature = ''; this._message = ''; this._update();
 }
 set hass(value) { this._hass = value; this._update(); }
 get hass() { return this._hass; }
 getCardSize() { return 4; }
 getGridOptions() { return { columns: 6, min_columns: 3 }; }
 _model() {
  const c = this._config, s = this._hass?.states?.[c.entity], a = s?.attributes || {};
  const f = numeric(a.supported_features), flags = f !== null && Number.isSafeInteger(f) && f >= 0 ? f : 0;
  const has = (feature) => (flags & FEATURES[feature]) !== 0;
  const percent = numeric(a.percentage), validPercent = percent !== null && percent >= 0 && percent <= 100;
  const modes = Array.isArray(a.preset_modes) ? [...new Set(a.preset_modes.filter((v) => typeof v === 'string' && v.trim()))] : [];
  return { s, a, available: !!s && ['on', 'off'].includes(s.state), name: c.name || a.friendly_name || 'Fan Orbit', icon: c.icon || a.icon || 'mdi:fan',
   speed: has('speed') && validPercent, percent, step: stepValue(a.percentage_step), preset: has('preset') && modes.length > 0, modes,
   oscillate: has('oscillate') && typeof a.oscillating === 'boolean', direction: has('direction') && ['forward', 'reverse'].includes(a.direction),
   power: s?.state === 'on' ? (has('turn_off') ? 'turn_off' : '') : s?.state === 'off' ? (has('turn_on') ? 'turn_on' : '') : '' };
 }
 _can(service, m) { return m.available && !this._config.read_only && !this._busy && typeof this._hass?.callService === 'function' && !!this._hass?.services?.fan?.[service]; }
 _update() {
  const m = this._model(), a = m.a;
  const signature = JSON.stringify([this._config, m.s?.state, a.friendly_name, a.icon, a.supported_features, a.percentage, a.percentage_step, a.preset_mode, a.preset_modes, a.oscillating, a.direction, Object.keys(this._hass?.services?.fan || {}).sort(), typeof this._hass?.callService]);
  if (signature === this._signature) return;
  this._signature = signature;
  const disabled = (service) => this._can(service, m) ? '' : ' disabled';
  const options = (values, current) => (!values.includes(current) ? '<option value="" selected disabled>Choose preset</option>' : '') + values.map((v) => '<option value="' + esc(v) + '"' + (v === current ? ' selected' : '') + '>' + esc(v) + '</option>').join('');
  const rows = [];
  if (m.speed) rows.push('<div class="row"><div class="row-head"><label for="speed">Speed</label><span class="value">' + esc(m.percent) + '%</span></div><input id="speed" data-action="speed" type="range" aria-label="Fan speed" min="0" max="100" step="' + esc(m.step) + '" value="' + esc(m.percent) + '"' + disabled('set_percentage') + '></div>');
  if (m.preset) rows.push('<div class="row"><label for="preset">Preset</label><select id="preset" data-action="preset"' + disabled('set_preset_mode') + '>' + options(m.modes, a.preset_mode) + '</select></div>');
  if (m.oscillate) rows.push('<button class="oscillate" data-action="oscillate" aria-pressed="' + esc(a.oscillating) + '"' + disabled('oscillate') + '>Oscillation · ' + (a.oscillating ? 'On' : 'Off') + '</button>');
  if (m.direction) rows.push('<div class="row"><label for="direction">Direction</label><select id="direction" data-action="direction"' + disabled('set_direction') + '>' + options(['forward', 'reverse'], a.direction) + '</select></div>');
  const status = !this._config.entity ? 'Choose a fan to get started' : !m.s ? 'Entity not found' : m.s.state === 'unavailable' ? 'Unavailable' : m.s.state === 'unknown' ? 'Unknown' : m.s.state === 'on' ? 'On' : m.s.state === 'off' ? 'Off' : 'Unknown';
  this.shadowRoot.innerHTML = '<style>' + STYLE + '</style><ha-card data-palette="' + esc(this._config.palette) + '"><div class="shell"><div class="head"><button class="info" data-action="info" aria-label="Fan information"' + (!m.s ? ' disabled' : '') + '><span class="orbit"><ha-icon icon="' + esc(m.icon) + '"></ha-icon></span><span class="copy"><span class="name">' + esc(m.name) + '</span><span class="status">' + status + (this._config.read_only ? ' · Read only' : '') + '</span></span></button>' + (m.power ? '<button class="power" data-action="power"' + disabled(m.power) + '>' + (m.power === 'turn_on' ? 'Turn on' : 'Turn off') + '</button>' : '') + '</div>' + (rows.length ? '<div class="controls">' + rows.join('') + '</div>' : '<p class="hint">' + (!this._config.entity ? 'Select a fan in the visual editor or set entity in YAML.' : 'No additional controls reported by this fan.') + '</p>') + '<p class="message" role="status" aria-live="polite"></p></div></ha-card>';
  this._syncFeedback();
 }
 _syncFeedback() {
  // Pending feedback updates existing nodes, preserving a focused range.
  const m = this._model(), services = { power: m.power, speed: 'set_percentage', preset: 'set_preset_mode', oscillate: 'oscillate', direction: 'set_direction' };
  for (const el of this.shadowRoot.querySelectorAll('[data-action]')) if (el.dataset.action !== 'info') el.disabled = !this._can(services[el.dataset.action], m);
  const message = this.shadowRoot.querySelector('.message');
  if (message) { message.textContent = this._busy ? 'Sending request…' : this._message; message.className = 'message' + (this._error ? ' error' : ''); }
 }
 async _activate(action, value) {
  const m = this._model();
  if (action === 'info') {
   if (m.s) this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: this._config.entity }, bubbles: true, composed: true }));
   return;
  }
  let service, data = {};
  if (action === 'power' && m.power) service = m.power;
  if (action === 'speed' && m.speed && numeric(value) !== null) { service = 'set_percentage'; data = { percentage: snap(numeric(value), m.step) }; }
  if (action === 'preset' && m.preset && m.modes.includes(value)) { service = 'set_preset_mode'; data = { preset_mode: value }; }
  if (action === 'oscillate' && m.oscillate) { service = 'oscillate'; data = { oscillating: !m.a.oscillating }; }
  if (action === 'direction' && m.direction && ['forward', 'reverse'].includes(value)) { service = 'set_direction'; data = { direction: value }; }
  if (!service || !this._can(service, m)) return;
  this._busy = true; this._message = ''; this._error = false; this._syncFeedback();
  try { await this._hass.callService('fan', service, data, { entity_id: this._config.entity }); this._message = 'Request sent'; }
  catch { this._message = 'Request failed. Try again.'; this._error = true; }
  finally { this._busy = false; this._syncFeedback(); }
 }
}
if (!customElements.get(TYPE)) customElements.define(TYPE, FanOrbitCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === TYPE)) window.customCards.push({ type: TYPE, name: 'Fan Orbit Card', description: 'Compact, capability-aware fan controls.', preview: true });
