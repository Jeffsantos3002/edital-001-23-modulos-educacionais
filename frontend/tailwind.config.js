/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens:{
      'md': '960px'
    },
    colors:{
      'greenFanese': '#28DC55',
      'roxo': '#6F51D6',
      'roxoEscuro': '#6951BF',
      'footer': '#292D32',
      'gray': '#666666'
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      leagueEspartan: ['League Spartan', 'sans-serif']
    },
    extend: {
    }
  },
  plugins: []
}
