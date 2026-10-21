# NAS Orbit Card

Latest release: `v1.0.1`

A responsive Home Assistant Lovelace card for NAS status, storage, system telemetry, drive bays, and an optional Wake button. It brings the compact summary idea of the UI Lovelace Minimalist **NAS Summary Card** into the Orbit card visual style.

## Features

- Storage usage ring and capacity bar when used/total sensors are configured or discovered.
- CPU usage, CPU temperature, and memory metrics.
- Drive-bay health tiles, with temperatures when matching sensors are available.
- Optional online/offline status entity and Wake button.
- Responsive layout, Home Assistant theme colors, four accent palettes, and reduced-motion support.
- Works with different NAS brands and integrations; the card does not connect to a NAS directly.

Without a separate status entity, “Telemetry active” means at least one configured NAS sensor is available. It is not a network reachability check. A `button` entity is stateless: pressing Wake sends the configured Home Assistant action but does not prove that the NAS has started.

## HACS installation

This repository is a HACS Dashboard plugin.

1. In HACS, open **Frontend** and search for **NAS Orbit Card**.
2. Install the card and reload the browser.
3. Add the card from the dashboard card picker, or use the YAML below.

Until the repository is in the HACS default catalog, add `Liionboy/ha-nas-orbit-card` as a custom repository with category **Dashboard**.

## Basic configuration

The card tries to discover sensors with “NAS” in their entity ID or friendly name. Use the card editor to select entities explicitly when your naming differs:

```yaml
type: custom:ha-nas-orbit-card
title: NAS Orbit
palette: aurora # aurora, ocean, sunset, lavender
auto_discover: true
status_entity: ""
wake_button_entity: ""
cpu_usage_entity: ""
cpu_temperature_entity: ""
memory_entity: ""
storage_used_entity: ""
storage_total_entity: ""
disk_entities: []
```

All entity fields are optional. Set `status_entity` to a real status/reachability entity to enable explicit online/offline behavior. `wake_button_entity` accepts an existing Home Assistant `button` entity; pressing it calls `button.press` for that entity. The card never assumes that a button's last-press state means the NAS is online.

Example entity roles (replace these with entities from your own HA instance):

```yaml
type: custom:ha-nas-orbit-card
cpu_usage_entity: sensor.nas_cpu_usage
cpu_temperature_entity: sensor.nas_cpu_temperature
memory_entity: sensor.nas_memory_usage
storage_used_entity: sensor.nas_volume_used
storage_total_entity: sensor.nas_volume_total
disk_entities:
  - sensor.nas_disk_1_summary
  - sensor.nas_disk_2_summary
```

## Design and privacy

- Entity IDs, labels, values, and actions are read from Home Assistant at runtime; no personal entity IDs are embedded in the public card.
- Wake actions are sent through Home Assistant's `button.press` service, only for the configured button.
- The card does not use the old template's required UI Lovelace Minimalist, `button-card`, or ApexCharts dependencies.
- The interface follows the Home Assistant theme for backgrounds and text, with Orbit accent colors.

## Development

```bash
npm run check
```

## License

MIT
