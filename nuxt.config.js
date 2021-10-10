export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Vladan Mihailovic',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Profesor sporta i fizicke kulture. Personalni trener. Spremanje sportista i rekreativaca' },
      { name: 'format-detection', content: 'telephone=no' },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'https://vladan.me/glavnaslika.jpg'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@vladan-me' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://vladan.me'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Vladan Mihailovic'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:'Profesor sporta i fizicke kulture. Personalni trener. Spremanje sportista i rekreativaca'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://vladan.me/glavnaslika.jpg'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://vladan.me'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Vladan Mihailovic'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Profesor sporta i fizicke kulture. Personalni trener. Spremanje sportista i rekreativaca'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://vladan.me/glavnaslika.jpg'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://vladan.me/glavnaslika.jpg'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Vladan Mihailovic'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
  ],

  fontawesome:{
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
