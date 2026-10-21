# Contract research

Official sources inspected before implementation on 2026-10-21; dev sources can evolve.

- [Fan constants](https://github.com/home-assistant/core/blob/dev/homeassistant/components/fan/const.py): SET_SPEED=1, OSCILLATE=2, DIRECTION=4, PRESET_MODE=8, TURN_OFF=16, TURN_ON=32. Power is never inferred from another capability.
- [Service registration](https://github.com/home-assistant/core/blob/dev/homeassistant/components/fan/services.py) and [descriptions](https://github.com/home-assistant/core/blob/dev/homeassistant/components/fan/services.yaml): turn_on/off require their respective flags; set_percentage requires integer percentage 0–100, set_preset_mode takes preset_mode, oscillate takes boolean oscillating, set_direction takes direction. Only these six services and explicit entity targets are used.
- [Entity source](https://github.com/home-assistant/core/blob/dev/homeassistant/components/fan/entity.py): Python current_direction is exposed as frontend **direction**, values forward/reverse. percentage_step is 100 / speed_count and may be fractional. Missing/invalid steps default to 1 here; requests clamp to 0–100, snap nearest step from zero, then round to an integer for the service validator. Zero speed may stop a fan; nonzero speed may start it.
- [Native editor](https://contributors.home-assistant.io/frontend/custom-ui/card-editor/) and [frontend types 20260527.4](https://github.com/home-assistant/frontend/blob/20260527.4/src/panels/lovelace/types.ts): static getConfigForm returns schema/computeLabel/computeHelper. [Core 2026.6.0 manifest](https://github.com/home-assistant/core/blob/2026.6.0/homeassistant/components/frontend/manifest.json) pins that frontend, which contains LovelaceConfigForm/getConfigForm. Minimum is API-based, not live-certified.
- [Custom card API](https://contributors.home-assistant.io/frontend/custom-ui/custom-card/) and [hass reference](https://contributors.home-assistant.io/frontend/reference/hass-object/): setConfig, hass, size hints, customCards and states/services/callService. More Info is hass-more-info with detail { entityId }, bubbles/composed.
- [HACS plugin packaging](https://www.hacs.xyz/docs/publish/plugin/): root asset named after repository and root hacs.json.

No live HA/device was queried or operated; manual entity selection needs no registry.
