# Deployment Guide

## Push to GitHub

```bash
cd glen-portfolio
git add .
git commit -m "Initial commit: portfolio site"

# Create a new repo on GitHub first (via github.com or `gh repo create`),
# then:
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

If you have the GitHub CLI installed, you can create + push in one go:

```bash
gh repo create <repo-name> --private --source=. --remote=origin --push
```

## Deploy to Vercel

**Option A — Dashboard (recommended for the first deploy)**

1. Go to https://vercel.com/new
2. Import the GitHub repository you just pushed
3. Vercel auto-detects Next.js — leave the default build settings
   (`next build`, output `.next`)
4. Click **Deploy**

**Option B — CLI**

```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

## After the first deploy

1. **Custom domain:** Project → Settings → Domains → add your domain, then
   update `site.url` in `src/lib/content.ts` to match and redeploy (this
   value drives canonical URLs, the sitemap, and Open Graph tags).
2. **Environment variables:** if you wired up the contact form with Resend
   or another service, add the API key under Project → Settings →
   Environment Variables, for Production, Preview, and Development.
3. **Analytics (optional):** `npm install @vercel/analytics` and add
   `<Analytics />` to `layout.tsx` if you want traffic data.

## Every future deploy

Vercel deploys automatically on every push to `main` (production) and opens
a preview deployment for every pull request / branch push. No manual steps
needed after the first setup.
