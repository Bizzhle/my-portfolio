module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    listStyleType: {
      none: 'none',

     disc: 'disc',

     decimal: 'decimal',

     square: 'square',

     roman: 'upper-roman',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
