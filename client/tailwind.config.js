/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      "myPrimary" :"#3bb77e"
    },
    extend: {},
    screens: {
      'xl': { 'max': '1200px' },
      'lg': { 'max': '1080px' },
      'md-lg': { 'max': '991px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '576px' },
      'xs': { 'max': '480px' },
      '2xs': { 'max': '340px' },
    }
  },
  plugins: [],
}