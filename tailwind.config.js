/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontSize: {
      'xs': '1.1vw',
      'sm': '3vw',
      'md': '14px',
      'max': '15.6px',
    },

    extend: {
      lineHeight: {
        'xs': '1.2vw',
        'sm': '3.2vw',
        'md': '16px',
        'max': '17px',
      },
      padding: {
        'xs': '1.1vw',
        'sm': '1.8vw',
        'md': '2.5vw',
        'max': '15.6px',
        'max2': '30px'
      },
      colors: {
        'white': 'rgb(236,227,180)',

        'amber': 'rgb(236,227,180)',
        'gray': 'rgb(55,55,60)',

        'dark': 'rgb(12,12,12)',
        'light': 'rgb(233,232,235)'
      },
    },
  },
  plugins: [],
}
