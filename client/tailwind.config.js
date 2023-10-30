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
      },
      animation: {
        'outer-spin': 'custom-spin 1s ease-in-out infinite',
        'middle-spin': 'custom-spin 2s ease-in-out infinite',
        'inner-spin': 'custom-spin 2s ease-in-out infinite',
      },
      keyframes: {
        'custom-spin': {
          '0%': {
            transform: 'translate(-50%, -50%) rotate(0deg)',
          },
          '100%': {
            transform: 'translate(-50%, -50%) rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
