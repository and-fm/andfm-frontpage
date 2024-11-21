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
        "surface-100": "rgb(224, 224, 224)",
        "surface-200": "rgb(194, 194, 194)",
        "surface-300": "rgb(163, 163, 163)",
        "surface-400": "rgb(133, 133, 133)",
        "surface-500": "rgb(102, 102, 102)",
        "surface-600": "rgb(82, 82, 82)",
        "surface-700": "rgb(61, 61, 61)",
        "surface-800": "rgb(41, 41, 41)",
        "surface-900": "rgb(20, 20, 20)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
