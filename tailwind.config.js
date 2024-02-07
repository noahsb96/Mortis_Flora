/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      amatic: ['Amatic SC', 'Sans-Serif'],
      sans: ['Helvetica', 'Arial', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
