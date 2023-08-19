import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(store).use(router).use(bootstrap).mount('#app')
