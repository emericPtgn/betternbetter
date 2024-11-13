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
        blue : {
          DEFAULT : '#64C4CB'
        },
        newWhite : {
          100 : "#F4F4F5"
        }
      }, 
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"]
    },
    backgroundImage: {
      'hero-pattern': "url('/src/ressources/illustrations/Rectangle_214.svg')",
    }
  },
  plugins: [],
}

