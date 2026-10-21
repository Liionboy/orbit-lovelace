const CARD_TAG = "alecoair-dehumidifier-card";
const PALETTES = new Set(["aurora", "ocean", "sunset", "lavender"]);
const MODE_LABELS = { auto: "Auto", boost: "Boost", sleep: "Sleep", normal: "Normal", eco: "Eco" };

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:alecoair-card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:24px;background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1));touch-action:pan-y}
  ha-card[data-palette="aurora"]{--accent:#078f72;--accent2:#27b7b0;--accent3:#54a9db}
  ha-card[data-palette="ocean"]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}
  ha-card[data-palette="sunset"]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}
  ha-card[data-palette="lavender"]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}
  .shell{position:relative;padding:clamp(16px,3cqi,22px);background:radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 13%,transparent),transparent 54%),radial-gradient(ellipse at 100% 100%,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 48%)}
  .shell:before{position:absolute;top:0;right:22px;left:22px;height:3px;border-radius:0 0 4px 4px;background:linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3));content:""}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}.identity{display:flex;align-items:center;gap:12px;min-width:0}.icon-wrap{display:grid;place-items:center;flex:0 0 48px;width:48px;height:48px;border:1px solid color-mix(in srgb,var(--accent) 24%,transparent);border-radius:17px;background:linear-gradient(145deg,var(--accent),var(--accent2));box-shadow:0 7px 18px color-mix(in srgb,var(--accent) 22%,transparent);color:#fff}.icon-wrap ha-icon{--mdc-icon-size:25px}.identity-copy{min-width:0}.eyebrow{color:var(--accent);font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.title{overflow:hidden;margin:3px 0 0;font-size:clamp(16px,2.5cqi,20px);font-weight:780;letter-spacing:-.03em;text-overflow:ellipsis;white-space:nowrap}
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
