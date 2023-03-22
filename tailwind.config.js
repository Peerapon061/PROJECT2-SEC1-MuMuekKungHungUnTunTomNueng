/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'boradWood': "url('src/img/greenboard.avif')",
        'WoodFloor': "url('src/img/WoodFloor.jpg')",
      },
      fontFamily: {
        'RampartOne': ['Rampart One', 'cursive'],
        'LilitaOne':['Zen Antique Soft', 'serif']
      },
    },
  },
  plugins: [require("daisyui")],
}
