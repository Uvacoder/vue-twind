import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import macrosPlugin from 'vite-plugin-babel-macros'

export default defineConfig({
	plugins: [vue(), vueJsx(), macrosPlugin()],
})
