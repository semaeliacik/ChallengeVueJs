import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
