import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'main': {
          50: '#edf6ff',
          100: '#d6eaff',
          200: '#85c6ff',
          300: '#85c6ff',
          400: '#4ba6ff',
          500: '#2280ff',
          600: '#0a5dff',
          700: '#0446f1',
          800: '#0a37bd',
          900: '#0f3599',
          950: '#0f225c'
        },
        'marigold': {
          50: '#fdfce9',
          100: '#fcfac5',
          200: '#faf38e',
          300: '#f7e54d',
          400: '#f3d41c',
          500: '#e3bb0f',
          600: '#bd8d0a',
          700: '#9c690c',
          800: '#815312',
          900: '#6e4415',
          950: '#402308',
        },
        'mallard': {
          50: '#f0f9ec',
          100:'#def1d6',
          200: '#c1e4b2',
          300: '#9ad284',
          400: '#77be5d',
          500: '#58a33f',
          600: '#42812f',
          700: '#356328',
          800: '#2e5024',
          900: '#264020',
          950: '#12250e',
        },

      },
    },
  },
  plugins: [],
} satisfies Config;
