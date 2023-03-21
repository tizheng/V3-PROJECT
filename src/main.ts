import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import 'vant/lib/index.css'
import './styles/main.css'
import './font/iconfont.css'
import '@/utils/vant'
import './permission'
import components from './components'
const app = createApp(App)
app.use(components)
app.use(pinia)
app.use(router)
app.mount('#app')
