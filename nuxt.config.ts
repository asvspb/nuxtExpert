import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { strict: true },
  css: ['vuetify/lib/styles/main.sass', '~/assets/scss/main.scss'],
  modules: ['@pinia/nuxt', '@nuxt/content'],
  nitro: {
    compatibilityDate: '2025-12-26'
  },
  vite: {
    plugins: [vuetify()],
    define: { 'process.env.DEBUG': false },
    css: {
      preprocessorOptions: {
        scss: { additionalData: '@use "~/assets/scss/variables.scss";' }
      }
    }
  },
  build: { transpile: ['vuetify'] }
})