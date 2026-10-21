# API research — 2026-10-21

Official contracts inspected before implementation:

- [REST history](https://developers.home-assistant.io/docs/api/rest/): GET /api/history/period/<ISO>, comma-separated filter_entity_id, end_time, presence flags minimal_response/no_attributes, significant_changes_only=0; returns array of per-entity state arrays. First full state identifies its entity; no ordering assumption across series.
- [Core HistoryPeriodView](https://github.com/home-assistant/core/blob/dev/homeassistant/components/history/__init__.py): selected IDs filtered by read permission; flags are presence-based; empty results are valid, not proof of a particular failure cause.
- [hass.callApi](https://contributors.home-assistant.io/frontend/reference/hass-object/#callapi): authenticated REST calls take method and path under /api/. This card uses only GET, never callService.
- [Frontend history types](https://github.com/home-assistant/frontend/blob/dev/src/data/history.ts): compressed states use s/lu and optional lc, epoch seconds; full/minimal REST states use state/last_changed (ISO). Parser accepts both, but expects a first entity_id for REST grouping. It does not use WebSocket subscription shapes as REST fixtures.
- [Card form](https://contributors.home-assistant.io/frontend/custom-ui/card-editor/): static getConfigForm returns schema/computeLabel/computeHelper/assertConfig; optional selector fields/defaults. [20260527.0 types](https://github.com/home-assistant/frontend/blob/20260527.0/src/panels/lovelace/types.ts) include getConfigForm; [Core2026.6.0 manifest](https://github.com/home-assistant/core/blob/2026.6.0/homeassistant/components/frontend/manifest.json) pins frontend20260527.4. Declared HA2026.6.0 minimum therefore contains the API; not a claim of first-ever introduction.
- [Custom cards](https://contributors.home-assistant.io/frontend/custom-ui/custom-card/): hass setter, setConfig, getCardSize, getGridOptions. More Info uses hass-more-info, bubbles/composes, detail {entityId}; action restricted to configured existing sensors.
- [HACS plugins](https://www.hacs.xyz/docs/publish/plugin/): root JS matches repository name; root hacs.json; no build or auto-release workflow.

Safety: strings escaped in text and attributes; colors/palettes allowlisted; SVG paths and points derive solely from finite numeric values. Current state/metadata changes rerender, unrelated state changes do not. Each series uses an independent scale. No live HA calls in development.
