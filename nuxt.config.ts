// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  googleFonts: {
    families: {
      Inconsolata: true
    }
  },
  modules: [
    '@nuxtjs/tailwindcss', 
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ]
})
