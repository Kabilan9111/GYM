/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#a3ff12",
        darkbg: "#0b0f19",
      },
    },
  },
  plugins: [],
};