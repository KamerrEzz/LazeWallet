/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wisteria: {
          50: "#f7f6fc",
          100: "#f1eff8",
          200: "#e5e1f3",
          300: "#d2c8ea",
          400: "#baa9dc",
          500: "#a085cd",
          600: "#926ebf",
          700: "#7d57aa",
          800: "#69498e",
          900: "#573d75",
          950: "#38274e",
        },
      },
    },
  },
  plugins: [],
};
