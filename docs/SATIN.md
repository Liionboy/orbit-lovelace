# Orbit Satin

In v1.22.0, enable **Satin** in the card editor or add:

```yaml
satin: true
```

Satin adds a soft reflection and a lit top edge to the surface. It adapts to light and dark color schemes and is independent of Classic/Modern, Normal/Compact and Glow. Room keeps its thermal Glow around the outside. Chips reflect individually; Title adds a highlight to its icon rather than adding a frame.

Satin is off by default. It does not change card sizing, controls or entity state. Update the Orbit Lovelace resource through HACS, reload the frontend, and enable Satin on the cards you want to change.

## Pair with the Orbit Satin theme

Download the updated `orbit-themes.yaml` release asset separately from the HACS card update. Replace the previous Orbit theme YAML if installed (keep other themes), reload themes, and select **Orbit Satin** in your profile in Light or Dark mode. See [theme installation and rollback](../THEMES.md). The theme sets pearl-lavender or violet-graphite surfaces and tunes the reflection; enable **Satin** on the cards where you want the finish. Card-mod is not needed for the colors.
