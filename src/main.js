import { createApp } from 'vue'
import { setup } from 'twind/shim'
import { tw } from 'twind'

import App from '~/layouts/App/App.vue'

import { __config } from '~/styles/generic/config'

setup(__config)

const app = createApp(App)

app.config.globalProperties.$tw = tw

app.mount('#app')
