/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
