# Action Button Card

A theme-aware Home Assistant Lovelace card for one-shot actions exposed by a
`button` or `input_button` entity. It follows the visual language of the other
Liionboy cards and adapts to the card's own width, including inside a
`horizontal-stack`.

## Features

- Calls the standard `button.press` or `input_button.press` service.
- Optional title, subtitle, icon, button label, and confirmation step.
- Optional status entity for showing the real device state separately from the
  action button. The card never treats a successful service call as proof that
  the target device is on.
- Short press sends the action; press and hold opens Home Assistant More Info.
- Responsive container-based styling, theme-aware colors, keyboard activation,
  and reduced-motion support.
- No entity IDs are built in, no backend, and no external libraries.

## Configuration

```yaml
type: custom:action-button-card
entity: button.pc_gaming
title: Gaming PC
subtitle: Wake the computer
icon: mdi:desktop-tower
button_label: Turn on
confirmation: true
status_entity: binary_sensor.pc_gaming_online
status_active_state: "on"
status_active_label: Online
status_inactive_label: Offline
```

`entity` must belong to the `button` or `input_button` domain. `status_entity`
is optional; configure it separately if you want to show whether the device
actually responded. `confirmation` defaults to `false`.

## Install with HACS

1. In Home Assistant, open **HACS → ⋮ → Custom repositories**.
2. Add `https://github.com/Liionboy/lovelace-action-button-card` with category
   **Dashboard**.
3. Install **Action Button Card**, then refresh the browser.
4. Add the card from the dashboard card picker or configure it in YAML.

## Show whether a PC is online

The `button.pc_gaming` entity confirms that Home Assistant sent a press; it
does not report whether Windows finished booting. To show reachability in the
card, add the official **Ping (ICMP)** integration:

1. Give the PC a DHCP reservation or static IP so its address stays fixed.
2. In **Settings → Devices & services → Add integration**, choose **Ping** and
   enter the PC's IP address. The binary sensor is enabled by default and is
   checked every 30 seconds.
3. If it always appears offline, allow inbound ICMP Echo Request (IPv4) in
   Windows Defender Firewall for the appropriate network profile.
4. Set `status_entity` to the binary sensor created by Ping. For example:

```yaml
type: custom:action-button-card
entity: button.pc_gaming
title: Gaming PC
subtitle: Start the computer
icon: mdi:desktop-tower
button_label: Wake PC
confirmation: true
status_entity: binary_sensor.gaming_pc
status_active_state: "on"
status_active_label: Online
status_inactive_label: Offline
```

Ping shows that the PC's network interface responds; it does not prove that
Windows is fully ready to play. Sleep settings, Wi-Fi power saving, or firewall
rules can affect the result. Use Ethernet and Wake-on-LAN where possible for
more reliable startup detection.

## Development

Dependency-free ES module. Run `npm run check` to check JavaScript syntax.
