export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Header2 } from '../..\\components\\Header2.vue'
export { default as HomeAlternatingFeatures } from '../..\\components\\Home\\AlternatingFeatures.vue'
export { default as HomeGetInTouch } from '../..\\components\\Home\\GetInTouch.vue'
export { default as HomeGradientFeatures } from '../..\\components\\Home\\GradientFeatures.vue'
export { default as HomeHero } from '../..\\components\\Home\\Hero.vue'
export { default as HomeLogoCloud } from '../..\\components\\Home\\LogoCloud.vue'
export { default as HomeStats } from '../..\\components\\Home\\Stats.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
