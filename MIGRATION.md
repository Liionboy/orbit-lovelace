# Migrating from standalone cards

## Back up first

Save the current dashboard YAML, Dashboard Resources list and the individual versions you have installed. Keep the original repositories available for rollback. This suite does not automatically edit resources, dashboards, entities or HACS installations.

## Switch the resource, not the card configuration

1. Identify the individual packages listed in [CATALOG.md](CATALOG.md) that you currently use.
2. Remove/disable **only their old JavaScript resource entries**, including manual /local copies and duplicate /hacsfiles entries. Do not remove unrelated resources (for example button-card, Mushroom or other suites).
3. Install Orbit Lovelace from its HACS Dashboard custom repository. Ensure exactly one suite JavaScript module resource is registered: **/hacsfiles/orbit-lovelace/orbit-lovelace.js**.
4. After saving the backup and resource switch, uninstall the replaced standalone downloads from HACS if you no longer want their separate update entries. HACS may also remove their managed resource entries: check Resources again. Dashboard card YAML must remain untouched.
5. Fully reload each frontend/browser/Companion app. Merely refreshing a card does not clear an already registered custom element. If a type still resolves to an older copy, close/reopen or clear frontend cache and check the resource URLs.
6. Check the existing dashboard and configuration editor for each card you use. Test actual device controls only with deliberate safe actions, not by bulk automation.

**Existing Lovelace types, entity IDs, options and dashboard card order stay the same.** Included versions are listed in the catalog; don't migrate a newer standalone version onto an older suite snapshot without reviewing its release notes.

An old individual resource loaded first will be skipped by the suite, with a diagnostic under `window.orbitLovelace.skipped`. Old resources loaded after the suite may still append duplicate picker metadata or cause errors in code without its own guards. The supported state is **one suite resource, no replaced standalone resources**.

## Rollback

Remove the suite resource, restore the saved standalone versions/resource entries, and fully reload the frontend. The card configurations do not need conversion. Do not load both sets at once.

## Former individual resource paths

Match both HACS paths and any manual filename copies below; remove only entries corresponding to cards included in the suite. Editor/helper elements are contained in the bundle and must not be added as resources separately.

- `/hacsfiles/ha-alerts-orbit-card/ha-alerts-orbit-card.js`
- `/hacsfiles/ha-battery-orbit-card/ha-battery-orbit-card.js`
- `/hacsfiles/ha-fan-orbit-card/ha-fan-orbit-card.js`
- `/hacsfiles/ha-nas-orbit-card/ha-nas-orbit-card.js`
- `/hacsfiles/ha-person-orbit-card/ha-person-orbit-card.js`
- `/hacsfiles/ha-room-orbit-card/ha-room-orbit-card.js`
- `/hacsfiles/ha-scenes-orbit-card/ha-scenes-orbit-card.js`
- `/hacsfiles/ha-sensor-graph-orbit-card/ha-sensor-graph-orbit-card.js`
- `/hacsfiles/ha-server-orbit-card/ha-server-orbit-card.js`
- `/hacsfiles/ha-speedtest-orbit-card/ha-speedtest-orbit-card.js`
- `/hacsfiles/ha-unifi-orbit-card/unifi-orbit-card.js`
- `/hacsfiles/ha-vacuum-commander-card/ha-vacuum-commander-card.js`
- `/hacsfiles/ha-weather-orbit-card/ha-weather-orbit-card.js`
- `/hacsfiles/ha-welcome-orbit-card/ha-welcome-orbit-card.js`
- `/hacsfiles/lovelace-action-button-card/action-button-card.js`
- `/hacsfiles/lovelace-alecoair-dehumidifier-card/alecoair-dehumidifier-card.js`
- `/hacsfiles/lovelace-animated-gate-card/animated-gate-card.js`
- `/hacsfiles/lovelace-climate-control-card/climate-control-card.js`
- `/hacsfiles/lovelace-frigate-control-card/frigate-control-card.js`
- `/hacsfiles/lovelace-home-connect-washer-card/home-connect-washer-card.js`
- `/hacsfiles/lovelace-hp-printer-card/hp-printer-card.js`
- `/hacsfiles/lovelace-luma-control-card/luma-control-card.js`
- `/hacsfiles/lovelace-pihole-control-card/pihole-control-card.js`
- `/hacsfiles/lovelace-sensor-meter-card/sensor-meter-card.js`
- `/hacsfiles/lovelace-switch-control-card/switch-control-card.js`
- `/hacsfiles/media-player-card/media-player-card.js`
- `/hacsfiles/temperature-humidity-card/temperature-humidity-card.js`
