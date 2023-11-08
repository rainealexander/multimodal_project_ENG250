/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'dataImg': "url('./components/dataimg.jpg')",
      }
    },
  },
  plugins: [],
}
