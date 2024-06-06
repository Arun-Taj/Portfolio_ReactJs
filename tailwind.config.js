/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      signature:["Great Vibes"],
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-size-adjust-auto': {
          '-webkit-text-size-adjust': 'auto',
        },
        '.text-size-adjust-none': {
          '-webkit-text-size-adjust': 'none',
        },
        '.text-size-adjust-100': {
          '-webkit-text-size-adjust': '100%',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}