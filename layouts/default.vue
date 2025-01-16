<template>
  <div>
    <div class="header-wrapper h-[72px] md:h-[90px]">
      <Header ref="header" />
    </div>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  methods: {
    linkSmooth(e) {
      const href = e.getAttribute('href')
      if (href.length < 2) return

      const el = document.querySelector(href)
      if (!el) return

      e.addEventListener('click', (e) => {
        e.preventDefault()

        history.pushState({}, '', href)

        const headerSize = document
          .querySelector('.header-wrapper')
          .getBoundingClientRect().height
        const top =
          el.getBoundingClientRect().top + window.scrollY - headerSize - 50
        window.scroll({
          top,
          behavior: 'smooth',
        })
        this.$refs.header.showMobileNav = false
      })
    },
  },
  mounted() {
    document
      .querySelectorAll('a[href^="#"]')
      .forEach(this.linkSmooth.bind(this))
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
