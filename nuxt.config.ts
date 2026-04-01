// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-monaco-editor'
  ],

  // TODO: Enable ssr (need to make some component ClientOnly)
  ssr: false,

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-01-15',

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'js-yaml',
        'handlebars', // CJS
        'jszip', // CJS
        'prettier/standalone.js', // CJS
        'prettier/plugins/html',
        'prettier/plugins/postcss',
        'prettier/plugins/yaml'
      ]
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
