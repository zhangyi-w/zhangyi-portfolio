# Nova (Zhangyi) Wang — Portfolio

Personal portfolio site.

## Structure

- `index.html` — Home page (bio · featured project · experience · research · projects · education · skills)
- `syncso/index.html` — SyncSo system brief (detailed architecture · AI features · operator signals)

## Hosting

Single static site. No build step, no external CDNs, system fonts only.

### Deploy to GitHub Pages (free, no domain purchase required)

1. Create a new public repo on GitHub (e.g., `nova-portfolio`)
2. Add the remote and push:
   ```bash
   git remote add origin git@github.com:<your-username>/nova-portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source: "Deploy from a branch" → Branch: `main` → Folder: `/ (root)`**
4. Wait ~1 minute. Site goes live at `https://<your-username>.github.io/nova-portfolio/`

### Optional: custom domain

GitHub Pages supports a custom domain (~$10–15/year from any registrar). Point it via DNS, then add `CNAME` file. Not required.

## Local preview

```bash
open index.html
```

Or run any static server in this directory — no dependencies.
