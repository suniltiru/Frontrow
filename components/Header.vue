<template>
  <header>
    <div class="bg-white fixed top-0 left-0 right-0 z-10">
      <div
        class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="/#" @click="scrollToTop">
            <span class="sr-only">Frontrow</span>
            <img
              class="h-6 w-auto"
              src="~/assets/FrontrowDeeppurple.svg"
              alt="Frontrow"
              width="339.69"
              height="61.38"
            />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden" v-if="$route.path === '/'">
          <button
            @click="showMobileNav = true"
            type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg
              class="h-6 w-6"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10" v-if="$route.path === '/'">
          <a
            href="#mobile"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Mobile
          </a>
          <a
            href="#safeorder"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Safe Order
          </a>
          <a
            href="#deposit"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Deposit
          </a>
        </nav>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <!-- <a
            href="#"
            class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Sign up
          </a> -->
          <a
            href="https://admin.frontrow.tech/"
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600"
          >
            Sign in
          </a>
        </div>
      </div>

      <transition
        enter-active-class="duration-200 ease-out"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-show="showMobileNav"
          class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div
            class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
          >
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <div>
                  <img
                    class="h-6 w-auto"
                    src="~/assets/FrontrowDeeppurple.svg"
                    alt="Frontrow"
                    width="339.69"
                    height="61.38"
                  />
                </div>
                <div class="-mr-2">
                  <button
                    @click="showMobileNav = false"
                    type="button"
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close menu</span>
                    <!-- Heroicon name: outline/x -->
                    <svg
                      class="h-6 w-6"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid grid-cols-1 gap-7">
                  <a
                    href="#mobile"
                    class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                  >
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-600 text-white"
                    >
                      <!-- Heroicon name: outline/inbox -->
                      <svg
                        class="h-6 w-6"
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
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Mobile
                    </div>
                  </a>

                  <a
                    href="#safeorder"
                    class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                  >
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-600 text-white"
                    >
                      <!-- Heroicon name: outline/annotation -->
                      <svg
                        class="h-6 w-6"
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
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Safe Order
                    </div>
                  </a>

                  <a
                    href="#health"
                    class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                  >
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-600 text-white"
                    >
                      <!-- Heroicon name: outline/chat-alt-2 -->
                      <svg
                        class="h-6 w-6"
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
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Health Check
                    </div>
                  </a>

                  <a
                    href="#deposit"
                    class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                  >
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-600 text-white"
                    >
                      <!-- Heroicon name: outline/question-mark-circle -->
                      <svg
                        class="h-6 w-6"
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
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Deposit
                    </div>
                  </a>

                  <p class="text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a
                      href="https://admin.frontrow.tech/"
                      class="text-pink-600"
                    >
                      Sign in
                    </a>
                  </p>
                </nav>
              </div>
            </div>
            <!-- <div class="py-6 px-5">
              <div class="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Partners
                </a>

                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Company
                </a>
              </div>
              <div class="mt-6">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:from-purple-700 hover:to-indigo-700"
                >
                  Sign up
                </a>
                <p class="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a href="#" class="text-gray-900"> Sign in </a>
                </p>
              </div>
            </div> -->
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    showMobileNav: false,
  }),

  methods: {
    scrollToTop(e) {
      if (this.$route.path === '/') {
        e.preventDefault()
        history.pushState({}, '', '#')
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    },
  },
}
</script>
