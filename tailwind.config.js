/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': 'rgb(236,227,180)',

        'amber': 'rgb(236,227,180)',
        'gray': 'rgb(55,55,60)',

        'dark': 'rgb(12,12,12)',
        'light': 'rgb(222,222,225)'
      }
    },
  },
  plugins: [],
}
