/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'media560': '560px',
        'media440': '440px'
      },
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("nav-show", ".nav-show&");
    }),
    plugin(function({ addVariant }) {
      addVariant("home", ".home&");
    }),
  ],
}

