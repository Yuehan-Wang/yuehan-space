# yuehan.space

Personal site — Next.js 16, Tailwind 4, React 19. Static-exported and deployed to GitHub Pages.

## Local dev

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy

Push to `master` — `.github/workflows/deploy.yml` builds the static export and publishes to GitHub Pages.

Live at: **https://yuehan-wang.github.io/yuehan-space/**

## Custom domain

If you want to serve this from a domain you own (e.g. `yuehan.space` again after re-registering):

1. Create `public/CNAME` containing just your domain (one line).
2. In `.github/workflows/deploy.yml`, change `NEXT_PUBLIC_BASE_PATH: /yuehan-space` to `NEXT_PUBLIC_BASE_PATH: ""` (assets served from root, not `/yuehan-space/`).
3. Point the domain's DNS to GitHub Pages per [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Content

- `content/posts/` — markdown blog posts, rendered via `remark` on `/post/[id]`.
- `content/projects/` — markdown project pages, rendered via `marked` on `/project/[id]`.
