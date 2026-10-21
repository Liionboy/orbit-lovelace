const TYPE = 'ha-scenes-orbit-card';
const VERSION = '1.0.0';
const PALETTES = ['aurora', 'ocean', 'sunset', 'lavender'];
const DEFAULTS = { title: 'Scenes Orbit', palette: 'aurora', entities: [], read_only: false, confirmation: true };
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const icon = (v) => '<ha-icon icon="' + esc(v) + '"></ha-icon>';
const domain = (id) => String(id).split('.')[0];
const STYLE = [
 ':host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color,#202b3c)}*{box-sizing:border-box}',
 'ha-card{display:block;container:scenes/inline-size;min-width:0;max-width:100%;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color,#dfe5eb) 65%,transparent);border-radius:20px;background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 2px 5px #14233716);--accent:#078f72;--accent2:#27b7b0;--accent3:#54a9db}',
 '[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}[data-palette=sunset]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}',
 '.shell{position:relative;padding:16px;background:radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 6%,transparent),transparent 80%)}.shell:before{content:"";position:absolute;top:0;left:20px;right:20px;height:2px;background:linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3));border-radius:0 0 4px 4px}',
 '.header{display:flex;align-items:center;gap:9px;margin-bottom:13px;min-width:0}.header>ha-icon{--mdc-icon-size:24px;flex:none;color:var(--accent)}h2{margin:0;font-size:16px;line-height:20px;font-weight:750;letter-spacing:-.02em;overflow-wrap:anywhere}.subtitle{font-size:10px;line-height:15px;color:var(--secondary-text-color,#637080)}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}',
 'button{font:inherit;color:inherit;cursor:pointer}button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}button:disabled{cursor:not-allowed;opacity:.5}.tile{display:flex;align-items:stretch;min-width:0;border:1px solid color-mix(in srgb,var(--accent) 12%,transparent);border-radius:13px;background:color-mix(in srgb,var(--accent) 6%,transparent)}.activate{flex:1;min-width:0;display:flex;align-items:center;gap:8px;min-height:62px;padding:11px;border:0;background:none;text-align:left;border-radius:12px}.activate>ha-icon{--mdc-icon-size:22px;flex:none;color:var(--accent)}.copy{min-width:0}.name{display:block;font-size:12px;font-weight:650;line-height:16px;overflow-wrap:anywhere}.state{display:block;margin-top:3px;font-size:10px;line-height:14px;color:var(--secondary-text-color,#637080)}.info{flex:none;align-self:center;width:30px;height:40px;border:0;background:none;color:var(--secondary-text-color,#637080);padding:0}.info ha-icon{--mdc-icon-size:16px}.tile.running{border-color:var(--accent)}.tile.confirm{background:color-mix(in srgb,var(--accent) 15%,transparent)}.activate:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 8%,transparent)}.hint,.message{font-size:11px;line-height:16px;color:var(--secondary-text-color,#637080)}.message{margin-top:10px}.error{color:var(--error-color,#c74343)}.cancel{margin-top:10px;min-height:36px;border:1px solid var(--divider-color,#dfe5eb);border-radius:9px;background:none;padding:7px 10px;font-size:11px}',
 '@container scenes (max-width:280px){.shell{padding:12px}.grid{grid-template-columns:1fr}.activate{min-height:52px}}@media(prefers-reduced-motion:reduce){*{transition:none}}',
].join('');
class ScenesOrbitCard extends HTMLElement {
 static getStubConfig() { return { ...DEFAULTS, entities: [] }; }
 static getConfigForm() {
  const schema = [
   { name: 'title', default: DEFAULTS.title, selector: { text: {} } },
   { name: 'entities', selector: { entity: { domain: ['scene', 'script'], multiple: true } } },
   { name: 'palette', default: DEFAULTS.palette, selector: { select: { options: PALETTES, mode: 'dropdown' } } },
   { name: 'read_only', default: false, selector: { boolean: {} } }, { name: 'confirmation', default: true, selector: { boolean: {} } },
  ];
  const labels = { title: 'Card title', entities: 'Scenes and scripts (optional, up to 24)', palette: 'Orbit palette', read_only: 'Read-only mode', confirmation: 'Require a second tap to confirm' };
  return { schema, computeLabel: ({ name }) => labels[name] };
 }
 constructor() {
  super(); this.attachShadow({ mode: 'open' }); this._config = { ...DEFAULTS, entities: [] }; this._busy = new Set(); this._armed = ''; this._message = ''; this._error = ''; this._signature = '';
  this.shadowRoot.addEventListener('click', (event) => { const target = event.composedPath().find((el) => el?.dataset?.action); if (target && !target.disabled) void this._activate(target.dataset.entity, target.dataset.action); });
 }
 setConfig(config) {
  if (!config || typeof config !== 'object' || Array.isArray(config)) throw new Error('Scenes Orbit requires an object configuration.');
  if (config.title != null && typeof config.title !== 'string') throw new Error('title must be text.');
  for (const key of ['read_only', 'confirmation']) if (config[key] != null && typeof config[key] !== 'boolean') throw new Error(key + ' must be true or false.');
  if (config.entities != null && (!Array.isArray(config.entities) || config.entities.length > 24 || config.entities.some((id) => typeof id !== 'string' || !/^(scene|script)\.[a-z0-9_]+$/.test(id)))) throw new Error('entities must be a list of up to 24 scene or script IDs.');
  this._config = { ...DEFAULTS, ...config, entities: [...new Set(config.entities || [])], palette: PALETTES.includes(config.palette) ? config.palette : DEFAULTS.palette };
  this._armed = ''; this._signature = ''; this._message = ''; this._error = ''; this._update();
 }
 set hass(value) { this._hass = value; this._update(); }
 get hass() { return this._hass; }
 getCardSize() { return Math.max(2, 1 + Math.ceil(this._config.entities.length / 2)); }
 getGridOptions() { return { columns: 6, min_columns: 6 }; }
 connectedCallback() { this._update(); }
 disconnectedCallback() { this._armed = ''; }
 _state(id) { return this._hass?.states?.[id]; }
 _reason(id) {
  const s = this._state(id), d = domain(id);
  if (!s || s.state === 'unavailable') return 'Unavailable';
  if (d === 'script' && s.state === 'on') return 'Running';
  if (d === 'script' && s.state !== 'off') return 'State unknown';
  if (this._config.read_only) return 'Read-only';
  if (!this._hass?.services?.[d]?.turn_on) return 'Action unavailable';
  return '';
 }
 _can(id) { return this._config.entities.includes(id) && !this._reason(id) && !this._busy.has(id); }
 _update() {
  if (!this._hass) return;
  if (this._armed && !this._can(this._armed)) this._armed = '';
  const signature = JSON.stringify([this._config, this._config.entities.map((id) => [this._state(id), this._reason(id)]), [...this._busy], this._armed, this._message, this._error]);
  if (signature === this._signature) return;
  this._signature = signature; this._render();
 }
 _render() {
  const focused = this.shadowRoot.activeElement, focusId = focused?.dataset?.entity, focusAction = focused?.dataset?.action;
  const tiles = this._config.entities.map((id) => {
   const s = this._state(id), d = domain(id), name = s?.attributes?.friendly_name || id, reason = this._reason(id), busy = this._busy.has(id), armed = this._armed === id;
   const state = busy ? 'Sending…' : reason || (armed ? 'Tap again to confirm' : d === 'scene' ? 'Scene · ready' : 'Script · ready');
   return '<article class="tile ' + (reason === 'Running' ? 'running ' : '') + (armed ? 'confirm' : '') + '"><button class="activate" data-action="activate" data-entity="' + esc(id) + '" aria-label="' + (armed ? 'Confirm: ' : 'Activate: ') + esc(name) + '"' + (!this._can(id) ? ' disabled' : '') + (busy ? ' aria-busy="true"' : '') + '>' + icon(s?.attributes?.icon || (d === 'scene' ? 'mdi:palette-outline' : 'mdi:script-text-outline')) + '<span class="copy"><span class="name">' + esc(name) + '</span><span class="state">' + esc(state) + '</span></span></button><button class="info" data-action="info" data-entity="' + esc(id) + '" aria-label="More information: ' + esc(name) + '">' + icon('mdi:information-outline') + '</button></article>';
  }).join('');
  this.shadowRoot.innerHTML = '<style>' + STYLE + '</style><ha-card data-palette="' + this._config.palette + '"><div class="shell"><header class="header">' + icon('mdi:palette-outline') + '<div><h2>' + esc(this._config.title || DEFAULTS.title) + '</h2><div class="subtitle">Scenes &amp; scripts</div></div></header>' + (tiles ? '<section class="grid" aria-label="Scenes and scripts">' + tiles + '</section>' : '<p class="hint">Choose scenes or scripts in the card editor. No entities are required.</p>') + (this._armed ? '<button class="cancel" data-action="cancel" data-entity="">Cancel confirmation</button>' : '') + (this._error ? '<div role="alert" class="message error">' + esc(this._error) + '</div>' : this._message ? '<div role="status" class="message">' + esc(this._message) + '</div>' : '') + '</div></ha-card>';
  if (focusAction) [...this.shadowRoot.querySelectorAll('[data-action]')].find((el) => el.dataset.entity === focusId && el.dataset.action === focusAction)?.focus();
 }
 async _activate(id, action) {
  if (action === 'cancel' && id === '') { this._armed = ''; this._update(); return; }
  if (!this._config.entities.includes(id)) return;
  if (action === 'info') { this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: id }, bubbles: true, composed: true })); return; }
  if (action !== 'activate' || !this._can(id)) return;
  if (this._config.confirmation && this._armed !== id) { this._armed = id; this._message = ''; this._error = ''; this._update(); return; }
  this._armed = ''; this._busy.add(id); this._message = ''; this._error = ''; this._update();
  try { await this._hass.callService(domain(id), 'turn_on', { entity_id: id }); this._message = 'Activation requested'; }
  catch { this._error = 'The action could not be sent. Check Home Assistant and try again.'; }
  finally { this._busy.delete(id); this._update(); }
 }
}
if (!customElements.get(TYPE)) customElements.define(TYPE, ScenesOrbitCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === TYPE)) window.customCards.push({ type: TYPE, name: 'Scenes Orbit Card', description: 'Compact optional scene and script actions in the Orbit style.', preview: true, documentationURL: 'https://github.com/Liionboy/ha-scenes-orbit-card' });
console.info('SCENES ORBIT ' + VERSION);
