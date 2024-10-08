// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    app: {
        // baseURL: '/Nuxt3Bootstrap5AppDemo/', // baseURL: '/<repository>/'
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            script: [
                // { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' }
            ],
            link: [
                // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' },
                // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css' }
            ]
        }
    },
    modules: [
        '@vueuse/nuxt',
        '@nuxt/content',
        'usebootstrap',
        '@formkit/nuxt',
    ],
    css: [
        "bootstrap/scss/bootstrap.scss"
    ],
    vite: {
        define: {
          "process.env.DEBUG": false,
        }},
    components: [{
        path: '~/components/',
        pathPrefix: false,
      }]
});
