/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        phone: "430px",
      },
      colors: {
        "surface-600": "#000000",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
