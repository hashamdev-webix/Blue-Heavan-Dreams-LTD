/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#002E50", dark: "#022237" },
        green: { DEFAULT: "#ADEA9C", dark: "#7FCF6E" },
        steel: "#34607F",
        silver: "#AEB8BF",
        offwhite: "#F5F8FA",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      container: { center: true, padding: "1rem" },
    },
  },
  plugins: [],
};
