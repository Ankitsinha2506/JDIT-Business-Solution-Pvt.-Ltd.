/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0056b3',
        secondary: '#6c757d',
        accent: '#17a2b8',
        dark: '#343a40',
        light: '#f8f9fa'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}