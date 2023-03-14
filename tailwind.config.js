/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./{pages,components}/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@headlessui/tailwindcss')],
}
