/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs1: "330px",
      xs2: "640px",
      ...defaultTheme.screens
    },
    extend: {
      
    },
  },
  plugins: [],
}
