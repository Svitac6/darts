/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeRed: {
          DEFAULT: '#ff6347',
          light: '#ffa07a',
          dark: '#b22222',
        },
        themeBlue: {
          DEFAULT: '#4682b4',
          light: '#add8e6',
          dark: '#00008b',
        },
        themeGreen: {
          DEFAULT: '#32cd32',
          light: '#90ee90',
          dark: '#006400',
        },
      },
    },
  },
  plugins: [],
}

