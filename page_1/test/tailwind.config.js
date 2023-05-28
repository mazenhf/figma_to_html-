/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    screens: {
      sm: { max: "680px" },
      md: "680px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
