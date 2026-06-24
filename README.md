# prajalkulkarni.com

A small, fast, content-first personal website for **Prajal Kulkarni**.
Built with **Astro + TypeScript**, statically generated, zero database / CMS / backend / tracking.

Six pages: **Home · Journey · Philosophy · Talks · Field Notes · Contact**.

---

## Stack & principles

- **Astro** static site generation — ships HTML + a single CSS file, almost no JS.
- **TypeScript** content model — all editable copy lives in typed data files under `src/data/`.
- **Geist + Geist Mono** via Google Fonts. One calm blue accent on white.
- Minimal dependencies, accessible, mobile-first, easy to maintain for years.

---

## Project structure

```
astro/
├─ public/
│  └─ prajal.png              # headshot (replace with your own, square)
├─ src/
│  ├─ data/                   # ← edit content here, no components needed
│  │  ├─ site.ts              # name, role, intro, companies, contact links
│  │  ├─ journey.ts           # career entries (newest first)
│  │  ├─ principles.ts        # philosophy principles (in order)
│  │  ├─ talks.ts             # talks/panels/podcasts (newest first)
│  │  └─ fieldnotes.ts        # short security takes (newest first)
│  ├─ lib/
│  │  └─ format.ts            # tiny **bold** → <strong> helper
│  ├─ components/
│  │  ├─ Nav.astro
│  │  └─ Footer.astro
│  ├─ layouts/
│  │  └─ Base.astro           # <head>, fonts, nav, footer, slot
│  ├─ pages/
│  │  ├─ index.astro          # Home
│  │  ├─ journey.astro
│  │  ├─ philosophy.astro
│  │  ├─ talks.astro
│  │  ├─ field-notes.astro
│  │  └─ contact.astro
│  └─ styles/
│     └─ global.css           # the whole design system
├─ astro.config.mjs
├─ tsconfig.json
└─ package.json
```

---

## Run locally

Requires Node 18+.

```bash
cd astro
npm install
npm run dev        # http://localhost:4321
```

Build the static site:

```bash
npm run build      # outputs to ./dist
npm run preview    # preview the production build
```

---

## Editing content

You almost never need to touch a component — edit the data files:

- **Profile / intro / contact** → `src/data/site.ts`
  Intro paragraphs support `**bold**`. The first paragraph renders larger (the lede).
- **Career timeline** → `src/data/journey.ts`
  Add an object to the `journey` array. Set `current: true` on your present role to highlight its timeline dot. `learned` is optional.
- **Philosophy** → `src/data/principles.ts`
  Numbered automatically in array order.
- **Talks** → `src/data/talks.ts`
  Grouped by `year` automatically. Omit `href` for a non-linked item.
- **Field Notes** → `src/data/fieldnotes.ts`
  Add an object to the top of the `fieldNotes` array (newest first). `topic` must be one of: `supply-chain`, `ai`, `vuln`, `privacy`, `identity`. Body supports `**bold**`.

To change the **headshot**, replace `public/prajal.png` (square image works best).
To change **colours / type / spacing**, edit the CSS variables at the top of `src/styles/global.css`.

---
