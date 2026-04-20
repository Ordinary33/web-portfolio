// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pip-green': '#00ff00',
        'pip-green-dim': 'rgba(0, 255, 0, 0.2)',
        'pip-dark': '#000000',
      },
      fontFamily: {
        terminal: ['"VT323"', 'monospace'],
      },
      boxShadow: {
        'crt': '0 0 10px rgba(20, 217, 17, 0.7), inset 0 0 15px rgba(20, 217, 17, 0.2)',
      },
      dropShadow: {
        'text-glow': '0 0 1px rgba(20, 217, 17, 1)',
      }
    },
  },
  plugins: [],
}