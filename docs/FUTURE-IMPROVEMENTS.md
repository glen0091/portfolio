# Future Improvements

Ideas from the original brief that weren't built into v1, either because
they need content you don't have yet or because they're genuinely optional
polish rather than load-bearing features.

## Worth doing soon

- **Real project images** — add screenshots/mockups to each case study
  using `next/image` once you have real projects filled in
- **Contact form backend** — see README §6 (Resend, Formspree, etc.)
- **Blog** — the placeholder section in `BlogTeaser.tsx` is ready to be
  replaced with real posts (MDX via `next-mdx-remote`, or a headless CMS
  like Sanity/Contentful if you want a non-code editing workflow)

## Optional, higher effort

- **Three.js hero element** — the brief allowed this "only if it genuinely
  improves the experience." The current canvas-based grid background
  achieves the same ambient effect at a fraction of the bundle size; a 3D
  scene would be worth it only for a specific signature moment (e.g. an
  interactive 3D object relevant to your work), not as decoration.
- **GSAP scroll choreography** — Framer Motion's `whileInView` covers every
  reveal on the current site. GSAP's ScrollTrigger would be worth adding if
  you want pinned/scrubbed animations (e.g. a case study that unfolds as
  you scroll through a single viewport) — a more advanced technique than a
  standard reveal.
- **Case study detail pages** — currently each project is a card on the
  homepage. If your case studies get long, consider promoting each to its
  own route (`/work/[slug]`) with a dedicated page, image gallery, and
  deeper narrative.
- **CMS-driven content** — if you'll be updating projects/testimonials
  often, moving `content.ts` into a headless CMS (Sanity, Contentful) means
  edits don't require a code deploy. Not necessary for the current scope.
- **Automated visual regression / Lighthouse CI** — add a GitHub Action
  that runs Lighthouse on every PR preview deployment to catch performance
  regressions before they reach production.

## Explicitly decided against for now

- **Command palette actions beyond navigation** (e.g. theme switching from
  within the palette) — kept the palette focused on navigation + contact to
  avoid it becoming a second, redundant nav system.
- **Rainbow/multi-hue accents** — the brief asked for restraint on color;
  the two-accent system (indigo + cyan) is deliberate and shouldn't be
  expanded without a specific reason.
