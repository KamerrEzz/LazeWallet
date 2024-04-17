/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hopbush: {
          50: "#faf5f8",
          100: "#f7ecf3",
          200: "#f0dae8",
          300: "#e4bdd5",
          400: "#d294b9",
          500: "#bf6e9d",
          600: "#ac5683",
          700: "#93436b",
          800: "#7a3a5a",
          900: "#67344c",
          950: "#3d1a2b",
        },
      },
    },
  },
  plugins: [],
};
