/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      dm: ['DM Serif Text', 'serif'],
      body: ['Inter', 'sans-serif'],
      heading: ['DM Serif Text', 'serif'],
      sans: ['Inter', 'sans-serif'],
      serif: ['DM Serif Text', 'serif'],
    },
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

