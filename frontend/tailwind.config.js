/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens:{
      'md': '960px',
      'lg': '1262px',
      'xl': '1468px',
      '2xl':  '1778px'
    },
    colors:{
      'footer-black': '#323237',
      'footer-red': '#D2202C',
      'footer-gray': '#424146',
      'gray': '#707070',
      'placeholderColor': '#545454',

    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      fontWeight: ['hover', 'focus'],
      spacing: {
        '353': '22rem',
        '644': '40rem',
      }
    }
  },
  plugins: []
}
