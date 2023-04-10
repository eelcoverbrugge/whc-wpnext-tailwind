/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Bebas Neue", "cursive"],
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        'primaryColor': '#292238',
        'secondaryColor': '#36374e',
        'tertiaryColor': '#cbcdef',
        'quaternaryColor': '#f7f8fd',
      },
    },
  },
  plugins: [],
};
