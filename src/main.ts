import './_main.sass'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import svgIcon from './config/webpack/svgIconContext'

svgIcon()

createApp(App)
  .use(router)
  .mount('#app')
