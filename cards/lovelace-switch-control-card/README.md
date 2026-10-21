# Switch Control Card

A responsive, theme-aware Home Assistant Lovelace card for one configurable `switch` entity.

## Features

- Shows the switch's actual `on`, `off`, or unavailable state
- Sends `switch.turn_on` or `switch.turn_off` based on the last reported entity state
- English power button with pending, success, and service-error feedback
- Optional title and icon overrides
- Optional live power, energy, and voltage readings from sensor entities
- `aurora`, `ocean`, `sunset`, and `lavender` accent palettes
- Responsive layout and long-press More Info
- HACS compatible; no external runtime dependencies

## Install with HACS

1. In HACS, open **Frontend** → **Custom repositories**.
2. Add `Liionboy/lovelace-switch-control-card` with category **Lovelace**.
3. Install **Switch Control Card**.
4. Add the card to a dashboard:

```yaml
type: custom:switch-control-card
entity: switch.your_switch
title: Device
icon: mdi:power
palette: aurora
# Optional; select these in the card editor when the switch exposes them
power_entity: sensor.your_switch_power
energy_entity: sensor.your_switch_energy
voltage_entity: sensor.your_switch_voltage
```

Power, energy, and voltage readings are optional. In the card editor, select the matching Home Assistant sensor entities; each reading appears only when configured. Units are taken from each sensor's `unit_of_measurement` (commonly W, kWh, and V). Switches without monitoring sensors keep the existing compact layout.

## Configuration

| Option | Required | Description |
| --- | --- | --- |
| `entity` | Yes | A Home Assistant `switch` entity |
| `title` | No | Display name; defaults to the entity's friendly name |
| `icon` | No | Optional Material Design Icon override |
| `power_entity` | No | Sensor for instantaneous power (commonly W) |
| `energy_entity` | No | Sensor for cumulative energy (commonly kWh) |
| `voltage_entity` | No | Sensor for voltage (commonly V) |
| `palette` | No | `aurora`, `ocean`, `sunset`, or `lavender` (default: `aurora`) |

Switches are stateful entities, so the card reflects the entity's reported state; it does not infer an on/off state from an action timestamp.

## License

MIT
