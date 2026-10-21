const CARD_TYPE = "pihole-control-card";
const PALETTES = new Set(["aurora", "ocean", "sunset", "lavender", "rainbow"]);
const SENSOR_FIELDS = [
  ["queries_entity", "Total DNS queries"], ["blocked_entity", "Blocked queries"],
  ["blocked_percentage_entity", "Blocked percentage"], ["domains_entity", "Domains on blocklist"],
  ["unique_clients_entity", "Unique clients"], ["seen_clients_entity", "Seen clients"],
  ["cached_entity", "Cached queries"], ["forwarded_entity", "Forwarded queries"],
  ["query_rate_entity", "Queries per minute"],
];
const PI_HOLE_PLATFORMS = new Set(["pi_hole", "pi_hole_v6"]);

function normalize(value) { return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, ""); }
function roleMatch(entry, aliases) {
  const text = normalize([entry.entity_id, entry.original_name, entry.name, entry.unique_id].join(" "));
  return aliases.some((alias) => text.includes(alias));
}
function discoverPiHoleInstances(registry, states) {
  const entries = (registry || []).filter((entry) => PI_HOLE_PLATFORMS.has(entry.platform) && states?.[entry.entity_id]);
  const buckets = new Map();
  for (const entry of entries) {
    const key = entry.config_entry_id || entry.device_id || entry.platform;
    if (!buckets.has(key)) buckets.set(key, { id: key, platform: entry.platform, name: entry.config_subentries?.[0]?.title || "", entries: [] });
    buckets.get(key).entries.push(entry);
  }
  return [...buckets.values()].map((instance) => {
    const byDomain = (domain) => instance.entries.filter((entry) => entry.entity_id?.startsWith(`${domain}.`));
    const choose = (domain, aliases, exclude = []) => byDomain(domain).find((entry) => roleMatch(entry, aliases) && !roleMatch(entry, exclude));
    const switches = byDomain("switch");
    const mainSwitch = switches.find((entry) => roleMatch(entry, ["adblocking", "blocking", "blockads"])) || switches.find((entry) => !roleMatch(entry, ["groupdefault", "groupallow", "groupexclude", "group"])) || switches[0];
    const status = choose("binary_sensor", ["status", "running", "reachable", "online"]);
    const roles = {
      entity: mainSwitch || switches[0],
      status_entity: status,
      queries_entity: choose("sensor", ["totalqueries", "dnsqueries", "queries"], ["blocked", "cached", "forwarded", "percentage"]),
      blocked_entity: choose("sensor", ["blockedqueries", "adsblocked", "blockedtoday"], ["percentage"]),
      blocked_percentage_entity: choose("sensor", ["blockedpercentage", "percentageblocked", "adspercentage"]),
      domains_entity: choose("sensor", ["domainsonadlists", "domainsblocked", "blocklistdomains"]),
      unique_clients_entity: choose("sensor", ["uniqueclients"]),
      seen_clients_entity: choose("sensor", ["clientsseen", "clientsvisible", "clientseverseen", "seenclients"]),
      cached_entity: choose("sensor", ["cachedqueries", "queriescached"]),
      forwarded_entity: choose("sensor", ["forwardedqueries", "queriesforwarded"]),
      query_rate_entity: choose("sensor", ["queriesperminute", "queryrate", "queriesfrequency"]),
      remaining_entity: choose("sensor", ["remaining", "timeuntil", "resumesin"]),
    };
    const entityId = (entry) => entry?.entity_id;
    const selected = new Set(Object.values(roles).map(entityId).filter(Boolean));
    const switchName = (entry) => normalize([entry.entity_id, entry.original_name, entry.name].join(" "));
    roles.group_switches = switches.filter((entry) => !selected.has(entry.entity_id) && !/blocking|blockads|adblocking/.test(switchName(entry))).map(entityId);
    roles.maintenance_buttons = byDomain("button").map(entityId);
    roles.update_entities = byDomain("update").map(entityId);
    instance.name ||= mainSwitch?.name || mainSwitch?.original_name || instance.entries.find((entry) => entry.name)?.name || `Pi-hole (${instance.platform})`;
    instance.roles = Object.fromEntries(Object.entries(roles).map(([key, value]) => [key, Array.isArray(value) ? value : entityId(value)]));
    return instance;
  }).filter((instance) => instance.roles.entity);
}

const STYLE = `
  :host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color)}
  ha-card{box-sizing:border-box;width:100%;min-width:0;max-width:100%;container-type:inline-size;container-name:pihole-card;overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 58%,transparent);border-radius:24px;background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 12px 34px rgba(20,35,55,.1));touch-action:pan-y}
  ha-card[data-palette="aurora"]{--accent:#078f72;--accent2:#27b7b0;--accent3:#54a9db}ha-card[data-palette="ocean"]{--accent:#1477c9;--accent2:#22a7c7;--accent3:#6b68d8}ha-card[data-palette="sunset"]{--accent:#df5d42;--accent2:#ee973f;--accent3:#cf5d9e}ha-card[data-palette="lavender"]{--accent:#8059c7;--accent2:#b56cc8;--accent3:#4c9bc7}ha-card[data-palette="rainbow"]{--accent:#e84a72;--accent2:#f2a33a;--accent3:#7655d8}
  .shell{position:relative;padding:clamp(16px,3cqi,22px);background:radial-gradient(ellipse at 0 0,color-mix(in srgb,var(--accent) 13%,transparent),transparent 54%),radial-gradient(ellipse at 100% 100%,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 48%)}.shell:before{position:absolute;top:0;right:22px;left:22px;height:3px;border-radius:0 0 4px 4px;background:linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3));content:""}
  .header{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}.identity{display:flex;align-items:center;gap:12px;min-width:0}.icon-wrap{display:grid;place-items:center;flex:0 0 48px;width:48px;height:48px;border:1px solid color-mix(in srgb,var(--accent) 24%,transparent);border-radius:17px;background:linear-gradient(145deg,var(--accent),var(--accent2));box-shadow:0 7px 18px color-mix(in srgb,var(--accent) 22%,transparent);color:#fff}.icon-wrap ha-icon{--mdc-icon-size:25px}.identity-copy{min-width:0}.eyebrow{color:var(--accent);font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.title{overflow:hidden;margin:3px 0 0;font-size:clamp(16px,2.5cqi,20px);font-weight:780;letter-spacing:-.03em;text-overflow:ellipsis;white-space:nowrap}
  .status{display:flex;align-items:center;gap:7px;padding:7px 10px;border:1px solid color-mix(in srgb,currentColor 12%,transparent);border-radius:999px;background:color-mix(in srgb,currentColor 8%,var(--card-background-color,#fff));color:var(--secondary-text-color);font-size:11px;font-weight:750;white-space:nowrap}.status-dot{width:7px;height:7px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 16%,transparent)}.status.running{color:var(--success-color,#168b68)}.status.stopped{color:var(--error-color,#c74343)}
  .metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:18px}.metric{min-width:0;overflow:hidden;padding:14px;border:1px solid color-mix(in srgb,var(--accent) 18%,var(--divider-color));border-radius:18px;background:linear-gradient(130deg,color-mix(in srgb,var(--accent) 9%,var(--card-background-color,#fff)),color-mix(in srgb,var(--accent2) 5%,var(--card-background-color,#fff)) 64%,var(--card-background-color,#fff))}.metric-label{overflow:hidden;color:var(--secondary-text-color);font-size:10px;font-weight:760;letter-spacing:.08em;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap}.metric-value{overflow:hidden;margin-top:7px;color:var(--accent);font-size:clamp(19px,3.3cqi,26px);font-weight:830;letter-spacing:-.045em;text-overflow:ellipsis;white-space:nowrap;font-variant-numeric:tabular-nums}.metrics-secondary{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:9px}.mini{display:flex;align-items:center;gap:8px;min-width:0;padding:10px;border:1px solid color-mix(in srgb,var(--divider-color) 68%,transparent);border-radius:14px;background:color-mix(in srgb,var(--card-background-color,#fff) 88%,var(--accent))}.mini ha-icon{flex:none;color:var(--accent);--mdc-icon-size:18px}.mini-copy{min-width:0}.mini-value{overflow:hidden;font-size:12px;font-weight:780;text-overflow:ellipsis;white-space:nowrap;font-variant-numeric:tabular-nums}.mini-label{overflow:hidden;margin-top:2px;color:var(--secondary-text-color);font-size:9px;text-overflow:ellipsis;white-space:nowrap}
  .metric[data-tone],.mini[data-tone]{--sensor-accent:var(--accent)}.metric[data-tone]{border-color:color-mix(in srgb,var(--sensor-accent) 23%,var(--divider-color));background:linear-gradient(130deg,color-mix(in srgb,var(--sensor-accent) 10%,var(--card-background-color,#fff)),color-mix(in srgb,var(--sensor-accent) 4%,var(--card-background-color,#fff)) 64%,var(--card-background-color,#fff))}.metric[data-tone] .metric-value{color:var(--sensor-accent)}.mini[data-tone]{background:color-mix(in srgb,var(--card-background-color,#fff) 88%,var(--sensor-accent))}.mini[data-tone] ha-icon{color:var(--sensor-accent)}
  ha-card[data-palette="rainbow"] [data-tone="queries_entity"]{--sensor-accent:#e84a72}ha-card[data-palette="rainbow"] [data-tone="blocked_entity"]{--sensor-accent:#f28c28}ha-card[data-palette="rainbow"] [data-tone="blocked_percentage_entity"]{--sensor-accent:#e0b422}ha-card[data-palette="rainbow"] [data-tone="domains_entity"]{--sensor-accent:#49a86c}ha-card[data-palette="rainbow"] [data-tone="unique_clients_entity"]{--sensor-accent:#13a6a6}ha-card[data-palette="rainbow"] [data-tone="seen_clients_entity"]{--sensor-accent:#3986d7}ha-card[data-palette="rainbow"] [data-tone="cached_entity"]{--sensor-accent:#685bd4}ha-card[data-palette="rainbow"] [data-tone="forwarded_entity"]{--sensor-accent:#a44fc2}ha-card[data-palette="rainbow"] [data-tone="query_rate_entity"]{--sensor-accent:#d34b9a}
  .panel{margin-top:15px;padding:14px;border:1px solid color-mix(in srgb,var(--accent) 18%,var(--divider-color));border-radius:18px;background:linear-gradient(125deg,color-mix(in srgb,var(--accent) 8%,var(--card-background-color,#fff)),color-mix(in srgb,var(--accent2) 4%,var(--card-background-color,#fff)) 62%,var(--card-background-color,#fff))}.panel-head{display:flex;align-items:center;justify-content:space-between;gap:10px}.panel-title{font-size:12px;font-weight:780}.instance-picker{box-sizing:border-box;width:100%;margin-top:12px;padding:9px 11px;border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:11px}.switch-row{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:12px}.switch-copy{display:flex;align-items:center;gap:9px;min-width:0}.switch-icon{display:grid;place-items:center;flex:none;width:32px;height:32px;border-radius:11px;background:color-mix(in srgb,var(--accent) 12%,var(--card-background-color,#fff));color:var(--accent)}.switch-name{overflow:hidden;font-size:12px;font-weight:720;text-overflow:ellipsis;white-space:nowrap}.toggle{display:flex;align-items:center;justify-content:center;gap:6px;min-width:84px;min-height:38px;padding:0 11px;border:0;border-radius:13px;background:linear-gradient(120deg,var(--accent),var(--accent2));box-shadow:0 5px 13px color-mix(in srgb,var(--accent) 20%,transparent);color:#fff;font:inherit;font-size:11px;font-weight:780;cursor:pointer;transition:filter .16s ease,transform .16s ease}.toggle:hover:not(:disabled){filter:brightness(1.07);transform:translateY(-1px)}.toggle:active:not(:disabled){transform:scale(.98)}.toggle:disabled{opacity:.52;cursor:wait}.toggle.off{border:1px solid var(--divider-color);background:var(--card-background-color,#fff);box-shadow:none;color:var(--primary-text-color)}.pause-row{display:flex;flex-wrap:wrap;gap:7px;margin-top:12px}.pause{min-height:32px;padding:0 10px;border:1px solid color-mix(in srgb,var(--accent) 30%,var(--divider-color));border-radius:11px;background:color-mix(in srgb,var(--accent) 7%,var(--card-background-color,#fff));color:var(--accent);font:inherit;font-size:10px;font-weight:750;cursor:pointer}.pause:disabled{opacity:.5;cursor:wait}.hint{margin-top:10px;color:var(--secondary-text-color);font-size:10px;line-height:1.4}.hint.error{color:var(--error-color,#c74343)}
  .groups{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:12px}.group{display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:0;padding:9px 10px;border:1px solid color-mix(in srgb,var(--divider-color) 68%,transparent);border-radius:13px;background:var(--card-background-color,#fff)}.group-name{overflow:hidden;font-size:10px;font-weight:700;text-overflow:ellipsis;white-space:nowrap}.group .toggle{min-width:64px;min-height:30px;padding:0 8px;font-size:10px}
  .fold{margin-top:12px;border-top:1px solid color-mix(in srgb,var(--divider-color) 65%,transparent)}.fold summary{padding:12px 2px 4px;font-size:11px;font-weight:760;cursor:pointer}.actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;padding-top:8px}.action{display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:0;min-height:38px;padding:7px 9px;border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:10px;font-weight:700;text-align:left;cursor:pointer}.action:disabled{opacity:.55;cursor:wait}.action-confirm{display:flex;gap:5px}.action-confirm button{border:0;border-radius:8px;padding:5px 7px;background:var(--accent);color:#fff;font:inherit;font-size:9px;font-weight:750;cursor:pointer}.action-confirm button:last-child{background:var(--secondary-background-color);color:var(--primary-text-color)}.versions{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px;padding-top:10px;border-top:1px solid color-mix(in srgb,var(--divider-color) 65%,transparent)}.version{padding:5px 8px;border-radius:9px;background:color-mix(in srgb,var(--accent) 8%,var(--card-background-color,#fff));color:var(--secondary-text-color);font-size:9px}.version strong{color:var(--accent)}
  @container pihole-card (max-width:480px){.shell{padding:15px}.identity{gap:9px}.icon-wrap{flex-basis:40px;width:40px;height:40px;border-radius:14px}.icon-wrap ha-icon{--mdc-icon-size:22px}.status{gap:5px;padding:6px 8px;font-size:10px}.metrics{gap:8px;margin-top:14px}.metric{padding:11px;border-radius:15px}.metric-value{font-size:clamp(18px,6cqi,23px)}.metrics-secondary{gap:6px}.mini{gap:6px;padding:8px}.panel{padding:12px}.groups{gap:6px}}
  @container pihole-card (max-width:360px){.shell{padding:12px}.header{gap:7px}.identity{gap:7px}.icon-wrap{flex-basis:36px;width:36px;height:36px}.title{font-size:15px}.status{padding:5px 6px;font-size:9px}.metric{padding:9px}.metric-label{font-size:9px}.metric-value{font-size:17px}.metrics-secondary{grid-template-columns:repeat(2,minmax(0,1fr))}.panel{padding:10px}.groups{grid-template-columns:minmax(0,1fr)}}
  @media(prefers-reduced-motion:reduce){*,*:before,*:after{transition:none!important;scroll-behavior:auto!important}}
`;

function escapeHtml(value) { return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]); }
function numeric(value) { if (value === null || value === undefined || value === "") return null; const n = Number(value); return Number.isFinite(n) ? n : null; }
function formatNumber(entity) {
  if (!entity || ["unknown", "unavailable"].includes(String(entity.state).toLowerCase())) return "—";
  const n = numeric(entity.state); if (n === null) return String(entity.state);
  const formatted = new Intl.NumberFormat(undefined, { maximumFractionDigits: 1 }).format(n);
  const unit = entity.attributes?.unit_of_measurement || "";
  return `${formatted}${unit === "%" ? "%" : unit ? ` ${unit}` : ""}`;
}

class PiHoleControlCard extends HTMLElement {
  static getStubConfig() { return { mode: "auto", palette: "aurora", pause_service_domain: "auto" }; }
  static getConfigForm() {
    const labels = { entity: "Pi-hole blocking switch", status_entity: "Service status", group_switches: "Group switches", maintenance_buttons: "Maintenance buttons", update_entities: "Version entities", queries_entity: "Total queries", blocked_entity: "Blocked queries", blocked_percentage_entity: "Blocked percentage", domains_entity: "Domains on blocklist", unique_clients_entity: "Unique clients", seen_clients_entity: "Seen clients", cached_entity: "Cached queries", forwarded_entity: "Forwarded queries", query_rate_entity: "Queries per minute", remaining_entity: "Time until blocking resumes", pause_service_domain: "Pause service domain" };
    const schema = [
      { name: "mode", selector: { select: { options: ["auto", "manual"], mode: "dropdown" } } },
      { name: "entity", selector: { entity: { domain: ["switch"] } } },
      { name: "instance", selector: { text: {} } },
      { name: "status_entity", selector: { entity: { domain: ["binary_sensor"] } } },
      { name: "title", selector: { text: {} } }, { name: "icon", selector: { icon: {} } },
      { name: "palette", selector: { select: { options: ["aurora", "ocean", "sunset", "lavender", "rainbow"], mode: "dropdown" } } },
      { name: "pause_service_domain", selector: { select: { options: ["auto", "pi_hole", "pi_hole_v6"], mode: "dropdown" } } },
      { name: "group_switches", selector: { entity: { domain: ["switch"], multiple: true } } },
      { name: "maintenance_buttons", selector: { entity: { domain: ["button"], multiple: true } } },
      { name: "update_entities", selector: { entity: { domain: ["update"], multiple: true } } },
      { name: "remaining_entity", selector: { entity: { domain: ["sensor"] } } },
    ];
    for (const [name] of SENSOR_FIELDS) schema.push({ name, selector: { entity: { domain: ["sensor"] } } });
    return { schema, computeLabel: (field) => labels[field.name] || field.name.replaceAll("_", " ") };
  }
  constructor() {
    super(); this.attachShadow({ mode: "open" }); this._config = {}; this._pending = new Set(); this._feedback = ""; this._error = false; this._confirmEntity = ""; this._registry = null; this._registryLoading = false; this._registryError = false; this._selectedInstance = "";
    this.shadowRoot.addEventListener("click", (event) => { const button = event.composedPath().find((node) => node?.tagName === "BUTTON" && node.dataset?.action); if (button) void this._action(button.dataset.action, button.dataset.entity || "", button.dataset.duration || ""); });
    this.shadowRoot.addEventListener("change", (event) => { if (event.target?.dataset?.instanceSelect) { this._selectedInstance = event.target.value; this._feedback = ""; this._render(); } });
  }
  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("Invalid configuration for the Pi-hole Control Card.");
    this._config = { ...config, palette: PALETTES.has(config.palette) ? config.palette : "aurora" };
    if (config.instance) this._selectedInstance = config.instance;
    this._render();
  }
  set hass(value) {
    this._hass = value;
    const auto = this._config.mode === "auto" || (!this._config.mode && !this._config.entity);
    if (auto && !this._registry && !this._registryLoading) this._loadRegistry(value);
    const ids = [this._config.entity, this._config.status_entity, this._config.remaining_entity, ...SENSOR_FIELDS.map(([key]) => this._config[key]), ...(Array.isArray(this._config.group_switches) ? this._config.group_switches : []), ...(Array.isArray(this._config.maintenance_buttons) ? this._config.maintenance_buttons : []), ...(Array.isArray(this._config.update_entities) ? this._config.update_entities : [])];
    const signature = JSON.stringify([ids.map((id) => id ? value?.states?.[id] : null), this._registry, this._selectedInstance]);
    if (signature !== this._signature) { this._signature = signature; this._render(); }
  }
  get hass() { return this._hass; }
  getCardSize() { return 5; }
  async _loadRegistry(hass) {
    if (!hass?.connection?.sendMessagePromise) { this._registryError = true; this._render(); return; }
    this._registryLoading = true; this._render();
    try {
      this._registry = await hass.connection.sendMessagePromise({ type: "config/entity_registry/list" });
      this._registryError = false;
    } catch (_) { this._registry = []; this._registryError = true; }
    finally { this._registryLoading = false; this._render(); }
  }
  _automaticConfig() {
    if (this._config.mode === "manual" || (this._config.mode !== "auto" && this._config.entity)) return { ...this._config };
    const instances = discoverPiHoleInstances(this._registry, this._hass?.states);
    const selected = instances.find((instance) => instance.id === this._selectedInstance) || instances[0];
    if (!selected) return null;
    this._selectedInstance = selected.id;
    return { ...selected.roles, ...this._config, entity: selected.roles.entity, status_entity: selected.roles.status_entity, title: this._config.title || selected.name, palette: this._config.palette };
  }
  _state(entityId) { return entityId ? this._hass?.states?.[entityId] : undefined; }
  _serviceDomain() {
    const configured = this._config.pause_service_domain; if (configured && configured !== "auto") return configured;
    const services = this._hass?.services || {}; if (services.pi_hole_v6?.disable) return "pi_hole_v6"; if (services.pi_hole?.disable) return "pi_hole"; return "";
  }
  async _action(action, entityId, duration) {
    if (!this._hass?.callService || this._pending.has(action + entityId)) return;
    const config = this._automaticConfig();
    if (action === "request-button") { this._confirmEntity = entityId; this._render(); return; }
    if (action === "cancel-button") { this._confirmEntity = ""; this._render(); return; }
    let domain, service, data;
    if (action === "toggle") { const state = this._state(entityId); if (!state || !["on", "off"].includes(state.state)) return; domain = "switch"; service = state.state === "on" ? "turn_off" : "turn_on"; data = { entity_id: entityId }; }
    else if (action === "pause") { domain = this._serviceDomain(); if (!domain) { this._feedback = "Pause service not found. Check the service domain setting."; this._error = true; this._render(); return; } service = "disable"; data = { entity_id: config?.entity, duration }; }
    else if (action === "confirm-button") { domain = "button"; service = "press"; data = { entity_id: entityId }; }
    else return;
    const key = action + entityId; this._pending.add(key); this._feedback = action === "pause" ? "Pausing ad-blocking…" : "Updating switch…"; this._error = false; this._render();
    try { await this._hass.callService(domain, service, data); this._feedback = action === "pause" ? `Ad-blocking paused for ${duration}.` : "Command sent."; }
    catch (error) { this._feedback = error?.message || "Home Assistant could not send the command."; this._error = true; }
    finally { this._pending.delete(key); if (action === "confirm-button") this._confirmEntity = ""; this._render(); }
  }
  _render() {
    if (!this._hass || !this.shadowRoot) return;
    const config = this._automaticConfig();
    const actionsOpen = this.shadowRoot.querySelector("details.fold")?.open || false;
    if (!config?.entity) {
      const message = this._registryLoading ? "Searching for Pi-hole integrations…" : this._registryError ? "Could not read Home Assistant's entity registry. Use an administrator account or configure the entities manually." : "No Pi-hole integration was found. Check that its entities are enabled, or switch to manual setup.";
      this.shadowRoot.innerHTML = `<style>${STYLE}</style><ha-card data-palette="${this._config.palette}"><div class="shell"><header class="header"><div class="identity"><div class="icon-wrap"><ha-icon icon="mdi:pi-hole"></ha-icon></div><div class="identity-copy"><div class="eyebrow">Home Assistant · Network</div><h2 class="title">${escapeHtml(this._config.title || "Pi-hole")}</h2></div></div></header><div class="hint ${this._registryError ? "error" : ""}" role="status">${escapeHtml(message)}</div></div></ha-card>`;
      return;
    }
    const power = this._state(config.entity), status = this._state(config.status_entity);
    const isRunning = status ? status.state === "on" : Boolean(power && !["unknown", "unavailable"].includes(power.state));
    const statusText = status ? (status.state === "on" ? "Running" : status.state === "off" ? "Stopped" : "Unavailable") : isRunning ? "Connected" : "Unavailable";
    const stats = SENSOR_FIELDS.filter(([key]) => config[key]).map(([key, label]) => ({ key, label, entity: this._state(config[key]) }));
    const mainKeys = new Set(["queries_entity", "blocked_entity", "blocked_percentage_entity", "domains_entity"]);
    const mainStats = stats.filter((item) => mainKeys.has(item.key)); const secondaryStats = stats.filter((item) => !mainKeys.has(item.key));
    const metricHtml = (item) => `<div class="metric" data-tone="${item.key}"><div class="metric-label">${escapeHtml(item.label)}</div><div class="metric-value">${escapeHtml(formatNumber(item.entity))}</div></div>`;
    const secondaryHtml = (item) => `<div class="mini" data-tone="${item.key}"><ha-icon icon="${item.label.toLowerCase().includes("client") ? "mdi:account-group-outline" : item.label.toLowerCase().includes("minute") ? "mdi:chart-line" : "mdi:dns-outline"}"></ha-icon><div class="mini-copy"><div class="mini-value">${escapeHtml(formatNumber(item.entity))}</div><div class="mini-label">${escapeHtml(item.label)}</div></div></div>`;
    const groupIds = Array.isArray(config.group_switches) ? config.group_switches : config.group_switches ? [config.group_switches] : [];
    const groups = groupIds.filter((id) => id && id !== config.entity).map((id) => { const entity = this._state(id), on = entity?.state === "on"; return `<div class="group"><span class="group-name">${escapeHtml(entity?.attributes?.friendly_name || id)}</span><button class="toggle ${on ? "" : "off"}" data-action="toggle" data-entity="${escapeHtml(id)}" ${!entity || this._pending.has("toggle" + id) ? "disabled" : ""}>${on ? "Enabled" : "Disabled"}</button></div>`; }).join("");
    const pauseButtons = this._serviceDomain() ? `<div class="pause-row"><button class="pause" data-action="pause" data-entity="${escapeHtml(config.entity)}" data-duration="00:01:00" ${power?.state !== "on" || this._pending.has("pause" + config.entity) ? "disabled" : ""}>Pause · 1 min</button><button class="pause" data-action="pause" data-entity="${escapeHtml(config.entity)}" data-duration="00:05:00" ${power?.state !== "on" || this._pending.has("pause" + config.entity) ? "disabled" : ""}>5 min</button><button class="pause" data-action="pause" data-entity="${escapeHtml(config.entity)}" data-duration="00:15:00" ${power?.state !== "on" || this._pending.has("pause" + config.entity) ? "disabled" : ""}>15 min</button></div>` : "";
    const actionIds = Array.isArray(config.maintenance_buttons) ? config.maintenance_buttons : config.maintenance_buttons ? [config.maintenance_buttons] : [];
    const actions = actionIds.filter(Boolean).map((id) => { const entity = this._state(id), name = entity?.attributes?.friendly_name || id; const confirmed = this._confirmEntity === id; return `<div class="action"><span>${escapeHtml(name)}</span>${confirmed ? `<span class="action-confirm"><button data-action="confirm-button" data-entity="${escapeHtml(id)}" ${this._pending.has("confirm-button" + id) ? "disabled" : ""}>Confirm</button><button data-action="cancel-button" data-entity="${escapeHtml(id)}">Cancel</button></span>` : `<button data-action="request-button" data-entity="${escapeHtml(id)}" ${!entity || this._pending.has("confirm-button" + id) ? "disabled" : ""}>Run</button>`}</div>`; }).join("");
    const updateIds = Array.isArray(config.update_entities) ? config.update_entities : config.update_entities ? [config.update_entities] : [];
    const versions = updateIds.filter(Boolean).map((id) => this._state(id)).filter(Boolean).map((entity) => `<span class="version">${escapeHtml(entity.attributes?.title || entity.attributes?.friendly_name || "Component")} <strong>${escapeHtml(entity.attributes?.installed_version || entity.state)}</strong>${entity.state === "on" ? " · Update available" : ""}</span>`).join("");
    const remaining = numeric(this._state(config.remaining_entity)?.state);
    const remainingText = remaining > 0 ? `<div class="hint">Ad-blocking resumes in ${escapeHtml(new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(Math.ceil(remaining / 60)))} min.</div>` : "";
    const instances = this._config.mode === "manual" ? [] : discoverPiHoleInstances(this._registry, this._hass?.states);
    const instancePicker = instances.length > 1 ? `<select class="instance-picker" data-instance-select aria-label="Pi-hole instance">${instances.map((instance) => `<option value="${escapeHtml(instance.id)}" ${instance.id === this._selectedInstance ? "selected" : ""}>${escapeHtml(instance.name)}</option>`).join("")}</select>` : "";
    this.shadowRoot.innerHTML = `<style>${STYLE}</style><ha-card data-palette="${config.palette}"><div class="shell"><header class="header"><div class="identity"><div class="icon-wrap"><ha-icon icon="${escapeHtml(config.icon || "mdi:pi-hole")}"></ha-icon></div><div class="identity-copy"><div class="eyebrow">Home Assistant · Network</div><h2 class="title">${escapeHtml(config.title || "Pi-hole")}</h2></div></div><div class="status ${isRunning ? "running" : statusText === "Stopped" ? "stopped" : ""}"><span class="status-dot"></span>${escapeHtml(statusText)}</div></header>${instancePicker}${mainStats.length ? `<section class="metrics">${mainStats.map(metricHtml).join("")}</section>` : ""}${secondaryStats.length ? `<section class="metrics-secondary">${secondaryStats.map(secondaryHtml).join("")}</section>` : ""}<section class="panel"><div class="panel-head"><span class="panel-title">Ad-blocking</span><span class="switch-name">${power?.state === "on" ? "Enabled" : power?.state === "off" ? "Disabled" : "Unavailable"}</span></div><div class="switch-row"><div class="switch-copy"><span class="switch-icon"><ha-icon icon="mdi:shield-check-outline"></ha-icon></span><span class="switch-name">${escapeHtml(power?.attributes?.friendly_name || "Pi-hole")}</span></div><button class="toggle ${power?.state === "off" ? "off" : ""}" data-action="toggle" data-entity="${escapeHtml(config.entity)}" ${!power || !["on", "off"].includes(power.state) || this._pending.has("toggle" + config.entity) ? "disabled" : ""}>${power?.state === "on" ? "Disable" : "Enable"}</button></div>${pauseButtons}${remainingText}${groups ? `<div class="groups">${groups}</div>` : ""}${actions ? `<details class="fold" ${actionsOpen ? "open" : ""}><summary>Maintenance actions</summary><div class="actions">${actions}</div></details>` : ""}${versions ? `<div class="versions">${versions}</div>` : ""}${this._feedback ? `<div class="hint ${this._error ? "error" : ""}" role="status">${escapeHtml(this._feedback)}</div>` : ""}</section></div></ha-card>`;
  }
}

if (!customElements.get(CARD_TYPE)) customElements.define(CARD_TYPE, PiHoleControlCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: CARD_TYPE, name: "Pi-hole Control Card", description: "A themed Pi-hole dashboard with DNS statistics, ad-blocking controls, and group switches." });
