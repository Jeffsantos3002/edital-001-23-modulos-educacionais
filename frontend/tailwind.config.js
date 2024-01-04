/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    borderRadius:{
      'card': '20px',
    },
    screens:{
      'md': '960px',
      'lg': '1288px',
      'xl': '1480px',
      '2xl':  '1778px'
    },
    colors:{
      'footer-black': '#323237',
      'footer-red': '#D2202C',
      'footer-gray': '#424146',
      'gray': '#707070',
      'placeholderColor': '#545454',
      'gray-container': '#F5F5F7',

    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      fontWeight: ['hover', 'focus'],
      spacing: {
        '353': '22rem',
        '644': '44rem',
      }
    }
  },
  plugins: []
}
