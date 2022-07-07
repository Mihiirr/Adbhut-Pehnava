const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lora", ...defaultTheme.fontFamily.sans],
        logo: ["'The Nautigal', cursive "],
      },
    },
  },
  plugins: [],
};
