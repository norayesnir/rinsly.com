// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: [
    '@nuxtjs/apollo', 
    'nuxt-icon', 
    '@pinia/nuxt',
    '@nuxtjs/device',
  ],

  app: {
    head: {
      htmlAttrs: {
        class: 'dark-mode'
      }
    }
  },

  // Add apollo client config
  apollo: {
    clients: {
      prepr: './apollo/prepr.ts',
    },
  },

  buildModules: [
    '@nuxtjs/composition-api'
  ],

  // If deploying with Vercel, add config below
  build: {
    transpile: ["tslib"],
  },

  

  css: ['~/assets/scss/global.scss'],
})