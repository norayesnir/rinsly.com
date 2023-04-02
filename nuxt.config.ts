// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@nuxt/devtools',
    '@nuxtjs/html-validator',
    'nuxt-gtag',
  ],

  gtag: {
    id: 'G-XXXXXXXXXX'
  },

  css: [
    '~/assets/scss/main.scss'
  ]
})
