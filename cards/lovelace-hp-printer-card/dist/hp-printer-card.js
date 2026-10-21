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
    border-radius: 24px;
    box-shadow: var(--ha-card-box-shadow, 0 10px 30px rgba(22, 35, 55, .08));
  }
  .shell { padding: clamp(18px, 3vw, 28px); }
  .header { display:flex; align-items:center; justify-content:space-between; gap:16px; }
  .brand { display:flex; align-items:center; gap:14px; min-width:0; }
  .mark { display:grid; place-items:center; width:48px; height:48px; flex:none; border-radius:16px; color:var(--primary-color); background:color-mix(in srgb, var(--primary-color) 12%, transparent); }
  .mark svg { width:26px; height:26px; }
  .eyebrow { color:var(--secondary-text-color); font-size:11px; font-weight:750; letter-spacing:.14em; text-transform:uppercase; }
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
