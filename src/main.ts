import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from '@/router'

// CSS import

// create app
const app = createApp(App)

// pinia
const pinia = createPinia()
app.use(pinia)

// router
app.use(router)

app.mount('#app')
