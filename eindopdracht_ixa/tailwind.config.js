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
      lightBlue: {
        800: '#1C6E89',
        700: '#4A90E2',
        600: '#5CACEE',
        500: '#87CEFA',
      },
      steelBlue: {
        800: '#0E3A4E',
        700: '#205D7A',
        600: '#2E6E9E',
        500: '#4682B4',
      },
      slateGray: {
        800: '#3F4E5F',
        700: '#506988',
        600: '#5E738A',
        500: '#708090',
      },
      silverGray: {
        800: '#787878',
        700: '#999999',
        600: '#ADADAD',
        500: '#C0C0C0',
      },
      mintGreen: {
        800: '#1E7329',
        700: '#3CB371',
        600: '#45C76D',
        500: '#98FB98',
      },

      orange: {
        800: '#FFA500',
        700: '#FFB366',
        600: '#FFC040',
        500: '#FFD700',
        400: '#EEB795',
      },

      standard:{
        white: '#FFFFFF',
        brokenWhite: '#F6F6F6',
        black: '#000000',
        grey: '#364442',
        beige: '#F8EBD5',
      },
    },
  },
  plugins: [],
}

