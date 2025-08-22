import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cookie: ["Cookie", "cursive"],
        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        futuristicPink: "#FF00D4",
        neonCyan: "#00FFFF",
      },
      keyframes: {
        "slide-in-x": {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-in-x": "slide-in-x 0.4s ease-out",
      },
      perspective: {
        1000: "1000px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    screens: {
      ...defaultTheme.screens,
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
  },
  darkMode: "class",
  plugins: [],
};
