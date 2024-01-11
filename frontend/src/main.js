import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import { MapsPlugin } from '@syncfusion/ej2-vue-maps'
import './styles/main.css'

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

createApp(App).use(vuetify).use(VueLazyload, {
  preLoad: 1.3,
  error: 'loadding',
  loading: require('@/assets/calendario-icon.svg'),
  attempt: 1
}).use(router).use(MapsPlugin).mount('#app')
