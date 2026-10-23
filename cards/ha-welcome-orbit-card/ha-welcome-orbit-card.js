const TYPE = 'ha-welcome-orbit-card';
const VERSION = '1.1.0';
const PALETTES = ['aurora', 'ocean', 'sunset', 'lavender'];
const DEFAULTS = { title: 'Home overview', name: '', show_name: true, show_date: true, show_time: true, weather_entity: '', time_zone: '', palette: 'aurora', animate: true, read_only: false, layout: 'classic', shortcuts_expanded: false, settings_path: '' };
const CONDITIONS = {
 'clear-night': ['Clear night', 'mdi:weather-night'], cloudy: ['Cloudy', 'mdi:weather-cloudy'], fog: ['Fog', 'mdi:weather-fog'], hail: ['Hail', 'mdi:weather-hail'],
 lightning: ['Thunderstorms', 'mdi:weather-lightning'], 'lightning-rainy': ['Thunderstorms and rain', 'mdi:weather-lightning-rainy'], partlycloudy: ['Partly cloudy', 'mdi:weather-partly-cloudy'],
 pouring: ['Heavy rain', 'mdi:weather-pouring'], rainy: ['Rainy', 'mdi:weather-rainy'], snowy: ['Snowy', 'mdi:weather-snowy'], 'snowy-rainy': ['Snow and rain', 'mdi:weather-snowy-rainy'],
 sunny: ['Sunny', 'mdi:weather-sunny'], windy: ['Windy', 'mdi:weather-windy'], 'windy-variant': ['Windy and cloudy', 'mdi:weather-windy-variant'], exceptional: ['Exceptional weather', 'mdi:alert-circle-outline'],
};
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const icon = (v) => '<ha-icon icon="' + esc(v) + '"></ha-icon>';
const localPath = (v) => typeof v === 'string' && /^\/(?!\/)[^\s\\]*$/.test(v) && !/[\u0000-\u001f\u007f]/.test(v);
const STYLE = [
 ':host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color,#202b3c)}*{box-sizing:border-box}',
 'ha-card{display:block;container:welcome/inline-size;max-width:100%;min-width:0;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color,#dfe5eb) 65%,transparent);border-radius:22px;background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 2px 5px #14233716);--accent:#078f72;--accent2:#27b7b0;--accent3:#54a9db}',
 'ha-card[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}ha-card[data-palette=sunset]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}ha-card[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}',
 '.shell{position:relative;isolation:isolate;padding:22px;background:radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--accent2) 12%,transparent),transparent 65%)}.shell:before{content:"";position:absolute;left:24px;right:24px;top:0;height:2px;border-radius:0 0 4px 4px;background:linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3))}',
 '.header{display:flex;align-items:center;gap:18px;min-width:0}.copy{flex:1;min-width:0}.eyebrow{display:flex;gap:7px;align-items:center;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);overflow-wrap:anywhere}.eyebrow ha-icon{--mdc-icon-size:15px;flex:none}h1{margin:7px 0 8px;font-size:clamp(22px,4cqi,32px);font-weight:750;line-height:1.18;letter-spacing:-.04em;overflow-wrap:anywhere}.meta{display:flex;flex-wrap:wrap;gap:4px 10px;color:var(--secondary-text-color,#637080);font-size:12px;line-height:18px}.clock{font-variant-numeric:tabular-nums}',
 '.orbit{position:relative;flex:none;display:grid;place-items:center;width:76px;height:76px;border-radius:50%;background:color-mix(in srgb,var(--accent) 9%,transparent);color:var(--accent)}.orbit>ha-icon{--mdc-icon-size:32px}.ring{position:absolute;inset:-5px;border:1px solid color-mix(in srgb,var(--accent) 25%,transparent);border-radius:50%;pointer-events:none}.ring:after{content:"";position:absolute;left:11px;top:7px;width:7px;height:7px;background:var(--accent2);border-radius:50%;box-shadow:0 0 0 4px color-mix(in srgb,var(--accent2) 10%,transparent)}[data-animate=true] .ring{animation:welcome-orbit 36s linear infinite}@keyframes welcome-orbit{to{transform:rotate(360deg)}}',
 'button,a{font:inherit;color:inherit;-webkit-tap-highlight-color:transparent}button{cursor:pointer}button:disabled{cursor:not-allowed;opacity:.5}button:focus-visible,a:focus-visible{outline:2px solid var(--accent);outline-offset:3px}',
 '.weather{display:flex;align-items:center;gap:10px;margin-top:18px;padding:11px 13px;width:100%;min-width:0;text-align:left;border:1px solid color-mix(in srgb,var(--accent) 12%,transparent);border-radius:14px;background:color-mix(in srgb,var(--accent) 5%,transparent)}.weather>ha-icon{--mdc-icon-size:25px;color:var(--accent);flex:none}.weather-copy{min-width:0;flex:1}.weather-label{font-size:12px;font-weight:650;overflow-wrap:anywhere}.weather-name{font-size:10px;line-height:15px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}.temperature{font-size:20px;font-weight:700;letter-spacing:-.03em;white-space:nowrap;flex:none}.temperature small{font-size:12px;font-weight:500;margin-left:3px}',
 '.shortcuts{display:flex;flex-wrap:wrap;gap:7px;margin-top:16px}.shortcut{display:flex;align-items:center;gap:7px;min-width:0;max-width:100%;min-height:40px;padding:9px 12px;border:1px solid color-mix(in srgb,var(--accent) 12%,transparent);border-radius:12px;background:color-mix(in srgb,var(--accent) 7%,transparent);text-decoration:none;color:var(--primary-text-color,#202b3c);font-size:12px;line-height:18px}.shortcut ha-icon{flex:none;--mdc-icon-size:17px;color:var(--accent)}.shortcut-label{min-width:0;overflow-wrap:anywhere}.shortcut:hover:not(:disabled),.weather:hover{background:color-mix(in srgb,var(--accent) 13%,transparent)}.message{margin-top:12px;font-size:11px;color:var(--secondary-text-color,#637080)}.error{color:var(--error-color,#c74343)}',
 '.shortcuts[hidden]{display:none}.toolbar{display:grid;grid-template-columns:36px minmax(0,1fr) 36px;align-items:center;gap:8px;margin-bottom:16px}.toolbar-control{display:grid;place-items:center;width:36px;height:36px;border-radius:50%;border:1px solid var(--divider-color,#dfe5eb);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:0 2px 4px #14233712;text-decoration:none}.toolbar-control ha-icon{--mdc-icon-size:20px}.toolbar-center{display:flex;justify-content:center;min-width:0}.date-chip{display:flex;align-items:center;justify-content:center;min-height:34px;padding:6px 12px;border:1px solid var(--divider-color,#dfe5eb);border-radius:22px;font-size:12px;box-shadow:0 2px 4px #14233712}.greeting-name{display:block}.compact .eyebrow,.compact .orbit{display:none}.compact h1{font-size:23px;margin:0 0 6px;line-height:1.25}.compact .meta{margin-top:4px}.compact .shortcuts{display:grid;grid-template-columns:repeat(auto-fit,minmax(64px,1fr));gap:10px;margin-top:12px}.compact .shortcuts[hidden]{display:none}.compact .shortcut{--chip-color:var(--accent);flex-direction:column;justify-content:flex-start;gap:6px;padding:8px 4px;min-height:80px;width:100%;border-radius:28px;text-align:center;font-size:10px;line-height:14px;background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:0 2px 4px #14233712}.shortcut-icon{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:50%;color:var(--chip-color);background:color-mix(in srgb,var(--chip-color) 16%,transparent)}.shortcut-icon ha-icon{--mdc-icon-size:22px;color:var(--chip-color)}.compact .shortcut[data-index="1"]{--chip-color:#5264e8}.compact .shortcut[data-index="2"]{--chip-color:#ec9328}.compact .shortcut[data-index="3"]{--chip-color:#47ac59}.compact .shortcut[data-index="4"]{--chip-color:#8659da}.compact .shortcut[data-index="5"]{--chip-color:#d95d52}.compact .weather{display:flex;justify-content:center;flex-wrap:wrap;gap:4px 6px;width:auto;max-width:100%;margin:0;padding:6px 10px;min-height:34px;border-radius:22px;background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:0 2px 4px #14233712}.compact .weather>ha-icon{--mdc-icon-size:18px}.compact .temperature{font-size:12px;letter-spacing:0;margin:0}.compact .temperature small{font-size:11px}.chip-date{font-size:12px;white-space:nowrap}',
 '@container welcome (max-width:300px){.compact .toolbar{grid-template-rows:36px auto}.compact .toolbar-center{grid-row:2;grid-column:1/-1}.compact .toolbar-control,.compact .toolbar-placeholder{grid-row:1}.compact .settings,.compact .settings-placeholder{grid-column:3}.compact .shortcuts{grid-template-columns:repeat(2,minmax(0,1fr))}}',
 '@container welcome (max-width:360px){.shell{padding:18px}.header{gap:12px}.orbit{width:54px;height:54px}.orbit>ha-icon{--mdc-icon-size:25px}.ring{inset:-3px}.ring:after{left:6px;top:4px;width:6px;height:6px}h1{font-size:23px}.temperature{font-size:18px}.weather{padding:10px;gap:7px}.shortcut{padding:8px 10px}}',
 '@container welcome (max-width:240px){.shell{padding:14px}.orbit{display:none}h1{font-size:21px}.weather{flex-wrap:wrap}.temperature{margin-left:auto}.shortcut{width:100%}.meta{font-size:11px}}@media(prefers-reduced-motion:reduce){[data-animate=true] .ring{animation:none}}',
].join('');
class WelcomeOrbitCard extends HTMLElement {
 static getStubConfig() { return { ...DEFAULTS }; }
 static getConfigForm() {
  const schema = [
   { name: 'layout', default: DEFAULTS.layout, selector: { select: { options: ['classic', 'compact'], mode: 'dropdown' } } },
   { name: 'shortcuts_expanded', default: false, selector: { boolean: {} } },
   { name: 'settings_path', selector: { text: {} } },
   { name: 'title', default: DEFAULTS.title, selector: { text: {} } }, { name: 'name', selector: { text: {} } },
   ...['show_name', 'show_date', 'show_time', 'animate', 'read_only'].map((name) => ({ name, default: DEFAULTS[name], selector: { boolean: {} } })),
   { name: 'weather_entity', selector: { entity: { domain: 'weather' } } }, { name: 'time_zone', selector: { text: {} } },
   { name: 'palette', default: DEFAULTS.palette, selector: { select: { options: PALETTES, mode: 'dropdown' } } },
  ];
  for (let i = 1; i <= 8; i++) schema.push({ type: 'expandable', name: '', title: 'Shortcut ' + i + ' (optional)', schema: [
   { name: 'path_' + i, selector: { text: {} } }, { name: 'scene_' + i, selector: { entity: { domain: 'scene' } } },
   { name: 'name_' + i, selector: { text: {} } }, { name: 'icon_' + i, selector: { icon: {} } },
  ] });
  const labels = { title: 'Header title', name: 'Greeting name override (optional)', show_name: 'Include user name in greeting', show_date: 'Show date', show_time: 'Show time', animate: 'Animate decorative orbit', read_only: 'Read-only scenes (navigation still works)', weather_entity: 'Weather entity (optional)', time_zone: 'Time zone override (optional, e.g. Europe/London)', palette: 'Orbit palette', layout: 'Header layout', shortcuts_expanded: 'Start compact shortcuts expanded', settings_path: 'Settings path (optional, compact layout)' };
  return { schema, computeLabel: ({ name }) => labels[name] || name.replace(/^(path|scene|name|icon)_\d$/, (_, field) => ({ path: 'Room / dashboard path', scene: 'Scene to activate', name: 'Label', icon: 'Icon' })[field]), computeHelper: ({ name }) => name.startsWith('path_') || name.startsWith('scene_') ? 'Choose a local path OR a scene, not both. Leave both empty to hide this shortcut.' : name === 'settings_path' ? 'Copy a local HA path, for example /config/dashboard. Empty hides the settings button. No path is guessed.' : name === 'layout' ? 'Compact adds a collapsible shortcut row and a top weather/date chip. Classic preserves the original appearance.' : undefined };
 }
 constructor() {
  super(); this.attachShadow({ mode: 'open' }); this._config = { ...DEFAULTS }; this._busy = new Set(); this._signature = ''; this._message = ''; this._error = '';
  this.shadowRoot.addEventListener('click', (event) => {
   const target = event.composedPath().find((el) => el?.dataset?.action);
   if (!target || target.disabled) return;
   if (['navigate', 'settings'].includes(target.dataset.action)) {
    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey || event.button > 0) return;
    event.preventDefault();
   }
   void this._activate(target.dataset.action, target.dataset.index);
  });
 }
 connectedCallback() { if (!this._timer) this._timer = setInterval(() => this._update(), 30000); this._update(); }
 disconnectedCallback() { clearInterval(this._timer); this._timer = undefined; }
 setConfig(config) {
  if (!config || typeof config !== 'object' || Array.isArray(config)) throw new Error('Welcome Orbit requires an object configuration.');
  for (const key of ['title', 'name', 'time_zone', 'weather_entity', 'settings_path']) if (config[key] != null && typeof config[key] !== 'string') throw new Error(key + ' must be text.');
  if (config.layout != null && !['classic', 'compact'].includes(config.layout)) throw new Error('layout must be classic or compact.');
  if (config.settings_path && !localPath(config.settings_path)) throw new Error('settings_path must be a local Home Assistant path.');
  if (config.weather_entity && !/^weather\.[a-z0-9_]+$/.test(config.weather_entity)) throw new Error('weather_entity must be a weather entity ID.');
  if (config.time_zone) { try { new Intl.DateTimeFormat('en', { timeZone: config.time_zone }); } catch { throw new Error('time_zone must be a valid IANA time zone.'); } }
  for (const key of ['show_name', 'show_date', 'show_time', 'animate', 'read_only', 'shortcuts_expanded']) if (config[key] != null && typeof config[key] !== 'boolean') throw new Error(key + ' must be true or false.');
  for (let i = 1; i <= 8; i++) {
   for (const key of ['path_', 'scene_', 'name_', 'icon_']) if (config[key + i] != null && typeof config[key + i] !== 'string') throw new Error(key + i + ' must be text.');
   if (config['path_' + i] && !localPath(config['path_' + i])) throw new Error('path_' + i + ' must be a local path such as /dashboard-home/kitchen.');
   if (config['scene_' + i] && !/^scene\.[a-z0-9_]+$/.test(config['scene_' + i])) throw new Error('scene_' + i + ' must be a scene entity ID.');
   if (config['path_' + i] && config['scene_' + i]) throw new Error('Shortcut ' + i + ': choose a path OR a scene, not both.');
  }
  if (this._expanded === undefined || this._config.layout !== (config.layout ?? DEFAULTS.layout) || this._config.shortcuts_expanded !== (config.shortcuts_expanded ?? DEFAULTS.shortcuts_expanded)) this._expanded = config.shortcuts_expanded ?? DEFAULTS.shortcuts_expanded;
  this._config = { ...DEFAULTS, ...config, palette: PALETTES.includes(config.palette) ? config.palette : DEFAULTS.palette };
  this._signature = ''; this._message = ''; this._error = ''; this._update();
 }
 set hass(value) { this._hass = value; this._update(); }
 get hass() { return this._hass; }
 getCardSize() { return 4; }
 getGridOptions() { return { columns: 12, min_columns: 6 }; }
 _now() { return new Date(); }
 _zone() {
  const zone = this._config.time_zone || this._hass?.config?.time_zone;
  try { if (zone) { new Intl.DateTimeFormat('en', { timeZone: zone }); return zone; } } catch { /* Browser zone fallback for malformed host data. */ }
  return undefined;
 }
 _locale() { return this._hass?.locale?.language || this._hass?.language || 'en'; }
 _date(now, options) {
  try { return new Intl.DateTimeFormat(this._locale(), { timeZone: this._zone(), ...options }).format(now); }
  catch { return new Intl.DateTimeFormat('en', { timeZone: this._zone(), ...options }).format(now); }
 }
 _greeting(now) {
  const hour = Number(new Intl.DateTimeFormat('en-GB', { timeZone: this._zone(), hour: '2-digit', hourCycle: 'h23' }).format(now));
  return hour >= 5 && hour < 12 ? ['Good morning', 'mdi:weather-sunset-up'] : hour >= 12 && hour < 18 ? ['Good afternoon', 'mdi:white-balance-sunny'] : hour >= 18 && hour < 22 ? ['Good evening', 'mdi:weather-sunset-down'] : ['Good night', 'mdi:weather-night'];
 }
 _shortcuts() {
  const c = this._config;
  return Array.from({ length: 8 }, (_, k) => k + 1).filter((i) => c['path_' + i] || c['scene_' + i]).map((i) => {
   const scene = c['scene_' + i], s = this._hass?.states?.[scene];
   return { i, scene, path: c['path_' + i], label: c['name_' + i] || s?.attributes?.friendly_name || (scene ? 'Scene' : 'Room ' + i), icon: c['icon_' + i] || s?.attributes?.icon || (scene ? 'mdi:palette-outline' : 'mdi:door-open') };
  });
 }
 _canScene(id) { return !this._config.read_only && !!this._hass?.states?.[id] && this._hass.states[id].state !== 'unavailable' && !!this._hass?.services?.scene?.turn_on; }
 _update() {
  if (!this._hass) return;
  const now = this._now(), shortcuts = this._shortcuts();
  const sig = JSON.stringify([this._config, this._expanded, this._hass.user?.name, this._locale(), this._zone(), Math.floor(now.getTime() / 60000), this._hass.states?.[this._config.weather_entity], shortcuts.map((s) => [s, this._canScene(s.scene)]), [...this._busy], this._message, this._error]);
  if (sig === this._signature) return;
  this._signature = sig; this._render(now, shortcuts);
 }
 _weather(now = this._now()) {
  const id = this._config.weather_entity;
  const compact = this._config.layout === 'compact', date = this._config.show_date ? '<time class="chip-date">' + esc(this._date(now, { day: 'numeric', month: 'short' })) + '</time>' : '';
  if (!id) return compact && date ? '<span class="date-chip">' + date + '</span>' : '';
  const s = this._hass.states?.[id], a = s?.attributes || {}, valid = s && !['unavailable', 'unknown', ''].includes(s.state);
  const condition = valid && Object.hasOwn(CONDITIONS, s.state) ? CONDITIONS[s.state] : [valid ? String(s.state) : 'Weather unavailable', 'mdi:weather-cloudy-alert'];
  let label = condition[0];
  if (valid) { try { label = this._hass.formatEntityState?.(s) || label; } catch { /* English condition fallback. */ } }
  const temp = a.temperature, numeric = (typeof temp === 'number' || typeof temp === 'string' && temp.trim() !== '') && Number.isFinite(Number(temp));
  let formatted; if (numeric) { try { formatted = new Intl.NumberFormat(this._locale(), { maximumFractionDigits: 1 }).format(Number(temp)); } catch { formatted = String(temp); } }
  if (compact) return '<button class="weather" data-action="weather" title="' + esc(label) + '" aria-label="More information: ' + esc(a.friendly_name || 'Weather') + ', ' + esc(label + (this._config.show_date ? ', ' + this._date(now, { day: 'numeric', month: 'short' }) : '') + (valid && numeric ? ', ' + formatted + ' ' + (a.temperature_unit || '') : '')) + '"' + (!s ? ' disabled' : '') + '>' + icon(condition[1]) + date + (valid && numeric ? '<span class="temperature">' + esc(formatted) + '<small>' + esc(a.temperature_unit || '') + '</small></span>' : '') + '</button>';
  return '<button class="weather" data-action="weather" aria-label="More information: ' + esc(a.friendly_name || 'Weather') + '">' + icon(condition[1]) + '<div class="weather-copy"><div class="weather-label">' + esc(label) + '</div><div class="weather-name">' + esc(a.friendly_name || 'Current weather') + '</div></div>' + (valid && numeric ? '<div class="temperature">' + esc(formatted) + '<small>' + esc(a.temperature_unit || '') + '</small></div>' : '') + '</button>';
 }
 _render(now, shortcuts) {
  const c = this._config, [greeting, image] = this._greeting(now), name = c.show_name ? c.name || this._hass.user?.name || '' : '';
  const time = c.show_time ? '<time class="clock">' + esc(this._date(now, { hour: '2-digit', minute: '2-digit' })) + '</time>' : '';
  const date = c.show_date ? '<time class="date">' + esc(this._date(now, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })) + '</time>' : '';
  const links = shortcuts.map((s) => {
   const inner = (c.layout === 'compact' ? '<span class="shortcut-icon">' + icon(s.icon) + '</span>' : icon(s.icon)) + '<span class="shortcut-label">' + esc(s.label) + '</span>';
   return s.path ? '<a class="shortcut" data-action="navigate" data-index="' + s.i + '" href="' + esc(s.path) + '">' + inner + '</a>' : '<button class="shortcut" data-action="scene" data-index="' + s.i + '" aria-label="Activate scene: ' + esc(s.label) + '"' + (!this._canScene(s.scene) || this._busy.has(s.scene) ? ' disabled' : '') + (this._busy.has(s.scene) ? ' aria-busy="true"' : '') + '>' + inner + '</button>';
  }).join('');
  const focused = this.shadowRoot.activeElement, focusAction = focused?.dataset?.action, focusIndex = focused?.dataset?.index;
  const compact = c.layout === 'compact';
  const toolbar = compact ? '<div class="toolbar">' + (links ? '<button class="toolbar-control toggle" data-action="expand" aria-expanded="' + this._expanded + '" aria-controls="welcome-shortcuts" aria-label="' + (this._expanded ? 'Hide quick navigation' : 'Show quick navigation') + '">' + icon(this._expanded ? 'mdi:chevron-up' : 'mdi:chevron-down') + '</button>' : '<span class="toolbar-placeholder"></span>') + '<div class="toolbar-center">' + this._weather(now) + '</div>' + (c.settings_path ? '<a class="toolbar-control settings" data-action="settings" aria-label="Open settings" href="' + esc(c.settings_path) + '">' + icon('mdi:cog-outline') + '</a>' : '<span class="toolbar-placeholder settings-placeholder"></span>') + '</div>' : '';
  const heading = compact ? '<h1>' + esc(greeting) + (name ? ',<span class="greeting-name">' + esc(name) + '</span>' : '') + '</h1>' + (time ? '<div class="meta">' + time + '</div>' : '') : '<div class="eyebrow">' + icon('mdi:home-variant-outline') + '<span>' + esc(c.title || 'Home overview') + '</span></div><h1>' + esc(greeting + (name ? ', ' + name : '')) + '</h1>' + (time || date ? '<div class="meta">' + date + time + '</div>' : '');
  this.shadowRoot.innerHTML = '<style>' + STYLE + '</style><ha-card data-palette="' + c.palette + '" data-animate="' + c.animate + '"><div class="shell' + (compact ? ' compact' : '') + '">' + toolbar + '<div class="header"><div class="copy">' + heading + '</div>' + (!compact ? '<div class="orbit" aria-hidden="true"><span class="ring"></span>' + icon(image) + '</div>' : '') + '</div>' + (!compact ? this._weather(now) : '') + (links ? '<nav id="welcome-shortcuts" class="shortcuts" aria-label="Rooms and scenes"' + (compact && !this._expanded ? ' hidden' : '') + '>' + links + '</nav>' : '') + (this._error ? '<div class="message error" role="alert">' + esc(this._error) + '</div>' : this._message ? '<div class="message" role="status">' + esc(this._message) + '</div>' : '') + '</div></ha-card>';
  if (focusAction) [...this.shadowRoot.querySelectorAll('[data-action]')].find((el) => el.dataset.action === focusAction && el.dataset.index === focusIndex)?.focus();
 }
 _navigate(path, settings = false) {
  const current = window.location.pathname + window.location.search + window.location.hash;
  if (current === path) return;
  try { window.history.pushState({ from: current }, '', path); window.dispatchEvent(new CustomEvent('location-changed', { detail: { replace: false } })); }
  catch { this._error = settings ? 'The settings view could not be opened. Check the configured path.' : 'The room view could not be opened. Check the configured path.'; this._update(); }
 }
 async _activate(action, index) {
  if (action === 'expand') {
   if (this._config.layout === 'compact' && this._shortcuts().length) { this._expanded = !this._expanded; this._update(); }
   return;
  }
  if (action === 'settings') {
   if (this._config.layout === 'compact' && this._config.settings_path) this._navigate(this._config.settings_path, true);
   return;
  }
  if (action === 'weather') {
   if (this._hass?.states?.[this._config.weather_entity]) this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: this._config.weather_entity }, bubbles: true, composed: true }));
   return;
  }
  const slot = this._shortcuts().find((s) => String(s.i) === String(index));
  if (!slot) return;
  if (action === 'navigate' && slot.path) {
   this._navigate(slot.path);
   return;
  }
  if (action !== 'scene' || !slot.scene || !this._canScene(slot.scene) || this._busy.has(slot.scene)) return;
  this._busy.add(slot.scene); this._message = ''; this._error = ''; this._update();
  try { await this._hass.callService('scene', 'turn_on', { entity_id: slot.scene }); this._message = 'Scene requested'; }
  catch { this._error = 'The scene could not be activated. Check Home Assistant and try again.'; }
  finally { this._busy.delete(slot.scene); this._update(); }
 }
}
if (!customElements.get(TYPE)) customElements.define(TYPE, WelcomeOrbitCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === TYPE)) window.customCards.push({ type: TYPE, name: 'Welcome Orbit Card', description: 'A personal dashboard greeting, date, current weather and optional room or scene shortcuts.', preview: true, documentationURL: 'https://github.com/Liionboy/ha-welcome-orbit-card' });
console.info('WELCOME ORBIT ' + VERSION);
