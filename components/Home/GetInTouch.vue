<template>
  <div class="relative bg-white" id="contact">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2"></div>
    </div>
    <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
      <div class="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
        <div class="max-w-lg mx-auto">
          <h2
            class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
          >
            Get in touch
          </h2>
          <!-- <p class="mt-3 text-lg leading-6 text-gray-500">

          </p> -->
          <dl class="mt-8 text-base text-gray-500">
            <div>
              <dt class="sr-only">Postal address</dt>
              <dd>
                <p>Noordeinde 124 E</p>
                <p>1121 AL Landsmeer</p>
              </dd>
            </div>
            <div class="mt-6">
              <dt class="sr-only">Phone number</dt>
              <dd class="flex">
                <!-- Heroicon name: outline/phone -->
                <svg
                  class="flex-shrink-0 h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span class="ml-3"> +31 20 – 771 72 72 </span>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">Email</dt>
              <dd class="flex">
                <!-- Heroicon name: outline/mail -->
                <svg
                  class="flex-shrink-0 h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span class="ml-3"
                  ><a
                    href="mailto:info@frontrow.tech"
                    class="text-pink-600 hover:text-pink-700"
                    >info@frontrow.tech</a
                  ></span
                >
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12"
      >
        <div class="max-w-lg mx-auto lg:max-w-none">
          <form
            action="https://formspree.io/f/mbjqlqvy"
            method="POST"
            class="grid grid-cols-1 gap-y-6"
            @submit.prevent="handleSubmit"
          >
            <div>
              <label for="full_name" class="sr-only">Full name</label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                autocomplete="name"
                required
                class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-pink-600 focus:border-pink-600 border-gray-300 rounded-md"
                placeholder="Full name"
              />
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-pink-600 focus:border-pink-600 border-gray-300 rounded-md"
                placeholder="Email"
              />
            </div>
            <div>
              <label for="phone" class="sr-only">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                autocomplete="tel"
                class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-pink-600 focus:border-pink-600 border-gray-300 rounded-md"
                placeholder="Phone"
              />
            </div>
            <div>
              <label for="message" class="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-pink-600 focus:border-pink-600 border-gray-300 rounded-md"
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:from-purple-700 hover:to-indigo-700"
                :disabled="sending"
              >
                Submit
              </button>
            </div>
            <div v-if="status">{{ status }}</div>
            <recaptcha />
            <small
              >This site is protected by reCAPTCHA and the Google
              <a href="https://policies.google.com/privacy">Privacy Policy</a>
              and
              <a href="https://policies.google.com/terms">Terms of Service</a>
              apply.
            </small>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    status: '',
    sending: false,
  }),
  methods: {
    async handleSubmit(event) {
      this.status = ''
      this.sending = true
      let data = new FormData(event.target)
      const token = await this.$recaptcha.getResponse()
      data.set('g-recaptcha-response', token)
      fetch(event.target.action, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }

          this.status =
            'Thank you for contacting us. We will get back to you soon!'
        })
        .catch(() => {
          this.status = 'Oops! There was a problem submitting your form'
        })
        .finally(() => {
          this.sending = false
          this.$recaptcha.reset()
        })
    },
  },
}
</script>
