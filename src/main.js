import { createApp } from 'vue'
import App from './App.vue'
import { __global } from './styles/globals'
import './styles/base.css'

__global()

createApp(App).mount('#app')
