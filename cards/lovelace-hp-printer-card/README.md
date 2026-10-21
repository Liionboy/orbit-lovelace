# HP Printer Card

A polished Home Assistant Lovelace card for monitoring an HP printer: connection status, ink or toner supplies, low-supply warnings, and page counters. It reads Home Assistant entity state only; it does not connect to the printer, require credentials, or call printer-control services.

Works with the community **HP Printer** integration and can also use compatible sensors from Home Assistant's **IPP** integration. Optional entities are selected explicitly, so it works across different printer models and entity naming schemes.

## Features

- Responsive layout with native Home Assistant colors and light/dark theme support.
- Connection badge with clear unavailable and attention states.
- Ink/toner level bars with cartridge-aware colors and low-supply alerts.
- Separate print, color, black-and-white, scan, and jam counters when exposed by the integration.
- Visual card editor for selecting entities; no hard-coded personal entity IDs.
- Graceful handling of missing/unknown sensors and reduced-motion preference.
- No frontend dependencies, external requests, analytics, or credentials.

## Install with HACS

1. In Home Assistant, open **HACS → ⋮ → Custom repositories**.
2. Add `https://github.com/Liionboy/lovelace-hp-printer-card` with category **Dashboard**.
3. Install **HP Printer Card** from HACS and reload the browser.
4. Add a card to a dashboard and select **HP Printer Card**.

HACS downloads `dist/hp-printer-card.js`. The repository is a Dashboard plugin (Lovelace card), not a Home Assistant backend integration.

## Configure

Use the visual editor to select the printer status sensor, one or more ink/toner sensors, and any available usage counters. Or configure it directly:

```yaml
type: custom:hp-printer-card
title: Office Printer
status_entity: sensor.your_printer_status
ink_entities:
  - sensor.your_printer_black_cartridge_level
  - sensor.your_printer_color_cartridge_level
total_pages_entity: sensor.your_printer_total_pages
color_pages_entity: sensor.your_printer_color_pages
bw_pages_entity: sensor.your_printer_black_and_white_pages
scans_entity: sensor.your_printer_scanned_pages
jams_entity: sensor.your_printer_jams
low_ink_threshold: 15
```

Replace the example IDs with entities from your installation. Only `type` is required; the remaining entities are optional. The card displays a useful empty state for unconfigured sections. `low_ink_threshold` defaults to 15 percent.

HP printers expose different entities by model. A DeskJet with a tri-color cartridge has **two** supply sensors: black and one combined Cyan/Magenta/Yellow (CMY) cartridge; the card renders CMY as one multicolor supply bar rather than inventing separate cyan, magenta, and yellow levels. Status may be an enum-valued sensor (for example, ready or power-save), not a binary sensor. Page totals, color/monochrome counts, scan totals, and jams may each be separate sensors. The card's visual editor lets you select the entities actually present under **Settings → Devices & services → Entities**.

## Manual resource install

Copy `dist/hp-printer-card.js` to `/config/www/hp-printer-card.js`, then add this resource under **Settings → Dashboards → Resources**:

```text
/local/hp-printer-card.js
```

Set its resource type to **JavaScript module**, refresh the browser, and add the card using `type: custom:hp-printer-card`.

## Development

The distributable is a standalone ES module with no build step:

```sh
npm run check
```

## License

MIT. See [LICENSE](LICENSE).
