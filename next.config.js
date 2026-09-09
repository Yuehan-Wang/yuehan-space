/** @type {import('next').NextConfig} */
// Static export config for GitHub Pages hosting.
//
// - output: 'export' produces a plain-HTML `out/` directory (no Node server needed).
//   Requires no /pages/api/* routes and no server-only Next.js features.
// - images.unoptimized: 'export' can't run the Next image optimizer at request time.
// - basePath/assetPrefix: when hosting at https://<user>.github.io/<repo>/, the app
//   is served under /<repo>. Set NEXT_PUBLIC_BASE_PATH in the deploy workflow env
//   (see .github/workflows/deploy.yml). Local `next dev` runs with no prefix.
//
// If a custom domain is added later (via public/CNAME), set NEXT_PUBLIC_BASE_PATH=""
// in the workflow env so the built site expects assets at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

module.exports = nextConfig;
