/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10B981', // Green as primary
          light: '#34D399',
          dark: '#059669',
        },
        secondary: {
          DEFAULT: '#64748B', // Slate as secondary
          light: '#94A3B8',
          dark: '#475569',
        },
      },
    },
  },
  plugins: [],
}

