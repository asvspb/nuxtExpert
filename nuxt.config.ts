import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { strict: true },
  css: ['vuetify/lib/styles/main.sass', '~/assets/scss/main.scss'],
  modules: ['@pinia/nuxt', '@nuxt/content'],
  vite: {
    plugins: [vuetify()],
    define: { 'process.env.DEBUG': false },
    css: {
      preprocessorOptions: {
        scss: { additionalData: '@import "~/assets/scss/variables.scss";' }
      }
    }
  },
  build: { transpile: ['vuetify'] }
})