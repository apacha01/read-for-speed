/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				'carrot-orange': {
					'50': '#fffaeb',
					'100': '#fdf0c8',
					'200': '#fbe08c',
					'300': '#f9ca50',
					'400': '#f7b428',
					'500': '#ec900e',
					'600': '#d56e0a',
					'700': '#b14c0c',
					'800': '#903c10',
					'900': '#763211',
					'950': '#441704',
				}
			}
		},
	}
}
