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
      'footer': '#292D32',
      'gray': '#707070',
      'placeholderColor': '#545454'
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    },
    extend: {
      spacing: {
        '353': '22rem',
      }
    }
  },
  plugins: []
}
