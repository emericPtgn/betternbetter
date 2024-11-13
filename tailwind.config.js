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
          100: "#FDE8E9",
          200: "#FBD5D7",
          300: "#F6A7AA",
          400: "#F2787E",
          500: "#ED4950",
          600: "#E91C24",
          700: "#BE131A",
          800: "#900E14",
          900: "#610A0D",
        },
        blue : {
          DEFAULT : '#64C4CB',
          100: "#FBFEFE",
          200: "#D5EFF1",
          300: "#AFE0E4",
          400: "#89D2D7",
          500: "#64C4CB",
          600: "#3FB3BB",
          700: "#328E95",
          800: "#256A6F",
          900: "#184549",
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

