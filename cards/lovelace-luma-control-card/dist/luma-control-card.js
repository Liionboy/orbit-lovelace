const CARD_TYPE = "luma-control-card";
const VERSION = "1.2.1";

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:24px;background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1))}
  .shell{--glow:var(--primary-color);padding:clamp(16px,3vw,22px);background:radial-gradient(ellipse at 8% 0%,color-mix(in srgb,var(--glow) 11%,transparent),transparent 48%)}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px}.identity{display:flex;align-items:center;gap:12px;min-width:0}.icon-wrap{display:grid;place-items:center;width:44px;height:44px;flex:none;border:1px solid color-mix(in srgb,var(--glow) 22%,transparent);border-radius:15px;background:color-mix(in srgb,var(--glow) 12%,var(--card-background-color,#fff));color:var(--glow);transition:background .25s ease,box-shadow .25s ease}.icon-wrap ha-icon{--mdc-icon-size:24px}.identity-copy{min-width:0}.eyebrow{color:var(--secondary-text-color);font-size:9px;font-weight:800;letter-spacing:.15em;text-transform:uppercase}.title{margin:3px 0 0;overflow:hidden;font-size:clamp(17px,2.5vw,21px);font-weight:770;letter-spacing:-.035em;text-overflow:ellipsis;white-space:nowrap}.pill{display:flex;align-items:center;gap:7px;padding:7px 10px;border-radius:999px;background:var(--secondary-background-color);color:var(--secondary-text-color);font-size:11px;font-weight:750;white-space:nowrap}.dot{width:7px;height:7px;border-radius:50%;background:currentColor}.pill.on{color:var(--success-color,#23876e)}.pill.on .dot{box-shadow:0 0 0 4px color-mix(in srgb,currentColor 15%,transparent)}.pill.unavailable{color:var(--error-color,#c74343)}
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
