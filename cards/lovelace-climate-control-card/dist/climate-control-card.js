const CARD_TYPE = "climate-control-card";
const VERSION = "1.3.2";

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:24px;background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1))}
  .shell{--glow:var(--primary-color);padding:clamp(16px,3vw,22px);background:radial-gradient(ellipse at 8% 0%,color-mix(in srgb,var(--glow) 11%,transparent),transparent 48%)}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px}.identity{display:flex;align-items:center;gap:12px;min-width:0}.icon-wrap{display:grid;place-items:center;width:44px;height:44px;flex:none;border:1px solid color-mix(in srgb,var(--glow) 22%,transparent);border-radius:15px;background:color-mix(in srgb,var(--glow) 12%,var(--card-background-color,#fff));color:var(--glow)}.icon-wrap ha-icon{--mdc-icon-size:24px}.identity-copy{min-width:0}.eyebrow{color:var(--secondary-text-color);font-size:9px;font-weight:800;letter-spacing:.15em;text-transform:uppercase}.title{margin:3px 0 0;overflow:hidden;font-size:clamp(17px,2.5vw,21px);font-weight:770;letter-spacing:-.035em;text-overflow:ellipsis;white-space:nowrap}.pill{display:flex;align-items:center;gap:7px;padding:7px 10px;border-radius:999px;background:var(--secondary-background-color);color:var(--secondary-text-color);font-size:11px;font-weight:750;white-space:nowrap}.dot{width:7px;height:7px;border-radius:50%;background:currentColor}.pill.active{color:var(--success-color,#23876e)}.pill.idle{color:var(--secondary-text-color)}.pill.heating{color:var(--error-color,#df7044)}.pill.unavailable{color:var(--error-color,#c74343)}
  .temperatures{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:20px}.temperature{min-width:0;padding:15px;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:18px;background:color-mix(in srgb,var(--card-background-color,#fff) 86%,var(--secondary-background-color))}.temperature-label{color:var(--secondary-text-color);font-size:10px;font-weight:750;letter-spacing:.1em;text-transform:uppercase}.temperature-value{display:flex;align-items:baseline;gap:3px;margin-top:5px;font-size:clamp(29px,6vw,40px);font-weight:820;letter-spacing:-.065em;line-height:1}.unit{font-size:15px;font-weight:650;letter-spacing:0}.temperature-hint{margin-top:7px;color:var(--secondary-text-color);font-size:11px}.target-row{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:13px}.stepper{display:flex;align-items:center;gap:8px}.step-button{display:grid;place-items:center;width:38px;height:38px;border:1px solid var(--divider-color);border-radius:13px;background:var(--card-background-color,#fff);color:var(--primary-text-color);cursor:pointer;transition:transform .15s ease,border-color .15s ease}.step-button ha-icon{--mdc-icon-size:19px}.step-button:hover:not(:disabled){border-color:var(--glow);transform:translateY(-1px)}.step-button:disabled{opacity:.45;cursor:not-allowed}.step-label{color:var(--secondary-text-color);font-size:11px}
  .compact-control{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:15px}.feedback{min-width:0;min-height:16px;color:var(--secondary-text-color);font-size:11px;line-height:1.4}.feedback.error{color:var(--error-color,#c74343)}.actions{display:flex;align-items:center;gap:9px}.power{display:flex;align-items:center;justify-content:center;gap:8px;min-width:112px;min-height:42px;padding:0 15px;border:0;border-radius:14px;background:var(--glow);color:var(--text-primary-color,#fff);font:inherit;font-size:12px;font-weight:780;cursor:pointer;transition:filter .15s ease,transform .15s ease}.power:hover:not(:disabled){filter:brightness(1.06);transform:translateY(-1px)}.power.off{border:1px solid var(--divider-color);background:var(--card-background-color,#fff);color:var(--primary-text-color)}.power ha-icon{--mdc-icon-size:18px}.power:disabled{opacity:.55;cursor:wait}.controls-toggle{min-height:42px;padding:0 12px;border:1px solid var(--divider-color);border-radius:14px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:12px;font-weight:740;cursor:pointer;transition:background .15s ease,border-color .15s ease}.controls-toggle:hover{border-color:var(--glow);background:color-mix(in srgb,var(--glow) 7%,var(--card-background-color,#fff))}
  .settings{margin-top:16px;padding-top:15px;border-top:1px solid color-mix(in srgb,var(--divider-color) 72%,transparent)}.settings-title{margin:0 0 11px;font-size:12px;font-weight:760}.setting{margin-top:12px}.setting-label{display:block;margin-bottom:7px;color:var(--secondary-text-color);font-size:10px;font-weight:750;letter-spacing:.08em;text-transform:uppercase}.select-wrap{position:relative}.select{width:100%;min-height:43px;padding:0 38px 0 13px;border:1px solid var(--divider-color);border-radius:13px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:13px;font-weight:650;appearance:none}.select-wrap:after{position:absolute;top:50%;right:14px;color:var(--secondary-text-color);content:'⌄';pointer-events:none;transform:translateY(-60%)}
  .shell{position:relative;background:radial-gradient(ellipse at 0% 0%,color-mix(in srgb,var(--glow) 17%,transparent),transparent 52%),radial-gradient(ellipse at 100% 100%,color-mix(in srgb,#38bdf8 9%,transparent),transparent 48%)}.shell:before{position:absolute;top:0;right:22px;left:22px;height:3px;border-radius:0 0 4px 4px;background:linear-gradient(90deg,#38bdf8,var(--glow),#c084fc);content:""}
  .icon-wrap{border-color:color-mix(in srgb,var(--glow) 35%,transparent);background:linear-gradient(145deg,color-mix(in srgb,var(--glow) 90%,white),color-mix(in srgb,var(--glow) 68%,#7c3aed));box-shadow:0 7px 18px color-mix(in srgb,var(--glow) 22%,transparent);color:#fff}.eyebrow{color:var(--glow)}.pill{border:1px solid color-mix(in srgb,currentColor 12%,transparent);background:color-mix(in srgb,currentColor 8%,var(--card-background-color,#fff))}.dot{box-shadow:0 0 0 3px color-mix(in srgb,currentColor 17%,transparent)}.pill.active{color:#0f9b78}.pill.idle{color:var(--secondary-text-color)}.pill.heating{color:#e45d31}.pill.cooling{color:#2588d8}
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
