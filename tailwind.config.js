module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Fira Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FB923C",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
