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
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:nas-orbit;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:24px;background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1));overflow:hidden}
  ha-card[data-palette="aurora"]{--accent:#078f72;--accent2:#27b7b0;--accent3:#54a9db}ha-card[data-palette="ocean"]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}ha-card[data-palette="sunset"]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}ha-card[data-palette="lavender"]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}
  .shell{position:relative;padding:clamp(16px,3cqi,22px);background:radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 13%,transparent),transparent 54%),radial-gradient(ellipse at 100% 100%,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 48%)}.shell:before{position:absolute;top:0;right:22px;left:22px;height:3px;border-radius:0 0 4px 4px;background:linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3));content:""}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}.identity{display:flex;align-items:center;gap:12px;min-width:0}.icon-wrap{display:grid;place-items:center;flex:none;width:48px;height:48px;border:1px solid color-mix(in srgb,var(--accent) 24%,transparent);border-radius:17px;background:linear-gradient(145deg,var(--accent),var(--accent2));box-shadow:0 7px 18px color-mix(in srgb,var(--accent) 22%,transparent);color:#fff}.icon-wrap ha-icon{--mdc-icon-size:25px}.identity-copy{min-width:0}.eyebrow{color:var(--accent);font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.title{overflow:hidden;margin:3px 0 0;font-size:clamp(16px,2.5cqi,20px);font-weight:780;letter-spacing:-.03em;text-overflow:ellipsis;white-space:nowrap}
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
