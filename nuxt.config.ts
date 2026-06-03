import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@vueuse/nuxt', '@nuxt/image'],

  components: {
    dirs: [
      {
        path: '~/components/sections',
        pathPrefix: false,
      },
      {
        path: '~/components/shared',
        pathPrefix: false,
      },
    ],
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['lucide-vue-next'],
    },
  },

  app: {
    head: {
      title: 'Fame College International School',
      htmlAttrs: { lang: 'en' },
      meta: [
        {
          name: 'description',
          content:
            'Fame College International School in Eket — Primary through A-Level, IGCSE, IELTS and online tutorials.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  image: {
    domains: ['images.unsplash.com'],
  },

  runtimeConfig: {
    public: {
      applicationFormUrl: process.env.NUXT_PUBLIC_APPLICATION_FORM_URL || '',
      applicationFormSecret: process.env.NUXT_PUBLIC_APPLICATION_FORM_SECRET || '',
    },
  },
})
