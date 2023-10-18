/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animationDelay: {
        11000: "11000ms",
        12000: "12000ms",
        13000: "13000ms",
        14000: "14000ms",
        15000: "15000ms",
        16000: "16000ms",
        17000: "17000ms",
        18000: "18000ms",
        19000: "19000ms",
        20000: "20000ms",
        21000: "21000ms",
        22000: "22000ms",
        23000: "23000ms",
      },

      colors: {
        text: "#010d13",
        background: "#e7f7fe",
        primary: "#0066FF",
        secondary: "#c7affd",
        accent: "#4606db",
        "dark-text": "#ecf8fe",
        "dark-background": "#011118",
        "dark-primary": "#052fd6",
        "dark-secondary": "#190250",
        "dark-accent": "#6424f9",
      },

      keyframes: {
        "floating-clockwise": {
          "0% ": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "0.5",
          },
          "100%": {
            transform: "translateY(-800px) rotate(720deg)",
            opacity: "0",
          },
        },

        "floating-anti_clockwise": {
          "0% ": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "0.5",
          },
          "100%": {
            transform: "translateY(-800px) rotate(-720deg)",
            opacity: "0",
          },
        },

        disapearing: {
          "0% ": {
            borderRadius: "0%",
          },
          "100%": {
            borderRadius: "50%",
            opacity: "0",
          },
        },
      },

      animation: {
        "float-clockwise": "floating-clockwise 25s infinite linear",
        "float-anti_clockwise": "floating-anti_clockwise 25s infinite linear",
        disapear: "disapearing 2s linear",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
