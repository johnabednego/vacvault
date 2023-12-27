/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
          nav_bg:"url('/src/components/Nav/assets/nav_bg.svg')",
          about_woman:"url('/src/pages/About/assets/woman.png')",
          holding_bag:"url('/src/pages/Services/assets/holding_bag.png')",
        },
      screens: {
        'xs':"350px",
        'xm': '500px',
      },
      boxShadow: {
        'input': '10px 10px 40px 4px rgba(0, 0, 0, 0.15)',
        'hero': '10px 10px 40px 4px rgba(0, 0, 0, 0.25)',
        'customer': '0px 1px 15px 0px rgba(0, 0, 0, 0.25)',
        'dashboard': '0px 4px 16px 0px rgba(0, 0, 0, 0.25)',

      },
    },
  },
  plugins: [],
}