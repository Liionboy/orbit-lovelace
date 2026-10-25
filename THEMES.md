# Orbit Themes

Three complete Home Assistant theme families, each with native **light and dark modes**. Delivered with Orbit Lovelace v1.9.0; theme definitions v1.0.0.

- **Orbit Graphite** — architectural graphite neutrals and restrained indigo. Recommended starting point.
- **Orbit Fjord** — deep petrol/soft cool surfaces with muted teal.
- **Orbit Dune** — warm stone, sand and quiet bronze.

Themes cover the dashboard canvas, HA header/sidebar, card surfaces, text, forms, sliders and dialog surfaces through native frontend variables, with legacy and newer semantic token mappings. No card-mod, injected global CSS, external fonts/images, JavaScript download or additional integration is required for the themes. HA frontend tokens outside primary/accent/state color are version-dependent; not every third-party card honors them.

## Important: two separate installation steps

**Updating the Dashboard plugin in HACS installs the card JavaScript, not these theme YAML definitions.** Keep the one Orbit resource; do not install the same repository a second time as a Theme or add standalone cards alongside it. The YAML below is an optional manual companion download from this same repository. No separate repository was created.

1. **Update Orbit Lovelace to v1.9.0 or later in HACS** and fully reload each frontend/Companion WebView. This enables the optional Orbit accent/surface bridge. Native HA theme colors also work without the bridge, but some old Orbit accents will remain.
2. Back up your HA configuration and existing themes. Download [orbit-themes.yaml](https://github.com/Liionboy/orbit-lovelace/releases/download/v1.9.0/orbit-themes.yaml) and save the complete, unchanged file as **`/config/themes/orbit-themes.yaml`**. It contains all three named themes; do not paste it into a Lovelace card or JavaScript resource. Keep your other theme files.
3. If you already use `themes: !include_dir_merge_named themes` under `frontend:`, no configuration edit is needed. Otherwise **merge** the theme inclusion into the existing frontend configuration, never add a duplicate `frontend:` section or replace its other settings:

```yaml
frontend:
  # Keep all existing frontend settings here.
  themes: !include_dir_merge_named themes
```

If your existing `frontend.themes` uses `!include themes.yaml`, another directory or inline definitions, preserve that arrangement and merge the three theme entries into its included mapping, or migrate it only after backing up and preserving every existing theme. Do not blindly replace an existing themes key.

4. If themes were already enabled, run **Developer Tools → Actions → `frontend.reload_themes`**. If this is your first time enabling themes/changing the frontend include, validate configuration and restart HA at a time you choose; no restart or live change has been performed by this project.
5. In **your user profile → Appearance**, select **Orbit Graphite**, **Orbit Fjord** or **Orbit Dune**, then choose Light, Dark or automatic/system mode. The theme supplies both modes. Refresh the phone frontend if old assets remain cached. A per-user selection is preferable to changing everyone’s global default.

## What changes in Orbit cards?

The suite’s build-only theme bridge adds CSS-variable fallbacks without editing any pinned upstream assets. Default/base palette accents, root card radius/shadow, decorative surfaces and selected companion-card branding use optional `orbit-theme-*` tokens. No theme selected means the previous styles remain; representative populated-card computed colors/geometry were compared against v1.8.0.

- Default/aurora accents follow the active theme. Explicit alternate palettes retain their local accent variables; shared decorative surfaces remain coordinated with the theme.
- Heating/cooling, warm/cold room effects, alarm/error/unavailable indicators, actual light RGB values, forecast scales and data-specific chart colors are not recolored into generic branding. Temperature/humidity panels keep distinct semantic hues, adapted to light/dark surfaces. Some device/data-specific colors deliberately differ from the theme accent.
- Switching theme/mode updates CSS without replacing card controls or requesting more entity/forecast data. Card types, entity selections, YAML and services are unchanged.
- Existing card layout/spacing and configured sizing are retained. A theme does **not** create the preview dashboard layout or add navigation/views/entities. Card-mod, inline dashboard CSS or other custom themes can override these variables.

## Previews

Actual released card code with mocked entities inside a **synthetic HA-like shell**, not a capture of a live HA instance. Preview icons are local SVG stubs, not certification of native HA components.

### Graphite

![Graphite dark](docs/themes/images/orbit-graphite-dark-desktop.png)
[Light](docs/themes/images/orbit-graphite-light-desktop.png) · [Phone](docs/themes/images/orbit-graphite-dark-phone.png) · [Dialog token preview](docs/themes/images/orbit-graphite-dark-dialog.png)

### Fjord

![Fjord light](docs/themes/images/orbit-fjord-light-desktop.png)
[Dark](docs/themes/images/orbit-fjord-dark-desktop.png) · [Phone](docs/themes/images/orbit-fjord-light-phone.png)

### Dune

![Dune dark](docs/themes/images/orbit-dune-dark-desktop.png)
[Light](docs/themes/images/orbit-dune-light-desktop.png) · [Phone](docs/themes/images/orbit-dune-dark-phone.png)

The optional local design preview is `docs/themes/preview.html`, served from this repository root over HTTP. It only reads the local catalog and bundle, uses mocked service functions, and cannot operate real devices. It is not an HA dashboard resource; do not add preview JavaScript to HA.

## Rollback

Choose your previous/default theme in the profile; Orbit variables stop applying and default card styling returns. If desired, remove only the new `orbit-themes.yaml` file **after** deselecting it, then reload themes. Preserve other files/configuration. The suite JavaScript/resource can remain installed; it does not force a theme. Revert to an older suite release only if you also want to remove the bridge code.

## Verification boundaries

Generated YAML parsed by a real YAML parser and matched to the catalog; deterministic build, source pins, core color-pair contrast (normal text >=4.5:1, primary text on card >=7:1), accessible action colors and no external dependencies tested. These are specific token-pair checks, **not a full WCAG certification of every card/state/chart**.

168 sequential card/theme mounts (28 cards × six variants), six populated desktop/390px-phone previews, dialog token examples, mode-change control identity/no added requests, alternate palette and warm-state precedence passed in Chromium. Existing suite/Media/Weather regressions retained. Native HA profile selection, stock dialogs/editors, physical Companion devices and every legacy/device-specific state remain unverified. No live HA configuration, dashboard, theme selection, resource or device was changed.
