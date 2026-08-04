# Maintenance Guide

## Updating content

All copy is in `src/lib/content.ts`. Editing text there and pushing to
`main` is enough — Vercel rebuilds and redeploys automatically.

## Adding a new project case study

Add a new object to the `projects` array in `content.ts` following the same
shape as the existing entries (`name`, `category`, `summary`, `challenge`,
`solution`, `outcomes`, `tech`, `liveUrl`, `githubUrl`). No component code
needs to change — `Projects.tsx` maps over the array automatically.

## Adding a testimonial

Add an object to the `testimonials` array in `content.ts`:

```ts
{
  quote: "…",
  author: "Jane Doe",
  role: "Founder",
  company: "Acme Co",
}
```

The section switches from its empty state to a real testimonial grid
automatically once the array is non-empty.

## Dependency updates

```bash
npm outdated        # see what's behind
npm update             # update within semver ranges
npm run build            # confirm nothing broke
npm run typecheck
npm run lint
```

For major version bumps (Next.js, React, Tailwind), read the framework's
migration guide before updating — these are the dependencies most likely to
have breaking changes between major versions.

## Rotating the availability badge

`site.availability` in `content.ts` accepts `"available"`, `"limited"`, or
`"booked"` and drives the badge color in the Hero section. Update
`site.availabilityNote` alongside it with a short human-readable note.

## Font files

The self-hosted fonts live in `src/app/fonts/`. If you ever need to change a
typeface, replace the `.woff2` file and update the `localFont` call in
`layout.tsx` — no other changes needed since every component reads fonts via
the CSS variables set in `globals.css`.

## Backups

Vercel keeps every deployment and lets you instantly roll back to a
previous one from the dashboard (Deployments tab → "..." → Promote to
Production). Combined with Git history, you have two independent rollback
paths.
