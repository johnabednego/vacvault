/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
          nav_bg:"url('/src/components/Nav/assets/nav_bg.svg')",
        },
      screens: {
        'xm': '500px',
      },
    },
  },
  plugins: [],
}