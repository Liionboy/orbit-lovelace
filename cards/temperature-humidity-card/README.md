# Temperature & Humidity Card

A decorative, read-only Home Assistant Lovelace card for indoor temperature and humidity sensors. Warm coral and amber accents distinguish temperature; teal and blue accents highlight humidity, including a circular humidity gauge.

## Features

- Large, easy-to-scan temperature and humidity readings in separate colorful panels.
- Temperature gradient bar with explicit 0–40 °C / 32–104 °F reference scale.
- Circular humidity gauge with a percentage ring.
- Configurable temperature sensor, humidity sensor, and card title.
- Uses each sensor's live state and unit; unavailable values are shown gracefully.
- Responsive, theme-aware surface, accessible labels, and reduced-motion support.
- Read-only: it does not call Home Assistant services or change devices.
- Press and hold either sensor panel to open that sensor's Home Assistant More Info dialog.
- No external assets, libraries, analytics, credentials, or backend integration.

## Install with HACS

1. In Home Assistant, open **HACS → ⋮ → Custom repositories**.
2. Add `https://github.com/Liionboy/temperature-humidity-card` with category **Dashboard**.
3. Install **Temperature & Humidity Card**, then refresh the browser.
4. Add the card from the dashboard card picker and choose the temperature and humidity sensors.

This is a frontend Dashboard plugin, not a backend integration.

## Configuration

The visual editor is recommended. Select any numeric temperature and humidity sensors in the entity selectors. Example YAML:

```yaml
type: custom:temperature-humidity-card
temperature_entity: sensor.room_temperature
humidity_entity: sensor.room_humidity
title: Indoor Climate
```

`humidity_entity` and `title` are optional. Units are read from the selected entities. The card does not assume particular sensor names or areas.

Existing dashboards using `type: custom:living-temperature-card` remain supported as a compatibility alias.

## Manual resource install

Copy `dist/temperature-humidity-card.js` to `/config/www/temperature-humidity-card.js`, add `/local/temperature-humidity-card.js` as a JavaScript module under **Settings → Dashboards → Resources**, refresh the browser, and use `type: custom:temperature-humidity-card`.

## Development

Dependency-free ES module. Run `npm run check` to check JavaScript syntax.

## License

MIT. See [LICENSE](LICENSE).
