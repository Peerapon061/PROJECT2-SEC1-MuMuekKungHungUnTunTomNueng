/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/.js",
  ],
  theme: {
    screens: {
      'sm': {'max': '840px'},
      'md': {'min': '841px'}
    },
    extend: {
      fontFamily: {
        'mali': [ 'Mali', 'cursive']
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require("daisyui")
]
}
