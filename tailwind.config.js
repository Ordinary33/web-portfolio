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
        'pip-green': '#00ee00', 
        'pip-mid': '#008e00',
        'pip-dark': '#002f00',
        'pip-black': '#000000',
      },
      fontFamily: {
        terminal: ['"Monofonto"', 'monospace'],
      },
      boxShadow: {
        'crt': '0 0 4px rgba(0, 238, 0, 0.4), inset 0 0 5px rgba(0, 238, 0, 0.1)',
      },
      dropShadow: {
        'text-glow': '0 0 2px rgba(0, 238, 0, 0.6)',
      }
    },
  },
  plugins: [],
}