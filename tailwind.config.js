/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        irishgrover: ["Irish Grover", "serif"],
        poppins: ["Poppins", "serif"]
      },
      colors: {
        lemonchiffon: "#FFFBC2",
        gold: "#FDD112",
        ivory: "#FEFCE8"
      },
      screens: {
        "mobile-tall-and-narrow": { 'raw': '(min-height: 800px) and (max-width: 500px)' },
      },
      boxShadow: {
        "input": "2px 2px 20px 4px rgba(0, 0, 0, .1)",
        "btn": "4px 4px 4px 0px rgba(0, 0, 0, .2)"
      },
    }
  },
  plugins: [],
}