import { createApp } from 'vue'
import { setup } from 'twind/shim'
import { tw } from 'twind'
import { breakpoints } from './styles/variables'
import { px } from './utils/px'
import App from './components/App/App.vue'

setup({
  purge: ['./index.html', './src/**/*.{vue,js,jsx}'],
  darkMode: 'class',
  mode: 'silent',
  theme: {
    screens: {
      sm: px(breakpoints.sm),
      md: px(breakpoints.md),
      lg: px(breakpoints.lg),
      xl: px(breakpoints.xl),
      '2xl': px(breakpoints['2xl']),
    },
    extend: {
      backgroundColor: {
        primary: '#F3F4F6',
        secondary: '#374151',
        tertiary: '#CCCCCC',
        quaternary: '#333333',
      },
      transitionProperty: {
        transform: 'transform, top, right, bottom, left',
      },
    },
  },
})

const app = createApp(App)

app.config.globalProperties.$tw = tw

app.mount('#app')
