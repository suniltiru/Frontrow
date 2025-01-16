const SITE_TITLE = 'Frontrow - Customer Convenience Platform'
const SITE_DESCRIPTION =
  'Mobile ordering, payment and loyalty for events and venues. A white-label SaaS platform; Integrated in your existing mobile apps, channels and ecosystem.'
const SOCIAL_IMAGE = 'https://frontrow.tech/og-home-min.png'
const SOCIAL_IMAGE_WIDTH = 1200
const SOCIAL_IMAGE_HEIGHT = 630

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: SITE_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: SITE_DESCRIPTION,
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'Frontrow',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: SITE_TITLE,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: SITE_TITLE,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: SITE_DESCRIPTION,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: SOCIAL_IMAGE,
      },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        content: SOCIAL_IMAGE_WIDTH,
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        content: SOCIAL_IMAGE_HEIGHT,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: SOCIAL_IMAGE,
      },
      {
        hid: 'twitter:image:width',
        name: 'twitter:image:width',
        content: SOCIAL_IMAGE_WIDTH,
      },
      {
        hid: 'twitter:image:height',
        name: 'twitter:image:height',
        content: SOCIAL_IMAGE_HEIGHT,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/cropped-fr-favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/cropped-fr-favicon-192x192.png',
        sizes: '192x192',
      },
      { rel: 'apple-touch-icon', href: '/cropped-fr-favicon-180x180.png' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['aos/dist/aos.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/aos.client', mode: 'client' },
    { src: '@/plugins/smoothscroll.client', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      '@nuxtjs/recaptcha',
      {
        hideBadge: true,
        version: 2,
        size: 'invisible',
      },
    ],
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [],
  },

  generate: {
    fallback: '404.html',
    minify: {
      removeRedundantAttributes: false,
    },
  },

  telemetry: false,

  publicRuntimeConfig: {
    recaptcha: {
      siteKey: '6Ld30hkbAAAAAO3XNY4neGkl1Bt_IQ0Wx1_bIUge',
    },
  },
}
