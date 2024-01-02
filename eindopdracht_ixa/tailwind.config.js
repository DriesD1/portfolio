/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      purple:{
        800: '#190482',
        700: '#7752FE',
        600: '#8E8FFA',
        500: '#C2D9FF',
      },

      standard:{
        white: '#FFFFFF',
        black: '#000000',
      },
    },
  },
  plugins: [],
}

