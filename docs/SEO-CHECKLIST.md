# SEO Checklist

## Already handled by this codebase

- [x] Dynamic `<title>` / meta description via `metadata` in `layout.tsx`
- [x] Open Graph + Twitter Card tags, with a dynamically generated share
      image at `/opengraph-image`
- [x] `robots.txt` generated from `src/app/robots.ts`
- [x] `sitemap.xml` generated from `src/app/sitemap.ts`
- [x] JSON-LD `Person` schema in `layout.tsx` (helps Google understand who
      you are and what you do — supports rich results)
- [x] Semantic HTML: one `<h1>` (Hero), ordered heading hierarchy through
      each section, `<nav>`, `<main>`, `<footer>` landmarks
- [x] Canonical URL set via `alternates.canonical`

## To do once you're live

- [ ] Update `site.url` in `content.ts` to your real production domain —
      every SEO tag above derives from this one value
- [ ] Submit the sitemap to Google Search Console
      (`https://yourdomain.com/sitemap.xml`)
- [ ] Verify domain ownership in Google Search Console and Bing Webmaster
      Tools
- [ ] Add real project names/keywords relevant to your niche in the
      `projects` case studies — search engines and readers both benefit
      from specific terms over generic ones
- [ ] If you publish blog content later, add per-post metadata and include
      posts in `sitemap.ts`
- [ ] Request indexing for the homepage in Search Console after first
      deploy — don't wait for organic crawl
- [ ] Set up a Google Business Profile if you want to rank for
      location-based searches (e.g. "web developer Melbourne")
