/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0f141f",
        surface: "#1a202c",
        muted: "#8a8f99",
        accent: "#ffffff",
      },
      fontFamily: {
      sans: ["Poppins", "sans-serif"],
      figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
