/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bitter: ["Bitter", "sans-serif"],
      },
    },
  },

  plugins: [require("tailwindcss/nesting")],
};
