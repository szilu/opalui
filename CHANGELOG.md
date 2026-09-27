# Changelog

## 0.16.0

### Breaking

- `.c-button.link` → `.c-link` (text link) or `.c-button.ghost` (borderless button).
- `.c-button.compact` / `.small` / `.large` → `.xs` / `.sm` / `.lg`.
- `.c-button.container-*` → `.c-button.soft.*` (e.g. `.soft.primary`).
- `.c-accordion-item` / `-header` / `-icon` / `-content` → native
  `<details class="c-disclosure">` + `<summary>`, with `.c-disclosure-icon`,
  `.c-disclosure-chevron` and `.c-disclosure-content`. `.c-accordion` is now the
  group wrapper around several disclosures.
- `.c-toolbar-spacer` → `.c-spacer`.
- `.c-avatar-badge` → `.c-badge.positioned.tr|tl|br|bl` inside a `.pos-relative` parent.
- The themes no longer load Google Fonts. Import `themes/fonts-google.css` or
  self-host Roboto/Oswald (see README, "Themes & fonts").
- `.c-table` now paints an auto-bg surface with rounded corners
  (`border-collapse: separate`).

### Added

- Disclosure (`.c-disclosure`, `.panel`) and accordion group (`.c-accordion`, `.borderless`).
- Card/panel shape variants: `.soft`, `.outline`, `.plain`.
- Auto background (`.auto-bg`, `.auto-bg-*`): surfaces pick their fill from context.
- Coarse-pointer hit areas: buttons, links, menu/nav items, tabs and tag remove
  buttons get at least `--min-touch-target` tap area on touch screens.
- `themes/fonts-google.css`: opt-in Google Fonts loader.
