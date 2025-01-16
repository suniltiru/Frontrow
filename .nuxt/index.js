import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_73cb1cb2 from 'nuxt_plugin_plugin_73cb1cb2' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_recaptcha_7ec9b078 from 'nuxt_plugin_recaptcha_7ec9b078' // Source: .\\recaptcha.js (mode: 'all')
import nuxt_plugin_workbox_4b2f5fb1 from 'nuxt_plugin_workbox_4b2f5fb1' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_219c1331 from 'nuxt_plugin_metaplugin_219c1331' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_2643b8a5 from 'nuxt_plugin_iconplugin_2643b8a5' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_aos_254294c8 from 'nuxt_plugin_aos_254294c8' // Source: ..\\plugins\\aos.client (mode: 'client')
import nuxt_plugin_smoothscroll_9773d6ac from 'nuxt_plugin_smoothscroll_9773d6ac' // Source: ..\\plugins\\smoothscroll.client (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const store = null
  const router = await createRouter(ssrContext, config, { store })

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Frontrow - Customer Convenience Platform","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Mobile ordering, payment and loyalty for events and venues. A white-label SaaS platform; Integrated in your existing mobile apps, channels and ecosystem."},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Frontrow"},{"hid":"og:title","name":"og:title","content":"Frontrow - Customer Convenience Platform"},{"hid":"og:site_name","name":"og:site_name","content":"Frontrow - Customer Convenience Platform"},{"hid":"og:description","name":"og:description","content":"Mobile ordering, payment and loyalty for events and venues. A white-label SaaS platform; Integrated in your existing mobile apps, channels and ecosystem."},{"hid":"og:image","name":"og:image","content":"https:\u002F\u002Ffrontrow.tech\u002Fog-home-min.png"},{"hid":"og:image:width","name":"og:image:width","content":1200},{"hid":"og:image:height","name":"og:image:height","content":630},{"hid":"twitter:image","name":"twitter:image","content":"https:\u002F\u002Ffrontrow.tech\u002Fog-home-min.png"},{"hid":"twitter:image:width","name":"twitter:image:width","content":1200},{"hid":"twitter:image:height","name":"twitter:image:height","content":630}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Fcropped-fr-favicon-32x32.png","sizes":"32x32"},{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Fcropped-fr-favicon-192x192.png","sizes":"192x192"},{"rel":"apple-touch-icon","href":"\u002Fcropped-fr-favicon-180x180.png"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      errPageReady: false,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        nuxt.errPageReady = false
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_73cb1cb2 === 'function') {
    await nuxt_plugin_plugin_73cb1cb2(app.context, inject)
  }

  if (typeof nuxt_plugin_recaptcha_7ec9b078 === 'function') {
    await nuxt_plugin_recaptcha_7ec9b078(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_4b2f5fb1 === 'function') {
    await nuxt_plugin_workbox_4b2f5fb1(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_219c1331 === 'function') {
    await nuxt_plugin_metaplugin_219c1331(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_2643b8a5 === 'function') {
    await nuxt_plugin_iconplugin_2643b8a5(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_aos_254294c8 === 'function') {
    await nuxt_plugin_aos_254294c8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_smoothscroll_9773d6ac === 'function') {
    await nuxt_plugin_smoothscroll_9773d6ac(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
