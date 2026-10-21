# Frigate Control Card

A responsive, theme-aware Home Assistant Lovelace card for Frigate camera entities, styled to match the Aurora/Ocean/Sunset/Lavender card collection.

## Features

- Camera snapshot preview using the selected Home Assistant camera entity
- Tap the preview to open Home Assistant's camera More Info dialog
- Camera entity state and optional motion status
- Optional Frigate object, person, and vehicle count sensors
- Aurora, Ocean, Sunset, and Lavender palettes
- Responsive layout with no external runtime dependencies
- Generic entity configuration; no camera names, URLs, or credentials are embedded

## Install with HACS

1. In HACS, open the three-dot menu and choose **Custom repositories**.
2. Add `Liionboy/lovelace-frigate-control-card` with category **Dashboard**.
3. Install **Frigate Control Card**.
4. Add the card and select your camera and any available Frigate entities in the visual editor.

Example YAML:

```yaml
type: custom:frigate-control-card
camera_entity: camera.driveway
title: Driveway
palette: aurora
motion_entity: binary_sensor.driveway_motion
objects_entity: sensor.driveway_all_objects
persons_entity: sensor.driveway_person
vehicles_entity: sensor.driveway_car
```

`camera_entity` is required. All other settings are optional. Add one card per camera. Sensor names vary with Frigate configuration and MQTT discovery; select only entities that exist in your Home Assistant instance. Values and units are displayed from each entity's current state. Without a motion/count sensor, that section is omitted.

The camera preview uses the `entity_picture` supplied by Home Assistant's camera entity. Tapping it opens the camera's Home Assistant More Info dialog, where available stream controls are handled by Home Assistant.

## Frigate integration prerequisites

The official Frigate Home Assistant integration documents camera entities for live streams, image entities for the latest detected object, sensors for Frigate performance/object counts, switches for detection/recording/snapshot controls, and binary sensors for motion by camera/zone/object. Many MQTT-discovered entities require MQTT to be configured in both Home Assistant and Frigate.

- [Frigate Home Assistant integration](https://docs.frigate.video/integrations/home-assistant/)
- [Home Assistant Picture Entity card](https://www.home-assistant.io/dashboards/picture-entity/)

## License

MIT
