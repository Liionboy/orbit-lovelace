const CARD_TYPE = "temperature-humidity-card";
const LEGACY_CARD_TYPE = "living-temperature-card";
const VERSION = "1.2.5";

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 55%,transparent);border-radius:26px;background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 14px 38px rgba(25,40,70,.12))}
  .shell{position:relative;isolation:isolate;padding:clamp(17px,3.5vw,25px);background:radial-gradient(ellipse at 0% 0%,rgba(255,133,92,.16),transparent 44%),radial-gradient(ellipse at 100% 100%,rgba(40,205,190,.15),transparent 48%),var(--ha-card-background,var(--card-background-color,#fff))}
  .shell:before{position:absolute;z-index:-1;inset:0;background:linear-gradient(125deg,rgba(255,151,111,.055),transparent 42%,rgba(55,202,192,.07));content:""}
  .topline{display:flex;align-items:center;justify-content:space-between;gap:12px}.brand{display:flex;align-items:center;gap:12px;min-width:0}.brand-icon{display:grid;place-items:center;width:46px;height:46px;flex:none;border:1px solid rgba(255,255,255,.58);border-radius:16px;background:linear-gradient(145deg,#ff9b72,#f36e76 53%,#9b7af7);box-shadow:0 8px 20px rgba(235,111,125,.25);color:#fff}.brand-icon ha-icon{--mdc-icon-size:25px}.brand-copy{min-width:0}.eyebrow{color:#d66d59;font-size:9px;font-weight:850;letter-spacing:.18em;text-transform:uppercase}.title{margin:4px 0 0;overflow:hidden;font-size:clamp(18px,2.8vw,23px);font-weight:790;letter-spacing:-.04em;text-overflow:ellipsis;white-space:nowrap}.live{display:flex;align-items:center;gap:7px;padding:7px 10px;border:1px solid rgba(35,165,151,.17);border-radius:999px;background:rgba(45,190,166,.09);color:#188c7e;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap}.live-dot{width:7px;height:7px;border-radius:50%;background:#24b69b;box-shadow:0 0 0 4px rgba(36,182,155,.14)}
  .metrics{display:grid;grid-template-columns:1fr 1fr;gap:13px;margin-top:21px}.metric{position:relative;display:flex;min-width:0;min-height:178px;flex-direction:column;justify-content:space-between;overflow:hidden;padding:16px;border:1px solid transparent;border-radius:21px}.metric:after{position:absolute;right:-34px;bottom:-50px;width:135px;height:135px;border-radius:50%;content:"";pointer-events:none}.temperature{border-color:rgba(242,127,91,.18);background:linear-gradient(145deg,rgba(255,236,224,.96),rgba(255,247,239,.84) 58%,rgba(255,255,255,.76))}.temperature:after{background:radial-gradient(circle,rgba(255,142,96,.25),rgba(255,142,96,0) 70%)}.humidity{border-color:rgba(39,176,174,.19);background:linear-gradient(145deg,rgba(220,250,246,.96),rgba(235,249,255,.88) 58%,rgba(255,255,255,.78))}.humidity:after{background:radial-gradient(circle,rgba(39,188,182,.24),rgba(39,188,182,0) 70%)}
  .metric-head{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;gap:8px}.metric-label{display:flex;align-items:center;gap:7px;font-size:10px;font-weight:850;letter-spacing:.14em;text-transform:uppercase}.temperature .metric-label{color:#cf654e}.humidity .metric-label{color:#168e91}.metric-label ha-icon{--mdc-icon-size:17px}.metric-badge{display:grid;place-items:center;width:28px;height:28px;border-radius:10px;background:rgba(255,255,255,.6)}.temperature .metric-badge{color:#e17c57}.humidity .metric-badge{color:#239fa1}.metric-value{position:relative;z-index:1;display:flex;align-items:flex-start;gap:3px;margin-top:auto;padding-top:17px;font-size:clamp(39px,8vw,58px);font-weight:850;letter-spacing:-.075em;line-height:.95;white-space:nowrap}.temperature .metric-value{color:#bf5849}.humidity .metric-value{color:#147f89}.unit{padding-top:5px;font-size:clamp(14px,2.8vw,19px);font-weight:720;letter-spacing:-.02em}
  .temperature-scale{position:relative;z-index:1;margin-top:auto;padding-top:15px}.scale-track{position:relative;height:8px;border:1px solid rgba(255,255,255,.7);border-radius:999px;background:linear-gradient(90deg,#69a8f5 0%,#4bc8d0 27%,#9dc878 52%,#f3bd65 74%,#ef7666 100%);box-shadow:inset 0 1px 2px rgba(84,63,70,.12)}.scale-marker{position:absolute;top:50%;width:16px;height:16px;border:3px solid #fff;border-radius:50%;background:#ce5c4b;box-shadow:0 2px 7px rgba(91,48,50,.36);transform:translate(-50%,-50%)}.scale-labels{display:flex;justify-content:space-between;margin-top:6px;color:rgba(90,72,75,.65);font-size:9px;font-weight:700;font-variant-numeric:tabular-nums}
  .humidity-content{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:auto;padding-top:13px}.humidity .metric-value{margin:0;padding:0;font-size:clamp(36px,7vw,52px)}.humidity-ring{display:grid;place-items:center;width:66px;height:66px;flex:none;border-radius:50%;background:conic-gradient(#22b8aa var(--progress,0%),rgba(30,157,168,.13) 0);box-shadow:0 4px 14px rgba(30,157,168,.13)}.humidity-ring:before{width:51px;height:51px;border:1px solid rgba(255,255,255,.8);border-radius:50%;background:linear-gradient(145deg,#effffc,#e5f6fa);content:""}.humidity-ring ha-icon{position:absolute;color:#229da0;--mdc-icon-size:23px}
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
if (!customElements.get(LEGACY_CARD_TYPE)) customElements.define(LEGACY_CARD_TYPE, TemperatureHumidityCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === CARD_TYPE)) {
  window.customCards.push({ type: CARD_TYPE, name: "Temperature & Humidity Card", description: "Colorful temperature and humidity overview for Home Assistant.", preview: true, documentationURL: "https://github.com/Liionboy/temperature-humidity-card" });
}
console.info(`%c TEMPERATURE-HUMIDITY-CARD %c ${VERSION} `, "background:#e78070;color:#fff;font-weight:700;", "background:transparent;color:var(--primary-text-color);font-weight:700;");
