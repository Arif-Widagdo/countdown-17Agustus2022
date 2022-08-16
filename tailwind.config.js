/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    container : {
      center :true,
    },
    extend: {
      fontFamily : {
        inter : ['Inter', 'sans-serif'],
        ubuntu : ['Ubuntu', 'sans-serif']
      },
    },
  },
  plugins: [],
}
