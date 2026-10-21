# Pi-hole Control Card

A responsive Home Assistant Lovelace card for Pi-hole v6, styled to match the Aurora/Ocean/Sunset/Lavender card collection, with an optional per-sensor Rainbow palette.

## Features

- Four configurable headline metrics and optional DNS/client statistics
- Pi-hole service status and ad-blocking switch
- Temporary ad-blocking pause actions (1, 5, and 15 minutes)
- Optional group switches
- Optional maintenance buttons with an in-card confirmation step
- Optional installed-version and update-available badges
- Responsive, theme-aware design
- Optional Rainbow palette with a distinct color for each statistic/sensor
- Automatically discovers enabled entities from the `pi_hole` and `pi_hole_v6` integrations
- Automatically groups statistics, blocking/group switches, maintenance buttons, and version entities by integration instance
- Shows an instance picker when multiple Pi-hole integrations are configured
- Keeps manual entity configuration available for custom or unsupported setups

## Install with HACS

1. In HACS, open the three-dot menu and choose **Custom repositories**.
2. Add `Liionboy/lovelace-pihole-control-card` with type **Dashboard**.
3. Install **Pi-hole Control Card**.
4. Add the card. In automatic mode it discovers the Pi-hole entities; no entity IDs need to be selected.

```yaml
type: custom:pihole-control-card
mode: auto
palette: aurora
pause_service_domain: auto
```

Automatic discovery reads Home Assistant's entity registry and groups enabled `pi_hole` / `pi_hole_v6` entities by config entry. When multiple instances are found, choose one from the selector on the card. Registry access requires an administrator account. To use custom entity IDs instead, set `mode: manual` and configure `entity` plus any optional entity fields below. Existing configurations with `entity:` and no `mode:` continue to use manual mode.

Optional sensors: `unique_clients_entity`, `seen_clients_entity`, `cached_entity`, `forwarded_entity`, `query_rate_entity`, and `remaining_entity` (seconds until blocking resumes). `group_switches`, `maintenance_buttons`, and `update_entities` each accept a list of matching entity IDs. Maintenance actions ask for an in-card confirmation before calling `button.press`.

`pause_service_domain: auto` detects `pi_hole_v6.disable` or `pi_hole.disable` in Home Assistant's available services. The pause controls use the selected Pi-hole switch and Home Assistant's native temporary-disable action.

## Configuration

| Option | Required | Description |
| --- | --- | --- |
| `mode` | No | `auto` (default for new cards) or `manual` |
| `instance` | No | Optional config-entry ID to preselect an automatically detected instance |
| `entity` | Manual | Pi-hole ad-blocking switch |
| `status_entity` | No | Binary sensor indicating whether Pi-hole is running |
| `queries_entity` | No | Total DNS queries |
| `blocked_entity` | No | Blocked DNS queries |
| `blocked_percentage_entity` | No | Blocked query percentage |
| `domains_entity` | No | Number of domains on the blocklist |
| `group_switches` | No | List of Pi-hole group switches |
| `maintenance_buttons` | No | List of Pi-hole action buttons; each action requires confirmation |
| `update_entities` | No | List of update entities for installed versions and update status |
| `remaining_entity` | No | Remaining pause duration in seconds |
| `palette` | No | `aurora`, `ocean`, `sunset`, `lavender`, or `rainbow` (distinct color per sensor) |
