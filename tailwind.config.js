/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': "#ee0181",
        "secondary": "#01ee91"
      },
      fontFamily: {
        'primary': ["Poppins", 'sans-serif'],
        "secondary": ['Inter', 'sans-serif'],
        "sec": ["Roboto Mono", 'monospace'],
      }


    },
  },
  plugins: [],
}