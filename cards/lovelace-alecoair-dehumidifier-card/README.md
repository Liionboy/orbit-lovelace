# AlecoAir Dehumidifier Card

A responsive, theme-aware Home Assistant card for humidifier entities used as dehumidifiers, including the AlecoAir D16.

## Features

- On/off control with live entity-state feedback
- English power button with pending, success, and service-error feedback
- Current and target humidity display
- Humidity slider uses the entity's `min_humidity`, `max_humidity`, and optional `target_humidity_step`
- Mode selector appears only when the entity advertises the `MODES` feature and `available_modes`
- `aurora`, `ocean`, `sunset`, and `lavender` accent palettes
- Responsive layout and long-press More Info
- HACS compatible; no external runtime dependencies

## Install with HACS

1. In HACS, open **Frontend** → **Custom repositories**.
2. Add `Liionboy/lovelace-alecoair-dehumidifier-card` with category **Lovelace**.
3. Install **AlecoAir Dehumidifier Card**.
4. Add the card to a dashboard:

```yaml
type: custom:alecoair-dehumidifier-card
entity: humidifier.your_dehumidifier
title: Dehumidifier
palette: ocean
```

## Configuration

| Option | Required | Description |
| --- | --- | --- |
| `entity` | Yes | A Home Assistant `humidifier` entity |
| `title` | No | Display name; defaults to the entity's friendly name |
| `palette` | No | `aurora`, `ocean`, `sunset`, or `lavender` (default: `ocean`) |

The card uses the standard `humidifier.turn_on`, `humidifier.turn_off`, `humidifier.set_humidity`, and (when supported) `humidifier.set_mode` actions. It reads actual capabilities from the selected entity rather than assuming every humidifier supports the same features.

## License

MIT
