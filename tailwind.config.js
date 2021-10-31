const {coolGray, cyan, green,purple, white, black, red, blue} = require('tailwindcss/colors')
module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors:{  
      gray:coolGray,
      primary:cyan,
      green:green,
      blue:blue,
      white:white,
      black:black,
      red:red,
      purple:purple
    },
    extend: {
      fontFamily:{
        sans:['Inter','sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-scroll-snap')
  ],
}
