import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      /**
       * Import Aliases in Vite
       * @see https://vueschool.io/articles/vuejs-tutorials/import-aliases-in-vite/
       */
      '@' : path.resolve(__dirname, './src')
    },
  },
  plugins: [vue()]
})
