import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import BabelMacros from 'vite-plugin-babel-macros'
import path from 'path'

export default defineConfig({
  server: {
    port: '4000',
  },
  plugins: [Vue(), VueJsx(), BabelMacros()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '/src'),
    },
  },
})
