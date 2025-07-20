// import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        elegant: ['"Playfair Display"', "serif"],
        body: ['"Lora"', "serif"],
      },
      colors: {
        primary: {
          black: "#000000",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
