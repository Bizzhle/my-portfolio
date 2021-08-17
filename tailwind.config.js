module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    listStyleType: {
      none: "none",

      disc: "disc",

      decimal: "decimal",

      square: "square",

      roman: "upper-roman",
    },
    extend: {
      colors: {
        "dark-blue": "#132e30",
        "dark-brown": "#301513",
        "dark-yellow": "#111202",
      },
      backgroundImage: (theme) => ({
        "home-bg": "url('images/maxresdefault.webp')",
        "grad-bg": "url('images/pexel-grad.webp')",
      }),
      fontFamily: {
        "bree-serif": '"Bree serif", serif',
        "roboto-slab": '"Roboto Slab", serif',
        "roboto-condensed": '"Roboto Condensed", serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
