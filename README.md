# Professional Portfolio / Activity Log

This is a modular, data-driven portfolio site built with Next.js App Router and Tailwind CSS.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Local JSON + Markdown content

## Data Sources

- `data/projects.json` for project inventory
- `data/weekly-logs.json` for weekly logs (week 1 to week 10)
- `data/audits.json` for technical audits
- `content/reflection.md` for narrative reflection text

## Run Locally

```bash
npm install
npm run dev
```

## SEO Deliverables (PRD)

- **Sitemap**: `app/sitemap.ts` generates `sitemap.xml`
- **Robots**: `app/robots.ts` generates `robots.txt`
- **Metadata**:
  - Global metadata is defined in `app/layout.tsx`
  - Log pages define per-entry SEO via `generateMetadata` in `app/logs/[slug]/page.tsx`

For production, set:

```bash
NEXT_PUBLIC_SITE_URL="https://your-site.vercel.app"
```

## Lighthouse / Optimization (PRD)

Target: **90+** for Performance, Accessibility, Best Practices, and SEO.

Recommended checks:

```bash
npm run build
npm run start
```

Then run Lighthouse on:
- `/`
- `/work`
- `/logs`
- `/logs/week-01-orientation-and-pandachain-onboarding`

Notes:
- All portfolio images use Next.js `Image` with `fill` + `sizes` to minimize CLS.
- Dark mode applies at `<html>` using `.dark` to avoid local-container-only styling.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. In Vercel: New Project → import repo.
3. Set Environment Variable:
   - `NEXT_PUBLIC_SITE_URL` = your production URL
4. Deploy.

## Deployment (Netlify)

1. New site from Git → import repo.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Set Environment Variable:
   - `NEXT_PUBLIC_SITE_URL` = your production URL

## How to Update Content

1. Add or edit objects in JSON files under `data`.
2. Update reflection details in `content/reflection.md`.
3. Save files and refresh the app.

No UI code changes are needed for normal content updates.
