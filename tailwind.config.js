/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        ply: {
          dark: "#18110b",
          footer: "#120b06",
          gold: "#c88a38",
          goldHover: "#b5792a",
          goldLight: "#f4e9d7",
          bg: "#f6f4f0",
          card: "#ffffff",
          border: "#e5e1d8",
          text: "#221a14",
          muted: "#665e56",
        }
      }
    },
  },
  plugins: [],
}
