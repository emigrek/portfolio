/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        typescript: '#2f74c0'
      },
      animation: {
        sway: 'sway 15s ease-in-out infinite'
      },
      keyframes: {
        sway: {
          '0%, 100%': { 
            transform: 'rotate(0deg)',
            transform: 'scale(1.1)'
          },
          '50%': { 
            transform: 'rotate(10deg)',
            transform: 'scale(1)',
          },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
