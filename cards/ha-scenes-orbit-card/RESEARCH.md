# API research

- [Scene services](https://github.com/home-assistant/core/blob/dev/homeassistant/components/scene/services.yaml): turn_on target domain scene. Scene state is not an on/off state: [scene docs](https://www.home-assistant.io/integrations/scene/).
- [Script docs](https://www.home-assistant.io/integrations/script/): entity on means running, off means idle. [Script services](https://github.com/home-assistant/core/blob/dev/homeassistant/components/script/services.yaml): generic script.turn_on target entity. This card intentionally does not pass script variables.
- [Custom card API](https://contributors.home-assistant.io/frontend/custom-ui/custom-card/) and [native form](https://contributors.home-assistant.io/frontend/custom-ui/card-editor/): static getConfigForm with entity selector domain scene/script, multiple true. HA2026.6 API-based minimum follows the same native-form contract as Welcome Orbit; no live minimum-version certification.
- HA More Info uses hass-more-info with detail entityId. All labels/attributes escaped before HTML interpolation. No external resources.

Reviewed 2026-10-21. Validation is synthetic; service requests are never sent to a real HA instance by tests.
