import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as bootstrap from 'bootstrap'
import './assets/main.scss'



createApp(App).use(bootstrap).use(store).use(router).mount('#app')
