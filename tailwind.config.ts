import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
  	animation: {
  		'move-up-and-down': 'move-up-and-down 2s linear infinite',
      'grow-when-hover': 'grow-when-hover 0.2s ease-in-out forwards'
  	},
  	extend: {
  		keyframes: {
  			'move-up-and-down': {
  				'0%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-5px)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			},
        'grow-when-hover': {
          '0%': {
            transform: 'scale(1)'
          },
          '100%': {
            transform: 'scale(1.1)'
          }
        }
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
