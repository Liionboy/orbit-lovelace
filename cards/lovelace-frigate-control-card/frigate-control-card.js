const CARD_TAG = "frigate-control-card";
const PALETTES = new Set(["aurora", "ocean", "sunset", "lavender"]);
const SENSOR_FIELDS = [
  ["objects_entity", "Objects", "mdi:shape-outline"],
  ["persons_entity", "Persons", "mdi:account-outline"],
  ["vehicles_entity", "Vehicles", "mdi:car-outline"],
];

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:frigate-card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:24px;background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1))}
  ha-card[data-palette="aurora"]{--accent:#078f72;--accent2:#27b7b0;--accent3:#54a9db}ha-card[data-palette="ocean"]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}ha-card[data-palette="sunset"]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}ha-card[data-palette="lavender"]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}
  .shell{position:relative;padding:clamp(16px,3cqi,22px);background:radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 13%,transparent),transparent 54%),radial-gradient(ellipse at 100% 100%,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 48%)}.shell:before{position:absolute;top:0;right:22px;left:22px;height:3px;border-radius:0 0 4px 4px;background:linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3));content:""}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}.identity{display:flex;align-items:center;gap:12px;min-width:0}.icon-wrap{display:grid;place-items:center;flex:none;width:48px;height:48px;border:1px solid color-mix(in srgb,var(--accent) 24%,transparent);border-radius:17px;background:linear-gradient(145deg,var(--accent),var(--accent2));box-shadow:0 7px 18px color-mix(in srgb,var(--accent) 22%,transparent);color:#fff}.icon-wrap ha-icon{--mdc-icon-size:25px}.identity-copy{min-width:0}.eyebrow{color:var(--accent);font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.title{overflow:hidden;margin:3px 0 0;font-size:clamp(16px,2.5cqi,20px);font-weight:780;letter-spacing:-.03em;text-overflow:ellipsis;white-space:nowrap}
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
