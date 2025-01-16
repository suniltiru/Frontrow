<template>
  <footer class="bg-gray-50" aria-labelledby="footerHeading">
    <h2 id="footerHeading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto pb-8 px-4 sm:px-6lg:px-8">
      <div
        class="mt-12 border-t border-gray-200 pt-8 flex items-center justify-center lg:mt-16"
      >
        <p class="text-base text-gray-400 mt-0 order-1">
          Made with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="inline h-4 w-4 -mt-1 text-pink-700 heartbeat"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
          >
            <path
              d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
              fill="currentColor"
            ></path>
          </svg>
          in Amsterdam - &copy; Frontrow |
          <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.heartbeat {
  animation: heartbeat 1.2s ease infinite;
}

@-webkit-keyframes heartbeat {
  0% {
    -webkit-transform: scale(0.8);
  }
  10% {
    -webkit-transform: scale(1);
  }
  30% {
    -webkit-transform: scale(0.8);
  }
  40% {
    -webkit-transform: scale(0.95);
  }
  100% {
    -webkit-transform: scale(0.8);
  }
}

@keyframes heartbeat {
  0% {
    transform: scale(0.8);
  }
  10% {
    transform: scale(1);
  }
  30% {
    transform: scale(0.8);
  }
  40% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>
