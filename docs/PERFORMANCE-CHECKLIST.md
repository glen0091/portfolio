# Performance Checklist

## Already handled by this codebase

- [x] Self-hosted variable fonts via `next/font/local` — zero external font
      requests, no render-blocking Google Fonts round-trip
- [x] Static generation — every route is prerendered at build time
      (`○ (Static)` in the build output), served from Vercel's CDN edge
- [x] `next.config.ts` sets `compress: true` and modern image formats
      (AVIF/WebP) for when you add real project images
- [x] No unused heavy dependencies — Framer Motion + Lucide only; no
      Three.js/GSAP unless you decide to add a specific feature that needs
      them (see `FUTURE-IMPROVEMENTS.md`)
- [x] `prefers-reduced-motion` respected globally (`globals.css`) and in
      every custom animation (`Hero.tsx`, `CustomCursor.tsx`,
      `GridBackground.tsx`) — this also avoids wasted animation work for
      users who've opted out
- [x] Canvas-based grid background (`GridBackground.tsx`) uses
      `requestAnimationFrame` and pauses under reduced motion, rather than
      an animated GIF/video

## To do once you add real content

- [ ] When you add project screenshots, always use `next/image` (not `<img>`)
      so Next.js handles responsive sizing, lazy loading, and format
      conversion automatically
- [ ] Run a real Lighthouse audit after your first production deploy —
      `npx lighthouse https://yourdomain.com --view` or Chrome DevTools →
      Lighthouse. Sandbox environments (like the one this was built in)
      can't run a real browser audit, so this number should come from your
      actual deployed site
- [ ] If you add the contact form backend, keep the request lightweight —
      avoid pulling in a large form-validation library when native HTML
      validation (already used here) covers most cases
- [ ] Re-run `npm run build` after any dependency changes and check the
      route output for unexpectedly large bundle sizes
- [ ] Set caching headers appropriately if you add any API routes
      (`Cache-Control` on `/api/contact` responses, etc.)

## Core Web Vitals — what this build already optimises for

| Metric                          | How                                                                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| LCP (Largest Contentful Paint)  | No render-blocking fonts, hero text renders immediately, static HTML                                                     |
| CLS (Cumulative Layout Shift)   | Fonts use `display: swap` with matched fallback metrics, no layout-shifting ads/embeds                                   |
| INP (Interaction to Next Paint) | Animations run on the compositor (`transform`/`opacity`), heavy work (canvas grid) throttled via `requestAnimationFrame` |
