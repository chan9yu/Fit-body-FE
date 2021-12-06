const isProduction = process.env.NODE_ENV === 'production'

export default {
  head: {
    title: '헬스기구전문 브랜드 Fitody',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap' }
    ]
  },
  css: [
  ],
  styleResources: {
    scss: ['~/assets/scss/style.scss']
  },
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Noto Sans KR'
      }
    }
  },
  modules: [
    '@nuxtjs/axios'
  ],
  build: {
  },
  server: {
    port: isProduction ? null : 3000
  },
  env: {
    baseURL: isProduction
      ? 'https://bodyfit-server.herokuapp.com'
      : 'http://localhost:8080'
  }
}
