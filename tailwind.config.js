/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',"./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    screens: {
      'laptop': '1000px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1300px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'boradWood': "url('src/img/greenboard.avif')",
        'WoodFloor': "url('src/img/WoodFloor.jpg')",
      },
      fontFamily: {
        'RampartOne': ['Rampart One', 'cursive'],
        'LilitaOne':['Zen Antique Soft', 'serif'],
        'Comfortaa':['Comfortaa', 'cursive'],
        'alfra':[ 'Alfa Slab One', 'cursive']
      },
    },
  },
  plugins: [require("daisyui")],
}
