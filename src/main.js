import { createApp } from 'vue'
import { createPinia } from "pinia";
import { routers } from "@/router";
import './assets/style/main.scss'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

const app = createApp(App)
const pinia = createPinia()


import errorImage from "@/assets/images/error.png";


app.use(VueLazyload, {
  error: errorImage
})
app.use(pinia)
app.use(routers)
app.mount('#app')

