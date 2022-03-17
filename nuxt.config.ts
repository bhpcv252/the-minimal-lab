import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    link: [
      {
        rel: 'stylesheet',
        href: 'assets/styles/global.scss'
      }
    ]
  }
})
