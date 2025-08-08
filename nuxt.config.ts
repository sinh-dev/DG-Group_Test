// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    scanPageMeta: false,
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },
  vite: {
    define: {
      global: 'globalThis'
    },
    optimizeDeps: {
      include: ['@fortawesome/vue-fontawesome']
    }
  },
  nitro: {
    esbuild: {
      options: {
        target: 'es2022'
      }
    }
  }
})
