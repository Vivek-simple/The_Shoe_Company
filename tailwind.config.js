/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}

