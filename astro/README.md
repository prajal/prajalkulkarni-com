# prajalkulkarni.com

A small, fast, content-first personal website for **Prajal Kulkarni** — security leader & CISO at Groww.
Built with **Astro + TypeScript**, statically generated, zero database / CMS / backend / tracking.

Five pages: **Home · Journey · Philosophy · Talks · Contact**.

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
│  │  └─ talks.ts             # talks/panels/podcasts (newest first)
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

To change the **headshot**, replace `public/prajal.png` (square image works best).
To change **colours / type / spacing**, edit the CSS variables at the top of `src/styles/global.css`.

---

## Deploy to Cloudflare Pages

This is a fully static site, so deployment is trivial.

### Option A — Git (recommended)

1. Push this repo to GitHub/GitLab.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo and use these build settings:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `astro` *(only if this folder is nested in the repo — omit if `astro/` is the repo root)*
4. Deploy. Cloudflare gives you a `*.pages.dev` URL.

### Option B — Direct upload (Wrangler CLI)

```bash
cd astro
npm install
npm run build
npx wrangler pages deploy dist --project-name=prajalkulkarni
```

### Custom domain

In your Pages project → **Custom domains → Set up a domain** → add `prajalkulkarni.com`
and follow the DNS instructions (Cloudflare handles HTTPS automatically).

---

## Notes / things to confirm

- **Dates** for Flipkart (2014–2022) and Cleartrip (2022–2023) were inferred — adjust in `journey.ts` if needed.
- **GitHub** link and **email** in `site.ts` are placeholders (`github.com/prajalkulkarni`, `hello@prajalkulkarni.com`) — update to the real ones.
- A few **talk links** are filled where a public page exists; others have no `href` yet — add them when you have URLs.

---

## Lighthouse

Out of the box this should comfortably score 95+ across Performance, Accessibility,
Best Practices, and SEO. The only network cost beyond HTML/CSS is the Google Fonts request —
self-host Geist (e.g. via `@fontsource/geist-sans`) if you want to drop that too.
