/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary1': '#648374',
        'primary2': '#FFFFFF',
        'secondary1': '#EAE9D2',
        'secondary2': '#2B2D22',
        'secondary3': '#608074'
      },
      fontFamily: {
        'archivo': ['Archivo', 'sans-serif']
      }
    },
  },
  plugins: [],
}
