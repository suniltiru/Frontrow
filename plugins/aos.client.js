import AOS from 'aos'

export default ({ app }) => {
  app.AOS = AOS.init({ disable: 'phone', once: true })
}
