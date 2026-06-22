import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-monaco-editor'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  devtools: {
    enabled: import.meta.env.DEV
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2026-06-22',

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
