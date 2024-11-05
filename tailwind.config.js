/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : {
          DEFAULT: "#ED4950",
          100: "#FF9999"
        },
      }, 
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"]
    },
    backgroundImage: {
      'hero-pattern': "url('/src/ressources/illustrations/layout_heroSection.svg')",
    }
  },
  plugins: [],
}

