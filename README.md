# KrishiKit frontend

React + Vite port of the KrishiKit prototype that was exported from Claude Design
(`prototype/KrishiKit App1.html`, left untouched). Same screens, copy (English / ಕನ್ನಡ / हिंदी),
light and dark themes, and interactions. It runs on built-in demo data; nothing talks to a backend yet.

## Install, run, build

Requires Node 20.19+ or 22.12+ (required by Vite 8; developed on Node 24).

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve dist/ locally
npm run format   # prettier
```

Start state can be set with query params (these were editor props in the prototype):
`/?screen=shop&role=urban&lang=kn&theme=dark`
(`screen`: any id in `src/app/constants.js`; `role`: `farmer | urban | vle`; `lang`: `en | kn | hi`;
`theme`: `light | dark | system`). Without them the app starts on the splash, like the prototype.

## What was in the prototype

The HTML file was a bundle: a gzipped asset manifest plus one template for a custom runtime
("DC": `sc-if`, `sc-for`, `x-import`, `{{ path }}` bindings), a single `Component` class holding all state,
a compiled Rhiza design-system bundle, bundled React 18, 14 woff2 fonts and one SVG.
All of that now lives in normal modules:

| Prototype | Here |
| --- | --- |
| `Component` state + handlers | `src/app/useKrishiKit.js` (hook; same state shape and actions) |
| `renderVals()` | `src/app/buildViewModel.js` (derives labels, handlers, styles for the screens) |
| `window.KK` copy + demo data | `src/data/copy.js` (`[en, kn, hi]` strings), `src/data/demo.js` |
| 36 `sc-if` screen blocks | `src/screens/<area>/*Screen.jsx`, registry in `src/screens/index.js` |
| header, nav, CTA bar, cart bar, sheets, camera, toast | `src/components/shell/` |
| `UiIcon`, `ProductTile` sub-components | `src/components/UiIcon.jsx`, `ProductTile.jsx` |
| Rhiza design-system bundle | `src/design-system/` (Button, Badge, Input, Logo, CardRoot, Icon, CardProduct) |
| illustrations (splash, hero, role cards) | `src/components/art/` |
| helmet `<style>` blocks | `src/styles/` (fonts, tokens, typography, motion, base, app) |
| fonts / sparkle SVG | `src/assets/fonts/`, `src/assets/images/` |

Screens are rendered from the view model (`<Screen vm={vm} />`). Each screen file lists the view-model fields it uses
at the top, so you can see what it depends on.

Fidelity: the port was checked against the original by rendering both in headless Chrome. The DOM of all 36 screens
matches (English, Kannada + dark, Hindi), as do the step-by-step DOM states of 12 click-through flows (onboarding,
language/theme, shop and cart, plan builder through payment, soil/leaf/bill scans, feed, partner trip, services).
Pixel diffs are zero apart from a few anti-aliased text edges.

## Supabase

`@supabase/supabase-js` is installed and `src/lib/supabase.js` creates a client when
`VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set (copy `.env.example` to `.env.local`).
Nothing uses it yet: no tables, auth flow or API calls are defined, because none are specified.

Places that are currently static or mocked and will need a real source:

- **Catalogue, plans, soil, feed/community posts, bills, services, earnings, trip log**: `src/data/demo.js`.
  Copy strings stay in `src/data/copy.js` (the three-language arrays are part of the UI contract).
- **Sign-in**: the phone and code screens are visual only (`src/screens/onboarding/PhoneScreen.jsx`, `OtpScreen.jsx`);
  the code digits are fixed in the markup and the role is chosen locally.
- **Profile / user identity**: name, phone and village are hard-coded in `buildViewModel.js` (`prof`).
- **Cart, orders, payment, bookings**: in-memory state in `useKrishiKit.js`; "Place the order", "Confirm booking" and
  similar only move to the next screen.
- **Camera / scans**: simulated (timed checks, no capture or upload).
- **Persistence**: only the theme choice is stored (`localStorage` key `kk-theme`).

A natural path is to replace the arrays in `src/data/demo.js` with fetches and keep `buildViewModel` as the adapter
between data and screens; that keeps the screen components unchanged.

## Notes

- Class names `kk-host`, `kk-host-x` and `kk-interp` mark wrapper elements that the prototype's runtime inserted
  (around imported components and interpolated text). They are kept so layout is identical.
- Fonts are self-hosted from `src/assets/fonts/` (Bricolage Grotesque, Hanken Grotesk, JetBrains Mono, Noto Sans
  Devanagari and Kannada), so the app works offline.
