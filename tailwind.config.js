/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages-old/**/*.{js,ts,jsx,tsx}",
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
        'whiteText': '#ffffff',
        'blackText': '#000000',
        'darkPurple': '#292238',
        'charcoal': '#36374e',
        'soap': '#cbcdef',
        'ghostWhite': '#f7f8fd',
        'azureishWhite': '#d9dcf8',
      },
    },
  },
  plugins: [],
};
