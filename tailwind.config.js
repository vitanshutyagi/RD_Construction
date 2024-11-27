/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '0px',    // Custom breakpoint for screens from 0px
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Add more custom breakpoints if needed
      },
      colors: {
        navy: '#0a2f59',
      },
    },
  },
  plugins: [],
}

