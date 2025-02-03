import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	  extend: {
      colors: {
        brand: '#0096FF',
        facebook: '#1877F2',
        linkedin: '#0077B5',
        twitter: '#000000',
        github: '#2b3137',
        lightbg: '#e5e5e5',
        darkbg: '#00022F',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        gradient: 'conic-gradient(from 0deg, #3b82f6, #9333ea, #facc15, #3b82f6)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'border-spin': 'spin-border 20s linear infinite',
        'border-spin-fast': 'spin-border 7s ease-in-out infinite',
        'marquee': 'marquee 45s linear infinite',
        'marquee2': 'marquee2 45s linear infinite',
      },
      keyframes: {
        'spin-border': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-400%)' },
        },
        'marquee2': {
          '0%': { transform: 'translateX(-400%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
