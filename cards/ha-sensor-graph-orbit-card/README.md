# Sensor Graph Orbit Card

A compact, dependency-free, read-only Home Assistant Dashboard card. Select zero to six sensors; each has its own timestamp-based sparkline and independent vertical scale, so unlike units are never combined. Four Orbit palettes: aurora, ocean, sunset, lavender. Uses Home Assistant theme colors.

## Install

Requires Home Assistant 2026.6.0+ for the native visual configuration form (API compatibility basis, not live certification). Add this repository URL to HACS as a **Dashboard** custom repository, download, and reload your browser. HACS default-catalog inclusion is not implied.

Manual: copy ha-sensor-graph-orbit-card.js to config/www/, add a JavaScript module resource /local/ha-sensor-graph-orbit-card.js, and add type custom:ha-sensor-graph-orbit-card.

## Configuration

All fields are optional and exposed by the native visual editor. No entities selected by default.

~~~yaml
type: custom:ha-sensor-graph-orbit-card
title: Sensor history
entities:
  - sensor.room_temperature
  - sensor.room_humidity
hours_to_show: 24
palette: aurora
show_readout: true
# low_threshold: 18
# high_threshold: 26
low_color: blue
high_color: orange
~~~

- entities: zero to six distinct sensor IDs; missing entities show a hint and no More Info action.
- hours_to_show: 1–168 hours, default 24.
- palette: aurora (default), ocean, sunset, lavender.
- show_readout: current numeric readings, default true.
- low_threshold / high_threshold: optional finite numbers; low must be strictly below high. Inclusive comparisons against each **current** reading, in its own unit; configure separate cards if unlike units need different thresholds. Colors tint that series and reading, not individual historical segments.
- low_color / high_color: blue/cyan/green/amber/orange/red/purple; defaults blue/orange.

Tap a sensor name (or focus it and press Enter/Space) for More Info. There are no service calls, arbitrary actions, or HTML configuration.

## History and limitations

One filtered, batched GET every 60 seconds while connected; unrelated HA state updates never trigger requests. In-flight requests are deduplicated; Retry is rate limited to once per five seconds. Configuration/disconnection invalidates stale responses. The card requests only selected IDs for the configured window, without attributes, using minimal responses. History requires Recorder/history and user read permission. Failure or absent data is explicit; current states remain visible.

Maximum 240 rendered samples per series (sampled, not statistical aggregation). Unknown/unavailable/nonnumeric values break the line, including gaps in discarded samples. Irregular timestamps retain horizontal positions. No extension to now or interpolation across known missing states; one-point series is a dot. Silence from an unchanged sensor is not itself classified as missing data. Min/max labels describe **displayed samples**, not the full database. Historical unit changes cannot be inferred from the no-attributes response; units come from current entity metadata. There is no shared Y axis. Raw backend response size depends on Recorder frequency (REST has no sample-limit parameter).

## Development

~~~sh
npm run check
npm test
PLAYWRIGHT_MODULE=/path/to/playwright-core/index.mjs CHROMIUM_EXECUTABLE=/path/to/chrome SCREENSHOT_DIR=/path/to/evidence npm run test:browser
~~~

No install/build/runtime dependencies. Browser verification uses synthetic history and stubbed ha-card/ha-icon, not a live Home Assistant frontend or native editor. See RESEARCH.md and TODO.md. MIT license.
