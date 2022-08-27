import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BootstrapVue3 from 'bootstrap-vue-3'

import App from './App.vue'
import router from './router'

import './scss/styles.scss'

const app = createApp(App)

app.use(createPinia())
app.use(BootstrapVue3)
app.use(router)

app.mount('#app')
