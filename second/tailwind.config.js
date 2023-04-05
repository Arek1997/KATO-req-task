/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'node_modules/preline/dist/*.js',
	],
	theme: {
		fontFamily: {
			sans: [
				'Inter',
				'system-ui',
				'Avenir',
				'Helvetica',
				'Arial',
				'sans-serif',
			],
		},
	},
	plugins: [require('preline/plugin')],
};
