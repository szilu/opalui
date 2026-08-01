OpalUI
======

*OpalUI* is minimalistic CSS framework with good theme support.
It comes with a frosted glass and an opaque theme by default, both of them supports dark and light modes.

## Breakpoints

The responsive scale is font-relative, so the bands follow the user's root font size.
Pixel values below assume the default 16px root.

| Band | Query | At a 16px root |
|---|---|---|
| sm | `(width < 48rem)` | < 768px |
| md | `(width >= 48rem)` | ≥ 768px |
| lg | `(width >= 72rem)` | ≥ 1152px |
| xl | `(width >= 96rem)` | ≥ 1536px |

`sm` is the implicit base band — there is no `sm` prefix for grid columns, because
unprefixed classes already apply there.

**Grid columns.** `col-md-*`, `col-lg-*` and `col-xl-*` set a column's width from
their breakpoint upward, overriding the unprefixed `col-*` inside a `.c-container > .row`.

**Utility prefixes.** `sm\:*`, `md\:*` and `lg\:*` scope a utility to a band, e.g.
`sm:d-none`, `md:flex-row`, `lg:g-3`. `sm\:*` applies only below `48rem`; `md\:*`
and `lg\:*` apply at their breakpoint and above.

**Visibility helpers.** These two families scope differently, on purpose:

- `.sm-hide` and `.md-hide` are **band-scoped** — they stop applying above their
  own band. To hide an element from `md` upward, write `md-hide lg-hide`.
- `.lg-hide` and `.xl-hide` are **cumulative** — they keep applying at every wider
  band.
- All four `-hide-dyn` classes (`sm-hide-dyn` … `xl-hide-dyn`) are band-scoped, so
  an element can be a slide-in overlay in one band and a real in-flow column in the
  next.
