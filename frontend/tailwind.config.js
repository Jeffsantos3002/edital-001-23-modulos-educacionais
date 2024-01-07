/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    borderRadius:{
      'card': '20px',
    },
    screens:{
      'sm': '500px',
      'md': '960px',
      'lg': '1288px',
      'xl': '1480px',
      '2xl':  '1778px'
    },
    colors:{
      'footer-black': '#323237',
      'redAva': '#D2202C',
      'footer-gray': '#424146',
      'gray': '#707070',
      'gray-single': '#757575',
      'placeholderColor': '#545454',
      'gray-container': '#F5F5F7',
      'bgSlid': '#522D2D',

    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      fontWeight: ['hover', 'focus'],
      spacing: {
        '353': '22rem',
        '644': '44rem',
        '71': '4.5rem',
      }
    }
  },
  plugins: []
}
