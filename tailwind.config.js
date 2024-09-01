/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Roboto Mono Variable'", "monospace"],
        display: ['"Handjet Variable"', "system-ui"],
      },
      colors: {
        "brown-500": "#6C4E31",
        "beige-500": "#F6E6CB",
        "beige-600": "#E7D4B5",
        "teal-600": "#008081",
        "teal-500": "#329C9D",
      },
    },
  },
  plugins: [],
};
