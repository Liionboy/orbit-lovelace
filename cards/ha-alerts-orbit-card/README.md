# Alerts Orbit

A compact, read-only Home Assistant Dashboard card. Standalone JavaScript, no build, framework or runtime dependencies. Home Assistant **2026.6+**; version **1.0.0**.

## Install

After publication, add this repository URL as a HACS custom repository, category **Dashboard**. Alternatively copy `ha-alerts-orbit-card.js` into `config/www/` and add `/local/ha-alerts-orbit-card.js` as a JavaScript module Dashboard resource. Add **Alerts Orbit** in the card picker or use YAML. This local implementation has not been published or installed by its tests.

```yaml
type: custom:ha-alerts-orbit-card
# entities: [] is valid; nothing is selected automatically
entities:
  - binary_sensor.example_door
  - binary_sensor.example_smoke
palette: aurora
show_inactive: true
```

All settings are optional and available through the native visual editor:

- `title`: Alerts Orbit. Empty text is allowed.
- `entities`: multiple selected binary_sensor IDs; default `[]`, no discovery or fixed maximum. Duplicates are collapsed.
- `palette`: `aurora` (default), `ocean`, `sunset`, `lavender`. HA theme variables remain authoritative for background and text.
- `show_inactive`: true. False hides only inactive rows; active and unknown rows remain visible and summary counts always cover all selected entities.

## State model

Supported device classes and labels (on → off):

- `door`: Open → Closed
- `window`: Open → Closed
- `opening`: Open → Closed
- `garage_door`: Open → Closed
- `moisture`: Wet → Dry
- `smoke`: Smoke detected → Clear
- `gas`: Gas detected → Clear
- `carbon_monoxide`: Carbon monoxide detected → Clear
- `safety`: Unsafe → Safe
- `motion`: Motion detected → Clear
- `occupancy`: Occupied → Clear
- `tamper`: Tampering detected → Clear
- `problem`: Problem detected → OK
- `battery`: Low battery → Battery normal
- `cold`: Cold → Normal
- `heat`: Hot → Normal
- `vibration`: Vibration detected → Clear
- `sound`: Sound detected → Clear
- `glass_break`: Glass break detected → Clear
- `lock`: Unlocked → Locked
- `update`: Update available → Up to date

On means active for these explicit classes. Motion/occupancy/open doors are activity, not necessarily an emergency. Unsupported/unclassified sensors (including connectivity, presence and battery_charging) are marked unknown; connectivity inversion is not implemented. Active rows sort first, unknown second, inactive last; selection order is retained within groups.

Missing, unavailable, unknown, malformed or unsupported readings remain visible as distinct labels and count as unknown, never healthy/all-clear. An empty selection is a configuration hint, not all-clear. Labels use friendly_name or entity ID. Tap any row (or focus and Enter/Space) for More Info on that exact entity. No service calls, alarm controls, dismiss/mute, queries, external requests or arbitrary HTML. This is not a replacement for a safety/alarm system.

## Development

```sh
npm run check
npm test
# Supply your installed Playwright module and Chromium if not project-local:
PLAYWRIGHT_MODULE=/path/to/playwright/index.mjs CHROMIUM_EXECUTABLE=/path/to/chromium SCREENSHOT_DIR=/path/to/evidence npm run test:browser
```

Node tests use a vm DOM mock; Playwright uses synthetic states and **stubbed HA icons/components**, not a live HA instance. No runtime dependencies. CI runs syntax and Node tests on push/PR; no automatic release workflow. See RESEARCH.md for source contracts and TODO.md for native/live checks.

MIT license.
