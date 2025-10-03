/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      animation: {
        float: "float 15s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "0.7",
          },
          "33%": {
            transform: "translateY(-20px) rotate(120deg)",
            opacity: "1",
          },
          "66%": {
            transform: "translateY(10px) rotate(240deg)",
            opacity: "0.5",
          },
        },
      },
    },
  },
  plugins: [],
};
