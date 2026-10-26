# Orbit device profiles

Suite **1.10.0** / Orbit Themes **1.1.0**. Graphite, Fjord and Dune each gain selectable **Desktop**, **Mobile** and **iOS Mobile**, all light/dark. Original family names/styles remain:12 names/24 modes in one YAML. Example names: **Orbit Graphite Desktop**, **Orbit Graphite Mobile**, **Orbit Graphite iOS Mobile**; replace Graphite with Fjord or Dune for the other families.

- **Desktop:** native HA header/navigation at every width; same colors as the original family. No card-mod required.
- **Mobile:** below768 CSS pixels hides the ordinary dashboard header/view selector. Navigate from your Room Cards. Native subview Back/title remain visible; edit mode restores the header. At768px or wider the header remains, including wide phone/tablet landscape.
- **iOS Mobile:** same navigation, with system-font preference and explicit viewport/margin/transform normalization. Both mobile profiles respect all four safe-area insets, dynamic viewport height and scrolling. This is a selectable design profile, not automatic OS detection or physical iPhone certification.

## Setup

1. Update Orbit Lovelace in HACS and reload the frontend. **This does not install theme YAML.**
2. For Mobile/iOS Mobile, install/update **card-mod** from HACS using its [official instructions](https://github.com/thomasloven/lovelace-card-mod). Tested with4.2.1. Orbit does not bundle, install, configure or download it at runtime. Without it the palette still works but the native header remains.
3. Follow [THEMES.md](../../THEMES.md): back up and replace **only** your existing Orbit YAML with [orbit-themes.yaml](https://github.com/Liionboy/orbit-lovelace/releases/download/v1.10.0/orbit-themes.yaml), normally `/config/themes/orbit-themes.yaml`. Do not keep an old duplicate Orbit YAML in the merged directory. Preserve all other themes/frontend settings/includes.
4. Run `frontend.reload_themes` if themes are already enabled; fully reload phone/Companion. First-time theme enablement/frontend config changes need configuration validation and a restart you schedule.
5. On the phone: **Profile → Appearance → Theme → Orbit Graphite Mobile** (or iOS Mobile/Fjord/Dune), then Light/Dark/Auto. Choose Desktop or the original family on desktop. Existing view-specific theme overrides take precedence; review them if selecting a profile seems ineffective. Do not call global `frontend.set_theme` just to select one phone theme.

Card-mod recommends early loading with `frontend.extra_module_url` for theme styling. If adopting this optional setup, **merge** into your existing frontend/list using the exact resource URL including your real HACS cache tag from Dashboard resources; do not invent a tag. Follow upstream instructions to keep the HACS-managed resource and synchronize its URL on updates, avoiding duplicate/old patch versions. Config changes need validation/restart. Our isolated test uses normal Dashboard-resource loading. No live dependency/configuration is changed by this project.

## Room → room → Back

Themes do not create routes. Before enabling Mobile, configure your Room Cards with `navigation_path` to existing views. Mark room views `subview: true` and set explicit `back_path` to your home view. Those are native HA view settings, not new Orbit keys. Mobile intentionally preserves native Back/title in subviews so a direct room link never depends on browser history alone. Room controls/More Info retain their behavior.

[Example new-dashboard YAML](mobile-navigation.yaml) includes a home Room Card, room subview, fixed return path and recovery link; no device entities/commands. Replace `/dashboard-example/...` with your actual routes. Use in a new dashboard or merge only relevant cards/view settings; never overwrite your live dashboard wholesale. **A separate dashboard is optional**, not required.

## Recovery / editing

**Before choosing Mobile, add a visible home link to `/profile`**, e.g. a native Markdown card containing `[Appearance / restore header](/profile)` or explicit Welcome settings link. Hiding navigation is not access control.

- Native subview Back stays visible. `back_path` fixes the destination even for direct links.
- Edit mode keeps the header and original view padding. To enter editing with a hidden normal header, open `/profile`, choose Desktop/original/default, return, then use Edit. Do not rely on undocumented query-string bypasses.
- Without a recovery card, enter your HA base URL plus `/profile` directly (respect any administrator-configured reverse-proxy base path), then choose Desktop/original/default.
- Theme switches remove mobile root styling after refresh/reload. To roll back definitions, deselect Mobile, restore only the backed-up Orbit YAML, reload themes/frontend; preserve unrelated themes/config.

## Scope and verification

Root CSS is scoped to the dashboard shadow root, recognized HA wrapper/header/view markup and viewport width below768px. Unknown markup fails open: native header stays, rather than hiding arbitrary global elements. No sidebar/dialog/settings-panel hiding, JavaScript injection, route interception, device commands, automatic theme selection or dashboard edits. Other global/kiosk/card-mod styles can conflict.

Real pinned card-mod4.2.1 injection/removal tested in Chromium on a synthetic HA root shaped from inspected frontend source:24 theme modes,390/767/768/1280px, edit/subview Back, supplied safe-area values, scrolling, real released Room navigation, Desktop rollback and missing-dependency fallback. Card/color bundle regressions retained. Not native HA installation, Safari/WebKit/iPhone/Android Companion or all-frontend-version certification. No live HA config/dashboard/resource/dependency/theme/device was changed.
