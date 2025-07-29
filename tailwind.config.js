/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#9607CC",
        secondary: "#FE2E2F",
        accent: "#41B8D5",
        "dark-purple": "#210428",
        "light-purple": "#8B2EFF",
        "deep-blue": "#3A00AF",
        "lime-green": "#21CF15",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
