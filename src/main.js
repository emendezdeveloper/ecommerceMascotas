// ✅ Importar Tailwind
// import './assets/main.css'
// import 'primevue/resources/themes/lara-light-blue/theme.css'
// import 'primevue/resources/primevue.min.css'
// import 'primeicons/primeicons.css'   
// import './style.css';
// import 'primeflex/primeflex.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia'

// import PrimeVue from 'primevue/config'


const app = createApp(App)

// app.use(PrimeVue)   
app.use(createPinia())
app.use(router)
app.mount('#app')

