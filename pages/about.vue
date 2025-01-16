<template>
  <div>
    <div class="container">
      <div class="relative bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div
            class="relative z-10 pb-8 bg-white sm:pb-8 md:pb-16 lg:max-w-2xl lg:w-full lg:pb-20 xl:pb-28"
          >
            <svg
              class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main
              class="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-14 lg:pt-16 lg:px-8"
            >
              <div class="sm:text-center lg:text-left">
                <h1
                  class="text-4xl tracking-tight leading-none font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                >
                  <span class="block xl:inline">making events better</span>
                  <span class="block text-primary-600 xl:inline"
                    >for everyone</span
                  >
                </h1>
                <p
                  class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                >
                  We believe that SaaS is the answer to the challenges that the
                  event industry faces when it comes to ordering, payment and
                  loyalty. Frontrow provides the software platform that takes
                  care of visitor and organizer convenience while using data to
                  improve events every single time.
                </p>
              </div>
            </main>
          </div>
        </div>

        <transition
          enter-active-class="transition-opacity ease-out duration-200"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity ease-in duration-150"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
          appear
        >
          <div
            v-show="true"
            class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
          >
            <img
              class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://frontrow.tech/wp-content/uploads/2019/09/nachtlab-temp.jpg"
              alt=""
            />
          </div>
        </transition>
      </div>
    </div>

    <div class="container">
      <div class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2
              class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >
              Meet our team
            </h2>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  /* @apply min-h-screen flex justify-center items-center text-center mx-auto; */
  @apply mx-auto;
}
</style>
