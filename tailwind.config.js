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
    extend: {
      backgroundImage: theme => ({
        'home-bg': "url('images/maxresdefault.jpg')",
      }),
      fontFamily: {
        'bree-serif': '"Bree serif", serif',
        'roboto-slab': '"Roboto Slab", serif',
        'pangolin': '"Pangolin", serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
