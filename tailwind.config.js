/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          10: "#e6f1f2",
          1000: "#003c3b",
          1100: "#002928",
        },
      },
    },
  },
  plugins: [],
};
