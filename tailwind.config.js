/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        button: "#F0F2F5",
        primary: "#1877F2"
      }
    },
  },
  plugins: [],
}

