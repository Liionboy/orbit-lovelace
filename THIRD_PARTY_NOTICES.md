# Licenses and third-party notices

Orbit Lovelace packaging and first-party card work are distributed under the root MIT LICENSE. Individual published card license files are retained in cards/<package>/LICENSE. Server Orbit had no separate LICENSE in its original user-owned repository; its first-party source is included under this suite's MIT license rather than implying an upstream license file existed.

Vacuum Commander is imported from its already compiled public distribution, which includes Lit (lit, lit-html, lit-element and @lit/reactive-element) under BSD-3-Clause. Their full license notices are retained in licenses/ and embedded in the single JavaScript distributable so they accompany binary/source redistribution. Original first-party package licensing is also retained.

No third-party implementation is fetched dynamically by the suite. The original compiled Vacuum artifact also includes tree-shaken Home Assistant custom-card helper utilities; see its retained source/package metadata for dependency provenance. Those helpers are MIT-licensed; the matching notice is included under licenses/ when present in the upstream build environment.
