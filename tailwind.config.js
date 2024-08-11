/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#46A4C6",
        "base-blue": "#1E293C",
        "dark-blue": "#111729",
      },
      boxShadow: {
        "light-blue": "0px 0px 15px 1px rgba(0, 0, 0, 0.75)",
        "darker-black": "0px 1rem 2rem 0px rgba(0, 0, 0, 0.50)",
      },
      backgroundImage: {
        "red-gradient": "linear-gradient(to right, #1E293C, #b92b27)",
        "purple-gradient": "linear-gradient(to right, #1E293C, #6627b9)",
        "orange-gradient": "linear-gradient(to right, #1E293C, #b95a27)",
        "green-gradient": "linear-gradient(to right, #1E293C, #27b94b)",
      },
    },
  },
  plugins: [],
};
