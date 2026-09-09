// ESLint 9 flat config -- migrated from .eslintrc.json ({ extends: "next/core-web-vitals" })
// when we bumped eslint to v9 and eslint-config-next to v16 to match Next.js 16.
// eslint-config-next v16 ships its own flat config; use it directly instead of the
// FlatCompat + old rc-format shim.
import nextConfig from "eslint-config-next";
import nextWebVitals from "eslint-config-next/core-web-vitals";

export default [
  ...nextConfig,
  ...nextWebVitals,
  { ignores: [".next/**", "node_modules/**", "out/**"] },
];
