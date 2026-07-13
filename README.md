# ascii-art-portfolio

Monochrome terminal-style portfolio for **Ian Gonzalez** — full-stack developer and ethical hacker, founder of Workforce OS and Terminal Zero.

- **Live (Vercel):** https://ian-gonzalez.vercel.app
- **Live (GitHub Pages):** https://ian-xg.github.io/ascii-art-portfolio/

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS v4
- Framer Motion (`motion/react`)
- TypeScript

## Design

Pure black/white/gray palette (no color), JetBrains Mono throughout. The hero
"boots up" and types `whoami`; sections reveal on scroll; on mobile the project
cards stack as pinned terminal windows. Subtle CRT scanlines and film grain sit
over the page. All motion respects `prefers-reduced-motion`.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Deployment

- **Vercel** deploys automatically on push to `main` (production branch).
- **GitHub Pages** uses a static export:

  ```bash
  GITHUB_PAGES=true pnpm build   # emits ./out with basePath /ascii-art-portfolio
  ```

  The `GITHUB_PAGES` flag gates the `basePath`/`assetPrefix` so local dev and
  Vercel keep serving cleanly at the root.
