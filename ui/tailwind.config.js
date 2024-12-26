/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dashboardMain: {
          // DEFAULT: '#F5F6FA',
          DEFAULT: '#E8EAF2',
          blue: '#4880FF',
          darkBlue: "#2366FF",
          blackish: "#404040",
          unhighlighted: "#565656",
          unhighlighted_2: "#F5F6FA",
          seperator: "#E0E0E0",
          pinkish: "#FF8F8F",
          purplish: "#9E8FFF",
        },
        primary: {
          DEFAULT: '#4880FF',
          light: '#2366FF',
          dark: '#059669',
        },
        secondary: {
          DEFAULT: '#202224', 
          light: '#94A3B8',
          dark: '#475569',
        },
      },
    },
  },
  plugins: [],
}

