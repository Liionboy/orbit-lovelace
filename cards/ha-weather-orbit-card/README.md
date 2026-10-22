# Weather Orbit Card

A compact, dependency-free Home Assistant Dashboard card with current conditions and live read-only forecasts. Four Orbit palettes: **aurora**, **ocean**, **sunset**, **lavender**. Inherits HA theme colors. No tracking, external images, build step or runtime dependencies.

## Installation

Requires Home Assistant **2026.6.0+**, based on the native getConfigForm API (see RESEARCH.md), not live certification. Add this repository URL to HACS → Custom repositories → Dashboard after publication, download, and reload resources. This is not a default HACS catalog listing.

Manual: copy ha-weather-orbit-card.js into config/www and add /local/ha-weather-orbit-card.js as a JavaScript module resource. With HACS the resource is /hacsfiles/ha-weather-orbit-card/ha-weather-orbit-card.js.

Add **Weather Orbit Card** in the picker, or use:


    type: custom:ha-weather-orbit-card
    entity: weather.example
    title: Weather
    palette: aurora
    show_time: true
    show_date: true
    time_zone: ""
    show_forecast: true
    forecast_type: daily
    forecast_count: 3

All nine fields are optional and exposed by the native visual editor. Defaults match this example except **entity defaults to empty**. No entities are automatically selected. The empty card explains how to configure it. Entity must be a weather entity. forecast_type accepts daily, hourly, twice_daily; forecast_count is an integer 1–7 (display limit, not a server-side query limit). Choose a type supported by the provider. Set show_forecast: false for current-only mode. Delete optional values to restore defaults.

## Clock and date (v1.1.0)

The clock and full calendar date are shown by default, even without weather data. No time/date sensor is required. They use the Home Assistant language and 12/24-hour preference. Time zone follows the HA profile preference (browser zone when set to local, otherwise HA configuration); optional `time_zone` overrides it with a valid IANA zone, such as `Europe/Bucharest`. Invalid HA locale/zone values safely fall back to English/browser zone. Forecast timestamps use the same resolved zone.

Set `show_time: false` and/or `show_date: false` to hide them. The mounted clock refreshes at each minute boundary, including midnight and DST changes, without a new weather state, forecast request or replacement of weather controls. The timer is cleaned up on removal, is not duplicated on reconnect, and stops when both fields are hidden. The time comes from the device clock, not a server time sensor.

Current temperature and wind retain the entity's units; humidity is percent. Missing values are omitted. Missing/unknown/unavailable entities never show stale readings or forecasts. Forecast rows tolerate missing low temperature, condition, precipitation and day/night indicators. Bad dates are omitted. Long labels wrap, and narrow cards use multiple forecast rows rather than horizontal scrolling.

The card uses weather/subscribe_forecast over the existing HA WebSocket connection, not a device command or legacy forecast attribute. Initial/update data and error/offline/unsupported/empty states are distinct from current weather. Subscriptions are cleaned up on removal, entity/type changes, capability loss, and reconnect; late responses are ignored. Permission/network failures expose a **Retry** button, with no repeated automatic request loop. Current conditions remain usable if only forecast fails. Tap current weather or press Enter/Space to open HA More Info. **Always read-only: no callService, arbitrary service configuration, routing or injected HTML.**

## Verification

Node.js 22+:

    npm run check
    npm test
    PLAYWRIGHT_MODULE=/path/to/playwright/index.mjs CHROMIUM_EXECUTABLE=/path/to/chromium SCREENSHOT_DIR=/path/to/evidence npm run test:browser

Browser module/executable paths are optional environment overrides, never machine-specific defaults. Browser tests use synthetic ha-card/ha-icon stubs and mocked subscribeMessage, not a live connector or native HA editor. No live HA/device validation is claimed. See TODO.md for manual checks. No automatic releases are configured.
