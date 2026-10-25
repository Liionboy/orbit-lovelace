(() => {
const TYPE = 'ha-weather-orbit-card';
const DEFAULTS = { entity: '', title: 'Weather', palette: 'aurora', show_forecast: true, forecast_type: 'daily', forecast_count: 3, forecast_layout: 'tiles', show_time: true, show_date: true, time_zone: '', outdoor_temperature_entity: '' };
const PALETTES = ['aurora', 'ocean', 'sunset', 'lavender'];
const FEATURES = { daily: 1, hourly: 2, twice_daily: 4 };
const CONDITIONS = { sunny: ['Sunny', 'sunny'], 'clear-night': ['Clear night', 'night'], cloudy: ['Cloudy', 'cloudy'], partlycloudy: ['Partly cloudy', 'partly-cloudy'], rainy: ['Rainy', 'rainy'], pouring: ['Heavy rain', 'pouring'], snowy: ['Snowy', 'snowy'], 'snowy-rainy': ['Snow and rain', 'snowy-rainy'], hail: ['Hail', 'hail'], fog: ['Fog', 'fog'], windy: ['Windy', 'windy'], 'windy-variant': ['Windy and cloudy', 'windy-variant'], lightning: ['Thunderstorms', 'lightning'], 'lightning-rainy': ['Thunderstorms and rain', 'lightning-rainy'], exceptional: ['Exceptional weather', 'cloudy-alert'] };
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const finite = (v) => (typeof v === 'number' || typeof v === 'string' && v.trim() !== '') && Number.isFinite(Number(v));
const available = (s) => !!s && typeof s.state === 'string' && !['', 'unknown', 'unavailable'].includes(s.state);
const condition = (v) => Object.hasOwn(CONDITIONS, v) ? CONDITIONS[v] : [String(v ?? 'Forecast'), 'cloudy-alert'];
const icon = (name) => '<ha-icon aria-hidden="true" icon="mdi:weather-' + esc(name) + '"></ha-icon>';
const BARS_STYLE = '.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}.entries.bars{grid-template-columns:minmax(0,1fr);gap:6px}.bar-entry{display:grid;grid-template-columns:64px minmax(0,1fr);align-items:center;gap:0 8px;padding:6px 8px;text-align:left}.bar-day{display:flex;align-items:center;gap:6px;min-width:0}.bar-day time{font-size:11px;overflow-wrap:anywhere;min-width:0}.bar-day ha-icon{margin:0;--mdc-icon-size:20px}.bar-condition{display:inline-flex;flex:none}.range-line{display:grid;grid-template-columns:minmax(0,48px) minmax(16px,1fr) minmax(0,48px);align-items:center;gap:6px;min-width:0}.range-low,.range-high{display:flex;flex-direction:column;min-width:0;max-width:68px;font-variant-numeric:tabular-nums}.range-high{text-align:right}.range-label{font-size:9px;line-height:12px;color:var(--secondary-text-color,#637282)}.range-value{font-size:11px;line-height:16px;overflow-wrap:anywhere}.range-high .range-value{font-weight:700}.range-track{display:block;position:relative;height:10px;min-width:0;overflow:visible;border-radius:8px;background:color-mix(in srgb,var(--accent) 9%,transparent)}.range-fill{position:absolute;top:0;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--accent2),#dbb45c)}.range-point{min-width:3px;transform:translateX(-50%)}.range-current{position:absolute;top:50%;width:9px;height:9px;border-radius:50%;background:#fff;border:2px solid var(--primary-text-color,#202c3c);box-shadow:0 0 0 1px #fff8;transform:translate(-50%,-50%);pointer-events:none}.range-unavailable{opacity:.45}.bar-rain{grid-column:2;font-size:9px}@container weather (max-width:300px){.bar-entry{grid-template-columns:minmax(0,1fr);gap:3px;padding:6px}.bar-day{justify-content:space-between}.bar-rain{grid-column:1}.range-low,.range-high{max-width:52px}}@container weather (max-width:220px){.range-line{grid-template-columns:repeat(2,minmax(0,1fr));gap:4px}.range-low,.range-high{flex-direction:row;align-items:center;gap:3px;max-width:none}.range-high{justify-content:flex-end}.range-track{grid-column:1/-1;grid-row:2}}';
const STYLE = [
 ':host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color,#202c3c)}*{box-sizing:border-box}',
 'ha-card{display:block;container:weather/inline-size;overflow:hidden;border-radius:22px;border:1px solid var(--divider-color,#dce5e9);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 2px 6px #182c3510);--accent:#078f72;--accent2:#27b7b0}',
 'ha-card[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7}ha-card[data-palette=sunset]{--accent:#d65b40;--accent2:#ee973f}ha-card[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8}',
 '.shell{position:relative;padding:18px;background:radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--accent2) 13%,transparent),transparent 70%)}.shell:before{content:"";position:absolute;top:0;left:20px;right:20px;height:2px;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:3px}',
 '.eyebrow{font-size:11px;letter-spacing:.09em;text-transform:uppercase;color:var(--accent);font-weight:750;overflow-wrap:anywhere}.current{display:flex;align-items:center;gap:12px;width:100%;min-width:0;border:0;background:none;color:inherit;padding:12px 0;text-align:left;font:inherit;cursor:pointer}.current:disabled{cursor:default}.current:focus-visible,.retry:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:10px}',
 '.orbit{display:grid;place-items:center;flex:none;width:48px;height:48px;border-radius:50%;background:color-mix(in srgb,var(--accent) 9%,transparent);border:1px solid color-mix(in srgb,var(--accent) 26%,transparent);color:var(--accent)}.orbit ha-icon{--mdc-icon-size:28px}.copy{min-width:0;flex:1}.temperature{font-size:29px;font-weight:750;letter-spacing:-.05em;line-height:1.2;overflow-wrap:anywhere}.temperature small{font-size:15px;font-weight:500;letter-spacing:0;margin-left:3px}.condition{font-size:12px;color:var(--secondary-text-color,#637282);line-height:1.5;overflow-wrap:anywhere}.stats{display:flex;flex-wrap:wrap;gap:6px 15px;font-size:12px;color:var(--secondary-text-color,#637282);margin:0 0 13px}.reading{overflow-wrap:anywhere}.reading strong{color:var(--primary-text-color,#202c3c);font-weight:600}',
 '.outdoor{display:flex;align-items:center;gap:8px;width:100%;min-width:0;margin:10px 0 0;padding:9px 11px;border:1px solid color-mix(in srgb,var(--accent) 20%,transparent);border-radius:12px;background:color-mix(in srgb,var(--accent) 6%,transparent);color:inherit;text-align:left;font:inherit;cursor:pointer}.outdoor:disabled{cursor:default}.outdoor:focus-visible{outline:2px solid var(--accent);outline-offset:3px}.outdoor ha-icon{flex:none;color:var(--accent);--mdc-icon-size:23px}.outdoor-copy{flex:1;min-width:0}.source-label{font-size:11px;line-height:1.5;color:var(--secondary-text-color,#637282);overflow-wrap:anywhere}.outdoor-value{display:block;font-size:22px;line-height:1.25;font-weight:700;overflow-wrap:anywhere}.outdoor-value.unavailable{font-size:13px;font-weight:500}',
 '.datetime{display:flex;align-items:baseline;flex-wrap:wrap;gap:3px 12px;margin:8px 0 2px;min-width:0}.clock{font-size:26px;line-height:1.2;font-weight:700;letter-spacing:-.03em;font-variant-numeric:tabular-nums;white-space:nowrap;color:var(--primary-text-color,#202c3c)}.calendar{font-size:12px;line-height:1.5;color:var(--secondary-text-color,#637282);overflow-wrap:anywhere;min-width:0}',
 '.forecast{border-top:1px solid var(--divider-color,#dce5e9);padding-top:12px}.forecast-heading{display:flex;align-items:center;gap:8px;justify-content:space-between;font-size:11px;font-weight:650;color:var(--secondary-text-color,#637282);margin-bottom:7px}.entries{display:grid;grid-template-columns:repeat(auto-fit,minmax(70px,1fr));gap:6px}.entry{min-width:0;padding:9px 5px;border-radius:12px;text-align:center;background:color-mix(in srgb,var(--accent) 5%,transparent);font-size:11px;overflow-wrap:anywhere}.entry time{display:block;font-weight:650;line-height:1.5}.entry ha-icon{display:block;margin:5px auto;color:var(--accent);--mdc-icon-size:22px}.high{font-weight:700;font-size:13px}.low{font-size:11px;color:var(--secondary-text-color,#637282);margin-top:2px}.period,.rain{font-size:10px;color:var(--secondary-text-color,#637282);line-height:1.6}.message{font-size:12px;line-height:1.5;color:var(--secondary-text-color,#637282);overflow-wrap:anywhere;margin:8px 0}.retry{border:1px solid var(--divider-color,#dce5e9);border-radius:8px;background:transparent;color:inherit;font:inherit;padding:5px 8px;cursor:pointer}',
 '@container weather (max-width:240px){.shell{padding:14px}.current{gap:9px}.orbit{width:40px;height:40px}.temperature{font-size:25px}.entries{grid-template-columns:repeat(2,minmax(0,1fr))}.stats{gap:5px 10px}.entry{padding:8px 4px}}',
].join('');
class WeatherOrbitCard extends HTMLElement {
 static getStubConfig() { return { ...DEFAULTS }; }
 static getConfigForm() {
  const labels = { entity: 'Weather entity (optional)', title: 'Title', palette: 'Orbit palette', show_forecast: 'Show forecast', forecast_type: 'Forecast type', forecast_count: 'Forecast entries (1–7)', forecast_layout: 'Daily forecast layout', show_time: 'Show clock', show_date: 'Show date', time_zone: 'Time zone override (optional)', outdoor_temperature_entity: 'Outdoor temperature sensor (optional)' };
  return { schema: [
   { name: 'entity', selector: { entity: { domain: 'weather' } } },
   { name: 'outdoor_temperature_entity', selector: { entity: { domain: 'sensor' } } },
   { name: 'title', default: DEFAULTS.title, selector: { text: {} } },
   { name: 'palette', default: DEFAULTS.palette, selector: { select: { options: PALETTES, mode: 'dropdown' } } },
   { name: 'show_forecast', default: true, selector: { boolean: {} } },
   { name: 'forecast_type', default: 'daily', selector: { select: { options: Object.keys(FEATURES), mode: 'dropdown' } } },
   { name: 'forecast_layout', default: 'tiles', selector: { select: { options: ['tiles', 'bars'], mode: 'dropdown' } } },
   { name: 'forecast_count', default: 3, selector: { number: { min: 1, max: 7, step: 1, mode: 'box' } } },
   { name: 'show_time', default: true, selector: { boolean: {} } },
   { name: 'show_date', default: true, selector: { boolean: {} } },
   { name: 'time_zone', selector: { text: {} } },
  ], computeLabel: ({ name }) => labels[name], computeHelper: ({ name }) => name === 'forecast_layout' ? 'Daily forecast: tiles or horizontal minimum–maximum bars. Hourly and twice-daily retain tiles. Missing low temperatures are never estimated.' : name === 'forecast_type' ? 'Choose a forecast type supported by your weather provider. The card only reads data.' : name === 'time_zone' ? 'Optional IANA zone, e.g. Europe/London. Otherwise follows the Home Assistant time zone preference.' : name === 'outdoor_temperature_entity' ? 'Measured outdoor temperature, shown separately from the weather provider. Choose a sensor with °C, °F or K units.' : undefined };
 }
 constructor() {
  super(); this.attachShadow({ mode: 'open' }); this._config = { ...DEFAULTS }; this._generation = 0; this._forecast = []; this._status = ''; this._mounted = false;
  this._onDisconnected = () => { this._offline = true; this._stop(); this._status = 'Forecast offline. Waiting for connection.'; this._update(); };
  this._onReady = () => { this._offline = false; this._stop(); this._sync(); this._update(); };
  this.shadowRoot.addEventListener('click', (event) => {
   const button = event.composedPath().find((el) => el?.dataset?.action);
   if (!button || button.disabled) return;
   const entityId = button.dataset.action === 'outdoor-info' ? this._config.outdoor_temperature_entity : button.dataset.action === 'info' ? this._config.entity : '';
   if (entityId && this._hass?.states?.[entityId]) this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId }, bubbles: true, composed: true }));
   if (button.dataset.action === 'retry' && this._status === 'Forecast unavailable. Try again.') { this._stop(); this._sync(); this._update(); }
  });
 }
 setConfig(config) {
  if (!config || typeof config !== 'object' || Array.isArray(config)) throw new Error('Weather Orbit requires an object configuration.');
  for (const name of ['entity', 'title', 'time_zone', 'outdoor_temperature_entity']) if (config[name] != null && typeof config[name] !== 'string') throw new Error(name + ' must be text.');
  if (config.entity && !/^weather\.[a-z0-9_]+$/.test(config.entity)) throw new Error('entity must be a weather entity ID.');
  if (config.outdoor_temperature_entity && !/^sensor\.[a-z0-9_]+$/.test(config.outdoor_temperature_entity)) throw new Error('outdoor_temperature_entity must be a sensor entity ID.');
  if (config.palette != null && !PALETTES.includes(config.palette)) throw new Error('Unknown Orbit palette.');
  if (config.forecast_layout != null && !['tiles', 'bars'].includes(config.forecast_layout)) throw new Error('forecast_layout must be tiles or bars.');
  if (config.forecast_type != null && !Object.hasOwn(FEATURES, config.forecast_type)) throw new Error('Unsupported forecast type.');
  for (const key of ['show_forecast', 'show_time', 'show_date']) if (config[key] != null && typeof config[key] !== 'boolean') throw new Error(key + ' must be true or false.');
  if (config.time_zone) { try { new Intl.DateTimeFormat('en', { timeZone: config.time_zone }); } catch { throw new Error('time_zone must be a valid IANA time zone.'); } }
  if (config.forecast_count != null && (!Number.isInteger(config.forecast_count) || config.forecast_count < 1 || config.forecast_count > 7)) throw new Error('forecast_count must be an integer from 1 to 7.');
  this._config = Object.fromEntries(Object.entries(DEFAULTS).map(([key, value]) => [key, config[key] ?? value]));
  this._sync(); this._update(); this._startClock();
 }
 set hass(value) { this._hass = value; this._bind(value?.connection); this._sync(); this._update(); }
 get hass() { return this._hass; }
 connectedCallback() { this._mounted = true; this._bind(this._hass?.connection); this._sync(); this._update(); this._startClock(); }
 disconnectedCallback() { this._mounted = false; this._clearClock(); this._stop(); this._bind(undefined); }
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
 _now() { return new Date(); }
 _zone() {
  const zone = this._config.time_zone || (this._hass?.locale?.time_zone === 'local' ? undefined : this._hass?.config?.time_zone);
  try { new Intl.DateTimeFormat('en', { timeZone: zone }); return zone; } catch { return undefined; }
 }
 _formatDate(value, options) {
  try { return new Intl.DateTimeFormat(this._locale(), { ...options, timeZone: this._zone() }).format(value); }
  catch { return new Intl.DateTimeFormat('en', { ...options, timeZone: this._zone() }).format(value); }
 }
 _timeOptions() {
  const options = { hour: '2-digit', minute: '2-digit' };
  if (this._hass?.locale?.time_format === '24') options.hourCycle = 'h23';
  if (this._hass?.locale?.time_format === '12') options.hour12 = true;
  return options;
 }
 _clearClock() { if (this._clockTimer !== undefined) clearTimeout(this._clockTimer); this._clockTimer = undefined; }
 _startClock() {
  this._clearClock();
  if (!this._mounted || (!this._config.show_time && !this._config.show_date && !this._hasDailyBars())) return;
  this._clockTimer = setTimeout(() => { this._clockTimer = undefined; this._updateClock(); this._startClock(); }, 60000 - (this._now().getTime() % 60000));
 }
 _updateClock() {
  const now = this._now();
  if (this._hasDailyBars() && this._barDay !== this._dayKey(now)) {
   const entries = this.shadowRoot.querySelector('.entries.bars');
   if (entries) entries.innerHTML = this._barEntries(this._forecast.slice(0, this._config.forecast_count), this._hass?.states?.[this._config.entity]?.attributes || {});
  }
  const clock = this.shadowRoot.querySelector('.clock'), calendar = this.shadowRoot.querySelector('.calendar');
  if (clock) { clock.textContent = this._formatDate(now, this._timeOptions()); clock.setAttribute('datetime', now.toISOString()); }
  if (calendar) { calendar.textContent = this._formatDate(now, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }); calendar.setAttribute('datetime', now.toISOString()); }
 }
 _locale() { return this._hass?.locale?.language || this._hass?.language || 'en'; }
 _number(value, maximumFractionDigits = 1) { try { return new Intl.NumberFormat(this._locale(), { maximumFractionDigits }).format(Number(value)); } catch { return String(Number(value)); } }
 _date(value) {
  const options = this._config.forecast_type === 'hourly' ? { weekday: 'short', hour: 'numeric', minute: '2-digit' } : { weekday: 'short', month: 'short', day: 'numeric' };
  if (this._config.forecast_type === 'hourly') Object.assign(options, this._timeOptions());
  return this._formatDate(new Date(value), options);
 }
 _value(value, unit, precision = 1) { return finite(value) ? esc(this._number(value, precision)) + (unit ? ' ' + esc(unit) : '') : ''; }
 _hasDailyBars() { return this._config.show_forecast && this._config.forecast_type === 'daily' && this._config.forecast_layout === 'bars'; }
 _dayKey(date) { return new Intl.DateTimeFormat('en-CA', { timeZone: this._zone(), calendar: 'gregory', numberingSystem: 'latn', year: 'numeric', month: '2-digit', day: '2-digit' }).format(date); }
 _scale(entries, current) {
  const valid = entries.filter(f => finite(f.templow) && finite(f.temperature) && Number(f.templow) <= Number(f.temperature));
  if (!valid.length) return null;
  const min = Math.min(...valid.map(f => Number(f.templow)), ...(finite(current) ? [Number(current)] : [])), max = Math.max(...valid.map(f => Number(f.temperature)), ...(finite(current) ? [Number(current)] : [])), span = max - min;
  return Number.isFinite(span) ? { min, max, span } : null;
 }
 _ranges(entries, scale = this._scale(entries)) {
  if (!scale) return entries.map(() => null);
  const { min, span } = scale;
  const percent = n => Math.round(Math.max(0, Math.min(100, n)) * 1e6) / 1e6;
  return entries.map(f => {
   if (!finite(f.templow) || !finite(f.temperature) || Number(f.templow) > Number(f.temperature)) return null;
   const low = Number(f.templow), high = Number(f.temperature);
   return { left: span ? percent((low - min) / span * 100) : 50, width: span ? percent((high - low) / span * 100) : 0, point: low === high };
  });
 }
 _barEntries(entries, attrs) {
  this._barDay = this._dayKey(this._now());
  const currentIndex = available(this._hass?.states?.[this._config.entity]) && finite(attrs.temperature) && ['°C', '°F', 'K'].includes(attrs.temperature_unit)
   ? entries.findIndex(f => this._dayKey(new Date(f.datetime)) === this._barDay && finite(f.templow) && finite(f.temperature) && Number(f.templow) <= Number(f.temperature)) : -1;
  const scale = this._scale(entries, currentIndex < 0 ? undefined : attrs.temperature), ranges = this._ranges(entries, scale);
  const position = scale && currentIndex >= 0 ? (scale.span ? Math.max(0, Math.min(100, (Number(attrs.temperature) - scale.min) / scale.span * 100)) : 50) : null;
  return entries.map((f, i) => {
   const fc = condition(f.condition), range = ranges[i];
   const low = finite(f.templow) ? this._value(f.templow, attrs.temperature_unit) : '—';
   const high = finite(f.temperature) ? this._value(f.temperature, attrs.temperature_unit) : '—';
   const currentLabel = position !== null && i === currentIndex ? 'Current weather temperature ' + this._number(attrs.temperature) + ' ' + attrs.temperature_unit : '';
   const marker = currentLabel ? '<span class="range-current" title="' + esc(currentLabel) + '" style="left:' + position + '%"></span>' : '';
   const label = 'Minimum ' + (finite(f.templow) ? this._number(f.templow) + (attrs.temperature_unit ? ' ' + attrs.temperature_unit : '') : 'unavailable') + '; maximum ' + (finite(f.temperature) ? this._number(f.temperature) + (attrs.temperature_unit ? ' ' + attrs.temperature_unit : '') : 'unavailable') + (!range ? '; range unavailable' : '') + (currentLabel ? '; ' + currentLabel : '');
   const rain = finite(f.precipitation) && Number(f.precipitation) >= 0 ? this._value(f.precipitation, attrs.precipitation_unit) : '';
   return '<div class="entry bar-entry"><div class="bar-day"><time datetime="' + esc(f.datetime) + '" title="' + esc(this._date(f.datetime)) + '">' + esc(this._formatDate(new Date(f.datetime), { weekday: 'short' })) + '</time><span class="bar-condition" title="' + esc(fc[0]) + '">' + icon(fc[1]) + '<span class="sr-only">' + esc(fc[0]) + '</span></span></div><div class="range-line" role="img" aria-label="' + esc(label) + '" title="' + esc(label) + '"><span class="range-low"><span class="range-label">Min</span><span class="range-value">' + low + '</span></span><span class="range-track' + (!range ? ' range-unavailable' : '') + '" aria-hidden="true">' + (range ? '<span class="range-fill' + (range.point ? ' range-point' : '') + '" style="left:' + range.left + '%;width:' + range.width + '%"></span>' : '') + marker + '</span><span class="range-high"><span class="range-label">Max</span><span class="range-value">' + high + '</span></span></div>' + (rain ? '<div class="rain bar-rain">Rain ' + rain + '</div>' : '') + '</div>';
  }).join('');
 }
 _outdoor() {
  const id = this._config.outdoor_temperature_entity;
  if (!id) return '';
  const sensor = this._hass?.states?.[id], unit = sensor?.attributes?.unit_of_measurement;
  const valid = available(sensor) && finite(sensor.state) && ['°C', '°F', 'K'].includes(unit);
  return '<button class="outdoor" data-action="outdoor-info" aria-label="More information: ' + esc(sensor?.attributes?.friendly_name || 'Outdoor temperature') + '"' + (!sensor ? ' disabled' : '') + '><ha-icon aria-hidden="true" icon="mdi:thermometer"></ha-icon><span class="outdoor-copy"><span class="source-label">Outdoor sensor</span><span class="outdoor-value' + (valid ? '' : ' unavailable') + '">' + (valid ? this._value(sensor.state, unit, 20) : 'Unavailable') + '</span></span></button>';
 }
 _update() {
  const outdoor = this._hass?.states?.[this._config.outdoor_temperature_entity];
  const s = this._hass?.states?.[this._config.entity], attrs = s?.attributes || {};
  const sig = JSON.stringify([this._config, outdoor?.state, outdoor?.attributes?.unit_of_measurement, outdoor?.attributes?.friendly_name, s?.state, ['friendly_name', 'temperature', 'temperature_unit', 'wind_speed', 'wind_speed_unit', 'humidity', 'precipitation_unit'].map((k) => attrs[k]), this._hass?.locale, this._hass?.language, this._hass?.config?.time_zone, this._forecast, this._status]);
  if (sig === this._signature) return; this._signature = sig; this._render(s, attrs);
 }
 _render(s, a) {
  const c = this._config, valid = available(s), cond = condition(s?.state);
  let label = valid ? cond[0] : 'Current weather unavailable';
  if (valid) { try { label = this._hass?.formatEntityState?.(s) || label; } catch { /* Safe English fallback. */ } }
  const stats = valid ? [finite(a.wind_speed) ? '<span class="reading">Wind <strong>' + this._value(a.wind_speed, a.wind_speed_unit) + '</strong></span>' : '', finite(a.humidity) && Number(a.humidity) >= 0 && Number(a.humidity) <= 100 ? '<span class="reading">Humidity <strong>' + this._value(a.humidity, '%') + '</strong></span>' : ''].join('') : '';
  const bars = c.forecast_type === 'daily' && c.forecast_layout === 'bars';
  const entries = valid && bars ? this._barEntries(this._forecast.slice(0, c.forecast_count), a) : valid ? this._forecast.slice(0, c.forecast_count).map((f) => {
   const fc = condition(f.condition), rain = finite(f.precipitation) && Number(f.precipitation) >= 0 ? this._value(f.precipitation, a.precipitation_unit) : '';
   return '<div class="entry"><time datetime="' + esc(f.datetime) + '">' + esc(this._date(f.datetime)) + '</time>' + (typeof f.is_daytime === 'boolean' ? '<div class="period">' + (f.is_daytime ? 'Day' : 'Night') + '</div>' : '') + icon(fc[1]) + '<div class="condition">' + esc(fc[0]) + '</div>' + (finite(f.temperature) ? '<div class="high">' + this._value(f.temperature, a.temperature_unit) + '</div>' : '') + (finite(f.templow) ? '<div class="low">Low ' + this._value(f.templow, a.temperature_unit) + '</div>' : '') + (rain ? '<div class="rain">Rain ' + rain + '</div>' : '') + '</div>';
  }).join('') : '';
  this.shadowRoot.innerHTML = '<style>' + STYLE + BARS_STYLE + '</style><ha-card data-palette="' + c.palette + '"><div class="shell"><div class="eyebrow">' + esc(c.title || 'Weather') + '</div>' + (c.show_time || c.show_date ? '<div class="datetime">' + (c.show_time ? '<time class="clock"></time>' : '') + (c.show_date ? '<time class="calendar"></time>' : '') + '</div>' : '') + this._outdoor() + (!c.entity ? (c.outdoor_temperature_entity ? '' : '<p class="message">Choose a weather entity in the card configuration to see current conditions and forecasts.</p>') : '<button class="current" data-action="info" aria-label="More information: ' + esc(a.friendly_name || 'Weather') + '"' + (!s ? ' disabled' : '') + '><span class="orbit">' + icon(valid ? cond[1] : 'cloudy-alert') + '</span><span class="copy">' + (c.outdoor_temperature_entity ? '<div class="source-label">Weather provider</div>' : '') + (valid && finite(a.temperature) ? '<div class="temperature">' + esc(this._number(a.temperature)) + '<small>' + esc(a.temperature_unit || '') + '</small></div>' : '') + '<div class="condition">' + esc(label) + '</div></span></button>' + (stats ? '<div class="stats">' + stats + '</div>' : '') + (c.show_forecast ? '<section class="forecast" aria-label="Forecast"><div class="forecast-heading">' + esc(c.forecast_type.replace('_', '-')) + ' forecast' + (this._status === 'Forecast unavailable. Try again.' ? '<button class="retry" data-action="retry">Retry</button>' : '') + '</div>' + (entries ? '<div class="entries' + (bars ? ' bars' : '') + '">' + entries + '</div>' : '<div class="message" role="status">' + esc(this._status) + '</div>') + '</section>' : '')) + '</div></ha-card>';
  this._updateClock();
 }
}
if (!customElements.get(TYPE)) customElements.define(TYPE, WeatherOrbitCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === TYPE)) window.customCards.push({ type: TYPE, name: 'Weather Orbit Card', description: 'Compact current weather and read-only live forecasts', preview: true });
})();
