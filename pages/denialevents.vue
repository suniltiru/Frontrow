<template>
  <div>
    <div class="w-full bg-white">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <img
          src="https://storage.googleapis.com/fc7d3092-f320-46c0-80e7-413185fe59cd/images/logo-620499d7d2.png"
          class="max-h-[44px] md:max-h-[70px]"
        />
      </div>
    </div>
    <div class="bg-gray-800">
      <div
        class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between"
      >
        <div class="max-w-xl">
          <h2
            class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            Denial Events
          </h2>
          <p class="mt-5 text-xl text-gray-400">
            Get ready to party, by downloading the app or ordering your tickets
            online.
          </p>
        </div>
        <div
          class="w-full max-w-sm mx-auto font-medium text-gray-300 flex justify-between lg:flex-col mt-6 lg:mt-0"
        >
          <div>
            <a href="#">
              <img src="~/assets/denial/app_store.png" class="w-48" />
            </a>
          </div>
          <div class="ml-4 lg:ml-0 lg:mt-4">
            <a href="#">
              <img src="~/assets/denial/google_play.png" class="w-48" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Events -->
    <div class="bg-gray-50 overflow-hidden">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2
              class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
            >
              Events
            </h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div
            class="mt-12 w-full mx-auto flex gap-5 snap-x snap-mandatory overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-4"
          >
            <div
              v-for="post in posts"
              :key="post.title"
              class="flex flex-col rounded-lg border border-gray-200 overflow-hidden snap-center sm:snap-start flex-shrink-0 w-80"
            >
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  :src="post.imageUrl"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-bold text-denial">
                    {{ post.date }}
                  </p>
                  <a :href="post.href" class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                      {{ post.title }}
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      {{ post.description }}
                    </p>
                  </a>
                </div>

                <button
                  class="bg-denial-gradient mt-4 rounded-lg py-2 text-white font-bold"
                  @click="orderModal = true"
                >
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Events -->

    <div class="bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2
              class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
            >
              Upgrade your party to the next level
            </h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Planning to come with a group? Send us an email to order a table
              or package deals.
            </p>
            <a
              href="#"
              class="inline-block transition-colors bg-white text-denial hover:text-white hover:bg-denial-gradient text-xl border-2 border-denial rounded-xl px-6 py-4 mt-4"
              >mail@denialevents.com</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Buy Tickets -->
    <transition leave-active-class="duration-300">
      <div
        class="fixed z-10 inset-0 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        v-show="orderModal"
      >
        <div
          class="flex min-h-screen text-center sm:block sm:px-6 lg:px-8"
          style="font-size: 0"
        >
          <transition
            :duration="{ enter: 300, leave: 200 }"
            enter-active-class="ease-out duration-300"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="ease-in duration-200"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              class="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-500 sm:bg-opacity-75 sm:transition-opacity"
              aria-hidden="true"
              v-show="orderModal"
            ></div>
          </transition>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >

          <transition
            :duration="{ enter: 300, leave: 200 }"
            enter-active-class="ease-out duration-300"
            enter-class="opacity-0 scale-105"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="ease-in duration-200"
            leave-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-105"
          >
            <div
              class="flex text-base text-left transform transition w-full sm:inline-block max-w-3xl sm:my-8 sm:align-middle"
              v-show="orderModal"
            >
              <form
                class="w-full relative flex flex-col bg-white pt-6 pb-8 overflow-hidden sm:pb-6 sm:rounded-lg lg:py-8"
              >
                <div
                  class="flex items-center justify-between px-4 sm:px-6 lg:px-8"
                >
                  <h2 class="text-lg font-medium text-gray-900">
                    Ticket order
                  </h2>
                  <button
                    type="button"
                    class="text-gray-400 hover:text-gray-500"
                    @click="orderModal = false"
                  >
                    <span class="sr-only">Close</span>
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

                <section aria-labelledby="cart-heading">
                  <h2 id="cart-heading" class="sr-only">Shopping cart</h2>

                  <ul
                    role="list"
                    class="divide-y divide-gray-200 px-4 sm:px-6 lg:px-8"
                  >
                    <li class="py-8 flex text-sm sm:items-center">
                      <img
                        src="https://images.fangage.com/fc7d3092-f320-46c0-80e7-413185fe59cd/content/28/cover-d41d8cd98f.jpg?rect=402-0-1052-1052&w=512"
                        alt="Entry ticket for Escape the Matrix Ibiza"
                        class="flex-none w-24 h-24 rounded-lg border border-gray-200 sm:w-32 sm:h-32"
                      />
                      <div
                        class="ml-4 flex-auto grid gap-y-3 gap-x-5 grid-rows-1 grid-cols-1 items-start sm:ml-6 sm:flex sm:gap-0 sm:items-center"
                      >
                        <div class="flex-auto row-end-1 sm:pr-6">
                          <h3 class="font-medium text-gray-900">
                            <a href="#">Escape the Matrix Ibiza</a>
                          </h3>
                          <p class="mt-1 text-gray-500">Entry ticket</p>
                        </div>
                        <p
                          class="row-end-2 row-span-2 font-medium text-gray-900 sm:ml-6 sm:order-1 sm:flex-none sm:w-1/3 sm:text-right"
                        >
                          &euro;90.00
                        </p>
                        <div
                          class="flex items-center sm:flex-none sm:block sm:text-center"
                        >
                          <label for="quantity-0" class="sr-only"
                            >Quantity, Escape the Matrix Ibiza ticket</label
                          >
                          <select
                            id="quantity-0"
                            name="quantity-0"
                            class="block max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                          </select>

                          <!-- <button
                            type="button"
                            class="ml-4 font-medium text-indigo-800 hover:text-indigo-700 sm:ml-0 sm:mt-2"
                          >
                            <span>Remove</span>
                          </button> -->
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>

                <div
                  class="grid sm:grid-cols-2 mt-auto px-6 lg:px-8 w-full gap-4 lg:gap-6"
                >
                  <section aria-labelledby="summary-heading">
                    <h2 id="summary-heading" class="sr-only">
                      Contact information
                    </h2>

                    <div>
                      <label
                        for="phone"
                        class="block text-sm font-medium text-gray-700"
                        >Phone number</label
                      >
                      <div class="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autocomplete="tel"
                          class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-denial focus:border-denial sm:text-sm"
                        />
                      </div>
                    </div>
                  </section>

                  <section aria-labelledby="summary-heading">
                    <div class="bg-gray-50 p-6 sm:p-8 sm:rounded-lg">
                      <h2 id="summary-heading" class="sr-only">
                        Order summary
                      </h2>

                      <div class="flow-root">
                        <dl class="-my-4 text-sm divide-y divide-gray-200">
                          <div class="py-4 flex items-center justify-between">
                            <dt class="text-base font-medium text-gray-900">
                              Order total
                            </dt>
                            <dd class="text-base font-medium text-gray-900">
                              &euro;90.00
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </section>
                </div>

                <div class="mt-8 flex justify-end px-4 sm:px-6 lg:px-8">
                  <button
                    type="submit"
                    class="bg-white border-2 border-denial rounded-xl shadow-sm py-3 px-4 text-sm font-medium text-denial hover:bg-denial-gradient hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-denial"
                    @click.prevent=""
                  >
                    Continue to Payment
                  </button>
                </div>
              </form>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  layout: 'denial',

  head: {
    title: 'Denial Events',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Denial Events. Arts & entertainment. From Miami with love. Powered by Frontrow',
      },
    ],
  },

  data() {
    return {
      orderModal: false,
      posts: [
        {
          title: 'Event 1',
          href: '#',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          imageUrl:
            'https://images.fangage.com/fc7d3092-f320-46c0-80e7-413185fe59cd/content/2/cover-d41d8cd98f.jpg?rect=668-0-2665-2665&w=512',
        },
        {
          title: 'Event 2',
          href: '#',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
          date: 'Mar 10, 2020',
          datetime: '2020-03-10',
          imageUrl:
            'https://images.fangage.com/fc7d3092-f320-46c0-80e7-413185fe59cd/content/29/cover-d41d8cd98f.jpg?rect=420-0-1322-1322&w=512',
        },
        {
          title: 'Event 3',
          href: '#',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://images.fangage.com/fc7d3092-f320-46c0-80e7-413185fe59cd/content/25/cover-d41d8cd98f.jpg?rect=408-0-1048-1048&w=512',
        },
        {
          title: 'Event 4',
          href: '#',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://images.fangage.com/fc7d3092-f320-46c0-80e7-413185fe59cd/content/23/cover-d41d8cd98f.jpg?rect=404-0-1046-1046&w=512',
        },
        {
          title: 'Event 5',
          href: '#',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://images.fangage.com/fc7d3092-f320-46c0-80e7-413185fe59cd/content/16/cover-d41d8cd98f.jpg?rect=402-0-1052-1052&w=512',
        },
        {
          title: 'Event 6',
          href: '#',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://images.fangage.com/fc7d3092-f320-46c0-80e7-413185fe59cd/content/16/cover-d41d8cd98f.jpg?rect=402-0-1052-1052&w=512',
        },
        {
          title: 'Event 7',
          href: '#',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://images.fangage.com/fc7d3092-f320-46c0-80e7-413185fe59cd/content/8/cover-d41d8cd98f.jpg?rect=0-0-2668-2668&w=512',
        },
        {
          title: 'Event 8',
          href: '#',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },
        {
          title: 'Event 9',
          href: '#',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },
        {
          title: 'Event 10',
          href: '#',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },
        {
          title: 'Event 11',
          href: '#',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
