# Weather Orbit Card

A compact, dependency-free Home Assistant Dashboard card with current conditions and live read-only forecasts. Four Orbit palettes: **aurora**, **ocean**, **sunset**, **lavender**. Inherits HA theme colors. No tracking, external images, build step or runtime dependencies.

## Installation

Requires Home Assistant **2026.6.0+**, based on the native getConfigForm API (see RESEARCH.md), not live certification. Add this repository URL to HACS → Custom repositories → Dashboard after publication, download, and reload resources. This is not a default HACS catalog listing.

Manual: copy ha-weather-orbit-card.js into config/www and add /local/ha-weather-orbit-card.js as a JavaScript module resource. With HACS the resource is /hacsfiles/ha-weather-orbit-card/ha-weather-orbit-card.js.

Add **Weather Orbit Card** in the picker, or use:


    type: custom:ha-weather-orbit-card
    entity: weather.example
    outdoor_temperature_entity: sensor.outdoor_temperature
    title: Weather
    palette: aurora
    show_time: true
    show_date: true
    time_zone: ""
    show_forecast: true
    forecast_type: daily
    forecast_layout: tiles
    forecast_count: 3

All configuration fields are optional and exposed by the native visual editor. Defaults match this example except **entity and outdoor_temperature_entity default to empty**. No entities are automatically selected. The empty card explains how to configure it. Entity must be a weather entity. forecast_type accepts daily, hourly, twice_daily; forecast_count is an integer 1–7 (display limit, not a server-side query limit). Choose a type supported by the provider. Set show_forecast: false for current-only mode. Delete optional values to restore defaults.

## Daily forecast layout (v1.3.0)

In the visual editor choose **Daily forecast layout**:

- **tiles** — existing forecast cards (default, preserving older configurations).
- **bars** — one row per day with weekday, condition icon, explicit Min/Max values and a horizontal temperature interval. On narrow cards the row stacks; below220px the bar takes its own full-width line.

```yaml
forecast_type: daily
forecast_layout: bars
forecast_count: 5
```

The reported daily minimum is `templow` and maximum is `temperature`, in the weather provider’s temperature unit, independent of the separate outdoor sensor. Bars share a common scale from the lowest minimum to highest maximum among **complete, valid displayed daily ranges**; the track widths are identical across rows. Changing the number of displayed days can change this scale. Equal minimum/maximum is a point marker. Colors are decorative; read the actual numeric labels for temperatures.

**Today’s current-temperature dot (v1.4.0):** a contrasting circular dot automatically marks the selected weather entity’s current `attributes.temperature` on today’s bar. It uses the same provider unit (°C/°F/K), never the optional outdoor thermometer. The full date is matched in the card’s resolved time zone, not simply the first row. There is no dot when today is absent, its min/max is missing/reversed, or the current reading/unit is invalid or unavailable. The common scale expands to include a valid current temperature outside the forecast range without changing the reported Min/Max labels. A range tooltip/accessibility label identifies the current value. Temperature updates move the dot using existing HA state, without extra requests. At local midnight the dot moves to the matching day (or disappears) even with the clock/date hidden; weather buttons are retained.

Missing/nonnumeric minimum or maximum shows **—** and an empty neutral track; it is never estimated from another day/current weather/outdoor sensor. Reversed ranges also leave the track empty without reordering the reported labels. Empty/offline/unsupported forecast states keep their existing messages. Dates and values follow HA language/time zone; the full forecast date is available in the weekday tooltip. Hourly and twice-daily forecasts keep tiles even if bars is selected.

Changing only the layout or count reuses the existing forecast subscription; no extra weather request or service is added. Clock/date, measured outdoor sensor and native More Info remain unchanged. If using **Orbit Lovelace**, update that suite and fully reload instead of adding standalone Weather alongside it.

## Measured outdoor temperature (v1.2.0)

Select **Outdoor temperature sensor (optional)** in the editor, or set `outdoor_temperature_entity: sensor.outdoor_temperature` to your own sensor ID. Nothing is automatically selected. Its measured value appears in a distinct **Outdoor sensor** panel; the original weather temperature is labelled **Weather provider**. Forecasts still come only from the weather entity. This is not an apparent/feels-like calculation and does not replace the provider temperature.

The sensor uses its numeric state and own `unit_of_measurement` (°C, °F or K), without unit conversion or forcing provider rounding. Zero/negative values and decimal precision are retained with localized formatting. Missing/unknown/unavailable/nonnumeric data or absent/incompatible units show **Unavailable**, never the provider value or a stale measurement. If no sensor is selected, the panel and extra provider label are absent. A sensor-only card (no weather entity) is also supported.

Tap the panel or use Enter/Space to open More Info for exactly the configured sensor. Missing entities disable that action; existing unavailable sensors still permit inspection. Sensor updates use existing HA state, without new subscriptions/queries or service calls.

## Clock and date (v1.1.0)

The clock and full calendar date are shown by default, even without weather data. No time/date sensor is required. They use the Home Assistant language and 12/24-hour preference. Time zone follows the HA profile preference (browser zone when set to local, otherwise HA configuration); optional `time_zone` overrides it with a valid IANA zone, such as `Europe/Bucharest`. Invalid HA locale/zone values safely fall back to English/browser zone. Forecast timestamps use the same resolved zone.

Set `show_time: false` and/or `show_date: false` to hide them. The mounted clock refreshes at each minute boundary, including midnight and DST changes, without a new weather state, forecast request or replacement of weather controls. The timer is cleaned up on removal, is not duplicated on reconnect, and stops when both fields are hidden **unless daily bars need today-marker calendar updates**. The time comes from the device clock, not a server time sensor.

Current temperature and wind retain the entity's units; humidity is percent. Missing values are omitted. Missing/unknown/unavailable entities never show stale readings or forecasts. Forecast rows tolerate missing low temperature, condition, precipitation and day/night indicators. Bad dates are omitted. Long labels wrap, and narrow cards use multiple forecast rows rather than horizontal scrolling.

The card uses weather/subscribe_forecast over the existing HA WebSocket connection, not a device command or legacy forecast attribute. Initial/update data and error/offline/unsupported/empty states are distinct from current weather. Subscriptions are cleaned up on removal, entity/type changes, capability loss, and reconnect; late responses are ignored. Permission/network failures expose a **Retry** button, with no repeated automatic request loop. Current conditions remain usable if only forecast fails. Tap current weather or press Enter/Space to open HA More Info. **Always read-only: no callService, arbitrary service configuration, routing or injected HTML.**

## Verification

Node.js 22+:

    npm run check
    npm test
    PLAYWRIGHT_MODULE=/path/to/playwright/index.mjs CHROMIUM_EXECUTABLE=/path/to/chromium SCREENSHOT_DIR=/path/to/evidence npm run test:browser

Browser module/executable paths are optional environment overrides, never machine-specific defaults. Browser tests use synthetic ha-card/ha-icon stubs and mocked subscribeMessage, not a live connector or native HA editor. No live HA/device validation is claimed. See TODO.md for manual checks. No automatic releases are configured.
