/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1877F2",
        button: "#F0F2F5",
        button2: "#E4E6EB",
        warning: "#F02849",
        back: "#BCC0C4",
        abuabu: "#8a8d91"
      }
    },
  },
  plugins: [],
}

