import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'

// Calendário
// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// animação
import 'animate.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: false,
        colors: {
          greenDark: '#2C4928',
          something: '#00ff00'
        }
      }
    }
  }
})

createApp(App).use(vuetify).use(router).mount('#app')
