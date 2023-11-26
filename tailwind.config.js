/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'dataImg': "url('./components/dataimg.jpg')",
        'cookieJar': "url('./components/cookieJar.jpg')",
        'phonePic': "url('./components/phonePic.jpg')",
      }
    },
  },
  plugins: [],
}
