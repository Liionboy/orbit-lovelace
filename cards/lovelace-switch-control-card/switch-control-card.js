const CARD_TAG = "switch-control-card";
const PALETTES = new Set(["aurora", "ocean", "sunset", "lavender"]);

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:switch-card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:24px;background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1));touch-action:pan-y}
  ha-card[data-palette="aurora"]{--accent:#078f72;--accent2:#27b7b0;--accent3:#54a9db}
  ha-card[data-palette="ocean"]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}
  ha-card[data-palette="sunset"]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}
  ha-card[data-palette="lavender"]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}
  .shell{position:relative;padding:clamp(16px,3cqi,22px);background:radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 13%,transparent),transparent 54%),radial-gradient(ellipse at 100% 100%,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 48%)}
  .shell:before{position:absolute;top:0;right:22px;left:22px;height:3px;border-radius:0 0 4px 4px;background:linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3));content:""}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}.identity{display:flex;align-items:center;gap:12px;min-width:0}.icon-wrap{display:grid;place-items:center;flex:0 0 48px;width:48px;height:48px;border:1px solid color-mix(in srgb,var(--accent) 24%,transparent);border-radius:17px;background:linear-gradient(145deg,var(--accent),var(--accent2));box-shadow:0 7px 18px color-mix(in srgb,var(--accent) 22%,transparent);color:#fff}.icon-wrap ha-icon{--mdc-icon-size:25px}.identity-copy{min-width:0}.eyebrow{color:var(--accent);font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.title{overflow:hidden;margin:3px 0 0;font-size:clamp(16px,2.5cqi,20px);font-weight:780;letter-spacing:-.03em;text-overflow:ellipsis;white-space:nowrap}
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
