/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",

    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontSize: {
      'sm': ['2.3vw','2.6vw'],
      'reg': ['2.8vw','3.5vw'],
      'lg': ['4.5vw','5vw'],
      'xl': ['6vw','6.1vw'],
      'max': ['18px','24px'],
      'max2': ['24px','28px'],
      'max3': ['28px','31px'],
      'max4': ['34px','38px'],
    },

    extend: {
      // lineHeight: {
      //   'sm': '1.2vw',
      //   'sm': '3.3vw',
      //   'md': '16px',
      //   'max': '18px',
      // },
      padding: {
        'xs': '1.1vw',
        'sm': '1.8vw',
        'md': '2.5vw',
        'max': '15.6px',
        'max2': '30px',
      },
      spacing:{
        'vw':'6.5vw',
        'space1':'6.5vw',
        'space2':'12.5vw'
      },
      colors: {
        'white': 'rgb(236,227,180)',

        'amber': 'rgb(236,227,180)',
        'gray': 'rgb(55,55,60)',

        'dark': 'rgb(12,12,12)',
        // 'dark': 'rgb(55,55,55)',
        'light': 'rgb(233,232,235)'
      },
    },
  },
  plugins: [],
}
