/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,svg,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        gaming: 'url("/gaming_background.jpg")',
        starsPurple: 'url("/stars_purple.avif")',
        site: 'url("/site-bg.svg")',
        stars: 'url("/stars.avif")',
      } 
    },
  },
  plugins: [],
}
