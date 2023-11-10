/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "641px",

        md: "769px",

        lg: "1025px",

        xl: "1281px",
      },

      fontFamily: {
        primary: ["Playpen Sans", "cursive"],
        secondary: ["Tilt Neon", "sans-serif"],
        tertiary: ["Handlee", "cursive"],
        test: ["K2D", "sans-serif"],
      },

      animationDelay: {
        8500: "8500ms",
        17000: "17000ms",
      },

      colors: {
        text: "#010d13",
        background: "#e7f7fe",
        foreground: "NULL",
        primary: "#0066FF",
        secondary: "#c7affd",
        accent: "#4606db",
        "dark-text": "#ecf8fe",
        "dark-background": "#011118",
        "dark-foreground": " #111827",
        "dark-primary": "#052fd6",
        "dark-secondary": "#190250",
        "dark-accent": "#6424f9",
      },

      keyframes: {
        "floating-clockwise": {
          "0% ": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "0.6",
          },
          "100%": {
            transform: "translateY(-130vh) rotate(720deg)",
            opacity: "0.3",
          },
        },

        "floating-anti_clockwise": {
          "0% ": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "0.6",
          },
          "100%": {
            transform: "translateY(-130vh) rotate(-720deg)",
            opacity: "0.3",
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
