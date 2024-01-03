/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens:{
      'md': '960px'
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
