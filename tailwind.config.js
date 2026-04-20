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
        // Name your custom colors so you can use them easily!
        'pip-dark': '#051105',     // The plastic casing
        'pip-screen': '#0A1C0A',   // The glass background
        'pip-green': '#14D911',    // The glowing phosphor text/borders
      },
      fontFamily: {
        // Make sure you import this font in your index.html!
        terminal: ['"VT323"', 'monospace'], 
      },
      boxShadow: {
        // A custom glow effect for your borders
        'crt': '0 0 10px rgba(20, 217, 17, 0.7), inset 0 0 15px rgba(20, 217, 17, 0.2)',
      },
      dropShadow: {
        // A custom text glow
        'text-glow': '0 0 4px rgba(20, 217, 17, 1)',
      }
    },
  },
  plugins: [],
}