/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        one: "#fecda6",
        two: "#ff5b22",
      },
      spacing: {
        350: "350px",
      },
      boxShadow: {
        cards: " 10px 20px 20px 20px rgba(0, 0, 0, 0.1)",
      },
    },
  },

  plugins: [],
};
