/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		    colors: {
				'and-primary': '#e07d3b',
				'and-black': '#232323',
			},
		},
	},
	plugins: [],
}
