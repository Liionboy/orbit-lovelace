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
  ha-card{overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 55%,transparent);border-radius:26px;background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 16px 44px rgba(18,40,59,.11))}
  .shell{padding:clamp(12px,2vw,18px);background:radial-gradient(ellipse at 15% 100%,color-mix(in srgb,var(--primary-color) 8%,transparent),transparent 48%)}
  .head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:10px}.brand{display:flex;align-items:center;gap:10px;min-width:0}.mark{display:grid;place-items:center;width:34px;height:34px;border-radius:11px;background:color-mix(in srgb,var(--primary-color) 12%,transparent);color:var(--primary-color);font-size:18px}.eyebrow{color:var(--secondary-text-color);font-size:9px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}.title{margin:2px 0 0;overflow:hidden;font-size:clamp(16px,2.2vw,20px);letter-spacing:-.035em;text-overflow:ellipsis;white-space:nowrap}
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
