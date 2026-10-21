# Server Orbit Card

A configurable Home Assistant Lovelace card for monitoring a host or server. Inspired by the compact, power-aware summary of UI Lovelace Minimalist's NAS summary template, styled in the Orbit visual language. Configure a power/status entity and up to four sensors with your own labels, icons, colors, and optional gauge limits.

## Features

- Explicitly configurable power switch or status entity; details collapse when the host is off.
- Up to four configurable sensor tiles, each with a custom label, icon, accent, and optional maximum for a gauge ring.
- Optional power control for `switch` entities. Other status entities are display-only.
- Responsive Orbit styling, HA theme colors, four accent palettes, and reduced-motion support.
- No auto-discovery and no dependency on UI Lovelace Minimalist, `button-card`, or ApexCharts.

## HACS installation

Install **Server Orbit Card** from HACS Frontend, then reload the browser. Until it is in the default catalog, add `Liionboy/ha-server-orbit-card` as a custom repository with category **Dashboard**.

## Configuration

```yaml
type: custom:ha-server-orbit-card
title: Home Assistant Server
subtitle: SYSTEM MONITOR
palette: aurora # aurora, ocean, sunset, lavender
power_entity: switch.server_power
power_control: true
metrics:
  - entity: sensor.memory_use_percent
    name: Memory Use
    icon: mdi:memory
    color: blue
    max_value: 100
  - entity: sensor.cpu_temperature
    name: CPU Temp
    icon: mdi:thermometer
    color: red
    max_value: 105
  - entity: sensor.processor_use
    name: CPU
    icon: mdi:cpu-64-bit
    color: green
    max_value: 100
  - entity: sensor.server_power
    name: Server Power
    icon: mdi:lightning-bolt
    color: orange
```

`power_entity` accepts a `switch`, `binary_sensor`, `device_tracker`, or `sensor`. A switch can be toggled only when `power_control: true`; it must represent a safe control such as a smart outlet. The card collapses metrics only when a switch is `off`, binary sensor is `off`, or tracker is `not_home`. Unknown/unavailable status stays distinct and does not issue a power command. Use `power_control: false` for a read-only card.

Each metric's `entity`, `name`, `icon`, and `color` are optional. Configure metric entries in YAML; the card editor exposes the host and power options. `max_value` enables a gauge ring and should be chosen to match the sensor's scale (e.g. 100% or 105°C). Leave it out for unbounded readings such as watts. Sensor units are read from Home Assistant.

## Development

```bash
npm run check
```

## License

MIT
