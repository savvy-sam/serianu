/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,svg,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        explosion1: 'url("/explosion_1.jpg")',
        starsPurple: 'url("/stars_purple.avif")',
        stars: 'url("/stars.avif")',
      } 
    },
  },
  plugins: [],
}
