// Tailwind v4 ships its own PostCSS plugin (@tailwindcss/postcss) and its own
// vendor-prefixing, so autoprefixer is no longer needed alongside it.
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
