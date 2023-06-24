/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/index.html"],
  darkMode: "class",
  theme: {
    extend: {

      colors: {
        'portfolio-background-color': '#ECECEE',
        'portfolio-primary-color-grey': '#BEBEC6',
        'portfolio-primery-color-red': '#E22222',
      },

      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        SourceSansPro: ["Source Sans Pro", "sans-serif"],
    },

    },
  },
  plugins: [],
}

