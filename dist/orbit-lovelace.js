/* Orbit Lovelace v1.10.1 — MIT. */
/*
LICENSE
MIT License

Copyright (c) 2026 Liionboy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


licenses/lit-LICENSE
BSD 3-Clause License

Copyright (c) 2017 Google LLC. All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

licenses/lit-html-LICENSE
BSD 3-Clause License

Copyright (c) 2017 Google LLC. All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


licenses/lit-element-LICENSE
BSD 3-Clause License

Copyright (c) 2017 Google LLC. All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

licenses/@lit-reactive-element-LICENSE
BSD 3-Clause License

Copyright (c) 2017 Google LLC. All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

licenses/custom-card-helpers-LICENSE
MIT License

Copyright (c) 2019 Custom cards for Home Assistant

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
(() => {
const suite = window.orbitLovelace ||= {version:"1.10.1",components:{},skipped:{},errors:[]};
/* ha-alerts-orbit-card @ 1.0.0 (83df41182a3b9b4a8f2b02e806be9bbeeff36ecf) */
try { (() => {
const knownTypes=["ha-alerts-orbit-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["ha-alerts-orbit-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
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
const STYLE = ":host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color,#202b3c)}*{box-sizing:border-box}ha-card{display:block;container:orbit/inline-size;overflow:hidden;min-width:0;max-width:100%;border-radius:var(--orbit-theme-card-radius,18px);border:1px solid var(--divider-color,#dfe5eb);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 2px 5px #14233712));--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0)}ha-card[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7}ha-card[data-palette=sunset]{--accent:#cf573e;--accent2:#ee973f}ha-card[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8}.shell{padding:14px;background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--accent2) 10%,transparent),transparent 65%));border-top:2px solid var(--accent)}header{display:flex;gap:10px;align-items:center;min-width:0}.orbit{position:relative;display:grid;place-items:center;width:34px;height:34px;flex:none;border:1px solid color-mix(in srgb,var(--accent) 35%,transparent);border-radius:50%;color:var(--accent);background:color-mix(in srgb,var(--accent) 8%,transparent)}.orbit:after{content:'';position:absolute;top:-2px;right:3px;width:6px;height:6px;border-radius:50%;background:var(--accent2)}ha-icon{--mdc-icon-size:20px;flex:none}.heading{min-width:0;flex:1}h2{margin:0;font-size:15px;line-height:20px;font-weight:700;overflow-wrap:anywhere}.summary{font-size:11px;line-height:17px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}.counts{display:flex;flex-wrap:wrap;gap:4px 10px;margin-top:10px;font-size:11px;line-height:17px;color:var(--secondary-text-color,#637080)}.counts b{color:var(--primary-text-color,#202b3c)}.rows{margin-top:8px;display:grid;gap:4px}button{display:flex;width:100%;min-width:0;gap:9px;align-items:center;min-height:44px;padding:7px 8px;border:0;border-radius:10px;background:color-mix(in srgb,var(--accent) 5%,transparent);color:inherit;font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent}button:hover{background:color-mix(in srgb,var(--accent) 12%,transparent)}button:focus-visible{outline:2px solid var(--accent);outline-offset:-2px}button ha-icon{color:var(--accent)}.copy{flex:1;min-width:0}.name{font-size:12px;line-height:17px;overflow-wrap:anywhere}.value{font-size:11px;line-height:16px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}.meter{height:3px;border-radius:2px;overflow:hidden;background:var(--divider-color,#dfe5eb);margin-top:4px}.meter i{display:block;height:100%;width:var(--level);background:var(--accent)}button[data-status=critical],button[data-status=active]{--accent:var(--error-color,#c74343)}button[data-status=low]{--accent:var(--warning-color,#a66a08)}button[data-status=unknown]{--accent:var(--secondary-text-color,#637080)}.hint{margin:10px 0 0;font-size:12px;line-height:18px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}@container orbit (max-width:240px){.shell{padding:11px}header{gap:8px}.orbit{width:30px;height:30px}h2{font-size:14px}button{padding:7px 5px;gap:7px}}";
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

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="ha-alerts-orbit-card"))window.customCards.push({type:"ha-alerts-orbit-card",name:"Alerts Orbit",description:"Included in Orbit Lovelace",preview:false});
suite.components["ha-alerts-orbit-card"]={version:"1.0.0",types:["ha-alerts-orbit-card"]};
})() } catch(error){suite.errors.push({component:"ha-alerts-orbit-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","ha-alerts-orbit-card",error);}
/* ha-battery-orbit-card @ 1.0.0 (e0f0a75d4fe880710789a82d2e0a4b88114d4ce6) */
try { (() => {
const knownTypes=["ha-battery-orbit-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["ha-battery-orbit-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
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
const STYLE = ":host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color,#202b3c)}*{box-sizing:border-box}ha-card{display:block;container:orbit/inline-size;overflow:hidden;min-width:0;max-width:100%;border-radius:var(--orbit-theme-card-radius,18px);border:1px solid var(--divider-color,#dfe5eb);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 2px 5px #14233712));--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0)}ha-card[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7}ha-card[data-palette=sunset]{--accent:#cf573e;--accent2:#ee973f}ha-card[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8}.shell{padding:14px;background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--accent2) 10%,transparent),transparent 65%));border-top:2px solid var(--accent)}header{display:flex;gap:10px;align-items:center;min-width:0}.orbit{position:relative;display:grid;place-items:center;width:34px;height:34px;flex:none;border:1px solid color-mix(in srgb,var(--accent) 35%,transparent);border-radius:50%;color:var(--accent);background:color-mix(in srgb,var(--accent) 8%,transparent)}.orbit:after{content:'';position:absolute;top:-2px;right:3px;width:6px;height:6px;border-radius:50%;background:var(--accent2)}ha-icon{--mdc-icon-size:20px;flex:none}.heading{min-width:0;flex:1}h2{margin:0;font-size:15px;line-height:20px;font-weight:700;overflow-wrap:anywhere}.summary{font-size:11px;line-height:17px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}.counts{display:flex;flex-wrap:wrap;gap:4px 10px;margin-top:10px;font-size:11px;line-height:17px;color:var(--secondary-text-color,#637080)}.counts b{color:var(--primary-text-color,#202b3c)}.rows{margin-top:8px;display:grid;gap:4px}button{display:flex;width:100%;min-width:0;gap:9px;align-items:center;min-height:44px;padding:7px 8px;border:0;border-radius:10px;background:color-mix(in srgb,var(--accent) 5%,transparent);color:inherit;font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent}button:hover{background:color-mix(in srgb,var(--accent) 12%,transparent)}button:focus-visible{outline:2px solid var(--accent);outline-offset:-2px}button ha-icon{color:var(--accent)}.copy{flex:1;min-width:0}.name{font-size:12px;line-height:17px;overflow-wrap:anywhere}.value{font-size:11px;line-height:16px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}.meter{height:3px;border-radius:2px;overflow:hidden;background:var(--divider-color,#dfe5eb);margin-top:4px}.meter i{display:block;height:100%;width:var(--level);background:var(--accent)}button[data-status=critical],button[data-status=active]{--accent:var(--error-color,#c74343)}button[data-status=low]{--accent:var(--warning-color,#a66a08)}button[data-status=unknown]{--accent:var(--secondary-text-color,#637080)}.hint{margin:10px 0 0;font-size:12px;line-height:18px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}@container orbit (max-width:240px){.shell{padding:11px}header{gap:8px}.orbit{width:30px;height:30px}h2{font-size:14px}button{padding:7px 5px;gap:7px}}";
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

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="ha-battery-orbit-card"))window.customCards.push({type:"ha-battery-orbit-card",name:"Battery Orbit",description:"Included in Orbit Lovelace",preview:false});
suite.components["ha-battery-orbit-card"]={version:"1.0.0",types:["ha-battery-orbit-card"]};
})() } catch(error){suite.errors.push({component:"ha-battery-orbit-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","ha-battery-orbit-card",error);}
/* ha-fan-orbit-card @ 1.0.0 (49a198c2ba7f121e9b6c557ca29f1bd4ee02ea2e) */
try { (() => {
const knownTypes=["ha-fan-orbit-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["ha-fan-orbit-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
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
 'ha-card{display:block;container:fan/inline-size;min-width:0;overflow:hidden;border-radius:var(--orbit-theme-card-radius,20px);border:1px solid var(--divider-color,#dfe5eb);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 2px 5px #14233716));--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0)}',
 'ha-card[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7}ha-card[data-palette=sunset]{--accent:#df5d42;--accent2:#ee973f}ha-card[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8}',
 '.shell{padding:16px;position:relative;background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 70%))}.shell:before{content:"";position:absolute;left:20px;right:20px;top:0;height:2px;background:var(--orbit-theme-strip-background,linear-gradient(90deg,var(--accent),var(--accent2)));pointer-events:none}',
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

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="ha-fan-orbit-card"))window.customCards.push({type:"ha-fan-orbit-card",name:"Fan Orbit Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["ha-fan-orbit-card"]={version:"1.0.0",types:["ha-fan-orbit-card"]};
})() } catch(error){suite.errors.push({component:"ha-fan-orbit-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","ha-fan-orbit-card",error);}
/* ha-nas-orbit-card @ 1.0.1 (085a7f9df377047d1ce2c2a4775c8b492dcbaf74) */
try { (() => {
const knownTypes=["ha-nas-orbit-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["ha-nas-orbit-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const CARD_TYPE = "ha-nas-orbit-card";
const VERSION = "1.0.1";
const PALETTES = new Set(["aurora", "ocean", "sunset", "lavender"]);
const DEFAULTS = {
  title: "NAS Orbit",
  palette: "aurora",
  auto_discover: true,
  status_entity: "",
  wake_button_entity: "",
  cpu_usage_entity: "",
  cpu_temperature_entity: "",
  memory_entity: "",
  storage_used_entity: "",
  storage_total_entity: "",
  disk_entities: [],
};

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:nas-orbit;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:var(--orbit-theme-card-radius,24px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1)));overflow:hidden}
  ha-card[data-palette="aurora"]{--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0);--accent3:var(--orbit-theme-accent-3,#54a9db)}ha-card[data-palette="ocean"]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}ha-card[data-palette="sunset"]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}ha-card[data-palette="lavender"]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}
  .shell{position:relative;padding:clamp(16px,3cqi,22px);background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 13%,transparent),transparent 54%),radial-gradient(ellipse at 100% 100%,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 48%))}.shell:before{position:absolute;top:0;right:22px;left:22px;height:3px;border-radius:0 0 4px 4px;background:var(--orbit-theme-strip-background,linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3)));content:""}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}.identity{display:flex;align-items:center;gap:12px;min-width:0}.icon-wrap{display:grid;place-items:center;flex:none;width:48px;height:48px;border:1px solid color-mix(in srgb,var(--accent) 24%,transparent);border-radius:17px;background:linear-gradient(145deg,var(--accent),var(--accent2));box-shadow:0 7px 18px color-mix(in srgb,var(--accent) 22%,transparent);color:#fff}.icon-wrap ha-icon{--mdc-icon-size:25px}.identity-copy{min-width:0}.eyebrow{color:var(--orbit-theme-accent,var(--accent));font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.title{overflow:hidden;margin:3px 0 0;font-size:clamp(16px,2.5cqi,20px);font-weight:780;letter-spacing:-.03em;text-overflow:ellipsis;white-space:nowrap}
  .pill{display:flex;align-items:center;gap:7px;padding:7px 10px;border:1px solid color-mix(in srgb,currentColor 12%,transparent);border-radius:999px;background:color-mix(in srgb,currentColor 8%,var(--card-background-color,#fff));color:var(--secondary-text-color);font-size:11px;font-weight:750;white-space:nowrap}.dot{width:7px;height:7px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 16%,transparent)}.pill.online{color:var(--success-color,#168b68)}.pill.offline{color:var(--error-color,#c74343)}
  .overview{display:grid;grid-template-columns:minmax(135px,.85fr) minmax(0,1.15fr);align-items:center;gap:18px;margin-top:17px;padding:17px;border:1px solid color-mix(in srgb,var(--accent) 17%,var(--divider-color));border-radius:19px;background:radial-gradient(circle at 25% 50%,color-mix(in srgb,var(--accent) 13%,transparent),transparent 34%),linear-gradient(135deg,color-mix(in srgb,var(--accent) 5%,var(--card-background-color,#fff)),var(--secondary-background-color,#f1f3f5))}
  .storage{display:grid;place-items:center;position:relative;width:132px;aspect-ratio:1;justify-self:center;border-radius:50%;background:conic-gradient(var(--accent) var(--used,0%),color-mix(in srgb,var(--accent) 12%,var(--divider-color)) 0);box-shadow:0 0 0 1px color-mix(in srgb,var(--accent) 20%,transparent),0 10px 28px color-mix(in srgb,var(--accent) 10%,transparent)}.storage:before{position:absolute;inset:9px;border:1px solid color-mix(in srgb,var(--accent) 16%,var(--divider-color));border-radius:50%;background:var(--card-background-color,#fff);content:""}.storage-core{z-index:1;display:grid;place-items:center;align-content:center;width:calc(100% - 34px);aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 35% 25%,color-mix(in srgb,var(--accent) 8%,var(--card-background-color,#fff)),var(--card-background-color,#fff));text-align:center}.storage-icon{color:var(--accent)}.storage-icon ha-icon{--mdc-icon-size:23px}.storage-value{margin-top:2px;font-size:20px;font-weight:820;letter-spacing:-.04em;font-variant-numeric:tabular-nums}.storage-label{margin-top:2px;color:var(--secondary-text-color);font-size:8px;font-weight:750;letter-spacing:.1em;text-transform:uppercase}.overview-copy{min-width:0}.section-label{color:var(--secondary-text-color);font-size:10px;font-weight:750;letter-spacing:.11em;text-transform:uppercase}.capacity{margin-top:5px;font-size:clamp(21px,5cqi,30px);font-weight:820;letter-spacing:-.05em;font-variant-numeric:tabular-nums;white-space:nowrap}.capacity span{color:var(--secondary-text-color);font-size:12px;font-weight:650;letter-spacing:0}.capacity-sub{margin-top:5px;color:var(--secondary-text-color);font-size:10px}.bar{height:7px;margin-top:12px;border-radius:99px;background:color-mix(in srgb,var(--accent) 12%,var(--divider-color));overflow:hidden}.bar-fill{height:100%;width:var(--used,0%);border-radius:inherit;background:linear-gradient(90deg,var(--accent),var(--accent2));transition:width .35s ease}.storage-missing{color:var(--secondary-text-color);font-size:13px;line-height:1.5}
  .metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:10px}.metric{min-width:0;padding:11px;border:1px solid color-mix(in srgb,var(--divider-color) 68%,transparent);border-radius:15px;background:color-mix(in srgb,var(--card-background-color,#fff) 91%,var(--accent))}.metric-head{display:flex;align-items:center;gap:6px;color:var(--secondary-text-color);font-size:9px;font-weight:750;letter-spacing:.07em;text-transform:uppercase}.metric-head ha-icon{color:var(--accent);--mdc-icon-size:16px}.metric-value{overflow:hidden;margin-top:7px;color:var(--primary-text-color);font-size:clamp(15px,3.2cqi,20px);font-weight:800;font-variant-numeric:tabular-nums;text-overflow:ellipsis;white-space:nowrap}.metric-value.unavailable{color:var(--secondary-text-color);font-size:12px}.metric-unit{margin-left:3px;color:var(--secondary-text-color);font-size:9px;font-weight:600}
  .drive-section{margin-top:15px}.drive-heading{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px}.drive-heading strong{font-size:11px;letter-spacing:.08em;text-transform:uppercase}.drive-heading span{color:var(--secondary-text-color);font-size:10px}.drives{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px}.drive{min-width:0;padding:9px;border:1px solid color-mix(in srgb,var(--divider-color) 68%,transparent);border-radius:13px;background:color-mix(in srgb,var(--card-background-color,#fff) 92%,var(--accent))}.drive-top{display:flex;align-items:center;gap:6px;min-width:0}.drive-icon{color:var(--accent)}.drive-icon ha-icon{--mdc-icon-size:17px}.drive-name{overflow:hidden;font-size:10px;font-weight:750;text-overflow:ellipsis;white-space:nowrap}.drive-state{overflow:hidden;margin-top:5px;color:var(--secondary-text-color);font-size:9px;text-overflow:ellipsis;white-space:nowrap}.drive-state.good{color:var(--success-color,#168b68)}.drive-state.bad{color:var(--error-color,#c74343)}
  .footer{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:12px}.footer-note{overflow:hidden;color:var(--secondary-text-color);font-size:9px;text-overflow:ellipsis;white-space:nowrap}.wake{display:flex;align-items:center;gap:7px;padding:8px 11px;border:1px solid color-mix(in srgb,var(--accent) 23%,var(--divider-color));border-radius:12px;background:color-mix(in srgb,var(--accent) 9%,var(--card-background-color,#fff));color:var(--accent);font:inherit;font-size:10px;font-weight:800;cursor:pointer}.wake:hover{background:color-mix(in srgb,var(--accent) 15%,var(--card-background-color,#fff))}.wake:disabled{opacity:.6;cursor:wait}.wake ha-icon{--mdc-icon-size:16px}
  .collapsed{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:14px;padding:13px;border:1px solid color-mix(in srgb,var(--divider-color) 68%,transparent);border-radius:15px;background:color-mix(in srgb,var(--card-background-color,#fff) 92%,var(--accent))}.collapsed-copy{color:var(--secondary-text-color);font-size:11px}.hint{margin-top:12px;padding:10px 12px;border:1px dashed color-mix(in srgb,var(--secondary-text-color) 35%,transparent);border-radius:12px;color:var(--secondary-text-color);font-size:10px;line-height:1.45}.hint.error{border-color:color-mix(in srgb,var(--error-color,#c74343) 45%,transparent);color:var(--error-color,#c74343)}
  @container nas-orbit (max-width:430px){.shell{padding:15px}.identity{gap:9px}.icon-wrap{width:40px;height:40px;border-radius:14px}.icon-wrap ha-icon{--mdc-icon-size:22px}.pill{gap:5px;padding:6px 8px;font-size:10px}.overview{grid-template-columns:100px minmax(0,1fr);gap:12px;padding:13px}.storage{width:96px}.storage-value{font-size:17px}.drives{grid-template-columns:repeat(2,minmax(0,1fr))}.metric{padding:9px}}@container nas-orbit (max-width:320px){.shell{padding:12px}.header{gap:7px}.identity{gap:7px}.icon-wrap{width:36px;height:36px}.title{font-size:15px}.pill{padding:5px 7px;font-size:9px}.overview{grid-template-columns:1fr;justify-items:center;gap:14px}.overview-copy{text-align:center}.capacity{font-size:25px}.bar{max-width:230px;margin-right:auto;margin-left:auto}.metrics{grid-template-columns:1fr}.metric{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:3px 8px}.metric-head{grid-column:1}.metric-value{grid-column:1;margin-top:1px}.drive{padding:7px}.footer{align-items:flex-start;flex-direction:column}}
  @media(prefers-reduced-motion:reduce){.bar-fill{transition:none}}
`;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function unavailable(state) { return !state || ["unknown", "unavailable", "none", ""].includes(String(state.state ?? "").toLowerCase()); }
function numeric(state) {
  if (unavailable(state)) return null;
  const value = Number(String(state.state).replace(/,/g, ""));
  return Number.isFinite(value) ? value : null;
}
function metric(state, fallbackUnit = "") {
  const value = numeric(state);
  if (value === null) return { value: "—", unit: "", available: false, number: null };
  return { value: new Intl.NumberFormat(undefined, { maximumFractionDigits: 1 }).format(value), unit: state.attributes?.unit_of_measurement || fallbackUnit, available: true, number: value };
}
function key(value) { return String(value ?? "").toLowerCase().replace(/[^a-z0-9]/g, ""); }
function entityName(hass, id) { return hass?.states?.[id]?.attributes?.friendly_name || hass?.entities?.[id]?.name || id; }
function convertUnits(value, unit) {
  const normalized = String(unit || "").toLowerCase().replace(/\s/g, "");
  const factors = { b: 1, kb: 1e3, mb: 1e6, gb: 1e9, tb: 1e12, kib: 1024, mib: 1024 ** 2, gib: 1024 ** 3, tib: 1024 ** 4 };
  return factors[normalized] ? value * factors[normalized] : value;
}
function stateLooksOnline(state) { return ["on", "home", "true", "online", "connected", "ready", "running", "up"].includes(String(state?.state ?? "").toLowerCase()); }

class NasOrbitCard extends HTMLElement {
  static getStubConfig() { return { ...DEFAULTS }; }
  static getConfigForm() {
    return { schema: [
      { name: "title", selector: { text: {} } },
      { name: "palette", selector: { select: { options: ["aurora", "ocean", "sunset", "lavender"], mode: "dropdown" } } },
      { name: "auto_discover", selector: { boolean: {} } },
      { name: "status_entity", selector: { entity: { domain: ["binary_sensor", "sensor", "device_tracker"] } } },
      { name: "wake_button_entity", selector: { entity: { domain: "button" } } },
      { name: "cpu_usage_entity", selector: { entity: { domain: "sensor" } } },
      { name: "cpu_temperature_entity", selector: { entity: { domain: "sensor" } } },
      { name: "memory_entity", selector: { entity: { domain: "sensor" } } },
      { name: "storage_used_entity", selector: { entity: { domain: "sensor" } } },
      { name: "storage_total_entity", selector: { entity: { domain: "sensor" } } },
      { name: "disk_entities", selector: { entity: { domain: "sensor", multiple: true } } },
    ] };
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = { ...DEFAULTS };
    this._signature = null;
    this._pressingWake = false;
  }
  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("Invalid NAS Orbit Card configuration.");
    this._config = { ...DEFAULTS, ...config, palette: PALETTES.has(config.palette) ? config.palette : DEFAULTS.palette, auto_discover: config.auto_discover !== false };
    this._signature = null;
    this._render();
  }
  set hass(value) {
    this._hass = value;
    const data = this._resolve();
    const signature = JSON.stringify({
      config: this._config,
      online: data.online,
      storage: [data.storage.used, data.storage.total, data.storage.percent],
      metrics: data.metrics.map(({ data: value }) => [value.value, value.unit, value.available]),
      drives: data.drives.map((drive) => [drive.name, drive.status, drive.temperature.value, drive.temperature.unit]),
      wakeAvailable: data.wakeAvailable,
      pressing: this._pressingWake,
    });
    if (signature !== this._signature) { this._signature = signature; this._render(data); }
  }
  get hass() { return this._hass; }
  getCardSize() { return 4; }
  getGridOptions() { return { rows: 5, columns: 12, min_rows: 3 }; }

  _resolve() {
    const states = this._hass?.states || {};
    const entries = Object.keys(states).filter((id) => id.startsWith("sensor.")).map((id) => ({ id, name: states[id]?.attributes?.friendly_name || this._hass?.entities?.[id]?.name || id }));
    const pick = (configKey, patterns) => {
      if (this._config[configKey]) return this._config[configKey];
      if (!this._config.auto_discover) return "";
      const matches = entries.filter((entry) => {
        const text = key(`${entry.id} ${entry.name}`);
        return text.includes("nas") && patterns.some((pattern) => pattern.test(text));
      });
      const preferred = [...matches].sort((left, right) => Number(key(right.id).includes("volume")) - Number(key(left.id).includes("volume")));
      return preferred.find((entry) => !unavailable(states[entry.id]))?.id || preferred[0]?.id || "";
    };
    const ids = {
      status: this._config.status_entity,
      wake: this._config.wake_button_entity,
      cpu: pick("cpu_usage_entity", [/cpu(?:usage|utili[sz]ation|percent)/]),
      temperature: pick("cpu_temperature_entity", [/cpu(?:temperature|temp)/]),
      memory: pick("memory_entity", [/memory(?:usage|utili[sz]ation|percent)/, /ram(?:usage|utili[sz]ation|percent)/]),
      used: pick("storage_used_entity", [/volume\d*usedsize/, /pool\d*usedsize/]),
      total: pick("storage_total_entity", [/volume\d*totalsize/, /pool\d*totalsize/]),
    };
    if (!ids.status && this._config.auto_discover) {
      ids.status = Object.keys(states).find((id) => /^(binary_sensor|device_tracker)\./.test(id) && key(`${id} ${states[id]?.attributes?.friendly_name}`).includes("nas")) || "";
    }
    if (!ids.wake && this._config.auto_discover) ids.wake = Object.keys(states).find((id) => id.startsWith("button.") && /nas.*(?:wake|wol)|(?:wake|wol).*nas/i.test(`${id} ${states[id]?.attributes?.friendly_name}`)) || "";
    let drives = Array.isArray(this._config.disk_entities) ? this._config.disk_entities : [];
    if (!drives.length && this._config.auto_discover) {
      const driveMatches = entries.filter(({ id, name }) => /nas/i.test(`${id} ${name}`) && /disk\d+(?:summary|status)$/.test(key(id)));
      const seen = new Set();
      drives = driveMatches.filter(({ id }) => {
        const match = id.match(/disk_(\d+)_/i);
        if (!match || seen.has(match[1])) return false;
        seen.add(match[1]);
        return true;
      }).map(({ id }) => id);
    }
    const state = (id) => id ? states[id] : undefined;
    const used = metric(state(ids.used));
    const total = metric(state(ids.total));
    let percent = null;
    if (used.number !== null && total.number !== null && total.number > 0) {
      const usedBytes = convertUnits(used.number, used.unit);
      const totalBytes = convertUnits(total.number, total.unit);
      percent = Math.max(0, Math.min(100, usedBytes / totalBytes * 100));
    }
    const availableSignals = [ids.cpu, ids.temperature, ids.memory, ids.used, ids.total].filter((id) => id && !unavailable(state(id))).length;
    let online;
    if (ids.status && state(ids.status)) online = stateLooksOnline(state(ids.status));
    else online = availableSignals > 0;
    return {
      title: this._config.title || "NAS Orbit", palette: this._config.palette, ids, online,
      metrics: [
        { label: "CPU", icon: "mdi:cpu-64-bit", data: metric(state(ids.cpu), "%") },
        { label: "CPU temp", icon: "mdi:thermometer", data: metric(state(ids.temperature), "°C") },
        { label: "Memory", icon: "mdi:memory", data: metric(state(ids.memory), "%") },
      ],
      storage: { used, total, percent },
      drives: drives.map((id) => {
        const driveState = state(id);
        const name = entityName(this._hass, id);
        const driveNumber = id.match(/disk_(\d+)_/i)?.[1];
        const temperatureId = driveNumber
          ? Object.keys(states).find((candidate) => candidate.startsWith("sensor.") && /nas/i.test(`${candidate} ${states[candidate]?.attributes?.friendly_name}`) && new RegExp(`disk_${driveNumber}_temperature$`, "i").test(candidate))
          : "";
        const temperature = state(temperatureId);
        const statusText = unavailable(driveState) ? "Unavailable" : String(driveState.state);
        const good = /normal|healthy|ok|online|ready/i.test(statusText);
        const bad = /error|failed|critical|offline|degraded/i.test(statusText);
        return { id, name: name.replace(/\s+(?:summary|status)$/i, ""), status: statusText, temperature: metric(temperature, "°C"), good, bad };
      }),
      statusEntity: ids.status ? state(ids.status) : undefined,
      // Button entities are stateless; `unknown` is a normal value, not absence.
      wakeAvailable: Boolean(ids.wake && state(ids.wake)),
    };
  }

  _render(data = this._resolve()) {
    if (!this.shadowRoot || !this._hass) return;
    const statusLabel = data.online ? (data.statusEntity ? "Online" : "Telemetry active") : "Offline";
    const percent = data.storage.percent;
    const storageValue = percent === null ? "—" : `${Math.round(percent)}%`;
    const usedText = data.storage.used.available ? `${data.storage.used.value} ${data.storage.used.unit}` : "—";
    const totalText = data.storage.total.available ? `${data.storage.total.value} ${data.storage.total.unit}` : "—";
    const details = data.online ? `
      <section class="overview" style="--used:${percent ?? 0}%">
        <div class="storage"><div class="storage-core"><div class="storage-icon"><ha-icon icon="mdi:database"></ha-icon></div><div class="storage-value">${storageValue}</div><div class="storage-label">used</div></div></div>
        <div class="overview-copy">${percent === null
          ? `<div class="section-label">Storage capacity</div><div class="storage-missing">Choose used and total capacity sensors in the card editor to show the storage ring.</div>`
          : `<div class="section-label">Storage pool</div><div class="capacity">${escapeHtml(usedText)} <span>of ${escapeHtml(totalText)}</span></div><div class="capacity-sub">${escapeHtml(totalText)} total capacity</div><div class="bar"><div class="bar-fill"></div></div>`}</div>
      </section>
      <section class="metrics">${data.metrics.map(({ label, icon, data: value }) => `<div class="metric"><div class="metric-head"><ha-icon icon="${icon}"></ha-icon>${label}</div><div class="metric-value ${value.available ? "" : "unavailable"}">${value.value}${value.available ? `<span class="metric-unit">${escapeHtml(value.unit)}</span>` : ""}</div></div>`).join("")}</section>
      ${data.drives.length ? `<section class="drive-section"><div class="drive-heading"><strong>Drive bays</strong><span>${data.drives.length} detected</span></div><div class="drives">${data.drives.map((drive, index) => `<div class="drive"><div class="drive-top"><span class="drive-icon"><ha-icon icon="mdi:harddisk"></ha-icon></span><span class="drive-name">${escapeHtml(drive.name || `Drive ${index + 1}`)}</span></div><div class="drive-state ${drive.good ? "good" : drive.bad ? "bad" : ""}">${escapeHtml(drive.status)}${drive.temperature.available ? ` · ${escapeHtml(drive.temperature.value)} ${escapeHtml(drive.temperature.unit)}` : ""}</div></div>`).join("")}</div></section>` : ""}
      <footer class="footer"><span class="footer-note">Live telemetry from Home Assistant</span>${data.wakeAvailable ? `<button class="wake" data-wake ${this._pressingWake ? "disabled" : ""}><ha-icon icon="mdi:power"></ha-icon>${this._pressingWake ? "Sending…" : "Wake NAS"}</button>` : ""}</footer>`
      : `<section class="collapsed"><div class="collapsed-copy">NAS is offline or telemetry is unavailable. Details are hidden until it responds.</div>${data.wakeAvailable ? `<button class="wake" data-wake ${this._pressingWake ? "disabled" : ""}><ha-icon icon="mdi:power"></ha-icon>${this._pressingWake ? "Sending…" : "Wake NAS"}</button>` : ""}</section>`;
    const noSensors = !data.online && !data.statusEntity && !data.wakeAvailable;
    this.shadowRoot.innerHTML = `<style>${STYLE}</style><ha-card data-palette="${escapeHtml(data.palette)}"><div class="shell"><header class="header"><div class="identity"><div class="icon-wrap"><ha-icon icon="mdi:nas"></ha-icon></div><div class="identity-copy"><div class="eyebrow">Storage · System</div><h2 class="title">${escapeHtml(data.title)}</h2></div></div><div class="pill ${data.online ? "online" : "offline"}"><span class="dot"></span>${escapeHtml(statusLabel)}</div></header>${details}${noSensors ? `<div class="hint error">No NAS sensors found. Select your sensor entities in the card editor or check the NAS name used by auto-discovery.</div>` : ""}</div></ha-card>`;
    const wake = this.shadowRoot.querySelector("[data-wake]");
    wake?.addEventListener("click", () => this._pressWake(data.ids.wake));
  }

  async _pressWake(entityId) {
    if (!entityId || this._pressingWake) return;
    this._pressingWake = true;
    this._signature = null;
    this._render();
    try {
      await this._hass.callService("button", "press", { entity_id: entityId });
    } catch (error) {
      console.warn("NAS Orbit could not send the wake action.", error);
    } finally {
      this._pressingWake = false;
      this._signature = null;
      this._render();
    }
  }
}

if (!customElements.get(CARD_TYPE)) customElements.define(CARD_TYPE, NasOrbitCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: CARD_TYPE, name: "NAS Orbit Card", description: "A responsive, theme-aware Home Assistant NAS summary card.", preview: false, documentationURL: "https://github.com/Liionboy/ha-nas-orbit-card" });
console.info(`%c NAS-ORBIT %c ${VERSION} `, "background:#078f72;color:#fff;font-weight:700", "background:var(--card-background-color);color:var(--primary-text-color)");

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="ha-nas-orbit-card"))window.customCards.push({type:"ha-nas-orbit-card",name:"NAS Orbit Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["ha-nas-orbit-card"]={version:"1.0.1",types:["ha-nas-orbit-card"]};
})() } catch(error){suite.errors.push({component:"ha-nas-orbit-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","ha-nas-orbit-card",error);}
/* ha-person-orbit-card @ 1.1.2 (937f123e5bdd31d7c0db94ae96664914cd090978) */
try { (() => {
const knownTypes=["ha-person-orbit-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["ha-person-orbit-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
/* Person Orbit Card v1.1.2 — MIT */
const TYPE = 'ha-person-orbit-card';
const PALETTES = ['aurora', 'ocean', 'sunset', 'lavender'];
const EXTRA_SLOTS = [1, 2, 3, 4];
const EXTRA_DEFAULTS = Object.fromEntries(EXTRA_SLOTS.flatMap((n) => ['entity', 'name', 'icon'].map((field) => ['sensor_' + n + '_' + field, ''])));
const DEFAULTS = { entity: '', name: '', icon: '', show_avatar: true, battery_entity: '', eta_entity: '', battery_charging_entity: '', metrics_layout: 'tiles', low_battery_threshold: 20, palette: 'aurora', ...EXTRA_DEFAULTS };
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const icon = (value) => '<ha-icon icon="' + esc(value) + '"></ha-icon>';
// Restrict pictures to HA's local image endpoints; no remote or arbitrary URL loads.
const picturePath = (value) => typeof value === 'string' && /^\/api\/image\/(?:serve|image_proxy)\/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_.-]+)?(?:\?[a-zA-Z0-9_=&.%-]*)?$/.test(value) && !value.includes('..') ? value : '';
const numeric = (value) => (typeof value === 'number' || typeof value === 'string' && /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(value.trim())) && Number.isFinite(Number(value));
const STYLE = `
:host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color,#202b3c)}*{box-sizing:border-box}
ha-card{display:block;container:person/inline-size;min-width:0;max-width:100%;overflow:hidden;border:1px solid var(--divider-color,#dfe5eb);border-radius:var(--orbit-theme-card-radius,20px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 2px 5px #14233712));--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0)}
ha-card[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7}ha-card[data-palette=sunset]{--accent:#d65c42;--accent2:#ee973f}ha-card[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8}
.shell{padding:14px;background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--accent2) 10%,transparent),transparent 70%))}button{font:inherit;color:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}button:disabled{cursor:default}button:focus-visible{outline:2px solid var(--accent);outline-offset:-2px}button:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 8%,transparent)}
.person{display:flex;align-items:center;gap:12px;width:100%;min-width:0;padding:0;border:0;border-radius:12px;background:transparent;text-align:left}.avatar{position:relative;display:grid;place-items:center;flex:none;width:48px;height:48px;border-radius:50%;color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,transparent);border:1px solid color-mix(in srgb,var(--accent) 25%,transparent)}.avatar ha-icon{--mdc-icon-size:26px}.avatar img{position:absolute;inset:0;width:100%;height:100%;border-radius:50%;object-fit:cover}.dot{position:absolute;right:-1px;bottom:1px;width:11px;height:11px;border:2px solid var(--ha-card-background,var(--card-background-color,#fff));border-radius:50%;background:var(--secondary-text-color,#778494)}[data-presence=home] .dot{background:var(--success-color,#29956f)}[data-presence=unknown] .dot,[data-presence=unavailable] .dot,[data-presence=missing] .dot{background:var(--warning-color,#d59a38)}
.copy{min-width:0;flex:1}.name{display:block;font-size:15px;font-weight:700;line-height:21px;overflow-wrap:anywhere}.status{display:block;font-size:12px;line-height:18px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}.metrics{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.metric{display:flex;align-items:center;gap:6px;min-width:0;max-width:100%;flex:1 1 95px;border:0;border-radius:10px;padding:7px 9px;text-align:left;background:color-mix(in srgb,var(--accent) 6%,transparent)}.metric ha-icon{flex:none;--mdc-icon-size:17px;color:var(--accent)}.metric.low ha-icon{color:var(--error-color,#c74343)}.metric-copy{min-width:0}.label{display:block;font-size:10px;line-height:14px;color:var(--secondary-text-color,#637080)}.value{display:block;font-size:12px;line-height:18px;font-weight:650;overflow-wrap:anywhere;font-variant-numeric:tabular-nums}.hint{font-size:12px;line-height:18px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}.hint strong{display:block;color:var(--primary-text-color,#202b3c);margin-bottom:4px}
@container person (max-width:240px){.shell{padding:12px}.person{gap:9px}.avatar{width:40px;height:40px}.avatar ha-icon{--mdc-icon-size:23px}.name{font-size:14px}.metric{flex-basis:100%;padding:6px 8px}.metric-copy{display:flex;align-items:center;justify-content:space-between;gap:8px;flex:1}.value{font-size:12px}}
@container person (max-width:180px){.person{gap:8px}.avatar{width:36px;height:36px}.name{font-size:13px}.metric{gap:4px}.metric ha-icon{--mdc-icon-size:15px}.metric-copy{gap:4px}.label{font-size:9px}.value{font-size:11px}}
/* Every compact reading shares the same two-column grid, including phone half-width tiles. */
.metrics.compact{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2px 8px;margin-top:6px}.compact .metric{padding:1px 0;gap:4px;background:transparent;border-radius:5px}.compact .metric-copy{display:block;min-width:0;flex:1}.compact .label{display:none}.compact .value{font-size:12px;line-height:18px;font-weight:400;overflow-wrap:anywhere}.compact .metric ha-icon{--mdc-icon-size:15px}.metric.charging:not(.low) ha-icon{color:var(--warning-color,#d59a38)}
@container person (max-width:210px){.shell:has(.metrics.compact){padding:8px}.metrics.compact{column-gap:4px}.compact .metric{gap:3px}.compact .metric ha-icon{--mdc-icon-size:13px}.compact .value{font-size:11px}}
@container person (max-width:180px){.shell:has(.metrics.compact){padding:6px}.metrics.compact{column-gap:2px}.compact .metric{gap:2px}.compact .metric ha-icon{--mdc-icon-size:12px}}
@container person (max-width:150px){.metrics.compact{grid-template-columns:minmax(0,1fr)}}
`;
class PersonOrbitCard extends HTMLElement {
 static getStubConfig() { return { ...DEFAULTS }; }
 static getConfigForm() {
  const labels = { entity: 'Person (optional)', name: 'Name override (optional)', icon: 'Fallback icon override (optional)', show_avatar: 'Show local person picture', battery_entity: 'Phone battery sensor (optional)', eta_entity: 'Travel time home sensor (optional)', low_battery_threshold: 'Low battery at or below (%)', palette: 'Orbit palette', battery_charging_entity: 'Charging status sensor (optional)', metrics_layout: 'Readings layout' };
  for (const n of EXTRA_SLOTS) for (const [field, label] of [['entity', 'sensor (optional)'], ['name', 'label override (optional)'], ['icon', 'icon override (optional)']]) labels['sensor_' + n + '_' + field] = 'Extra ' + n + ' ' + label;
  return { schema: [
   { name: 'entity', selector: { entity: { domain: 'person' } } },
   { name: 'name', selector: { text: {} } }, { name: 'icon', selector: { icon: {} } },
   { name: 'show_avatar', default: true, selector: { boolean: {} } },
   { name: 'battery_entity', selector: { entity: { domain: 'sensor' } } },
   { name: 'eta_entity', selector: { entity: { domain: 'sensor' } } },
   { name: 'battery_charging_entity', selector: { entity: { filter: { domain: ['binary_sensor', 'sensor'] } } } },
   { name: 'metrics_layout', default: 'tiles', selector: { select: { options: ['tiles', 'compact'], mode: 'dropdown' } } },
   ...EXTRA_SLOTS.flatMap((n) => [
    { name: 'sensor_' + n + '_entity', selector: { entity: { filter: { domain: 'sensor' } } } },
    { name: 'sensor_' + n + '_name', selector: { text: {} } },
    { name: 'sensor_' + n + '_icon', selector: { icon: {} } },
   ]),
   { name: 'low_battery_threshold', default: 20, selector: { number: { min: 0, max: 100, mode: 'box', step: 1 } } },
   { name: 'palette', default: 'aurora', selector: { select: { options: PALETTES, mode: 'dropdown' } } },
  ], computeLabel: ({ name }) => labels[name], computeHelper: ({ name }) => ({ battery_entity: 'Requires a numeric 0–100 percentage with unit %. Battery device class alone does not imply percent.', eta_entity: 'Choose an existing nonnegative numeric travel-time sensor; its unit is preserved. No route or arrival is calculated.', metrics_layout: 'Compact shows icon/value readings like a small person tile. Tiles keeps the original labeled panels.', battery_charging_entity: 'Optional binary sensor (on = charging), or sensor whose state is charging. Unknown states do not imply charging.', show_avatar: 'Only same-origin /api/image/serve/ or /api/image/image_proxy/ pictures are loaded. Other pictures use the fallback icon.' })[name] };
 }
 constructor() {
  super(); this.attachShadow({ mode: 'open' }); this._config = { ...DEFAULTS };
  this.shadowRoot.addEventListener('click', (event) => {
   const target = event.composedPath().find((el) => el?.dataset?.action);
   if (target && !target.disabled) this._moreInfo(target.dataset.action);
  });
  this.shadowRoot.addEventListener('error', (event) => { if (event.target?.tagName === 'IMG') event.target.hidden = true; }, true);
 }
 setConfig(config) {
  if (!config || typeof config !== 'object' || Array.isArray(config)) throw new Error('Person Orbit requires an object configuration.');
  for (const key of Object.keys(DEFAULTS).filter((key) => typeof DEFAULTS[key] === 'string')) if (config[key] != null && typeof config[key] !== 'string') throw new Error(key + ' must be text.');
  for (const [key, domain] of [['entity', 'person'], ['battery_entity', 'sensor'], ['eta_entity', 'sensor']]) if (config[key] && !new RegExp('^' + domain + '[.][a-z0-9_]+$').test(config[key])) throw new Error(key + ' must be a ' + domain + ' entity ID.');
  for (const n of EXTRA_SLOTS) { const id = config['sensor_' + n + '_entity']; if (id && !/^sensor[.][a-z0-9_]+$/.test(id)) throw new Error('Extra readings require sensor entity IDs.'); }
  if (config.battery_charging_entity && !/^(?:sensor|binary_sensor)[.][a-z0-9_]+$/.test(config.battery_charging_entity)) throw new Error('Charging status requires a sensor or binary_sensor entity ID.');
  if (config.metrics_layout != null && !['tiles', 'compact'].includes(config.metrics_layout)) throw new Error('metrics_layout must be tiles or compact.');
  if (config.show_avatar != null && typeof config.show_avatar !== 'boolean') throw new Error('show_avatar must be true or false.');
  if (config.low_battery_threshold != null && (typeof config.low_battery_threshold !== 'number' || !Number.isFinite(config.low_battery_threshold) || config.low_battery_threshold < 0 || config.low_battery_threshold > 100)) throw new Error('low_battery_threshold must be a number from 0 to 100.');
  this._config = Object.fromEntries(Object.entries(DEFAULTS).map(([key, value]) => [key, config[key] ?? value]));
  if (!PALETTES.includes(this._config.palette)) this._config.palette = 'aurora';
  this._signature = ''; this._update();
 }
 set hass(value) { this._hass = value; this._update(); }
 get hass() { return this._hass; }
 getCardSize() { return 3; }
 getGridOptions() { return { columns: 6, min_columns: 3 }; }
 _state(id) { return id ? this._hass?.states?.[id] : undefined; }
 _availability(state) { return !state ? 'missing' : state.state === 'unavailable' ? 'unavailable' : state.state === 'unknown' || state.state === '' || state.state == null ? 'unknown' : 'known'; }
 _status(state) {
  const availability = this._availability(state);
  let fallback = availability === 'missing' ? 'Entity not found' : availability === 'unavailable' ? 'Unavailable' : availability === 'unknown' ? 'Unknown' : state.state === 'home' ? 'Home' : state.state === 'not_home' ? 'Away' : String(state.state);
  if (state) { try { const formatted = this._hass.formatEntityState?.(state); if (typeof formatted === 'string' && formatted) fallback = formatted; } catch { /* Safe state fallback. */ } }
  return fallback;
 }
 _metric(key) {
  const id = this._config[key], state = this._state(id), availability = this._availability(state);
  if (availability !== 'known') return { id, text: this._status(state), low: false };
  const unit = state.attributes?.unit_of_measurement;
  const valid = numeric(state.state) && Number(state.state) >= 0 && (key !== 'battery_entity' || unit === '%' && Number(state.state) <= 100);
  return { id, text: valid ? String(state.state).trim() + (unit ? ' ' + unit : '') : 'Invalid reading', low: valid && key === 'battery_entity' && Number(state.state) <= this._config.low_battery_threshold };
 }
 _charging() {
  const state = this._state(this._config.battery_charging_entity);
  return this._availability(state) === 'known' && (this._config.battery_charging_entity.startsWith('binary_sensor.') ? state.state === 'on' : String(state.state).trim().toLowerCase() === 'charging');
 }
 _extraMetric(n) {
  const key = 'sensor_' + n + '_entity', id = this._config[key], state = this._state(id), a = state?.attributes || {};
  // Read only the selected sensor state and display metadata; never tracker/GPS attributes.
  const text = this._availability(state) !== 'known' ? this._status(state) : numeric(state.state) ? String(state.state).trim() + (a.unit_of_measurement ? ' ' + a.unit_of_measurement : '') : this._status(state);
  return { key, id, text, label: this._config['sensor_' + n + '_name'] || a.friendly_name || 'Sensor ' + n, icon: this._config['sensor_' + n + '_icon'] || a.icon || 'mdi:chart-line', extra: true, exists: !!state };
 }
 _primaryMetric(key) {
  const metric = this._metric(key), battery = key === 'battery_entity', charging = battery && this._charging();
  const label = !battery ? 'Travel home' : metric.low ? 'Low battery' + (charging ? ' · Charging' : '') : charging ? 'Charging' : 'Phone battery';
  const metricIcon = !battery ? 'mdi:car-clock' : charging ? 'mdi:battery-charging' : metric.low ? 'mdi:battery-alert-variant-outline' : 'mdi:battery';
  return { key, ...metric, exists: !!this._state(metric.id), charging, label, icon: metricIcon };
 }
 _model() {
  const c = this._config, state = this._state(c.entity), a = state?.attributes || {}, availability = this._availability(state);
  return { name: c.name || a.friendly_name || 'Person', status: this._status(state), presence: availability !== 'known' ? availability : state.state === 'home' ? 'home' : 'away', picture: c.show_avatar ? picturePath(a.entity_picture) : '', icon: c.icon || 'mdi:account', metrics: [ ...['battery_entity', 'eta_entity'].filter((key) => c[key]).map((key) => this._primaryMetric(key)), ...EXTRA_SLOTS.filter((n) => c['sensor_' + n + '_entity']).map((n) => this._extraMetric(n)) ] };
 }
 _update() {
  const model = this._model(), signature = JSON.stringify([this._config, model, ['entity', 'battery_entity', 'eta_entity'].map((key) => !!this._state(this._config[key]))]);
  if (signature === this._signature) return; this._signature = signature; this._render(model);
 }
 _render(model) {
  const c = this._config, active = this.shadowRoot.activeElement?.dataset?.action;
  const content = !c.entity ? '<div class="hint"><strong>Person Orbit</strong>Choose a person in the card editor. Optional battery, travel-time and additional sensors are never selected automatically.</div>' : '<button class="person" data-action="entity" aria-label="More information: ' + esc(model.name) + '"' + (!this._state(c.entity) ? ' disabled' : '') + '><span class="avatar" aria-hidden="true">' + icon(model.icon) + (model.picture ? '<img alt="" referrerpolicy="no-referrer" src="' + esc(model.picture) + '">' : '') + '<span class="dot"></span></span><span class="copy"><span class="name">' + esc(model.name) + '</span><span class="status">' + esc(model.status) + '</span></span></button>' + (model.metrics.length ? '<div class="metrics ' + c.metrics_layout + '">' + model.metrics.map((m) => '<button class="metric' + (m.low ? ' low' : '') + (m.charging ? ' charging' : '') + (m.extra ? ' extra' : '') + '" data-action="' + m.key + '" aria-label="More information: ' + esc(m.label + ': ' + m.text) + '" title="' + esc(m.label + ': ' + m.text) + '"' + (!this._state(m.id) ? ' disabled' : '') + '>' + icon(m.icon) + '<span class="metric-copy"><span class="label">' + esc(m.label) + '</span><span class="value">' + esc(m.text) + '</span></span></button>').join('') + '</div>' : '');
  this.shadowRoot.innerHTML = '<style>' + STYLE + '</style><ha-card data-palette="' + c.palette + '" data-presence="' + model.presence + '"><div class="shell">' + content + '</div></ha-card>';
  if (active) this.shadowRoot.querySelector('[data-action="' + active + '"]')?.focus();
 }
 _moreInfo(action) {
  if (!this._config.entity || !['entity', 'battery_entity', 'eta_entity', ...EXTRA_SLOTS.map((n) => 'sensor_' + n + '_entity')].includes(action)) return;
  const id = this._config[action]; if (!this._state(id)) return;
  this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: id }, bubbles: true, composed: true }));
 }
}
if (!customElements.get(TYPE)) customElements.define(TYPE, PersonOrbitCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === TYPE)) window.customCards.push({ type: TYPE, name: 'Person Orbit Card', description: 'Private person status with battery, travel time and optional extra sensor readings.', preview: true });

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="ha-person-orbit-card"))window.customCards.push({type:"ha-person-orbit-card",name:"Person Orbit Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["ha-person-orbit-card"]={version:"1.1.2",types:["ha-person-orbit-card"]};
})() } catch(error){suite.errors.push({component:"ha-person-orbit-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","ha-person-orbit-card",error);}
/* ha-room-orbit-card @ 1.6.0 (74588ce9eebe3c4edafa5f464f00929ae1fef4a2) */
try { (() => {
const knownTypes=["ha-room-orbit-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["ha-room-orbit-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const TYPE = 'ha-room-orbit-card';
const VERSION = '1.6.0';
const PALETTES = ['aurora', 'ocean', 'sunset', 'lavender'];
// Any shortcut domain is displayable; _actions remains the explicit service allowlist.
const BINARY_ICONS = {
 battery: ['battery', 'battery-outline'], battery_charging: ['battery', 'battery-charging'], carbon_monoxide: ['smoke-detector', 'smoke-detector-alert'],
 cold: ['thermometer', 'snowflake'], connectivity: ['close-network-outline', 'check-network-outline'], door: ['door-closed', 'door-open'],
 garage_door: ['garage', 'garage-open'], gas: ['check-circle', 'alert-circle'], glass_break: ['glass-fragile', 'glass-fragile'],
 heat: ['thermometer', 'fire'], light: ['brightness-5', 'brightness-7'], lock: ['lock', 'lock-open'], moisture: ['water-off', 'water'],
 motion: ['motion-sensor-off', 'motion-sensor'], moving: ['octagon', 'arrow-right'], occupancy: ['home-outline', 'home'], opening: ['square', 'square-outline'],
 plug: ['power-plug-off', 'power-plug'], power: ['power-plug-off', 'power-plug'], presence: ['home-outline', 'home'], problem: ['check-circle', 'alert-circle'],
 running: ['stop', 'play'], safety: ['check-circle', 'alert-circle'], smoke: ['smoke-detector-variant', 'smoke-detector-variant-alert'], sound: ['music-note-off', 'music-note'],
 tamper: ['check-circle', 'alert-circle'], update: ['package', 'package-up'], vibration: ['crop-portrait', 'vibrate'], window: ['window-closed', 'window-open'],
};
const DOMAIN_ICONS = { light: 'lightbulb', cover: 'window-shutter', switch: 'power-socket-eu', input_boolean: 'toggle-switch', fan: 'fan', sensor: 'chart-line',
 lock: 'lock', alarm_control_panel: 'shield-home', media_player: 'cast', vacuum: 'robot-vacuum', person: 'account', device_tracker: 'map-marker',
 scene: 'palette', script: 'script-text', automation: 'robot', button: 'gesture-tap-button', input_button: 'gesture-tap-button',
 select: 'format-list-bulleted', input_select: 'format-list-bulleted', number: 'numeric', input_number: 'numeric', text: 'form-textbox', input_text: 'form-textbox',
 timer: 'timer-outline', counter: 'counter', calendar: 'calendar', weather: 'weather-partly-cloudy', camera: 'camera', update: 'package-up',
 date: 'calendar', input_datetime: 'calendar-clock', datetime: 'calendar-clock', time: 'clock-outline', event: 'lightning-bolt', remote: 'remote', siren: 'bullhorn', water_heater: 'water-boiler', valve: 'valve', image: 'image', notify: 'message' };
const DEFAULTS = { title: 'Room Orbit', icon: 'mdi:sofa', palette: 'aurora', read_only: false, navigation_path: '', temperature_effect: false, temperature_animation: true, temperature_cold_below: 22, temperature_warm_from: 25 };
const FIELDS = ['temperature_entity', 'humidity_entity', 'presence_entity', 'climate_entity', 'entity_1', 'entity_2', 'entity_3', 'entity_4'];
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const available = (s) => !!s && !['unknown', 'unavailable', 'none', ''].includes(String(s.state).toLowerCase());
const domain = (id) => String(id || '').split('.')[0];
const icon = (name) => '<ha-icon icon="' + esc(name) + '"></ha-icon>';
const STYLE = [
 ':host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color,#202b3c)}*{box-sizing:border-box}',
 'ha-card{display:block;container:room-orbit/inline-size;width:100%;min-width:0;max-width:100%;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color,#dfe5eb) 65%,transparent);border-radius:var(--orbit-theme-card-radius,20px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 2px 5px #14233716));--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0);--accent3:var(--orbit-theme-accent-3,#54a9db)}',
 'ha-card[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}ha-card[data-palette=sunset]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}ha-card[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}',
 '.shell{position:relative;padding:12px;background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 5%,transparent),transparent 80%))}.shell:before{content:"";position:absolute;top:0;left:20px;right:20px;height:2px;background:var(--orbit-theme-strip-background,linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3)));border-radius:0 0 4px 4px}',
 'button{font:inherit;color:inherit;cursor:pointer}button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}button:disabled{cursor:not-allowed;opacity:.45}.summary{display:grid;grid-template-columns:minmax(0,1fr) 92px;align-items:center;gap:10px;min-height:92px}.summary.no-shortcuts{grid-template-columns:1fr}.identity{min-width:0}.room-icon{position:relative;display:grid;place-items:center;width:40px;height:40px;padding:0;border:0;border-radius:50%;background:color-mix(in srgb,var(--accent) 14%,transparent);color:var(--accent)}.room-icon ha-icon{--mdc-icon-size:23px}.dot{position:absolute;right:-1px;bottom:1px;width:9px;height:9px;border:2px solid var(--card-background-color,#fff);border-radius:50%;background:var(--secondary-text-color,#637080)}.room-icon.occupied .dot{background:var(--accent)}h2{margin:7px 0 2px;font-size:14px;font-weight:750;line-height:17px;letter-spacing:-.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
 '.telemetry{display:flex;flex-wrap:wrap;column-gap:8px;row-gap:0;min-width:0}.reading{display:inline-flex;align-items:center;gap:3px;border:0;background:none;padding:0;min-width:0;max-width:100%;font-size:11px;line-height:16px;color:var(--secondary-text-color,#637080)}.reading ha-icon{flex:none;--mdc-icon-size:12px;color:var(--accent)}.reading-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;font-variant-numeric:tabular-nums}.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}',
 '.shortcuts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px;align-content:center}.shortcuts.count-1,.shortcuts.count-2{grid-template-columns:1fr}.quick{position:relative;display:grid;place-items:center;min-width:0;height:44px;padding:0;border:0;border-radius:13px;background:color-mix(in srgb,var(--secondary-text-color,#637080) 7%,var(--card-background-color,#fff));color:var(--secondary-text-color,#637080)}.quick ha-icon{--mdc-icon-size:21px}.quick.active{background:color-mix(in srgb,var(--accent) 15%,var(--card-background-color,#fff));color:var(--accent)}.quick .busy{position:absolute;inset:auto 0 2px;text-align:center;font-size:9px}.quick:hover:not(:disabled),.action:hover:not(:disabled){filter:brightness(.96)}',
 '.tiles{display:grid;gap:6px;margin-top:10px;padding-top:10px;border-top:1px solid var(--divider-color,#dfe5eb)}.tile{display:flex;align-items:center;gap:8px;min-width:0}.tile-head{display:flex;align-items:center;gap:7px;border:0;background:none;padding:4px 0;min-width:0;flex:1;text-align:left}.tile-head ha-icon{flex:none;color:var(--accent);--mdc-icon-size:19px}.tile-copy{min-width:0}.tile-name{display:block;font-size:11px;font-weight:650;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tile-state{display:block;margin-top:2px;font-size:10px;line-height:13px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}.actions{display:flex;gap:3px;flex:none}.action{display:grid;place-items:center;width:32px;height:38px;padding:0;border:0;border-radius:10px;background:color-mix(in srgb,var(--accent) 10%,var(--card-background-color,#fff));color:var(--accent)}.action ha-icon{--mdc-icon-size:18px}.hint{margin:0;font-size:10px;line-height:15px;color:var(--secondary-text-color,#637080)}.error{margin-top:8px;font-size:11px;color:var(--error-color,#c74343)}',
 '@container room-orbit (max-width:220px){.shell{padding:10px}.summary{position:relative;grid-template-columns:minmax(0,1fr) 76px;gap:6px;padding-top:19px}.quick{height:40px;border-radius:11px}.shortcuts{gap:3px}.tile{flex-wrap:wrap}.actions{margin-left:auto}.room-icon{width:36px;height:36px}h2{position:absolute;top:0;left:0;right:0;margin:0;font-size:13px}.reading{font-size:10px}}@media(prefers-reduced-motion:reduce){button{transition:none}}',
].join('');
const NAV_STYLE = '.summary{position:relative}.room-navigation{position:absolute;inset:0;z-index:1;border-radius:12px}.room-navigation:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.room-icon,.reading,.quick{position:relative;z-index:2}';
const CLIMATE_STYLE = '.quick.climate-shortcut{display:flex;flex-direction:column;gap:1px}.quick.climate-shortcut ha-icon{--mdc-icon-size:17px}.quick-climate-label{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:9px;line-height:11px}.climate-status{position:relative;z-index:2;display:inline-flex;align-items:center;gap:3px;max-width:100%;height:16px;margin-top:2px;padding:0 4px;border:0;border-radius:6px;background:color-mix(in srgb,var(--secondary-text-color,#637080) 8%,transparent);color:var(--secondary-text-color,#637080);font-size:10px;line-height:16px;white-space:nowrap}.climate-status ha-icon{flex:none;--mdc-icon-size:12px}.climate-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.climate-status.heating,.quick.heating{color:var(--error-color,#db5546);background:color-mix(in srgb,var(--error-color,#db5546) 14%,var(--card-background-color,#fff))}.climate-status.cooling,.quick.cooling{color:var(--info-color,#2389ce);background:color-mix(in srgb,var(--info-color,#2389ce) 12%,var(--card-background-color,#fff))}';
const HUMIDIFIER_STYLE = '@container room-orbit (max-width:220px){.summary:has(.humidity-status){padding-bottom:18px}.humidity-status{position:absolute;bottom:0;left:0;max-width:100%}}';
const TEMPERATURE_STYLE = [
 'ha-card[data-temperature=warm]{--accent:#de7136;--accent2:#e6a23d;--accent3:#d45d52}ha-card[data-temperature=cold]{--accent:#287ec8;--accent2:#38a6d2;--accent3:#6674cc}',
 'ha-card[data-temperature=warm] .shell,ha-card[data-temperature=cold] .shell{background:radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 15%,transparent),transparent 88%)}',
 'ha-card[data-temperature=warm] .shell:after,ha-card[data-temperature=cold] .shell:after{content:"";position:absolute;inset:0;border-radius:inherit;border:1px solid color-mix(in srgb,var(--accent) 45%,transparent);box-shadow:inset 0 0 18px color-mix(in srgb,var(--accent) 10%,transparent);opacity:.5;pointer-events:none}',
 'ha-card[data-temperature-animation=true][data-temperature=warm] .shell:after,ha-card[data-temperature-animation=true][data-temperature=cold] .shell:after{animation:room-temperature-glow 3.8s ease-in-out infinite}',
 '@keyframes room-temperature-glow{0%,100%{opacity:.25}50%{opacity:.7}}@media(prefers-reduced-motion:reduce){ha-card[data-temperature] .shell:after{animation:none!important}}',
].join('');

class RoomOrbitCard extends HTMLElement {
 static getStubConfig() { return { ...DEFAULTS }; }
 static getConfigForm() {
  const schema = [
   { name: 'title', selector: { text: {} } }, { name: 'icon', selector: { icon: {} } },
   { name: 'palette', selector: { select: { options: PALETTES, mode: 'dropdown' } } },
   { name: 'read_only', selector: { boolean: {} } },
   { name: 'navigation_path', selector: { text: {} } },
   { name: 'temperature_entity', selector: { entity: { domain: 'sensor' } } },
   { name: 'temperature_effect', selector: { boolean: {} } },
   { name: 'temperature_animation', selector: { boolean: {} } },
   { name: 'temperature_cold_below', selector: { number: { min: -50, max: 60, step: 0.5, mode: 'box', unit_of_measurement: '°C' } } },
   { name: 'temperature_warm_from', selector: { number: { min: -50, max: 60, step: 0.5, mode: 'box', unit_of_measurement: '°C' } } },
   { name: 'humidity_entity', selector: { entity: { domain: 'sensor' } } },
   { name: 'presence_entity', selector: { entity: { domain: 'binary_sensor' } } },
   { name: 'climate_entity', selector: { entity: { domain: ['climate', 'humidifier'] } } },
  ];
  for (let i = 1; i <= 4; i++) schema.push(
   { name: 'entity_' + i, selector: { entity: {} } },
   { name: 'name_' + i, selector: { text: {} } },
   { name: 'icon_' + i, selector: { icon: {} } },
  );
  const labels = { temperature_effect: 'Temperature colors (opt-in)', temperature_animation: 'Animate warm/cold glow', temperature_cold_below: 'Cold below (°C)', temperature_warm_from: 'Warm from (°C)', climate_entity: 'Room climate / humidifier (optional)', navigation_path: 'Room view path (e.g. /dashboard-home/living-room)', title: 'Room name', icon: 'Room icon', palette: 'Orbit palette', read_only: 'Read-only mode', temperature_entity: 'Temperature sensor', humidity_entity: 'Humidity sensor', presence_entity: 'Occupancy / motion sensor' };
  return { schema, computeLabel: ({ name }) => labels[name] || name.replace(/^(entity|name|icon)_(\d)$/, (_, field, i) => 'Shortcut ' + i + ' · ' + field) };
 }
 constructor() {
  super(); this.attachShadow({ mode: 'open' }); this._config = { ...DEFAULTS };
  this._busy = new Set(); this._error = ''; this._signature = ''; this._expanded = false;
  this.shadowRoot.addEventListener('click', (event) => {
   const button = event.composedPath().find((el) => el?.dataset?.action);
   if (!button || button.disabled) return;
   if (button.dataset.action === 'navigate') {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
   }
   void this._activate(button.dataset.entity, button.dataset.action);
  });
 }
 setConfig(config) {
  if (!config || typeof config !== 'object' || Array.isArray(config)) throw new Error('Room Orbit requires an object configuration.');
  if (config.navigation_path && (typeof config.navigation_path !== 'string' || !/^\/(?!\/)[^\s\\]*$/.test(config.navigation_path))) throw new Error('navigation_path must be a local path such as /dashboard-home/living-room.');
  for (const key of FIELDS) if (config[key] && (typeof config[key] !== 'string' || !/^[a-z_][a-z0-9_]*\.[a-z0-9_]+$/.test(config[key]))) throw new Error(key + ' must be an entity ID.');
  for (const key of ['temperature_entity', 'humidity_entity']) if (config[key] && domain(config[key]) !== 'sensor') throw new Error(key + ' must be a sensor.');
  if (config.presence_entity && domain(config.presence_entity) !== 'binary_sensor') throw new Error('Presence must be a binary sensor.');
  if (config.climate_entity && !['climate', 'humidifier'].includes(domain(config.climate_entity))) throw new Error('climate_entity must be a climate or humidifier entity.');
  for (const key of ['temperature_cold_below', 'temperature_warm_from']) if (config[key] != null && (typeof config[key] !== 'number' || !Number.isFinite(config[key]))) throw new Error(key + ' must be a finite number in Celsius.');
  const cold = config.temperature_cold_below ?? DEFAULTS.temperature_cold_below;
  const warm = config.temperature_warm_from ?? DEFAULTS.temperature_warm_from;
  if (cold >= warm) throw new Error('The cold threshold must be lower than the warm threshold.');
  this._config = { ...DEFAULTS, ...config, palette: PALETTES.includes(config.palette) ? config.palette : 'aurora', read_only: config.read_only === true };
  Object.assign(this._config, { temperature_effect: config.temperature_effect === true, temperature_animation: config.temperature_animation !== false, temperature_cold_below: cold, temperature_warm_from: warm });
  this._error = ''; this._signature = ''; this._expanded = false; this._update();
 }
 set hass(value) { this._hass = value; this._update(); }
 get hass() { return this._hass; }
 getCardSize() { return this._expanded ? 4 : 2; }
 getGridOptions() { return { columns: 6, min_columns: 6 }; }
 _ids() { return [...new Set(FIELDS.map((key) => this._config[key]).filter(Boolean))]; }
 _state(id) { return this._hass?.states?.[id]; }
 _entityIcon(id) {
  const s = this._state(id), d = domain(id);
  if (s?.attributes?.icon) return s.attributes.icon;
  if (d === 'binary_sensor') {
   if (!available(s) || !['on', 'off'].includes(s.state)) return 'mdi:help-circle-outline';
   const dc = s.attributes?.device_class;
   const pair = Object.hasOwn(BINARY_ICONS, dc) ? BINARY_ICONS[dc] : ['radiobox-blank', 'checkbox-marked-circle'];
   return 'mdi:' + pair[s.state === 'on' ? 1 : 0];
  }
  return 'mdi:' + (Object.hasOwn(DOMAIN_ICONS, d) ? DOMAIN_ICONS[d] : 'bookmark-outline');
 }
 _temperatureEffect() {
  if (!this._config.temperature_effect) return 'normal';
  const s = this._state(this._config.temperature_entity);
  if (!available(s) || String(s.state).trim() === '') return 'normal';
  const n = Number(s.state), unit = s.attributes?.unit_of_measurement;
  if (!Number.isFinite(n) || !['°C', '°F', 'K'].includes(unit)) return 'normal';
  const celsius = Math.round((unit === '°F' ? (n - 32) * 5 / 9 : unit === 'K' ? n - 273.15 : n) * 1e6) / 1e6;
  return celsius < this._config.temperature_cold_below ? 'cold' : celsius >= this._config.temperature_warm_from ? 'warm' : 'normal';
 }
 _climate(id) {
  const s = this._state(id);
  if (domain(id) === 'humidifier') {
   const image = s?.attributes?.device_class === 'dehumidifier' ? 'mdi:air-humidifier-off' : 'mdi:air-humidifier';
   if (!available(s)) return { label: 'Unavailable', kind: 'unavailable', icon: image };
   if (s.state === 'off') return { label: 'Off', kind: 'off', icon: 'mdi:power' };
   const action = s.attributes?.action;
   const actions = { humidifying: ['Humidifying', 'mdi:air-humidifier'], drying: ['Drying', 'mdi:water-percent'], idle: ['Idle', 'mdi:pause-circle-outline'], off: ['Off', 'mdi:power'] };
   if (Object.hasOwn(actions, action)) return { label: actions[action][0], kind: action, icon: actions[action][1] };
   return { label: action == null && s.state === 'on' ? 'On' : 'Action unknown', kind: 'unknown', icon: image };
  }
  if (!available(s)) return { label: 'Unavailable', kind: 'unavailable', icon: 'mdi:thermostat' };
  const action = s.attributes?.hvac_action;
  const actions = {
   heating: ['Heating', 'mdi:fire'], idle: ['Idle', 'mdi:pause-circle-outline'], off: ['Off', 'mdi:power'],
   cooling: ['Cooling', 'mdi:snowflake'], drying: ['Drying', 'mdi:water-percent'], fan: ['Fan', 'mdi:fan'],
   defrosting: ['Defrosting', 'mdi:snowflake-melt'], preheating: ['Preheating', 'mdi:thermometer-chevron-up'],
  };
  if (Object.hasOwn(actions, action)) return { label: actions[action][0], kind: action, icon: actions[action][1] };
  const modes = { heat: 'Heat mode', cool: 'Cool mode', heat_cool: 'Heat/cool mode', auto: 'Auto mode', dry: 'Dry mode', fan_only: 'Fan mode', off: 'Off mode' };
  return { label: !action && Object.hasOwn(modes, s.state) ? modes[s.state] : 'Action unknown', kind: 'unknown', icon: 'mdi:thermostat' };
 }
 _format(state) {
  if (!available(state)) return state ? 'Unavailable' : 'Not found';
  if (String(state.state).trim() !== '' && Number.isFinite(Number(state.state))) {
   let formatted; try { formatted = new Intl.NumberFormat(this._hass?.locale?.language || this._hass?.language || undefined, { maximumFractionDigits: 1 }).format(Number(state.state)); } catch { formatted = String(state.state); }
   return formatted + (state.attributes?.unit_of_measurement ? ' ' + state.attributes.unit_of_measurement : '');
  }
  try { return this._hass.formatEntityState?.(state) || String(state.state); } catch { return String(state.state); }
 }
 _actions(id) {
  const s = this._state(id), d = domain(id);
  if (this._config.read_only || !available(s)) return [];
  const has = (service) => !!this._hass?.services?.[d]?.[service];
  // HA fan TURN_OFF=16, TURN_ON=32. Toggle dispatches the opposite of the current state.
  if (d === 'fan') {
   const flags = Number(s.attributes?.supported_features) || 0;
   const bit = s.state === 'on' ? 16 : s.state === 'off' ? 32 : 0;
   return bit && (flags & bit) && has('toggle') ? [{ action: 'toggle', icon: 'mdi:power', label: 'Toggle' }] : [];
  }
  if (['light', 'switch', 'input_boolean'].includes(d)) return has('toggle') ? [{ action: 'toggle', icon: 'mdi:power', label: 'Toggle' }] : [];
  if (d !== 'cover') return [];
  const flags = Number(s.attributes?.supported_features) || 0;
  return [
   { action: 'open_cover', bit: 1, icon: 'mdi:chevron-up', label: 'Open' },
   { action: 'stop_cover', bit: 8, icon: 'mdi:stop', label: 'Stop' },
   { action: 'close_cover', bit: 2, icon: 'mdi:chevron-down', label: 'Close' },
  ].filter((a) => (flags & a.bit) && has(a.action));
 }
 _update() {
  if (!this._hass) return;
  const signature = JSON.stringify([this._config, this._hass.locale, this._hass.language, this._ids().map((id) => [id, this._state(id), this._actions(id)]), [...this._busy], this._error, this._expanded]);
  if (signature === this._signature) return;
  this._signature = signature; this._render();
 }
 _infoButton(id, content, className = '') { return '<button class="' + className + '" data-action="info" data-entity="' + esc(id) + '" aria-label="More information: ' + esc(this._state(id)?.attributes?.friendly_name || id) + '">' + content + '</button>'; }
 _render() {
  const c = this._config, presence = this._state(c.presence_entity);
  const occupied = available(presence) && presence.state === 'on';
  const status = !c.presence_entity ? 'Room overview' : !available(presence) ? 'Presence unknown' : occupied ? 'Occupied' : 'Clear';
  const climate = c.climate_entity ? this._climate(c.climate_entity) : null;
  const badge = climate ? this._infoButton(c.climate_entity, icon(climate.icon) + '<span class="climate-label">' + esc(climate.label) + '</span>', 'climate-status ' + climate.kind + (domain(c.climate_entity) === 'humidifier' ? ' humidity-status' : '')) : '';
  const readings = [['temperature_entity', 'Temperature', 'mdi:thermometer'], ['humidity_entity', 'Humidity', 'mdi:water-percent']].filter(([field]) => c[field]).map(([field, label, image]) => this._infoButton(c[field], icon(image) + '<span class="sr-only">' + label + ': </span><span class="reading-value">' + esc(this._format(this._state(c[field]))) + '</span>', 'reading')).join('');
  const slots = [1, 2, 3, 4].filter((i) => c['entity_' + i]).map((i) => {
   const id = c['entity_' + i], s = this._state(id), d = domain(id);
   const image = c['icon_' + i] || this._entityIcon(id);
   const airDevice = ['climate', 'humidifier'].includes(d);
   const airStatus = airDevice ? this._climate(id) : null;
   const active = airDevice ? (d === 'climate' ? airStatus.kind === 'heating' : ['humidifying', 'drying'].includes(airStatus.kind)) : available(s) && ['on', 'open', 'opening', 'closing'].includes(s.state);
   const name = c['name_' + i] || s?.attributes?.friendly_name || id;
   let state = airDevice ? airStatus.label : this._format(s); const position = s?.attributes?.current_position;
   if (d === 'cover' && available(s) && typeof position === 'number' && Number.isFinite(position) && position >= 0 && position <= 100) state += ' · ' + position + '% open';
   return { id, image: airDevice ? airStatus.icon : image, active, name, state, climateKind: airDevice ? airStatus.kind : '', actions: this._actions(id) };
  });
  const quick = slots.map((slot) => {
   const toggle = slot.actions.some((a) => a.action === 'toggle');
   const action = toggle ? 'toggle' : slot.actions.length ? 'expand' : 'info';
   const label = (toggle ? 'Toggle: ' : action === 'expand' ? 'Show controls: ' : 'More information: ') + slot.name + ' · ' + slot.state;
   return '<button class="quick ' + (slot.active ? 'active ' : '') + (slot.climateKind ? 'climate-shortcut ' : '') + slot.climateKind + '" data-entity="' + esc(slot.id) + '" data-action="' + action + '" aria-label="' + esc(label) + '" title="' + esc(label) + '"' + (action === 'expand' ? ' aria-expanded="' + (this._expanded === true || this._expanded === slot.id) + '"' : '') + (this._busy.has(slot.id) ? ' disabled aria-busy="true"' : '') + '>' + icon(slot.image) + (slot.climateKind ? '<span class="quick-climate-label">' + esc(slot.state) + '</span>' : '') + (this._busy.has(slot.id) ? '<span class="busy">…</span>' : '') + '</button>';
  }).join('');
  const details = this._expanded ? slots.filter((slot) => this._expanded === true || this._expanded === slot.id).map((slot) => {
   const buttons = slot.actions.map((a) => '<button class="action" data-entity="' + esc(slot.id) + '" data-action="' + a.action + '" aria-label="' + a.label + ': ' + esc(slot.name) + '" title="' + a.label + '" ' + (this._busy.has(slot.id) ? 'disabled aria-busy="true"' : '') + '>' + icon(a.icon) + '</button>').join('');
   return '<article class="tile">' + this._infoButton(slot.id, icon(slot.image) + '<span class="tile-copy"><span class="tile-name" title="' + esc(slot.name) + '">' + esc(slot.name) + '</span><span class="tile-state">' + esc(slot.state) + '</span></span>', 'tile-head') + (buttons ? '<div class="actions">' + buttons + '</div>' : '') + '</article>';
  }).join('') : '';
  const title = c.title || DEFAULTS.title;
  this.shadowRoot.innerHTML = '<style>' + STYLE + NAV_STYLE + CLIMATE_STYLE + HUMIDIFIER_STYLE + TEMPERATURE_STYLE + '</style><ha-card data-palette="' + c.palette + '" data-temperature="' + this._temperatureEffect() + '" data-temperature-animation="' + (c.temperature_effect && c.temperature_animation) + '"><div class="shell"><div class="summary ' + (!slots.length ? 'no-shortcuts' : '') + '">' + (c.navigation_path ? '<a class="room-navigation" data-action="navigate" data-entity="" href="' + esc(c.navigation_path) + '" aria-label="Open room view: ' + esc(title) + '"><span class="sr-only">Open ' + esc(title) + '</span></a>' : '') + '<div class="identity"><button class="room-icon ' + (occupied ? 'occupied' : '') + '" data-action="details" data-entity="" aria-label="' + (this._expanded ? 'Hide' : 'Show') + ' room details: ' + esc(title) + '" aria-expanded="' + !!this._expanded + '" title="' + status + ' · Room details">' + icon(c.icon || DEFAULTS.icon) + (c.presence_entity ? '<span class="dot"></span>' : '') + '</button><h2 title="' + esc(title) + '">' + esc(title) + '</h2><span class="sr-only">' + status + '</span><div class="telemetry">' + (readings || '<span class="hint">' + status + '</span>') + '</div>' + badge + '</div>' + (slots.length ? '<section class="shortcuts count-' + slots.length + '" aria-label="Room shortcuts">' + quick + '</section>' : '') + '</div>' + (details ? '<section class="tiles" aria-label="Room details">' + details + '</section>' : '') + (!slots.length && !readings ? '<p class="hint">Add up to four shortcuts in the card editor.</p>' : '') + (this._error ? '<div class="error" role="alert">' + esc(this._error) + '</div>' : '') + '</div></ha-card>';
 }
 async _activate(id, action) {
  if (action === 'navigate' && id === '') { this._navigate(); return; }
  if (action === 'details' && id === '') { this._expanded = !this._expanded; this._update(); return; }
  if (!this._ids().includes(id)) return;
  if (action === 'expand' && this._actions(id).length) { this._expanded = this._expanded === id ? false : id; this._update(); return; }
  if (action === 'info') { this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: id }, bubbles: true, composed: true })); return; }
  if (this._busy.has(id) || !this._actions(id).some((a) => a.action === action)) return;
  this._busy.add(id); this._error = ''; this._update();
  try { await this._hass.callService(domain(id), action, { entity_id: id }); }
  catch { this._error = 'The action could not be sent. Check Home Assistant and try again.'; }
  finally { this._busy.delete(id); this._update(); }
 }
 _navigate() {
  const path = this._config.navigation_path;
  if (!path) return;
  const current = window.location.pathname + window.location.search + window.location.hash;
  if (current === path) return;
  try {
   window.history.pushState({ from: current }, '', path);
   window.dispatchEvent(new CustomEvent('location-changed', { detail: { replace: false } }));
  } catch { this._error = 'The room view could not be opened. Check the navigation path.'; this._update(); }
 }
}
if (!customElements.get(TYPE)) customElements.define(TYPE, RoomOrbitCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === TYPE)) window.customCards.push({ type: TYPE, name: 'Room Orbit Card', description: 'Room sensors and capability-aware shortcuts in the Orbit style.', preview: true, documentationURL: 'https://github.com/Liionboy/ha-room-orbit-card' });
console.info('ROOM ORBIT ' + VERSION);

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="ha-room-orbit-card"))window.customCards.push({type:"ha-room-orbit-card",name:"Room Orbit Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["ha-room-orbit-card"]={version:"1.6.0",types:["ha-room-orbit-card"]};
})() } catch(error){suite.errors.push({component:"ha-room-orbit-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","ha-room-orbit-card",error);}
/* ha-scenes-orbit-card @ 1.0.0 (f5b6741347f807e4a07c520e9cd9038d7b59df9c) */
try { (() => {
const knownTypes=["ha-scenes-orbit-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["ha-scenes-orbit-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const TYPE = 'ha-scenes-orbit-card';
const VERSION = '1.0.0';
const PALETTES = ['aurora', 'ocean', 'sunset', 'lavender'];
const DEFAULTS = { title: 'Scenes Orbit', palette: 'aurora', entities: [], read_only: false, confirmation: true };
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const icon = (v) => '<ha-icon icon="' + esc(v) + '"></ha-icon>';
const domain = (id) => String(id).split('.')[0];
const STYLE = [
 ':host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color,#202b3c)}*{box-sizing:border-box}',
 'ha-card{display:block;container:scenes/inline-size;min-width:0;max-width:100%;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color,#dfe5eb) 65%,transparent);border-radius:var(--orbit-theme-card-radius,20px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 2px 5px #14233716));--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0);--accent3:var(--orbit-theme-accent-3,#54a9db)}',
 '[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}[data-palette=sunset]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}',
 '.shell{position:relative;padding:16px;background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 6%,transparent),transparent 80%))}.shell:before{content:"";position:absolute;top:0;left:20px;right:20px;height:2px;background:var(--orbit-theme-strip-background,linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3)));border-radius:0 0 4px 4px}',
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

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="ha-scenes-orbit-card"))window.customCards.push({type:"ha-scenes-orbit-card",name:"Scenes Orbit Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["ha-scenes-orbit-card"]={version:"1.0.0",types:["ha-scenes-orbit-card"]};
})() } catch(error){suite.errors.push({component:"ha-scenes-orbit-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","ha-scenes-orbit-card",error);}
/* ha-sensor-graph-orbit-card @ 1.0.0 (de3540dd31fb5f338e14b6925c5b7bbcde6265c6) */
try { (() => {
const knownTypes=["ha-sensor-graph-orbit-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["ha-sensor-graph-orbit-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
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
 'ha-card{display:block;container:graph/inline-size;overflow:hidden;border-radius:var(--orbit-theme-card-radius,20px);border:1px solid var(--divider-color,#e1e7ed);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 2px 6px #14233712));--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#28b7b0)}',
 '[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7}[data-palette=sunset]{--accent:#d75b43;--accent2:#e79940}[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8}',
 '.shell{padding:16px;background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--accent2) 8%,transparent),transparent 65%));border-top:2px solid var(--accent)}',
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

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="ha-sensor-graph-orbit-card"))window.customCards.push({type:"ha-sensor-graph-orbit-card",name:"Sensor Graph Orbit Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["ha-sensor-graph-orbit-card"]={version:"1.0.0",types:["ha-sensor-graph-orbit-card"]};
})() } catch(error){suite.errors.push({component:"ha-sensor-graph-orbit-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","ha-sensor-graph-orbit-card",error);}
/* ha-server-orbit-card @ 1.0.0 (69880c3a24b66d1af551296be9ae5c74932d1b11) */
try { (() => {
const knownTypes=["ha-server-orbit-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["ha-server-orbit-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const TYPE = "ha-server-orbit-card";
const VERSION = "1.0.0";
const PALETTES = ["aurora", "ocean", "sunset", "lavender"];
const METRIC_COLORS = ["aurora", "blue", "red", "green", "orange", "purple", "cyan"];
const DEFAULTS = { title: "Server Orbit", subtitle: "SYSTEM MONITOR", palette: "aurora", power_entity: "", power_control: false, metrics: [] };

const STYLE = `
:host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:server-orbit;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:var(--orbit-theme-card-radius,24px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1)));overflow:hidden}
ha-card[data-palette="aurora"]{--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0);--accent3:var(--orbit-theme-accent-3,#54a9db)}ha-card[data-palette="ocean"]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}ha-card[data-palette="sunset"]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}ha-card[data-palette="lavender"]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}
.shell{position:relative;padding:clamp(16px,3cqi,22px);background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 13%,transparent),transparent 54%),radial-gradient(ellipse at 100% 100%,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 48%))}.shell:before{position:absolute;top:0;right:22px;left:22px;height:3px;border-radius:0 0 4px 4px;background:var(--orbit-theme-strip-background,linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3)));content:""}
.header{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}.identity{display:flex;align-items:center;gap:12px;min-width:0}.icon-wrap{display:grid;place-items:center;flex:none;width:48px;height:48px;border:1px solid color-mix(in srgb,var(--accent) 24%,transparent);border-radius:17px;background:linear-gradient(145deg,var(--accent),var(--accent2));box-shadow:0 7px 18px color-mix(in srgb,var(--accent) 22%,transparent);color:#fff}.icon-wrap ha-icon{--mdc-icon-size:25px}.copy{min-width:0}.eyebrow{color:var(--orbit-theme-accent,var(--accent));font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.title{overflow:hidden;margin:3px 0 0;font-size:clamp(16px,2.5cqi,20px);font-weight:780;letter-spacing:-.03em;text-overflow:ellipsis;white-space:nowrap}
.pill{display:flex;align-items:center;gap:7px;padding:7px 10px;border:1px solid color-mix(in srgb,currentColor 12%,transparent);border-radius:999px;background:color-mix(in srgb,currentColor 8%,var(--card-background-color,#fff));color:var(--secondary-text-color);font-size:11px;font-weight:750;white-space:nowrap}.dot{width:7px;height:7px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 16%,transparent)}.pill.online{color:var(--success-color,#168b68)}.pill.offline{color:var(--error-color,#c74343)}
.metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:17px}.metric{--metric-accent:var(--accent);min-width:0;padding:14px;border:1px solid color-mix(in srgb,var(--divider-color) 68%,transparent);border-radius:17px;background:color-mix(in srgb,var(--card-background-color,#fff) 91%,var(--metric-accent));}.metric[data-color="blue"]{--metric-accent:#3488d1}.metric[data-color="red"]{--metric-accent:#df5d58}.metric[data-color="green"]{--metric-accent:#35a66f}.metric[data-color="orange"]{--metric-accent:#df8a32}.metric[data-color="purple"]{--metric-accent:#895bc8}.metric[data-color="cyan"]{--metric-accent:#22a7b8}
.metric-head{display:flex;align-items:center;gap:7px;min-width:0;color:var(--secondary-text-color);font-size:10px;font-weight:750;letter-spacing:.045em;text-transform:uppercase}.metric-head ha-icon{flex:none;color:var(--metric-accent);--mdc-icon-size:17px}.metric-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.readout{display:flex;align-items:center;gap:12px;margin-top:13px}.gauge{--value:0%;position:relative;display:grid;place-items:center;flex:none;width:56px;aspect-ratio:1;border-radius:50%;background:conic-gradient(var(--metric-accent) var(--value),color-mix(in srgb,var(--metric-accent) 12%,var(--divider-color)) 0)}.gauge:before{position:absolute;inset:5px;border:1px solid color-mix(in srgb,var(--metric-accent) 14%,var(--divider-color));border-radius:50%;background:var(--card-background-color,#fff);content:""}.gauge ha-icon{z-index:1;color:var(--metric-accent);--mdc-icon-size:21px}.metric-value{overflow:hidden;min-width:0;color:var(--primary-text-color);font-size:clamp(17px,3cqi,24px);font-weight:820;letter-spacing:-.04em;font-variant-numeric:tabular-nums;text-overflow:ellipsis;white-space:nowrap}.metric-unit{margin-left:3px;color:var(--secondary-text-color);font-size:10px;font-weight:650;letter-spacing:0}.metric-value.unavailable{color:var(--secondary-text-color);font-size:16px}.bar{height:5px;margin-top:13px;border-radius:99px;background:color-mix(in srgb,var(--metric-accent) 12%,var(--divider-color));overflow:hidden}.bar-fill{height:100%;width:var(--value,0%);border-radius:inherit;background:linear-gradient(90deg,var(--metric-accent),color-mix(in srgb,var(--metric-accent) 55%,white));transition:width .3s ease}
.footer{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:13px}.note{overflow:hidden;color:var(--secondary-text-color);font-size:10px;text-overflow:ellipsis;white-space:nowrap}.power{display:flex;align-items:center;gap:7px;padding:8px 11px;border:1px solid color-mix(in srgb,var(--accent) 23%,var(--divider-color));border-radius:12px;background:color-mix(in srgb,var(--accent) 9%,var(--card-background-color,#fff));color:var(--accent);font:inherit;font-size:10px;font-weight:800;cursor:pointer}.power:hover{background:color-mix(in srgb,var(--accent) 15%,var(--card-background-color,#fff))}.power:disabled{opacity:.6;cursor:wait}.power ha-icon{--mdc-icon-size:16px}.collapsed{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:16px;padding:14px;border:1px solid color-mix(in srgb,var(--divider-color) 68%,transparent);border-radius:15px;background:color-mix(in srgb,var(--card-background-color,#fff) 92%,var(--accent))}.collapsed-copy{color:var(--secondary-text-color);font-size:12px}.hint{margin-top:12px;padding:10px 12px;border:1px dashed color-mix(in srgb,var(--secondary-text-color) 35%,transparent);border-radius:12px;color:var(--secondary-text-color);font-size:10px;line-height:1.45}
@container server-orbit (max-width:520px){.metrics{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.metric{padding:11px}.gauge{width:48px}.readout{gap:9px}}@container server-orbit (max-width:320px){.shell{padding:12px}.identity{gap:8px}.icon-wrap{width:38px;height:38px}.pill{padding:5px 7px;font-size:9px}.metrics{grid-template-columns:1fr}.metric{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:3px 8px}.metric-head{grid-column:1}.readout{grid-column:2;grid-row:1/3;margin-top:0}.gauge{width:42px}.bar{grid-column:1}.footer{align-items:flex-start;flex-direction:column}}
@media(prefers-reduced-motion:reduce){.bar-fill{transition:none}}
`;

function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c])}
function finite(state){if(!state||["unknown","unavailable","none",""].includes(String(state.state??"").toLowerCase()))return null;const n=Number(String(state.state).replace(/,/g,""));return Number.isFinite(n)?n:null}
function unit(state){return state?.attributes?.unit_of_measurement||""}
function val(n){return n===null?"—":new Intl.NumberFormat(undefined,{maximumFractionDigits:1}).format(n)}

class ServerOrbitCard extends HTMLElement{
 static getStubConfig(){return {...DEFAULTS,metrics:[{entity:"",name:"CPU",icon:"mdi:cpu-64-bit",color:"aurora",max_value:100}]}}
 static getConfigForm(){return {schema:[
  {name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"palette",selector:{select:{options:PALETTES,mode:"dropdown"}}},
  {name:"power_entity",selector:{entity:{domain:["switch","binary_sensor","device_tracker","sensor"]}}},{name:"power_control",selector:{boolean:{}}}
 ]}}
 constructor(){super();this.attachShadow({mode:"open"});this._config={...DEFAULTS};this._sig="";this._busy=false}
 setConfig(c){if(!c||typeof c!=="object")throw new Error("Invalid Server Orbit Card configuration.");this._config={...DEFAULTS,...c,palette:PALETTES.includes(c.palette)?c.palette:"aurora",metrics:Array.isArray(c.metrics)?c.metrics.slice(0,4):[]};this._sig="";this._render()}
 set hass(h){this._hass=h;const d=this._data();const s=JSON.stringify({c:this._config,on:d.on,power:d.powerState,metrics:d.metrics.map(m=>[m.value,m.unit,m.percent,m.available]),busy:this._busy});if(s!==this._sig){this._sig=s;this._render(d)}}get hass(){return this._hass}
 getCardSize(){return 3}getGridOptions(){return {rows:4,columns:12,min_rows:2}}
 _data(){const states=this._hass?.states||{},power=states[this._config.power_entity],domain=this._config.power_entity.split(".")[0];let on=null;
  if(power){const s=String(power.state).toLowerCase();if(domain==="switch"||domain==="binary_sensor")on=s==="on";else if(domain==="device_tracker")on=s==="home";else if(domain==="sensor"){if(["on","online","connected","ready","running","up","true"].includes(s))on=true;else if(["off","offline","disconnected","not_home","false"].includes(s))on=false}}
  const metrics=this._config.metrics.map((m,i)=>{const st=states[m.entity],n=finite(st),max=Number(m.max_value),hasMax=Number.isFinite(max)&&max>0,pct=hasMax&&n!==null?Math.max(0,Math.min(100,n/max*100)):null;return {entity:m.entity||"",name:m.name||st?.attributes?.friendly_name||`Metric ${i+1}`,icon:m.icon||"mdi:chart-line",color:METRIC_COLORS.includes(m.color)?m.color:"aurora",value:val(n),unit:unit(st),available:n!==null,percent:pct,raw:n}});
  const controllable=domain==="switch"&&this._config.power_control&&Boolean(power);return {metrics,on,powerState:power?.state||"unknown",controllable,online:on===true,offline:on===false}}
 _render(d=this._data()){if(!this.shadowRoot||!this._hass)return;const config=this._config,hasSwitch=this._config.power_entity.startsWith("switch.");const off=d.offline&&hasSwitch;const detail=off?`<section class="collapsed"><div class="collapsed-copy">${esc(config.title)} is powered off. Metrics are hidden until it is on.</div>${d.controllable?`<button class="power" data-power><ha-icon icon="mdi:power"></ha-icon>${this._busy?"Switching…":"Power on"}</button>`:""}</section>`:`<section class="metrics">${d.metrics.map(m=>{const v=m.percent??0;return `<article class="metric" data-color="${m.color}"><div class="metric-head"><ha-icon icon="${esc(m.icon)}"></ha-icon><span class="metric-name">${esc(m.name)}</span></div><div class="readout">${m.percent===null?`<ha-icon class="plain-icon" icon="${esc(m.icon)}"></ha-icon>`:`<div class="gauge" style="--value:${v}%"><ha-icon icon="${esc(m.icon)}"></ha-icon></div>`}<div class="metric-value ${m.available?"":"unavailable"}">${esc(m.value)}${m.available&&m.unit?`<span class="metric-unit">${esc(m.unit)}</span>`:""}</div></div>${m.percent!==null?`<div class="bar" style="--value:${v}%"><div class="bar-fill"></div></div>`:""}</article>`}).join("")}</section>`;
  const status=hasSwitch?(d.powerState==="on"?"Powered on":d.powerState==="off"?"Powered off":d.powerState):d.on===true?"Online":d.on===false?"Offline":"Monitoring";const cls=d.on===true?"online":d.on===false?"offline":"";
  const actionable=hasSwitch&&d.controllable&&!off;
  this.shadowRoot.innerHTML=`<style>${STYLE}.plain-icon{color:var(--accent);--mdc-icon-size:28px;flex:none}</style><ha-card data-palette="${config.palette}"><div class="shell"><header class="header"><div class="identity"><div class="icon-wrap"><ha-icon icon="mdi:server"></ha-icon></div><div class="copy"><div class="eyebrow">${esc(config.subtitle||"SYSTEM MONITOR")}</div><h2 class="title">${esc(config.title||"Server Orbit")}</h2></div></div><div class="pill ${cls}"><span class="dot"></span>${esc(status)}</div></header>${detail}<footer class="footer"><span class="note">${d.metrics.length} configurable metric${d.metrics.length===1?"":"s"} · live Home Assistant data</span>${actionable?`<button class="power" data-power><ha-icon icon="mdi:power"></ha-icon>${this._busy?"Switching…":"Power off"}</button>`:""}</footer></div></ha-card>`;
  this.shadowRoot.querySelector("[data-power]")?.addEventListener("click",()=>this._togglePower());
 }
 async _togglePower(){if(this._busy||!this._config.power_entity)return;this._busy=true;this._sig="";this._render();try{await this._hass.callService("switch","toggle",{entity_id:this._config.power_entity})}catch(e){console.warn("Server Orbit Card could not toggle the configured power switch.",e)}finally{this._busy=false;this._sig="";this._render()}}
}
if(!customElements.get(TYPE))customElements.define(TYPE,ServerOrbitCard);
window.customCards=window.customCards||[];window.customCards.push({type:TYPE,name:"Server Orbit Card",description:"A configurable Orbit-style Home Assistant server monitoring card.",preview:false,documentationURL:"https://github.com/Liionboy/ha-server-orbit-card"});
console.info(`%c SERVER-ORBIT %c ${VERSION} `,"background:#078f72;color:#fff;font-weight:700","background:var(--card-background-color);color:var(--primary-text-color)");

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="ha-server-orbit-card"))window.customCards.push({type:"ha-server-orbit-card",name:"Server Orbit Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["ha-server-orbit-card"]={version:"1.0.0",types:["ha-server-orbit-card"]};
})() } catch(error){suite.errors.push({component:"ha-server-orbit-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","ha-server-orbit-card",error);}
/* ha-speedtest-orbit-card @ 1.0.2 (0140695df224f6b0254058f6b2f0c154e58d5446) */
try { (() => {
const knownTypes=["ha-speedtest-orbit-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["ha-speedtest-orbit-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const CARD_TYPE = "ha-speedtest-orbit-card";
const VERSION = "1.0.2";
const PALETTES = new Set(["aurora", "ocean", "sunset", "lavender"]);
const METRICS = [
  { key: "download", label: "Download", icon: "mdi:download" },
  { key: "upload", label: "Upload", icon: "mdi:upload" },
  { key: "ping", label: "Ping", icon: "mdi:timer-outline" },
];
const DEFAULTS = {
  title: "Internet Speed",
  palette: "ocean",
  auto_discover: true,
  download_entity: "",
  upload_entity: "",
  ping_entity: "",
};

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:speedtest-card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:var(--orbit-theme-card-radius,24px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1)))}
  ha-card[data-palette="aurora"]{--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0);--accent3:var(--orbit-theme-accent-3,#54a9db)}ha-card[data-palette="ocean"]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}ha-card[data-palette="sunset"]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}ha-card[data-palette="lavender"]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}
  .shell{position:relative;padding:clamp(16px,3cqi,22px);background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 13%,transparent),transparent 54%),radial-gradient(ellipse at 100% 100%,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 48%))}.shell:before{position:absolute;top:0;right:22px;left:22px;height:3px;border-radius:0 0 4px 4px;background:var(--orbit-theme-strip-background,linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3)));content:""}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}.identity{display:flex;align-items:center;gap:12px;min-width:0}.icon-wrap{display:grid;place-items:center;flex:none;width:48px;height:48px;border:1px solid color-mix(in srgb,var(--accent) 24%,transparent);border-radius:17px;background:linear-gradient(145deg,var(--accent),var(--accent2));box-shadow:0 7px 18px color-mix(in srgb,var(--accent) 22%,transparent);color:#fff}.icon-wrap ha-icon{--mdc-icon-size:25px}.identity-copy{min-width:0}.eyebrow{color:var(--orbit-theme-accent,var(--accent));font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.title{overflow:hidden;margin:3px 0 0;font-size:clamp(16px,2.5cqi,20px);font-weight:780;letter-spacing:-.03em;text-overflow:ellipsis;white-space:nowrap}
  .pill{display:flex;align-items:center;gap:7px;padding:7px 10px;border:1px solid color-mix(in srgb,currentColor 12%,transparent);border-radius:999px;background:color-mix(in srgb,currentColor 8%,var(--card-background-color,#fff));color:var(--secondary-text-color);font-size:11px;font-weight:750;white-space:nowrap}.dot{width:7px;height:7px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 16%,transparent)}.pill.online{color:var(--success-color,#168b68)}
  .hero{position:relative;display:grid;grid-template-columns:minmax(110px,.8fr) minmax(0,1.2fr);align-items:center;gap:18px;min-height:174px;margin-top:17px;padding:18px;border:1px solid color-mix(in srgb,var(--accent) 17%,var(--divider-color));border-radius:19px;background:radial-gradient(circle at 25% 50%,color-mix(in srgb,var(--accent) 13%,transparent),transparent 32%),linear-gradient(135deg,color-mix(in srgb,var(--accent) 5%,var(--card-background-color,#fff)),var(--secondary-background-color,#f1f3f5));overflow:hidden}.radar{position:relative;display:grid;place-items:center;justify-self:center;width:132px;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--accent) 30%,var(--divider-color));border-radius:50%;background:repeating-radial-gradient(circle,transparent 0 19px,color-mix(in srgb,var(--accent) 16%,transparent) 20px 21px);box-shadow:inset 0 0 28px color-mix(in srgb,var(--accent) 9%,transparent)}.radar:before{position:absolute;inset:10%;border-radius:50%;background:conic-gradient(from 230deg,transparent 0 62%,color-mix(in srgb,var(--accent2) 28%,transparent) 83%,transparent);content:"";animation:sweep 6s linear infinite}.radar:after{position:absolute;inset:50% 50% 0 0;border-top:1px solid color-mix(in srgb,var(--accent) 45%,transparent);content:"";transform-origin:100% 0;animation:sweep 6s linear infinite}.radar-core{z-index:1;display:grid;place-items:center;width:66px;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--accent) 34%,transparent);border-radius:50%;background:var(--card-background-color,#fff);box-shadow:0 0 0 7px color-mix(in srgb,var(--accent) 8%,transparent),0 5px 18px color-mix(in srgb,var(--accent) 15%,transparent);color:var(--accent)}.radar-core ha-icon{--mdc-icon-size:28px}.radar-caption{position:absolute;bottom:-22px;color:var(--secondary-text-color);font-size:9px;font-weight:750;letter-spacing:.12em;text-transform:uppercase;white-space:nowrap}
  .hero-copy{min-width:0}.hero-label{color:var(--secondary-text-color);font-size:10px;font-weight:750;letter-spacing:.1em;text-transform:uppercase}.hero-value{margin-top:4px;color:var(--primary-text-color);font-size:clamp(27px,7cqi,42px);font-weight:820;letter-spacing:-.055em;line-height:1.1;font-variant-numeric:tabular-nums;white-space:nowrap}.hero-unit{color:var(--secondary-text-color);font-size:13px;font-weight:650;letter-spacing:0}.hero-sub{margin-top:7px;color:var(--secondary-text-color);font-size:10px;line-height:1.4}
  .metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:10px}.metric{position:relative;min-width:0;overflow:hidden;padding:11px;border:1px solid color-mix(in srgb,var(--divider-color) 68%,transparent);border-radius:15px;background:color-mix(in srgb,var(--card-background-color,#fff) 91%,var(--accent))}.metric:after{position:absolute;right:-15px;bottom:-24px;width:60px;height:60px;border:1px solid color-mix(in srgb,var(--accent) 22%,transparent);border-radius:50%;content:""}.metric-head{display:flex;align-items:center;gap:6px;color:var(--secondary-text-color);font-size:9px;font-weight:750;letter-spacing:.07em;text-transform:uppercase}.metric-head ha-icon{color:var(--accent);--mdc-icon-size:16px}.metric-value{overflow:hidden;margin-top:7px;color:var(--primary-text-color);font-size:clamp(14px,3.3cqi,19px);font-weight:800;font-variant-numeric:tabular-nums;text-overflow:ellipsis;white-space:nowrap}.metric-value.unavailable{color:var(--secondary-text-color);font-size:12px}.metric-unit{margin-left:3px;color:var(--secondary-text-color);font-size:9px;font-weight:600}.sparkline{display:block;width:100%;height:20px;margin-top:5px;overflow:visible}.sparkline polyline{fill:none;stroke:var(--accent);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.sparkline.upload polyline{stroke:var(--accent2)}.sparkline.ping polyline{stroke:var(--accent3)}
  .footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:10px;padding:0 2px}.footer-copy{overflow:hidden;color:var(--secondary-text-color);font-size:10px;text-overflow:ellipsis;white-space:nowrap}.footer-copy strong{color:var(--primary-text-color);font-weight:700}.hint{margin-top:12px;padding:10px 12px;border:1px dashed color-mix(in srgb,var(--secondary-text-color) 35%,transparent);border-radius:12px;color:var(--secondary-text-color);font-size:10px;line-height:1.45}.hint.error{border-color:color-mix(in srgb,var(--error-color,#c74343) 45%,transparent);color:var(--error-color,#c74343)}
  @keyframes sweep{to{transform:rotate(360deg)}}@container speedtest-card (max-width:420px){.shell{padding:15px}.identity{gap:9px}.icon-wrap{width:40px;height:40px;border-radius:14px}.icon-wrap ha-icon{--mdc-icon-size:22px}.pill{gap:5px;padding:6px 8px;font-size:10px}.hero{grid-template-columns:94px minmax(0,1fr);gap:12px;min-height:146px;padding:13px}.radar{width:92px}.radar-core{width:49px}.radar-core ha-icon{--mdc-icon-size:22px}.radar-caption{bottom:-17px;font-size:8px}.metrics{gap:6px}.metric{padding:8px}.metric-head{gap:4px;font-size:8px}.metric-head ha-icon{--mdc-icon-size:14px}.sparkline{height:15px}}@container speedtest-card (max-width:320px){.shell{padding:12px}.header{gap:7px}.identity{gap:7px}.icon-wrap{width:36px;height:36px}.title{font-size:15px}.pill{padding:5px 7px;font-size:9px}.hero{grid-template-columns:1fr;justify-items:center;gap:21px}.hero-copy{text-align:center}.radar{width:104px}.metrics{grid-template-columns:1fr}.metric{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:2px 8px}.metric-head{grid-column:1}.metric-value{grid-column:1;margin-top:1px}.sparkline{grid-column:2;grid-row:1/3;width:70px;height:28px;margin:0}}
  @media(prefers-reduced-motion:reduce){.radar:before,.radar:after{animation:none!important}}
`;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function isUnavailable(state) {
  return !state || ["unknown", "unavailable", "none", ""].includes(String(state.state ?? "").toLowerCase());
}

function numericValue(state) {
  if (isUnavailable(state)) return null;
  const value = Number(state.state);
  return Number.isFinite(value) ? value : null;
}

function formatMetric(state, decimals, fallbackUnit) {
  const number = numericValue(state);
  if (number === null) return { value: "—", unit: "", available: false };
  return {
    value: new Intl.NumberFormat(undefined, { maximumFractionDigits: decimals }).format(number),
    unit: state.attributes?.unit_of_measurement || fallbackUnit,
    available: true,
  };
}

function normalized(value) { return String(value ?? "").toLowerCase().replace(/[^a-z0-9]/g, ""); }

class SpeedtestOrbitCard extends HTMLElement {
  static getStubConfig() { return { ...DEFAULTS }; }

  static getConfigForm() {
    return { schema: [
      { name: "title", selector: { text: {} } },
      { name: "palette", selector: { select: { options: ["aurora", "ocean", "sunset", "lavender"], mode: "dropdown" } } },
      { name: "auto_discover", selector: { boolean: {} } },
      { name: "download_entity", selector: { entity: { domain: "sensor" } } },
      { name: "upload_entity", selector: { entity: { domain: "sensor" } } },
      { name: "ping_entity", selector: { entity: { domain: "sensor" } } },
    ] };
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = { ...DEFAULTS };
    this._history = { download: [], upload: [], ping: [] };
    this._signature = null;
  }

  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("Invalid Speedtest Orbit Card configuration.");
    this._config = {
      ...DEFAULTS,
      ...config,
      palette: PALETTES.has(config.palette) ? config.palette : DEFAULTS.palette,
      auto_discover: config.auto_discover !== false,
    };
    this._signature = null;
    this._render();
  }

  set hass(value) {
    this._hass = value;
    const data = this._resolve();
    this._record(data);
    const signature = JSON.stringify({ config: this._config, data });
    if (signature !== this._signature) {
      this._signature = signature;
      this._render(data);
    }
  }
  get hass() { return this._hass; }
  getCardSize() { return 4; }
  getGridOptions() { return { rows: 5, columns: 12, min_rows: 3 }; }

  _resolve() {
    const states = this._hass?.states || {};
    const entries = Object.values(this._hass?.entities || {}).map((entry) => ({
      id: entry.entity_id,
      platform: entry.platform,
      name: entry.original_name || entry.name || states[entry.entity_id]?.attributes?.friendly_name || entry.entity_id,
    }));
    const registeredIds = new Set(entries.map((entry) => entry.id));
    for (const id of Object.keys(states)) {
      if (id.startsWith("sensor.") && !registeredIds.has(id)) entries.push({ id, platform: "", name: states[id]?.attributes?.friendly_name || id });
    }
    const ids = {};
    for (const key of ["download", "upload", "ping"]) {
      const explicit = this._config[`${key}_entity`];
      if (explicit) { ids[key] = explicit; continue; }
      if (!this._config.auto_discover) { ids[key] = ""; continue; }
      const aliases = key === "ping" ? ["ping", "latency"] : [key];
      const matchesMetric = (entry) => aliases.some((alias) => normalized(entry.name).includes(alias) || normalized(entry.id).includes(alias));
      const isAvailable = (entry) => !isUnavailable(states[entry.id]);
      const native = entries.find((entry) => entry.platform === "speedtestdotnet" && matchesMetric(entry) && isAvailable(entry));
      const namedSpeedtest = entries.find((entry) => normalized(`${entry.name} ${entry.id}`).includes("speedtest") && matchesMetric(entry) && isAvailable(entry));
      const conventional = `sensor.speedtest_${key}`;
      const conventionalAvailable = states[conventional] && !isUnavailable(states[conventional]) ? conventional : "";
      ids[key] = native?.id || namedSpeedtest?.id || conventionalAvailable
        || entries.find((entry) => entry.platform === "speedtestdotnet" && matchesMetric(entry))?.id
        || entries.find((entry) => normalized(`${entry.name} ${entry.id}`).includes("speedtest") && matchesMetric(entry))?.id
        || (states[conventional] ? conventional : "");
    }
    const data = { ids, title: this._config.title || "Internet Speed", palette: this._config.palette };
    const fallbacks = { download: "Mbit/s", upload: "Mbit/s", ping: "ms" };
    for (const { key } of METRICS) {
      data[key] = ids[key] ? states[ids[key]] : undefined;
      data[`${key}Metric`] = formatMetric(data[key], key === "ping" ? 0 : 1, fallbacks[key]);
    }
    data.lastChanged = [data.download, data.upload, data.ping]
      .filter(Boolean).map((state) => state.last_changed).filter(Boolean).sort().at(-1) || "";
    return data;
  }

  _record(data) {
    for (const { key } of METRICS) {
      const value = numericValue(data[key]);
      if (value === null) continue;
      const samples = this._history[key];
      if (samples.at(-1)?.value !== value) samples.push({ value });
      if (samples.length > 18) samples.splice(0, samples.length - 18);
    }
  }

  _sparkline(key) {
    const values = this._history[key].map((sample) => sample.value);
    if (values.length < 2) return `<svg class="sparkline ${key}" viewBox="0 0 100 24" aria-hidden="true"></svg>`;
    const min = Math.min(...values);
    const span = Math.max(...values) - min || 1;
    const points = values.map((value, index) => `${(index / (values.length - 1)) * 100},${21 - ((value - min) / span) * 17}`).join(" ");
    return `<svg class="sparkline ${key}" viewBox="0 0 100 24" aria-hidden="true"><polyline points="${points}"></polyline></svg>`;
  }

  _render(data = this._resolve()) {
    if (!this.shadowRoot || !this._hass) return;
    const ready = [data.downloadMetric, data.uploadMetric, data.pingMetric].filter((metric) => metric.available).length;
    const status = ready === 3 ? "Measurements ready" : ready ? `${ready}/3 measurements` : "Sensors not found";
    const hero = data.downloadMetric.available ? data.downloadMetric : data.uploadMetric;
    const heroLabel = hero === data.downloadMetric ? "Download speed" : "Upload speed";
    const heroHtml = hero.available
      ? `<div class="hero"><div class="radar"><div class="radar-core"><ha-icon icon="mdi:speedometer"></ha-icon></div><span class="radar-caption">Speedtest.net</span></div><div class="hero-copy"><div class="hero-label">${heroLabel}</div><div class="hero-value">${hero.value} <span class="hero-unit">${escapeHtml(hero.unit)}</span></div><div class="hero-sub">Latest measurement from Home Assistant</div></div></div>`
      : `<div class="hint ${ready ? "" : "error"}">${ready ? "Choose a download or upload entity to show the featured speed." : "No Speedtest sensors found. Select the download, upload, and ping sensors in the card editor, or enable auto-discovery for the Speedtest.net integration."}</div>`;
    const metrics = METRICS.map(({ key, label, icon }) => {
      const metric = data[`${key}Metric`];
      return `<div class="metric"><div class="metric-head"><ha-icon icon="${icon}"></ha-icon>${label}</div><div class="metric-value ${metric.available ? "" : "unavailable"}">${metric.value}${metric.available ? `<span class="metric-unit">${escapeHtml(metric.unit)}</span>` : ""}</div>${this._sparkline(key)}</div>`;
    }).join("");
    let updated = "";
    if (data.lastChanged) {
      const date = new Date(data.lastChanged);
      if (Number.isFinite(date.getTime())) updated = new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(date);
    }
    this.shadowRoot.innerHTML = `<style>${STYLE}</style><ha-card data-palette="${escapeHtml(data.palette)}"><div class="shell"><header class="header"><div class="identity"><div class="icon-wrap"><ha-icon icon="mdi:speedometer"></ha-icon></div><div class="identity-copy"><div class="eyebrow">Network · Speedtest</div><h2 class="title">${escapeHtml(data.title)}</h2></div></div><div class="pill ${ready === 3 ? "online" : ""}"><span class="dot"></span>${escapeHtml(status)}</div></header>${heroHtml}<section class="metrics">${metrics}</section>${updated ? `<footer class="footer"><div class="footer-copy"><strong>Last measurement:</strong> ${escapeHtml(updated)}</div><div class="footer-copy">Values from Home Assistant</div></footer>` : ""}</div></ha-card>`;
  }
}

if (!customElements.get(CARD_TYPE)) customElements.define(CARD_TYPE, SpeedtestOrbitCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: CARD_TYPE, name: "Speedtest Orbit Card", description: "A themed Home Assistant Speedtest.net sensor card.", preview: false, documentationURL: "https://github.com/Liionboy/ha-speedtest-orbit-card" });
console.info(`%c SPEEDTEST-ORBIT %c ${VERSION} `, "background:#1477c9;color:#fff;font-weight:700", "background:var(--card-background-color);color:var(--primary-text-color)");

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="ha-speedtest-orbit-card"))window.customCards.push({type:"ha-speedtest-orbit-card",name:"Speedtest Orbit Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["ha-speedtest-orbit-card"]={version:"1.0.2",types:["ha-speedtest-orbit-card"]};
})() } catch(error){suite.errors.push({component:"ha-speedtest-orbit-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","ha-speedtest-orbit-card",error);}
/* ha-unifi-orbit-card @ 0.2.0 (7d3515feb4af41503ba56f275bfc07832b6f9502) */
try { (() => {
const knownTypes=["unifi-orbit-card","unifi-command-center-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["ha-unifi-orbit-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const CARD_VERSION = "0.2.0";

const DEFAULTS = {
  title: "UniFi Orbit",
  auto_discover: true,
  entities: [],
  max_devices: 8,
  show_clients: true,
  show_traffic: true,
  show_updates: true,
  theme: "auto",
};

const TECHNICAL_KEYS = new Set([
  "friendly_name",
  "icon",
  "device_class",
  "state_class",
  "supported_features",
  "unit_of_measurement",
  "entity_picture",
]);

const STATUS_WORDS = {
  connected: "online",
  online: "online",
  home: "online",
  pending: "pending",
  provisioning: "provisioning",
  upgrading: "upgrading",
  disconnected: "offline",
  offline: "offline",
  heartbeat_missed: "offline",
  unavailable: "offline",
  unknown: "unknown",
};

const STYLES = `
  :host { display: block; color: var(--primary-text-color); font: inherit; }
  ha-card.orbit-card {
    --orbit-bg: var(--card-background-color, var(--ha-card-background, #ffffff));
    --orbit-surface: var(--secondary-background-color, var(--card-background-color, #f6f7f9));
    --orbit-line: var(--divider-color, rgba(0, 0, 0, .12));
    --orbit-text: var(--primary-text-color, #202124);
    --orbit-muted: var(--secondary-text-color, #6b7280);
    --orbit-accent: var(--accent-color, var(--primary-color, #03a9f4));
    --orbit-accent-2: var(--info-color, var(--primary-color, #0288d1));
    --orbit-good: var(--success-color, #2e9d62);
    --orbit-warn: var(--warning-color, #c98500);
    --orbit-bad: var(--error-color, #d64545);
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    padding: 0;
    background: var(--orbit-bg);
    color: var(--orbit-text);
    isolation: isolate;
    font: inherit;
  }
  ha-card.orbit-card[data-theme="light"] { --orbit-bg: #ffffff; --orbit-surface: #f6f7f9; --orbit-line: rgba(32, 33, 36, .12); --orbit-text: #202124; --orbit-muted: #6b7280; --orbit-accent: #0288d1; --orbit-accent-2: #546e7a; }
  ha-card.orbit-card[data-theme="dark"] { --orbit-bg: #1c1c1e; --orbit-surface: #252529; --orbit-line: rgba(255, 255, 255, .1); --orbit-text: #f5f5f7; --orbit-muted: #a1a1aa; --orbit-accent: #64b5f6; --orbit-accent-2: #90a4ae; --orbit-good: #65c98b; --orbit-warn: #f2bd58; --orbit-bad: #f07171; }
  .noise, .noise::after { position: absolute; inset: 0; pointer-events: none; z-index: -1; }
  .noise { background: linear-gradient(135deg, color-mix(in srgb, var(--orbit-accent) 7%, transparent), transparent 44%); }
  .noise::after { content: ""; opacity: .32; background-image: linear-gradient(var(--orbit-line) 1px, transparent 1px), linear-gradient(90deg, var(--orbit-line) 1px, transparent 1px); background-size: 34px 34px; mask-image: linear-gradient(to bottom, black, transparent 78%); }
  .header { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; padding: 18px 20px 8px; }
  .eyebrow { color:var(--orbit-theme-accent,var(--orbit-accent)); font-size: .67rem; font-weight: 700; line-height: 1.2; letter-spacing: .12em; text-transform: uppercase; }
  h2, h3, p { margin: 0; }
  h2 { margin-top: 5px; font-size: clamp(1.1rem, 2vw, 1.35rem); letter-spacing: -.02em; }
  .subtitle { color: var(--orbit-muted); font-size: .78rem; margin-top: 5px; }
  .live { display: inline-flex; align-items: center; gap: 7px; padding: 6px 10px; border: 1px solid color-mix(in srgb, var(--orbit-good) 34%, var(--orbit-line)); border-radius: 999px; color: var(--orbit-good); background: color-mix(in srgb, var(--orbit-good) 10%, transparent); font-size: .72rem; font-weight: 700; white-space: nowrap; }
  .live-dot { width: 7px; height: 7px; border-radius: 50%; background: currentColor; box-shadow: 0 0 0 0 currentColor; animation: live-pulse 2s infinite; }
  .summary { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 7px; padding: 9px 20px 16px; }
  .stat { padding: 10px 11px; min-width: 0; border: 1px solid var(--orbit-line); border-radius: 12px; background: var(--orbit-surface); }
  .stat-label { color: var(--orbit-muted); font-size: .67rem; text-transform: uppercase; letter-spacing: .06em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .stat-value { margin-top: 5px; color: var(--orbit-text); font-size: 1rem; font-weight: 700; letter-spacing: -.015em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .stat-value.good { color: var(--orbit-good); }
  .stat-value.warn { color: var(--orbit-warn); }
  .muted { color: var(--orbit-muted); font-weight: 500; }
  .stage { position: relative; height: clamp(280px, 38vw, 390px); margin: 0 12px; overflow: hidden; border: 1px solid var(--orbit-line); border-radius: 16px; background: var(--orbit-surface); }
  .stage::before { content: ""; position: absolute; width: 47%; aspect-ratio: 1; left: 26.5%; top: 17%; border-radius: 50%; background: color-mix(in srgb, var(--orbit-accent) 10%, transparent); filter: blur(32px); animation: breathe 5s ease-in-out infinite; }
  .orbit-svg { position: absolute; inset: 2%; width: 96%; height: 96%; overflow: visible; }
  .orbit-ring { fill: none; stroke: var(--orbit-line); stroke-width: .3; stroke-dasharray: 1 2; transform-origin: 50px 50px; animation: orbit-spin 28s linear infinite; }
  .orbit-ring.two { stroke: color-mix(in srgb, var(--orbit-accent-2) 35%, var(--orbit-line)); animation-duration: 42s; animation-direction: reverse; }
  .orbit-ring.three { stroke: color-mix(in srgb, var(--orbit-accent) 25%, var(--orbit-line)); animation-duration: 66s; }
  .link { stroke: color-mix(in srgb, var(--orbit-accent-2) 42%, var(--orbit-line)); stroke-width: .24; stroke-dasharray: 1.2 1.4; animation: flow 2.8s linear infinite; }
  .link.offline { stroke: color-mix(in srgb, var(--orbit-bad) 60%, var(--orbit-line)); stroke-dasharray: .3 2.2; animation-duration: 7s; }
  .packet { fill: var(--orbit-accent); filter: drop-shadow(0 0 2px var(--orbit-accent)); animation: packet-travel 2.8s linear infinite; }
  .packet.p2 { animation-delay: -1.25s; fill: var(--orbit-accent-2); }
  .core { position: absolute; left: 50%; top: 50%; width: 108px; height: 108px; transform: translate(-50%, -50%); display: grid; place-items: center; border-radius: 50%; border: 1px solid color-mix(in srgb, var(--orbit-accent) 55%, var(--orbit-line)); background: var(--orbit-bg); box-shadow: 0 0 0 8px color-mix(in srgb, var(--orbit-accent) 7%, transparent), 0 0 28px color-mix(in srgb, var(--orbit-accent) 20%, transparent), inset 0 0 18px color-mix(in srgb, var(--orbit-accent) 10%, transparent); z-index: 2; animation: core-float 5s ease-in-out infinite; }
  .core-inner { text-align: center; }
  .core-icon { color: var(--orbit-accent); font-size: 1.5rem; line-height: 1; }
  .core-name { margin-top: 6px; font-size: .68rem; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
  .core-meta { margin-top: 3px; color: var(--orbit-muted); font-size: .62rem; }
  .node { position: absolute; left: calc(var(--x) * 1%); top: calc(var(--y) * 1%); transform: translate(-50%, -50%); min-width: 87px; max-width: 118px; padding: 8px 9px; border: 1px solid var(--orbit-line); border-radius: 12px; background: var(--orbit-bg); box-shadow: 0 8px 20px color-mix(in srgb, var(--primary-text-color) 12%, transparent); cursor: pointer; z-index: 3; transition: transform .22s ease, border-color .22s ease, background .22s ease; animation: node-in .55s both; font: inherit; text-align: left; }
  .node:hover, .node.selected { transform: translate(-50%, -50%) scale(1.06); border-color: var(--orbit-accent); background: var(--orbit-surface); }
  .node-head { display: flex; align-items: center; gap: 6px; }
  .node-icon { display: grid; place-items: center; width: 22px; height: 22px; border-radius: 7px; background: color-mix(in srgb, var(--orbit-accent) 12%, transparent); color: var(--orbit-accent); font-size: .84rem; }
  .node.online .node-icon { box-shadow: 0 0 0 3px color-mix(in srgb, var(--orbit-good) 10%, transparent); }
  .node.offline .node-icon { color: var(--orbit-bad); background: color-mix(in srgb, var(--orbit-bad) 12%, transparent); }
  .node-name { min-width: 0; color: var(--orbit-text); font-size: .69rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .node-kind { margin-top: 5px; color: var(--orbit-muted); font-size: .6rem; text-transform: uppercase; letter-spacing: .06em; }
  .node-state { display: flex; align-items: center; gap: 4px; margin-top: 5px; color: var(--orbit-good); font-size: .61rem; }
  .node.offline .node-state { color: var(--orbit-bad); }
  .state-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
  .details { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px; margin: 12px 12px 0; padding: 14px; border: 1px solid var(--orbit-line); border-radius: 14px; background: var(--orbit-surface); animation: reveal .3s ease both; }
  .details h3 { font-size: .86rem; }
  .detail-muted { margin-top: 3px; color: var(--orbit-muted); font-size: .68rem; }
  .metrics { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 7px; margin-top: 12px; }
  .metric { padding: 8px 9px; border-radius: 10px; background: var(--orbit-bg); border: 1px solid var(--orbit-line); }
  .metric-label { color: var(--orbit-muted); font-size: .61rem; }
  .metric-value { margin-top: 3px; color: var(--orbit-text); font-size: .76rem; font-weight: 700; overflow-wrap: anywhere; }
  .actions { display: flex; flex-wrap: wrap; gap: 7px; align-content: flex-start; }
  .action { border: 1px solid color-mix(in srgb, var(--orbit-accent) 38%, var(--orbit-line)); border-radius: 9px; padding: 8px 10px; color: var(--orbit-accent); background: color-mix(in srgb, var(--orbit-accent) 9%, transparent); cursor: pointer; font: inherit; font-size: .68rem; }
  .action:hover { background: color-mix(in srgb, var(--orbit-accent) 16%, transparent); }
  .sparkline { display: block; width: 100%; height: 42px; margin-top: 10px; overflow: visible; }
  .sparkline polyline { fill: none; stroke: var(--orbit-accent); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
  .footer { display: flex; justify-content: space-between; gap: 12px; padding: 12px 20px 15px; color: var(--orbit-muted); font-size: .64rem; }
  .footer button { border: 0; padding: 0; color: var(--orbit-accent); background: none; cursor: pointer; font: inherit; }
  .empty { display: grid; place-items: center; min-height: 260px; padding: 28px; text-align: center; color: var(--orbit-muted); }
  .empty strong { display: block; margin-bottom: 8px; color: var(--orbit-text); font-size: .95rem; }
  .error { color: var(--orbit-bad); }
  @keyframes live-pulse { 0%, 100% { box-shadow: 0 0 0 0 currentColor; } 50% { box-shadow: 0 0 0 5px transparent; } }
  @keyframes breathe { 0%, 100% { transform: scale(.9); opacity: .55; } 50% { transform: scale(1.1); opacity: 1; } }
  @keyframes orbit-spin { to { transform: rotate(360deg); } }
  @keyframes flow { to { stroke-dashoffset: -5; } }
  @keyframes packet-travel { 0% { opacity: 0; offset-distance: 0%; } 12% { opacity: 1; } 85% { opacity: 1; } 100% { opacity: 0; offset-distance: 100%; } }
  @keyframes core-float { 0%, 100% { margin-top: 0; } 50% { margin-top: -4px; } }
  @keyframes node-in { from { opacity: 0; transform: translate(-50%, -50%) scale(.75); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
  @keyframes reveal { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width: 560px) { .header { padding: 18px 17px 7px; } .summary { padding: 8px 17px 14px; grid-template-columns: repeat(2, minmax(0, 1fr)); } .stage { margin: 0 9px; height: 320px; } .core { width: 90px; height: 90px; } .core-icon { font-size: 1.2rem; } .details { grid-template-columns: 1fr; margin: 10px 9px 0; } .footer { padding-inline: 17px; } .node { min-width: 76px; max-width: 98px; padding: 7px; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; } }
`;

class UnifiOrbitCard extends HTMLElement {
  constructor() {
    super();
    this._config = { ...DEFAULTS };
    this._hass = null;
    this._selectedDevice = null;
    this._samples = [];
    this._renderSignature = null;
    this._root = this.attachShadow({ mode: "open" });
  }

  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("UniFi Orbit: invalid configuration");
    this._config = {
      ...DEFAULTS,
      ...config,
      max_devices: Math.max(1, Math.min(24, Number(config.max_devices) || DEFAULTS.max_devices)),
      entities: Array.isArray(config.entities) ? config.entities : [],
      theme: ["auto", "light", "dark"].includes(config.theme) ? config.theme : DEFAULTS.theme,
    };
    this._renderSignature = null;
    this.render();
  }

  set hass(value) {
    this._hass = value;
    this.recordSample();
    this.render();
  }

  getCardSize() { return 7; }

  getGridOptions() {
    return { rows: 8, columns: 12, min_rows: 5 };
  }

  getConfigElement() {
    return document.createElement("unifi-orbit-card-editor");
  }

  getStubConfig() {
    return { ...DEFAULTS };
  }

  render() {
    if (!this._root || !this._hass) return;
    const data = this.collectData();
    const signature = this.renderSignature(data);
    if (this._renderSignature === signature && this._root.querySelector(".orbit-card")) {
      this.updateLiveData(data);
      return;
    }
    this._renderSignature = signature;
    this._root.innerHTML = `<style>${STYLES}</style>${this.renderCard(data)}`;
    this.bindEvents(data);
  }

  renderSignature(data) {
    const devices = data.devices.map((device) => ({
      id: device.id,
      name: device.name,
      model: device.model,
      kind: device.kind,
      actions: device.actions.map(({ entry }) => entry.entity_id),
    }));
    return JSON.stringify({
      title: this._config.title,
      theme: this._config.theme,
      max_devices: this._config.max_devices,
      show_clients: this._config.show_clients,
      show_traffic: this._config.show_traffic,
      show_updates: this._config.show_updates,
      selected: this._selectedDevice,
      entries: data.entries.map(({ entry }) => entry.entity_id),
      devices,
    });
  }

  updateLiveData(data) {
    const total = data.devices.length;
    const status = total && data.online === total ? "All systems nominal" : total ? `${data.online}/${total} nodes online` : "Waiting for UniFi entities";
    const setText = (selector, value) => {
      const element = this._root.querySelector(selector);
      if (element) element.textContent = value;
    };
    const setClass = (selector, className) => {
      const element = this._root.querySelector(selector);
      if (element) element.className = className;
    };

    setText('[data-bind="subtitle"]', status);
    setText('[data-bind="live-label"]', data.online ? "LIVE" : "STANDBY");
    setText('[data-bind="nodes"]', `${data.online} / ${total}`);
    setText('[data-bind="clients"]', this.formatNumber(data.clients));
    setText('[data-bind="rx"]', this.rate(data.traffic.rx));
    setText('[data-bind="tx"]', this.rate(data.traffic.tx));
    setText('[data-bind="updates"]', data.updates ? `${data.updates} ready` : "Up to date");
    setText('[data-bind="entries"]', `${data.entries.length} entities observed · local state only`);
    setClass('[data-bind="nodes"]', `stat-value ${data.online === total && total ? "good" : ""}`);
    setClass('[data-bind="updates"]', `stat-value ${data.updates ? "warn" : "good"}`);

    for (const device of data.devices) {
      const node = this._root.querySelector(`[data-device="${this.escapeSelector(device.id)}"]`);
      if (!node) continue;
      node.classList.remove("online", "offline", "pending", "provisioning", "upgrading", "unknown");
      node.classList.add(device.status);
      const state = node.querySelector("[data-node-state]");
      if (state) state.textContent = device.status;
    }

    const selected = data.devices.find((device) => device.id === this._selectedDevice);
    const detailStatus = this._root.querySelector("[data-detail-status]");
    if (detailStatus && selected) detailStatus.textContent = `${selected.model} · ${selected.status}`;
  }

  escapeSelector(value) {
    return String(value ?? "").replace(/([\\"'\[\]#.:>+~*(),=])/g, "\\$1");
  }

  collectData() {
    const states = this._hass?.states || {};
    const registry = Object.values(this._hass?.entities || {});
    const selectedIds = new Set(this._config.entities);
    const autoDiscover = this._config.auto_discover !== false && selectedIds.size === 0;
    const entries = registry.length
      ? registry.filter((entry) => autoDiscover ? entry.platform === "unifi" : selectedIds.has(entry.entity_id))
      : Object.keys(states).filter((entityId) => selectedIds.has(entityId) || (autoDiscover && this.isFallbackUnifiEntity(entityId, states[entityId]))).map((entity_id) => ({ entity_id }));
    const stateEntries = entries.map((entry) => ({ entry, state: states[entry.entity_id] })).filter((item) => item.state);
    const devices = this.collectDevices(stateEntries);
    const clients = this.collectClients(stateEntries);
    const traffic = this.collectTraffic(stateEntries);
    const updates = stateEntries.filter(({ entry }) => entry.entity_id.startsWith("update.") && states[entry.entity_id]?.state === "on").length;
    const online = devices.filter((device) => device.status === "online").length;
    return { entries: stateEntries, devices, clients, traffic, updates, online };
  }

  collectDevices(items) {
    const devicesById = new Map();
    for (const { entry } of items) {
      if (entry.device_id && this._hass.devices?.[entry.device_id]) {
        const device = this._hass.devices[entry.device_id];
        // UniFi also registers logical controller and WLAN devices. They carry
        // useful aggregate sensors, but are not physical nodes in the topology.
        if (/^unifi\s+(?:network|wlan)$/i.test(device.model || "")) continue;
        const isHardware = /ubiquiti|unifi/i.test(`${device.manufacturer || ""} ${device.model || ""}`) || this.hasHardwareTelemetry(items, entry.device_id);
        if (!isHardware) continue;
        if (!devicesById.has(entry.device_id)) devicesById.set(entry.device_id, { id: entry.device_id, registry: device, entities: [] });
        devicesById.get(entry.device_id).entities.push(entry.entity_id);
      }
    }
    let devices = [...devicesById.values()].map((device) => this.decorateDevice(device, items));
    if (!devices.length) {
      const fallback = items.filter(({ entry }) => /device_(state|uptime|cpu|memory|temperature|clients)/i.test(`${entry.translation_key || ""} ${entry.entity_id}`));
      const grouped = new Map();
      for (const item of fallback) {
        const label = this.entityName(item.state, item.entry).replace(/\s+(device state|uptime|cpu.*|memory.*|temperature|clients)$/i, "");
        if (!grouped.has(label)) grouped.set(label, []);
        grouped.get(label).push(item.entry.entity_id);
      }
      devices = [...grouped].map(([label, entityIds], index) => this.decorateDevice({ id: `fallback-${index}`, registry: { name: label, model: "UniFi device" }, entities: entityIds }, items));
    }
    return devices.slice(0, this._config.max_devices);
  }

  hasHardwareTelemetry(items, deviceId) {
    return items.some(({ entry }) => entry.device_id === deviceId && /device_(state|uptime|cpu|memory|temperature)|port_|poe_/i.test(`${entry.translation_key || ""} ${entry.entity_id}`));
  }

  decorateDevice(device, items) {
    const registry = device.registry || {};
    const linked = items.filter(({ entry }) => device.entities.includes(entry.entity_id));
    const model = registry.model || this.valueFor(linked, /model/i) || "UniFi device";
    const name = registry.name_by_user || registry.name || this.entityName(linked[0]?.state, linked[0]?.entry) || model;
    const kind = this.kindFor(`${name} ${model} ${linked.map(({ entry }) => entry.entity_id).join(" ")}`);
    const statusEntity = this.findEntity(linked, ["device_state"], /device_state|device_tracker/);
    const status = this.statusFor(statusEntity?.state);
    const metrics = this.metricsFor(linked);
    const actions = linked.filter(({ entry }) => /^(button|switch)\./.test(entry.entity_id) && /restart|power_cycle|poe|port_control|wlan_control|block_client/i.test(`${entry.translation_key || ""} ${entry.entity_id}`));
    return { ...device, name, model, kind, status, metrics, actions, linked };
  }

  collectClients(items) {
    const wlan = this.sumBy(items, /wlan_clients/i);
    const deviceClients = this.sumBy(items, /device_clients/i);
    if (wlan || deviceClients) return Math.round(wlan || deviceClients);
    return items.filter(({ entry, state }) => entry.entity_id.startsWith("device_tracker.") && state.state === "home" && !entry.device_id).length;
  }

  collectTraffic(items) {
    let rx = this.sumRate(items, /client_bandwidth_rx|bandwidth.*rx/i);
    let tx = this.sumRate(items, /client_bandwidth_tx|bandwidth.*tx/i);
    if (!rx && !tx) {
      rx = this.sumRate(items, /port_bandwidth_rx|port.*rx/i);
      tx = this.sumRate(items, /port_bandwidth_tx|port.*tx/i);
    }
    return { rx, tx, total: rx + tx };
  }

  metricsFor(items) {
    const definitions = [
      ["Clients", /device_clients|wlan_clients/i],
      ["CPU", /cpu_utilization|cpu.*util/i],
      ["Memory", /memory_utilization|memory.*util/i],
      ["Temperature", /device_temperature|temperature/i],
      ["Uptime", /device_uptime|uptime/i],
    ];
    return definitions.map(([label, pattern]) => {
      const item = this.findEntity(items, [], pattern);
      return item ? { label, value: this.displayState(item.state) } : null;
    }).filter(Boolean);
  }

  findEntity(items, exactKeys, pattern) {
    return items.find(({ entry }) => exactKeys.includes(entry.translation_key) || pattern?.test(`${entry.translation_key || ""} ${entry.entity_id}`));
  }

  sumBy(items, pattern) {
    return items.filter(({ entry }) => pattern.test(`${entry.translation_key || ""} ${entry.entity_id}`)).reduce((sum, { state }) => sum + this.numeric(state?.state), 0);
  }

  sumRate(items, pattern) {
    return items.filter(({ entry }) => pattern.test(`${entry.translation_key || ""} ${entry.entity_id}`)).reduce((sum, { state }) => sum + this.toMbps(state), 0);
  }

  recordSample() {
    if (!this._hass) return;
    const now = Date.now();
    if (this._samples.length && now - this._samples[this._samples.length - 1].time < 8000) return;
    const data = this.collectData();
    this._samples.push({ time: now, value: data.traffic.total });
    this._samples = this._samples.slice(-24);
  }

  renderCard(data) {
    const total = data.devices.length;
    const status = total && data.online === total ? "All systems nominal" : total ? `${data.online}/${total} nodes online` : "Waiting for UniFi entities";
    const stage = total ? this.renderStage(data) : `<div class="empty"><div><strong>No UniFi entities detected</strong>Enable the UniFi Network integration or add entities explicitly in the card editor.</div></div>`;
    const selected = data.devices.find((device) => device.id === this._selectedDevice);
    return `<ha-card class="orbit-card" data-theme="${this.escape(this._config.theme || "auto")}" data-ha-theme="${this.escape(this._config.theme || "auto")}">
      <div class="noise"></div>
      <div class="header"><div><div class="eyebrow">Network observatory · v${CARD_VERSION}</div><h2>${this.escape(this._config.title)}</h2><div class="subtitle" data-bind="subtitle">${this.escape(status)}</div></div><div class="live"><span class="live-dot"></span><span data-bind="live-label">${data.online ? "LIVE" : "STANDBY"}</span></div></div>
      <div class="summary">
        <div class="stat"><div class="stat-label">Nodes</div><div data-bind="nodes" class="stat-value ${data.online === total && total ? "good" : ""}">${data.online} / ${total}</div></div>
        ${this._config.show_clients ? `<div class="stat"><div class="stat-label">Active clients</div><div data-bind="clients" class="stat-value">${this.formatNumber(data.clients)}</div></div>` : ""}
        ${this._config.show_traffic ? `<div class="stat"><div class="stat-label">Traffic</div><div class="stat-value">↓ <span data-bind="rx">${this.rate(data.traffic.rx)}</span> <span class="muted">↑ <span data-bind="tx">${this.rate(data.traffic.tx)}</span></span></div></div>` : ""}
        ${this._config.show_updates ? `<div class="stat"><div class="stat-label">Firmware</div><div data-bind="updates" class="stat-value ${data.updates ? "warn" : "good"}">${data.updates ? `${data.updates} ready` : "Up to date"}</div></div>` : ""}
      </div>
      ${stage}
      ${selected ? this.renderDetails(selected) : ""}
      <div class="footer"><span data-bind="entries">${data.entries.length} entities observed · local state only</span><button data-clear-selection>${selected ? "Close details" : "Auto-discovery active"}</button></div>
    </ha-card>`;
  }

  renderStage(data) {
    const center = { x: 50, y: 50 };
    const positions = this.positions(data.devices.length);
    const links = data.devices.map((device, index) => {
      const point = positions[index];
      const line = `<line class="link ${device.status === "offline" ? "offline" : ""}" x1="50" y1="50" x2="${point.x}" y2="${point.y}" pathLength="1" />`;
      return `${line}<circle class="packet" cx="50" cy="50" r=".65"><animateMotion dur="2.8s" repeatCount="indefinite" path="M 0 0 L ${point.x - 50} ${point.y - 50}" /></circle><circle class="packet p2" cx="50" cy="50" r=".45"><animateMotion dur="2.8s" begin="-1.25s" repeatCount="indefinite" path="M 0 0 L ${point.x - 50} ${point.y - 50}" /></circle>`;
    }).join("");
    const nodes = data.devices.map((device, index) => {
      const point = positions[index];
      const selected = device.id === this._selectedDevice ? " selected" : "";
      return `<button class="node ${device.status}${selected}" data-device="${this.escape(device.id)}" style="--x:${point.x};--y:${point.y};animation-delay:${index * 55}ms" aria-label="${this.escape(device.name)}">
        <span class="node-head"><span class="node-icon">${this.iconFor(device.kind)}</span><span class="node-name">${this.escape(device.name)}</span></span><span class="node-kind">${this.escape(device.kind)}</span><span class="node-state"><span class="state-dot"></span><span data-node-state>${this.escape(device.status)}</span></span>
      </button>`;
    }).join("");
    return `<div class="stage"><svg class="orbit-svg" viewBox="0 0 100 100" aria-hidden="true"><circle class="orbit-ring" cx="50" cy="50" r="26"/><circle class="orbit-ring two" cx="50" cy="50" r="38"/><circle class="orbit-ring three" cx="50" cy="50" r="46"/>${links}</svg><div class="core"><div class="core-inner"><div class="core-icon">⌁</div><div class="core-name">UniFi</div><div class="core-meta">controller pulse</div></div></div>${nodes}</div>`;
  }

  renderDetails(device) {
    const metrics = device.metrics.length ? device.metrics.map((metric) => `<div class="metric"><div class="metric-label">${this.escape(metric.label)}</div><div class="metric-value">${this.escape(metric.value)}</div></div>`).join("") : `<div class="detail-muted">No optional telemetry is enabled for this node.</div>`;
    const actions = device.actions.length ? device.actions.map(({ entry }) => {
      const domain = entry.entity_id.split(".")[0];
      const label = domain === "button" ? this.friendlyAction(entry) : `Toggle ${this.friendlyAction(entry)}`;
      return `<button class="action" data-action-domain="${domain}" data-action-entity="${this.escape(entry.entity_id)}">${this.escape(label)}</button>`;
    }).join("") : `<div class="detail-muted">No control entities available.</div>`;
    return `<section class="details"><div><h3>${this.escape(device.name)}</h3><div class="detail-muted" data-detail-status>${this.escape(device.model)} · ${this.escape(device.status)}</div><div class="metrics">${metrics}</div>${this.renderSparkline()}</div><div><h3>Actions</h3><div class="detail-muted">Only entities exposed by your UniFi permissions appear here.</div><div class="actions" style="margin-top:12px">${actions}</div></div></section>`;
  }

  renderSparkline() {
    if (!this._config.show_traffic || this._samples.length < 2) return "";
    const values = this._samples.map((sample) => sample.value);
    const max = Math.max(...values, 1);
    const points = values.map((value, index) => `${(index / (values.length - 1)) * 100},${40 - (value / max) * 34}`).join(" ");
    return `<svg class="sparkline" viewBox="0 0 100 42" preserveAspectRatio="none" aria-label="Traffic trend"><polyline points="${points}"/></svg>`;
  }

  bindEvents(data) {
    this._root.querySelectorAll("[data-device]").forEach((node) => node.addEventListener("click", () => {
      this._selectedDevice = node.dataset.device === this._selectedDevice ? null : node.dataset.device;
      this._renderSignature = null;
      this.render();
    }));
    this._root.querySelectorAll("[data-action-entity]").forEach((button) => button.addEventListener("click", (event) => {
      event.stopPropagation();
      const entityId = button.dataset.actionEntity;
      const domain = button.dataset.actionDomain;
      if (!this._hass?.callService || !entityId) return;
      this._hass.callService(domain, domain === "button" ? "press" : "toggle", { entity_id: entityId });
    }));
    this._root.querySelector("[data-clear-selection]")?.addEventListener("click", () => { this._selectedDevice = null; this._renderSignature = null; this.render(); });
  }

  positions(count) {
    const points = [];
    const radius = count <= 4 ? 35 : count <= 8 ? 41 : 44;
    for (let i = 0; i < count; i += 1) {
      const angle = (-Math.PI / 2) + ((Math.PI * 2) / count) * i;
      points.push({ x: +(50 + Math.cos(angle) * radius).toFixed(2), y: +(50 + Math.sin(angle) * radius).toFixed(2) });
    }
    return points;
  }

  kindFor(value) {
    if (/gateway|udm|usg|uxg|ucg|dream router|router/i.test(value)) return "gateway";
    if (/access point|\buap\b|\bu[67](?:\w*)|beacon|wifi|wireless|mesh/i.test(value)) return "access point";
    if (/switch|\busw\b|\bus\d|\bus[a-z0-9]+|port|poe/i.test(value)) return "switch";
    return "device";
  }

  iconFor(kind) { return kind === "gateway" ? "◈" : kind === "access point" ? "◉" : kind === "switch" ? "▦" : "◇"; }

  statusFor(state) {
    const raw = String(state?.state || "unknown").toLowerCase();
    return STATUS_WORDS[raw] || (/connected|online|home|on/.test(raw) ? "online" : /offline|disconnect|unavailable/.test(raw) ? "offline" : raw);
  }

  displayState(state) {
    if (!state) return "—";
    const value = state.state;
    const unit = state.attributes?.unit_of_measurement;
    if (value === "unknown" || value === "unavailable") return value;
    return `${value}${unit ? ` ${unit}` : ""}`;
  }

  entityName(state, entry) { return state?.attributes?.friendly_name || entry?.name || entry?.entity_id || "UniFi"; }
  friendlyAction(entry) { return String(entry.translation_key || entry.entity_id.split(".").pop()).replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase()); }
  numeric(value) { const parsed = Number.parseFloat(value); return Number.isFinite(parsed) ? parsed : 0; }

  toMbps(state) {
    const value = this.numeric(state?.state);
    const unit = String(state?.attributes?.unit_of_measurement || "").toLowerCase().replaceAll(" ", "");
    if (unit === "b/s" || unit.includes("byte/s") || unit.includes("bytes/s")) return value / 125000;
    if (unit.includes("mb/s") || unit.includes("megabyte")) return value * 8;
    if (unit.includes("kb/s") || unit.includes("kilobyte")) return value / 125;
    if (unit.includes("bit/s") || unit.includes("mbit") || unit.includes("megabit")) return value;
    return value;
  }

  rate(value) { return value >= 1000 ? `${(value / 1000).toFixed(1)} Gbps` : `${value.toFixed(value < 10 ? 1 : 0)} Mbps`; }
  formatNumber(value) { return new Intl.NumberFormat(this._hass?.locale?.language || undefined, { maximumFractionDigits: 0 }).format(value); }

  isFallbackUnifiEntity(entityId, state) {
    const value = `${entityId} ${state?.attributes?.friendly_name || ""}`;
    return /unifi|ubiquiti|\budm\b|\busw\b|\buap\b|\bucg\b|\buxg\b|device_(state|uptime|cpu|memory|temperature|clients)|wlan_clients|poe_port|port_bandwidth/i.test(value);
  }

  escape(value) { return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char])); }
}

class UnifiOrbitCardEditor extends HTMLElement {
  constructor() { super(); this._root = this.attachShadow({ mode: "open" }); this._config = {}; }
  setConfig(config) { this._config = { ...DEFAULTS, ...config }; this.render(); }
  render() {
    this._root.innerHTML = `<style>:host{display:block;padding:8px 0;font-family:var(--paper-font-common-base_-_font-family,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif)} .form{display:grid;gap:14px} label{display:grid;gap:5px;color:var(--primary-text-color);font-size:.85rem} input,select{box-sizing:border-box;width:100%;padding:9px;border:1px solid var(--divider-color);border-radius:8px;background:var(--card-background-color);color:var(--primary-text-color);font:inherit} .check{display:flex;grid-template-columns:auto 1fr;align-items:center;gap:8px}.check input{width:auto}</style><div class="form"><label>Title<input data-key="title" value="${this.escape(this._config.title)}"></label><label>Theme<select data-key="theme"><option value="auto">Follow Home Assistant</option><option value="light">Light</option><option value="dark">Dark</option></select></label><label>Maximum nodes<input data-key="max_devices" type="number" min="1" max="24" value="${this._config.max_devices}"></label><label class="check"><input data-key="auto_discover" type="checkbox" ${this._config.auto_discover !== false ? "checked" : ""}> Auto-discover UniFi entities</label><label class="check"><input data-key="show_clients" type="checkbox" ${this._config.show_clients !== false ? "checked" : ""}> Show active clients</label><label class="check"><input data-key="show_traffic" type="checkbox" ${this._config.show_traffic !== false ? "checked" : ""}> Show traffic and trend</label><label class="check"><input data-key="show_updates" type="checkbox" ${this._config.show_updates !== false ? "checked" : ""}> Show firmware status</label><p style="margin:0;color:var(--secondary-text-color);font-size:.78rem">Auto follows Home Assistant colors and typography. Use an explicit entity list only when registry discovery is unavailable.</p></div>`;
    const theme = this._root.querySelector('[data-key="theme"]'); if (theme) theme.value = this._config.theme;
    this._root.querySelectorAll("[data-key]").forEach((input) => input.addEventListener("change", () => this.changeConfig()));
  }
  changeConfig() {
    const next = { ...this._config };
    this._root.querySelectorAll("[data-key]").forEach((input) => { next[input.dataset.key] = input.type === "checkbox" ? input.checked : input.type === "number" ? Number(input.value) : input.value; });
    this._config = next;
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: next }, bubbles: true, composed: true }));
  }
  escape(value) { return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char])); }
}

const COMMAND_CENTER_STYLES = `
  :host { display: block; color: var(--primary-text-color); font: inherit; }
  ha-card.command-center { --cc-bg: var(--card-background-color, #fff); --cc-surface: var(--secondary-background-color, var(--card-background-color, #f7f7f8)); --cc-text: var(--primary-text-color, #202124); --cc-muted: var(--secondary-text-color, #6b7280); --cc-line: var(--divider-color, rgba(0,0,0,.12)); --cc-accent: var(--accent-color, var(--primary-color, #0288d1)); --cc-good: var(--success-color, #2e9d62); --cc-warn: var(--warning-color, #c98500); --cc-bad: var(--error-color, #d64545); display: block; overflow: hidden; border: 1px solid var(--cc-line); border-radius: 22px; background: var(--cc-bg); color: var(--cc-text); font: inherit; }
  .cc-shell { background: linear-gradient(135deg, color-mix(in srgb, var(--cc-accent) 6%, transparent), transparent 34%); }
  .cc-header { display: flex; justify-content: space-between; align-items: center; gap: 18px; padding: 22px 24px 18px; border-bottom: 1px solid var(--cc-line); }
  .cc-brand { display: flex; align-items: center; gap: 13px; min-width: 0; }
  .cc-mark { position: relative; display: grid; place-items: center; width: 45px; height: 45px; border: 1px solid color-mix(in srgb, var(--cc-accent) 48%, var(--cc-line)); border-radius: 14px; color: var(--cc-accent); background: color-mix(in srgb, var(--cc-accent) 10%, transparent); font-size: 1.25rem; box-shadow: 0 0 0 6px color-mix(in srgb, var(--cc-accent) 5%, transparent); }
  .cc-mark::after { content: ""; position: absolute; inset: 7px; border: 1px dashed color-mix(in srgb, var(--cc-accent) 45%, transparent); border-radius: 50%; animation: cc-spin 18s linear infinite; }
  .cc-eyebrow { color: var(--cc-accent); font-size: .66rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
  .cc-title { margin: 4px 0 0; color: var(--cc-text); font-size: clamp(1.15rem, 2vw, 1.55rem); letter-spacing: -.025em; }
  .cc-subtitle { margin-top: 4px; color: var(--cc-muted); font-size: .76rem; }
  .cc-status { display: inline-flex; align-items: center; gap: 8px; padding: 8px 11px; border: 1px solid color-mix(in srgb, var(--cc-good) 35%, var(--cc-line)); border-radius: 999px; color: var(--cc-good); background: color-mix(in srgb, var(--cc-good) 9%, transparent); font-size: .7rem; font-weight: 800; white-space: nowrap; }
  .cc-status-dot { width: 7px; height: 7px; border-radius: 50%; background: currentColor; animation: cc-pulse 2s infinite; }
  .cc-layout { display: grid; grid-template-columns: 190px minmax(340px, 1fr) 260px; gap: 0; min-height: 490px; }
  .cc-rail, .cc-roster { padding: 18px; background: color-mix(in srgb, var(--cc-surface) 72%, transparent); }
  .cc-rail { border-right: 1px solid var(--cc-line); }
  .cc-roster { border-left: 1px solid var(--cc-line); }
  .cc-label { color: var(--cc-muted); font-size: .63rem; font-weight: 800; letter-spacing: .11em; text-transform: uppercase; }
  .cc-health { display: grid; place-items: center; width: 128px; height: 128px; margin: 17px auto 16px; border: 1px solid color-mix(in srgb, var(--cc-accent) 42%, var(--cc-line)); border-radius: 50%; background: radial-gradient(circle, color-mix(in srgb, var(--cc-accent) 13%, transparent) 0 48%, transparent 49%), conic-gradient(var(--cc-accent) var(--cc-health, 0%), color-mix(in srgb, var(--cc-line) 60%, transparent) 0); box-shadow: inset 0 0 0 8px var(--cc-bg), 0 0 0 1px var(--cc-line); }
  .cc-health-inner { display: grid; place-items: center; width: 98px; height: 98px; border-radius: 50%; background: var(--cc-bg); text-align: center; }
  .cc-health-value { font-size: 1.55rem; font-weight: 800; letter-spacing: -.04em; }
  .cc-health-caption { margin-top: 2px; color: var(--cc-muted); font-size: .61rem; }
  .cc-stats { display: grid; gap: 7px; }
  .cc-stat { padding: 9px 10px; border: 1px solid var(--cc-line); border-radius: 11px; background: var(--cc-bg); }
  .cc-stat-value { margin-top: 3px; font-size: .92rem; font-weight: 750; }
  .cc-stat-label { color: var(--cc-muted); font-size: .61rem; }
  .cc-rail-card { margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--cc-line); }
  .cc-traffic-row { display: grid; grid-template-columns: 25px 1fr auto; align-items: center; gap: 6px; margin-top: 9px; color: var(--cc-muted); font-size: .64rem; }
  .cc-bar { height: 5px; overflow: hidden; border-radius: 999px; background: color-mix(in srgb, var(--cc-line) 60%, transparent); }
  .cc-bar > span { display: block; height: 100%; width: 0; border-radius: inherit; background: var(--cc-accent); transition: width .45s ease; }
  .cc-bar.tx > span { background: var(--cc-accent-2, var(--cc-good)); }
  .cc-center { position: relative; min-width: 0; padding: 18px 16px; }
  .cc-section-head { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 10px; }
  .cc-section-title { font-size: .78rem; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
  .cc-section-meta { color: var(--cc-muted); font-size: .65rem; }
  .cc-topology { position: relative; height: 405px; overflow: hidden; border: 1px solid var(--cc-line); border-radius: 17px; background: radial-gradient(circle at center, color-mix(in srgb, var(--cc-accent) 10%, transparent), transparent 42%), var(--cc-bg); }
  .cc-topology::before { content: ""; position: absolute; inset: 12%; border: 1px dashed color-mix(in srgb, var(--cc-line) 70%, transparent); border-radius: 50%; animation: cc-spin 34s linear infinite; }
  .cc-topology::after { content: ""; position: absolute; inset: 24%; border: 1px solid color-mix(in srgb, var(--cc-accent) 18%, var(--cc-line)); border-radius: 50%; animation: cc-spin 23s linear infinite reverse; }
  .cc-svg { position: absolute; inset: 5%; width: 90%; height: 90%; overflow: visible; }
  .cc-link { stroke: color-mix(in srgb, var(--cc-accent) 44%, var(--cc-line)); stroke-width: .25; stroke-dasharray: 1.1 1.6; animation: cc-flow 2.6s linear infinite; }
  .cc-link.offline { stroke: var(--cc-bad); stroke-dasharray: .3 2; animation-duration: 7s; }
  .cc-packet { fill: var(--cc-accent); animation: cc-packet 2.6s linear infinite; }
  .cc-packet.alt { fill: var(--cc-good); animation-delay: -1.3s; }
  .cc-core { position: absolute; left: 50%; top: 50%; display: grid; place-items: center; width: 94px; height: 94px; transform: translate(-50%, -50%); border: 1px solid color-mix(in srgb, var(--cc-accent) 55%, var(--cc-line)); border-radius: 50%; background: var(--cc-bg); box-shadow: 0 0 0 8px color-mix(in srgb, var(--cc-accent) 6%, transparent), 0 0 28px color-mix(in srgb, var(--cc-accent) 18%, transparent); z-index: 2; animation: cc-float 5s ease-in-out infinite; }
  .cc-core-icon { color: var(--cc-accent); font-size: 1.45rem; }
  .cc-core-name { margin-top: 4px; font-size: .64rem; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; }
  .cc-core-meta { margin-top: 2px; color: var(--cc-muted); font-size: .58rem; }
  .cc-node { position: absolute; left: calc(var(--x) * 1%); top: calc(var(--y) * 1%); display: grid; grid-template-columns: 23px 1fr; gap: 7px; min-width: 92px; max-width: 128px; padding: 8px; transform: translate(-50%, -50%); border: 1px solid var(--cc-line); border-radius: 11px; background: var(--cc-bg); box-shadow: 0 8px 18px color-mix(in srgb, var(--primary-text-color) 12%, transparent); color: var(--cc-text); cursor: pointer; z-index: 3; text-align: left; transition: transform .2s ease, border-color .2s ease, background .2s ease; animation: cc-enter .45s both; font: inherit; }
  .cc-node:hover, .cc-node.selected { transform: translate(-50%, -50%) scale(1.05); border-color: var(--cc-accent); background: var(--cc-surface); }
  .cc-node-icon { display: grid; place-items: center; width: 23px; height: 23px; border-radius: 7px; color: var(--cc-accent); background: color-mix(in srgb, var(--cc-accent) 12%, transparent); font-size: .78rem; }
  .cc-node.offline .cc-node-icon { color: var(--cc-bad); background: color-mix(in srgb, var(--cc-bad) 12%, transparent); }
  .cc-node-name { overflow: hidden; color: var(--cc-text); font-size: .66rem; font-weight: 750; white-space: nowrap; text-overflow: ellipsis; }
  .cc-node-kind { margin-top: 3px; overflow: hidden; color: var(--cc-muted); font-size: .57rem; white-space: nowrap; text-overflow: ellipsis; }
  .cc-node-state { display: flex; align-items: center; gap: 4px; margin-top: 4px; color: var(--cc-good); font-size: .56rem; }
  .cc-node.offline .cc-node-state { color: var(--cc-bad); }
  .cc-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
  .cc-roster-list { display: grid; gap: 6px; max-height: 440px; margin-top: 12px; overflow: auto; }
  .cc-roster-row { display: grid; grid-template-columns: 22px 1fr auto; align-items: center; gap: 7px; width: 100%; padding: 8px; border: 1px solid transparent; border-radius: 10px; background: transparent; color: var(--cc-text); cursor: pointer; font: inherit; text-align: left; }
  .cc-roster-row:hover, .cc-roster-row.selected { border-color: var(--cc-line); background: var(--cc-bg); }
  .cc-roster-icon { display: grid; place-items: center; width: 22px; height: 22px; border-radius: 6px; color: var(--cc-accent); background: color-mix(in srgb, var(--cc-accent) 10%, transparent); font-size: .7rem; }
  .cc-roster-name { overflow: hidden; font-size: .65rem; font-weight: 700; white-space: nowrap; text-overflow: ellipsis; }
  .cc-roster-kind { margin-top: 2px; color: var(--cc-muted); font-size: .57rem; }
  .cc-roster-status { width: 6px; height: 6px; border-radius: 50%; background: var(--cc-good); }
  .cc-roster-status.offline { background: var(--cc-bad); }
  .cc-details { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 12px; padding: 13px 18px; border-top: 1px solid var(--cc-line); background: color-mix(in srgb, var(--cc-surface) 70%, transparent); }
  .cc-detail-title { font-size: .72rem; font-weight: 800; }
  .cc-detail-sub { margin-top: 3px; color: var(--cc-muted); font-size: .62rem; }
  .cc-actions { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 6px; }
  .cc-action, .cc-clear { padding: 7px 9px; border: 1px solid color-mix(in srgb, var(--cc-accent) 36%, var(--cc-line)); border-radius: 8px; color: var(--cc-accent); background: color-mix(in srgb, var(--cc-accent) 8%, transparent); cursor: pointer; font: inherit; font-size: .62rem; }
  .cc-action:hover, .cc-clear:hover { background: color-mix(in srgb, var(--cc-accent) 15%, transparent); }
  .cc-empty { display: grid; place-items: center; height: 100%; padding: 30px; color: var(--cc-muted); text-align: center; font-size: .75rem; }
  .cc-footer { display: flex; justify-content: space-between; gap: 12px; padding: 10px 20px; border-top: 1px solid var(--cc-line); color: var(--cc-muted); font-size: .61rem; }
  @keyframes cc-pulse { 0%,100% { box-shadow: 0 0 0 0 currentColor; } 50% { box-shadow: 0 0 0 5px transparent; } }
  @keyframes cc-spin { to { transform: rotate(360deg); } }
  @keyframes cc-flow { to { stroke-dashoffset: -5; } }
  @keyframes cc-packet { 0% { opacity: 0; offset-distance: 0%; } 12%,85% { opacity: 1; } 100% { opacity: 0; offset-distance: 100%; } }
  @keyframes cc-float { 0%,100% { margin-top: 0; } 50% { margin-top: -4px; } }
  @keyframes cc-enter { from { opacity: 0; transform: translate(-50%, -50%) scale(.82); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
  @media (max-width: 900px) { .cc-layout { grid-template-columns: 165px minmax(280px, 1fr); } .cc-roster { grid-column: 1 / -1; border-top: 1px solid var(--cc-line); border-left: 0; } .cc-roster-list { grid-template-columns: repeat(2, minmax(0, 1fr)); max-height: none; } }
  @media (max-width: 620px) { .cc-header { align-items: flex-start; flex-direction: column; padding: 17px; } .cc-layout { display: block; } .cc-rail, .cc-roster { border: 0; border-bottom: 1px solid var(--cc-line); } .cc-topology { height: 340px; } .cc-roster-list { grid-template-columns: 1fr; } .cc-details { align-items: flex-start; grid-template-columns: 1fr; } .cc-actions { justify-content: flex-start; } .cc-footer { padding-inline: 17px; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; } }
`;

class UnifiCommandCenterCard extends UnifiOrbitCard {
  constructor() { super(); this._centerSignature = null; }

  setConfig(config) {
    this._config = {
      ...DEFAULTS,
      ...config,
      title: config?.title || "UniFi Command Center",
      max_devices: Math.max(1, Math.min(24, Number(config?.max_devices) || 12)),
      entities: Array.isArray(config?.entities) ? config.entities : [],
      theme: ["auto", "light", "dark"].includes(config?.theme) ? config.theme : "auto",
    };
    this._centerSignature = null;
    this.render();
  }

  getCardSize() { return 12; }
  getGridOptions() { return { rows: 12, columns: 12, min_rows: 8 }; }

  render() {
    if (!this._root || !this._hass) return;
    const data = this.collectData();
    const signature = JSON.stringify({
      title: this._config.title,
      theme: this._config.theme,
      max_devices: this._config.max_devices,
      selected: this._selectedDevice,
      entries: data.entries.map(({ entry }) => entry.entity_id),
      devices: data.devices.map((device) => ({ id: device.id, name: device.name, model: device.model, kind: device.kind, actions: device.actions.map(({ entry }) => entry.entity_id) })),
    });
    if (this._centerSignature === signature && this._root.querySelector(".command-center")) {
      this.updateCenterData(data);
      return;
    }
    this._centerSignature = signature;
    this._root.innerHTML = `<style>${COMMAND_CENTER_STYLES}</style>${this.renderCenter(data)}`;
    this.bindCenterEvents();
  }

  renderCenter(data) {
    const total = data.devices.length;
    const health = total ? Math.round((data.online / total) * 100) : 0;
    const status = total && data.online === total ? "All systems nominal" : total ? `${data.online}/${total} nodes online` : "Waiting for UniFi entities";
    const selected = data.devices.find((device) => device.id === this._selectedDevice);
    return `<ha-card class="command-center" data-theme="${this.escape(this._config.theme)}">
      <div class="cc-shell">
        <header class="cc-header"><div class="cc-brand"><div class="cc-mark">⌁</div><div><div class="cc-eyebrow">UniFi Network · Command Center</div><h1 class="cc-title">${this.escape(this._config.title)}</h1><p class="cc-subtitle" data-cc-bind="subtitle">${this.escape(status)}</p></div></div><div class="cc-status"><span class="cc-status-dot"></span><span data-cc-bind="live">${data.online ? "LIVE" : "STANDBY"}</span></div></header>
        <div class="cc-layout">
          ${this.renderHealthRail(data, health)}
          <main class="cc-center"><div class="cc-section-head"><span class="cc-section-title">Live topology</span><span class="cc-section-meta" data-cc-bind="entity-count">${data.entries.length} signals · local state</span></div>${this.renderTopology(data)}</main>
          ${this.renderRoster(data)}
        </div>
        ${selected ? this.renderCenterDetails(selected) : ""}
        <footer class="cc-footer"><span>Auto-discovery active · ${this.escape(this._config.theme === "auto" ? "Home Assistant theme" : `${this._config.theme} theme`)}</span><button class="cc-clear" data-cc-clear>${selected ? "Close details" : "About this view"}</button></footer>
      </div>
    </ha-card>`;
  }

  renderHealthRail(data, health) {
    return `<aside class="cc-rail"><div class="cc-label">Network health</div><div class="cc-health" style="--cc-health:${health}%"><div class="cc-health-inner"><div><div class="cc-health-value" data-cc-bind="health">${health}%</div><div class="cc-health-caption">availability</div></div></div></div><div class="cc-stats"><div class="cc-stat"><div class="cc-stat-label">Nodes online</div><div class="cc-stat-value" data-cc-bind="nodes">${data.online} / ${data.devices.length}</div></div><div class="cc-stat"><div class="cc-stat-label">Active clients</div><div class="cc-stat-value" data-cc-bind="clients">${this.formatNumber(data.clients)}</div></div><div class="cc-stat"><div class="cc-stat-label">Firmware</div><div class="cc-stat-value" data-cc-bind="updates">${data.updates ? `${data.updates} ready` : "Up to date"}</div></div></div><div class="cc-rail-card"><div class="cc-label">Traffic pulse</div>${this.renderTrafficRow("RX", "rx", data.traffic.rx, "")}${this.renderTrafficRow("TX", "tx", data.traffic.tx, "tx")}</div></aside>`;
  }

  renderTrafficRow(label, bind, value, className) {
    return `<div class="cc-traffic-row"><span>${label}</span><div class="cc-bar ${className}"><span data-cc-bar="${bind}" style="width:${Math.min(100, Math.max(4, value))}%"></span></div><strong data-cc-bind="${bind}">${this.rate(value)}</strong></div>`;
  }

  renderTopology(data) {
    if (!data.devices.length) return `<div class="cc-topology"><div class="cc-empty">Nu au fost detectate entități UniFi.<br>Activează integrarea UniFi Network sau verifică permisiunile utilizatorului.</div></div>`;
    const positions = this.positions(data.devices.length);
    const links = data.devices.map((device, index) => { const point = positions[index]; return `<line class="cc-link ${device.status === "offline" ? "offline" : ""}" x1="50" y1="50" x2="${point.x}" y2="${point.y}"/><circle class="cc-packet" cx="50" cy="50" r=".65"><animateMotion dur="2.6s" repeatCount="indefinite" path="M 0 0 L ${point.x - 50} ${point.y - 50}"/></circle><circle class="cc-packet alt" cx="50" cy="50" r=".45"><animateMotion dur="2.6s" begin="-1.3s" repeatCount="indefinite" path="M 0 0 L ${point.x - 50} ${point.y - 50}"/></circle>`; }).join("");
    const nodes = data.devices.map((device, index) => { const point = positions[index]; const selected = device.id === this._selectedDevice ? " selected" : ""; return `<button class="cc-node ${device.status}${selected}" data-cc-device="${this.escape(device.id)}" style="--x:${point.x};--y:${point.y};animation-delay:${index * 45}ms"><span class="cc-node-icon">${this.iconFor(device.kind)}</span><span><span class="cc-node-name">${this.escape(device.name)}</span><span class="cc-node-kind">${this.escape(device.kind)}</span><span class="cc-node-state"><i class="cc-dot"></i><span data-cc-state>${this.escape(device.status)}</span></span></span></button>`; }).join("");
    return `<div class="cc-topology"><svg class="cc-svg" viewBox="0 0 100 100" aria-hidden="true">${links}</svg><div class="cc-core"><div><div class="cc-core-icon">◈</div><div class="cc-core-name">UniFi</div><div class="cc-core-meta">controller</div></div></div>${nodes}</div>`;
  }

  renderRoster(data) {
    const rows = data.devices.map((device) => { const selected = device.id === this._selectedDevice ? " selected" : ""; return `<button class="cc-roster-row${selected}" data-cc-device="${this.escape(device.id)}"><span class="cc-roster-icon">${this.iconFor(device.kind)}</span><span><span class="cc-roster-name">${this.escape(device.name)}</span><span class="cc-roster-kind">${this.escape(device.kind)} · ${this.escape(device.model)}</span></span><i class="cc-roster-status ${device.status === "offline" ? "offline" : ""}"></i></button>`; }).join("");
    return `<aside class="cc-roster"><div class="cc-section-head"><span class="cc-section-title">Node roster</span><span class="cc-section-meta">${data.devices.length}</span></div><div class="cc-roster-list">${rows || `<div class="cc-detail-sub">No nodes discovered</div>`}</div></aside>`;
  }

  renderCenterDetails(device) {
    const actions = device.actions.map(({ entry }) => { const domain = entry.entity_id.split(".")[0]; const label = domain === "button" ? this.friendlyAction(entry) : `Toggle ${this.friendlyAction(entry)}`; return `<button class="cc-action" data-cc-action-domain="${domain}" data-cc-action-entity="${this.escape(entry.entity_id)}">${this.escape(label)}</button>`; }).join("");
    const primary = device.metrics[0]?.value || "No optional telemetry";
    return `<section class="cc-details"><div><div class="cc-detail-title">${this.escape(device.name)} · ${this.escape(device.status)}</div><div class="cc-detail-sub">${this.escape(device.model)} · ${this.escape(primary)}</div></div><div class="cc-actions">${actions || `<span class="cc-detail-sub">No exposed actions</span>`}</div></section>`;
  }

  updateCenterData(data) {
    const total = data.devices.length;
    const health = total ? Math.round((data.online / total) * 100) : 0;
    const setText = (key, value) => { const el = this._root.querySelector(`[data-cc-bind="${key}"]`); if (el) el.textContent = value; };
    setText("subtitle", total && data.online === total ? "All systems nominal" : total ? `${data.online}/${total} nodes online` : "Waiting for UniFi entities");
    setText("live", data.online ? "LIVE" : "STANDBY");
    setText("health", `${health}%`); setText("nodes", `${data.online} / ${total}`); setText("clients", this.formatNumber(data.clients)); setText("updates", data.updates ? `${data.updates} ready` : "Up to date"); setText("rx", this.rate(data.traffic.rx)); setText("tx", this.rate(data.traffic.tx)); setText("entity-count", `${data.entries.length} signals · local state`);
    const healthRing = this._root.querySelector(".cc-health"); if (healthRing) healthRing.style.setProperty("--cc-health", `${health}%`);
    const maxTraffic = Math.max(data.traffic.rx, data.traffic.tx, 1); for (const [key, value] of [["rx", data.traffic.rx], ["tx", data.traffic.tx]]) { const bar = this._root.querySelector(`[data-cc-bar="${key}"]`); if (bar) bar.style.width = `${Math.max(4, (value / maxTraffic) * 100)}%`; }
    for (const device of data.devices) { this._root.querySelectorAll(`[data-cc-device="${this.escapeSelector(device.id)}"]`).forEach((node) => { node.classList.remove("online", "offline", "pending", "provisioning", "upgrading", "unknown"); node.classList.add(device.status); const state = node.querySelector("[data-cc-state]"); if (state) state.textContent = device.status; const dot = node.querySelector(".cc-roster-status"); if (dot) dot.classList.toggle("offline", device.status === "offline"); }); }
  }

  bindCenterEvents() {
    this._root.querySelectorAll("[data-cc-device]").forEach((node) => node.addEventListener("click", () => { this._selectedDevice = node.dataset.ccDevice === this._selectedDevice ? null : node.dataset.ccDevice; this._centerSignature = null; this.render(); }));
    this._root.querySelectorAll("[data-cc-action-entity]").forEach((button) => button.addEventListener("click", (event) => { event.stopPropagation(); const entityId = button.dataset.ccActionEntity; const domain = button.dataset.ccActionDomain; if (this._hass?.callService && entityId) this._hass.callService(domain, domain === "button" ? "press" : "toggle", { entity_id: entityId }); }));
    this._root.querySelector("[data-cc-clear]")?.addEventListener("click", () => { this._selectedDevice = null; this._centerSignature = null; this.render(); });
  }
}

if (!customElements.get("unifi-orbit-card")) customElements.define("unifi-orbit-card", UnifiOrbitCard);
if (!customElements.get("unifi-orbit-card-editor")) customElements.define("unifi-orbit-card-editor", UnifiOrbitCardEditor);
if (!customElements.get("unifi-command-center-card")) customElements.define("unifi-command-center-card", UnifiCommandCenterCard);



window.customCards = window.customCards || [];
for (const card of [
  {
    type: "custom:unifi-orbit-card",
    name: "UniFi Orbit Card",
    description: "Animated, auto-discovering UniFi Network observatory for Home Assistant.",
    preview: true,
  },
  {
    type: "custom:unifi-command-center-card",
    name: "UniFi Command Center",
    description: "A complete animated UniFi Network command center with topology, health, traffic, and controls.",
    preview: true,
  },
]) {
  if (!window.customCards.some((existing) => existing.type === card.type)) window.customCards.push(card);
}

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="unifi-orbit-card"))window.customCards.push({type:"unifi-orbit-card",name:"UniFi Orbit Card",description:"Included in Orbit Lovelace",preview:false});
if(!window.customCards.some(card=>card.type==="unifi-command-center-card"))window.customCards.push({type:"unifi-command-center-card",name:"UniFi Orbit Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["ha-unifi-orbit-card"]={version:"0.2.0",types:["unifi-orbit-card","unifi-command-center-card"]};
})() } catch(error){suite.errors.push({component:"ha-unifi-orbit-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","ha-unifi-orbit-card",error);}
/* ha-vacuum-commander-card @ 1.3.0 (62850c1cb1a843ef550e5d3262864acc5d9122bc) */
try { (() => {
const knownTypes=["ha-vacuum-commander-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["ha-vacuum-commander-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
function t(t,e,i,r){var o,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,i,n):o(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new s(i,t,r)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,m=globalThis,g=m.trustedTypes,v=g?g.emptyScript:"",f=m.reactiveElementPolyfillSupport,b=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&l(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const s=r?.call(this);o?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(i)t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of r){const r=document.createElement("style"),o=e.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=i.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=r;const s=o.fromAttribute(e,t.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(t,e,i,r=!1,o){if(void 0!==t){const s=this.constructor;if(!1===r&&(o=this[t]),i??=s.getPropertyOptions(t),!((i.hasChanged??x)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:o},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==o||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[b("elementProperties")]=new Map,y[b("finalized")]=new Map,f?.({ReactiveElement:y}),(m.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,w=t=>t,S=A.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,M=`<${P}>`,z=document,U=()=>z.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,R="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,j=/>/g,D=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),V=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),F=new WeakMap,J=z.createTreeWalker(z,129);function K(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,r=[];let o,s=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,d=0;for(;d<i.length&&(n.lastIndex=d,c=n.exec(i),null!==c);)d=n.lastIndex,n===H?"!--"===c[1]?n=N:void 0!==c[1]?n=j:void 0!==c[2]?(B.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=D):void 0!==c[3]&&(n=D):n===D?">"===c[0]?(n=o??H,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?D:'"'===c[3]?L:I):n===L||n===I?n=D:n===N||n===j?n=H:(n=D,o=void 0);const h=n===D&&t[e+1].startsWith("/>")?" ":"";s+=n===H?i+M:l>=0?(r.push(a),i.slice(0,l)+k+i.slice(l)+C+h):i+C+(-2===l?e:h)}return[K(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class Y{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,s=0;const n=t.length-1,a=this.parts,[c,l]=X(t,e);if(this.el=Y.createElement(c,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=J.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(k)){const e=l[s++],i=r.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?rt:tt}),r.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:o}),r.removeAttribute(t));if(B.test(r.tagName)){const t=r.textContent.split(C),e=t.length-1;if(e>0){r.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],U()),J.nextNode(),a.push({type:2,index:++o});r.append(t[e],U())}}}else if(8===r.nodeType)if(r.data===P)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(C,t+1));)a.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=z.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,r){if(e===V)return e;let o=void 0!==r?i._$Co?.[r]:i._$Cl;const s=O(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=o:i._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,r)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??z).importNode(e,!0);J.currentNode=r;let o=J.nextNode(),s=0,n=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new G(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=i[++n]}s!==a?.index&&(o=J.nextNode(),s++)}return J.currentNode=z,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),O(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new Q(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Y(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new G(this.O(U()),this.O(U()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,r){const o=this.strings;let s=!1;if(void 0===o)t=Z(this,t,e,0),s=!O(t)||t!==this._$AH&&t!==V,s&&(this._$AH=t);else{const r=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=Z(this,r[i+n],e,n),a===V&&(a=this._$AH[n]),s||=!O(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}s&&!r&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class rt extends tt{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===V)return;const i=this._$AH,r=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==W&&(i===W||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const st=A.litHtmlPolyfillSupport;st?.(Y,G),(A.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;class at extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let o=r._$litPart$;if(void 0===o){const t=i?.renderBefore??null;r._$litPart$=o=new G(e.insertBefore(U(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const ct=nt.litElementPolyfillSupport;ct?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");const lt={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:x},dt=(t=lt,e,i)=>{const{kind:r,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t,!0,i)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];e.call(this,i),this.requestUpdate(r,o,t,!0,i)}}throw Error("Unsupported decorator location: "+r)};function ht(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}var pt,ut;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(pt||(pt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ut||(ut={}));const mt="ha-vacuum-commander-card";console.info("%c 🤖 VACUUM-COMMANDER %c v1.3.0 ","color:#fff;background:#10b981;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px;","color:#fff;background:#6b7280;font-weight:700;border-radius:0 4px 4px 0;padding:2px 6px;");let gt=class extends at{constructor(){super(...arguments),this._longPressTriggered=!1}static getStubConfig(){return{type:mt,title:"🤖 Vacuum",entity:"vacuum.my_vacuum",palette:"aurora"}}setConfig(t){if(!t)throw new Error("Invalid config");const e=["aurora","ocean","sunset","lavender"].includes(t.palette||"")?t.palette:"aurora";this.config={...t,type:mt,title:t.title||"🤖 Vacuum",entity:t.entity||"vacuum.my_vacuum",palette:e}}_getEntity(){return this.hass?.states[this.config.entity||"vacuum.my_vacuum"]}_getState(){return this._getEntity()?.state||"unknown"}_getAttr(t){return this._getEntity()?.attributes?.[t]}_getBattery(){const t=this.config.battery_entity||`sensor.${(this.config.entity||"vacuum.my_vacuum").split(".")[1]}_battery_level`,e=this.hass?.states[t]?.state,i=this._getAttr("battery_level")??(e&&!["unknown","unavailable"].includes(e)?e:void 0),r=Number(i);return Number.isFinite(r)&&r>=0&&r<=100?r:void 0}_getFanSpeed(){return this._getAttr("fan_speed")||"unknown"}_getFriendlyName(){return this._getEntity()?.attributes?.friendly_name||"Vacuum"}_getRooms(){if(void 0!==this.config.rooms)return this.config.rooms;const t=this._getAttr("rooms");if(!t||"object"!=typeof t)return[];return(t[String(this._getAttr("selected_map")||"")]||Object.values(t)[0]||[]).filter(t=>t&&void 0!==t.id&&t.name).map(t=>({id:t.id,name:this._roomLabel(String(t.name)),icon:String(t.icon||"mdi:door")}))}_roomLabel(t){return{office:"Birou","living room":"Living",hallway:"Hol",bathroom:"Baie",kitchen:"Bucătărie","secondary bedroom":"Dormitor secundar","master bedroom":"Dormitor matrimonial","room 4":"Cameră 4 · verifică"}[t.trim().toLowerCase()]||t}_onPointerDown(t){0!==t.button||t.composedPath().some(t=>t instanceof HTMLElement&&t.matches("button, a, input, select, textarea, ha-slider"))||(this._holdStart={x:t.clientX,y:t.clientY},this._holdTimer=setTimeout(()=>{this._longPressTriggered=!0,((t,e,i,r)=>{r=r||{},i=null==i?{}:i;const o=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});o.detail=i,t.dispatchEvent(o)})(this,"hass-more-info",{entityId:this.config.entity||"vacuum.my_vacuum"})},600))}_onPointerMove(t){this._holdStart&&Math.hypot(t.clientX-this._holdStart.x,t.clientY-this._holdStart.y)>10&&this._onPointerEnd()}_onPointerEnd(){this._holdTimer&&clearTimeout(this._holdTimer),this._holdTimer=void 0,this._holdStart=void 0}_onContextMenu(t){this._longPressTriggered&&(t.preventDefault(),this._longPressTriggered=!1)}_isDreameVacuum(){return Boolean(this._getAttr("rooms")&&this._getAttr("selected_map"))}_getMapIndex(){const t=this.config.map_entity||`camera.${(this.config.entity||"vacuum.my_vacuum").split(".")[1]}_map`,e=Number(this.hass?.states[t]?.attributes?.map_index);return Number.isInteger(e)&&e>=0?e:void 0}_callService(t,e){this.hass.callService("vacuum",t,{entity_id:this.config.entity||"vacuum.my_vacuum",...e})}_cleanRoom(t){const e=t.segments??t.id,i=(Array.isArray(e)?e:String(e).split(",").map(t=>t.trim()).filter(Boolean)).map(String);if(this._isDreameVacuum()){const t=this._getMapIndex();if(void 0===t)return;const e=i.map(e=>e.includes("_")?e:`${t}_${e}`);return void this.hass.callService("dreame_vacuum","vacuum_clean_segment",{entity_id:this.config.entity||"vacuum.my_vacuum",segments:e})}this._callService("send_command",{command:"app_segment_clean",params:{segment_ids:i}})}_stateLabel(t){return{cleaning:"Curăță",docked:"La bază",returning:"Se întoarce",paused:"Pauză",error:"Eroare",idle:"Inactiv"}[t]||t}_stateIcon(t){return{cleaning:"mdi:robot-vacuum",docked:"mdi:robot-vacuum",returning:"mdi:robot-vacuum",paused:"mdi:pause-circle",error:"mdi:alert-circle",idle:"mdi:robot-vacuum"}[t]||"mdi:robot-vacuum"}getCardSize(){return 4}render(){if(!this.config||!this.hass)return W;const t=this._getState(),e=this._getBattery(),i=this._getFanSpeed(),r=this._getRooms(),o=r.some(t=>t.name.includes("· verifică")),s=void 0!==e,n=this._isDreameVacuum()&&void 0===this._getMapIndex();return q`
      <ha-card data-palette=${this.config.palette||"aurora"} @pointerdown=${t=>this._onPointerDown(t)} @pointermove=${t=>this._onPointerMove(t)} @pointerup=${this._onPointerEnd} @pointercancel=${this._onPointerEnd} @pointerleave=${this._onPointerEnd} @contextmenu=${t=>this._onContextMenu(t)}>
        <div class="shell">
          <div class="header">
            <div class="identity">
              <div class="icon-wrap state-${t}"><ha-icon .icon=${this._stateIcon(t)}></ha-icon></div>
              <div class="header-text">
                <div class="eyebrow">Vacuum Commander</div>
                <div class="header-title">${this.config.title||this._getFriendlyName()}</div>
              </div>
            </div>
            <div class="header-meta">
              <div class="pill ${"cleaning"===t?"active":"error"===t?"error":""}"><span class="dot"></span>${this._stateLabel(t)}</div>
              ${s?q`<div class="battery ${e<20?"low":""}"><ha-icon icon="mdi:battery"></ha-icon><span>${e}%</span></div>`:W}
            </div>
          </div>
          <div class="subline">${i}</div>
          <div class="content">
          <div class="controls">
            ${"cleaning"===t?q`
              <button class="ctrl-btn" @click=${()=>this._callService("pause")}><ha-icon icon="mdi:pause"></ha-icon><span>Pauză</span></button>
              <button class="ctrl-btn stop" @click=${()=>this._callService("stop")}><ha-icon icon="mdi:stop"></ha-icon><span>Stop</span></button>
              <button class="ctrl-btn" @click=${()=>this._callService("return_to_base")}><ha-icon icon="mdi:home"></ha-icon><span>Bază</span></button>
            `:q`
              <button class="ctrl-btn start" @click=${()=>this._callService("start")}><ha-icon icon="mdi:play"></ha-icon><span>Start</span></button>
              ${"paused"===t?q`
                <button class="ctrl-btn" @click=${()=>this._callService("start")}><ha-icon icon="mdi:play"></ha-icon><span>Resume</span></button>
              `:W}
              <button class="ctrl-btn" @click=${()=>this._callService("return_to_base")}><ha-icon icon="mdi:home"></ha-icon><span>Bază</span></button>
            `}
          </div>

          <!-- Rooms -->
          ${r.length>0?q`
            <div class="rooms-title">Camere</div>
            <div class="rooms">
              ${r.map(t=>q`
                <button class="room-btn" ?disabled=${n} title=${n?"Harta vacuumului nu este disponibilă.":""} @click=${()=>this._cleanRoom(t)}>
                  <ha-icon .icon=${t.icon||"mdi:room"}></ha-icon>
                  <span>${t.name}</span>
                </button>
              `)}
            </div>
            ${o?q`<div class="map-warning">„Cameră 4 · verifică” are numele implicit din hartă. Identific-o și redenumește-o în aplicația Dreame.</div>`:W}
            ${n?q`<div class="map-warning">Harta selectată nu este disponibilă; curățarea pe camere este dezactivată.</div>`:W}
          `:W}

          <!-- Quick clean -->
          <div class="quick-clean">
            <button class="quick-btn" @click=${()=>this._callService("clean_spot")}><ha-icon icon="mdi:broom"></ha-icon><span>Curățare rapidă</span></button>
          </div>
          </div>
        </div>
      </ha-card>
    `}static get styles(){return n`
      :host { display:block; min-width:0; max-width:100%; }
      ha-card { box-sizing:border-box; width:100%; min-width:0; max-width:100%; container-type:inline-size; container-name:vacuum-card; overflow:hidden; border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent); border-radius:var(--orbit-theme-card-radius,24px); background:var(--ha-card-background,var(--card-background-color,#fff)); box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1))); touch-action:pan-y; }
      ha-card[data-palette="aurora"] { --vac-a:var(--orbit-theme-accent,#078f72); --vac-b:var(--orbit-theme-accent-2,#27b7b0); --vac-c:var(--orbit-theme-accent-3,#54a9db); }
      ha-card[data-palette="ocean"] { --vac-a:#1477c9; --vac-b:#22a7c7; --vac-c:#6b68d8; }
      ha-card[data-palette="sunset"] { --vac-a:#df5d42; --vac-b:#ee973f; --vac-c:#cf5d9e; }
      ha-card[data-palette="lavender"] { --vac-a:#8059c7; --vac-b:#b56cc8; --vac-c:#4c9bc7; }
      .shell { --glow:var(--vac-a); position:relative; padding:clamp(16px,3cqi,22px); background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 0% 0%,color-mix(in srgb,var(--vac-a) 13%,transparent),transparent 54%),radial-gradient(ellipse at 100% 100%,color-mix(in srgb,var(--vac-b) 9%,transparent),transparent 48%)); }
      .shell::before { position:absolute; top:0; right:22px; left:22px; height:3px; border-radius:0 0 4px 4px; background:var(--orbit-theme-strip-background,linear-gradient(90deg,var(--vac-a),var(--vac-b),var(--vac-c))); content:""; }
      .header { display:flex; justify-content:space-between; align-items:center; gap:12px; min-width:0; }
      .identity { display:flex; align-items:center; gap:12px; min-width:0; }
      .icon-wrap { display:grid; place-items:center; flex:0 0 48px; width:48px; height:48px; border:1px solid color-mix(in srgb,var(--vac-a) 25%,transparent); border-radius:17px; color:#fff; background:linear-gradient(145deg,var(--vac-a),var(--vac-b)); box-shadow:0 7px 18px color-mix(in srgb,var(--vac-a) 24%,transparent); }
      .icon-wrap ha-icon { --mdc-icon-size:25px; }
      .icon-wrap.state-cleaning { color:var(--success-color,#168b68); background:color-mix(in srgb,var(--success-color,#168b68) 14%,var(--card-background-color)); }
      .icon-wrap.state-error { color:var(--error-color,#d34444); background:color-mix(in srgb,var(--error-color,#d34444) 13%,var(--card-background-color)); }
      .header-text { min-width:0; }
      .eyebrow { color:var(--orbit-theme-accent,var(--vac-a)); font-size:9px; font-weight:800; letter-spacing:.13em; text-transform:uppercase; }
      .header-title { overflow:hidden; color:var(--primary-text-color); font-size:19px; font-weight:750; line-height:1.2; text-overflow:ellipsis; white-space:nowrap; }
      .header-meta { display:flex; align-items:center; gap:7px; flex:0 0 auto; }
      .pill { display:flex; align-items:center; gap:7px; padding:8px 11px; border-radius:999px; color:var(--secondary-text-color); background:var(--secondary-background-color); font-size:11px; font-weight:750; white-space:nowrap; }
      .pill.active { color:var(--success-color,#218a72); }
      .pill.error { color:var(--error-color,#d34444); }
      .dot { width:8px; height:8px; border-radius:50%; background:currentColor; }
      .pill.active .dot { box-shadow:0 0 0 4px color-mix(in srgb,currentColor 17%,transparent); }
      .battery { display:flex; align-items:center; gap:4px; padding:7px 9px; border-radius:999px; color:var(--success-color,#218a72); background:color-mix(in srgb,var(--success-color,#218a72) 10%,var(--card-background-color)); font-size:11px; font-weight:750; }
      .battery ha-icon { --mdc-icon-size:15px; }
      .battery.low { color:var(--error-color,#d34444); background:color-mix(in srgb,var(--error-color,#d34444) 10%,var(--card-background-color)); }
      .subline { margin:3px 0 0 60px; color:var(--secondary-text-color); font-size:11px; }
      .content { margin-top:18px; }
      .controls { display:flex; justify-content:center; gap:8px; margin-bottom:17px; }
      .ctrl-btn,.room-btn,.quick-btn { min-width:0; border:1px solid color-mix(in srgb,var(--divider-color) 60%,transparent); background:color-mix(in srgb,var(--secondary-background-color) 62%,transparent); color:var(--primary-text-color); font:inherit; cursor:pointer; transition:background .18s,border-color .18s,transform .18s; }
      .ctrl-btn { display:flex; flex:1 1 0; flex-direction:column; align-items:center; justify-content:center; gap:5px; min-height:62px; max-width:140px; padding:9px 10px; border-radius:16px; }
      .ctrl-btn:hover,.room-btn:hover,.quick-btn:hover { border-color:color-mix(in srgb,var(--vac-a) 36%,var(--divider-color)); background:color-mix(in srgb,var(--vac-a) 9%,var(--secondary-background-color)); }
      .ctrl-btn:active,.room-btn:active,.quick-btn:active { transform:scale(.98); }
      .ctrl-btn ha-icon { --mdc-icon-size:21px; }
      .ctrl-btn span { font-size:11px; font-weight:700; }
      .ctrl-btn.start ha-icon { color:var(--success-color,#218a72); }
      .ctrl-btn.stop ha-icon { color:var(--error-color,#d34444); }
      .rooms-title { margin-bottom:9px; color:var(--primary-text-color); font-size:13px; font-weight:750; }
      .rooms { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:8px; margin-bottom:13px; }
      .room-btn { display:flex; align-items:center; justify-content:flex-start; gap:8px; min-height:46px; padding:8px 10px; border-radius:14px; text-align:left; }
      .room-btn ha-icon { flex:0 0 auto; --mdc-icon-size:19px; color:var(--vac-a); }
      .room-btn:nth-child(3n + 2) ha-icon { color:var(--vac-b); }
      .room-btn:nth-child(3n) ha-icon { color:var(--vac-c); }
      .room-btn:nth-child(3n + 1) { background:linear-gradient(135deg,color-mix(in srgb,var(--vac-a) 8%,var(--card-background-color,#fff)),var(--card-background-color,#fff)); }
      .room-btn:nth-child(3n + 2) { background:linear-gradient(135deg,color-mix(in srgb,var(--vac-b) 9%,var(--card-background-color,#fff)),var(--card-background-color,#fff)); }
      .room-btn:nth-child(3n) { background:linear-gradient(135deg,color-mix(in srgb,var(--vac-c) 9%,var(--card-background-color,#fff)),var(--card-background-color,#fff)); }
      .room-btn:hover { background:color-mix(in srgb,var(--vac-a) 13%,var(--card-background-color,#fff)); }
      .room-btn span { overflow:hidden; font-size:11px; font-weight:650; text-overflow:ellipsis; white-space:nowrap; }
      .room-btn:disabled { opacity:.45; cursor:not-allowed; }
      .map-warning { margin:0 0 12px; color:var(--error-color,#d34444); font-size:11px; }
      .quick-clean { display:flex; justify-content:center; }
      .quick-btn { display:inline-flex; align-items:center; justify-content:center; gap:7px; min-height:40px; padding:0 15px; border-radius:13px; font-size:12px; font-weight:700; }
      .quick-btn { border-color:color-mix(in srgb,var(--vac-a) 24%,var(--divider-color)); background:linear-gradient(110deg,color-mix(in srgb,var(--vac-a) 10%,var(--card-background-color,#fff)),color-mix(in srgb,var(--vac-b) 12%,var(--card-background-color,#fff))); }
      .quick-btn ha-icon { --mdc-icon-size:17px; color:var(--vac-a); }
      @container vacuum-card (max-width:480px) { .shell{padding:15px}.header{gap:8px}.identity{gap:9px}.icon-wrap{flex-basis:40px;width:40px;height:40px;border-radius:14px}.icon-wrap ha-icon{--mdc-icon-size:22px}.header-title{font-size:17px}.pill{gap:5px;padding:7px 9px;font-size:10px}.battery{padding:6px 8px}.subline{margin-left:49px}.content{margin-top:14px}.controls{gap:6px;margin-bottom:13px}.ctrl-btn{min-height:53px;padding:7px 6px;border-radius:14px}.rooms{grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}.room-btn{min-height:42px;padding:7px 9px} }
      @container vacuum-card (max-width:360px) { .shell{padding:12px}.header-meta{gap:4px}.pill{gap:4px;padding:6px 7px;font-size:9px}.battery{gap:2px;padding:5px 6px;font-size:10px}.header-title{font-size:16px}.subline{margin-left:45px;font-size:10px}.rooms{gap:6px}.room-btn{gap:6px;padding:6px 7px}.room-btn span{font-size:10px} }
      @media (prefers-reduced-motion:reduce) { *,*::before,*::after { transition:none !important; } }
    `}};t([ht({attribute:!1})],gt.prototype,"hass",void 0),t([ht({attribute:!1})],gt.prototype,"config",void 0),gt=t([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})(mt)],gt);

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="ha-vacuum-commander-card"))window.customCards.push({type:"ha-vacuum-commander-card",name:"Vacuum Commander Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["ha-vacuum-commander-card"]={version:"1.3.0",types:["ha-vacuum-commander-card"]};
})() } catch(error){suite.errors.push({component:"ha-vacuum-commander-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","ha-vacuum-commander-card",error);}
/* ha-weather-orbit-card @ 1.4.0 (e9ef5834fec155b9fb2cc03fe2edf19f54501f84) */
try { (() => {
const knownTypes=["ha-weather-orbit-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["ha-weather-orbit-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
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
 'ha-card{display:block;container:weather/inline-size;overflow:hidden;border-radius:var(--orbit-theme-card-radius,22px);border:1px solid var(--divider-color,#dce5e9);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 2px 6px #182c3510));--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0)}',
 'ha-card[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7}ha-card[data-palette=sunset]{--accent:#d65b40;--accent2:#ee973f}ha-card[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8}',
 '.shell{position:relative;padding:18px;background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--accent2) 13%,transparent),transparent 70%))}.shell:before{content:"";position:absolute;top:0;left:20px;right:20px;height:2px;background:var(--orbit-theme-strip-background,linear-gradient(90deg,var(--accent),var(--accent2)));border-radius:3px}',
 '.eyebrow{font-size:11px;letter-spacing:.09em;text-transform:uppercase;color:var(--orbit-theme-accent,var(--accent));font-weight:750;overflow-wrap:anywhere}.current{display:flex;align-items:center;gap:12px;width:100%;min-width:0;border:0;background:none;color:inherit;padding:12px 0;text-align:left;font:inherit;cursor:pointer}.current:disabled{cursor:default}.current:focus-visible,.retry:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:10px}',
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

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="ha-weather-orbit-card"))window.customCards.push({type:"ha-weather-orbit-card",name:"Weather Orbit Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["ha-weather-orbit-card"]={version:"1.4.0",types:["ha-weather-orbit-card"]};
})() } catch(error){suite.errors.push({component:"ha-weather-orbit-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","ha-weather-orbit-card",error);}
/* ha-welcome-orbit-card @ 1.1.0 (a30e5cb31023f47df056738cd5dd9837ee9bac57) */
try { (() => {
const knownTypes=["ha-welcome-orbit-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["ha-welcome-orbit-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
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
 'ha-card{display:block;container:welcome/inline-size;max-width:100%;min-width:0;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color,#dfe5eb) 65%,transparent);border-radius:var(--orbit-theme-card-radius,22px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 2px 5px #14233716));--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0);--accent3:var(--orbit-theme-accent-3,#54a9db)}',
 'ha-card[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}ha-card[data-palette=sunset]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}ha-card[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}',
 '.shell{position:relative;isolation:isolate;padding:22px;background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--accent2) 12%,transparent),transparent 65%))}.shell:before{content:"";position:absolute;left:24px;right:24px;top:0;height:2px;border-radius:0 0 4px 4px;background:var(--orbit-theme-strip-background,linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3)))}',
 '.header{display:flex;align-items:center;gap:18px;min-width:0}.copy{flex:1;min-width:0}.eyebrow{display:flex;gap:7px;align-items:center;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--orbit-theme-accent,var(--accent));overflow-wrap:anywhere}.eyebrow ha-icon{--mdc-icon-size:15px;flex:none}h1{margin:7px 0 8px;font-size:clamp(22px,4cqi,32px);font-weight:750;line-height:1.18;letter-spacing:-.04em;overflow-wrap:anywhere}.meta{display:flex;flex-wrap:wrap;gap:4px 10px;color:var(--secondary-text-color,#637080);font-size:12px;line-height:18px}.clock{font-variant-numeric:tabular-nums}',
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

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="ha-welcome-orbit-card"))window.customCards.push({type:"ha-welcome-orbit-card",name:"Welcome Orbit Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["ha-welcome-orbit-card"]={version:"1.1.0",types:["ha-welcome-orbit-card"]};
})() } catch(error){suite.errors.push({component:"ha-welcome-orbit-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","ha-welcome-orbit-card",error);}
/* lovelace-action-button-card @ 0.1.0 (9a2f9279ae5d0d72b7739afbda30d20088b9f633) */
try { (() => {
const knownTypes=["action-button-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["lovelace-action-button-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const CARD_TYPE = "action-button-card";
const VERSION = "0.1.0";

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:action-card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 56%,transparent);border-radius:var(--orbit-theme-card-radius,25px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 13px 36px rgba(25,35,65,.12)))}
  .shell{--accent:var(--orbit-theme-accent,var(--primary-color,#6d75e8));position:relative;isolation:isolate;overflow:hidden;padding:clamp(16px,3.5vw,24px);background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 0% 0%,color-mix(in srgb,var(--accent) 14%,transparent),transparent 47%),radial-gradient(ellipse at 100% 100%,rgba(49,190,185,.12),transparent 48%),var(--ha-card-background,var(--card-background-color,#fff)))}
  .shell:before{position:absolute;z-index:-1;inset:0;background:var(--orbit-theme-overlay-background,linear-gradient(125deg,color-mix(in srgb,var(--accent) 5%,transparent),transparent 45%,rgba(49,190,185,.045)));content:"";pointer-events:none}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px}.identity{display:flex;align-items:center;gap:11px;min-width:0}.icon-wrap{display:grid;place-items:center;width:44px;height:44px;flex:none;border:1px solid color-mix(in srgb,var(--accent) 30%,transparent);border-radius:15px;background:linear-gradient(145deg,color-mix(in srgb,var(--accent) 86%,white),color-mix(in srgb,var(--accent) 74%,#44b9ba));box-shadow:0 7px 17px color-mix(in srgb,var(--accent) 22%,transparent);color:#fff}.icon-wrap ha-icon{--mdc-icon-size:23px}.copy{min-width:0}.eyebrow{color:var(--orbit-theme-accent,var(--accent));font-size:9px;font-weight:850;letter-spacing:.17em;text-transform:uppercase}.title{margin:4px 0 0;overflow:hidden;font-size:clamp(16px,2.7vw,21px);font-weight:790;letter-spacing:-.035em;text-overflow:ellipsis;white-space:nowrap}.subtitle{margin:4px 0 0;color:var(--secondary-text-color);font-size:11px;line-height:1.4}
  .status{display:flex;align-items:center;gap:7px;flex:none;padding:7px 10px;border:1px solid color-mix(in srgb,var(--divider-color) 50%,transparent);border-radius:999px;background:color-mix(in srgb,var(--secondary-background-color) 75%,transparent);color:var(--secondary-text-color);font-size:10px;font-weight:780;letter-spacing:.04em}.status-dot{width:7px;height:7px;border-radius:50%;background:currentColor}.status.active{border-color:color-mix(in srgb,#139b78 22%,transparent);background:color-mix(in srgb,#139b78 9%,var(--card-background-color,#fff));color:#16866f}.status.unavailable,.status.error{color:var(--error-color,#c64b53)}.status.sent{color:var(--accent)}
  .action-area{margin-top:19px;padding-top:15px;border-top:1px solid color-mix(in srgb,var(--divider-color) 72%,transparent)}.action{display:flex;align-items:center;justify-content:center;gap:9px;width:100%;min-width:0;min-height:49px;padding:0 16px;border:0;border-radius:15px;background:linear-gradient(135deg,var(--accent),color-mix(in srgb,var(--accent) 73%,#42b9b8));box-shadow:0 6px 16px color-mix(in srgb,var(--accent) 23%,transparent);color:#fff;font:inherit;font-size:13px;font-weight:800;cursor:pointer;transition:filter .15s ease,transform .15s ease,box-shadow .15s ease}.action:hover:not(:disabled){filter:brightness(1.06);transform:translateY(-1px);box-shadow:0 8px 19px color-mix(in srgb,var(--accent) 27%,transparent)}.action:active:not(:disabled){transform:translateY(0)}.action ha-icon{--mdc-icon-size:19px}.action:disabled{opacity:.55;cursor:wait}
  .feedback{min-height:16px;margin-top:9px;color:var(--secondary-text-color);font-size:10px;line-height:1.4;text-align:center}.feedback.error{color:var(--error-color,#c64b53)}.confirm{display:grid;grid-template-columns:minmax(0,1fr) auto auto;align-items:center;gap:7px}.confirm-copy{min-width:0;color:var(--secondary-text-color);font-size:11px;line-height:1.35}.confirm-button{min-height:36px;padding:0 11px;border:1px solid var(--divider-color);border-radius:11px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:11px;font-weight:740;cursor:pointer}.confirm-button.primary{border-color:transparent;background:var(--accent);color:#fff}.confirm-button:disabled{opacity:.55;cursor:wait}.setup{padding:20px;color:var(--secondary-text-color);font:inherit;font-size:13px}
  @container action-card (max-width:480px){.shell{padding:14px}.header{gap:8px}.identity{gap:8px}.icon-wrap{width:39px;height:39px;border-radius:13px}.icon-wrap ha-icon{--mdc-icon-size:21px}.status{gap:5px;padding:6px 8px;font-size:9px}.action-area{margin-top:15px;padding-top:12px}.action{min-height:43px;padding:0 12px;font-size:12px}.feedback{margin-top:7px;font-size:9px}}
  @container action-card (max-width:360px){.shell{padding:12px}.header{align-items:flex-start;gap:6px}.identity{gap:7px}.icon-wrap{width:35px;height:35px;border-radius:12px}.status{gap:4px;padding:5px 6px;font-size:8px}.confirm{grid-template-columns:minmax(0,1fr) auto auto;gap:5px}.confirm-copy{font-size:10px}.confirm-button{min-height:34px;padding:0 8px;font-size:10px}}
  @media(prefers-reduced-motion:reduce){*,*::before,*::after{transition:none!important;scroll-behavior:auto!important}}
`;

const SCHEMA = [
  { name: "entity", required: true, selector: { entity: { domain: ["button", "input_button"] } } },
  { name: "title", selector: { text: {} } },
  { name: "subtitle", selector: { text: {} } },
  { name: "icon", selector: { icon: {} } },
  { name: "button_label", selector: { text: {} } },
  { name: "confirmation", selector: { boolean: {} } },
  { name: "status_entity", selector: { entity: {} } },
  { name: "status_active_state", selector: { text: {} } },
  { name: "status_active_label", selector: { text: {} } },
  { name: "status_inactive_label", selector: { text: {} } },
];

const LABELS = {
  entity: "Action button",
  title: "Card title",
  subtitle: "Description",
  icon: "Icon",
  button_label: "Action label",
  confirmation: "Confirm before sending",
  status_entity: "Optional device status",
  status_active_state: "Active status value",
  status_active_label: "Active label",
  status_inactive_label: "Inactive label",
};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function fire(target, name, detail) {
  const event = new Event(name, { bubbles: true, composed: true });
  event.detail = detail;
  target.dispatchEvent(event);
}

class ActionButtonCard extends HTMLElement {
  static getConfigForm() {
    return { schema: SCHEMA, computeLabel: (field) => LABELS[field.name] || field.name };
  }

  static getStubConfig() {
    return { entity: "button.example", icon: "mdi:gesture-tap-button", button_label: "Run action" };
  }

  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("Provide a valid Action Button Card configuration.");
    if (!config.entity) throw new Error("Choose a button or input_button entity for the Action Button Card.");
    const domain = config.entity.split(".")[0];
    if (!["button", "input_button"].includes(domain)) throw new Error("Action Button Card supports button and input_button entities.");
    this._config = { button_label: "Run action", status_active_state: "on", status_active_label: "Online", status_inactive_label: "Offline", ...config };
    this._root ??= this.attachShadow({ mode: "open" });
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    const signature = [this._config?.entity, this._config?.status_entity]
      .map((entityId) => JSON.stringify(hass?.states?.[entityId]))
      .join("|");
    if (signature !== this._entitySignature) {
      this._entitySignature = signature;
      this.render();
    }
  }

  getCardSize() { return 2; }
  getGridOptions() { return { rows: 2, columns: 6, min_rows: 2, max_rows: 4 }; }

  get actionEntity() { return this._hass?.states?.[this._config?.entity]; }
  get statusEntity() { return this._config?.status_entity ? this._hass?.states?.[this._config.status_entity] : null; }
  get unavailable() { return !this.actionEntity || String(this.actionEntity.state).toLowerCase() === "unavailable"; }
  get statusUnavailable() { return this._config?.status_entity && (!this.statusEntity || ["unknown", "unavailable"].includes(String(this.statusEntity.state).toLowerCase())); }

  title() { return this._config.title || this.actionEntity?.attributes?.friendly_name || this._config.entity; }
  icon() { return this._config.icon || this.actionEntity?.attributes?.icon || "mdi:gesture-tap-button"; }

  status() {
    if (this._error) return { label: "Action failed", className: "error" };
    if (this.unavailable) return { label: "Unavailable", className: "unavailable" };
    if (this.statusEntity) {
      if (this.statusUnavailable) return { label: "Status unavailable", className: "unavailable" };
      const active = String(this.statusEntity.state).toLowerCase() === String(this._config.status_active_state).toLowerCase();
      const label = active ? this._config.status_active_label : this._config.status_inactive_label;
      return { label: label || this.statusEntity.state, className: active ? "active" : "" };
    }
    if (this._feedback) return { label: "Sent", className: "sent" };
    return { label: "Ready", className: "" };
  }

  render() {
    if (!this._root || !this._config) return;
    if (!this.actionEntity && !this._hass) {
      this._root.innerHTML = `<style>${STYLE}</style><ha-card><div class="setup">Choose a button entity in the card editor to get started.</div></ha-card>`;
      return;
    }
    const entityId = this._config.entity;
    const state = this.status();
    const subtitle = this._config.subtitle || this.actionEntity?.attributes?.friendly_name || "One-touch Home Assistant action";
    const actionLabel = this._config.button_label || "Run action";
    const actionDisabled = this.unavailable || this._pending;
    const confirmation = this._confirming
      ? `<div class="confirm"><span class="confirm-copy">Send this action now?</span><button class="confirm-button" type="button" data-cancel>Cancel</button><button class="confirm-button primary" type="button" data-confirm ${actionDisabled ? "disabled" : ""}>Send</button></div>`
      : `<button class="action" type="button" data-action ${actionDisabled ? "disabled" : ""}><ha-icon icon="${escapeHtml(this.icon())}"></ha-icon><span>${escapeHtml(this._pending ? "Sending…" : actionLabel)}</span></button>`;
    const feedback = this._error ? this._feedback : this._feedback || (this.unavailable ? "The action entity is not available." : "Tap to send the command.");
    this._root.innerHTML = `<style>${STYLE}</style><ha-card><div class="shell"><header class="header"><div class="identity"><span class="icon-wrap"><ha-icon icon="${escapeHtml(this.icon())}"></ha-icon></span><div class="copy"><div class="eyebrow">Action</div><h2 class="title">${escapeHtml(this.title())}</h2><p class="subtitle">${escapeHtml(subtitle)}</p></div></div><span class="status ${state.className}"><span class="status-dot"></span>${escapeHtml(state.label)}</span></header><div class="action-area">${confirmation}${!this._confirming ? `<div class="feedback${this._error ? " error" : ""}" role="status">${escapeHtml(feedback)}</div>` : ""}</div></div></ha-card>`;
    this.bindEvents();
  }

  bindEvents() {
    this._root.querySelector("[data-action]")?.addEventListener("click", () => {
      if (this._config.confirmation) {
        this._confirming = true;
        this.render();
      } else this.press();
    });
    this._root.querySelector("[data-cancel]")?.addEventListener("click", () => {
      this._confirming = false;
      this.render();
    });
    this._root.querySelector("[data-confirm]")?.addEventListener("click", () => {
      this._confirming = false;
      this.press();
    });
    const shell = this._root.querySelector(".shell");
    const interactive = (target) => target instanceof Element && target.closest("button,input,select,textarea,a,[contenteditable=true]");
    let timer;
    let held = false;
    shell?.addEventListener("pointerdown", (event) => {
      if (interactive(event.target)) return;
      held = false;
      timer = setTimeout(() => {
        held = true;
        fire(this, "hass-more-info", { entityId: this._config.entity });
      }, 550);
    });
    const clear = () => clearTimeout(timer);
    shell?.addEventListener("pointerup", clear);
    shell?.addEventListener("pointerleave", clear);
    shell?.addEventListener("pointercancel", clear);
    shell?.addEventListener("click", (event) => {
      if (!interactive(event.target) && held) {
        event.preventDefault();
        event.stopPropagation();
      }
    });
  }

  async press() {
    if (this._pending || this.unavailable || !this._hass?.callService) return;
    const domain = this._config.entity.split(".")[0];
    this._pending = true;
    this._confirming = false;
    this._error = false;
    this._feedback = "Sending command…";
    this.render();
    try {
      await this._hass.callService(domain, "press", { entity_id: this._config.entity });
      this._feedback = "Command sent. Device status is shown separately.";
      clearTimeout(this._feedbackTimer);
      this._feedbackTimer = setTimeout(() => { this._feedback = ""; this.render(); }, 2600);
    } catch (error) {
      this._feedback = error?.message || "Home Assistant could not send the command.";
      this._error = true;
      clearTimeout(this._feedbackTimer);
      this._feedbackTimer = setTimeout(() => { this._feedback = ""; this._error = false; this.render(); }, 5000);
    } finally {
      this._pending = false;
      this.render();
    }
  }
}

if (!customElements.get(CARD_TYPE)) customElements.define(CARD_TYPE, ActionButtonCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === CARD_TYPE)) {
  window.customCards.push({ type: CARD_TYPE, name: "Action Button Card", description: "A responsive action card for Home Assistant button entities.", preview: true });
}
console.info(`%c ACTION-BUTTON-CARD %c ${VERSION} `, "background:#5269d9;color:#fff;font-weight:700;", "background:transparent;color:var(--primary-text-color);font-weight:700;");

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="action-button-card"))window.customCards.push({type:"action-button-card",name:"Action Button Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["lovelace-action-button-card"]={version:"0.1.0",types:["action-button-card"]};
})() } catch(error){suite.errors.push({component:"lovelace-action-button-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","lovelace-action-button-card",error);}
/* lovelace-alecoair-dehumidifier-card @ 1.0.2 (8bfb6d2bd7f92803d717d1de44d2b19a3e1ca61e) */
try { (() => {
const knownTypes=["alecoair-dehumidifier-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["lovelace-alecoair-dehumidifier-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const CARD_TAG = "alecoair-dehumidifier-card";
const PALETTES = new Set(["aurora", "ocean", "sunset", "lavender"]);
const MODE_LABELS = { auto: "Auto", boost: "Boost", sleep: "Sleep", normal: "Normal", eco: "Eco" };

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:alecoair-card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:var(--orbit-theme-card-radius,24px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1)));touch-action:pan-y}
  ha-card[data-palette="aurora"]{--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0);--accent3:var(--orbit-theme-accent-3,#54a9db)}
  ha-card[data-palette="ocean"]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}
  ha-card[data-palette="sunset"]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}
  ha-card[data-palette="lavender"]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}
  .shell{position:relative;padding:clamp(16px,3cqi,22px);background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 13%,transparent),transparent 54%),radial-gradient(ellipse at 100% 100%,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 48%))}
  .shell:before{position:absolute;top:0;right:22px;left:22px;height:3px;border-radius:0 0 4px 4px;background:var(--orbit-theme-strip-background,linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3)));content:""}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}.identity{display:flex;align-items:center;gap:12px;min-width:0}.icon-wrap{display:grid;place-items:center;flex:0 0 48px;width:48px;height:48px;border:1px solid color-mix(in srgb,var(--accent) 24%,transparent);border-radius:17px;background:linear-gradient(145deg,var(--accent),var(--accent2));box-shadow:0 7px 18px color-mix(in srgb,var(--accent) 22%,transparent);color:#fff}.icon-wrap ha-icon{--mdc-icon-size:25px}.identity-copy{min-width:0}.eyebrow{color:var(--orbit-theme-accent,var(--accent));font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.title{overflow:hidden;margin:3px 0 0;font-size:clamp(16px,2.5cqi,20px);font-weight:780;letter-spacing:-.03em;text-overflow:ellipsis;white-space:nowrap}
  .pill{display:flex;align-items:center;gap:7px;padding:7px 10px;border:1px solid color-mix(in srgb,currentColor 12%,transparent);border-radius:999px;background:color-mix(in srgb,currentColor 8%,var(--card-background-color,#fff));color:var(--secondary-text-color);font-size:11px;font-weight:750;white-space:nowrap}.dot{width:7px;height:7px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 16%,transparent)}.pill.on{color:var(--success-color,#168b68)}.pill.off{color:var(--secondary-text-color)}.pill.unavailable{color:var(--error-color,#c74343)}
  .humidity-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:20px}.humidity-tile{min-width:0;padding:14px;border:1px solid color-mix(in srgb,var(--accent) 17%,var(--divider-color));border-radius:18px;background:linear-gradient(145deg,color-mix(in srgb,var(--accent) 8%,var(--card-background-color,#fff)),var(--card-background-color,#fff) 78%)}.humidity-tile.current{border-color:color-mix(in srgb,var(--accent2) 24%,var(--divider-color));background:linear-gradient(145deg,color-mix(in srgb,var(--accent2) 11%,var(--card-background-color,#fff)),var(--card-background-color,#fff) 78%)}.tile-label{display:flex;align-items:center;gap:6px;color:var(--secondary-text-color);font-size:10px;font-weight:760;letter-spacing:.08em;text-transform:uppercase}.tile-label ha-icon{--mdc-icon-size:15px;color:var(--accent)}.current .tile-label ha-icon{color:var(--accent2)}.tile-value{margin-top:6px;color:var(--accent);font-size:clamp(27px,6cqi,38px);font-weight:830;letter-spacing:-.06em;line-height:1}.current .tile-value{color:var(--accent2)}.tile-value small{font-size:.44em;font-weight:700;letter-spacing:0}
  .slider-section{margin-top:17px;padding:14px;border:1px solid color-mix(in srgb,var(--divider-color) 66%,transparent);border-radius:17px;background:color-mix(in srgb,var(--card-background-color,#fff) 85%,var(--secondary-background-color))}.section-head{display:flex;align-items:center;justify-content:space-between;gap:10px}.section-title{font-size:12px;font-weight:760}.target-value{color:var(--accent);font-size:13px;font-weight:800;font-variant-numeric:tabular-nums}.range{display:block;width:100%;height:29px;margin:7px 0 0;accent-color:var(--accent);cursor:pointer;touch-action:pan-y}.range:disabled{opacity:.5;cursor:not-allowed}.range-limits{display:flex;justify-content:space-between;color:var(--secondary-text-color);font-size:10px;font-variant-numeric:tabular-nums}
  .controls{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:14px}.mode-wrap{display:flex;align-items:center;gap:8px;min-width:0}.mode-label{color:var(--secondary-text-color);font-size:11px;font-weight:700}.mode-select{max-width:150px;min-height:40px;padding:0 34px 0 12px;border:1px solid color-mix(in srgb,var(--accent) 24%,var(--divider-color));border-radius:13px;background:color-mix(in srgb,var(--accent) 6%,var(--card-background-color,#fff));color:var(--primary-text-color);font:inherit;font-size:12px;font-weight:700}.power{display:flex;align-items:center;justify-content:center;gap:7px;min-width:105px;min-height:42px;padding:0 13px;border:0;border-radius:14px;background:linear-gradient(120deg,var(--accent),var(--accent2));box-shadow:0 6px 15px color-mix(in srgb,var(--accent) 23%,transparent);color:#fff;font:inherit;font-size:12px;font-weight:780;cursor:pointer;transition:filter .16s ease,transform .16s ease}.power:hover:not(:disabled){filter:brightness(1.07);transform:translateY(-1px)}.power:active:not(:disabled){transform:scale(.98)}.power:disabled{opacity:.55;cursor:wait;filter:grayscale(.6)}.power ha-icon{--mdc-icon-size:18px}.notice{margin-top:10px;color:var(--secondary-text-color);font-size:10px;line-height:1.4}.notice.error{color:var(--error-color,#c74343)}
  @container alecoair-card (max-width:480px){.shell{padding:15px}.identity{gap:9px}.icon-wrap{flex-basis:40px;width:40px;height:40px;border-radius:14px}.icon-wrap ha-icon{--mdc-icon-size:22px}.pill{gap:5px;padding:6px 8px;font-size:10px}.humidity-grid{gap:8px;margin-top:15px}.humidity-tile{padding:11px;border-radius:15px}.tile-value{font-size:clamp(26px,8cqi,34px)}.slider-section{margin-top:13px;padding:12px}.controls{gap:7px;margin-top:11px}.power{min-width:92px;min-height:39px;padding:0 10px}}
  @container alecoair-card (max-width:360px){.shell{padding:12px}.header{gap:7px}.identity{gap:7px}.icon-wrap{flex-basis:36px;width:36px;height:36px}.title{font-size:15px}.pill{padding:5px 7px;font-size:9px}.humidity-tile{padding:9px}.tile-value{font-size:26px}.mode-wrap{gap:5px}.mode-label{font-size:10px}.mode-select{max-width:115px;min-height:37px;padding-left:8px}.power{min-width:78px;padding:0 7px;font-size:11px}}
  @media(prefers-reduced-motion:reduce){*,*:before,*:after{transition:none!important;scroll-behavior:auto!important}}
`;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

class AlecoairDehumidifierCard extends HTMLElement {
  static getStubConfig() { return { entity: "humidifier.your_dehumidifier", palette: "ocean" }; }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = {};
    this._holdTimer = undefined;
    this._holdStart = undefined;
    this._longPressTriggered = false;
    this.addEventListener("pointerdown", (event) => this._onPointerDown(event));
    this.addEventListener("pointermove", (event) => this._onPointerMove(event));
    this.addEventListener("pointerup", () => this._onPointerEnd());
    this.addEventListener("pointercancel", () => this._onPointerEnd());
    this.addEventListener("pointerleave", () => this._onPointerEnd());
    this.addEventListener("contextmenu", (event) => this._onContextMenu(event));
    this.shadowRoot.addEventListener("input", (event) => this._onInput(event));
    this.shadowRoot.addEventListener("change", (event) => this._onChange(event));
  }

  static getConfigForm() {
    return { schema: [
      { name: "entity", required: true, selector: { entity: { domain: ["humidifier"] } } },
      { name: "title", selector: { text: {} } },
      { name: "palette", selector: { select: { options: ["aurora", "ocean", "sunset", "lavender"], mode: "dropdown" } } },
    ] };
  }

  setConfig(config) {
    if (!config || typeof config !== "object" || !config.entity) throw new Error("Choose a humidifier entity for the AlecoAir Dehumidifier Card.");
    this._config = { ...config, palette: PALETTES.has(config.palette) ? config.palette : "ocean" };
    this._render();
  }

  set hass(value) {
    this._hass = value;
    const state = this._state();
    const signature = state ? JSON.stringify(state) : "missing";
    if (signature !== this._entitySignature) {
      this._entitySignature = signature;
      this._render();
    }
  }
  get hass() { return this._hass; }

  _state() { return this._hass?.states?.[this._config.entity]; }
  _formatMode(mode) { return MODE_LABELS[mode] || String(mode).replaceAll("_", " ").replace(/^./, (char) => char.toUpperCase()); }
  async _service(service, data = {}) {
    if (this._pending) return;
    if (!this._hass?.callService) {
      this._feedback = "Home Assistant is not ready.";
      this._error = true;
      this._render();
      return;
    }
    clearTimeout(this._feedbackTimer);
    this._pending = true;
    this._feedback = "Sending command…";
    this._error = false;
    this._render();
    try {
      await this._hass.callService("humidifier", service, { entity_id: this._config.entity, ...data });
      this._feedback = "Command sent";
      this._error = false;
      clearTimeout(this._feedbackTimer);
      this._feedbackTimer = setTimeout(() => { this._feedback = ""; this._render(); }, 1800);
    } catch (error) {
      this._feedback = error?.message || "Home Assistant could not send the command.";
      this._error = true;
      clearTimeout(this._feedbackTimer);
      this._feedbackTimer = setTimeout(() => { this._feedback = ""; this._error = false; this._render(); }, 5000);
    } finally {
      this._pending = false;
      this._render();
    }
  }

  _togglePower() {
    const state = this._state();
    if (!state || ["unknown", "unavailable"].includes(state.state)) return;
    return this._service(state.state === "on" ? "turn_off" : "turn_on");
  }

  _onInput(event) {
    if (event.target?.dataset?.control !== "humidity") return;
    const output = this.shadowRoot.querySelector("[data-target-value]");
    if (output) output.textContent = `${event.target.value}%`;
  }

  _onChange(event) {
    const target = event.target;
    if (target?.dataset?.control === "humidity") this._service("set_humidity", { humidity: Number(target.value) });
    if (target?.dataset?.control === "mode" && target.value) this._service("set_mode", { mode: target.value });
  }

  _onPointerDown(event) {
    if (event.button !== 0 || event.composedPath().some((node) => node instanceof HTMLElement && node.matches("button,a,input,select,textarea,ha-slider"))) return;
    this._holdStart = { x: event.clientX, y: event.clientY };
    this._holdTimer = setTimeout(() => {
      this._longPressTriggered = true;
      this.dispatchEvent(new CustomEvent("hass-more-info", { bubbles: true, composed: true, detail: { entityId: this._config.entity } }));
    }, 600);
  }

  _onPointerMove(event) {
    if (this._holdStart && Math.hypot(event.clientX - this._holdStart.x, event.clientY - this._holdStart.y) > 10) this._onPointerEnd();
  }

  _onPointerEnd() {
    if (this._holdTimer) clearTimeout(this._holdTimer);
    this._holdTimer = undefined;
    this._holdStart = undefined;
  }

  _onContextMenu(event) {
    if (!this._longPressTriggered) return;
    event.preventDefault();
    this._longPressTriggered = false;
  }

  _render() {
    const state = this._state();
    if (!this._config.entity || !this._hass || !this.shadowRoot) return;
    if (!state) {
      this.shadowRoot.innerHTML = `<style>${STYLE}</style><ha-card><div class="shell"><div class="notice">Entity not found: ${escapeHtml(this._config.entity)}</div></div></ha-card>`;
      return;
    }
    const attr = state.attributes || {};
    const active = state.state === "on";
    const unavailable = ["unknown", "unavailable"].includes(state.state);
    const min = Number.isFinite(Number(attr.min_humidity)) ? Number(attr.min_humidity) : 0;
    const max = Number.isFinite(Number(attr.max_humidity)) ? Number(attr.max_humidity) : 100;
    const step = Math.max(1, Number(attr.target_humidity_step) || 1);
    const target = Number.isFinite(Number(attr.humidity)) ? Number(attr.humidity) : min;
    const current = Number.isFinite(Number(attr.current_humidity)) ? `${Number(attr.current_humidity)}%` : "—";
    const hasTarget = attr.humidity !== undefined && attr.humidity !== null;
    const modes = (Number(attr.supported_features || 0) & 1) && Array.isArray(attr.available_modes) ? attr.available_modes : [];
    const mode = typeof attr.mode === "string" ? attr.mode : "";
    const title = this._config.title || attr.friendly_name || "AlecoAir Dehumidifier";
    const stateLabel = unavailable ? "Unavailable" : active ? "On" : "Off";
    const modeSelect = modes.length > 0 ? `<label class="mode-wrap"><span class="mode-label">Mode</span><select class="mode-select" aria-label="Operating mode" data-control="mode">${modes.map((item) => `<option value="${escapeHtml(item)}" ${item === mode ? "selected" : ""}>${escapeHtml(this._formatMode(item))}</option>`).join("")}</select></label>` : "";

    this.shadowRoot.innerHTML = `
      <style>${STYLE}</style>
      <ha-card data-palette="${this._config.palette}">
        <div class="shell">
          <header class="header">
            <div class="identity"><div class="icon-wrap"><ha-icon icon="mdi:air-humidifier"></ha-icon></div><div class="identity-copy"><div class="eyebrow">AlecoAir · D16</div><h2 class="title">${escapeHtml(title)}</h2></div></div>
            <div class="pill ${unavailable ? "unavailable" : active ? "on" : "off"}"><span class="dot"></span>${stateLabel}</div>
          </header>
          <section class="humidity-grid" aria-label="Humidity">
            <div class="humidity-tile"><div class="tile-label"><ha-icon icon="mdi:target"></ha-icon>Target</div><div class="tile-value">${hasTarget ? `${target}<small>%</small>` : "—"}</div></div>
            <div class="humidity-tile current"><div class="tile-label"><ha-icon icon="mdi:water-percent"></ha-icon>In room</div><div class="tile-value">${current === "—" ? current : `${Number(attr.current_humidity)}<small>%</small>`}</div></div>
          </section>
          ${hasTarget ? `<section class="slider-section"><div class="section-head"><span class="section-title">Target humidity</span><output class="target-value" data-target-value>${target}%</output></div><input class="range" type="range" min="${min}" max="${max}" step="${step}" value="${target}" aria-label="Target humidity" data-control="humidity" ${unavailable ? "disabled" : ""}><div class="range-limits"><span>${min}%</span><span>${max}%</span></div></section>` : ""}
          <div class="controls">${modeSelect}<button class="power" type="button" data-action="power" aria-label="${active ? "Turn off" : "Turn on"} ${escapeHtml(title)}" ${unavailable || this._pending ? "disabled" : ""}><ha-icon icon="mdi:power"></ha-icon><span>${this._pending ? "Sending…" : active ? "Turn off" : "Turn on"}</span></button></div>
          ${this._feedback ? `<p class="notice ${this._error ? "error" : ""}" role="status">${escapeHtml(this._feedback)}</p>` : ""}
          ${modes.length === 0 && attr.available_modes ? `<p class="notice">No operating modes are available for this entity.</p>` : ""}
        </div>
      </ha-card>`;
    this.shadowRoot.querySelector('[data-action="power"]')?.addEventListener("click", () => this._togglePower());
  }
}

if (!customElements.get(CARD_TAG)) customElements.define(CARD_TAG, AlecoairDehumidifierCard);

window.customCards = window.customCards || [];
window.customCards.push({ type: CARD_TAG, name: "AlecoAir Dehumidifier Card", description: "Responsive AlecoAir humidifier/dehumidifier controls with live humidity and mode support." });

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="alecoair-dehumidifier-card"))window.customCards.push({type:"alecoair-dehumidifier-card",name:"AlecoAir Dehumidifier Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["lovelace-alecoair-dehumidifier-card"]={version:"1.0.2",types:["alecoair-dehumidifier-card"]};
})() } catch(error){suite.errors.push({component:"lovelace-alecoair-dehumidifier-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","lovelace-alecoair-dehumidifier-card",error);}
/* lovelace-animated-gate-card @ 1.0.9 (e42d2306314150d4adcee943cffc4d82bd07a586) */
try { (() => {
const knownTypes=["animated-gate-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["lovelace-animated-gate-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const CARD_TYPE = "animated-gate-card";
const VERSION = "1.0.9";

const GATE_ART = `<svg class="gate-art" viewBox="0 48 420 172" role="img" aria-label="Illustration of a double-leaf entrance gate">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#dff3fa"/><stop offset="1" stop-color="#f8fbf7"/></linearGradient>
    <linearGradient id="pillar" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#c2cdd1"/><stop offset=".48" stop-color="#f4f4ee"/><stop offset="1" stop-color="#a9b8bf"/></linearGradient>
    <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#405d69"/><stop offset=".5" stop-color="#1e3945"/><stop offset="1" stop-color="#102833"/></linearGradient>
    <linearGradient id="drive" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#b8c6c1"/><stop offset="1" stop-color="#738a84"/></linearGradient>
    <filter id="shadow" x="-.2" y="-.2" width="1.4" height="1.5"><feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#203c43" flood-opacity=".2"/></filter>
    <pattern id="stone" width="30" height="22" patternUnits="userSpaceOnUse"><path d="M0 21.5h30M15 0v11M0 11h30M7 11v10" fill="none" stroke="#8d9ca0" stroke-opacity=".2" stroke-width="1"/></pattern>
  </defs>
  <rect width="420" height="270" rx="26" fill="url(#sky)"/>
  <circle cx="305" cy="80" r="24" fill="#fff2c5" opacity=".8"/>
  <path d="M0 153c54-36 102-21 151-39 55-20 111-13 162 4 43 14 72 7 107-8v67H0z" fill="#c5d7c8"/>
  <path d="M0 178c77-25 143-7 215-17 83-12 145 4 205-11v56H0z" fill="#9eb7a3"/>
  <path d="M0 203h420v67H0z" fill="url(#drive)"/>
  <path d="M0 204h420" stroke="#edf1e9" stroke-width="3" opacity=".8"/>
  <path d="M162 203l-34 67M258 203l34 67" stroke="#d9e0d8" stroke-width="2" opacity=".7"/>
  <g opacity=".75" stroke="#647f71" stroke-width="4" fill="none"><path d="M0 177h63m294 0h63"/><path d="M12 165v25m17-25v25m17-25v25m17-25v25m294-25v25m17-25v25m17-25v25m17-25v25"/></g>
  <ellipse cx="210" cy="211" rx="144" ry="10" fill="#203c43" opacity=".16"/>
  <g class="gate-structure" filter="url(#shadow)">
    <g class="gate-pillar"><rect x="47" y="91" width="37" height="120" rx="3" fill="url(#pillar)"/><rect x="47" y="91" width="37" height="120" rx="3" fill="url(#stone)"/><path d="M42 91h47l-5-12H47z" fill="#e9ece6"/><path d="M42 211h47v7H42z" fill="#7b8f92"/><rect x="54" y="67" width="23" height="24" rx="3" fill="url(#pillar)"/><path d="M50 67h31l-4-9H54z" fill="#edf0ea"/></g>
    <g class="gate-pillar"><rect x="336" y="91" width="37" height="120" rx="3" fill="url(#pillar)"/><rect x="336" y="91" width="37" height="120" rx="3" fill="url(#stone)"/><path d="M331 91h47l-5-12h-37z" fill="#e9ece6"/><path d="M331 211h47v7h-47z" fill="#7b8f92"/><rect x="343" y="67" width="23" height="24" rx="3" fill="url(#pillar)"/><path d="M339 67h31l-4-9h-23z" fill="#edf0ea"/></g>
    <g class="gate-panel gate-panel-left">
      <rect x="84" y="126" width="126" height="80" rx="2" fill="url(#metal)" stroke="#102c36" stroke-width="2"/>
      <path d="M86 137h122M86 194h122" stroke="#78909a" stroke-width="3"/>
      <path d="M96 128v76m15-76v76m15-76v76m15-76v76m15-76v76m15-76v76m15-76v76" stroke="#9eb0b3" stroke-width="4"/>
      <path d="M96 128v76m15-76v76m15-76v76m15-76v76m15-76v76m15-76v76m15-76v76" stroke="#e0e6df" stroke-opacity=".18" stroke-width="1"/>
      <path d="M145 130l-7 13 8 11-8 13 8 12-7 14" fill="none" stroke="#d0a86a" stroke-width="2" opacity=".9"/>
      <circle cx="202" cy="166" r="3" fill="#e7bd74"/>
    </g>
    <g class="gate-panel gate-panel-right">
      <rect x="210" y="126" width="126" height="80" rx="2" fill="url(#metal)" stroke="#102c36" stroke-width="2"/>
      <path d="M212 137h122M212 194h122" stroke="#78909a" stroke-width="3"/>
      <path d="M225 128v76m15-76v76m15-76v76m15-76v76m15-76v76m15-76v76m15-76v76" stroke="#9eb0b3" stroke-width="4"/>
      <path d="M225 128v76m15-76v76m15-76v76m15-76v76m15-76v76m15-76v76m15-76v76" stroke="#e0e6df" stroke-opacity=".18" stroke-width="1"/>
      <path d="M279 130l7 13-8 11 8 13-8 12 7 14" fill="none" stroke="#d0a86a" stroke-width="2" opacity=".9"/>
      <circle cx="214" cy="166" r="3" fill="#e7bd74"/>
    </g>
    <path d="M84 123h252" stroke="#e5e8df" stroke-width="4" opacity=".8"/>
  </g>
  <g class="status-lamp"><circle cx="210" cy="68" r="8" fill="#fff"/><circle class="lamp-core" cx="210" cy="68" r="5" fill="#45a990"/></g>
  <path class="motion-line motion-line-a" d="M113 111h-24m218 0h24" stroke="#31a6a1" stroke-width="3" stroke-linecap="round" opacity="0"/>
  <path class="motion-line motion-line-b" d="M128 101h-13m190 0h13" stroke="#31a6a1" stroke-width="2" stroke-linecap="round" opacity="0"/>
</svg>`;

const STYLE = `
  :host{display:block;color:var(--primary-text-color)}
  ha-card{overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 55%,transparent);border-radius:var(--orbit-theme-card-radius,26px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 16px 44px rgba(18,40,59,.11)))}
  .shell{padding:clamp(12px,2vw,18px);background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 15% 100%,color-mix(in srgb,var(--primary-color) 8%,transparent),transparent 48%))}
  .head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:10px}.brand{display:flex;align-items:center;gap:10px;min-width:0}.mark{display:grid;place-items:center;width:34px;height:34px;border-radius:11px;background:color-mix(in srgb,var(--primary-color) 12%,transparent);color:var(--primary-color);font-size:18px}.eyebrow{color:var(--orbit-theme-accent,var(--secondary-text-color));font-size:9px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}.title{margin:2px 0 0;overflow:hidden;font-size:clamp(16px,2.2vw,20px);letter-spacing:-.035em;text-overflow:ellipsis;white-space:nowrap}
  .pill{display:flex;align-items:center;gap:8px;padding:8px 11px;border-radius:999px;background:var(--secondary-background-color);color:var(--secondary-text-color);font-size:11px;font-weight:750;white-space:nowrap}.dot{width:8px;height:8px;border-radius:50%;background:currentColor}.pill.open,.pill.opening{color:var(--success-color,#218a72)}.pill.closing{color:var(--warning-color,#b57500)}.pill.unavailable{color:var(--error-color,#d34444)}.pill.opening .dot,.pill.closing .dot{animation:dot-pulse 1s ease-in-out infinite}
  .scene{position:relative;display:grid;place-items:center;height:158px;overflow:hidden;border-radius:20px;background:#e9f3ef}.gate-art{display:block;width:min(100%,420px);height:100%;object-fit:contain}.gate-panel{transform-box:fill-box;backface-visibility:hidden}.gate-panel-left{transform-origin:left center}.gate-panel-right{transform-origin:right center}.scene.open .gate-panel-left{transform:perspective(620px) rotateY(-68deg)}.scene.open .gate-panel-right{transform:perspective(620px) rotateY(68deg)}
  .scene.opening .gate-panel-left{animation:swing-open-left 2.4s cubic-bezier(.2,.72,.26,1) both}.scene.opening .gate-panel-right{animation:swing-open-right 2.4s cubic-bezier(.2,.72,.26,1) both}.scene.closing .gate-panel-left{animation:swing-close-left 2.1s cubic-bezier(.5,0,.7,.3) both}.scene.closing .gate-panel-right{animation:swing-close-right 2.1s cubic-bezier(.5,0,.7,.3) both}
  .scene.opening .motion-line,.scene.closing .motion-line{opacity:.82;animation:motion-dash .8s ease-in-out infinite alternate}.scene.opening .motion-line-b,.scene.closing .motion-line-b{animation-delay:-.4s}.scene.opening .lamp-core{fill:#42b8df;animation:lamp-pulse .7s ease-in-out infinite alternate}.scene.closing .lamp-core{fill:#efaa4a;animation:lamp-pulse .45s ease-in-out infinite alternate}.scene.open .lamp-core{fill:#65c19a}.scene.closed .lamp-core{fill:#809198}
  .status{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:10px}.status-copy{min-width:0}.state-label{font-size:clamp(20px,3.2vw,28px);line-height:1.05;letter-spacing:-.05em;font-weight:790}.sub-label{margin-top:3px;color:var(--secondary-text-color);font-size:11px}.position{flex:0 0 auto;text-align:right}.position-value{font-size:18px;font-weight:780;font-variant-numeric:tabular-nums}.position-caption{display:block;margin-top:2px;color:var(--secondary-text-color);font-size:9px;text-transform:uppercase;letter-spacing:.08em}.track{height:5px;margin-top:9px;overflow:hidden;border-radius:99px;background:var(--secondary-background-color)}.bar{height:100%;width:var(--position);border-radius:inherit;background:linear-gradient(90deg,#43b5a1,#4385c8);transition:width .8s ease}
  .action-error,.action-notice{margin-top:7px;font-size:11px}.action-error{color:var(--error-color,#d34444)}.action-notice{color:var(--success-color,#218a72)}
  .controls{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px;margin-top:10px}.control-btn{display:flex;align-items:center;justify-content:center;gap:7px;min-width:0;min-height:40px;padding:0 8px;border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:12px;font-weight:760;cursor:pointer;transition:transform .16s ease,box-shadow .16s ease,border-color .16s ease,background-color .16s ease}.control-btn:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}.control-btn .icon{font-size:16px;line-height:1}.control-btn.open{color:var(--success-color,#218a72)}.control-btn.close{color:var(--warning-color,#a06a00)}.control-btn.stop{color:var(--error-color,#d34444)}.control-btn:disabled{opacity:.43;cursor:not-allowed}.control-btn:not(:disabled):active{transform:translateY(0) scale(.98)}
  @media(hover:hover) and (pointer:fine){.control-btn:not(:disabled):hover{transform:translateY(-2px);border-color:currentColor;background:color-mix(in srgb,currentColor 7%,var(--card-background-color,#fff));box-shadow:0 5px 12px color-mix(in srgb,currentColor 16%,transparent)}}
  @keyframes swing-open-left{0%{transform:perspective(620px) rotateY(0)}68%{transform:perspective(620px) rotateY(-76deg)}100%{transform:perspective(620px) rotateY(-68deg)}}@keyframes swing-open-right{0%{transform:perspective(620px) rotateY(0)}68%{transform:perspective(620px) rotateY(76deg)}100%{transform:perspective(620px) rotateY(68deg)}}@keyframes swing-close-left{0%{transform:perspective(620px) rotateY(-68deg)}55%{transform:perspective(620px) rotateY(-4deg)}100%{transform:perspective(620px) rotateY(0)}}@keyframes swing-close-right{0%{transform:perspective(620px) rotateY(68deg)}55%{transform:perspective(620px) rotateY(4deg)}100%{transform:perspective(620px) rotateY(0)}}@keyframes motion-dash{from{opacity:.15;transform:translateX(0)}to{opacity:1;transform:translateX(5px)}}@keyframes lamp-pulse{to{opacity:.48;transform:scale(.72)}}@keyframes dot-pulse{50%{opacity:.38}}
  @media(max-width:480px){.shell{padding:12px}.head{gap:8px}.pill{padding:6px 8px;font-size:10px}.mark{width:32px;height:32px;border-radius:10px}.scene{height:120px;border-radius:16px}.gate-art{width:100%}.control-btn{gap:5px;padding:0 5px;font-size:11px}}
  @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}.scene.opening .gate-panel-left{transform:perspective(620px) rotateY(-68deg)}.scene.opening .gate-panel-right{transform:perspective(620px) rotateY(68deg)}.scene.closing .gate-panel-left,.scene.closing .gate-panel-right{transform:none}}
`;

const CONFIG_LABELS = { entity: "Gate cover entity", title: "Card title" };
const SCHEMA = [
  { name: "entity", required: true, selector: { entity: { domain: "cover" } } },
  { name: "title", selector: { text: {} } },
];

class AnimatedGateCard extends HTMLElement {
  constructor() {
    super();
  }

  static getConfigForm() {
    return { schema: SCHEMA, computeLabel: (field) => CONFIG_LABELS[field.name] };
  }

  static getStubConfig() { return { entity: "cover.example_gate", title: "Entrance gate" }; }

  setConfig(config) {
    if (!config || typeof config !== "object" || !config.entity) throw new Error("Choose a cover entity for the animated gate card.");
    const entityChanged = this._config?.entity !== config.entity;
    this._config = { ...config };
    if (entityChanged) {
      this._entitySignature = undefined;
      this._lastEntityState = undefined;
      this._motionIntent = "";
      this._actionMessage = "";
      this._actionError = "";
    }
    if (!this._root) {
      this._root = this.attachShadow({ mode: "open" });
    }
    this.render();
  }

  set hass(hass) {
    const entity = this._config ? hass.states?.[this._config.entity] : undefined;
    const nextState = String(entity?.state || "unavailable").toLowerCase();
    const nextSignature = entity ? JSON.stringify([entity.state, entity.attributes]) : "unavailable";
    const previousMotionIntent = this._motionIntent;
    if (this._motionIntent) {
      const targetState = this._motionIntent === "open" ? "open" : "closed";
      const oppositeMotion = this._motionIntent === "open" ? "closing" : "opening";
      if (nextState === targetState || nextState === "unavailable" || nextState === "unknown" || nextState === oppositeMotion) {
        this._motionIntent = "";
      }
    }
    if (this._lastEntityState !== undefined && this._lastEntityState !== nextState) this._actionMessage = "";
    this._lastEntityState = nextState;
    this._hass = hass;
    const entityChanged = nextSignature !== this._entitySignature;
    this._entitySignature = nextSignature;
    if (entityChanged || previousMotionIntent !== this._motionIntent) this.render();
  }
  getCardSize() { return 4; }
  getGridOptions() { return { rows: 4, columns: 6, min_rows: 3, max_rows: 6 }; }

  escape(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }

  render() {
    if (!this._root || !this._config || !this._hass) return;
    const entity = this._hass.states?.[this._config.entity];
    const rawState = entity?.state ?? "unavailable";
    const reportedState = String(rawState).toLowerCase();
    const state = this._motionIntent === "open" ? "opening"
      : this._motionIntent === "close" ? "closing"
      : reportedState;
    const stateInfo = {
      open: ["Open", "open", "Gate is fully open"],
      opening: ["Opening", "opening", "Gate is opening"],
      closed: ["Closed", "closed", "Gate is fully closed"],
      closing: ["Closing", "closing", "Gate is closing"],
      unavailable: ["Unavailable", "unavailable", "Gate status is unavailable"],
      unknown: ["Unknown", "unavailable", "Gate status is unknown"],
    }[state] || [this.escape(rawState), "unavailable", "Gate status" ];
    const title = this._config.title || entity?.attributes?.friendly_name || "Entrance gate";
    const rawServiceFeatures = entity?.attributes?.supported_features;
    const serviceFeatures = Number(rawServiceFeatures);
    const hasFeatureInfo = rawServiceFeatures !== undefined && rawServiceFeatures !== null && Number.isFinite(serviceFeatures);
    const canOpen = hasFeatureInfo ? Boolean(serviceFeatures & 1) : true;
    const canClose = hasFeatureInfo ? Boolean(serviceFeatures & 2) : true;
    const canStop = hasFeatureInfo ? Boolean(serviceFeatures & 8) : true;
    const busy = Boolean(this._busyAction);
    const attrPosition = entity?.attributes?.current_position;
    const position = attrPosition !== undefined && attrPosition !== null && Number.isFinite(Number(attrPosition)) ? Math.max(0, Math.min(100, Number(attrPosition))) : null;
    const visualState = ["open", "opening", "closing", "closed"].includes(state) ? state : "closed";
    const progress = position === null ? (state === "open" ? 100 : state === "closed" ? 0 : 0) : position;
    const positionMarkup = position === null ? "" : `<div class="position"><span class="position-value">${Math.round(position)}%</span><span class="position-caption">Open</span></div>`;
    const statusMessage = position === null ? stateInfo[2] : `${stateInfo[2]} · ${Math.round(position)}% open`;

    this._root.innerHTML = `<style>${STYLE}</style><ha-card><div class="shell">
      <header class="head"><div class="brand"><div class="mark" aria-hidden="true">⌂</div><div style="min-width:0"><div class="eyebrow">Home Assistant · Cover</div><h2 class="title">${this.escape(title)}</h2></div></div><div class="pill ${stateInfo[1]}"><span class="dot"></span>${stateInfo[0]}</div></header>
      <div class="scene ${visualState}">${GATE_ART}</div>
      <section class="status"><div class="status-copy"><div class="state-label">${stateInfo[0]}</div><div class="sub-label">${this.escape(statusMessage)}</div></div>${positionMarkup}</section>
      ${position !== null ? `<div class="track" aria-label="Gate opening position"><div class="bar" style="--position:${progress}%"></div></div>` : ""}
      <section class="controls" aria-label="Gate controls">
        <button class="control-btn open" data-action="open" ${!entity || !canOpen || busy || !["closed", "closing"].includes(state) ? "disabled" : ""}><span class="icon" aria-hidden="true">↗</span><span>${busy && this._busyAction === "open" ? "Sending…" : "Open"}</span></button>
        <button class="control-btn close" data-action="close" ${!entity || !canClose || busy || !["open", "opening"].includes(state) ? "disabled" : ""}><span class="icon" aria-hidden="true">↘</span><span>${busy && this._busyAction === "close" ? "Sending…" : "Close"}</span></button>
        <button class="control-btn stop" data-action="stop" ${!entity || !canStop || busy ? "disabled" : ""}><span class="icon" aria-hidden="true">■</span><span>${busy && this._busyAction === "stop" ? "Sending…" : "Stop"}</span></button>
      </section>
      ${this._actionError ? `<div class="action-error" role="status">${this.escape(this._actionError)}</div>` : this._actionMessage ? `<div class="action-notice" role="status">${this.escape(this._actionMessage)}</div>` : ""}
    </div></ha-card>`;

    // Bind at the button itself so Home Assistant's dashboard event handling
    // cannot swallow a click before it reaches a delegated shadow-root handler.
    for (const button of this._root.querySelectorAll("button[data-action]")) {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        void this.performAction(button.dataset.action);
      });
    }
  }

  async performAction(action) {
    if (!this._hass || this._busyAction) return;
    const serviceByAction = { open: "open_cover", close: "close_cover", stop: "stop_cover" };
    const service = serviceByAction[action];
    if (!service || !this._config.entity) return;
    const entity = this._hass.states?.[this._config.entity];
    const reportedState = String(entity?.state || "").toLowerCase();
    const state = this._motionIntent === "open" ? "opening"
      : this._motionIntent === "close" ? "closing"
      : reportedState;
    const rawFeatures = entity?.attributes?.supported_features;
    const features = Number(rawFeatures);
    const hasFeatureInfo = rawFeatures !== undefined && rawFeatures !== null && Number.isFinite(features);
    const supported = action === "open" ? (!hasFeatureInfo || Boolean(features & 1))
      : action === "close" ? (!hasFeatureInfo || Boolean(features & 2))
      : (hasFeatureInfo ? Boolean(features & 8) : true);
    const allowedState = action === "open" ? ["closed", "closing"].includes(state)
      : action === "close" ? ["open", "opening"].includes(state)
      : true;
    if (!supported) {
      this._actionError = `This cover does not support the ${action} command.`;
      this.render();
      return;
    }
    if (!allowedState) {
      this._actionError = `Cannot ${action} the gate while it is ${state || "unavailable"}.`;
      this.render();
      return;
    }
    this._busyAction = action;
    this._motionIntent = action === "open" || action === "close" ? action : "";
    this._actionError = "";
    this._actionMessage = "";
    this.render();
    try {
      await this._hass.callService("cover", service, { entity_id: this._config.entity });
      this._actionMessage = `${action[0].toUpperCase()}${action.slice(1)} command accepted by Home Assistant.`;
    } catch (error) {
      this._motionIntent = "";
      this._actionError = `Could not ${action} the gate. Check Home Assistant.`;
    } finally {
      this._busyAction = "";
      this.render();
    }
  }
}

if (!customElements.get(CARD_TYPE)) customElements.define(CARD_TYPE, AnimatedGateCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === CARD_TYPE)) {
  window.customCards.push({ type: CARD_TYPE, name: "Animated Gate Card", description: "A responsive, animated gate card with Home Assistant controls", preview: true, version: VERSION, documentationURL: "https://github.com/Liionboy/lovelace-animated-gate-card" });
}

console.info(`%c ANIMATED GATE CARD %c ${VERSION} `, "color:#fff;background:#0875c9;font-weight:700", "color:#0875c9;background:#fff;font-weight:700");

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="animated-gate-card"))window.customCards.push({type:"animated-gate-card",name:"Animated Gate Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["lovelace-animated-gate-card"]={version:"1.0.9",types:["animated-gate-card"]};
})() } catch(error){suite.errors.push({component:"lovelace-animated-gate-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","lovelace-animated-gate-card",error);}
/* lovelace-climate-control-card @ 1.3.3 (26d808b6c16cf0e81966dc3ad78a6836771b8aa3) */
try { (() => {
const knownTypes=["climate-control-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["lovelace-climate-control-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const CARD_TYPE = "climate-control-card";
const VERSION = "1.3.2";

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:var(--orbit-theme-card-radius,24px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1)))}
  .shell{--glow:var(--primary-color);padding:clamp(16px,3vw,22px);background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 8% 0%,color-mix(in srgb,var(--glow) 11%,transparent),transparent 48%))}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px}.identity{display:flex;align-items:center;gap:12px;min-width:0}.icon-wrap{display:grid;place-items:center;width:44px;height:44px;flex:none;border:1px solid color-mix(in srgb,var(--glow) 22%,transparent);border-radius:15px;background:color-mix(in srgb,var(--glow) 12%,var(--card-background-color,#fff));color:var(--glow)}.icon-wrap ha-icon{--mdc-icon-size:24px}.identity-copy{min-width:0}.eyebrow{color:var(--orbit-theme-accent,var(--secondary-text-color));font-size:9px;font-weight:800;letter-spacing:.15em;text-transform:uppercase}.title{margin:3px 0 0;overflow:hidden;font-size:clamp(17px,2.5vw,21px);font-weight:770;letter-spacing:-.035em;text-overflow:ellipsis;white-space:nowrap}.pill{display:flex;align-items:center;gap:7px;padding:7px 10px;border-radius:999px;background:var(--secondary-background-color);color:var(--secondary-text-color);font-size:11px;font-weight:750;white-space:nowrap}.dot{width:7px;height:7px;border-radius:50%;background:currentColor}.pill.active{color:var(--success-color,#23876e)}.pill.idle{color:var(--secondary-text-color)}.pill.heating{color:var(--error-color,#df7044)}.pill.unavailable{color:var(--error-color,#c74343)}
  .temperatures{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:20px}.temperature{min-width:0;padding:15px;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:18px;background:color-mix(in srgb,var(--card-background-color,#fff) 86%,var(--secondary-background-color))}.temperature-label{color:var(--secondary-text-color);font-size:10px;font-weight:750;letter-spacing:.1em;text-transform:uppercase}.temperature-value{display:flex;align-items:baseline;gap:3px;margin-top:5px;font-size:clamp(29px,6vw,40px);font-weight:820;letter-spacing:-.065em;line-height:1}.unit{font-size:15px;font-weight:650;letter-spacing:0}.temperature-hint{margin-top:7px;color:var(--secondary-text-color);font-size:11px}.target-row{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:13px}.stepper{display:flex;align-items:center;gap:8px}.step-button{display:grid;place-items:center;width:38px;height:38px;border:1px solid var(--divider-color);border-radius:13px;background:var(--card-background-color,#fff);color:var(--primary-text-color);cursor:pointer;transition:transform .15s ease,border-color .15s ease}.step-button ha-icon{--mdc-icon-size:19px}.step-button:hover:not(:disabled){border-color:var(--glow);transform:translateY(-1px)}.step-button:disabled{opacity:.45;cursor:not-allowed}.step-label{color:var(--secondary-text-color);font-size:11px}
  .compact-control{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:15px}.feedback{min-width:0;min-height:16px;color:var(--secondary-text-color);font-size:11px;line-height:1.4}.feedback.error{color:var(--error-color,#c74343)}.actions{display:flex;align-items:center;gap:9px}.power{display:flex;align-items:center;justify-content:center;gap:8px;min-width:112px;min-height:42px;padding:0 15px;border:0;border-radius:14px;background:var(--glow);color:var(--text-primary-color,#fff);font:inherit;font-size:12px;font-weight:780;cursor:pointer;transition:filter .15s ease,transform .15s ease}.power:hover:not(:disabled){filter:brightness(1.06);transform:translateY(-1px)}.power.off{border:1px solid var(--divider-color);background:var(--card-background-color,#fff);color:var(--primary-text-color)}.power ha-icon{--mdc-icon-size:18px}.power:disabled{opacity:.55;cursor:wait}.controls-toggle{min-height:42px;padding:0 12px;border:1px solid var(--divider-color);border-radius:14px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:12px;font-weight:740;cursor:pointer;transition:background .15s ease,border-color .15s ease}.controls-toggle:hover{border-color:var(--glow);background:color-mix(in srgb,var(--glow) 7%,var(--card-background-color,#fff))}
  .settings{margin-top:16px;padding-top:15px;border-top:1px solid color-mix(in srgb,var(--divider-color) 72%,transparent)}.settings-title{margin:0 0 11px;font-size:12px;font-weight:760}.setting{margin-top:12px}.setting-label{display:block;margin-bottom:7px;color:var(--secondary-text-color);font-size:10px;font-weight:750;letter-spacing:.08em;text-transform:uppercase}.select-wrap{position:relative}.select{width:100%;min-height:43px;padding:0 38px 0 13px;border:1px solid var(--divider-color);border-radius:13px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:13px;font-weight:650;appearance:none}.select-wrap:after{position:absolute;top:50%;right:14px;color:var(--secondary-text-color);content:'⌄';pointer-events:none;transform:translateY(-60%)}
  .shell{position:relative;background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 0% 0%,color-mix(in srgb,var(--glow) 17%,transparent),transparent 52%),radial-gradient(ellipse at 100% 100%,color-mix(in srgb,#38bdf8 9%,transparent),transparent 48%))}.shell:before{position:absolute;top:0;right:22px;left:22px;height:3px;border-radius:0 0 4px 4px;background:var(--orbit-theme-strip-background,linear-gradient(90deg,#38bdf8,var(--glow),#c084fc));content:""}
  .icon-wrap{border-color:color-mix(in srgb,var(--glow) 35%,transparent);background:linear-gradient(145deg,color-mix(in srgb,var(--glow) 90%,white),color-mix(in srgb,var(--glow) 68%,#7c3aed));box-shadow:0 7px 18px color-mix(in srgb,var(--glow) 22%,transparent);color:#fff}.eyebrow{color:var(--orbit-theme-accent,var(--glow))}.pill{border:1px solid color-mix(in srgb,currentColor 12%,transparent);background:color-mix(in srgb,currentColor 8%,var(--card-background-color,#fff))}.dot{box-shadow:0 0 0 3px color-mix(in srgb,currentColor 17%,transparent)}.pill.active{color:#0f9b78}.pill.idle{color:var(--secondary-text-color)}.pill.heating{color:#e45d31}.pill.cooling{color:#2588d8}
  .temperature:first-child{border-color:color-mix(in srgb,#0ea5e9 22%,var(--divider-color));background:linear-gradient(145deg,color-mix(in srgb,#38bdf8 12%,var(--card-background-color,#fff)),var(--card-background-color,#fff) 76%)}.temperature:nth-child(2){border-color:color-mix(in srgb,var(--glow) 26%,var(--divider-color));background:linear-gradient(145deg,color-mix(in srgb,var(--glow) 13%,var(--card-background-color,#fff)),var(--card-background-color,#fff) 76%)}.temperature:first-child .temperature-label,.temperature:first-child .temperature-value{color:#138ab5}.temperature:nth-child(2) .temperature-label,.temperature:nth-child(2) .temperature-value{color:var(--glow)}
  .step-button{border-color:color-mix(in srgb,var(--glow) 24%,var(--divider-color));background:color-mix(in srgb,var(--glow) 7%,var(--card-background-color,#fff));color:var(--glow)}.step-button:hover:not(:disabled){background:color-mix(in srgb,var(--glow) 17%,var(--card-background-color,#fff))}.power{background:linear-gradient(135deg,var(--glow),color-mix(in srgb,var(--glow) 72%,#7c3aed));box-shadow:0 6px 15px color-mix(in srgb,var(--glow) 24%,transparent);color:#fff}.power.off{border-color:color-mix(in srgb,#38bdf8 30%,var(--divider-color));background:linear-gradient(135deg,#e0f2fe,#ede9fe);box-shadow:none;color:#37577f}.controls-toggle{border-color:color-mix(in srgb,var(--glow) 25%,var(--divider-color));background:color-mix(in srgb,var(--glow) 7%,var(--card-background-color,#fff));color:var(--glow)}.controls-toggle:hover{background:color-mix(in srgb,var(--glow) 14%,var(--card-background-color,#fff))}.settings{padding:15px;border:1px solid color-mix(in srgb,var(--glow) 20%,var(--divider-color));border-radius:17px;background:linear-gradient(145deg,color-mix(in srgb,var(--glow) 6%,var(--card-background-color,#fff)),var(--card-background-color,#fff) 75%)}.settings-title{color:var(--glow)}.select{border-color:color-mix(in srgb,var(--glow) 20%,var(--divider-color))}.select-wrap:after{color:var(--glow)}
  @container card (max-width: 480px){.shell{padding:14px}.header{gap:8px}.identity{gap:9px}.icon-wrap{width:38px;height:38px;border-radius:13px}.icon-wrap ha-icon{--mdc-icon-size:21px}.title{font-size:16px}.pill{gap:5px;padding:6px 8px;font-size:10px}.temperatures{gap:8px;margin-top:15px}.temperature{padding:11px;border-radius:15px}.temperature-value{font-size:clamp(25px,7vw,32px)}.temperature-hint{font-size:10px}.target-row{margin-top:10px}.step-button{width:35px;height:35px}.compact-control{gap:8px;margin-top:12px}.actions{gap:6px}.power{min-width:90px;min-height:38px;padding:0 9px}.controls-toggle{min-height:38px;padding:0 9px}.settings{margin-top:13px;padding:12px}}
  @container card (max-width: 380px){.shell{padding:12px}.icon-wrap{width:36px;height:36px}.temperature{padding:9px}.temperature-value{font-size:25px}.actions{gap:5px}.power{min-width:82px;padding:0 7px}.controls-toggle{padding:0 7px}}
  @media(prefers-reduced-motion:reduce){*,*::before,*::after{transition:none!important;scroll-behavior:auto!important}}
`;

const SCHEMA = [
  { name: "entity", required: true, selector: { entity: { domain: ["climate"] } } },
  { name: "title", selector: { text: {} } },
];
const LABELS = { entity: "Climate entity", title: "Card title" };
const MODE_LABELS = { off: "Off", heat: "Heat", cool: "Cool", heat_cool: "Heat / cool", auto: "Auto", dry: "Dry", fan_only: "Fan only" };
const PRESET_LABELS = { none: "None", eco: "Eco", away: "Away", boost: "Boost", comfort: "Comfort", home: "Home", sleep: "Sleep", activity: "Activity" };
const ACTION_LABELS = { off: "Off", heating: "Heating", cooling: "Cooling", idle: "Idle", drying: "Drying", fan: "Fan", preheating: "Preheating", defrosting: "Defrosting" };

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function attachMoreInfoHold(root, host, getEntityId) {
  let timer;
  let start;
  let lastOpenedAt = 0;
  const interactive = (event) => event.composedPath().some((node) => node instanceof HTMLElement && node.matches("button,input,select,textarea,a,[role='button'],[contenteditable='true']"));
  const open = (entityId) => {
    if (!entityId) return;
    lastOpenedAt = Date.now();
    host.dispatchEvent(new CustomEvent("hass-more-info", { bubbles: true, composed: true, detail: { entityId } }));
  };
  const cancel = () => { clearTimeout(timer); timer = undefined; start = undefined; };
  root.addEventListener("pointerdown", (event) => {
    cancel();
    if (event.button !== 0 || interactive(event)) return;
    const entityId = getEntityId(event);
    if (!entityId) return;
    start = { x: event.clientX, y: event.clientY };
    timer = window.setTimeout(() => { timer = undefined; open(entityId); }, 550);
  });
  root.addEventListener("pointermove", (event) => {
    if (start && Math.hypot(event.clientX - start.x, event.clientY - start.y) > 12) cancel();
  });
  ["pointerup", "pointercancel"].forEach((type) => root.addEventListener(type, cancel));
  root.addEventListener("pointerout", (event) => {
    if (!(event.relatedTarget instanceof Node) || !root.contains(event.relatedTarget)) cancel();
  });
  root.addEventListener("contextmenu", (event) => {
    if (interactive(event)) return;
    event.preventDefault();
    cancel();
    if (Date.now() - lastOpenedAt > 750) open(getEntityId(event));
  });
}

function humanize(value, labels = {}) {
  return labels[value] || String(value ?? "").replaceAll("_", " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function asFinite(value, fallback = null) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

class ClimateControlCard extends HTMLElement {
  static getConfigForm() {
    return { schema: SCHEMA, computeLabel: (field) => LABELS[field.name] || field.name };
  }

  static getStubConfig() { return { entity: "climate.example" }; }

  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("Provide a valid Climate Control Card configuration.");
    if (!config.entity) throw new Error("Choose a climate entity for the Climate Control Card.");
    this._config = { ...config };
    this._root ??= this.attachShadow({ mode: "open" });
    if (!this._listenersAttached) {
      attachMoreInfoHold(this._root, this, () => this._config?.entity);
      this._listenersAttached = true;
    }
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    const entity = this.entity;
    const signature = entity ? JSON.stringify(entity) : "missing";
    if (signature !== this._entitySignature) {
      this._entitySignature = signature;
      this.render();
    }
  }

  getCardSize() { return 3; }
  getGridOptions() { return { rows: 3, columns: 6, min_rows: 2, max_rows: 5 }; }
  get entity() { return this._hass?.states?.[this._config?.entity]; }
  get attrs() { return this.entity?.attributes || {}; }
  get modes() { return Array.isArray(this.attrs.hvac_modes) ? this.attrs.hvac_modes : []; }
  get presets() { return Array.isArray(this.attrs.preset_modes) ? this.attrs.preset_modes : []; }
  get unavailable() { return !this.entity || ["unknown", "unavailable"].includes(String(this.entity.state).toLowerCase()); }
  get isOff() { return this.entity?.state === "off"; }
  get temperatureUnit() { return this.attrs.temperature_unit || "°"; }
  get target() { return asFinite(this.attrs.temperature); }
  get current() { return asFinite(this.attrs.current_temperature); }
  get min() { return asFinite(this.attrs.min_temp, 5); }
  get max() { return asFinite(this.attrs.max_temp, 35); }
  get step() { return Math.max(0.1, asFinite(this.attrs.target_temp_step, 0.5)); }

  title() { return this._config.title || this.attrs.friendly_name || this._config.entity; }
  activeMode() { return String(this.entity?.state || "unknown"); }
  icon() { return this.attrs.icon || (this.attrs.hvac_action === "heating" ? "mdi:radiator" : "mdi:thermostat"); }
  formatTemperature(value) {
    if (value === null) return "—";
    const decimals = this.step < 1 ? 1 : 0;
    return Number(value).toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  }

  render() {
    if (!this._root || !this._config || !this._hass) return;
    if (this._config.entity?.split(".")[0] !== "climate") {
      this._root.innerHTML = `<style>${STYLE}</style><ha-card><div class="shell"><strong>Climate Control Card</strong><p>Select a climate entity.</p></div></ha-card>`;
      return;
    }
    const state = this.unavailable ? "Unavailable" : humanize(this.activeMode(), MODE_LABELS);
    const action = String(this.attrs.hvac_action || "");
    const pillClass = this.unavailable ? "unavailable" : action === "heating" ? "heating" : action === "cooling" ? "cooling" : action === "idle" ? "idle" : this.isOff ? "" : "active";
    const stateText = this.unavailable ? state : (action ? humanize(action, ACTION_LABELS) : state);
    const glow = this.unavailable ? "#8290a5" : action === "heating" ? "#ef5a32" : action === "cooling" || this.activeMode() === "cool" ? "#278ad5" : this.isOff ? "#647fe0" : action === "idle" ? "#8190a5" : this.activeMode() === "heat" ? "#e58b22" : "#9a6cda";
    const header = `<header class="header"><div class="identity"><div class="icon-wrap"><ha-icon icon="${escapeHtml(this.icon())}"></ha-icon></div><div class="identity-copy"><div class="eyebrow">Home Assistant · Climate</div><h2 class="title">${escapeHtml(this.title())}</h2></div></div><div class="pill ${pillClass}"><span class="dot"></span>${escapeHtml(stateText)}</div></header>`;
    const disabled = this.unavailable ? "disabled" : "";
    const current = `<div class="temperature"><div class="temperature-label">Current</div><div class="temperature-value">${this.formatTemperature(this.current)}<span class="unit">${escapeHtml(this.temperatureUnit)}</span></div><div class="temperature-hint">${this.unavailable ? "Entity unavailable" : escapeHtml(action ? humanize(action, ACTION_LABELS) : "Room temperature")}</div></div>`;
    const target = `<div class="temperature"><div class="temperature-label">Target</div><div class="temperature-value">${this.formatTemperature(this.target)}<span class="unit">${escapeHtml(this.temperatureUnit)}</span></div><div class="temperature-hint">${this.target === null ? "No target reported" : `Setpoint · ${this.formatTemperature(this.min)}–${this.formatTemperature(this.max)}${escapeHtml(this.temperatureUnit)}`}</div></div>`;
    const canAdjust = !this.unavailable && !this.isOff && this.target !== null;
    const stepper = this.target !== null ? `<div class="target-row"><span class="step-label">Adjust target</span><div class="stepper"><button class="step-button" data-step="-1" ${!canAdjust || this.target <= this.min ? "disabled" : ""} aria-label="Decrease target temperature"><ha-icon icon="mdi:minus"></ha-icon></button><button class="step-button" data-step="1" ${!canAdjust || this.target >= this.max ? "disabled" : ""} aria-label="Increase target temperature"><ha-icon icon="mdi:plus"></ha-icon></button></div></div>` : "";
    const powerLabel = this.isOff ? "Turn on" : "Turn off";
    const power = `<button class="power ${this.isOff ? "off" : ""}" data-action="power" ${disabled || this._pending ? "disabled" : ""}><ha-icon icon="mdi:power"></ha-icon>${this._pending ? "Sending…" : powerLabel}</button>`;
    const hasSettings = this.modes.length > 0 || this.presets.length > 0;
    const toggle = hasSettings ? `<button class="controls-toggle" data-action="toggle-controls" aria-expanded="${Boolean(this._showControls)}">${this._showControls ? "Hide controls" : "Adjust controls"}</button>` : "";
    let settings = "";
    if (this._showControls && hasSettings) {
      const modeOptions = this.modes.map((mode) => `<option value="${escapeHtml(mode)}" ${mode === this.activeMode() ? "selected" : ""}>${escapeHtml(humanize(mode, MODE_LABELS))}</option>`).join("");
      const presetOptions = this.presets.map((preset) => `<option value="${escapeHtml(preset)}" ${preset === this.attrs.preset_mode ? "selected" : ""}>${escapeHtml(humanize(preset, PRESET_LABELS))}</option>`).join("");
      settings = `<section class="settings"><h3 class="settings-title">Climate settings</h3>${this.modes.length ? `<div class="setting"><label class="setting-label" for="hvac-mode">Operating mode</label><div class="select-wrap"><select class="select" id="hvac-mode" data-control="mode" ${disabled}>${modeOptions}</select></div></div>` : ""}${this.presets.length ? `<div class="setting"><label class="setting-label" for="preset-mode">Preset</label><div class="select-wrap"><select class="select" id="preset-mode" data-control="preset" ${disabled}>${presetOptions}</select></div></div>` : ""}</section>`;
    }
    const feedback = this._feedback || (this.unavailable ? "Check the entity connection." : "Ready");
    const message = `<div class="compact-control"><div class="feedback ${this._error ? "error" : ""}" role="status">${escapeHtml(feedback)}</div><div class="actions">${toggle}${power}</div></div>`;
    this._root.innerHTML = `<style>${STYLE}</style><ha-card><div class="shell" style="--glow:${glow}">${header}<div class="temperatures">${current}${target}</div>${stepper}${message}${settings}</div></ha-card>`;
    this.bindEvents();
  }

  bindEvents() {
    this._root.querySelector('[data-action="power"]')?.addEventListener("click", () => this.togglePower());
    this._root.querySelector('[data-action="toggle-controls"]')?.addEventListener("click", () => {
      this._showControls = !this._showControls;
      this.render();
    });
    this._root.querySelectorAll("[data-step]").forEach((button) => button.addEventListener("click", () => {
      const next = Math.max(this.min, Math.min(this.max, (this.target ?? this.min) + Number(button.dataset.step) * this.step));
      const rounded = Math.round(next / this.step) * this.step;
      this.call("set_temperature", { temperature: Number(rounded.toFixed(2)) });
    }));
    this._root.querySelector('[data-control="mode"]')?.addEventListener("change", (event) => this.call("set_hvac_mode", { hvac_mode: event.currentTarget.value }));
    this._root.querySelector('[data-control="preset"]')?.addEventListener("change", (event) => this.call("set_preset_mode", { preset_mode: event.currentTarget.value }));
  }

  async togglePower() {
    if (this._pending || this.unavailable) return;
    if (this.isOff) {
      const lastActiveMode = this.modes.find((mode) => mode !== "off");
      if (!lastActiveMode) return;
      return this.call("set_hvac_mode", { hvac_mode: lastActiveMode });
    }
    if (this.modes.includes("off")) return this.call("set_hvac_mode", { hvac_mode: "off" });
  }

  async call(service, data) {
    if (this._pending || !this._hass?.callService) return;
    this._pending = true;
    this._error = false;
    this._feedback = "Sending command…";
    this.render();
    try {
      await this._hass.callService("climate", service, { entity_id: this._config.entity, ...data });
      this._feedback = "Command sent";
      this._error = false;
      clearTimeout(this._feedbackTimer);
      this._feedbackTimer = setTimeout(() => { this._feedback = ""; this.render(); }, 1800);
    } catch (error) {
      this._feedback = error?.message || "Home Assistant could not send the command.";
      this._error = true;
      clearTimeout(this._feedbackTimer);
      this._feedbackTimer = setTimeout(() => { this._feedback = ""; this._error = false; this.render(); }, 5000);
    } finally {
      this._pending = false;
      this.render();
    }
  }
}

if (!customElements.get(CARD_TYPE)) customElements.define(CARD_TYPE, ClimateControlCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === CARD_TYPE)) {
  window.customCards.push({ type: CARD_TYPE, name: "Climate Control Card", description: "Compact, capability-aware controls for a Home Assistant climate entity.", preview: true, documentationURL: "https://github.com/Liionboy/lovelace-climate-control-card" });
}
console.info(`%c CLIMATE-CONTROL-CARD %c ${VERSION} `, "background:#5269d9;color:#fff;font-weight:700;", "background:transparent;color:var(--primary-text-color);font-weight:700;");

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="climate-control-card"))window.customCards.push({type:"climate-control-card",name:"Climate Control Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["lovelace-climate-control-card"]={version:"1.3.3",types:["climate-control-card"]};
})() } catch(error){suite.errors.push({component:"lovelace-climate-control-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","lovelace-climate-control-card",error);}
/* lovelace-frigate-control-card @ 1.0.0 (066b7366cd5f46a181899e073f9d9221dc407a77) */
try { (() => {
const knownTypes=["frigate-control-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["lovelace-frigate-control-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const CARD_TAG = "frigate-control-card";
const PALETTES = new Set(["aurora", "ocean", "sunset", "lavender"]);
const SENSOR_FIELDS = [
  ["objects_entity", "Objects", "mdi:shape-outline"],
  ["persons_entity", "Persons", "mdi:account-outline"],
  ["vehicles_entity", "Vehicles", "mdi:car-outline"],
];

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:frigate-card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:var(--orbit-theme-card-radius,24px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1)))}
  ha-card[data-palette="aurora"]{--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0);--accent3:var(--orbit-theme-accent-3,#54a9db)}ha-card[data-palette="ocean"]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}ha-card[data-palette="sunset"]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}ha-card[data-palette="lavender"]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}
  .shell{position:relative;padding:clamp(16px,3cqi,22px);background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 13%,transparent),transparent 54%),radial-gradient(ellipse at 100% 100%,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 48%))}.shell:before{position:absolute;top:0;right:22px;left:22px;height:3px;border-radius:0 0 4px 4px;background:var(--orbit-theme-strip-background,linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3)));content:""}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}.identity{display:flex;align-items:center;gap:12px;min-width:0}.icon-wrap{display:grid;place-items:center;flex:none;width:48px;height:48px;border:1px solid color-mix(in srgb,var(--accent) 24%,transparent);border-radius:17px;background:linear-gradient(145deg,var(--accent),var(--accent2));box-shadow:0 7px 18px color-mix(in srgb,var(--accent) 22%,transparent);color:#fff}.icon-wrap ha-icon{--mdc-icon-size:25px}.identity-copy{min-width:0}.eyebrow{color:var(--orbit-theme-accent,var(--accent));font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.title{overflow:hidden;margin:3px 0 0;font-size:clamp(16px,2.5cqi,20px);font-weight:780;letter-spacing:-.03em;text-overflow:ellipsis;white-space:nowrap}
  .pill{display:flex;align-items:center;gap:7px;padding:7px 10px;border:1px solid color-mix(in srgb,currentColor 12%,transparent);border-radius:999px;background:color-mix(in srgb,currentColor 8%,var(--card-background-color,#fff));color:var(--secondary-text-color);font-size:11px;font-weight:750;white-space:nowrap}.dot{width:7px;height:7px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 16%,transparent)}.pill.available{color:var(--success-color,#168b68)}.pill.unavailable{color:var(--error-color,#c74343)}.pill.motion{color:var(--warning-color,#d88914)}
  .camera-frame{position:relative;margin-top:17px;overflow:hidden;aspect-ratio:16/9;border:1px solid color-mix(in srgb,var(--accent) 18%,var(--divider-color));border-radius:18px;background:linear-gradient(135deg,color-mix(in srgb,var(--accent) 12%,var(--card-background-color,#fff)),var(--secondary-background-color,#f1f3f5))}.camera-open{position:absolute;inset:0;display:grid;width:100%;height:100%;place-items:center;padding:0;border:0;background:transparent;color:var(--primary-text-color);cursor:pointer}.snapshot{width:100%;height:100%;object-fit:cover}.snapshot[hidden]{display:none}.empty-preview{display:grid;place-items:center;gap:8px;color:var(--secondary-text-color);font-size:11px}.empty-preview ha-icon{--mdc-icon-size:34px;color:var(--accent)}
  .sensor-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:10px}.sensor{display:flex;align-items:center;gap:8px;min-width:0;padding:10px;border:1px solid color-mix(in srgb,var(--divider-color) 68%,transparent);border-radius:14px;background:color-mix(in srgb,var(--card-background-color,#fff) 90%,var(--accent))}.sensor ha-icon{flex:none;color:var(--accent);--mdc-icon-size:18px}.sensor-copy{min-width:0}.sensor-value{overflow:hidden;font-size:13px;font-weight:800;font-variant-numeric:tabular-nums;text-overflow:ellipsis;white-space:nowrap}.sensor-label{overflow:hidden;margin-top:2px;color:var(--secondary-text-color);font-size:9px;text-overflow:ellipsis;white-space:nowrap}.footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:10px}.motion-copy{overflow:hidden;color:var(--secondary-text-color);font-size:10px;text-overflow:ellipsis;white-space:nowrap}.hint{margin:12px 2px 0;color:var(--secondary-text-color);font-size:10px;line-height:1.4}.hint.error{color:var(--error-color,#c74343)}
  @container frigate-card (max-width:480px){.shell{padding:15px}.identity{gap:9px}.icon-wrap{width:40px;height:40px;border-radius:14px}.icon-wrap ha-icon{--mdc-icon-size:22px}.pill{gap:5px;padding:6px 8px;font-size:10px}.camera-frame{margin-top:14px;border-radius:15px}.sensor-grid{gap:6px}.sensor{gap:6px;padding:8px}}
  @container frigate-card (max-width:360px){.shell{padding:12px}.header{gap:7px}.identity{gap:7px}.icon-wrap{width:36px;height:36px}.title{font-size:15px}.pill{padding:5px 7px;font-size:9px}.sensor-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
  @media(prefers-reduced-motion:reduce){*,*:before,*:after{transition:none!important;scroll-behavior:auto!important}}
`;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function formatState(state) {
  if (!state || ["unknown", "unavailable"].includes(String(state.state).toLowerCase())) return "Unavailable";
  const raw = String(state.state);
  const number = Number(raw);
  const value = raw.trim() !== "" && Number.isFinite(number)
    ? new Intl.NumberFormat(undefined, { maximumFractionDigits: 1 }).format(number)
    : raw.replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  const unit = state.attributes?.unit_of_measurement || "";
  return `${value}${unit === "%" ? "%" : unit ? ` ${unit}` : ""}`;
}

class FrigateControlCard extends HTMLElement {
  static getStubConfig() { return { camera_entity: "camera.frigate_camera", icon: "mdi:cctv", palette: "aurora" }; }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = {};
    this.shadowRoot.addEventListener("click", (event) => {
      const button = event.composedPath().find((node) => node?.tagName === "BUTTON" && node.dataset?.action === "more-info");
      if (button) this._showMoreInfo();
    });
  }

  static getConfigForm() {
    return { schema: [
      { name: "camera_entity", required: true, selector: { entity: { domain: ["camera"] } } },
      { name: "title", selector: { text: {} } },
      { name: "icon", selector: { icon: {} } },
      { name: "palette", selector: { select: { options: ["aurora", "ocean", "sunset", "lavender"], mode: "dropdown" } } },
      { name: "motion_entity", selector: { entity: { domain: ["binary_sensor"] } } },
      { name: "objects_entity", selector: { entity: { domain: ["sensor"] } } },
      { name: "persons_entity", selector: { entity: { domain: ["sensor"] } } },
      { name: "vehicles_entity", selector: { entity: { domain: ["sensor"] } } },
    ] };
  }

  setConfig(config) {
    if (!config || typeof config !== "object" || !config.camera_entity) throw new Error("Choose a Frigate camera entity for the Frigate Control Card.");
    this._config = { ...config, palette: PALETTES.has(config.palette) ? config.palette : "aurora" };
    this._render();
  }

  set hass(value) {
    this._hass = value;
    const ids = [this._config.camera_entity, this._config.motion_entity, ...SENSOR_FIELDS.map(([key]) => this._config[key])];
    const signature = JSON.stringify(ids.map((id) => id ? value?.states?.[id] : null));
    if (signature !== this._signature) {
      this._signature = signature;
      this._render();
    }
  }
  get hass() { return this._hass; }
  getCardSize() { return 4; }

  _state(entityId) { return entityId ? this._hass?.states?.[entityId] : undefined; }
  _showMoreInfo() {
    if (!this._config.camera_entity) return;
    this.dispatchEvent(new CustomEvent("hass-more-info", { bubbles: true, composed: true, detail: { entityId: this._config.camera_entity } }));
  }

  _render() {
    if (!this._hass || !this.shadowRoot || !this._config.camera_entity) return;
    const camera = this._state(this._config.camera_entity);
    const title = this._config.title || camera?.attributes?.friendly_name || "Frigate camera";
    if (!camera) {
      this.shadowRoot.innerHTML = `<style>${STYLE}</style><ha-card data-palette="${this._config.palette}"><div class="shell"><div class="hint error">Camera entity not found: ${escapeHtml(this._config.camera_entity)}</div></div></ha-card>`;
      return;
    }

    const unavailable = ["unknown", "unavailable"].includes(String(camera.state).toLowerCase());
    const status = formatState(camera);
    const picture = camera.attributes?.entity_picture_local || camera.attributes?.entity_picture || "";
    const motion = this._state(this._config.motion_entity);
    const motionLabel = motion?.state === "on" ? "Motion detected" : motion?.state === "off" ? "No motion" : motion ? "Motion unavailable" : "";
    const sensors = SENSOR_FIELDS.filter(([key]) => this._config[key]).map(([key, label, icon]) => ({ label, icon, state: this._state(this._config[key]) }));
    const sensorHtml = sensors.length ? `<section class="sensor-grid">${sensors.map((sensor) => `<div class="sensor"><ha-icon icon="${sensor.icon}"></ha-icon><div class="sensor-copy"><div class="sensor-value">${escapeHtml(formatState(sensor.state))}</div><div class="sensor-label">${escapeHtml(sensor.label)}</div></div></div>`).join("")}</section>` : "";
    const preview = picture
      ? `<img class="snapshot" src="${escapeHtml(picture)}" alt="${escapeHtml(title)} snapshot" loading="lazy">`
      : `<span class="empty-preview"><ha-icon icon="mdi:cctv-off"></ha-icon><span>Snapshot unavailable</span></span>`;

    this.shadowRoot.innerHTML = `
      <style>${STYLE}</style>
      <ha-card data-palette="${this._config.palette}">
        <div class="shell">
          <header class="header">
            <div class="identity"><div class="icon-wrap"><ha-icon icon="${escapeHtml(this._config.icon || "mdi:cctv")}"></ha-icon></div><div class="identity-copy"><div class="eyebrow">Frigate · NVR</div><h2 class="title">${escapeHtml(title)}</h2></div></div>
            <div class="pill ${unavailable ? "unavailable" : "available"}"><span class="dot"></span>${escapeHtml(status)}</div>
          </header>
          <div class="camera-frame"><button class="camera-open" type="button" data-action="more-info" aria-label="Open ${escapeHtml(title)} in Home Assistant">${preview}</button></div>
          ${sensorHtml}
          ${motionLabel ? `<div class="footer"><span class="motion-copy">${escapeHtml(motionLabel)}</span><span class="pill ${motion?.state === "on" ? "motion" : motion?.state === "off" ? "available" : "unavailable"}"><span class="dot"></span>${motion?.state === "on" ? "Motion" : motion?.state === "off" ? "Clear" : "Unavailable"}</span></div>` : ""}
        </div>
      </ha-card>`;
  }
}

if (!customElements.get(CARD_TAG)) customElements.define(CARD_TAG, FrigateControlCard);

window.customCards = window.customCards || [];
window.customCards.push({ type: CARD_TAG, name: "Frigate Control Card", description: "A themed Frigate camera card with snapshot preview, motion state, and optional detection sensors." });

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="frigate-control-card"))window.customCards.push({type:"frigate-control-card",name:"Frigate Control Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["lovelace-frigate-control-card"]={version:"1.0.0",types:["frigate-control-card"]};
})() } catch(error){suite.errors.push({component:"lovelace-frigate-control-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","lovelace-frigate-control-card",error);}
/* lovelace-home-connect-washer-card @ 1.1.0 (0fc4fda8a48e2e79ce6598482714b8ff9d3864e9) */
try { (() => {
const knownTypes=["home-connect-washer-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["lovelace-home-connect-washer-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const CARD_TYPE = "home-connect-washer-card";
const VERSION = "1.1.0";

const WASHER_ART = `<svg class="washer-art" viewBox="0 0 280 340" role="img" aria-label="Illustration of a front-loading washing machine">
  <defs>
    <linearGradient id="washer-body" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff"/><stop offset="1" stop-color="#dce8f2"/></linearGradient>
    <linearGradient id="washer-glass" x1=".15" y1="0" x2=".85" y2="1"><stop stop-color="#b4e1ef"/><stop offset=".45" stop-color="#5c94b3"/><stop offset="1" stop-color="#193b56"/></linearGradient>
    <linearGradient id="washer-water" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#6de0df" stop-opacity=".8"/><stop offset="1" stop-color="#2b82bd" stop-opacity=".95"/></linearGradient>
    <radialGradient id="washer-highlight" cx=".24" cy=".18"><stop stop-color="#fff" stop-opacity=".84"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <filter id="washer-shadow" x="-.3" y="-.2" width="1.7" height="1.7"><feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#17334a" flood-opacity=".2"/></filter>
    <clipPath id="washer-window"><circle cx="140" cy="210" r="64"/></clipPath>
  </defs>
  <ellipse cx="140" cy="321" rx="95" ry="10" fill="#23394c" opacity=".11"/>
  <g filter="url(#washer-shadow)">
    <path d="M74 26h132a19 19 0 0 1 19 19v258a19 19 0 0 1-19 19H74a19 19 0 0 1-19-19V45a19 19 0 0 1 19-19Z" fill="url(#washer-body)" stroke="#c4d2de" stroke-width="2"/>
    <path d="M55 75h170v5H55z" fill="#cbd9e4"/>
    <rect x="71" y="43" width="47" height="20" rx="5" fill="#eef4f8" stroke="#cbd8e2"/>
    <path d="M81 49h27M81 54h20M81 59h23" stroke="#a8bac8" stroke-width="2" stroke-linecap="round"/>
    <rect x="138" y="42" width="55" height="23" rx="6" fill="#142d42"/>
    <rect x="144" y="47" width="43" height="13" rx="3" fill="#8ef4df" opacity=".92"/>
    <path d="M149 52h12M149 56h7M169 52h12" stroke="#287789" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="209" cy="53" r="10" fill="#e9f0f5" stroke="#c1cfdb"/>
    <path d="M209 47v6l4 3" fill="none" stroke="#71899b" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="140" cy="210" r="79" fill="#e8f0f5" stroke="#acbecb" stroke-width="5"/>
    <circle cx="140" cy="210" r="69" fill="#19354b"/>
    <g clip-path="url(#washer-window)">
      <circle cx="140" cy="210" r="64" fill="url(#washer-glass)"/>
      <g class="drum-spin">
        <path d="M69 236c20-11 38-11 57 0 17 10 35 11 55-1 19-11 35-9 53 0v45H69z" fill="url(#washer-water)" opacity=".9"/>
        <path d="M72 235c19-11 36-11 55 0 18 10 35 11 54-1 19-11 36-9 51 0" fill="none" stroke="#c3ffff" stroke-opacity=".85" stroke-width="3"/>
        <ellipse cx="111" cy="174" rx="45" ry="29" fill="url(#washer-highlight)"/>
        <circle class="bubble bubble-a" cx="116" cy="222" r="5" fill="#e8ffff" fill-opacity=".7"/>
        <circle class="bubble bubble-b" cx="151" cy="242" r="3" fill="#e8ffff" fill-opacity=".65"/>
        <circle class="bubble bubble-c" cx="171" cy="218" r="4" fill="#e8ffff" fill-opacity=".6"/>
        <path d="M92 199c17 9 39 10 63 1" fill="none" stroke="#c6fbff" stroke-opacity=".6" stroke-width="2"/>
      </g>
    </g>
    <circle cx="140" cy="210" r="67" fill="none" stroke="#f5f8fa" stroke-opacity=".85" stroke-width="3"/>
    <rect x="96" y="300" width="88" height="5" rx="2.5" fill="#c4d2de"/>
    <circle cx="85" cy="311" r="3" fill="#9caebb"/><circle cx="195" cy="311" r="3" fill="#9caebb"/>
  </g>
</svg>`;

const STYLE = `
  :host{display:block;color:var(--primary-text-color)}
  ha-card{overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 55%,transparent);border-radius:var(--orbit-theme-card-radius,26px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 16px 44px rgba(18,40,59,.11)))}
  .shell{position:relative;padding:clamp(18px,3vw,28px);background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 15% 100%,color-mix(in srgb,var(--primary-color) 9%,transparent),transparent 48%))}
  .head{display:flex;align-items:center;justify-content:space-between;gap:14px}.brand{display:flex;align-items:center;gap:12px;min-width:0}.brand-mark{display:grid;place-items:center;width:42px;height:42px;border-radius:14px;background:color-mix(in srgb,var(--primary-color) 12%,transparent);color:var(--primary-color);font-size:20px}.eyebrow{color:var(--orbit-theme-accent,var(--secondary-text-color));font-size:10px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}.title{margin:3px 0 0;overflow:hidden;font-size:clamp(18px,2.6vw,23px);letter-spacing:-.035em;text-overflow:ellipsis;white-space:nowrap}
  .state-pill{display:flex;align-items:center;gap:8px;padding:8px 11px;border-radius:999px;background:var(--secondary-background-color);color:var(--secondary-text-color);font-size:11px;font-weight:750;white-space:nowrap}.state-dot{width:8px;height:8px;border-radius:50%;background:currentColor}.state-pill.running{color:var(--success-color,#218a72)}.state-pill.running .state-dot{box-shadow:0 0 0 4px color-mix(in srgb,currentColor 17%,transparent)}.state-pill.warning{color:var(--warning-color,#b57500)}.state-pill.error{color:var(--error-color,#d34444)}
  .hero{display:grid;grid-template-columns:minmax(170px,.82fr) minmax(0,1.18fr);align-items:center;gap:clamp(12px,3vw,28px);margin-top:8px}.machine{position:relative;display:grid;place-items:center;min-height:250px}.washer-art{display:block;width:min(100%,250px);height:auto;overflow:visible}.drum-spin{transform-box:view-box;transform-origin:140px 210px}.machine.spinning .drum-spin{animation:drum-rotation 4s linear infinite}.bubble{opacity:.55}.machine.spinning .bubble{animation:bubble-rise 2s ease-in-out infinite}.machine.spinning .bubble-b{animation-delay:-.7s}.machine.spinning .bubble-c{animation-delay:-1.3s}.machine.spinning .washer-art{animation:machine-hum 1.2s ease-in-out infinite}
  .hero-info{min-width:0;padding:8px 0}.state-label{color:var(--secondary-text-color);font-size:12px;font-weight:650}.operation{margin:5px 0 0;font-size:clamp(25px,4.5vw,40px);line-height:1.05;letter-spacing:-.055em;font-weight:780}.program{margin-top:10px;overflow:hidden;color:var(--secondary-text-color);font-size:14px;font-weight:650;text-overflow:ellipsis;white-space:nowrap}.progress-block{margin-top:24px}.progress-meta{display:flex;justify-content:space-between;gap:12px;margin-bottom:8px;font-size:12px}.progress-caption{color:var(--secondary-text-color)}.progress-value{font-weight:760;font-variant-numeric:tabular-nums}.track{height:9px;overflow:hidden;border-radius:99px;background:var(--secondary-background-color)}.bar{height:100%;width:var(--progress);border-radius:inherit;background:linear-gradient(90deg,#42b8bd,#5d91e7);transition:width .4s ease}
  .info-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin-top:16px}.info{min-width:0;padding:11px 12px;border:1px solid color-mix(in srgb,var(--divider-color) 55%,transparent);border-radius:15px;background:color-mix(in srgb,var(--card-background-color,#fff) 78%,var(--secondary-background-color))}.info-label{color:var(--secondary-text-color);font-size:10px;font-weight:720;letter-spacing:.06em;text-transform:uppercase}.info-value{display:block;margin-top:5px;overflow:hidden;font-size:13px;font-weight:730;text-overflow:ellipsis;white-space:nowrap}.info-value.good{color:var(--success-color,#218a72)}.info-value.bad{color:var(--warning-color,#b57500)}
  .footer{display:flex;justify-content:space-between;gap:10px;margin-top:17px;padding-top:12px;border-top:1px solid var(--divider-color);color:var(--secondary-text-color);font-size:10px}.footer span:last-child{text-align:right}
  .extras{display:grid;grid-template-columns:1fr auto;align-items:center;gap:16px;margin-top:16px;padding-top:15px;border-top:1px solid var(--divider-color)}.idos{display:flex;flex-wrap:wrap;align-items:center;gap:8px}.idos-title{width:100%;color:var(--secondary-text-color);font-size:10px;font-weight:760;letter-spacing:.08em;text-transform:uppercase}.idos-chip{display:flex;align-items:center;gap:7px;padding:8px 10px;border-radius:12px;background:var(--secondary-background-color);font-size:11px;font-weight:700}.idos-dot{width:7px;height:7px;border-radius:50%;background:var(--success-color,#218a72)}.idos-chip.low{color:var(--warning-color,#b57500)}.idos-chip.low .idos-dot{background:currentColor}.idos-chip.unknown{color:var(--secondary-text-color)}.idos-chip.unknown .idos-dot{background:currentColor}.actions{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:8px}.action-btn{min-height:38px;padding:0 14px;border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:12px;font-weight:760;cursor:pointer}.action-btn:hover:not(:disabled){border-color:var(--primary-color);color:var(--primary-color)}.action-btn.stop{color:var(--error-color,#d34444)}.action-btn.confirm{border-color:var(--error-color,#d34444);background:var(--error-color,#d34444);color:#fff}.action-btn:disabled{opacity:.42;cursor:not-allowed}.action-error{width:100%;color:var(--error-color,#d34444);font-size:11px;text-align:right}
  @keyframes bubble-rise{0%,100%{transform:translateY(4px);opacity:.4}50%{transform:translateY(-10px);opacity:1}}@keyframes drum-rotation{to{transform:rotate(360deg)}}@keyframes machine-hum{0%,100%{transform:translateX(0)}25%{transform:translateX(1px)}75%{transform:translateX(-1px)}}
  @media(max-width:520px){.shell{padding:17px}.hero{grid-template-columns:120px minmax(0,1fr);gap:12px;margin-top:10px}.machine{min-height:185px}.washer-art{width:155px}.operation{font-size:27px}.progress-block{margin-top:17px}.info-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.state-pill{padding:7px 9px;font-size:10px}.extras{grid-template-columns:1fr}.actions{justify-content:flex-start}.action-error{text-align:left}}
  @media(max-width:360px){.hero{grid-template-columns:1fr}.machine{min-height:155px}.washer-art{width:150px}.hero-info{padding:0}.operation{font-size:30px}}
  @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}}
`;

const CONFIG_LABELS = {
  title: "Card title",
  operation_state_entity: "Operation state",
  connectivity_entity: "Connectivity",
  progress_entity: "Program progress (%)",
  finish_time_entity: "Program finish time",
  door_entity: "Door state",
  program_entity: "Active or selected program",
  program_finished_entity: "Program finished indicator",
  remote_control_entity: "Remote control available",
  remote_start_entity: "Remote start available",
  temperature_entity: "Selected temperature",
  spin_speed_entity: "Selected spin speed",
  stop_button_entity: "Stop program button",
  power_switch_entity: "Appliance power switch",
  idos_1_sensor_entity: "i-Dos 1 low-level alert",
  idos_2_sensor_entity: "i-Dos 2 low-level alert",
};

const SCHEMA = [
  { name: "title", selector: { text: {} } },
  { type: "grid", name: "", schema: [
    { name: "operation_state_entity", selector: { entity: { domain: "sensor" } } },
    { name: "connectivity_entity", selector: { entity: { domain: "binary_sensor" } } },
    { name: "progress_entity", selector: { entity: { domain: "sensor" } } },
    { name: "finish_time_entity", selector: { entity: { domain: "sensor" } } },
    { name: "door_entity", selector: { entity: {} } },
    { name: "program_entity", selector: { entity: {} } },
    { name: "program_finished_entity", selector: { entity: { domain: "sensor" } } },
    { name: "remote_control_entity", selector: { entity: { domain: "binary_sensor" } } },
    { name: "remote_start_entity", selector: { entity: { domain: "binary_sensor" } } },
    { name: "temperature_entity", selector: { entity: { domain: "select" } } },
    { name: "spin_speed_entity", selector: { entity: { domain: "select" } } },
    { name: "stop_button_entity", selector: { entity: { domain: "button" } } },
    { name: "power_switch_entity", selector: { entity: { domain: "switch" } } },
    { name: "idos_1_sensor_entity", selector: { entity: { domain: "sensor" } } },
    { name: "idos_2_sensor_entity", selector: { entity: { domain: "sensor" } } },
  ] },
];

function emit(target, name, detail) {
  const event = new Event(name, { bubbles: true, composed: true });
  event.detail = detail;
  target.dispatchEvent(event);
}

class HomeConnectWasherCard extends HTMLElement {
  static getConfigForm() {
    return {
      schema: SCHEMA,
      computeLabel: (field) => CONFIG_LABELS[field.name],
      computeHelper: (field) => field.name === "door_entity" || field.name === "program_entity" ? "Choose the matching entity from the appliance you want to display." : undefined,
    };
  }

  static getStubConfig() { return { title: "Washing machine" }; }

  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("Provide a valid Home Connect washer card configuration.");
    this._config = { title: "Washing machine", ...config };
    this._root ??= this.attachShadow({ mode: "open" });
    this.render();
  }

  set hass(hass) { this._hass = hass; this.render(); }
  getCardSize() { return 5; }
  getGridOptions() { return { rows: 5, columns: 6, min_rows: 4, max_rows: 8 }; }

  state(entityKey) {
    const entityId = this._config[entityKey];
    return entityId ? this._hass?.states?.[entityId] : undefined;
  }

  escape(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }

  stateText(entityKey) {
    const entity = this.state(entityKey);
    if (!entity || ["unknown", "unavailable", "none", ""].includes(String(entity.state).toLowerCase())) return null;
    return String(entity.state);
  }

  operation() {
    const value = (this.stateText("operation_state_entity") || "").toLowerCase().replace(/[^a-z]/g, "");
    const labels = {
      inactive: ["Standby", ""], ready: ["Ready", ""], delayedstart: ["Scheduled", ""],
      run: ["Washing", "running"], pause: ["Paused", "warning"], actionrequired: ["Attention needed", "warning"],
      finished: ["Cycle complete", "running"], error: ["Error", "error"], aborting: ["Stopping", "warning"],
    };
    return labels[value] || [value ? this.pretty(value) : "Status unavailable", value ? "" : "warning"];
  }

  pretty(value) {
    let name = String(value ?? "").replace(/^laundry_care_washer_program_/, "").replace(/^laundry_care_washer_enum_type_/, "");
    const known = {
      cotton_eco_4060: "Cottons Eco 40–60", cotton: "Cottons", easy_care: "Easy care", mix: "Mixed load",
      delicates_silk: "Delicates / silk", wool: "Wool", shirts_blouses: "Shirts / blouses", outdoor: "Outdoor",
      dark_wash: "Dark wash", auto_30: "Automatic 30°", auto_40: "Automatic 40°", drum_clean: "Drum clean",
      sport_fitness: "Sportswear", sensitive: "Sensitive", super_153045_super_1530: "Super 15/30 min",
      temperature_g_c_20: "20°C", temperature_g_c_30: "30°C", temperature_g_c_40: "40°C", temperature_g_c_50: "50°C", temperature_g_c_60: "60°C", temperature_cold: "Cold",
      spin_speed_r_p_m_400: "400 rpm", spin_speed_r_p_m_600: "600 rpm", spin_speed_r_p_m_700: "700 rpm", spin_speed_r_p_m_800: "800 rpm", spin_speed_r_p_m_900: "900 rpm", spin_speed_r_p_m_1000: "1000 rpm", spin_speed_r_p_m_1200: "1200 rpm", spin_speed_r_p_m_1400: "1400 rpm", spin_speed_r_p_m_1600: "1600 rpm",
    };
    const canonical = name.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
    if (known[canonical]) return known[canonical];
    name = name.replace(/_/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
    return name || "No program selected";
  }

  connectivity() {
    const value = (this.stateText("connectivity_entity") || "").toLowerCase();
    if (!value) return null;
    return ["on", "connected", "online", "true"].includes(value);
  }

  idosStatus(entityKey) {
    const value = (this.stateText(entityKey) || "").toLowerCase();
    if (!value) return null;
    if (value === "present") return { text: "Low · refill", className: "low" };
    if (value === "confirmed") return { text: "Low · acknowledged", className: "low" };
    if (value === "off") return { text: "Level OK", className: "" };
    return { text: this.pretty(value), className: "unknown" };
  }

  doorInfo() {
    const value = (this.stateText("door_entity") || "").toLowerCase();
    if (!value) return null;
    if (["open", "unlocked"].includes(value)) return { text: "Open", className: "bad" };
    if (["locked"].includes(value)) return { text: "Locked", className: "good" };
    if (["closed", "off", "on"].includes(value)) return { text: value === "on" ? "Closed" : "Closed", className: "good" };
    return { text: this.pretty(value), className: "" };
  }

  finishTime() {
    const value = this.stateText("finish_time_entity");
    if (!value) return null;
    const timestamp = Date.parse(value);
    if (!Number.isFinite(timestamp)) return this.pretty(value);
    return new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" }).format(new Date(timestamp));
  }

  render() {
    if (!this._root || !this._config || !this._hass) return;
    const [operationLabel, operationClass] = this.operation();
    const connected = this.connectivity();
    const statusLabel = connected === false ? "Offline" : operationLabel;
    const statusClass = connected === false ? "error" : operationClass;
    const program = this.stateText("program_entity");
    const progressRaw = this.stateText("progress_entity");
    let progress = progressRaw === null ? null : Number.parseFloat(progressRaw);
    if (!Number.isFinite(progress)) progress = null;
    if (progress !== null) progress = Math.max(0, Math.min(100, progress));
    if (progress === null && (this.stateText("operation_state_entity") || "").toLowerCase() === "finished") progress = 100;
    const isRunning = (this.stateText("operation_state_entity") || "").toLowerCase() === "run";
    const hasProgress = progress !== null;
    const door = this.doorInfo();
    const remoteControl = this.stateText("remote_control_entity");
    const remoteStart = this.stateText("remote_start_entity");
    const finished = (this.stateText("program_finished_entity") || "").toLowerCase();
    const finishedText = ["confirmed", "present", "on"].includes(finished) ? "Laundry ready" : null;
    const temperature = this.stateText("temperature_entity");
    const spinSpeed = this.stateText("spin_speed_entity");
    const finish = this.finishTime();
    const idos1 = this.idosStatus("idos_1_sensor_entity");
    const idos2 = this.idosStatus("idos_2_sensor_entity");
    const powerEntityId = this._config.power_switch_entity;
    const powerState = powerEntityId ? this._hass.states?.[powerEntityId]?.state : null;
    const powerAvailable = ["on", "off"].includes(powerState);
    const stopEntityId = this._config.stop_button_entity;
    const canStop = Boolean(stopEntityId && ["run", "pause", "delayedstart", "actionrequired"].includes((this.stateText("operation_state_entity") || "").toLowerCase()));
    const actionMode = this._actionMode || "";
    const actionBusy = Boolean(this._actionBusy);
    const infoItems = [
      door && { label: "Door", value: door.text, className: door.className },
      finish && { label: "Finish", value: finish, className: "" },
      remoteControl && { label: "Remote control", value: ["on", "true"].includes(remoteControl.toLowerCase()) ? "Available" : "Local only", className: ["on", "true"].includes(remoteControl.toLowerCase()) ? "good" : "" },
      remoteStart && { label: "Remote start", value: ["on", "true"].includes(remoteStart.toLowerCase()) ? "Enabled" : "Not enabled", className: ["on", "true"].includes(remoteStart.toLowerCase()) ? "good" : "bad" },
      temperature && { label: "Temperature", value: this.pretty(temperature), className: "" },
      spinSpeed && { label: "Spin", value: this.pretty(spinSpeed), className: "" },
    ].filter(Boolean);
    const remainingCopy = isRunning ? "Cycle in progress · time not reported" : finishedText || (operationLabel === "Standby" || operationLabel === "Ready" ? "Ready for the next cycle" : "Live appliance status");
    const progressCopy = hasProgress ? `${Math.round(progress)}%` : progress === null ? "—" : `${progress}%`;

    this._root.innerHTML = `<style>${STYLE}</style><ha-card><div class="shell">
      <header class="head"><div class="brand"><div class="brand-mark" aria-hidden="true">⌁</div><div style="min-width:0"><div class="eyebrow">Home Connect · Laundry</div><h2 class="title">${this.escape(this._config.title)}</h2></div></div><div class="state-pill ${statusClass}"><span class="state-dot"></span>${this.escape(statusLabel)}</div></header>
      <main class="hero"><div class="machine ${isRunning ? "spinning" : ""}">${WASHER_ART}</div><section class="hero-info"><div class="state-label">WASH CYCLE</div><div class="operation">${this.escape(operationLabel)}</div><div class="program">${this.escape(program ? this.pretty(program) : "No active program")}</div><div class="progress-block"><div class="progress-meta"><span class="progress-caption">${this.escape(remainingCopy)}</span><span class="progress-value">${hasProgress ? progressCopy : "—"}</span></div><div class="track"><div class="bar" style="--progress:${hasProgress ? progress : progress === 100 ? 100 : 0}%"></div></div></div></section></main>
      ${infoItems.length ? `<section class="info-grid">${infoItems.map((item) => `<div class="info"><span class="info-label">${this.escape(item.label)}</span><span class="info-value ${item.className}">${this.escape(item.value)}</span></div>`).join("")}</section>` : ""}
      ${(idos1 || idos2 || powerEntityId || stopEntityId) ? `<section class="extras">${idos1 || idos2 ? `<div class="idos"><span class="idos-title">i-Dos detergent</span>${[idos1 && { name: "i-Dos 1", ...idos1 }, idos2 && { name: "i-Dos 2", ...idos2 }].filter(Boolean).map((item) => `<span class="idos-chip ${item.className}"><i class="idos-dot"></i>${this.escape(item.name)} · ${this.escape(item.text)}</span>`).join("")}</div>` : "<div></div>"}<div class="actions">${stopEntityId ? (actionMode === "stop" ? `<button class="action-btn confirm" data-confirm="stop" ${!canStop || actionBusy ? "disabled" : ""}>${actionBusy ? "Sending…" : "Confirm stop"}</button><button class="action-btn" data-cancel>Cancel</button>` : `<button class="action-btn stop" data-action="stop" ${!canStop || actionBusy ? "disabled" : ""}>Stop</button>`) : ""}${powerEntityId ? (actionMode === "power" ? `<button class="action-btn confirm" data-confirm="power" ${!powerAvailable || actionBusy ? "disabled" : ""}>${actionBusy ? "Sending…" : `Confirm power ${powerState === "on" ? "off" : "on"}`}</button><button class="action-btn" data-cancel>Cancel</button>` : `<button class="action-btn" data-action="power" ${!powerAvailable || actionBusy ? "disabled" : ""}>Power ${powerState === "on" ? "Off" : "On"}</button>`) : ""}${this._actionError ? `<span class="action-error">${this.escape(this._actionError)}</span>` : ""}</div></section>` : ""}
      <footer class="footer"><span>${connected === false ? "Appliance disconnected" : connected === true ? "Connected to Home Assistant" : "Home Connect appliance"}</span><span>${this.escape(remainingCopy)}</span></footer>
    </div></ha-card>`;
    this._root.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", () => { this._actionMode = button.dataset.action; this._actionError = ""; this.render(); }));
    this._root.querySelectorAll("[data-cancel]").forEach((button) => button.addEventListener("click", () => { this._actionMode = ""; this._actionError = ""; this.render(); }));
    this._root.querySelectorAll("[data-confirm]").forEach((button) => button.addEventListener("click", () => this.performAction(button.dataset.confirm)));
  }

  async performAction(action) {
    if (!this._hass || this._actionBusy) return;
    const operation = (this.stateText("operation_state_entity") || "").toLowerCase();
    if (action === "stop") {
      if (!this._config.stop_button_entity || !["run", "pause", "delayedstart", "actionrequired"].includes(operation)) return;
      this._actionBusy = true;
      this.render();
      try {
        await this._hass.callService("button", "press", { entity_id: this._config.stop_button_entity });
        this._actionMode = "";
        this._actionError = "";
      } catch (error) {
        this._actionError = "Stop command failed. Check Home Assistant.";
      } finally {
        this._actionBusy = false;
        this.render();
      }
      return;
    }
    if (action === "power") {
      const entityId = this._config.power_switch_entity;
      const current = entityId ? this._hass.states?.[entityId]?.state : null;
      if (!entityId || !["on", "off"].includes(current)) return;
      this._actionBusy = true;
      this.render();
      try {
        await this._hass.callService("switch", current === "on" ? "turn_off" : "turn_on", { entity_id: entityId });
        this._actionMode = "";
        this._actionError = "";
      } catch (error) {
        this._actionError = "Power command failed. Check Home Assistant.";
      } finally {
        this._actionBusy = false;
        this.render();
      }
    }
  }
}

if (!customElements.get(CARD_TYPE)) customElements.define(CARD_TYPE, HomeConnectWasherCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === CARD_TYPE)) {
  window.customCards.push({ type: CARD_TYPE, name: "Home Connect Washer", description: "A visual status and control card for Home Connect washing machines", preview: true, version: VERSION, documentationURL: "https://github.com/Liionboy/lovelace-home-connect-washer-card" });
}

console.info(`%c HOME CONNECT WASHER CARD %c ${VERSION} `, "color:#fff;background:#0875c9;font-weight:700", "color:#0875c9;background:#fff;font-weight:700");

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="home-connect-washer-card"))window.customCards.push({type:"home-connect-washer-card",name:"Home Connect Washer Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["lovelace-home-connect-washer-card"]={version:"1.1.0",types:["home-connect-washer-card"]};
})() } catch(error){suite.errors.push({component:"lovelace-home-connect-washer-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","lovelace-home-connect-washer-card",error);}
/* lovelace-hp-printer-card @ 1.0.1 (ce7c61a9f3713c81384fc73bef467f154941f5a8) */
try { (() => {
const knownTypes=["hp-printer-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["lovelace-hp-printer-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const CARD_NAME = "hp-printer-card";
const CARD_VERSION = "1.0.1";
const INK_COLORS = {
  black: "#596273",
  cyan: "#22b8cf",
  magenta: "#d63384",
  yellow: "#e4b400",
  photo_black: "#303846",
  gray: "#8c98a8",
};

const STYLE = `
  :host { display: block; }
  ha-card {
    overflow: hidden;
    color: var(--primary-text-color);
    background: var(--ha-card-background, var(--card-background-color, #fff));
    border: 1px solid color-mix(in srgb, var(--divider-color) 58%, transparent);
    border-radius:var(--orbit-theme-card-radius,24px);
    box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow, 0 10px 30px rgba(22, 35, 55, .08)));
  }
  .shell { padding: clamp(18px, 3vw, 28px); }
  .header { display:flex; align-items:center; justify-content:space-between; gap:16px; }
  .brand { display:flex; align-items:center; gap:14px; min-width:0; }
  .mark { display:grid; place-items:center; width:48px; height:48px; flex:none; border-radius:16px; color:var(--primary-color); background:color-mix(in srgb, var(--primary-color) 12%, transparent); }
  .mark svg { width:26px; height:26px; }
  .eyebrow { color:var(--orbit-theme-accent,var(--secondary-text-color)); font-size:11px; font-weight:750; letter-spacing:.14em; text-transform:uppercase; }
  h2 { margin:4px 0 0; overflow:hidden; font-size:clamp(18px, 2.8vw, 23px); font-weight:750; letter-spacing:-.035em; text-overflow:ellipsis; white-space:nowrap; }
  .status { display:flex; align-items:center; gap:8px; padding:8px 11px; border-radius:999px; background:var(--secondary-background-color); color:var(--secondary-text-color); font-size:12px; font-weight:700; white-space:nowrap; }
  .dot { width:8px; height:8px; border-radius:50%; background:var(--secondary-text-color); }
  .status.online { color:var(--success-color, #2e9d65); }
  .status.online .dot { background:var(--success-color, #2e9d65); box-shadow:0 0 0 4px color-mix(in srgb, var(--success-color, #2e9d65) 15%, transparent); }
  .status.offline { color:var(--error-color, #db4437); }
  .status.offline .dot { background:var(--error-color, #db4437); }
  .main { display:grid; grid-template-columns:minmax(0, 1.1fr) minmax(0, .9fr); gap:clamp(18px, 4vw, 36px); margin-top:25px; }
  .section-title { margin:0 0 14px; color:var(--secondary-text-color); font-size:11px; font-weight:800; letter-spacing:.12em; text-transform:uppercase; }
  .ink-list { display:grid; gap:12px; }
  .ink { display:grid; grid-template-columns:minmax(82px, .6fr) minmax(70px, 1fr) 42px; align-items:center; gap:12px; }
  .ink-name { display:flex; align-items:center; gap:8px; overflow:hidden; font-size:13px; font-weight:650; text-overflow:ellipsis; white-space:nowrap; }
  .ink-chip { width:9px; height:9px; flex:none; border-radius:50%; background:var(--ink-color); }
  .track { height:8px; overflow:hidden; border-radius:99px; background:var(--secondary-background-color); }
  .fill { height:100%; width:var(--level); border-radius:inherit; background:var(--ink-color); transition:width .35s ease; }
  .level { text-align:right; font-size:13px; font-variant-numeric:tabular-nums; font-weight:750; }
  .empty { padding:18px; border:1px dashed var(--divider-color); border-radius:14px; color:var(--secondary-text-color); font-size:13px; line-height:1.5; }
  .stats { display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:10px; }
  .stat { padding:13px 14px; border-radius:15px; background:var(--secondary-background-color); }
  .stat-label { color:var(--secondary-text-color); font-size:11px; font-weight:650; }
  .stat-value { margin-top:5px; font-size:20px; font-weight:750; font-variant-numeric:tabular-nums; letter-spacing:-.03em; }
  .stat-unit { margin-left:4px; color:var(--secondary-text-color); font-size:11px; font-weight:600; }
  .alerts { display:grid; gap:7px; margin-top:14px; }
  .alert { display:flex; gap:8px; align-items:flex-start; color:var(--warning-color, #bd7b00); font-size:12px; line-height:1.4; }
  .alert.error { color:var(--error-color, #db4437); }
  .footer { display:flex; justify-content:space-between; gap:12px; margin-top:22px; padding-top:13px; border-top:1px solid var(--divider-color); color:var(--secondary-text-color); font-size:11px; }
  .source { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
  @media (max-width: 520px) { .shell { padding:17px; } .main { grid-template-columns:1fr; gap:22px; margin-top:21px; } .mark { width:42px; height:42px; border-radius:14px; } .status { padding:7px 9px; font-size:11px; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition:none !important; } }
`;

const PRINTER_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8V3h12v5M6 17H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6zM18 11h.01"/></svg>`;

function dispatch(target, name, detail) {
  target.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
}

class HpPrinterCard extends HTMLElement {
  static getConfigElement() { return document.createElement("hp-printer-card-editor"); }
  static getStubConfig() { return { title: "HP Printer", status_entity: "", ink_entities: [] }; }
  static get supportsTilt() { return false; }

  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("HP Printer Card requires a valid card configuration.");
    this._config = { title: "HP Printer", ink_entities: [], ...config };
    this._root ??= this.attachShadow({ mode: "open" });
    this.render();
  }

  set hass(hass) { this._hass = hass; this.render(); }
  getCardSize() { return 4; }

  value(entityId) { return entityId ? this._hass?.states?.[entityId] : undefined; }
  friendly(entityId) { return this.value(entityId)?.attributes?.friendly_name || entityId || ""; }
  escape(input) { return String(input ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]); }

  number(raw) {
    if (raw === null || raw === undefined || raw === "" || ["unknown", "unavailable", "none"].includes(String(raw).toLowerCase())) return null;
    const match = String(raw).replace(/,/g, "").match(/-?\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : null;
  }

  format(value) { return value === null ? "—" : new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(value); }

  getInk(entityId) {
    const state = this.value(entityId);
    const id = entityId.split(".").pop().toLowerCase();
    const friendly = state?.attributes?.friendly_name || id.replace(/[_-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    const token = `${id} ${friendly}`.toLowerCase().replace(/[^a-z]/g, "");
    const isCmy = token.includes("cyanmagenta") || token.includes("yellowinkcartridge");
    const colorKey = isCmy ? "gray" : Object.keys(INK_COLORS).find((key) => token.includes(key)) || "gray";
    const label = isCmy ? "Color cartridge · CMY" : colorKey === "black" || colorKey === "photo_black" ? "Black cartridge" : friendly;
    const value = this.number(state?.state);
    const level = value === null ? null : Math.max(0, Math.min(100, value));
    const color = isCmy ? "linear-gradient(90deg, #22b8cf 0 33%, #d63384 33% 66%, #e4b400 66%)" : INK_COLORS[colorKey];
    return { entityId, label, level, color, unavailable: !state || ["unknown", "unavailable"].includes(state.state) };
  }

  collectStats() {
    const attrs = this.value(this._config.total_pages_entity)?.attributes || {};
    const metrics = [
      ["Total printed", "total_pages_entity", "pages"],
      ["Color pages", "color_pages_entity", "pages"],
      ["Black & white pages", "bw_pages_entity", "pages"],
      ["Pages scanned", "scans_entity", "pages"],
      ["Paper jams", "jams_entity", "events"],
    ];
    const result = metrics.flatMap(([label, configKey, defaultUnit]) => {
      const entity = this.value(this._config[configKey]);
      if (!entity) return [];
      const unit = configKey === "jams_entity" ? "events" : entity.attributes?.unit_of_measurement || defaultUnit;
      return [{ label, value: this.number(entity.state), unit }];
    });
    if (result.length) return result.slice(0, 6);
    const aliases = [
      ["Color pages", ["color", "color pages"], "pages"],
      ["Monochrome pages", ["monochrome", "mono", "black and white"], "pages"],
      ["Paper jams", ["jams", "paper jams"], "events"],
      ["Cancelled jobs", ["cancelled", "canceled"], "jobs"],
    ];
    const fallback = [];
    for (const [label, terms, unit] of aliases) {
      const key = Object.keys(attrs).find((name) => terms.includes(name.toLowerCase()));
      if (key) fallback.push({ label, value: this.number(attrs[key]), unit });
    }
    return fallback.slice(0, 6);
  }

  statusInfo() {
    const id = this._config.status_entity;
    const entity = this.value(id);
    if (!id) return { text: "Monitoring", className: "", message: "Status entity not configured" };
    if (!entity || ["unknown", "unavailable"].includes(entity.state)) return { text: "Unavailable", className: "offline", message: "Status sensor unavailable" };
    const state = String(entity.state).toLowerCase();
    if (["off", "offline", "disconnected", "error", "fault"].includes(state)) return { text: "Offline", className: "offline", message: "Printer is powered off or disconnected" };
    if (["scanprocessing", "copying", "processing"].includes(state)) return { text: "Working", className: "online", message: `Printer state: ${state}` };
    if (state === "inpowersave") return { text: "Power save", className: "online", message: "Printer connected · power save" };
    if (state === "canceljob") return { text: "Attention", className: "", message: "Printer is cancelling a job" };
    return { text: "Ready", className: "online", message: `Printer state: ${entity.state}` };
  }

  render() {
    if (!this._root || !this._config || !this._hass) return;
    const status = this.statusInfo();
    const inks = (Array.isArray(this._config.ink_entities) ? this._config.ink_entities : []).filter(Boolean).map((id) => this.getInk(id));
    const stats = this.collectStats();
    const alerts = inks.filter((ink) => ink.level !== null && ink.level <= (Number(this._config.low_ink_threshold) || 15));
    this._root.innerHTML = `<style>${STYLE}</style><ha-card><div class="shell">
      <header class="header"><div class="brand"><div class="mark">${PRINTER_ICON}</div><div style="min-width:0"><div class="eyebrow">HP · Print system</div><h2>${this.escape(this._config.title)}</h2></div></div><div class="status ${status.className}"><span class="dot"></span>${this.escape(status.text)}</div></header>
      <main class="main"><section><h3 class="section-title">Supplies</h3>${inks.length ? `<div class="ink-list">${inks.map((ink) => `<div class="ink" title="${this.escape(ink.entityId)}"><div class="ink-name"><span class="ink-chip" style="--ink-color:${ink.color}"></span>${this.escape(ink.label)}</div><div class="track"><div class="fill" style="--level:${ink.level ?? 0}%;--ink-color:${ink.color}"></div></div><div class="level">${ink.unavailable ? "—" : ink.level === null ? "—" : `${Math.round(ink.level)}%`}</div></div>`).join("")}</div>` : `<div class="empty">Add one or more cartridge level sensors using <code>ink_entities</code>.</div>`}${alerts.length ? `<div class="alerts">${alerts.map((ink) => `<div class="alert ${ink.level <= 5 ? "error" : ""}">⚠ <span>${this.escape(ink.label)} is low (${Math.round(ink.level)}%).</span></div>`).join("")}</div>` : ""}</section>
      <section><h3 class="section-title">Usage overview</h3>${stats.length ? `<div class="stats">${stats.map((stat) => `<div class="stat"><div class="stat-label">${this.escape(stat.label)}</div><div class="stat-value">${this.format(stat.value)}${stat.unit ? `<span class="stat-unit">${this.escape(stat.unit)}</span>` : ""}</div></div>`).join("")}</div>` : `<div class="empty">Page counters appear here when available on the selected printer sensor.</div>`}</section></main>
      <footer class="footer"><span class="source">Home Assistant · Live entity data</span><span>${this.escape(status.message)}</span></footer>
    </div></ha-card>`;
  }
}

class HpPrinterCardEditor extends HTMLElement {
  set hass(hass) { this._hass = hass; this.render(); }
  setConfig(config) { this._config = { title: "HP Printer", ink_entities: [], ...config }; this.render(); }
  render() {
    if (!this._hass || !this._config || this._rendered) return;
    this._rendered = true;
    const printerSensors = Object.keys(this._hass.states || {}).filter((id) => /printer|ink|toner|cartridge|copy_total|scanner_total|pages|jams/i.test(`${id} ${this._hass.states[id]?.attributes?.friendly_name || ""}`)).sort();
    const supplySensors = printerSensors.filter((id) => id.startsWith("sensor.") && /ink|toner|cartridge|supply/i.test(`${id} ${this._hass.states[id]?.attributes?.friendly_name || ""}`));
    const numericSensors = printerSensors.filter((id) => id.startsWith("sensor."));
    const statusSensors = printerSensors.filter((id) => id.startsWith("sensor.") || id.startsWith("binary_sensor."));
    const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
    const makeOptions = (ids, selected, blankLabel) => `<option value="">${blankLabel}</option>${ids.map((id) => `<option value="${esc(id)}" ${selected.includes(id) ? "selected" : ""}>${esc(this._hass.states[id]?.attributes?.friendly_name || id)} · ${esc(id)}</option>`).join("")}`;
    const fields = [["Total printed pages", "total_pages_entity"], ["Color pages", "color_pages_entity"], ["Black & white pages", "bw_pages_entity"], ["Pages scanned", "scans_entity"], ["Paper jams", "jams_entity"]];
    this.innerHTML = `<style>.editor{display:grid;gap:12px;padding:8px 0}.editor label{display:grid;gap:6px;font-size:13px}.editor input,.editor select{box-sizing:border-box;width:100%;padding:10px;border:1px solid var(--divider-color);border-radius:8px;background:var(--card-background-color);color:var(--primary-text-color)}.editor select[multiple]{min-height:96px}.editor p{margin:0;color:var(--secondary-text-color);font-size:12px;line-height:1.45}</style><div class="editor"><label>Card title<input data-key="title" type="text"></label><label>Printer status<select data-key="status_entity">${makeOptions(statusSensors, [this._config.status_entity].filter(Boolean), "Not configured")}</select></label><label>Ink / toner level sensors · select multiple<select data-key="ink_entities" multiple>${supplySensors.map((id) => `<option value="${esc(id)}" ${(this._config.ink_entities || []).includes(id) ? "selected" : ""}>${esc(this._hass.states[id]?.attributes?.friendly_name || id)} · ${esc(id)}</option>`).join("")}</select></label>${fields.map(([label, key]) => `<label>${label}<select data-key="${key}">${makeOptions(numericSensors, [this._config[key]].filter(Boolean), "Not configured")}</select></label>`).join("")}<p>For HP DeskJet devices with a tri-color cartridge, select two supply sensors: black and Cyan/Magenta/Yellow (CMY). Page counters are separate sensors and are configured independently.</p></div>`;
    for (const input of this.querySelectorAll("input, select")) {
      const key = input.dataset.key;
      if (input.tagName === "INPUT") input.value = this._config[key] || "";
      input.addEventListener("change", () => {
        const value = input.multiple ? [...input.selectedOptions].map((option) => option.value) : input.value.trim();
        const config = { ...this._config, [key]: value };
        this._config = config;
        dispatch(this, "config-changed", { config });
      });
    }
  }
}

if (!customElements.get(CARD_NAME)) customElements.define(CARD_NAME, HpPrinterCard);
if (!customElements.get(`${CARD_NAME}-editor`)) customElements.define(`${CARD_NAME}-editor`, HpPrinterCardEditor);

window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === CARD_NAME)) {
  window.customCards.push({ type: CARD_NAME, name: "HP Printer Card", description: "Professional printer status, supplies, and usage overview", preview: true, version: CARD_VERSION });
}

console.info(`%c HP PRINTER CARD %c ${CARD_VERSION} `, "color:#fff;background:#0875c9;font-weight:700", "color:#0875c9;background:#fff;font-weight:700");

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="hp-printer-card"))window.customCards.push({type:"hp-printer-card",name:"HP Printer Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["lovelace-hp-printer-card"]={version:"1.0.1",types:["hp-printer-card"]};
})() } catch(error){suite.errors.push({component:"lovelace-hp-printer-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","lovelace-hp-printer-card",error);}
/* lovelace-luma-control-card @ 1.2.1 (439d5caf290fcc0530e918e4102ad4484fed83f0) */
try { (() => {
const knownTypes=["luma-control-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["lovelace-luma-control-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const CARD_TYPE = "luma-control-card";
const VERSION = "1.2.1";

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:var(--orbit-theme-card-radius,24px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1)))}
  .shell{--glow:var(--primary-color);padding:clamp(16px,3vw,22px);background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 8% 0%,color-mix(in srgb,var(--glow) 11%,transparent),transparent 48%))}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px}.identity{display:flex;align-items:center;gap:12px;min-width:0}.icon-wrap{display:grid;place-items:center;width:44px;height:44px;flex:none;border:1px solid color-mix(in srgb,var(--glow) 22%,transparent);border-radius:15px;background:color-mix(in srgb,var(--glow) 12%,var(--card-background-color,#fff));color:var(--glow);transition:background .25s ease,box-shadow .25s ease}.icon-wrap ha-icon{--mdc-icon-size:24px}.identity-copy{min-width:0}.eyebrow{color:var(--orbit-theme-accent,var(--secondary-text-color));font-size:9px;font-weight:800;letter-spacing:.15em;text-transform:uppercase}.title{margin:3px 0 0;overflow:hidden;font-size:clamp(17px,2.5vw,21px);font-weight:770;letter-spacing:-.035em;text-overflow:ellipsis;white-space:nowrap}.pill{display:flex;align-items:center;gap:7px;padding:7px 10px;border-radius:999px;background:var(--secondary-background-color);color:var(--secondary-text-color);font-size:11px;font-weight:750;white-space:nowrap}.dot{width:7px;height:7px;border-radius:50%;background:currentColor}.pill.on{color:var(--success-color,#23876e)}.pill.on .dot{box-shadow:0 0 0 4px color-mix(in srgb,currentColor 15%,transparent)}.pill.unavailable{color:var(--error-color,#c74343)}
  .summary{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-top:18px}.summary-label{font-size:clamp(24px,4vw,34px);font-weight:800;letter-spacing:-.06em;line-height:1}.summary-meta{color:var(--secondary-text-color);font-size:12px;text-align:right}.section{margin-top:18px;padding-top:16px;border-top:1px solid color-mix(in srgb,var(--divider-color) 72%,transparent)}.section-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:9px}.section-title{font-size:12px;font-weight:760}.value{color:var(--secondary-text-color);font-size:12px;font-variant-numeric:tabular-nums}.range{display:block;width:100%;height:28px;margin:0;accent-color:var(--glow);cursor:pointer;touch-action:pan-y}.range-labels{display:flex;justify-content:space-between;color:var(--secondary-text-color);font-size:10px}
  .color-row{display:flex;align-items:center;gap:12px}.color-input{width:48px;height:42px;flex:none;padding:3px;border:1px solid var(--divider-color);border-radius:13px;background:var(--card-background-color,#fff);cursor:pointer}.color-copy{min-width:0}.color-hint{color:var(--secondary-text-color);font-size:11px;line-height:1.4}.select-wrap{position:relative}.select{width:100%;min-height:42px;padding:0 38px 0 13px;border:1px solid var(--divider-color);border-radius:13px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:13px;font-weight:650;appearance:none}.select-wrap:after{position:absolute;top:50%;right:14px;color:var(--secondary-text-color);content:'⌄';pointer-events:none;transform:translateY(-60%)}
  .flash-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.flash-action{min-height:40px;border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:12px;font-weight:700;cursor:pointer}.flash-action:hover:not(:disabled){border-color:var(--primary-color);color:var(--primary-color)}.flash-action:disabled{opacity:.55;cursor:wait}
  .compact-control{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:12px}.compact-control .feedback{min-width:0}.compact-control.switch-compact:not(.switch-on){justify-content:flex-end}.compact-control.light-compact{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.light-compact .power,.controls-toggle{width:100%;min-width:0;padding:0 9px;font-size:12px}.controls-toggle{min-height:42px;border:1px solid var(--divider-color);border-radius:14px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-weight:740;cursor:pointer;transition:background .15s ease,border-color .15s ease}.controls-toggle:hover{border-color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 7%,var(--card-background-color,#fff))}.section-control-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:18px;padding-top:14px;border-top:1px solid color-mix(in srgb,var(--divider-color) 72%,transparent)}.section-control-head .section-title{font-size:12px;font-weight:760}.section-control-head .controls-toggle{width:auto;min-height:34px;padding:0 11px;border-radius:11px}
  .footer{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px;margin-top:20px;padding-top:15px;border-top:1px solid var(--divider-color)}.feedback{min-height:16px;color:var(--secondary-text-color);font-size:11px;line-height:1.4}.feedback.error{color:var(--error-color,#c74343)}.power{display:flex;align-items:center;justify-content:center;gap:8px;min-width:120px;min-height:42px;padding:0 17px;border:0;border-radius:14px;background:var(--glow);color:var(--text-primary-color,#fff);font:inherit;font-size:13px;font-weight:780;cursor:pointer;transition:filter .15s ease,transform .15s ease}.power:hover:not(:disabled){filter:brightness(1.06);transform:translateY(-1px)}.power:active:not(:disabled){transform:translateY(0)}.power.off{border:1px solid var(--divider-color);background:var(--card-background-color,#fff);color:var(--primary-text-color)}.power ha-icon{--mdc-icon-size:18px}.power:disabled{opacity:.55;cursor:wait}
  .switch-panel{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:14px;margin-top:20px;padding:15px;border:1px solid color-mix(in srgb,var(--divider-color) 65%,transparent);border-radius:17px;background:color-mix(in srgb,var(--card-background-color,#fff) 82%,var(--secondary-background-color))}.switch-copy{min-width:0}.switch-name{overflow:hidden;font-size:14px;font-weight:750;text-overflow:ellipsis;white-space:nowrap}.switch-detail{margin-top:4px;color:var(--secondary-text-color);font-size:11px}.switch-panel .power{min-width:104px}
  @container card (max-width: 480px){.shell{padding:15px}.header{gap:8px}.identity{gap:9px}.icon-wrap{width:40px;height:40px}.pill{gap:5px;padding:6px 8px;font-size:10px}.summary{gap:8px;margin-top:15px}.summary-label{font-size:clamp(22px,7cqi,29px)}.summary-meta{font-size:11px}.section{margin-top:15px;padding-top:13px}.switch-panel{padding:12px;gap:8px}.switch-panel .power{min-width:84px;padding:0 12px}.footer{gap:8px;margin-top:16px;padding-top:12px}.power{min-width:100px;padding:0 12px}}
  @container card (max-width: 380px){.shell{padding:12px}.header{gap:6px}.pill{gap:4px;padding:5px 6px;font-size:9px}.summary-label{font-size:24px}.summary-meta{font-size:10px}.compact-control.light-compact{grid-template-columns:minmax(0,1fr)}.switch-panel .power{min-width:0;padding:0 8px}.footer{grid-template-columns:minmax(0,1fr) auto;gap:6px}.power{min-width:0;padding:0 8px;font-size:12px}}
  @media(prefers-reduced-motion:reduce){*,*::before,*::after{transition:none!important;scroll-behavior:auto!important}}
`;

const SCHEMA = [
  { name: "entity", required: true, selector: { entity: { domain: ["light", "switch"] } } },
  { name: "title", selector: { text: {} } },
  { name: "transition", selector: { number: { min: 0, max: 10, step: 0.1, mode: "slider", unit_of_measurement: "s" } } },
];

const LABELS = { entity: "Light or switch", title: "Card title", transition: "Transition duration" };

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function emit(target, name, detail) {
  const event = new Event(name, { bubbles: true, composed: true });
  event.detail = detail;
  target.dispatchEvent(event);
}

function asFinite(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function hsToHex(hue, saturation) {
  const h = ((Number(hue) % 360) + 360) % 360;
  const s = Math.max(0, Math.min(100, Number(saturation))) / 100;
  const c = s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = 1 - c;
  const tuple = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return `#${tuple.map((channel) => Math.round((channel + m) * 255).toString(16).padStart(2, "0")).join("")}`;
}

function rgbToHs(red, green, blue) {
  const [r, g, b] = [red, green, blue].map((value) => Math.max(0, Math.min(255, Number(value))) / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let hue = 0;
  if (delta) {
    if (max === r) hue = 60 * (((g - b) / delta) % 6);
    else if (max === g) hue = 60 * ((b - r) / delta + 2);
    else hue = 60 * ((r - g) / delta + 4);
  }
  return [Math.round((hue + 360) % 360), Math.round(max === 0 ? 0 : (delta / max) * 100)];
}

class LumaControlCard extends HTMLElement {
  static getConfigForm() {
    return { schema: SCHEMA, computeLabel: (field) => LABELS[field.name] || field.name };
  }

  static getStubConfig() { return { entity: "light.example", transition: 0.3 }; }

  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("Provide a valid Luma Control Card configuration.");
    if (!config.entity) throw new Error("Choose a light or switch entity for the Luma Control Card.");
    this._config = { transition: 0.3, ...config };
    this._root ??= this.attachShadow({ mode: "open" });
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    const entity = this.entity;
    const signature = entity ? JSON.stringify(entity) : "missing";
    // Home Assistant updates hass for unrelated entities very frequently. Avoid
    // replacing controls during a tap/drag unless this card's own entity changed.
    if (signature !== this._entitySignature) {
      this._entitySignature = signature;
      this.render();
    }
  }
  getCardSize() { return 3; }
  getGridOptions() { return { rows: 3, columns: 6, min_rows: 2, max_rows: 6 }; }

  get entity() { return this._hass?.states?.[this._config?.entity]; }
  get domain() { return this._config?.entity?.split(".")[0]; }
  get unavailable() { return !this.entity || ["unknown", "unavailable"].includes(String(this.entity.state).toLowerCase()); }
  get isOn() { return this.entity?.state === "on"; }
  get attrs() { return this.entity?.attributes || {}; }
  get colorModes() { return Array.isArray(this.attrs.supported_color_modes) ? this.attrs.supported_color_modes : []; }
  get supportsBrightness() { return this.colorModes.some((mode) => !["onoff", "unknown"].includes(mode)) || Number.isFinite(this.attrs.brightness); }
  get supportsTemperature() { return this.colorModes.includes("color_temp"); }
  get supportsColor() { return this.colorModes.some((mode) => ["hs", "rgb", "rgbw", "rgbww", "xy"].includes(mode)); }
  get supportsFlash() { return (Number(this.attrs.supported_features) & 8) === 8; }
  get effects() { return Array.isArray(this.attrs.effect_list) ? this.attrs.effect_list : []; }
  get transition() { return Math.max(0, Math.min(10, asFinite(this._transition, asFinite(this._config?.transition, 0.3)))); }

  title() {
    return this._config.title || this.attrs.friendly_name || this._config.entity;
  }

  icon() {
    return this.attrs.icon || (this.domain === "switch" ? (this.isOn ? "mdi:toggle-switch" : "mdi:toggle-switch-off-outline") : (this.isOn ? "mdi:lightbulb-on" : "mdi:lightbulb-outline"));
  }

  colorHex() {
    const rgb = this.attrs.rgb_color || this.attrs.rgbww_color || this.attrs.rgbw_color;
    if (Array.isArray(rgb) && rgb.length >= 3 && rgb.slice(0, 3).every((value) => Number.isFinite(Number(value)))) {
      return `#${rgb.slice(0, 3).map((value) => Math.round(Number(value)).toString(16).padStart(2, "0")).join("")}`;
    }
    const hs = this.attrs.hs_color;
    if (Array.isArray(hs) && hs.length >= 2) return hsToHex(hs[0], hs[1]);
    return "#ffc96b";
  }

  colorTemperature() {
    if (Number.isFinite(this.attrs.color_temp_kelvin)) return Math.round(this.attrs.color_temp_kelvin);
    if (Number.isFinite(this.attrs.color_temp) && this.attrs.color_temp > 0) return Math.round(1000000 / this.attrs.color_temp);
    return 3500;
  }

  tempRange() {
    const min = Math.round(asFinite(this.attrs.min_color_temp_kelvin, 2000));
    const max = Math.round(asFinite(this.attrs.max_color_temp_kelvin, 6535));
    return { min: Math.min(min, max), max: Math.max(min, max) };
  }

  stateLabel() {
    if (this.unavailable) return "Unavailable";
    return this.isOn ? "On" : "Off";
  }

  render() {
    if (!this._root || !this._config || !this._hass) return;
    const domain = this.domain;
    if (!["light", "switch"].includes(domain)) {
      this._root.innerHTML = `<style>${STYLE}</style><ha-card><div class="shell"><strong>Luma Control Card</strong><p>Select a light or switch entity.</p></div></ha-card>`;
      return;
    }
    const primaryColor = this.isOn ? (this.domain === "light" ? this.colorHex() : "var(--success-color,#38a987)") : "var(--primary-color)";
    const rootStyle = `<style>${STYLE}</style>`;
    const header = `<header class="header"><div class="identity"><div class="icon-wrap"><ha-icon icon="${escapeHtml(this.icon())}"></ha-icon></div><div class="identity-copy"><div class="eyebrow">${domain === "light" ? "Home Assistant · Light" : "Home Assistant · Switch"}</div><h2 class="title">${escapeHtml(this.title())}</h2></div></div><div class="pill ${this.unavailable ? "unavailable" : this.isOn ? "on" : ""}"><span class="dot"></span>${this.stateLabel()}</div></header>`;
    const shellStyle = `style="--glow:${escapeHtml(primaryColor)}"`;
    let body = domain === "light" ? this.renderLight() : this.renderSwitch();
    this._root.innerHTML = `${rootStyle}<ha-card><div class="shell" ${shellStyle}>${header}${body}</div></ha-card>`;
    this.bindEvents();
  }

  renderLight() {
    const brightness = Math.round((Math.max(0, Math.min(255, asFinite(this.attrs.brightness, this.isOn ? 255 : 0))) / 255) * 100);
    const unavailable = this.unavailable ? "disabled" : "";
    const action = this.isOn ? "Turn off" : "Turn on";
    const power = `<button class="power ${this.isOn ? "" : "off"}" data-action="power" ${unavailable || this._pending ? "disabled" : ""}><ha-icon icon="mdi:power"></ha-icon>${this._pending ? "Sending…" : action}</button>`;
    const hasLightControls = this.supportsBrightness || this.supportsTemperature || this.supportsColor || this.effects.length > 0 || this.supportsFlash;
    if (!this.isOn) {
      this._showControls = false;
      const message = this.unavailable ? "Entity is unavailable." : (this._feedback || "Turn on to show light controls.");
      return `<div class="compact-control"><div class="feedback ${this._error ? "error" : ""}" role="status">${escapeHtml(message)}</div>${power}</div>`;
    }
    if (!this._showControls || !hasLightControls) {
      const toggle = hasLightControls ? `<button class="controls-toggle" data-action="toggle-controls" aria-expanded="false">Adjust controls</button>` : "";
      return `<div class="compact-control light-compact">${power}${toggle}</div>`;
    }

    const { min, max } = this.tempRange();
    const temperature = Math.max(min, Math.min(max, this.colorTemperature()));
    const activeEffect = this.attrs.effect || "";
    const sections = [];

    sections.push(`<div class="summary"><div class="summary-label">${this.unavailable ? "Light unavailable" : this.isOn ? "Light is on" : "Light is off"}</div><div class="summary-meta">${this.unavailable ? "Check the entity connection" : this.supportsBrightness ? `${brightness}% brightness` : "Power control"}</div></div>`);
    sections.push(`<div class="section-control-head"><span class="section-title">Light controls</span><button class="controls-toggle" data-action="toggle-controls" aria-expanded="true">Hide controls</button></div>`);

    if (this.supportsBrightness) {
      sections.push(`<section class="section"><div class="section-head"><label class="section-title" for="brightness">Brightness</label><output class="value" data-brightness-label>${brightness}%</output></div><input class="range" id="brightness" data-control="brightness" type="range" min="1" max="100" step="1" value="${brightness || 1}" ${unavailable} aria-label="Brightness"><div class="range-labels"><span>Dim</span><span>Bright</span></div></section>`);
    }
    if (this.supportsTemperature) {
      sections.push(`<section class="section"><div class="section-head"><label class="section-title" for="temperature">Color temperature</label><output class="value" data-temperature-label>${temperature.toLocaleString()} K</output></div><input class="range" id="temperature" data-control="temperature" type="range" min="${min}" max="${max}" step="50" value="${temperature}" ${unavailable} aria-label="Color temperature"><div class="range-labels"><span>Warm</span><span>Cool</span></div></section>`);
    }
    if (this.supportsColor) {
      sections.push(`<section class="section"><div class="section-head"><label class="section-title" for="color">Color</label><output class="value" data-color-label>${this.colorHex().toUpperCase()}</output></div><div class="color-row"><input class="color-input" id="color" data-control="color" type="color" value="${this.colorHex()}" ${unavailable} aria-label="Choose light color"><div class="color-copy"><div class="color-hint">Choose a color; this light's supported color format is applied automatically.</div></div></div></section>`);
    }
    if (this.effects.length) {
      const options = [`<option value="off" ${["", "off"].includes(activeEffect) ? "selected" : ""}>No effect</option>`, ...this.effects.filter((effect) => effect !== "off").map((effect) => `<option value="${escapeHtml(effect)}" ${effect === activeEffect ? "selected" : ""}>${escapeHtml(effect)}</option>`)].join("");
      sections.push(`<section class="section"><div class="section-head"><label class="section-title" for="effect">Light effect</label></div><div class="select-wrap"><select class="select" id="effect" data-control="effect" ${unavailable}>${options}</select></div></section>`);
    }
    if (this.supportsFlash) {
      sections.push(`<section class="section"><div class="section-head"><span class="section-title">Flash</span><span class="value">Visual alert</span></div><div class="flash-actions"><button class="flash-action" data-flash="short" ${unavailable}>Short flash</button><button class="flash-action" data-flash="long" ${unavailable}>Long flash</button></div></section>`);
    }
    if (this.supportsBrightness || this.supportsTemperature || this.supportsColor || this.effects.length) {
      sections.push(`<section class="section"><div class="section-head"><label class="section-title" for="transition">Transition</label><output class="value" data-transition-label>${this.transition.toFixed(1)} s</output></div><input class="range" id="transition" data-control="transition" type="range" min="0" max="10" step="0.1" value="${this.transition}" ${unavailable} aria-label="Transition duration"><div class="range-labels"><span>Instant</span><span>10 seconds</span></div></section>`);
    }
    const message = this.unavailable ? "Entity is unavailable." : (this._feedback || (sections.length === 1 ? "This light reports power control only." : "Ready"));
    const messageClass = this._error ? "error" : "";
    sections.push(`<footer class="footer"><div class="feedback ${messageClass}" role="status">${escapeHtml(message)}</div>${power}</footer>`);
    return sections.join("");
  }

  renderSwitch() {
    const changed = this.entity?.last_changed;
    let detail = "Standard switch control";
    if (changed && !this.unavailable) {
      const seconds = Math.max(0, Math.floor((Date.now() - new Date(changed).getTime()) / 1000));
      const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });
      detail = `Changed ${rtf.format(-seconds, "second")}`;
    }
    const action = this.isOn ? "Turn off" : "Turn on";
    const power = `<button class="power ${this.isOn ? "" : "off"}" data-action="power" ${this.unavailable || this._pending ? "disabled" : ""}><ha-icon icon="mdi:power"></ha-icon>${this._pending ? "Sending…" : action}</button>`;
    if (!this.isOn) return `<div class="compact-control switch-compact">${power}</div>`;
    return `<div class="compact-control switch-compact switch-on"><div class="switch-detail">${escapeHtml(this._feedback || detail)}</div>${power}</div>${this._error ? `<div class="feedback error" role="alert">${escapeHtml(this._feedback)}</div>` : ""}`;
  }

  bindEvents() {
    this._root.querySelector('[data-action="power"]')?.addEventListener("click", () => this.togglePower());
    this._root.querySelector('[data-action="toggle-controls"]')?.addEventListener("click", () => {
      this._showControls = !this._showControls;
      this.render();
    });
    const brightness = this._root.querySelector('[data-control="brightness"]');
    brightness?.addEventListener("input", (event) => {
      const value = Number(event.currentTarget.value);
      const output = this._root.querySelector("[data-brightness-label]");
      if (output) output.textContent = `${value}%`;
    });
    brightness?.addEventListener("change", (event) => this.callLightService("turn_on", { brightness_pct: Number(event.currentTarget.value) }));
    const temperature = this._root.querySelector('[data-control="temperature"]');
    temperature?.addEventListener("input", (event) => {
      const output = this._root.querySelector("[data-temperature-label]");
      if (output) output.textContent = `${Number(event.currentTarget.value).toLocaleString()} K`;
    });
    temperature?.addEventListener("change", (event) => this.callLightService("turn_on", { color_temp_kelvin: Number(event.currentTarget.value) }));
    const color = this._root.querySelector('[data-control="color"]');
    color?.addEventListener("input", (event) => {
      const output = this._root.querySelector("[data-color-label]");
      if (output) output.textContent = event.currentTarget.value.toUpperCase();
    });
    color?.addEventListener("change", (event) => {
      const hex = event.currentTarget.value.slice(1);
      const rgb = [0, 2, 4].map((index) => Number.parseInt(hex.slice(index, index + 2), 16));
      this.callLightService("turn_on", { hs_color: rgbToHs(...rgb) });
    });
    this._root.querySelector('[data-control="effect"]')?.addEventListener("change", (event) => this.callLightService("turn_on", { effect: event.currentTarget.value || "off" }));
    this._root.querySelectorAll("[data-flash]").forEach((button) => button.addEventListener("click", () => this.callLightService("turn_on", { flash: button.dataset.flash })));
    const transition = this._root.querySelector('[data-control="transition"]');
    transition?.addEventListener("input", (event) => {
      this._transition = Number(event.currentTarget.value);
      const output = this._root.querySelector("[data-transition-label]");
      if (output) output.textContent = `${this.transition.toFixed(1)} s`;
    });
  }

  async togglePower() {
    if (this._pending || this.unavailable) return;
    if (this.domain === "light") return this.callLightService(this.isOn ? "turn_off" : "turn_on", {});
    return this.call("switch", this.isOn ? "turn_off" : "turn_on", { entity_id: this._config.entity });
  }

  async callLightService(service, data) {
    const payload = { entity_id: this._config.entity, transition: this.transition, ...data };
    return this.call("light", service, payload);
  }

  async call(domain, service, data) {
    if (this._pending || !this._hass?.callService) return;
    this._pending = true;
    this._error = false;
    this._feedback = "Sending command…";
    this.render();
    try {
      await this._hass.callService(domain, service, data);
      this._feedback = "Command sent";
      this._error = false;
      clearTimeout(this._feedbackTimer);
      this._feedbackTimer = setTimeout(() => { this._feedback = ""; this.render(); }, 1800);
    } catch (error) {
      this._feedback = error?.message || "Home Assistant could not send the command.";
      this._error = true;
      clearTimeout(this._feedbackTimer);
      this._feedbackTimer = setTimeout(() => { this._feedback = ""; this._error = false; this.render(); }, 5000);
    } finally {
      this._pending = false;
      this.render();
    }
  }
}

if (!customElements.get(CARD_TYPE)) customElements.define(CARD_TYPE, LumaControlCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === CARD_TYPE)) {
  window.customCards.push({ type: CARD_TYPE, name: "Luma Control Card", description: "Capability-aware controls for a Home Assistant light or switch.", preview: true, documentationURL: "https://github.com/Liionboy/lovelace-luma-control-card" });
}
console.info(`%c LUMA-CONTROL-CARD %c ${VERSION} `, "background:#5269d9;color:#fff;font-weight:700;", "background:transparent;color:var(--primary-text-color);font-weight:700;");

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="luma-control-card"))window.customCards.push({type:"luma-control-card",name:"Luma Control Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["lovelace-luma-control-card"]={version:"1.2.1",types:["luma-control-card"]};
})() } catch(error){suite.errors.push({component:"lovelace-luma-control-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","lovelace-luma-control-card",error);}
/* lovelace-pihole-control-card @ 1.2.0 (f47589197c4803d5d127885638d147564e1f08c3) */
try { (() => {
const knownTypes=["pihole-control-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["lovelace-pihole-control-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const CARD_TYPE = "pihole-control-card";
const PALETTES = new Set(["aurora", "ocean", "sunset", "lavender", "rainbow"]);
const SENSOR_FIELDS = [
  ["queries_entity", "Total DNS queries"], ["blocked_entity", "Blocked queries"],
  ["blocked_percentage_entity", "Blocked percentage"], ["domains_entity", "Domains on blocklist"],
  ["unique_clients_entity", "Unique clients"], ["seen_clients_entity", "Seen clients"],
  ["cached_entity", "Cached queries"], ["forwarded_entity", "Forwarded queries"],
  ["query_rate_entity", "Queries per minute"],
];
const PI_HOLE_PLATFORMS = new Set(["pi_hole", "pi_hole_v6"]);

function normalize(value) { return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, ""); }
function roleMatch(entry, aliases) {
  const text = normalize([entry.entity_id, entry.original_name, entry.name, entry.unique_id].join(" "));
  return aliases.some((alias) => text.includes(alias));
}
function discoverPiHoleInstances(registry, states) {
  const entries = (registry || []).filter((entry) => PI_HOLE_PLATFORMS.has(entry.platform) && states?.[entry.entity_id]);
  const buckets = new Map();
  for (const entry of entries) {
    const key = entry.config_entry_id || entry.device_id || entry.platform;
    if (!buckets.has(key)) buckets.set(key, { id: key, platform: entry.platform, name: entry.config_subentries?.[0]?.title || "", entries: [] });
    buckets.get(key).entries.push(entry);
  }
  return [...buckets.values()].map((instance) => {
    const byDomain = (domain) => instance.entries.filter((entry) => entry.entity_id?.startsWith(`${domain}.`));
    const choose = (domain, aliases, exclude = []) => byDomain(domain).find((entry) => roleMatch(entry, aliases) && !roleMatch(entry, exclude));
    const switches = byDomain("switch");
    const mainSwitch = switches.find((entry) => roleMatch(entry, ["adblocking", "blocking", "blockads"])) || switches.find((entry) => !roleMatch(entry, ["groupdefault", "groupallow", "groupexclude", "group"])) || switches[0];
    const status = choose("binary_sensor", ["status", "running", "reachable", "online"]);
    const roles = {
      entity: mainSwitch || switches[0],
      status_entity: status,
      queries_entity: choose("sensor", ["totalqueries", "dnsqueries", "queries"], ["blocked", "cached", "forwarded", "percentage"]),
      blocked_entity: choose("sensor", ["blockedqueries", "adsblocked", "blockedtoday"], ["percentage"]),
      blocked_percentage_entity: choose("sensor", ["blockedpercentage", "percentageblocked", "adspercentage"]),
      domains_entity: choose("sensor", ["domainsonadlists", "domainsblocked", "blocklistdomains"]),
      unique_clients_entity: choose("sensor", ["uniqueclients"]),
      seen_clients_entity: choose("sensor", ["clientsseen", "clientsvisible", "clientseverseen", "seenclients"]),
      cached_entity: choose("sensor", ["cachedqueries", "queriescached"]),
      forwarded_entity: choose("sensor", ["forwardedqueries", "queriesforwarded"]),
      query_rate_entity: choose("sensor", ["queriesperminute", "queryrate", "queriesfrequency"]),
      remaining_entity: choose("sensor", ["remaining", "timeuntil", "resumesin"]),
    };
    const entityId = (entry) => entry?.entity_id;
    const selected = new Set(Object.values(roles).map(entityId).filter(Boolean));
    const switchName = (entry) => normalize([entry.entity_id, entry.original_name, entry.name].join(" "));
    roles.group_switches = switches.filter((entry) => !selected.has(entry.entity_id) && !/blocking|blockads|adblocking/.test(switchName(entry))).map(entityId);
    roles.maintenance_buttons = byDomain("button").map(entityId);
    roles.update_entities = byDomain("update").map(entityId);
    instance.name ||= mainSwitch?.name || mainSwitch?.original_name || instance.entries.find((entry) => entry.name)?.name || `Pi-hole (${instance.platform})`;
    instance.roles = Object.fromEntries(Object.entries(roles).map(([key, value]) => [key, Array.isArray(value) ? value : entityId(value)]));
    return instance;
  }).filter((instance) => instance.roles.entity);
}

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:pihole-card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:var(--orbit-theme-card-radius,24px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1)));touch-action:pan-y}
  ha-card[data-palette="aurora"]{--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0);--accent3:var(--orbit-theme-accent-3,#54a9db)}ha-card[data-palette="ocean"]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}ha-card[data-palette="sunset"]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}ha-card[data-palette="lavender"]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}ha-card[data-palette="rainbow"]{--accent:#e84a72;--accent2:#f2a33a;--accent3:#7655d8}
  .shell{position:relative;padding:clamp(16px,3cqi,22px);background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 13%,transparent),transparent 54%),radial-gradient(ellipse at 100% 100%,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 48%))}.shell:before{position:absolute;top:0;right:22px;left:22px;height:3px;border-radius:0 0 4px 4px;background:var(--orbit-theme-strip-background,linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3)));content:""}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}.identity{display:flex;align-items:center;gap:12px;min-width:0}.icon-wrap{display:grid;place-items:center;flex:0 0 48px;width:48px;height:48px;border:1px solid color-mix(in srgb,var(--accent) 24%,transparent);border-radius:17px;background:linear-gradient(145deg,var(--accent),var(--accent2));box-shadow:0 7px 18px color-mix(in srgb,var(--accent) 22%,transparent);color:#fff}.icon-wrap ha-icon{--mdc-icon-size:25px}.identity-copy{min-width:0}.eyebrow{color:var(--orbit-theme-accent,var(--accent));font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.title{overflow:hidden;margin:3px 0 0;font-size:clamp(16px,2.5cqi,20px);font-weight:780;letter-spacing:-.03em;text-overflow:ellipsis;white-space:nowrap}
  .status{display:flex;align-items:center;gap:7px;padding:7px 10px;border:1px solid color-mix(in srgb,currentColor 12%,transparent);border-radius:999px;background:color-mix(in srgb,currentColor 8%,var(--card-background-color,#fff));color:var(--secondary-text-color);font-size:11px;font-weight:750;white-space:nowrap}.status-dot{width:7px;height:7px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 16%,transparent)}.status.running{color:var(--success-color,#168b68)}.status.stopped{color:var(--error-color,#c74343)}
  .metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:18px}.metric{min-width:0;overflow:hidden;padding:14px;border:1px solid color-mix(in srgb,var(--accent) 18%,var(--divider-color));border-radius:18px;background:linear-gradient(130deg,color-mix(in srgb,var(--accent) 9%,var(--card-background-color,#fff)),color-mix(in srgb,var(--accent2) 5%,var(--card-background-color,#fff)) 64%,var(--card-background-color,#fff))}.metric-label{overflow:hidden;color:var(--secondary-text-color);font-size:10px;font-weight:760;letter-spacing:.08em;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap}.metric-value{overflow:hidden;margin-top:7px;color:var(--accent);font-size:clamp(19px,3.3cqi,26px);font-weight:830;letter-spacing:-.045em;text-overflow:ellipsis;white-space:nowrap;font-variant-numeric:tabular-nums}.metrics-secondary{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:9px}.mini{display:flex;align-items:center;gap:8px;min-width:0;padding:10px;border:1px solid color-mix(in srgb,var(--divider-color) 68%,transparent);border-radius:14px;background:color-mix(in srgb,var(--card-background-color,#fff) 88%,var(--accent))}.mini ha-icon{flex:none;color:var(--accent);--mdc-icon-size:18px}.mini-copy{min-width:0}.mini-value{overflow:hidden;font-size:12px;font-weight:780;text-overflow:ellipsis;white-space:nowrap;font-variant-numeric:tabular-nums}.mini-label{overflow:hidden;margin-top:2px;color:var(--secondary-text-color);font-size:9px;text-overflow:ellipsis;white-space:nowrap}
  .metric[data-tone],.mini[data-tone]{--sensor-accent:var(--accent)}.metric[data-tone]{border-color:color-mix(in srgb,var(--sensor-accent) 23%,var(--divider-color));background:linear-gradient(130deg,color-mix(in srgb,var(--sensor-accent) 10%,var(--card-background-color,#fff)),color-mix(in srgb,var(--sensor-accent) 4%,var(--card-background-color,#fff)) 64%,var(--card-background-color,#fff))}.metric[data-tone] .metric-value{color:var(--sensor-accent)}.mini[data-tone]{background:color-mix(in srgb,var(--card-background-color,#fff) 88%,var(--sensor-accent))}.mini[data-tone] ha-icon{color:var(--sensor-accent)}
  ha-card[data-palette="rainbow"] [data-tone="queries_entity"]{--sensor-accent:#e84a72}ha-card[data-palette="rainbow"] [data-tone="blocked_entity"]{--sensor-accent:#f28c28}ha-card[data-palette="rainbow"] [data-tone="blocked_percentage_entity"]{--sensor-accent:#e0b422}ha-card[data-palette="rainbow"] [data-tone="domains_entity"]{--sensor-accent:#49a86c}ha-card[data-palette="rainbow"] [data-tone="unique_clients_entity"]{--sensor-accent:#13a6a6}ha-card[data-palette="rainbow"] [data-tone="seen_clients_entity"]{--sensor-accent:#3986d7}ha-card[data-palette="rainbow"] [data-tone="cached_entity"]{--sensor-accent:#685bd4}ha-card[data-palette="rainbow"] [data-tone="forwarded_entity"]{--sensor-accent:#a44fc2}ha-card[data-palette="rainbow"] [data-tone="query_rate_entity"]{--sensor-accent:#d34b9a}
  .panel{margin-top:15px;padding:14px;border:1px solid color-mix(in srgb,var(--accent) 18%,var(--divider-color));border-radius:18px;background:linear-gradient(125deg,color-mix(in srgb,var(--accent) 8%,var(--card-background-color,#fff)),color-mix(in srgb,var(--accent2) 4%,var(--card-background-color,#fff)) 62%,var(--card-background-color,#fff))}.panel-head{display:flex;align-items:center;justify-content:space-between;gap:10px}.panel-title{font-size:12px;font-weight:780}.instance-picker{box-sizing:border-box;width:100%;margin-top:12px;padding:9px 11px;border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:11px}.switch-row{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:12px}.switch-copy{display:flex;align-items:center;gap:9px;min-width:0}.switch-icon{display:grid;place-items:center;flex:none;width:32px;height:32px;border-radius:11px;background:color-mix(in srgb,var(--accent) 12%,var(--card-background-color,#fff));color:var(--accent)}.switch-name{overflow:hidden;font-size:12px;font-weight:720;text-overflow:ellipsis;white-space:nowrap}.toggle{display:flex;align-items:center;justify-content:center;gap:6px;min-width:84px;min-height:38px;padding:0 11px;border:0;border-radius:13px;background:linear-gradient(120deg,var(--accent),var(--accent2));box-shadow:0 5px 13px color-mix(in srgb,var(--accent) 20%,transparent);color:#fff;font:inherit;font-size:11px;font-weight:780;cursor:pointer;transition:filter .16s ease,transform .16s ease}.toggle:hover:not(:disabled){filter:brightness(1.07);transform:translateY(-1px)}.toggle:active:not(:disabled){transform:scale(.98)}.toggle:disabled{opacity:.52;cursor:wait}.toggle.off{border:1px solid var(--divider-color);background:var(--card-background-color,#fff);box-shadow:none;color:var(--primary-text-color)}.pause-row{display:flex;flex-wrap:wrap;gap:7px;margin-top:12px}.pause{min-height:32px;padding:0 10px;border:1px solid color-mix(in srgb,var(--accent) 30%,var(--divider-color));border-radius:11px;background:color-mix(in srgb,var(--accent) 7%,var(--card-background-color,#fff));color:var(--accent);font:inherit;font-size:10px;font-weight:750;cursor:pointer}.pause:disabled{opacity:.5;cursor:wait}.hint{margin-top:10px;color:var(--secondary-text-color);font-size:10px;line-height:1.4}.hint.error{color:var(--error-color,#c74343)}
  .groups{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:12px}.group{display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:0;padding:9px 10px;border:1px solid color-mix(in srgb,var(--divider-color) 68%,transparent);border-radius:13px;background:var(--card-background-color,#fff)}.group-name{overflow:hidden;font-size:10px;font-weight:700;text-overflow:ellipsis;white-space:nowrap}.group .toggle{min-width:64px;min-height:30px;padding:0 8px;font-size:10px}
  .fold{margin-top:12px;border-top:1px solid color-mix(in srgb,var(--divider-color) 65%,transparent)}.fold summary{padding:12px 2px 4px;font-size:11px;font-weight:760;cursor:pointer}.actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;padding-top:8px}.action{display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:0;min-height:38px;padding:7px 9px;border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:10px;font-weight:700;text-align:left;cursor:pointer}.action:disabled{opacity:.55;cursor:wait}.action-confirm{display:flex;gap:5px}.action-confirm button{border:0;border-radius:8px;padding:5px 7px;background:var(--accent);color:#fff;font:inherit;font-size:9px;font-weight:750;cursor:pointer}.action-confirm button:last-child{background:var(--secondary-background-color);color:var(--primary-text-color)}.versions{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px;padding-top:10px;border-top:1px solid color-mix(in srgb,var(--divider-color) 65%,transparent)}.version{padding:5px 8px;border-radius:9px;background:color-mix(in srgb,var(--accent) 8%,var(--card-background-color,#fff));color:var(--secondary-text-color);font-size:9px}.version strong{color:var(--accent)}
  @container pihole-card (max-width:480px){.shell{padding:15px}.identity{gap:9px}.icon-wrap{flex-basis:40px;width:40px;height:40px;border-radius:14px}.icon-wrap ha-icon{--mdc-icon-size:22px}.status{gap:5px;padding:6px 8px;font-size:10px}.metrics{gap:8px;margin-top:14px}.metric{padding:11px;border-radius:15px}.metric-value{font-size:clamp(18px,6cqi,23px)}.metrics-secondary{gap:6px}.mini{gap:6px;padding:8px}.panel{padding:12px}.groups{gap:6px}}
  @container pihole-card (max-width:360px){.shell{padding:12px}.header{gap:7px}.identity{gap:7px}.icon-wrap{flex-basis:36px;width:36px;height:36px}.title{font-size:15px}.status{padding:5px 6px;font-size:9px}.metric{padding:9px}.metric-label{font-size:9px}.metric-value{font-size:17px}.metrics-secondary{grid-template-columns:repeat(2,minmax(0,1fr))}.panel{padding:10px}.groups{grid-template-columns:minmax(0,1fr)}}
  @media(prefers-reduced-motion:reduce){*,*:before,*:after{transition:none!important;scroll-behavior:auto!important}}
`;

function escapeHtml(value) { return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]); }
function numeric(value) { if (value === null || value === undefined || value === "") return null; const n = Number(value); return Number.isFinite(n) ? n : null; }
function formatNumber(entity) {
  if (!entity || ["unknown", "unavailable"].includes(String(entity.state).toLowerCase())) return "—";
  const n = numeric(entity.state); if (n === null) return String(entity.state);
  const formatted = new Intl.NumberFormat(undefined, { maximumFractionDigits: 1 }).format(n);
  const unit = entity.attributes?.unit_of_measurement || "";
  return `${formatted}${unit === "%" ? "%" : unit ? ` ${unit}` : ""}`;
}

class PiHoleControlCard extends HTMLElement {
  static getStubConfig() { return { mode: "auto", palette: "aurora", pause_service_domain: "auto" }; }
  static getConfigForm() {
    const labels = { entity: "Pi-hole blocking switch", status_entity: "Service status", group_switches: "Group switches", maintenance_buttons: "Maintenance buttons", update_entities: "Version entities", queries_entity: "Total queries", blocked_entity: "Blocked queries", blocked_percentage_entity: "Blocked percentage", domains_entity: "Domains on blocklist", unique_clients_entity: "Unique clients", seen_clients_entity: "Seen clients", cached_entity: "Cached queries", forwarded_entity: "Forwarded queries", query_rate_entity: "Queries per minute", remaining_entity: "Time until blocking resumes", pause_service_domain: "Pause service domain" };
    const schema = [
      { name: "mode", selector: { select: { options: ["auto", "manual"], mode: "dropdown" } } },
      { name: "entity", selector: { entity: { domain: ["switch"] } } },
      { name: "instance", selector: { text: {} } },
      { name: "status_entity", selector: { entity: { domain: ["binary_sensor"] } } },
      { name: "title", selector: { text: {} } }, { name: "icon", selector: { icon: {} } },
      { name: "palette", selector: { select: { options: ["aurora", "ocean", "sunset", "lavender", "rainbow"], mode: "dropdown" } } },
      { name: "pause_service_domain", selector: { select: { options: ["auto", "pi_hole", "pi_hole_v6"], mode: "dropdown" } } },
      { name: "group_switches", selector: { entity: { domain: ["switch"], multiple: true } } },
      { name: "maintenance_buttons", selector: { entity: { domain: ["button"], multiple: true } } },
      { name: "update_entities", selector: { entity: { domain: ["update"], multiple: true } } },
      { name: "remaining_entity", selector: { entity: { domain: ["sensor"] } } },
    ];
    for (const [name] of SENSOR_FIELDS) schema.push({ name, selector: { entity: { domain: ["sensor"] } } });
    return { schema, computeLabel: (field) => labels[field.name] || field.name.replaceAll("_", " ") };
  }
  constructor() {
    super(); this.attachShadow({ mode: "open" }); this._config = {}; this._pending = new Set(); this._feedback = ""; this._error = false; this._confirmEntity = ""; this._registry = null; this._registryLoading = false; this._registryError = false; this._selectedInstance = "";
    this.shadowRoot.addEventListener("click", (event) => { const button = event.composedPath().find((node) => node?.tagName === "BUTTON" && node.dataset?.action); if (button) void this._action(button.dataset.action, button.dataset.entity || "", button.dataset.duration || ""); });
    this.shadowRoot.addEventListener("change", (event) => { if (event.target?.dataset?.instanceSelect) { this._selectedInstance = event.target.value; this._feedback = ""; this._render(); } });
  }
  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("Invalid configuration for the Pi-hole Control Card.");
    this._config = { ...config, palette: PALETTES.has(config.palette) ? config.palette : "aurora" };
    if (config.instance) this._selectedInstance = config.instance;
    this._render();
  }
  set hass(value) {
    this._hass = value;
    const auto = this._config.mode === "auto" || (!this._config.mode && !this._config.entity);
    if (auto && !this._registry && !this._registryLoading) this._loadRegistry(value);
    const ids = [this._config.entity, this._config.status_entity, this._config.remaining_entity, ...SENSOR_FIELDS.map(([key]) => this._config[key]), ...(Array.isArray(this._config.group_switches) ? this._config.group_switches : []), ...(Array.isArray(this._config.maintenance_buttons) ? this._config.maintenance_buttons : []), ...(Array.isArray(this._config.update_entities) ? this._config.update_entities : [])];
    const signature = JSON.stringify([ids.map((id) => id ? value?.states?.[id] : null), this._registry, this._selectedInstance]);
    if (signature !== this._signature) { this._signature = signature; this._render(); }
  }
  get hass() { return this._hass; }
  getCardSize() { return 5; }
  async _loadRegistry(hass) {
    if (!hass?.connection?.sendMessagePromise) { this._registryError = true; this._render(); return; }
    this._registryLoading = true; this._render();
    try {
      this._registry = await hass.connection.sendMessagePromise({ type: "config/entity_registry/list" });
      this._registryError = false;
    } catch (_) { this._registry = []; this._registryError = true; }
    finally { this._registryLoading = false; this._render(); }
  }
  _automaticConfig() {
    if (this._config.mode === "manual" || (this._config.mode !== "auto" && this._config.entity)) return { ...this._config };
    const instances = discoverPiHoleInstances(this._registry, this._hass?.states);
    const selected = instances.find((instance) => instance.id === this._selectedInstance) || instances[0];
    if (!selected) return null;
    this._selectedInstance = selected.id;
    return { ...selected.roles, ...this._config, entity: selected.roles.entity, status_entity: selected.roles.status_entity, title: this._config.title || selected.name, palette: this._config.palette };
  }
  _state(entityId) { return entityId ? this._hass?.states?.[entityId] : undefined; }
  _serviceDomain() {
    const configured = this._config.pause_service_domain; if (configured && configured !== "auto") return configured;
    const services = this._hass?.services || {}; if (services.pi_hole_v6?.disable) return "pi_hole_v6"; if (services.pi_hole?.disable) return "pi_hole"; return "";
  }
  async _action(action, entityId, duration) {
    if (!this._hass?.callService || this._pending.has(action + entityId)) return;
    const config = this._automaticConfig();
    if (action === "request-button") { this._confirmEntity = entityId; this._render(); return; }
    if (action === "cancel-button") { this._confirmEntity = ""; this._render(); return; }
    let domain, service, data;
    if (action === "toggle") { const state = this._state(entityId); if (!state || !["on", "off"].includes(state.state)) return; domain = "switch"; service = state.state === "on" ? "turn_off" : "turn_on"; data = { entity_id: entityId }; }
    else if (action === "pause") { domain = this._serviceDomain(); if (!domain) { this._feedback = "Pause service not found. Check the service domain setting."; this._error = true; this._render(); return; } service = "disable"; data = { entity_id: config?.entity, duration }; }
    else if (action === "confirm-button") { domain = "button"; service = "press"; data = { entity_id: entityId }; }
    else return;
    const key = action + entityId; this._pending.add(key); this._feedback = action === "pause" ? "Pausing ad-blocking…" : "Updating switch…"; this._error = false; this._render();
    try { await this._hass.callService(domain, service, data); this._feedback = action === "pause" ? `Ad-blocking paused for ${duration}.` : "Command sent."; }
    catch (error) { this._feedback = error?.message || "Home Assistant could not send the command."; this._error = true; }
    finally { this._pending.delete(key); if (action === "confirm-button") this._confirmEntity = ""; this._render(); }
  }
  _render() {
    if (!this._hass || !this.shadowRoot) return;
    const config = this._automaticConfig();
    const actionsOpen = this.shadowRoot.querySelector("details.fold")?.open || false;
    if (!config?.entity) {
      const message = this._registryLoading ? "Searching for Pi-hole integrations…" : this._registryError ? "Could not read Home Assistant's entity registry. Use an administrator account or configure the entities manually." : "No Pi-hole integration was found. Check that its entities are enabled, or switch to manual setup.";
      this.shadowRoot.innerHTML = `<style>${STYLE}</style><ha-card data-palette="${this._config.palette}"><div class="shell"><header class="header"><div class="identity"><div class="icon-wrap"><ha-icon icon="mdi:pi-hole"></ha-icon></div><div class="identity-copy"><div class="eyebrow">Home Assistant · Network</div><h2 class="title">${escapeHtml(this._config.title || "Pi-hole")}</h2></div></div></header><div class="hint ${this._registryError ? "error" : ""}" role="status">${escapeHtml(message)}</div></div></ha-card>`;
      return;
    }
    const power = this._state(config.entity), status = this._state(config.status_entity);
    const isRunning = status ? status.state === "on" : Boolean(power && !["unknown", "unavailable"].includes(power.state));
    const statusText = status ? (status.state === "on" ? "Running" : status.state === "off" ? "Stopped" : "Unavailable") : isRunning ? "Connected" : "Unavailable";
    const stats = SENSOR_FIELDS.filter(([key]) => config[key]).map(([key, label]) => ({ key, label, entity: this._state(config[key]) }));
    const mainKeys = new Set(["queries_entity", "blocked_entity", "blocked_percentage_entity", "domains_entity"]);
    const mainStats = stats.filter((item) => mainKeys.has(item.key)); const secondaryStats = stats.filter((item) => !mainKeys.has(item.key));
    const metricHtml = (item) => `<div class="metric" data-tone="${item.key}"><div class="metric-label">${escapeHtml(item.label)}</div><div class="metric-value">${escapeHtml(formatNumber(item.entity))}</div></div>`;
    const secondaryHtml = (item) => `<div class="mini" data-tone="${item.key}"><ha-icon icon="${item.label.toLowerCase().includes("client") ? "mdi:account-group-outline" : item.label.toLowerCase().includes("minute") ? "mdi:chart-line" : "mdi:dns-outline"}"></ha-icon><div class="mini-copy"><div class="mini-value">${escapeHtml(formatNumber(item.entity))}</div><div class="mini-label">${escapeHtml(item.label)}</div></div></div>`;
    const groupIds = Array.isArray(config.group_switches) ? config.group_switches : config.group_switches ? [config.group_switches] : [];
    const groups = groupIds.filter((id) => id && id !== config.entity).map((id) => { const entity = this._state(id), on = entity?.state === "on"; return `<div class="group"><span class="group-name">${escapeHtml(entity?.attributes?.friendly_name || id)}</span><button class="toggle ${on ? "" : "off"}" data-action="toggle" data-entity="${escapeHtml(id)}" ${!entity || this._pending.has("toggle" + id) ? "disabled" : ""}>${on ? "Enabled" : "Disabled"}</button></div>`; }).join("");
    const pauseButtons = this._serviceDomain() ? `<div class="pause-row"><button class="pause" data-action="pause" data-entity="${escapeHtml(config.entity)}" data-duration="00:01:00" ${power?.state !== "on" || this._pending.has("pause" + config.entity) ? "disabled" : ""}>Pause · 1 min</button><button class="pause" data-action="pause" data-entity="${escapeHtml(config.entity)}" data-duration="00:05:00" ${power?.state !== "on" || this._pending.has("pause" + config.entity) ? "disabled" : ""}>5 min</button><button class="pause" data-action="pause" data-entity="${escapeHtml(config.entity)}" data-duration="00:15:00" ${power?.state !== "on" || this._pending.has("pause" + config.entity) ? "disabled" : ""}>15 min</button></div>` : "";
    const actionIds = Array.isArray(config.maintenance_buttons) ? config.maintenance_buttons : config.maintenance_buttons ? [config.maintenance_buttons] : [];
    const actions = actionIds.filter(Boolean).map((id) => { const entity = this._state(id), name = entity?.attributes?.friendly_name || id; const confirmed = this._confirmEntity === id; return `<div class="action"><span>${escapeHtml(name)}</span>${confirmed ? `<span class="action-confirm"><button data-action="confirm-button" data-entity="${escapeHtml(id)}" ${this._pending.has("confirm-button" + id) ? "disabled" : ""}>Confirm</button><button data-action="cancel-button" data-entity="${escapeHtml(id)}">Cancel</button></span>` : `<button data-action="request-button" data-entity="${escapeHtml(id)}" ${!entity || this._pending.has("confirm-button" + id) ? "disabled" : ""}>Run</button>`}</div>`; }).join("");
    const updateIds = Array.isArray(config.update_entities) ? config.update_entities : config.update_entities ? [config.update_entities] : [];
    const versions = updateIds.filter(Boolean).map((id) => this._state(id)).filter(Boolean).map((entity) => `<span class="version">${escapeHtml(entity.attributes?.title || entity.attributes?.friendly_name || "Component")} <strong>${escapeHtml(entity.attributes?.installed_version || entity.state)}</strong>${entity.state === "on" ? " · Update available" : ""}</span>`).join("");
    const remaining = numeric(this._state(config.remaining_entity)?.state);
    const remainingText = remaining > 0 ? `<div class="hint">Ad-blocking resumes in ${escapeHtml(new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(Math.ceil(remaining / 60)))} min.</div>` : "";
    const instances = this._config.mode === "manual" ? [] : discoverPiHoleInstances(this._registry, this._hass?.states);
    const instancePicker = instances.length > 1 ? `<select class="instance-picker" data-instance-select aria-label="Pi-hole instance">${instances.map((instance) => `<option value="${escapeHtml(instance.id)}" ${instance.id === this._selectedInstance ? "selected" : ""}>${escapeHtml(instance.name)}</option>`).join("")}</select>` : "";
    this.shadowRoot.innerHTML = `<style>${STYLE}</style><ha-card data-palette="${config.palette}"><div class="shell"><header class="header"><div class="identity"><div class="icon-wrap"><ha-icon icon="${escapeHtml(config.icon || "mdi:pi-hole")}"></ha-icon></div><div class="identity-copy"><div class="eyebrow">Home Assistant · Network</div><h2 class="title">${escapeHtml(config.title || "Pi-hole")}</h2></div></div><div class="status ${isRunning ? "running" : statusText === "Stopped" ? "stopped" : ""}"><span class="status-dot"></span>${escapeHtml(statusText)}</div></header>${instancePicker}${mainStats.length ? `<section class="metrics">${mainStats.map(metricHtml).join("")}</section>` : ""}${secondaryStats.length ? `<section class="metrics-secondary">${secondaryStats.map(secondaryHtml).join("")}</section>` : ""}<section class="panel"><div class="panel-head"><span class="panel-title">Ad-blocking</span><span class="switch-name">${power?.state === "on" ? "Enabled" : power?.state === "off" ? "Disabled" : "Unavailable"}</span></div><div class="switch-row"><div class="switch-copy"><span class="switch-icon"><ha-icon icon="mdi:shield-check-outline"></ha-icon></span><span class="switch-name">${escapeHtml(power?.attributes?.friendly_name || "Pi-hole")}</span></div><button class="toggle ${power?.state === "off" ? "off" : ""}" data-action="toggle" data-entity="${escapeHtml(config.entity)}" ${!power || !["on", "off"].includes(power.state) || this._pending.has("toggle" + config.entity) ? "disabled" : ""}>${power?.state === "on" ? "Disable" : "Enable"}</button></div>${pauseButtons}${remainingText}${groups ? `<div class="groups">${groups}</div>` : ""}${actions ? `<details class="fold" ${actionsOpen ? "open" : ""}><summary>Maintenance actions</summary><div class="actions">${actions}</div></details>` : ""}${versions ? `<div class="versions">${versions}</div>` : ""}${this._feedback ? `<div class="hint ${this._error ? "error" : ""}" role="status">${escapeHtml(this._feedback)}</div>` : ""}</section></div></ha-card>`;
  }
}

if (!customElements.get(CARD_TYPE)) customElements.define(CARD_TYPE, PiHoleControlCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: CARD_TYPE, name: "Pi-hole Control Card", description: "A themed Pi-hole dashboard with DNS statistics, ad-blocking controls, and group switches." });

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="pihole-control-card"))window.customCards.push({type:"pihole-control-card",name:"Pi-hole Control Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["lovelace-pihole-control-card"]={version:"1.2.0",types:["pihole-control-card"]};
})() } catch(error){suite.errors.push({component:"lovelace-pihole-control-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","lovelace-pihole-control-card",error);}
/* lovelace-sensor-meter-card @ 1.0.2 (609bf12c1baad9197bf14ee96fd7251ade713844) */
try { (() => {
const knownTypes=["sensor-meter-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["lovelace-sensor-meter-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const CARD_TYPE = "sensor-meter-card";
const PALETTES = new Set(["aurora", "ocean", "sunset", "lavender"]);
const LEGACY_PALETTES = { green: "aurora", blue: "ocean", red: "sunset", orange: "sunset", teal: "aurora", purple: "lavender" };
const FORM_LABELS = {
  entity: "Sensor entity",
  title: "Card title",
  icon: "Icon override",
  palette: "Color palette",
  min: "Minimum value",
  max: "Maximum value",
  decimals: "Decimal places",
  show_bar: "Show progress bar",
};

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:sensor-meter-card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:var(--orbit-theme-card-radius,24px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1)));touch-action:pan-y}
  ha-card[data-palette="aurora"]{--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0);--accent3:var(--orbit-theme-accent-3,#54a9db)}
  ha-card[data-palette="ocean"]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}
  ha-card[data-palette="sunset"]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}
  ha-card[data-palette="lavender"]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}
  .shell{position:relative;padding:clamp(15px,3cqi,21px);background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 13%,transparent),transparent 54%),radial-gradient(ellipse at 100% 100%,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 48%))}
  .shell:before{position:absolute;top:0;right:22px;left:22px;height:3px;border-radius:0 0 4px 4px;background:var(--orbit-theme-strip-background,linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3)));content:""}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}.identity{display:flex;align-items:center;gap:11px;min-width:0}.icon-wrap{display:grid;place-items:center;flex:0 0 44px;width:44px;height:44px;border:1px solid color-mix(in srgb,var(--accent) 24%,transparent);border-radius:15px;background:linear-gradient(145deg,var(--accent),var(--accent2));box-shadow:0 7px 18px color-mix(in srgb,var(--accent) 22%,transparent);color:#fff}.icon-wrap ha-icon{--mdc-icon-size:23px}.identity-copy{min-width:0}.eyebrow{color:var(--orbit-theme-accent,var(--accent));font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.title{overflow:hidden;margin:3px 0 0;font-size:clamp(15px,2.3cqi,19px);font-weight:780;letter-spacing:-.03em;text-overflow:ellipsis;white-space:nowrap}
  .reading{flex:0 1 auto;min-width:0;text-align:right}.reading-value{overflow:hidden;color:var(--accent);font-size:clamp(17px,2.6cqi,22px);font-weight:830;letter-spacing:-.04em;line-height:1.1;text-overflow:ellipsis;white-space:nowrap;font-variant-numeric:tabular-nums}.reading-label{margin-top:4px;color:var(--secondary-text-color);font-size:9px;font-weight:750;letter-spacing:.1em;text-transform:uppercase}
  .meter-panel{margin-top:15px;padding:12px 13px;border:1px solid color-mix(in srgb,var(--accent) 17%,var(--divider-color));border-radius:17px;background:linear-gradient(135deg,color-mix(in srgb,var(--accent) 7%,var(--card-background-color,#fff)),color-mix(in srgb,var(--accent2) 4%,var(--card-background-color,#fff)) 68%,var(--card-background-color,#fff))}.section-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:9px}.section-title{font-size:11px;font-weight:760}.meter-pct{color:var(--accent);font-size:11px;font-weight:800;font-variant-numeric:tabular-nums}.track{height:8px;overflow:hidden;border-radius:999px;background:color-mix(in srgb,var(--accent) 12%,var(--secondary-background-color,var(--card-background-color,#fff)))}.fill{height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--accent),var(--accent2));box-shadow:0 1px 7px color-mix(in srgb,var(--accent) 28%,transparent);transition:width .35s ease}.range-limits{display:flex;justify-content:space-between;gap:8px;margin-top:7px;color:var(--secondary-text-color);font-size:9px;font-variant-numeric:tabular-nums}.hint{margin-top:12px;color:var(--secondary-text-color);font-size:10px;line-height:1.4}
  @container sensor-meter-card (max-width:480px){.shell{padding:14px}.header{gap:9px}.identity{gap:9px}.icon-wrap{flex-basis:40px;width:40px;height:40px;border-radius:14px}.icon-wrap ha-icon{--mdc-icon-size:21px}.reading-value{font-size:17px}.meter-panel{margin-top:12px;padding:11px;border-radius:15px}}
  @container sensor-meter-card (max-width:360px){.shell{padding:12px}.header{gap:7px}.identity{gap:7px}.icon-wrap{flex-basis:36px;width:36px;height:36px;border-radius:12px}.icon-wrap ha-icon{--mdc-icon-size:19px}.eyebrow{font-size:8px}.title{font-size:14px}.reading-value{font-size:15px}.reading-label{font-size:8px}.meter-panel{margin-top:10px;padding:10px}.section-title,.meter-pct{font-size:10px}}
  @media(prefers-reduced-motion:reduce){*,*::before,*::after{transition:none!important;scroll-behavior:auto!important}}
`;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function finiteNumber(value) {
  if (value === null || value === undefined || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

class SensorMeterCard extends HTMLElement {
  static getStubConfig() {
    return { entity: "sensor.example", icon: "mdi:chart-box-outline", palette: "ocean", min: 0, max: 100, show_bar: true };
  }

  static getConfigForm() {
    return { schema: [
      { name: "entity", required: true, selector: { entity: { domain: ["sensor"] } } },
      { name: "title", selector: { text: {} } },
      { name: "icon", selector: { icon: {} } },
      { name: "palette", selector: { select: { options: ["aurora", "ocean", "sunset", "lavender"], mode: "dropdown" } } },
      { name: "min", selector: { number: { mode: "box", step: 1 } } },
      { name: "max", selector: { number: { mode: "box", step: 1 } } },
      { name: "decimals", selector: { number: { min: 0, max: 6, step: 1, mode: "box" } } },
      { name: "show_bar", selector: { boolean: {} } },
    ], computeLabel: (field) => FORM_LABELS[field.name] || field.name };
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = {};
    this._holdTimer = undefined;
    this._holdStart = undefined;
    this._longPressTriggered = false;
    this.addEventListener("pointerdown", (event) => this._onPointerDown(event));
    this.addEventListener("pointermove", (event) => this._onPointerMove(event));
    this.addEventListener("pointerup", () => this._onPointerEnd());
    this.addEventListener("pointercancel", () => this._onPointerEnd());
    this.addEventListener("pointerleave", () => this._onPointerEnd());
    this.addEventListener("contextmenu", (event) => this._onContextMenu(event));
    this.shadowRoot.addEventListener("click", () => this._onCardClick());
  }

  setConfig(config) {
    if (!config || typeof config !== "object" || !config.entity) throw new Error("Choose a sensor entity for the Sensor Meter Card.");
    const min = finiteNumber(config.min);
    const max = finiteNumber(config.max);
    if (min !== null && max !== null && max <= min) throw new Error("The maximum value must be greater than the minimum value.");
    const palette = PALETTES.has(config.palette) ? config.palette : LEGACY_PALETTES[config.palette] || "ocean";
    this._config = { show_bar: true, ...config, palette };
    this._render();
  }

  set hass(value) {
    this._hass = value;
    const entity = this._entity();
    const signature = entity ? JSON.stringify(entity) : "missing";
    if (signature !== this._entitySignature) {
      this._entitySignature = signature;
      this._render();
    }
  }

  get hass() { return this._hass; }
  getCardSize() { return 2; }

  _entity() { return this._hass?.states?.[this._config.entity]; }

  _formatValue(value, attributes) {
    const configured = finiteNumber(this._config.decimals);
    const suggested = finiteNumber(attributes.suggested_display_precision);
    const decimals = configured === null ? Math.min(2, Math.max(0, suggested ?? 2)) : Math.min(6, Math.max(0, Math.trunc(configured)));
    const formatted = new Intl.NumberFormat(undefined, {
      minimumFractionDigits: configured === null && suggested === null ? 0 : decimals,
      maximumFractionDigits: decimals,
    }).format(value);
    const unit = attributes.unit_of_measurement || "";
    return `${formatted}${unit === "%" ? "%" : unit ? ` ${unit}` : ""}`;
  }

  _onCardClick() {
    if (this._longPressTriggered) {
      this._longPressTriggered = false;
      return;
    }
    this._showMoreInfo();
  }

  _onPointerDown(event) {
    if (event.button !== 0) return;
    this._holdStart = { x: event.clientX, y: event.clientY };
    this._holdTimer = setTimeout(() => {
      this._longPressTriggered = true;
      this._showMoreInfo();
    }, 600);
  }

  _onPointerMove(event) {
    if (this._holdStart && Math.hypot(event.clientX - this._holdStart.x, event.clientY - this._holdStart.y) > 10) this._onPointerEnd();
  }

  _onPointerEnd() {
    if (this._holdTimer) clearTimeout(this._holdTimer);
    this._holdTimer = undefined;
    this._holdStart = undefined;
  }

  _onContextMenu(event) {
    if (!this._longPressTriggered) return;
    event.preventDefault();
    this._longPressTriggered = false;
  }

  _showMoreInfo() {
    if (!this._config.entity) return;
    this.dispatchEvent(new CustomEvent("hass-more-info", {
      bubbles: true,
      composed: true,
      detail: { entityId: this._config.entity },
    }));
  }

  _render() {
    if (!this._config.entity || !this._hass || !this.shadowRoot) return;
    const entity = this._entity();
    if (!entity) {
      this.shadowRoot.innerHTML = `<style>${STYLE}</style><ha-card><div class="content"><div class="copy"><div class="value">Sensor not found</div><div class="name">${escapeHtml(this._config.entity)}</div></div></div></ha-card>`;
      return;
    }

    const attributes = entity.attributes || {};
    const value = finiteNumber(entity.state);
    const unavailable = ["unknown", "unavailable"].includes(String(entity.state).toLowerCase()) || value === null;
    const title = this._config.title || attributes.friendly_name || this._config.entity;
    const icon = this._config.icon || attributes.icon || "mdi:chart-box-outline";
    const unit = attributes.unit_of_measurement || "";
    const formattedValue = value === null ? (String(entity.state).toLowerCase() === "unknown" ? "Unknown" : "Unavailable") : this._formatValue(value, attributes);
    const configuredMin = finiteNumber(this._config.min);
    const configuredMax = finiteNumber(this._config.max);
    const min = configuredMin ?? finiteNumber(attributes.min_value) ?? finiteNumber(attributes.min) ?? 0;
    const max = configuredMax ?? finiteNumber(attributes.max_value) ?? finiteNumber(attributes.max) ?? (unit === "%" ? 100 : null);
    const validRange = max !== null && max > min;
    const showBar = this._config.show_bar !== false && !unavailable && validRange;
    const progress = showBar ? Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100)) : 0;
    const meter = this._config.show_bar === false ? "" : showBar
      ? `<section class="meter-panel"><div class="section-head"><span class="section-title">Sensor range</span><span class="meter-pct">${Math.round(progress)}% of range</span></div><div class="track" role="meter" aria-label="${escapeHtml(title)}" aria-valuemin="${min}" aria-valuemax="${max}" aria-valuenow="${value}" aria-valuetext="${escapeHtml(formattedValue)}"><div class="fill" style="width:${progress}%"></div></div><div class="range-limits"><span>${escapeHtml(this._formatValue(min, attributes))}</span><span>${escapeHtml(this._formatValue(max, attributes))}</span></div></section>`
      : unavailable ? "" : `<div class="hint">Set a maximum value to show the progress bar.</div>`;

    this.shadowRoot.innerHTML = `
      <style>${STYLE}</style>
      <ha-card data-palette="${this._config.palette}">
        <div class="shell">
          <header class="header">
            <div class="identity"><div class="icon-wrap"><ha-icon icon="${escapeHtml(icon)}"></ha-icon></div><div class="identity-copy"><div class="eyebrow">Home Assistant · Sensor</div><h2 class="title">${escapeHtml(title)}</h2></div></div>
            <div class="reading"><div class="reading-value">${escapeHtml(formattedValue)}</div><div class="reading-label">Current reading</div></div>
          </header>
          ${meter}
        </div>
      </ha-card>`;
  }
}

if (!customElements.get(CARD_TYPE)) customElements.define(CARD_TYPE, SensorMeterCard);

window.customCards = window.customCards || [];
window.customCards.push({ type: CARD_TYPE, name: "Sensor Meter Card", description: "Compact, theme-aware numeric sensor card with a configurable progress meter and More Info." });

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="sensor-meter-card"))window.customCards.push({type:"sensor-meter-card",name:"Sensor Meter Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["lovelace-sensor-meter-card"]={version:"1.0.2",types:["sensor-meter-card"]};
})() } catch(error){suite.errors.push({component:"lovelace-sensor-meter-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","lovelace-sensor-meter-card",error);}
/* lovelace-switch-control-card @ 1.2.0 (70b2285ffe9012eaae93d1b7dfd6f5af1fdc03e0) */
try { (() => {
const knownTypes=["switch-control-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["lovelace-switch-control-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const CARD_TAG = "switch-control-card";
const PALETTES = new Set(["aurora", "ocean", "sunset", "lavender"]);

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:switch-card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:var(--orbit-theme-card-radius,24px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1)));touch-action:pan-y}
  ha-card[data-palette="aurora"]{--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0);--accent3:var(--orbit-theme-accent-3,#54a9db)}
  ha-card[data-palette="ocean"]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}
  ha-card[data-palette="sunset"]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}
  ha-card[data-palette="lavender"]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}
  .shell{position:relative;padding:clamp(16px,3cqi,22px);background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 13%,transparent),transparent 54%),radial-gradient(ellipse at 100% 100%,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 48%))}
  .shell:before{position:absolute;top:0;right:22px;left:22px;height:3px;border-radius:0 0 4px 4px;background:var(--orbit-theme-strip-background,linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3)));content:""}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}.identity{display:flex;align-items:center;gap:12px;min-width:0}.icon-wrap{display:grid;place-items:center;flex:0 0 48px;width:48px;height:48px;border:1px solid color-mix(in srgb,var(--accent) 24%,transparent);border-radius:17px;background:linear-gradient(145deg,var(--accent),var(--accent2));box-shadow:0 7px 18px color-mix(in srgb,var(--accent) 22%,transparent);color:#fff}.icon-wrap ha-icon{--mdc-icon-size:25px}.identity-copy{min-width:0}.eyebrow{color:var(--orbit-theme-accent,var(--accent));font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.title{overflow:hidden;margin:3px 0 0;font-size:clamp(16px,2.5cqi,20px);font-weight:780;letter-spacing:-.03em;text-overflow:ellipsis;white-space:nowrap}
  .pill{display:flex;align-items:center;gap:7px;padding:7px 10px;border:1px solid color-mix(in srgb,currentColor 12%,transparent);border-radius:999px;background:color-mix(in srgb,currentColor 8%,var(--card-background-color,#fff));color:var(--secondary-text-color);font-size:11px;font-weight:750;white-space:nowrap}.dot{width:7px;height:7px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 16%,transparent)}.pill.on{color:var(--success-color,#168b68)}.pill.off{color:var(--secondary-text-color)}.pill.unavailable{color:var(--error-color,#c74343)}
  .panel{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:15px;margin-top:20px;padding:16px;border:1px solid color-mix(in srgb,var(--accent) 18%,var(--divider-color));border-radius:19px;background:linear-gradient(125deg,color-mix(in srgb,var(--accent) 9%,var(--card-background-color,#fff)),color-mix(in srgb,var(--accent2) 5%,var(--card-background-color,#fff)) 62%,var(--card-background-color,#fff))}.copy{display:flex;align-items:center;gap:11px;min-width:0}.state-icon{display:grid;place-items:center;flex:none;width:38px;height:38px;border-radius:13px;background:color-mix(in srgb,var(--accent) 12%,var(--card-background-color,#fff));color:var(--accent)}.state-icon ha-icon{--mdc-icon-size:21px}.state-icon.on{background:linear-gradient(145deg,var(--accent),var(--accent2));color:#fff}.state-copy{min-width:0}.state-label{color:var(--secondary-text-color);font-size:10px;font-weight:760;letter-spacing:.1em;text-transform:uppercase}.state-value{overflow:hidden;margin-top:3px;font-size:18px;font-weight:820;letter-spacing:-.035em;text-overflow:ellipsis;white-space:nowrap}.toggle{display:flex;align-items:center;justify-content:center;gap:7px;min-width:106px;min-height:42px;padding:0 13px;border:0;border-radius:14px;background:linear-gradient(120deg,var(--accent),var(--accent2));box-shadow:0 6px 15px color-mix(in srgb,var(--accent) 23%,transparent);color:#fff;font:inherit;font-size:12px;font-weight:780;cursor:pointer;transition:filter .16s ease,transform .16s ease}.toggle:hover:not(:disabled){filter:brightness(1.07);transform:translateY(-1px)}.toggle:active:not(:disabled){transform:scale(.98)}.toggle:disabled{opacity:.55;cursor:wait;filter:grayscale(.6)}.toggle ha-icon{--mdc-icon-size:18px}.hint{margin:12px 2px 0;color:var(--secondary-text-color);font-size:10px;line-height:1.4}.hint.error{color:var(--error-color,#c74343)}
  .consumption{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9px}.reading{display:flex;align-items:center;gap:9px;min-width:0;padding:10px 12px;border:1px solid color-mix(in srgb,var(--accent) 15%,var(--divider-color));border-radius:14px;background:color-mix(in srgb,var(--card-background-color,#fff) 91%,var(--accent))}.reading ha-icon{flex:none;color:var(--accent);--mdc-icon-size:19px}.reading-copy{min-width:0}.reading-label{color:var(--secondary-text-color);font-size:9px;font-weight:760;letter-spacing:.08em;text-transform:uppercase}.reading-value{overflow:hidden;margin-top:3px;font-size:14px;font-weight:800;font-variant-numeric:tabular-nums;text-overflow:ellipsis;white-space:nowrap}
  @container switch-card (max-width:480px){.shell{padding:15px}.identity{gap:9px}.icon-wrap{flex-basis:40px;width:40px;height:40px;border-radius:14px}.icon-wrap ha-icon{--mdc-icon-size:22px}.pill{gap:5px;padding:6px 8px;font-size:10px}.panel{gap:9px;margin-top:15px;padding:12px;border-radius:16px}.copy{gap:8px}.state-icon{width:34px;height:34px;border-radius:12px}.state-value{font-size:16px}.toggle{min-width:90px;min-height:39px;padding:0 10px}}
  @container switch-card (max-width:360px){.shell{padding:12px}.header{gap:7px}.identity{gap:7px}.icon-wrap{flex-basis:36px;width:36px;height:36px}.title{font-size:15px}.pill{padding:5px 7px;font-size:9px}.panel{gap:6px;padding:10px}.copy{gap:6px}.state-icon{width:30px;height:30px}.state-value{font-size:14px}.toggle{min-width:76px;padding:0 7px;font-size:11px}}
  @media(prefers-reduced-motion:reduce){*,*:before,*:after{transition:none!important;scroll-behavior:auto!important}}
`;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

class SwitchControlCard extends HTMLElement {
  static getStubConfig() { return { entity: "switch.example", icon: "mdi:power", palette: "aurora" }; }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = {};
    this._holdTimer = undefined;
    this._holdStart = undefined;
    this._longPressTriggered = false;
    this.addEventListener("pointerdown", (event) => this._onPointerDown(event));
    this.addEventListener("pointermove", (event) => this._onPointerMove(event));
    this.addEventListener("pointerup", () => this._onPointerEnd());
    this.addEventListener("pointercancel", () => this._onPointerEnd());
    this.addEventListener("pointerleave", () => this._onPointerEnd());
    this.addEventListener("contextmenu", (event) => this._onContextMenu(event));
  }

  static getConfigForm() {
    return { schema: [
      { name: "entity", required: true, selector: { entity: { domain: ["switch"] } } },
      { name: "title", selector: { text: {} } },
      { name: "icon", selector: { icon: {} } },
      { name: "power_entity", selector: { entity: { domain: ["sensor"] } } },
      { name: "energy_entity", selector: { entity: { domain: ["sensor"] } } },
      { name: "voltage_entity", selector: { entity: { domain: ["sensor"] } } },
      { name: "palette", selector: { select: { options: ["aurora", "ocean", "sunset", "lavender"], mode: "dropdown" } } },
    ] };
  }

  setConfig(config) {
    if (!config || typeof config !== "object" || !config.entity) throw new Error("Choose a switch entity for the Switch Control Card.");
    this._config = { ...config, palette: PALETTES.has(config.palette) ? config.palette : "aurora" };
    this._render();
  }

  set hass(value) {
    this._hass = value;
    const signature = JSON.stringify([this._state(), this._sensorState(this._config.power_entity), this._sensorState(this._config.energy_entity), this._sensorState(this._config.voltage_entity)]);
    if (signature !== this._entitySignature) {
      this._entitySignature = signature;
      this._render();
    }
  }
  get hass() { return this._hass; }

  _state() { return this._hass?.states?.[this._config.entity]; }
  _sensorState(entityId) { return entityId ? this._hass?.states?.[entityId] : undefined; }
  _formatSensor(state) {
    if (!state || ["unknown", "unavailable"].includes(String(state.state).toLowerCase())) return "Unavailable";
    const raw = String(state.state);
    const number = Number(raw);
    const value = raw.trim() !== "" && Number.isFinite(number)
      ? new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 }).format(number)
      : raw;
    const unit = state.attributes?.unit_of_measurement || "";
    return `${value}${unit === "%" ? "%" : unit ? ` ${unit}` : ""}`;
  }

  async _toggle() {
    if (this._pending) return;
    const state = this._state();
    if (!state || !["on", "off"].includes(state.state)) return;
    if (!this._hass?.callService) {
      this._feedback = "Home Assistant is not ready.";
      this._error = true;
      this._render();
      return;
    }
    clearTimeout(this._feedbackTimer);
    this._pending = true;
    this._feedback = "Sending command…";
    this._error = false;
    this._render();
    try {
      await this._hass.callService("switch", state.state === "on" ? "turn_off" : "turn_on", { entity_id: this._config.entity });
      this._feedback = "Command sent";
      this._error = false;
      clearTimeout(this._feedbackTimer);
      this._feedbackTimer = setTimeout(() => { this._feedback = ""; this._render(); }, 1800);
    } catch (error) {
      this._feedback = error?.message || "Home Assistant could not send the command.";
      this._error = true;
      clearTimeout(this._feedbackTimer);
      this._feedbackTimer = setTimeout(() => { this._feedback = ""; this._error = false; this._render(); }, 5000);
    } finally {
      this._pending = false;
      this._render();
    }
  }

  _onPointerDown(event) {
    if (event.button !== 0 || event.composedPath().some((node) => node instanceof HTMLElement && node.matches("button,a,input,select,textarea,ha-slider"))) return;
    this._holdStart = { x: event.clientX, y: event.clientY };
    this._holdTimer = setTimeout(() => {
      this._longPressTriggered = true;
      this.dispatchEvent(new CustomEvent("hass-more-info", { bubbles: true, composed: true, detail: { entityId: this._config.entity } }));
    }, 600);
  }

  _onPointerMove(event) {
    if (this._holdStart && Math.hypot(event.clientX - this._holdStart.x, event.clientY - this._holdStart.y) > 10) this._onPointerEnd();
  }

  _onPointerEnd() {
    if (this._holdTimer) clearTimeout(this._holdTimer);
    this._holdTimer = undefined;
    this._holdStart = undefined;
  }

  _onContextMenu(event) {
    if (!this._longPressTriggered) return;
    event.preventDefault();
    this._longPressTriggered = false;
  }

  _render() {
    const state = this._state();
    if (!this._config.entity || !this._hass || !this.shadowRoot) return;
    if (!state) {
      this.shadowRoot.innerHTML = `<style>${STYLE}</style><ha-card><div class="shell"><p class="hint">Entity not found: ${escapeHtml(this._config.entity)}</p></div></ha-card>`;
      return;
    }
    const unavailable = ["unknown", "unavailable"].includes(state.state);
    const isOn = state.state === "on";
    const label = unavailable ? "Unavailable" : isOn ? "On" : "Off";
    const title = this._config.title || state.attributes?.friendly_name || "Switch";
    const icon = this._config.icon || state.attributes?.icon || "mdi:toggle-switch";
    const powerState = this._sensorState(this._config.power_entity);
    const energyState = this._sensorState(this._config.energy_entity);
    const voltageState = this._sensorState(this._config.voltage_entity);
    const consumption = [
      this._config.power_entity && { label: "Power", icon: "mdi:flash-outline", state: powerState },
      this._config.energy_entity && { label: "Energy", icon: "mdi:lightning-bolt-outline", state: energyState },
      this._config.voltage_entity && { label: "Voltage", icon: "mdi:sine-wave", state: voltageState },
    ].filter(Boolean);
    const consumptionHtml = consumption.length ? `<section class="consumption" aria-label="Power consumption">${consumption.map((item) => `<div class="reading"><ha-icon icon="${item.icon}"></ha-icon><div class="reading-copy"><div class="reading-label">${item.label}</div><div class="reading-value">${escapeHtml(this._formatSensor(item.state))}</div></div></div>`).join("")}</section>` : "";
    this.shadowRoot.innerHTML = `
      <style>${STYLE}</style>
      <ha-card data-palette="${this._config.palette}">
        <div class="shell">
          <header class="header">
            <div class="identity"><div class="icon-wrap"><ha-icon icon="${escapeHtml(icon)}"></ha-icon></div><div class="identity-copy"><div class="eyebrow">Switch Control</div><h2 class="title">${escapeHtml(title)}</h2></div></div>
            <div class="pill ${unavailable ? "unavailable" : isOn ? "on" : "off"}"><span class="dot"></span>${label}</div>
          </header>
          <section class="panel">
            <div class="copy"><div class="state-icon ${isOn ? "on" : ""}"><ha-icon icon="${isOn ? "mdi:toggle-switch" : "mdi:toggle-switch-off-outline"}"></ha-icon></div><div class="state-copy"><div class="state-label">State</div><div class="state-value">${label}</div></div></div>
            <button class="toggle" type="button" data-action="toggle" aria-label="${isOn ? "Turn off" : "Turn on"} ${escapeHtml(title)}" ${unavailable || this._pending ? "disabled" : ""}><ha-icon icon="mdi:power"></ha-icon><span>${this._pending ? "Sending…" : isOn ? "Turn off" : "Turn on"}</span></button>
          </section>
          ${consumptionHtml}
          ${this._feedback ? `<p class="hint ${this._error ? "error" : ""}" role="status">${escapeHtml(this._feedback)}</p>` : ""}
        </div>
      </ha-card>`;
    this.shadowRoot.querySelector('[data-action="toggle"]')?.addEventListener("click", () => this._toggle());
  }
}

if (!customElements.get(CARD_TAG)) customElements.define(CARD_TAG, SwitchControlCard);

window.customCards = window.customCards || [];
window.customCards.push({ type: CARD_TAG, name: "Switch Control Card", description: "Responsive switch control with optional power and energy monitoring." });

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="switch-control-card"))window.customCards.push({type:"switch-control-card",name:"Switch Control Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["lovelace-switch-control-card"]={version:"1.2.0",types:["switch-control-card"]};
})() } catch(error){suite.errors.push({component:"lovelace-switch-control-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","lovelace-switch-control-card",error);}
/* media-player-card @ 1.2.5 (c817349b79d2a0708ca49b789d2edb8404d943ea) */
try { (() => {
const knownTypes=["media-player-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["media-player-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const CARD_TYPE = "media-player-card";

const FEATURE = Object.freeze({
  PAUSE: 1,
  SEEK: 2,
  VOLUME_SET: 4,
  VOLUME_MUTE: 8,
  PREVIOUS_TRACK: 16,
  NEXT_TRACK: 32,
  TURN_ON: 128,
  TURN_OFF: 256,
  PLAY_MEDIA: 512,
  SELECT_SOURCE: 2048,
  STOP: 4096,
  PLAY: 16384,
  SHUFFLE_SET: 32768,
  REPEAT_SET: 262144,
  BROWSE_MEDIA: 131072,
});

const COMMANDS = {
  turn_on: [FEATURE.TURN_ON, "Turn on"], turn_off: [FEATURE.TURN_OFF, "Turn off"],
  media_play: [FEATURE.PLAY, "Play"], media_pause: [FEATURE.PAUSE, "Pause"],
  media_previous_track: [FEATURE.PREVIOUS_TRACK, "Previous track"], media_next_track: [FEATURE.NEXT_TRACK, "Next track"],
  media_stop: [FEATURE.STOP, "Stop"], volume_mute: [FEATURE.VOLUME_MUTE, "Mute"],
  volume_set: [FEATURE.VOLUME_SET, "Volume"], media_seek: [FEATURE.SEEK, "Seek"],
  select_source: [FEATURE.SELECT_SOURCE, "Source"], shuffle_set: [FEATURE.SHUFFLE_SET, "Shuffle"],
  repeat_set: [FEATURE.REPEAT_SET, "Repeat"], play_media: [FEATURE.PLAY_MEDIA, "Play media"],
};
const COMMAND_ACTIONS = new Set(["power", "play", "pause", "previous", "next", "stop", "mute", "volume", "seek", "source", "shuffle", "repeat", "browser-item"]);

const SCHEMA = [
  { name: "entity", required: true, selector: { entity: { domain: ["media_player"] } } },
  { name: "title", selector: { text: {} } },
  { name: "show_artwork", selector: { boolean: {} } },
];
const LABELS = { entity: "Media player", title: "Card title", show_artwork: "Show artwork" };

const STYLE = `
  .action-feedback{display:flex;align-items:center;gap:7px;margin-top:10px;padding:9px 11px;border-radius:11px;background:color-mix(in srgb,var(--accent,#756ce5) 10%,var(--card-background-color,#fff));color:var(--primary-text-color);font-size:11px;line-height:1.5;overflow-wrap:anywhere}.action-feedback[hidden]{display:none}.action-feedback[data-kind="error"]{color:var(--error-color,#bd4e4e)}.action-feedback[data-kind="sent"]{border-left:3px solid var(--success-color,#168b7b)}.action-feedback[data-kind="pending"]:before{content:"";flex:none;width:10px;height:10px;border:2px solid currentColor;border-right-color:transparent;border-radius:50%;animation:media-command-spin .8s linear infinite}@keyframes media-command-spin{to{transform:rotate(360deg)}}
  button{touch-action:manipulation;-webkit-tap-highlight-color:transparent}button:active:not(:disabled){filter:brightness(.88);transform:scale(.96)}.turn-on:focus-visible{outline:2px solid var(--accent,#756ce5);outline-offset:3px}.turn-on{min-height:44px}.turn-on:disabled{opacity:.7;cursor:wait}.turn-on[aria-busy="true"]{box-shadow:0 0 0 3px color-mix(in srgb,var(--accent,#756ce5) 25%,transparent)}
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 55%,transparent);border-radius:var(--orbit-theme-card-radius,26px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 14px 38px rgba(21,28,54,.13)))}
  .shell{--accent:var(--orbit-theme-accent,#8368ef);position:relative;isolation:isolate;overflow:hidden;padding:clamp(17px,3.6vw,25px);background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 0% 0%,rgba(127,106,255,.15),transparent 43%),radial-gradient(ellipse at 100% 100%,rgba(47,194,192,.13),transparent 48%),var(--ha-card-background,var(--card-background-color,#fff)))}
  .shell:before{position:absolute;z-index:-1;inset:0;background:var(--orbit-theme-overlay-background,linear-gradient(125deg,rgba(129,105,239,.045),transparent 42%,rgba(51,190,188,.05)));content:"";pointer-events:none}
  .topline{display:flex;align-items:center;justify-content:space-between;gap:12px}.brand{display:flex;align-items:center;gap:11px;min-width:0}.brand-icon{display:grid;place-items:center;width:42px;height:42px;flex:none;border:1px solid rgba(255,255,255,.65);border-radius:15px;background:var(--orbit-theme-brand-background,linear-gradient(145deg,#8e7aff,#626be5 58%,#40b9ba));box-shadow:0 8px 20px rgba(101,104,218,.22);color:var(--orbit-theme-on-accent,#fff)}.brand-icon ha-icon{--mdc-icon-size:22px}.brand-copy{min-width:0}.eyebrow{color:var(--orbit-theme-accent,var(--accent));font-size:9px;font-weight:850;letter-spacing:.17em;text-transform:uppercase}.player-name{margin:4px 0 0;overflow:hidden;font-size:clamp(17px,2.8vw,21px);font-weight:790;letter-spacing:-.035em;text-overflow:ellipsis;white-space:nowrap}
  .state-pill{display:flex;align-items:center;gap:7px;flex:none;padding:7px 10px;border:1px solid rgba(112,104,183,.15);border-radius:999px;background:rgba(129,117,209,.08);color:var(--secondary-text-color);font-size:9px;font-weight:820;letter-spacing:.08em;text-transform:uppercase}.state-dot{width:7px;height:7px;border-radius:50%;background:#9aa1b2}.playing .state-pill{border-color:rgba(34,174,151,.2);background:rgba(34,174,151,.09);color:#168b7b}.playing .state-dot{background:#1cb69c;box-shadow:0 0 0 4px rgba(28,182,156,.13)}.paused .state-dot{background:#e5a84c}.off .state-dot{background:#a4aab6}.unavailable .state-pill{color:var(--error-color,#b94b55)}.unavailable .state-dot{background:var(--error-color,#c84f58)}
  .now-playing{display:grid;grid-template-columns:clamp(76px,18vw,104px) minmax(0,1fr);align-items:center;gap:16px;margin-top:22px}.now-playing.no-artwork{grid-template-columns:minmax(0,1fr)}.artwork{position:relative;display:grid;place-items:center;aspect-ratio:1;overflow:hidden;border:1px solid rgba(255,255,255,.72);border-radius:21px;background:linear-gradient(145deg,rgba(138,119,245,.18),rgba(56,192,188,.18));box-shadow:0 8px 24px rgba(46,54,103,.12)}.artwork img{width:100%;height:100%;object-fit:cover}.artwork ha-icon{color:var(--accent);--mdc-icon-size:38px}.track-copy{min-width:0}.track-kicker{margin-bottom:5px;color:var(--accent);font-size:9px;font-weight:850;letter-spacing:.14em;text-transform:uppercase}.track-title{overflow:hidden;font-size:clamp(18px,3.6vw,25px);font-weight:810;letter-spacing:-.045em;line-height:1.12;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.track-subtitle{margin-top:7px;overflow:hidden;color:var(--secondary-text-color);font-size:13px;font-weight:570;text-overflow:ellipsis;white-space:nowrap}.album{margin-top:4px;overflow:hidden;color:var(--secondary-text-color);font-size:11px;opacity:.76;text-overflow:ellipsis;white-space:nowrap}
  .progress-wrap{margin-top:19px}.progress-line{display:flex;align-items:center;gap:9px;color:var(--secondary-text-color);font-size:9px;font-variant-numeric:tabular-nums}.progress-line input{flex:1;min-width:0}.range{height:5px;margin:0;appearance:none;border:0;border-radius:999px;background:linear-gradient(90deg,var(--accent) var(--range-progress,0%),color-mix(in srgb,var(--secondary-text-color) 18%,transparent) var(--range-progress,0%));cursor:pointer}.range::-webkit-slider-thumb{width:13px;height:13px;appearance:none;border:2px solid #fff;border-radius:50%;background:var(--accent);box-shadow:0 1px 5px rgba(30,34,65,.26)}.range::-moz-range-thumb{width:10px;height:10px;border:2px solid #fff;border-radius:50%;background:var(--accent);box-shadow:0 1px 5px rgba(30,34,65,.26)}
  .controls{display:flex;align-items:center;justify-content:center;gap:clamp(9px,3vw,17px);margin-top:17px}.control{display:grid;place-items:center;width:39px;height:39px;flex:none;border:1px solid color-mix(in srgb,var(--divider-color) 65%,transparent);border-radius:14px;background:color-mix(in srgb,var(--card-background-color,#fff) 86%,var(--accent));color:var(--primary-text-color);cursor:pointer;transition:transform .16s ease,box-shadow .16s ease,background .16s ease}.control ha-icon{--mdc-icon-size:20px}.control:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 6px 15px rgba(70,69,130,.15)}.control:focus-visible,select:focus-visible,input:focus-visible,.more:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.control:disabled{opacity:.42;cursor:not-allowed}.control.primary{width:49px;height:49px;border:0;border-radius:17px;background:var(--orbit-theme-control-background,linear-gradient(145deg,#8d78f5,#6c6fe5 62%,#48b8bc));box-shadow:0 8px 18px rgba(111,103,222,.25);color:var(--orbit-theme-on-accent,white)}.control.primary ha-icon{--mdc-icon-size:24px}.control.power{margin-left:auto;color:var(--accent)}.volume-row{display:flex;align-items:center;gap:11px;margin-top:17px;padding:11px 12px;border:1px solid color-mix(in srgb,var(--divider-color) 52%,transparent);border-radius:15px;background:color-mix(in srgb,var(--card-background-color,#fff) 87%,var(--accent));}.volume-row ha-icon{flex:none;color:var(--secondary-text-color);--mdc-icon-size:18px}.volume-row input{flex:1;min-width:0}.volume-value{width:34px;color:var(--secondary-text-color);font-size:10px;font-variant-numeric:tabular-nums;text-align:right}.volume-row .control{width:31px;height:31px;border-radius:11px}.volume-row .control ha-icon{color:inherit;--mdc-icon-size:17px}
  .more-row{display:flex;justify-content:center;margin-top:11px}.more{display:inline-flex;align-items:center;gap:5px;padding:5px 8px;border:0;border-radius:9px;background:transparent;color:var(--secondary-text-color);font:inherit;font-size:10px;font-weight:700;cursor:pointer}.more ha-icon{--mdc-icon-size:15px}.advanced{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;margin-top:12px}.field{display:flex;flex-direction:column;gap:6px;min-width:0;color:var(--secondary-text-color);font-size:9px;font-weight:800;letter-spacing:.09em;text-transform:uppercase}.field select{width:100%;min-width:0;padding:9px 10px;border:1px solid color-mix(in srgb,var(--divider-color) 65%,transparent);border-radius:12px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:12px;font-weight:600}.toggle-control{display:flex;align-items:center;gap:8px;min-height:37px;padding:0 11px;border:1px solid color-mix(in srgb,var(--divider-color) 65%,transparent);border-radius:12px;background:color-mix(in srgb,var(--card-background-color,#fff) 88%,var(--accent));color:var(--primary-text-color);font:inherit;font-size:11px;font-weight:700;cursor:pointer}.toggle-control[aria-pressed="true"]{border-color:color-mix(in srgb,var(--accent) 44%,transparent);background:color-mix(in srgb,var(--accent) 12%,var(--card-background-color,#fff));color:var(--accent)}.toggle-control ha-icon{--mdc-icon-size:17px}
  .browser-toggle{grid-column:1/-1;display:flex;align-items:center;justify-content:center;gap:7px;min-height:39px;padding:0 12px;border:1px solid color-mix(in srgb,var(--accent) 24%,var(--divider-color));border-radius:12px;background:linear-gradient(110deg,color-mix(in srgb,var(--accent) 10%,var(--card-background-color,#fff)),color-mix(in srgb,#40b9ba 9%,var(--card-background-color,#fff)));color:var(--accent);font:inherit;font-size:11px;font-weight:780;cursor:pointer}.browser-toggle ha-icon{--mdc-icon-size:17px}.media-browser{grid-column:1/-1;min-width:0;padding:12px;border:1px solid color-mix(in srgb,var(--accent) 20%,var(--divider-color));border-radius:16px;background:color-mix(in srgb,var(--card-background-color,#fff) 92%,var(--accent))}.browser-heading{display:flex;align-items:center;gap:8px;margin-bottom:9px}.browser-heading strong{min-width:0;flex:1;overflow:hidden;font-size:12px;font-weight:780;text-overflow:ellipsis;white-space:nowrap}.browser-back{display:flex;align-items:center;gap:4px;padding:5px 7px;border:0;border-radius:8px;background:transparent;color:var(--secondary-text-color);font:inherit;font-size:10px;font-weight:700;cursor:pointer}.browser-back ha-icon{--mdc-icon-size:16px}.browser-filter{width:100%;box-sizing:border-box;margin-bottom:8px;padding:9px 10px;border:1px solid color-mix(in srgb,var(--divider-color) 65%,transparent);border-radius:10px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:12px}.browser-items{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,145px),1fr));gap:7px;max-height:260px;overflow-y:auto;overscroll-behavior:contain;padding:1px}.browser-item{display:flex;align-items:center;gap:9px;min-width:0;min-height:40px;padding:7px 9px;border:1px solid color-mix(in srgb,var(--divider-color) 48%,transparent);border-radius:11px;background:var(--ha-card-background,var(--card-background-color,#fff));color:var(--primary-text-color);font:inherit;text-align:left;cursor:pointer;transition:transform .14s ease,border-color .14s ease,box-shadow .14s ease}.browser-item:hover{transform:translateY(-1px);border-color:color-mix(in srgb,var(--accent) 38%,var(--divider-color));box-shadow:0 4px 12px rgba(67,68,120,.1)}.browser-item ha-icon{flex:none;color:var(--accent);--mdc-icon-size:18px}.browser-item span{min-width:0;overflow:hidden;font-size:11px;font-weight:650;text-overflow:ellipsis;white-space:nowrap}.browser-message{padding:12px 4px;color:var(--secondary-text-color);font-size:11px;text-align:center}
  .off-state,.empty-state{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:20px;padding:15px;border:1px solid color-mix(in srgb,var(--divider-color) 55%,transparent);border-radius:18px;background:color-mix(in srgb,var(--card-background-color,#fff) 88%,var(--accent))}.off-copy{min-width:0}.off-title{font-size:14px;font-weight:760}.off-hint{margin-top:4px;color:var(--secondary-text-color);font-size:11px}.turn-on{display:flex;align-items:center;gap:7px;padding:10px 13px;border:0;border-radius:13px;background:var(--orbit-theme-control-background,linear-gradient(145deg,#8d78f5,#626fe3 70%,#42b5b9));box-shadow:0 5px 13px rgba(102,100,211,.22);color:var(--orbit-theme-on-accent,#fff);font:inherit;font-size:11px;font-weight:800;white-space:nowrap;cursor:pointer}.turn-on ha-icon{--mdc-icon-size:17px}.error{margin-top:10px;color:var(--error-color,#bd4e4e);font-size:11px}.setup{padding:20px;color:var(--secondary-text-color);font:inherit;font-size:13px;font-weight:500}
  @container card (max-width: 480px){.shell{padding:14px}.topline{gap:8px}.brand{gap:8px}.brand-icon{width:37px;height:37px;border-radius:13px}.brand-icon ha-icon{--mdc-icon-size:20px}.player-name{font-size:16px}.state-pill{gap:5px;padding:6px 8px;font-size:8px}.now-playing{grid-template-columns:68px minmax(0,1fr);gap:11px;margin-top:16px}.artwork{border-radius:15px}.track-title{font-size:18px}.track-subtitle{font-size:12px}.progress-wrap{margin-top:14px}.controls{gap:8px}.control{width:36px;height:36px}.control.primary{width:44px;height:44px}.volume-row{gap:8px;padding:8px}.advanced{grid-template-columns:1fr 1fr;gap:7px;margin-top:10px}.browser-toggle{min-height:36px;padding:0 10px}.media-browser{padding:10px;border-radius:14px}.browser-items{grid-template-columns:minmax(0,1fr);gap:5px;max-height:220px}.browser-item{min-height:36px;padding:6px 8px}.off-state,.empty-state{gap:8px;margin-top:15px;padding:11px}.turn-on{padding:9px 10px}}
  @container card (max-width: 390px){.shell{padding:12px}.now-playing{grid-template-columns:62px minmax(0,1fr);gap:9px;margin-top:14px}.artwork{border-radius:13px}.track-title{font-size:16px}.track-subtitle{font-size:11px}.controls{gap:6px}.control{width:34px;height:34px}.control.primary{width:42px;height:42px}.volume-row{gap:6px;padding:7px}.advanced{gap:5px}.browser-items{max-height:190px}}
  @container card (max-width:260px){.off-state{flex-direction:column;align-items:stretch}.off-copy{width:100%;overflow-wrap:anywhere}.turn-on{width:100%;justify-content:center}}
  @media(hover:hover){.turn-on:hover{filter:brightness(1.06);transform:translateY(-1px)}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
`;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function attachMoreInfoHold(root, host, getEntityId) {
  let timer;
  let start;
  let lastOpenedAt = 0;
  const interactive = (event) => event.composedPath().some((node) => node instanceof HTMLElement && node.matches("button,input,select,textarea,a,[role='button'],[contenteditable='true']"));
  const open = (entityId) => {
    if (!entityId) return;
    lastOpenedAt = Date.now();
    host.dispatchEvent(new CustomEvent("hass-more-info", { bubbles: true, composed: true, detail: { entityId } }));
  };
  const cancel = () => { clearTimeout(timer); timer = undefined; start = undefined; };
  root.addEventListener("pointerdown", (event) => {
    cancel();
    if (event.button !== 0 || interactive(event)) return;
    const entityId = getEntityId(event);
    if (!entityId) return;
    start = { x: event.clientX, y: event.clientY };
    timer = window.setTimeout(() => { timer = undefined; open(entityId); }, 550);
  });
  root.addEventListener("pointermove", (event) => {
    if (start && Math.hypot(event.clientX - start.x, event.clientY - start.y) > 12) cancel();
  });
  ["pointerup", "pointercancel"].forEach((type) => root.addEventListener(type, cancel));
  root.addEventListener("pointerout", (event) => {
    if (!(event.relatedTarget instanceof Node) || !root.contains(event.relatedTarget)) cancel();
  });
  root.addEventListener("contextmenu", (event) => {
    if (interactive(event)) return;
    event.preventDefault();
    cancel();
    if (Date.now() - lastOpenedAt > 750) open(getEntityId(event));
  });
}

function featureSupported(entity, flag) {
  return (Number(entity?.attributes?.supported_features) & flag) === flag;
}

function numberOrNull(value) {
  const number = Number(value);
  return value !== null && value !== undefined && Number.isFinite(number) ? number : null;
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const whole = Math.floor(seconds);
  const hours = Math.floor(whole / 3600);
  const minutes = Math.floor((whole % 3600) / 60);
  const remainder = String(whole % 60).padStart(2, "0");
  return hours ? `${hours}:${String(minutes).padStart(2, "0")}:${remainder}` : `${minutes}:${remainder}`;
}

function safeImageUrl(value) {
  if (typeof value !== "string" || !value.trim()) return "";
  const url = value.trim();
  return url.startsWith("/") || /^https?:\/\//i.test(url) ? url : "";
}

class MediaPlayerCard extends HTMLElement {
  static getConfigForm() {
    return { schema: SCHEMA, computeLabel: (field) => LABELS[field.name] || field.name };
  }

  static getStubConfig() { return { entity: "media_player.example", show_artwork: true }; }

  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("Provide a valid Media Player Card configuration.");
    if (this._config?.entity !== config.entity) {
      this._suppressGestureClick = Boolean(this._gesture);
      this._endGesture(false);
      this._cancelCommand();
      this._browserOpen = false;
      this._browserPath = [];
      this._browserItems = [];
      this._browserFilter = "";
      this._browserLoading = false;
      this._browserError = null;
    }
    this._config = { show_artwork: true, ...config };
    this._entitySignature = null;
    this._root ??= this.attachShadow({ mode: "open" });
    if (!this._listenersAttached) {
      this._root.addEventListener("click", (event) => { this._endGesture(false); this._handleClick(event); this._flushRender(); });
      this._root.addEventListener("change", (event) => { this._endGesture(false); this._handleChange(event); this._flushRender(); });
      this._root.addEventListener("input", (event) => this._handleInput(event));
      this._root.addEventListener("pointerdown", (event) => {
        if (event.button !== 0 || !event.composedPath().some(node => node instanceof HTMLElement && node.matches("button,input,select"))) return;
        this._suppressGestureClick = false;
        this._endGesture(false); this._gesture = true;
      });
      this._root.addEventListener("pointerup", () => { if (this._gesture) this._gestureTimer = setTimeout(() => this._endGesture(), 500); });
      this._root.addEventListener("pointercancel", () => this._endGesture());
      this._root.addEventListener("pointerout", (event) => {
        // Touch emits pointerout after pointerup but before its compatibility click.
        if (event.pointerType === "touch" || this._gestureTimer !== undefined) return;
        if (!(event.relatedTarget instanceof Node) || !this._root.contains(event.relatedTarget)) this._endGesture();
      });
      attachMoreInfoHold(this._root, this, () => this._config?.entity);
      this._listenersAttached = true;
    }
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    const signature = JSON.stringify(this.entity ? [this.entity.state, this.entity.attributes] : null);
    if (signature !== this._entitySignature) {
      this._entitySignature = signature;
      this.render();
    }
  }

  getCardSize() { return 4; }
  getGridOptions() { return { rows: 4, columns: 6, min_rows: 3, max_rows: 7 }; }

  get entity() { return this._hass?.states?.[this._config?.entity]; }

  _flushRender() { if (this._renderDeferred && !this._gesture) { this._renderDeferred = false; this.render(); } }
  _endGesture(flush = true) { clearTimeout(this._gestureTimer); this._gestureTimer = undefined; this._gesture = false; if (flush) this._flushRender(); }
  disconnectedCallback() { this._endGesture(false); this._cancelCommand(); }
  connectedCallback() { if (this._root) this.render(); }
  _cancelCommand() { this._pendingCommand?.cancel?.(); this._pendingCommand = undefined; this._feedback = null; }

  _paintFeedback() {
    const status = this._root?.querySelector(".action-feedback");
    if (status) {
      status.hidden = !this._feedback;
      status.textContent = this._feedback?.text || "";
      status.dataset.kind = this._feedback?.kind || "";
      status.setAttribute("role", this._feedback?.kind === "error" ? "alert" : "status");
      status.setAttribute("aria-live", this._feedback?.kind === "error" ? "assertive" : "polite");
    }
    for (const control of this._root?.querySelectorAll("button[data-action],input[data-action],select[data-action]") || []) {
      if (!COMMAND_ACTIONS.has(control.dataset.action)) continue;
      if (this._pendingCommand) {
        if (!Object.hasOwn(control.dataset, "busyDisabled")) control.dataset.busyDisabled = String(control.disabled);
        control.disabled = true; control.setAttribute("aria-busy", "true");
      } else if (Object.hasOwn(control.dataset, "busyDisabled")) {
        control.disabled = control.dataset.busyDisabled === "true"; delete control.dataset.busyDisabled; control.removeAttribute("aria-busy");
      }
    }
    const powerLabel = this._root?.querySelector(".turn-on-label");
    if (powerLabel) powerLabel.textContent = this._pendingCommand?.service === "turn_on" ? "Sending…" : "Turn on";
  }

  async _call(service, data = {}) {
    const entityId = this._config?.entity, command = Object.hasOwn(COMMANDS, service) ? COMMANDS[service] : null;
    if (!entityId || !this.entity || ["unknown", "unavailable"].includes(this.entity.state) || !command || !featureSupported(this.entity, command[0]) || typeof this._hass?.callService !== "function" || this._pendingCommand) return false;
    const pending = { service }, label = command[1], hass = this._hass;
    this._pendingCommand = pending;
    this._feedback = { kind: "pending", text: "Sending " + label.toLowerCase() + " command…" };
    this._paintFeedback();
    let timer;
    try {
      const deadline = new Promise((_, reject) => {
        pending.cancel = () => reject(new Error("cancelled"));
        timer = setTimeout(() => { pending.timedOut = true; reject(new Error("timeout")); }, 15000);
      });
      await Promise.race([Promise.resolve().then(() => this._pendingCommand === pending ? hass.callService("media_player", service, { entity_id: entityId, ...data }) : undefined), deadline]);
      if (this._pendingCommand !== pending) return false;
      this._feedback = { kind: "sent", text: label + " command sent. Device state is reported by Home Assistant." };
      return true;
    } catch {
      if (this._pendingCommand !== pending) return false;
      this._feedback = { kind: "error", text: pending.timedOut ? "No response from Home Assistant. The command result is unknown; check the player state before retrying." : "Could not send the command. Check Home Assistant and this player, then try again." };
      return false;
    } finally {
      clearTimeout(timer);
      if (this._pendingCommand === pending) { this._pendingCommand = undefined; this._paintFeedback(); }
    }
  }

  _handleClick(event) {
    if (this._suppressGestureClick) { this._suppressGestureClick = false; return; }
    const button = event.target.closest("button[data-action]");
    if (!button || button.disabled) return;
    const action = button.dataset.action;
    const entity = this.entity;
    if (action === "expand") {
      this._expanded = !this._expanded;
      this.render();
      return;
    }
    if (action === "browser-toggle") {
      this._browserOpen = !this._browserOpen;
      this._browserPath = [];
      this._browserFilter = "";
      if (this._browserOpen) this._loadBrowser();
      else this.render();
      return;
    }
    if (action === "browser-back") {
      this._browserPath = (this._browserPath || []).slice(0, -1);
      this._browserFilter = "";
      const path = this._browserPath.at(-1);
      this._loadBrowser(path?.media_content_id, path?.media_content_type);
      return;
    }
    if (action === "browser-item") {
      const item = this._browserItems?.[Number(button.dataset.index)];
      if (item) this._selectBrowserItem(item);
      return;
    }
    if (!entity) return;
    const attrs = entity.attributes || {};
    const actions = {
      power: () => this._call(button.dataset.service || (entity.state === "off" ? "turn_on" : "turn_off")),
      play: () => this._call("media_play"),
      pause: () => this._call("media_pause"),
      previous: () => this._call("media_previous_track"),
      next: () => this._call("media_next_track"),
      stop: () => this._call("media_stop"),
      mute: () => this._call("volume_mute", { is_volume_muted: !attrs.is_volume_muted }),
      shuffle: () => this._call("shuffle_set", { shuffle: !attrs.shuffle }),
      repeat: () => {
        const modes = ["off", "all", "one"];
        const index = modes.indexOf(attrs.repeat);
        return this._call("repeat_set", { repeat: modes[(index + 1) % modes.length] });
      },
    };
    actions[action]?.();
  }

  _handleChange(event) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) return;
    if (target.dataset.action === "volume") {
      this._call("volume_set", { volume_level: Number(target.value) / 100 });
    } else if (target.dataset.action === "seek") {
      this._call("media_seek", { seek_position: Number(target.value) });
    } else if (target.dataset.action === "source") {
      this._call("select_source", { source: target.value });
    }
  }

  _handleInput(event) {
    const target = event.target;
    if (target instanceof HTMLInputElement && target.dataset.action === "browser-filter") {
      const start = target.selectionStart;
      this._browserFilter = target.value;
      this._renderBrowserInPlace();
      const input = this._root.querySelector('[data-action="browser-filter"]');
      input?.focus();
      input?.setSelectionRange(start, start);
      return;
    }
    if (target instanceof HTMLInputElement && target.type === "range") {
      const min = Number(target.min || 0);
      const max = Number(target.max || 100);
      const percent = max > min ? ((Number(target.value) - min) / (max - min)) * 100 : 0;
      target.style.setProperty("--range-progress", `${percent}%`);
      if (target.dataset.action === "volume") {
        const value = this._root.querySelector("[data-volume-value]");
        if (value) value.textContent = `${Math.round(Number(target.value))}%`;
      }
    }
  }

  _button(action, icon, label, { primary = false, pressed = null, disabled = false } = {}) {
    const classes = `control${primary ? " primary" : ""}${action === "power" ? " power" : ""}`;
    const pressedAttr = pressed === null ? "" : ` aria-pressed="${pressed}"`;
    return `<button class="${classes}" type="button" data-action="${action}"${action === "power" ? ' data-service="turn_off"' : ""} aria-label="${escapeHtml(label)}" title="${escapeHtml(label)}"${pressedAttr}${disabled ? " disabled" : ""}><ha-icon icon="${escapeHtml(icon)}"></ha-icon></button>`;
  }

  _timePosition(entity) {
    const attrs = entity.attributes || {};
    let position = numberOrNull(attrs.media_position) ?? 0;
    const duration = numberOrNull(attrs.media_duration);
    const updated = attrs.media_position_updated_at ? Date.parse(attrs.media_position_updated_at) : NaN;
    if (entity.state === "playing" && Number.isFinite(updated)) position += Math.max(0, (Date.now() - updated) / 1000);
    return { position: duration ? Math.min(position, duration) : position, duration };
  }

  _renderAdvanced(entity, disabled) {
    const attrs = entity.attributes || {};
    const deviceClass = attrs.device_class || "media player";
    const supportsSource = featureSupported(entity, FEATURE.SELECT_SOURCE) && Array.isArray(attrs.source_list) && attrs.source_list.length > 0;
    const supportsShuffle = featureSupported(entity, FEATURE.SHUFFLE_SET);
    const supportsRepeat = featureSupported(entity, FEATURE.REPEAT_SET);
    const supportsBrowse = featureSupported(entity, FEATURE.BROWSE_MEDIA);
    const supportsPlayMedia = featureSupported(entity, FEATURE.PLAY_MEDIA);
    if (!supportsSource && !supportsShuffle && !supportsRepeat && !supportsBrowse) return "";
    const expandButton = `<div class="more-row"><button class="more" type="button" data-action="expand" aria-expanded="${Boolean(this._expanded)}"><ha-icon icon="${this._expanded ? "mdi:chevron-up" : "mdi:tune-variant"}"></ha-icon>${this._expanded ? "Fewer controls" : "More controls"}</button></div>`;
    if (!this._expanded) return expandButton;
    const source = supportsSource ? `<label class="field">Input source<select data-action="source"${disabled ? " disabled" : ""}>${attrs.source_list.map((item) => `<option value="${escapeHtml(item)}"${item === attrs.source ? " selected" : ""}>${escapeHtml(item)}</option>`).join("")}</select></label>` : "";
    const shuffle = supportsShuffle ? `<button class="toggle-control" type="button" data-action="shuffle" aria-pressed="${Boolean(attrs.shuffle)}"${disabled ? " disabled" : ""}><ha-icon icon="mdi:shuffle"></ha-icon>Shuffle ${attrs.shuffle ? "On" : "Off"}</button>` : "";
    const repeatLabel = { off: "Off", all: "All", one: "One" }[attrs.repeat] || "Off";
    const repeat = supportsRepeat ? `<button class="toggle-control" type="button" data-action="repeat" aria-label="Repeat ${repeatLabel}. Activate to change mode" title="Change repeat mode"><ha-icon icon="${attrs.repeat === "one" ? "mdi:repeat-once" : "mdi:repeat"}"></ha-icon>Repeat ${repeatLabel}</button>` : "";
    const browse = supportsBrowse ? `<button class="browser-toggle" type="button" data-action="browser-toggle" aria-expanded="${Boolean(this._browserOpen)}"><ha-icon icon="mdi:${deviceClass === "tv" ? "apps" : "folder-music"}"></ha-icon>${deviceClass === "tv" ? "Browse apps & channels" : "Browse media"}</button>` : "";
    return `${expandButton}<div class="advanced">${source}${shuffle}${repeat}${browse}${this._renderBrowser(supportsPlayMedia)}</div>`;
  }

  async _loadBrowser(mediaContentId, mediaContentType) {
    if (!this._hass || !this._config?.entity) return;
    this._browserLoading = true;
    this._browserError = null;
    this.render();
    try {
      const response = await this._hass.callWS({
        type: "media_player/browse_media",
        entity_id: this._config.entity,
        ...(mediaContentId ? { media_content_id: mediaContentId } : {}),
        ...(mediaContentType ? { media_content_type: mediaContentType } : {}),
      });
      this._browserItems = Array.isArray(response?.children) ? response.children : [];
      this._browserTitle = response?.title || "Browse media";
    } catch {
      this._browserItems = [];
      this._browserError = "Could not load this media library.";
    } finally {
      this._browserLoading = false;
      this.render();
    }
  }

  async _selectBrowserItem(item) {
    if (item.can_expand) {
      this._browserPath.push({ title: item.title, media_content_id: item.media_content_id, media_content_type: item.media_content_type });
      this._browserFilter = "";
      await this._loadBrowser(item.media_content_id, item.media_content_type);
      return;
    }
    const mediaClass = String(item.media_class || "").toLowerCase();
    const isAppOrChannel = mediaClass === "app" || mediaClass === "channel";
    if (!this.entity || !featureSupported(this.entity, FEATURE.PLAY_MEDIA) || (!item.can_play && !isAppOrChannel)) return;
    await this._call("play_media", {
      media: { media_content_id: item.media_content_id, media_content_type: item.media_content_type },
    });
  }

  _renderBrowser(supportsPlayMedia) {
    if (!this._browserOpen) return "";
    const path = this._browserPath || [];
    const title = path.at(-1)?.title || this._browserTitle || "Browse media";
    const filter = escapeHtml(this._browserFilter || "");
    const items = this._browserItems || [];
    const query = String(this._browserFilter || "").trim().toLocaleLowerCase();
    const visibleItems = items.map((item, index) => ({ item, index })).filter(({ item }) => !query || String(item.title || "").toLocaleLowerCase().includes(query));
    let content;
    if (this._browserLoading) content = `<div class="browser-message">Loading…</div>`;
    else if (this._browserError) content = `<div class="browser-message" role="alert">${escapeHtml(this._browserError)}</div>`;
    else if (!visibleItems.length) content = `<div class="browser-message">${items.length ? "No matches." : "Nothing to show here."}</div>`;
    else content = `<div class="browser-items">${visibleItems.map(({ item, index }) => {
      const mediaClass = String(item.media_class || "").toLowerCase();
      const icon = item.can_expand ? "folder-outline" : mediaClass === "app" ? "application" : mediaClass === "channel" ? "television-classic" : "play-circle-outline";
      const canSelect = item.can_expand || supportsPlayMedia && (item.can_play || mediaClass === "app" || mediaClass === "channel");
      return `<button class="browser-item" type="button" data-action="browser-item" data-index="${index}"${canSelect ? "" : " disabled"} aria-label="${escapeHtml(item.title)}"><ha-icon icon="mdi:${icon}"></ha-icon><span>${escapeHtml(item.title)}</span></button>`;
    }).join("")}</div>`;
    const back = path.length ? `<button class="browser-back" type="button" data-action="browser-back"><ha-icon icon="mdi:arrow-left"></ha-icon>Back</button>` : "";
    const search = items.length > 8 ? `<input class="browser-filter" type="search" data-action="browser-filter" value="${filter}" placeholder="Search ${escapeHtml(title.toLocaleLowerCase())}" aria-label="Search ${escapeHtml(title)}">` : "";
    const message = this._browserMessage ? `<div class="browser-message" role="status">${escapeHtml(this._browserMessage)}</div>` : "";
    return `<section class="media-browser" aria-label="Media browser"><div class="browser-heading">${back}<strong>${escapeHtml(title)}</strong><button class="browser-back" type="button" data-action="browser-toggle" aria-label="Close browser"><ha-icon icon="mdi:close"></ha-icon></button></div>${search}${content}${message}</section>`;
  }

  _renderBrowserInPlace() {
    const old = this._root.querySelector(".media-browser");
    if (!old) return;
    const wrapper = document.createElement("div");
    wrapper.innerHTML = this._renderBrowser(featureSupported(this.entity, FEATURE.PLAY_MEDIA));
    old.replaceWith(wrapper.firstElementChild);
  }

  render() {
    if (this._gesture) { this._renderDeferred = true; return; }
    if (!this._root || !this._config) return;
    const entityId = this._config.entity;
    if (!entityId) {
      this._root.innerHTML = `<style>${STYLE}</style><ha-card><div class="setup">Choose a media player in the card editor to get started.</div></ha-card>`;
      return;
    }
    const entity = this.entity;
    if (!entity) {
      this._root.innerHTML = `<style>${STYLE}</style><ha-card><div class="setup">Waiting for <strong>${escapeHtml(entityId)}</strong> to become available in Home Assistant.</div></ha-card>`;
      return;
    }
    const attrs = entity.attributes || {};
    const state = String(entity.state || "unknown").toLowerCase();
    const unavailable = ["unavailable", "unknown"].includes(state);
    const off = state === "off";
    const isPlaying = state === "playing";
    const stateText = { playing: "Playing", paused: "Paused", buffering: "Buffering", idle: "Ready", on: "On", off: "Off", unavailable: "Unavailable", unknown: "Unknown" }[state] || state.replaceAll("_", " ");
    const cardTitle = this._config.title || attrs.friendly_name || entityId;
    const deviceClass = attrs.device_class || "media player";
    const showArtwork = this._config.show_artwork !== false;
    const image = showArtwork ? safeImageUrl(attrs.entity_picture_local || attrs.entity_picture) : "";
    const mediaTitle = attrs.media_title || attrs.media_channel || attrs.app_name || attrs.app_id || (state === "idle" ? "Ready to play" : "No media details");
    const subtitle = [attrs.media_artist, attrs.media_series_title, attrs.media_album_artist].find((item) => typeof item === "string" && item.trim()) || attrs.media_episode || attrs.app_name || "";
    const album = [attrs.media_album_name, attrs.media_playlist, attrs.source].find((item) => typeof item === "string" && item.trim()) || "";
    const playerClass = `shell ${isPlaying ? "playing" : ""} ${state === "paused" ? "paused" : ""} ${off ? "off" : ""} ${unavailable ? "unavailable" : ""}`;
    const statusClass = state === "playing" ? "On air" : stateText;
    const art = image ? `<img src="${escapeHtml(image)}" alt="" loading="lazy">` : `<ha-icon icon="${deviceClass === "tv" ? "mdi:television" : deviceClass === "speaker" ? "mdi:speaker" : "mdi:play-circle-outline"}"></ha-icon>`;
    let body;
    if (unavailable) {
      body = `<div class="empty-state"><div class="off-copy"><div class="off-title">Player unavailable</div><div class="off-hint">Home Assistant cannot currently reach this device.</div></div></div>`;
    } else if (off) {
      const power = featureSupported(entity, FEATURE.TURN_ON) ? `<button class="turn-on" type="button" data-action="power" data-service="turn_on"><ha-icon icon="mdi:power"></ha-icon><span class="turn-on-label">Turn on</span></button>` : "";
      body = `<div class="off-state"><div class="off-copy"><div class="off-title">${deviceClass === "tv" ? "Ready when you are" : "Player is off"}</div><div class="off-hint">${deviceClass === "tv" ? "Turn it on to see playback controls." : ""}</div></div>${power}</div>`;
    } else {
      const times = this._timePosition(entity);
      const showProgress = featureSupported(entity, FEATURE.SEEK) && times.duration > 0;
      const progress = showProgress ? Math.max(0, Math.min(100, (times.position / times.duration) * 100)) : 0;
      const progressMarkup = showProgress ? `<div class="progress-wrap"><div class="progress-line"><span data-position>${formatTime(times.position)}</span><input class="range" type="range" min="0" max="${times.duration}" step="1" value="${times.position}" style="--range-progress:${progress}%" data-action="seek" aria-label="Playback position"><span>${formatTime(times.duration)}</span></div></div>` : "";
      const controls = [];
      if (featureSupported(entity, FEATURE.PREVIOUS_TRACK)) controls.push(this._button("previous", "mdi:skip-previous", "Previous track", { disabled: unavailable }));
      if (state === "playing" && featureSupported(entity, FEATURE.PAUSE)) controls.push(this._button("pause", "mdi:pause", "Pause", { primary: true }));
      else if (state !== "playing" && featureSupported(entity, FEATURE.PLAY)) controls.push(this._button("play", "mdi:play", "Play", { primary: true }));
      if (featureSupported(entity, FEATURE.NEXT_TRACK)) controls.push(this._button("next", "mdi:skip-next", "Next track", { disabled: unavailable }));
      if (featureSupported(entity, FEATURE.TURN_OFF)) controls.push(this._button("power", "mdi:power", "Turn off"));
      const transport = controls.length ? `<div class="controls">${controls.join("")}</div>` : "";
      const volumeLevel = numberOrNull(attrs.volume_level);
      const volumePercent = volumeLevel === null ? 0 : Math.round(Math.max(0, Math.min(1, volumeLevel)) * 100);
      const hasVolume = featureSupported(entity, FEATURE.VOLUME_SET) && volumeLevel !== null;
      const hasMute = featureSupported(entity, FEATURE.VOLUME_MUTE);
      const volume = hasVolume || hasMute ? `<div class="volume-row"><ha-icon icon="${attrs.is_volume_muted ? "mdi:volume-mute" : "mdi:volume-high"}"></ha-icon>${hasVolume ? `<input class="range" type="range" min="0" max="100" step="1" value="${volumePercent}" style="--range-progress:${volumePercent}%" data-action="volume" aria-label="Volume"><span class="volume-value" data-volume-value>${volumePercent}%</span>` : ""}${hasMute ? this._button("mute", attrs.is_volume_muted ? "mdi:volume-off" : "mdi:volume-high", attrs.is_volume_muted ? "Unmute" : "Mute", { pressed: Boolean(attrs.is_volume_muted) }) : ""}</div>` : "";
      const stop = featureSupported(entity, FEATURE.STOP) && ["playing", "paused", "buffering"].includes(state) ? `<div class="more-row"><button class="more" type="button" data-action="stop"><ha-icon icon="mdi:stop"></ha-icon>Stop playback</button></div>` : "";
      body = `<div class="now-playing${showArtwork ? "" : " no-artwork"}">${showArtwork ? `<div class="artwork">${art}</div>` : ""}<div class="track-copy"><div class="track-kicker">${escapeHtml(deviceClass)} · ${escapeHtml(stateText)}</div><div class="track-title">${escapeHtml(mediaTitle)}</div>${subtitle ? `<div class="track-subtitle">${escapeHtml(subtitle)}</div>` : ""}${album ? `<div class="album">${escapeHtml(album)}</div>` : ""}</div></div>${progressMarkup}${transport}${volume}${this._renderAdvanced(entity, unavailable)}${stop}`;
    }
    const stateToken = state === "playing" ? "playing" : state === "paused" ? "paused" : off ? "off" : unavailable ? "unavailable" : "";
    this._root.innerHTML = `<style>${STYLE}</style><ha-card><div class="${playerClass}"><header class="topline"><div class="brand"><span class="brand-icon"><ha-icon icon="${deviceClass === "tv" ? "mdi:television-play" : "mdi:music-note-eighth"}"></ha-icon></span><div class="brand-copy"><div class="eyebrow">${isPlaying ? "Now playing" : "Media player"}</div><h2 class="player-name">${escapeHtml(cardTitle)}</h2></div></div><span class="state-pill ${stateToken}"><span class="state-dot"></span>${escapeHtml(statusClass)}</span></header>${body}<div class="action-feedback" role="status" aria-live="polite" aria-atomic="true" hidden></div></div></ha-card>`;
    this._paintFeedback();
  }
}

if (!customElements.get(CARD_TYPE)) customElements.define(CARD_TYPE, MediaPlayerCard);

window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === CARD_TYPE)) {
  window.customCards.push({ type: CARD_TYPE, name: "Media Player Card", description: "A colorful, capability-aware Home Assistant media player card.", preview: true, documentationURL: "https://github.com/Liionboy/media-player-card" });
}

console.info("%c MEDIA-PLAYER-CARD %c v1.2.5 ", "color:#fff;background:#756ce5;font-weight:bold", "color:#756ce5;background:#eef0ff;font-weight:bold");

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="media-player-card"))window.customCards.push({type:"media-player-card",name:"Media Player Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["media-player-card"]={version:"1.2.5",types:["media-player-card"]};
})() } catch(error){suite.errors.push({component:"media-player-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","media-player-card",error);}
/* temperature-humidity-card @ 1.2.6 (ea19faa58d75cc0a6b11f77700a0bda6dc53f12e) */
try { (() => {
const knownTypes=["temperature-humidity-card","living-temperature-card"];
if(knownTypes.some(type=>customElements.get(type))){suite.skipped["temperature-humidity-card"]="Already registered; remove old resources and reload to use the suite version.";return;}
const CARD_TYPE = "temperature-humidity-card";
const LEGACY_CARD_TYPE = "living-temperature-card";
const VERSION = "1.2.6";

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 55%,transparent);border-radius:var(--orbit-theme-card-radius,26px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 14px 38px rgba(25,40,70,.12)))}
  .shell{position:relative;isolation:isolate;padding:clamp(17px,3.5vw,25px);background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 0% 0%,rgba(255,133,92,.16),transparent 44%),radial-gradient(ellipse at 100% 100%,rgba(40,205,190,.15),transparent 48%),var(--ha-card-background,var(--card-background-color,#fff)))}
  .shell:before{position:absolute;z-index:-1;inset:0;background:var(--orbit-theme-overlay-background,linear-gradient(125deg,rgba(255,151,111,.055),transparent 42%,rgba(55,202,192,.07)));content:""}
  .topline{display:flex;align-items:center;justify-content:space-between;gap:12px}.brand{display:flex;align-items:center;gap:12px;min-width:0}.brand-icon{display:grid;place-items:center;width:46px;height:46px;flex:none;border:1px solid rgba(255,255,255,.58);border-radius:16px;background:var(--orbit-theme-brand-background,linear-gradient(145deg,#ff9b72,#f36e76 53%,#9b7af7));box-shadow:0 8px 20px rgba(235,111,125,.25);color:var(--orbit-theme-on-accent,#fff)}.brand-icon ha-icon{--mdc-icon-size:25px}.brand-copy{min-width:0}.eyebrow{color:var(--orbit-theme-accent,#d66d59);font-size:9px;font-weight:850;letter-spacing:.18em;text-transform:uppercase}.title{margin:4px 0 0;overflow:hidden;font-size:clamp(18px,2.8vw,23px);font-weight:790;letter-spacing:-.04em;text-overflow:ellipsis;white-space:nowrap}.live{display:flex;align-items:center;gap:7px;padding:7px 10px;border:1px solid rgba(35,165,151,.17);border-radius:999px;background:rgba(45,190,166,.09);color:#188c7e;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap}.live-dot{width:7px;height:7px;border-radius:50%;background:#24b69b;box-shadow:0 0 0 4px rgba(36,182,155,.14)}
  .metrics{display:grid;grid-template-columns:1fr 1fr;gap:13px;margin-top:21px}.metric{position:relative;display:flex;min-width:0;min-height:178px;flex-direction:column;justify-content:space-between;overflow:hidden;padding:16px;border:1px solid transparent;border-radius:21px}.metric:after{position:absolute;right:-34px;bottom:-50px;width:135px;height:135px;border-radius:50%;content:"";pointer-events:none}.temperature{border-color:var(--orbit-theme-line,rgba(242,127,91,.18));background:var(--orbit-theme-metric-background,linear-gradient(145deg,rgba(255,236,224,.96),rgba(255,247,239,.84) 58%,rgba(255,255,255,.76)))}.temperature:after{background:radial-gradient(circle,rgba(255,142,96,.25),rgba(255,142,96,0) 70%)}.humidity{border-color:var(--orbit-theme-line,rgba(39,176,174,.19));background:var(--orbit-theme-metric-background,linear-gradient(145deg,rgba(220,250,246,.96),rgba(235,249,255,.88) 58%,rgba(255,255,255,.78)))}.humidity:after{background:radial-gradient(circle,rgba(39,188,182,.24),rgba(39,188,182,0) 70%)}
  .metric-head{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;gap:8px}.metric-label{display:flex;align-items:center;gap:7px;font-size:10px;font-weight:850;letter-spacing:.14em;text-transform:uppercase}.temperature .metric-label{color:var(--orbit-theme-temperature-color,#cf654e)}.humidity .metric-label{color:var(--orbit-theme-humidity-color,#168e91)}.metric-label ha-icon{--mdc-icon-size:17px}.metric-badge{display:grid;place-items:center;width:28px;height:28px;border-radius:10px;background:var(--orbit-theme-metric-background,rgba(255,255,255,.6))}.temperature .metric-badge{color:var(--orbit-theme-temperature-color,#e17c57)}.humidity .metric-badge{color:var(--orbit-theme-humidity-color,#239fa1)}.metric-value{position:relative;z-index:1;display:flex;align-items:flex-start;gap:3px;margin-top:auto;padding-top:17px;font-size:clamp(39px,8vw,58px);font-weight:850;letter-spacing:-.075em;line-height:.95;white-space:nowrap}.temperature .metric-value{color:var(--orbit-theme-temperature-color,#bf5849)}.humidity .metric-value{color:var(--orbit-theme-humidity-color,#147f89)}.unit{padding-top:5px;font-size:clamp(14px,2.8vw,19px);font-weight:720;letter-spacing:-.02em}
  .temperature-scale{position:relative;z-index:1;margin-top:auto;padding-top:15px}.scale-track{position:relative;height:8px;border:1px solid rgba(255,255,255,.7);border-radius:999px;background:linear-gradient(90deg,#69a8f5 0%,#4bc8d0 27%,#9dc878 52%,#f3bd65 74%,#ef7666 100%);box-shadow:inset 0 1px 2px rgba(84,63,70,.12)}.scale-marker{position:absolute;top:50%;width:16px;height:16px;border:3px solid #fff;border-radius:50%;background:#ce5c4b;box-shadow:0 2px 7px rgba(91,48,50,.36);transform:translate(-50%,-50%)}.scale-labels{display:flex;justify-content:space-between;margin-top:6px;color:var(--orbit-theme-muted,rgba(90,72,75,.65));font-size:9px;font-weight:700;font-variant-numeric:tabular-nums}
  .humidity-content{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:auto;padding-top:13px}.humidity .metric-value{margin:0;padding:0;font-size:clamp(36px,7vw,52px)}.humidity-ring{display:grid;place-items:center;width:66px;height:66px;flex:none;border-radius:50%;background:conic-gradient(#22b8aa var(--progress,0%),rgba(30,157,168,.13) 0);box-shadow:0 4px 14px rgba(30,157,168,.13)}.humidity-ring:before{width:51px;height:51px;border:1px solid rgba(255,255,255,.8);border-radius:50%;background:var(--orbit-theme-metric-background,linear-gradient(145deg,#effffc,#e5f6fa));content:""}.humidity-ring ha-icon{position:absolute;color:#229da0;--mdc-icon-size:23px}
  .footer{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:15px;padding:0 3px;color:var(--secondary-text-color);font-size:10px}.footer-note{display:flex;align-items:center;gap:6px}.footer-note ha-icon{color:#6d86a0;--mdc-icon-size:15px}.footer-accent{color:#a36a8d;font-weight:700}
  .unavailable{color:var(--error-color,#bd4e4e)!important}.empty{color:var(--secondary-text-color)!important;font-size:clamp(24px,5vw,36px)!important;letter-spacing:-.04em!important}
  @container card (max-width: 480px){.shell{padding:14px}.topline{gap:8px}.brand{gap:9px}.brand-icon{width:39px;height:39px;border-radius:13px}.brand-icon ha-icon{--mdc-icon-size:21px}.title{font-size:17px}.live{gap:5px;padding:6px 8px;font-size:9px}.metrics{gap:9px;margin-top:15px}.metric{min-height:140px;padding:11px;border-radius:17px}.metric-label{gap:5px;font-size:9px;letter-spacing:.1em}.metric-label ha-icon{--mdc-icon-size:15px}.metric-badge{width:25px;height:25px}.metric-value{padding-top:12px;font-size:clamp(31px,9vw,43px)}.unit{font-size:14px}.temperature-scale{padding-top:11px}.humidity-content{gap:5px;padding-top:10px}.humidity .metric-value{font-size:clamp(29px,8vw,39px)}.humidity-ring{width:52px;height:52px}.humidity-ring:before{width:40px;height:40px}.humidity-ring ha-icon{--mdc-icon-size:18px}.footer{gap:6px;margin-top:12px;font-size:9px}}
  @container card (max-width: 370px){.shell{padding:12px}.metrics{gap:7px;margin-top:13px}.metric{min-height:128px;padding:9px;border-radius:15px}.brand-icon{width:36px;height:36px}.title{font-size:15px}.live{padding:5px 7px;font-size:8px}.metric-value{font-size:30px}.humidity .metric-value{font-size:27px}.humidity-ring{width:46px;height:46px}.humidity-ring:before{width:36px;height:36px}.humidity-ring ha-icon{--mdc-icon-size:16px}.footer-accent{display:none}}
  @media(prefers-reduced-motion:reduce){*,*::before,*::after{transition:none!important;scroll-behavior:auto!important}}
`;

const SCHEMA = [
  { name: "temperature_entity", required: true, selector: { entity: { domain: ["sensor"] } } },
  { name: "humidity_entity", selector: { entity: { domain: ["sensor"] } } },
  { name: "title", selector: { text: {} } },
];
const LABELS = { temperature_entity: "Temperature sensor", humidity_entity: "Humidity sensor", title: "Card title" };

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function attachMoreInfoHold(root, host, getEntityId) {
  let timer;
  let start;
  let lastOpenedAt = 0;
  const interactive = (event) => event.composedPath().some((node) => node instanceof HTMLElement && node.matches("button,input,select,textarea,a,[role='button'],[contenteditable='true']"));
  const open = (entityId) => {
    if (!entityId) return;
    lastOpenedAt = Date.now();
    host.dispatchEvent(new CustomEvent("hass-more-info", { bubbles: true, composed: true, detail: { entityId } }));
  };
  const cancel = () => { clearTimeout(timer); timer = undefined; start = undefined; };
  root.addEventListener("pointerdown", (event) => {
    cancel();
    if (event.button !== 0 || interactive(event)) return;
    const entityId = getEntityId(event);
    if (!entityId) return;
    start = { x: event.clientX, y: event.clientY };
    timer = window.setTimeout(() => { timer = undefined; open(entityId); }, 550);
  });
  root.addEventListener("pointermove", (event) => {
    if (start && Math.hypot(event.clientX - start.x, event.clientY - start.y) > 12) cancel();
  });
  ["pointerup", "pointercancel"].forEach((type) => root.addEventListener(type, cancel));
  root.addEventListener("pointerout", (event) => {
    if (!(event.relatedTarget instanceof Node) || !root.contains(event.relatedTarget)) cancel();
  });
  root.addEventListener("contextmenu", (event) => {
    if (interactive(event)) return;
    event.preventDefault();
    cancel();
    if (Date.now() - lastOpenedAt > 750) open(getEntityId(event));
  });
}

function numericState(entity) {
  if (!entity || ["unknown", "unavailable"].includes(String(entity.state).toLowerCase())) return null;
  const value = Number(entity.state);
  return Number.isFinite(value) ? value : null;
}

function formatValue(value, unit) {
  if (value === null) return "—";
  const digits = unit === "%" ? 0 : 1;
  return value.toLocaleString(undefined, { maximumFractionDigits: digits, minimumFractionDigits: digits });
}

class TemperatureHumidityCard extends HTMLElement {
  static getConfigForm() {
    return { schema: SCHEMA, computeLabel: (field) => LABELS[field.name] || field.name };
  }

  static getStubConfig() { return { title: "Temperature & Humidity" }; }

  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("Provide a valid Temperature & Humidity Card configuration.");
    this._config = { title: "Temperature & Humidity", ...config };
    this._root ??= this.attachShadow({ mode: "open" });
    if (!this._listenersAttached) {
      attachMoreInfoHold(this._root, this, (event) => {
        const metric = event.composedPath().find((node) => node instanceof HTMLElement && node.dataset?.entityId);
        return metric?.dataset.entityId || this._config?.temperature_entity;
      });
      this._listenersAttached = true;
    }
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    const signature = JSON.stringify([this.temperatureEntity, this.humidityEntity]);
    if (signature !== this._entitySignature) {
      this._entitySignature = signature;
      this.render();
    }
  }

  getCardSize() { return 3; }
  getGridOptions() { return { rows: 3, columns: 6, min_rows: 2, max_rows: 4 }; }
  get temperatureEntity() { return this._hass?.states?.[this._config?.temperature_entity]; }
  get humidityEntity() { return this._config?.humidity_entity ? this._hass?.states?.[this._config.humidity_entity] : null; }
  title() { return this._config.title || "Temperature & Humidity"; }

  metricMarkup({ kind, entity, label, fallbackIcon }) {
    if (!entity) return "";
    const value = numericState(entity);
    const unit = entity.attributes?.unit_of_measurement || (kind === "humidity" ? "%" : "");
    const unavailable = value === null;
    const icon = entity.attributes?.icon || fallbackIcon;
    const safeValue = escapeHtml(formatValue(value, unit));
    const common = `class="metric ${kind}" data-entity-id="${escapeHtml(entity.entity_id || (kind === "humidity" ? this._config.humidity_entity : this._config.temperature_entity))}" aria-label="${escapeHtml(label)}"`;
    if (kind === "humidity") {
      const progress = value === null ? 0 : Math.max(0, Math.min(100, value));
      return `<section ${common}><div class="metric-head"><div class="metric-label"><ha-icon icon="${escapeHtml(icon)}"></ha-icon>${escapeHtml(label)}</div><span class="metric-badge"><ha-icon icon="mdi:water-outline"></ha-icon></span></div><div class="humidity-content"><div class="metric-value ${unavailable ? "empty unavailable" : ""}">${safeValue}<span class="unit">${escapeHtml(unit)}</span></div><div class="humidity-ring" style="--progress:${progress}%" role="img" aria-label="${unavailable ? "Humidity unavailable" : `${safeValue} ${escapeHtml(unit)} humidity level`}"><ha-icon icon="mdi:water"></ha-icon></div></div></section>`;
    }
    const fahrenheit = unit.toLowerCase().includes("f");
    const scaleMin = fahrenheit ? 32 : 0;
    const scaleMax = fahrenheit ? 104 : 40;
    const position = value === null ? 0 : Math.max(0, Math.min(100, ((value - scaleMin) / (scaleMax - scaleMin)) * 100));
    const scale = `<div class="temperature-scale" aria-label="Temperature reference scale from ${scaleMin} to ${scaleMax}${escapeHtml(unit)}"><div class="scale-track">${unavailable ? "" : `<span class="scale-marker" style="left:${position}%"></span>`}</div><div class="scale-labels"><span>${scaleMin}${escapeHtml(unit)}</span><span>${scaleMax}${escapeHtml(unit)}</span></div></div>`;
    return `<section ${common}><div class="metric-head"><div class="metric-label"><ha-icon icon="${escapeHtml(icon)}"></ha-icon>${escapeHtml(label)}</div><span class="metric-badge"><ha-icon icon="mdi:thermometer"></ha-icon></span></div><div class="metric-value ${unavailable ? "empty unavailable" : ""}">${safeValue}<span class="unit">${escapeHtml(unit)}</span></div>${scale}</section>`;
  }

  render() {
    if (!this._root || !this._config || !this._hass) return;
    if (!this._config.temperature_entity) {
      this._root.innerHTML = `<style>${STYLE}</style><ha-card><div class="shell"><header class="topline"><div class="brand"><span class="brand-icon"><ha-icon icon="mdi:home-thermometer"></ha-icon></span><div class="brand-copy"><div class="eyebrow">Indoor climate</div><h2 class="title">${escapeHtml(this.title())}</h2></div></div></header><p class="footer-note">Choose a temperature sensor in the card editor to get started.</p></div></ha-card>`;
      return;
    }
    const temperature = this.metricMarkup({ kind: "temperature", entity: this.temperatureEntity, label: "Temperature", fallbackIcon: "mdi:thermometer" });
    const humidity = this.metricMarkup({ kind: "humidity", entity: this.humidityEntity, label: "Humidity", fallbackIcon: "mdi:water-percent" });
    const title = this.title();
    const updated = [this.temperatureEntity?.last_changed, this.humidityEntity?.last_changed].filter(Boolean).sort().at(-1);
    const freshness = updated ? `Updated ${new Date(updated).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })}` : "Live sensor readings";
    this._root.innerHTML = `<style>${STYLE}</style><ha-card><div class="shell"><header class="topline"><div class="brand"><span class="brand-icon"><ha-icon icon="mdi:home-thermometer"></ha-icon></span><div class="brand-copy"><div class="eyebrow">Indoor climate</div><h2 class="title">${escapeHtml(title)}</h2></div></div><span class="live"><span class="live-dot"></span>Live</span></header><div class="metrics">${temperature}${humidity}</div><footer class="footer"><span class="footer-note"><ha-icon icon="mdi:clock-outline"></ha-icon>${escapeHtml(freshness)}</span><span class="footer-accent">Comfort at a glance</span></footer></div></ha-card>`;
  }
}

if (!customElements.get(CARD_TYPE)) customElements.define(CARD_TYPE, TemperatureHumidityCard);
if (!customElements.get(LEGACY_CARD_TYPE)) customElements.define(LEGACY_CARD_TYPE, class extends TemperatureHumidityCard {});
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === CARD_TYPE)) {
  window.customCards.push({ type: CARD_TYPE, name: "Temperature & Humidity Card", description: "Colorful temperature and humidity overview for Home Assistant.", preview: true, documentationURL: "https://github.com/Liionboy/temperature-humidity-card" });
}
console.info(`%c TEMPERATURE-HUMIDITY-CARD %c ${VERSION} `, "background:#e78070;color:#fff;font-weight:700;", "background:transparent;color:var(--primary-text-color);font-weight:700;");

window.customCards ||= [];
for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}
if(!window.customCards.some(card=>card.type==="temperature-humidity-card"))window.customCards.push({type:"temperature-humidity-card",name:"Temperature & Humidity Card",description:"Included in Orbit Lovelace",preview:false});
suite.components["temperature-humidity-card"]={version:"1.2.6",types:["temperature-humidity-card"]};
})() } catch(error){suite.errors.push({component:"temperature-humidity-card",message:String(error?.message||error)});console.error("Orbit Lovelace: component failed","temperature-humidity-card",error);}
})();
