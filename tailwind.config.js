/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vanguard: {
          red: '#C4151C',
          darkRed: '#A31419',
          navy: '#132257',
          darkNavy: '#0A1439',
          gray: '#F3F3F3',
          darkGray: '#333333',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 