const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.snap-start': {
          'scroll-snap-align': 'start',
        },
        '.snap-center': {
          'scroll-snap-align': 'center',
        },
        '.snap-x': {
          'scroll-snap-type': 'x mandatory',
        },
      })
    }),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.pink,
        denial: 'rgb(247,193,51)',
      },
      backgroundImage: {
        'denial-gradient':
          'linear-gradient(270deg,rgba(231,201,130,1),rgba(247,193,51,1));',
      },
    },
  },
}
