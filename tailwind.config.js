module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FB923C",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
