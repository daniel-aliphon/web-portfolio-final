/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animationDelay: {
        15000: "15000ms",
        18000: "18000ms",
      },

      colors: {
        text: "#010d13",
        background: "#e7f7fe",
        primary: "#0066FF",
        "comp-primary": "#FF6700",
        secondary: "#c7affd",
        accent: "#4606db",
        "dark-text": "#ecf8fe",
        "dark-background": "#011118",
        "dark-primary": "#052fd6",
        "dark-secondary": "#190250",
        "dark-accent": "#6424f9",
      },

      keyframes: {
        floating: {
          "0% ": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-1000px) rotate(720deg)",
            opacity: "0.3",
          },
        },
      },

      animation: {
        float: "floating 25s infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
