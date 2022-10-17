import { createApp } from 'vue'
import './style.css'
import router from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
