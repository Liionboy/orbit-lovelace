# Climate Control Card

A polished Home Assistant Lovelace card for a single `climate` entity. It presents current and target temperature clearly, keeps the thermostat compact, and reveals device-specific controls only when requested.

## Features

- Compact overview with current temperature, target temperature, HVAC activity, and power status.
- State-aware color accents: warm tones for heating, cool tones for cooling, and a calm gradient when off.
- Quick target-temperature decrement/increment using the entity's reported `target_temp_step` and limits.
- **Adjust controls** expands capability-aware HVAC mode and preset selectors; **Hide controls** returns to the compact view.
- Modes and presets are populated from `hvac_modes` and `preset_modes`; no entity-specific values are hard-coded.
- Shows `Heating` in orange/red only while Home Assistant reports active heating; `Idle` means heat mode may be selected but the thermostat is not currently heating. If `hvac_action` is unavailable, the card falls back to the selected mode.
- Press and hold an empty area of the card for the thermostat's Home Assistant More Info dialog; interactive controls are not affected.
- Responsive, theme-aware styling, accessible labels, and reduced-motion support.
- No external assets, libraries, analytics, credentials, or backend integration.

The card reads each entity's own supported mode and preset lists, temperature limits, units, and step size. Different climate entities may expose different options; unsupported controls are hidden.

## Install with HACS

1. In Home Assistant, open **HACS → ⋮ → Custom repositories**.
2. Add `https://github.com/Liionboy/lovelace-climate-control-card` with category **Dashboard**.
3. Install **Climate Control Card**, then refresh the browser.
4. Add the card from the dashboard card picker and select a climate entity.

This is a frontend Dashboard plugin, not a backend integration.

## Configuration

The visual editor is recommended. Minimal YAML:

```yaml
type: custom:climate-control-card
entity: climate.thermostat
title: Living room
```

`title` is optional. The card reads the selected entity's HVAC modes, presets, temperatures, limits, step, unit, and current HVAC action from Home Assistant.

## Manual resource install

Copy `dist/climate-control-card.js` to `/config/www/climate-control-card.js`, add `/local/climate-control-card.js` as a JavaScript module under **Settings → Dashboards → Resources**, refresh the browser, and use `type: custom:climate-control-card`.

## Development

Dependency-free ES module. Run `npm run check` to check JavaScript syntax.

## References

- [Home Assistant Climate integration and actions](https://www.home-assistant.io/integrations/climate/)
- [Home Assistant Climate entity developer documentation](https://developers.home-assistant.io/docs/core/entity/climate/)

## License

MIT. See [LICENSE](LICENSE).
