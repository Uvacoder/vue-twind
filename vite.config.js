import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

export default defineConfig({
  server: {
    port: '4000',
  },
  plugins: [Vue(), VueJsx()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '/src'),
    },
  },
})
