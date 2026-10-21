# Luma Control Card

A polished, reusable Home Assistant Lovelace card for one `light` or `switch` entity. It adapts its controls to the capabilities reported by the selected light: brightness, color temperature, color, effects, and transition. A switch gets a clear, responsive power control.

No entity IDs are built in. Choose the entity in the visual editor or set it in YAML. The card calls only Home Assistant's standard `light.turn_on`, `light.turn_off`, `switch.turn_on`, and `switch.turn_off` actions after a user presses a control. It makes no network requests and needs no backend integration.

## Features

- One card for either a light or a switch, selected in the visual editor.
- Light power control and brightness slider (when supported).
- Color-temperature slider bounded by the entity's reported Kelvin range.
- Color picker for supported HS, RGB, RGBW, RGBWW, or XY color modes.
- Effects selector populated from that entity's `effect_list`.
- Short/long flash actions when the light reports flash support.
- Transition duration applied with control actions.
- Switch on/off control with current state and friendly name.
- Light controls stay collapsed while on until **Adjust controls** is selected; **Hide controls** returns to the compact layout. When off, only the status and power row remain.
- Switches stay compact in both states, showing the state and power control without an unnecessary detail panel.
- Controls are capability-driven; unsupported or unavailable attributes are not guessed.
- Responsive, theme-aware design; no external assets, libraries, analytics, or credentials.

## Install with HACS

1. In Home Assistant, open **HACS → ⋮ → Custom repositories**.
2. Add `https://github.com/Liionboy/lovelace-luma-control-card` with category **Dashboard**.
3. Install **Luma Control Card**, then refresh the browser.
4. Add **Luma Control Card** from the dashboard card picker and choose a light or switch.

This is a HACS Dashboard plugin, not a backend integration. The visual editor uses Home Assistant's built-in card config form API (Home Assistant 2026.6 or newer).

## Configuration

The card editor is recommended. It lets you select an entity and set the title and
transition without editing YAML. Minimal YAML example:

```yaml
type: custom:luma-control-card
entity: light.my_living_room
title: Living room
transition: 0.4
```

For a switch, select any switch entity instead:

```yaml
type: custom:luma-control-card
entity: switch.my_fan
title: Desk fan
```

Replace sample IDs with entities from your own Home Assistant. The card does not assume every light supports the same controls. It reads `supported_color_modes`, color temperature limits, brightness, and `effect_list` from the selected entity's attributes. If an integration does not report a capability, its control is omitted.

`transition` is optional and defaults to 0.3 seconds. Flash is shown only when the light advertises the Home Assistant flash feature. Some devices may ignore transitions or other actions they do not support.

## Manual resource install

Copy `dist/luma-control-card.js` to `/config/www/luma-control-card.js`, add `/local/luma-control-card.js` as a JavaScript module under **Settings → Dashboards → Resources**, refresh the browser, and use `type: custom:luma-control-card`.

## Development

Dependency-free ES module. Run `npm run check` to check JavaScript syntax.

## References

- [Home Assistant Light integration: actions, states, and attributes](https://www.home-assistant.io/integrations/light)
- [Home Assistant Light entity developer documentation](https://developers.home-assistant.io/docs/core/entity/light)

## License

MIT. See [LICENSE](LICENSE).
