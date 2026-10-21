(() => {
const TYPE = 'ha-weather-orbit-card';
const DEFAULTS = { entity: '', title: 'Weather', palette: 'aurora', show_forecast: true, forecast_type: 'daily', forecast_count: 3 };
const PALETTES = ['aurora', 'ocean', 'sunset', 'lavender'];
const FEATURES = { daily: 1, hourly: 2, twice_daily: 4 };
const CONDITIONS = { sunny: ['Sunny', 'sunny'], 'clear-night': ['Clear night', 'night'], cloudy: ['Cloudy', 'cloudy'], partlycloudy: ['Partly cloudy', 'partly-cloudy'], rainy: ['Rainy', 'rainy'], pouring: ['Heavy rain', 'pouring'], snowy: ['Snowy', 'snowy'], 'snowy-rainy': ['Snow and rain', 'snowy-rainy'], hail: ['Hail', 'hail'], fog: ['Fog', 'fog'], windy: ['Windy', 'windy'], 'windy-variant': ['Windy and cloudy', 'windy-variant'], lightning: ['Thunderstorms', 'lightning'], 'lightning-rainy': ['Thunderstorms and rain', 'lightning-rainy'], exceptional: ['Exceptional weather', 'cloudy-alert'] };
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const finite = (v) => (typeof v === 'number' || typeof v === 'string' && v.trim() !== '') && Number.isFinite(Number(v));
const available = (s) => !!s && typeof s.state === 'string' && !['', 'unknown', 'unavailable'].includes(s.state);
const condition = (v) => Object.hasOwn(CONDITIONS, v) ? CONDITIONS[v] : [String(v ?? 'Forecast'), 'cloudy-alert'];
const icon = (name) => '<ha-icon aria-hidden="true" icon="mdi:weather-' + esc(name) + '"></ha-icon>';
const STYLE = [
 ':host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color,#202c3c)}*{box-sizing:border-box}',
 'ha-card{display:block;container:weather/inline-size;overflow:hidden;border-radius:22px;border:1px solid var(--divider-color,#dce5e9);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 2px 6px #182c3510);--accent:#078f72;--accent2:#27b7b0}',
 'ha-card[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7}ha-card[data-palette=sunset]{--accent:#d65b40;--accent2:#ee973f}ha-card[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8}',
 '.shell{position:relative;padding:18px;background:radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--accent2) 13%,transparent),transparent 70%)}.shell:before{content:"";position:absolute;top:0;left:20px;right:20px;height:2px;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:3px}',
 '.eyebrow{font-size:11px;letter-spacing:.09em;text-transform:uppercase;color:var(--accent);font-weight:750;overflow-wrap:anywhere}.current{display:flex;align-items:center;gap:12px;width:100%;min-width:0;border:0;background:none;color:inherit;padding:12px 0;text-align:left;font:inherit;cursor:pointer}.current:disabled{cursor:default}.current:focus-visible,.retry:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:10px}',
 '.orbit{display:grid;place-items:center;flex:none;width:48px;height:48px;border-radius:50%;background:color-mix(in srgb,var(--accent) 9%,transparent);border:1px solid color-mix(in srgb,var(--accent) 26%,transparent);color:var(--accent)}.orbit ha-icon{--mdc-icon-size:28px}.copy{min-width:0;flex:1}.temperature{font-size:29px;font-weight:750;letter-spacing:-.05em;line-height:1.2;overflow-wrap:anywhere}.temperature small{font-size:15px;font-weight:500;letter-spacing:0;margin-left:3px}.condition{font-size:12px;color:var(--secondary-text-color,#637282);line-height:1.5;overflow-wrap:anywhere}.stats{display:flex;flex-wrap:wrap;gap:6px 15px;font-size:12px;color:var(--secondary-text-color,#637282);margin:0 0 13px}.reading{overflow-wrap:anywhere}.reading strong{color:var(--primary-text-color,#202c3c);font-weight:600}',
 '.forecast{border-top:1px solid var(--divider-color,#dce5e9);padding-top:12px}.forecast-heading{display:flex;align-items:center;gap:8px;justify-content:space-between;font-size:11px;font-weight:650;color:var(--secondary-text-color,#637282);margin-bottom:7px}.entries{display:grid;grid-template-columns:repeat(auto-fit,minmax(70px,1fr));gap:6px}.entry{min-width:0;padding:9px 5px;border-radius:12px;text-align:center;background:color-mix(in srgb,var(--accent) 5%,transparent);font-size:11px;overflow-wrap:anywhere}.entry time{display:block;font-weight:650;line-height:1.5}.entry ha-icon{display:block;margin:5px auto;color:var(--accent);--mdc-icon-size:22px}.high{font-weight:700;font-size:13px}.low{font-size:11px;color:var(--secondary-text-color,#637282);margin-top:2px}.period,.rain{font-size:10px;color:var(--secondary-text-color,#637282);line-height:1.6}.message{font-size:12px;line-height:1.5;color:var(--secondary-text-color,#637282);overflow-wrap:anywhere;margin:8px 0}.retry{border:1px solid var(--divider-color,#dce5e9);border-radius:8px;background:transparent;color:inherit;font:inherit;padding:5px 8px;cursor:pointer}',
 '@container weather (max-width:240px){.shell{padding:14px}.current{gap:9px}.orbit{width:40px;height:40px}.temperature{font-size:25px}.entries{grid-template-columns:repeat(2,minmax(0,1fr))}.stats{gap:5px 10px}.entry{padding:8px 4px}}',
].join('');
class WeatherOrbitCard extends HTMLElement {
 static getStubConfig() { return { ...DEFAULTS }; }
 static getConfigForm() {
  const labels = { entity: 'Weather entity (optional)', title: 'Title', palette: 'Orbit palette', show_forecast: 'Show forecast', forecast_type: 'Forecast type', forecast_count: 'Forecast entries (1–7)' };
  return { schema: [
   { name: 'entity', selector: { entity: { domain: 'weather' } } },
   { name: 'title', default: DEFAULTS.title, selector: { text: {} } },
   { name: 'palette', default: DEFAULTS.palette, selector: { select: { options: PALETTES, mode: 'dropdown' } } },
   { name: 'show_forecast', default: true, selector: { boolean: {} } },
   { name: 'forecast_type', default: 'daily', selector: { select: { options: Object.keys(FEATURES), mode: 'dropdown' } } },
   { name: 'forecast_count', default: 3, selector: { number: { min: 1, max: 7, step: 1, mode: 'box' } } },
  ], computeLabel: ({ name }) => labels[name], computeHelper: ({ name }) => name === 'forecast_type' ? 'Choose a forecast type supported by your weather provider. The card only reads data.' : undefined };
 }
 constructor() {
  super(); this.attachShadow({ mode: 'open' }); this._config = { ...DEFAULTS }; this._generation = 0; this._forecast = []; this._status = ''; this._mounted = false;
  this._onDisconnected = () => { this._offline = true; this._stop(); this._status = 'Forecast offline. Waiting for connection.'; this._update(); };
  this._onReady = () => { this._offline = false; this._stop(); this._sync(); this._update(); };
  this.shadowRoot.addEventListener('click', (event) => {
   const button = event.composedPath().find((el) => el?.dataset?.action);
   if (!button || button.disabled) return;
   if (button.dataset.action === 'info' && this._hass?.states?.[this._config.entity]) this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: this._config.entity }, bubbles: true, composed: true }));
   if (button.dataset.action === 'retry' && this._status === 'Forecast unavailable. Try again.') { this._stop(); this._sync(); this._update(); }
  });
 }
 setConfig(config) {
  if (!config || typeof config !== 'object' || Array.isArray(config)) throw new Error('Weather Orbit requires an object configuration.');
  for (const name of ['entity', 'title']) if (config[name] != null && typeof config[name] !== 'string') throw new Error(name + ' must be text.');
  if (config.entity && !/^weather\.[a-z0-9_]+$/.test(config.entity)) throw new Error('entity must be a weather entity ID.');
  if (config.palette != null && !PALETTES.includes(config.palette)) throw new Error('Unknown Orbit palette.');
  if (config.forecast_type != null && !Object.hasOwn(FEATURES, config.forecast_type)) throw new Error('Unsupported forecast type.');
  if (config.show_forecast != null && typeof config.show_forecast !== 'boolean') throw new Error('show_forecast must be true or false.');
  if (config.forecast_count != null && (!Number.isInteger(config.forecast_count) || config.forecast_count < 1 || config.forecast_count > 7)) throw new Error('forecast_count must be an integer from 1 to 7.');
  this._config = Object.fromEntries(Object.entries(DEFAULTS).map(([key, value]) => [key, config[key] ?? value]));
  this._sync(); this._update();
 }
 set hass(value) { this._hass = value; this._bind(value?.connection); this._sync(); this._update(); }
 get hass() { return this._hass; }
 connectedCallback() { this._mounted = true; this._bind(this._hass?.connection); this._sync(); this._update(); }
 disconnectedCallback() { this._mounted = false; this._stop(); this._bind(undefined); }
 getCardSize() { return this._config.show_forecast ? 5 : 3; }
 getGridOptions() { return { columns: 6, min_columns: 3, rows: 'auto' }; }
 _bind(connection) {
  if (!this._mounted) connection = undefined;
  if (this._connection === connection) return;
  this._connection?.removeEventListener?.('disconnected', this._onDisconnected);
  this._connection?.removeEventListener?.('ready', this._onReady);
  this._stop(); this._connection = connection; this._offline = connection?.connected === false;
  connection?.addEventListener?.('disconnected', this._onDisconnected);
  connection?.addEventListener?.('ready', this._onReady);
 }
 _dispose(unsubscribe) { if (typeof unsubscribe === 'function') { try { Promise.resolve(unsubscribe()).catch(() => {}); } catch { /* Disconnected unsubscribe is best effort. */ } } }
 _stop() { this._generation++; this._dispose(this._unsubscribe); this._unsubscribe = undefined; this._key = undefined; this._forecast = []; }
 _sync() {
  const c = this._config, s = this._hass?.states?.[c.entity], connection = this._connection;
  let reason = '';
  if (!c.show_forecast || !c.entity || !this._mounted) reason = 'disabled';
  else if (!available(s)) reason = 'Forecast unavailable while current weather is unavailable.';
  else if (!(Number(s.attributes?.supported_features) & FEATURES[c.forecast_type])) reason = 'This entity does not support ' + c.forecast_type.replace('_', '-') + ' forecasts.';
  else if (this._offline || connection?.connected === false) reason = 'Forecast offline. Waiting for connection.';
  else if (!connection?.subscribeMessage) reason = 'Forecast connection unavailable.';
  if (reason) { if (this._key) this._stop(); this._forecast = []; this._status = reason; return; }
  const key = c.entity + '/' + c.forecast_type;
  if (this._key === key) return;
  this._stop(); this._key = key; this._status = 'Loading forecast…'; const generation = this._generation;
  const current = () => generation === this._generation && this._mounted;
  try {
   const pending = connection.subscribeMessage((event) => {
    if (!current() || event?.type !== c.forecast_type) return;
    this._forecast = Array.isArray(event.forecast) ? event.forecast.filter((f) => f && typeof f === 'object' && typeof f.datetime === 'string' && Number.isFinite(Date.parse(f.datetime))).map((f) => ({ ...f })) : [];
    this._status = this._forecast.length ? '' : 'No forecast data available.'; this._update();
   }, { type: 'weather/subscribe_forecast', entity_id: c.entity, forecast_type: c.forecast_type }, { resubscribe: false });
   Promise.resolve(pending).then((unsubscribe) => { if (current()) this._unsubscribe = unsubscribe; else this._dispose(unsubscribe); }, () => { if (current()) { this._forecast = []; this._status = 'Forecast unavailable. Try again.'; this._update(); } });
  } catch { this._forecast = []; this._status = 'Forecast unavailable. Try again.'; }
 }
 _locale() { return this._hass?.locale?.language || this._hass?.language || 'en'; }
 _number(value) { try { return new Intl.NumberFormat(this._locale(), { maximumFractionDigits: 1 }).format(Number(value)); } catch { return String(Number(value)); } }
 _date(value) {
  const options = this._config.forecast_type === 'hourly' ? { weekday: 'short', hour: 'numeric', minute: '2-digit' } : { weekday: 'short', month: 'short', day: 'numeric' };
  const zone = this._hass?.locale?.time_zone === 'local' ? undefined : this._hass?.config?.time_zone;
  if (this._hass?.locale?.time_format === '24') options.hour12 = false;
  if (this._hass?.locale?.time_format === '12') options.hour12 = true;
  try { return new Intl.DateTimeFormat(this._locale(), { ...options, timeZone: zone }).format(new Date(value)); }
  catch { return new Intl.DateTimeFormat('en', options).format(new Date(value)); }
 }
 _value(value, unit) { return finite(value) ? esc(this._number(value)) + (unit ? ' ' + esc(unit) : '') : ''; }
 _update() {
  const s = this._hass?.states?.[this._config.entity], attrs = s?.attributes || {};
  const sig = JSON.stringify([this._config, s?.state, ['friendly_name', 'temperature', 'temperature_unit', 'wind_speed', 'wind_speed_unit', 'humidity', 'precipitation_unit'].map((k) => attrs[k]), this._hass?.locale, this._hass?.language, this._hass?.config?.time_zone, this._forecast, this._status]);
  if (sig === this._signature) return; this._signature = sig; this._render(s, attrs);
 }
 _render(s, a) {
  const c = this._config, valid = available(s), cond = condition(s?.state);
  let label = valid ? cond[0] : 'Current weather unavailable';
  if (valid) { try { label = this._hass?.formatEntityState?.(s) || label; } catch { /* Safe English fallback. */ } }
  const stats = valid ? [finite(a.wind_speed) ? '<span class="reading">Wind <strong>' + this._value(a.wind_speed, a.wind_speed_unit) + '</strong></span>' : '', finite(a.humidity) && Number(a.humidity) >= 0 && Number(a.humidity) <= 100 ? '<span class="reading">Humidity <strong>' + this._value(a.humidity, '%') + '</strong></span>' : ''].join('') : '';
  const entries = valid ? this._forecast.slice(0, c.forecast_count).map((f) => {
   const fc = condition(f.condition), rain = finite(f.precipitation) && Number(f.precipitation) >= 0 ? this._value(f.precipitation, a.precipitation_unit) : '';
   return '<div class="entry"><time datetime="' + esc(f.datetime) + '">' + esc(this._date(f.datetime)) + '</time>' + (typeof f.is_daytime === 'boolean' ? '<div class="period">' + (f.is_daytime ? 'Day' : 'Night') + '</div>' : '') + icon(fc[1]) + '<div class="condition">' + esc(fc[0]) + '</div>' + (finite(f.temperature) ? '<div class="high">' + this._value(f.temperature, a.temperature_unit) + '</div>' : '') + (finite(f.templow) ? '<div class="low">Low ' + this._value(f.templow, a.temperature_unit) + '</div>' : '') + (rain ? '<div class="rain">Rain ' + rain + '</div>' : '') + '</div>';
  }).join('') : '';
  this.shadowRoot.innerHTML = '<style>' + STYLE + '</style><ha-card data-palette="' + c.palette + '"><div class="shell"><div class="eyebrow">' + esc(c.title || 'Weather') + '</div>' + (!c.entity ? '<p class="message">Choose a weather entity in the card configuration to see current conditions and forecasts.</p>' : '<button class="current" data-action="info" aria-label="More information: ' + esc(a.friendly_name || 'Weather') + '"' + (!s ? ' disabled' : '') + '><span class="orbit">' + icon(valid ? cond[1] : 'cloudy-alert') + '</span><span class="copy">' + (valid && finite(a.temperature) ? '<div class="temperature">' + esc(this._number(a.temperature)) + '<small>' + esc(a.temperature_unit || '') + '</small></div>' : '') + '<div class="condition">' + esc(label) + '</div></span></button>' + (stats ? '<div class="stats">' + stats + '</div>' : '') + (c.show_forecast ? '<section class="forecast" aria-label="Forecast"><div class="forecast-heading">' + esc(c.forecast_type.replace('_', '-')) + ' forecast' + (this._status === 'Forecast unavailable. Try again.' ? '<button class="retry" data-action="retry">Retry</button>' : '') + '</div>' + (entries ? '<div class="entries">' + entries + '</div>' : '<div class="message" role="status">' + esc(this._status) + '</div>') + '</section>' : '')) + '</div></ha-card>';
 }
}
if (!customElements.get(TYPE)) customElements.define(TYPE, WeatherOrbitCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === TYPE)) window.customCards.push({ type: TYPE, name: 'Weather Orbit Card', description: 'Compact current weather and read-only live forecasts', preview: true });
})();
