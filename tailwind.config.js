/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF0000', // Bright red from logo
          dark: '#E60000',
          light: '#FF3333',
          '50': '#fff0f0',
          '100': '#ffdcdc',
          '200': '#ffbdbd',
          '300': '#ff9191',
          '400': '#ff5757',
          '500': '#ff0000',
          '600': '#e60000',
          '700': '#cc0000',
          '800': '#b30000',
          '900': '#990000'
        },
        secondary: {
          DEFAULT: '#0066FF', // Bright blue from logo
          dark: '#0052CC',
          light: '#3385FF',
          '50': '#f0f7ff',
          '100': '#e0efff',
          '200': '#c0dfff',
          '300': '#8fc7ff',
          '400': '#55a6ff',
          '500': '#0066ff',
          '600': '#0052cc',
          '700': '#0047b3',
          '800': '#003d99',
          '900': '#003380'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};