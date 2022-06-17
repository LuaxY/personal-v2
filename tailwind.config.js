/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // main: {
        //   primary: "var(--main-primary)",
        //   "primary-hover": "var(--main-primary-hover)",
        //   "bg-light": "var(--main-bg-light)",
        //   "bg-dark": "var(--main-bg-dark)",
        //   "btn-text": "var(--main-btn-text)",
        //   "btn-text-hover": "var(--main-btn-text-hover)",
        //   text: "var(--main-text)",
        // },
        emerald: {
          10: "#e6f1f2",
          1000: "#003c3b",
        },
      },
    },
  },
  plugins: [],
};
