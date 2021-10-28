const {coolGray, cyan, green, sky, white, black, red} = require('tailwindcss/colors')
module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors:{  
      gray:coolGray,
      primary:cyan,
      green:green,
      blue:sky,
      white:white,
      black:black,
      red:red,
    },
    extend: {
      fontFamily:{
        sans:['Inter']
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
