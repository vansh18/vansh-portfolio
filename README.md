# Vansh Gupta — Portfolio

A minimal, editorial-style portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/   # Navbar, Hero, Projects, FreelanceWork, Skills,
                # Achievements, Contact, Footer, SystemTrace, AmbientBackground,
                # PlaceholderShot, GalleryModal, Reveal, SectionHeading
  data/
    portfolio.js  # all site content — edit this file to update copy,
                   # projects, additional work, skills, and achievements
  App.jsx
  main.jsx
  index.css       # design tokens (colors, fonts) + base styles
```

To update content (new project, new skill, new achievement), edit `src/data/portfolio.js` — no component changes needed.

## Before you go live — checklist

Everything below is a placeholder waiting on something from you. All of it lives in either `public/` (files) or `src/data/portfolio.js` (text/links) — no component code needs to change for any of these.

| # | What | Where it goes | What to edit |
|---|------|----------------|--------------|
| 1 | **Résumé (PDF)** | `public/resume.pdf` | `profile.resumeUrl` in `portfolio.js` → change `"#"` to `"/resume.pdf"` |
| 2 | **Hero portrait photo** | `public/portrait.jpg` (or `.png`) | `src` attribute in `src/components/Hero.jsx` → change `/portrait-placeholder.svg` to `/portrait.jpg` |
| 3 | **V-RAG project link** (GitHub repo or live demo) | — | `url: ""` on the `vrag` entry in `portfolio.js` — the "Go to project" link on the card only appears once this is filled in |
| 4 | **Compliance Agent project link** | — | `url: ""` on the `compliance-agent` entry in `portfolio.js` |
| 5 | **Additional work screenshots** (MMABOXING, Aseries DMS, Flaseq) | `public/work/<project-id>/1.png`, `2.png`, … | Already wired up — see note below |
| 6 | **Favicon** *(optional)* | `public/favicon.svg` | Already a generated "VG" monogram — replace the file if you have a personal mark |

Everything else — name, tagline, email, LinkedIn, GitHub, skills, achievements — is already filled in with the real values you gave me, so there's nothing to change there unless it's out of date.

A couple of notes:
- The portrait frame is sized modestly on purpose (about 220px wide, 4:5 crop) — a simple headshot works best, doesn't need to be high-res.
- If V-RAG or Compliance Agent don't have a public repo or demo, just leave `url` empty — the card will simply not show the link, same as it does now, rather than pointing somewhere broken.
- Additional work images are read directly from `public/work/<id>/1.png`, `2.png`, etc. — `imageCount` in `portfolio.js` for each project must match how many files are actually in that folder (already set to 8 / 15 / 9 for MMABOXING / Aseries DMS / Flaseq). If you add or remove screenshots later, update `imageCount` to match, and keep the filenames sequential starting at `1.png` with no gaps.

## Deploying to GitHub Pages (`vansh18.github.io`)

Since this repo *is* the user-page repo (`vansh18.github.io`), it deploys from the root with no base-path changes needed.

1. Push this project to the `vansh18/vansh18.github.io` repository.
2. Build locally and publish the `dist/` folder to a `gh-pages` branch:

   ```bash
   npm run build
   npx gh-pages -d dist -b gh-pages
   ```

   (or set up a GitHub Actions workflow that runs `npm run build` and publishes `dist/` on push to `main`).
3. In the repo settings, point GitHub Pages at the branch you publish to.

## Notes

- All copy is sourced only from the content supplied for this project — no invented metrics, links, or employers.
- Motion respects `prefers-reduced-motion`.
- Tailwind v4 is configured via `@theme` tokens in `src/index.css` (no `tailwind.config.js` needed).
