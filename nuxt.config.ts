import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'pathe'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/styles/global.scss'
  ],
  alias: {
    'images': resolve(__dirname, './assets/images'),
    'styles': resolve(__dirname, './assets/styles'),
    'data': resolve(__dirname, './assets/other/data')
  }
})
