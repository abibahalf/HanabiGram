/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./App.{ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        active: "#09637E",
        inactive: "#7AB2B2",
        background: "#EBF4F6",
        danger: "red",
      },
      fontFamily: {
        regular: ["MontserratRegular"],
        title: ["Cookies"],
        semibold: ["MontserratSemiBold"],
      },
    },
  },
  plugins: [],
};
