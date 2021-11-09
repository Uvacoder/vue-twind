import { createApp } from 'vue'
import { setup } from 'twind/shim'
import { tw } from 'twind'
import App from './App.vue'

setup({
  purge: ['./index.html', './src/**/*.{vue,js,jsx}'],
  darkMode: false,
  mode: 'silent',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
})

const app = createApp(App)

app.config.globalProperties.$tw = tw

app.mount('#app')
