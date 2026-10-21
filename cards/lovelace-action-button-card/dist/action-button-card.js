const CARD_TYPE = "action-button-card";
const VERSION = "0.1.0";

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:action-card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 56%,transparent);border-radius:25px;background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 13px 36px rgba(25,35,65,.12))}
  .shell{--accent:var(--primary-color,#6d75e8);position:relative;isolation:isolate;overflow:hidden;padding:clamp(16px,3.5vw,24px);background:radial-gradient(ellipse at 0% 0%,color-mix(in srgb,var(--accent) 14%,transparent),transparent 47%),radial-gradient(ellipse at 100% 100%,rgba(49,190,185,.12),transparent 48%),var(--ha-card-background,var(--card-background-color,#fff))}
  .shell:before{position:absolute;z-index:-1;inset:0;background:linear-gradient(125deg,color-mix(in srgb,var(--accent) 5%,transparent),transparent 45%,rgba(49,190,185,.045));content:"";pointer-events:none}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px}.identity{display:flex;align-items:center;gap:11px;min-width:0}.icon-wrap{display:grid;place-items:center;width:44px;height:44px;flex:none;border:1px solid color-mix(in srgb,var(--accent) 30%,transparent);border-radius:15px;background:linear-gradient(145deg,color-mix(in srgb,var(--accent) 86%,white),color-mix(in srgb,var(--accent) 74%,#44b9ba));box-shadow:0 7px 17px color-mix(in srgb,var(--accent) 22%,transparent);color:#fff}.icon-wrap ha-icon{--mdc-icon-size:23px}.copy{min-width:0}.eyebrow{color:var(--accent);font-size:9px;font-weight:850;letter-spacing:.17em;text-transform:uppercase}.title{margin:4px 0 0;overflow:hidden;font-size:clamp(16px,2.7vw,21px);font-weight:790;letter-spacing:-.035em;text-overflow:ellipsis;white-space:nowrap}.subtitle{margin:4px 0 0;color:var(--secondary-text-color);font-size:11px;line-height:1.4}
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
