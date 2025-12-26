/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {
				brand: {
					primary: '#FF3131',
					secondary: '#FF914D',
					dark: '#0f172a',
					light: '#fff7f2', // Warmer light tint
				}
			},
			boxShadow: {
				'premium': '0 20px 40px -15px rgba(255, 49, 49, 0.1)', // Red-tinted shadow
				'glow': '0 0 25px rgba(255, 49, 49, 0.4)',
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				}
			}
		},
	},
	plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};
