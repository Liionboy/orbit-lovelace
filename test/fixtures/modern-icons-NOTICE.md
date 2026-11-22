# Modern gallery icons — test only

Paths in `modern-icons.json` are from `@mdi/svg` 7.4.47 (Pictogrammers / Material Design Icons), Apache-2.0, fetched from the version-pinned `https://cdn.jsdelivr.net/npm/@mdi/svg@7.4.47/svg/<name>.svg`.

See [the existing full Apache license](chips-icons-LICENSE.txt). These paths supplement the existing Chips/Bambu test fixtures. They are not included in the runtime bundle; Home Assistant supplies actual `ha-icon` elements.

`modern-suite-icons.json` supplements the all-37-card beta.2 gallery with 126 further paths from the same pinned `@mdi/svg` 7.4.47 package (`https://registry.npmjs.org/@mdi/svg/-/svg-7.4.47.tgz`). Only referenced SVG path data was copied; no package/runtime dependency was installed. The same Apache-2.0 attribution/license applies.
