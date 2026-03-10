# AREN Athletic Export

## Project Overview
- **Name**: AREN Athletic Export
- **Goal**: Export the full AREN Athletic marketing/shop website as a GitHub-ready Cloudflare Pages project that can be edited and deployed outside Genspark.
- **Tech Stack**: Hono + Vite + Cloudflare Pages/Workers + TypeScript + static CSS/JS assets
- **Status**: Ready for GitHub export and external deployment

## Completed Features
- Multi-page branded site matching the exported AREN Athletic experience
- Shared navigation, footer, marquee, and page shell components
- Individual pages for:
  - Home
  - About AREN
  - Training
  - Services
  - Street Miles NYC
  - Shop
  - Contact / Join
  - Privacy
  - Terms
- Static assets and image files included in the repository
- Responsive CSS and lightweight frontend interactions in plain JavaScript
- PM2 config for sandbox/local daemonized preview
- Cloudflare Pages-compatible build output via Vite/Hono
- Git repository initialized with commit history

## Current Entry URIs
- `/` — homepage
- `/about` — about/brand manifesto
- `/training` — training programs and inquiry form
- `/services` — services overview
- `/street-miles` — Street Miles NYC page
- `/shop` — apparel/shop landing page
- `/contact` — contact and inquiry page
- `/privacy` — privacy policy page
- `/terms` — terms page
- `/login` — redirects to `/contact`

## Not Yet Implemented
- Real ecommerce checkout/cart backend
- Real form submission backend or email delivery
- CMS/content admin panel
- Authentication system
- Database persistence
- Production Cloudflare Pages project binding/secrets setup

## Recommended Next Steps
1. Push this repository to GitHub
2. Create a Cloudflare Pages project connected to the GitHub repo
3. Replace placeholder social/profile links if needed
4. Add real form handling (Resend, Mailgun, Formspree, or custom API)
5. Add analytics and SEO metadata refinements
6. Add ecommerce integration if live checkout is required

## Project Structure
```txt
webapp/
├── public/
│   └── static/
│       ├── app.js
│       ├── styles.css
│       ├── favicon.svg
│       └── *.jpg
├── src/
│   ├── components.ts
│   ├── index.tsx
│   ├── renderer.tsx
│   └── routes/
│       ├── about.ts
│       ├── contact.ts
│       ├── home.ts
│       ├── services.ts
│       ├── shop.ts
│       ├── street-miles.ts
│       └── training.ts
├── ecosystem.config.cjs
├── package.json
├── tsconfig.json
├── vite.config.ts
├── wrangler.jsonc
└── README.md
```

## User Guide
### Local development
```bash
npm install
npm run build
npm run preview
```

### Sandbox/PM2 style local run
```bash
npm run clean-port
npm run build
npm run start:pm2
```

### Standard Vite dev mode
```bash
npm run dev
```

## Deployment
### Cloudflare Pages
```bash
npm install
npm run build
npx wrangler pages deploy dist --project-name webapp
```

### Suggested external workflow
- Push to GitHub
- Connect repo in Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist`

## Data Architecture
- **Storage services used**: None currently
- **Frontend data**: Static content/templates embedded in route files
- **Interactivity**: Lightweight browser-side JavaScript in `public/static/app.js`

## Files You Will Edit Most Often
- `src/routes/*.ts` — page content and structure
- `src/components.ts` — shared layout components
- `public/static/styles.css` — design system and responsive styles
- `public/static/app.js` — UI interactions
- `package.json` — scripts and dependencies
- `wrangler.jsonc` — deployment config

## GitHub Export / Push Options
### Option 1: I push it for you
Tell me:
- `use my existing selected repo`
or
- the exact GitHub repo URL/name you want

Then I will configure GitHub auth in the sandbox and push the full repository.

### Option 2: Manual export
From the project directory:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Notes
- This project is prepared as a full codebase export, not just a preview.
- The repository already contains the source files, assets, config, and git history needed for external editing and deployment.
