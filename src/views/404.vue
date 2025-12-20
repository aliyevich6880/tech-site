<template>
  <div
    class="not-found-page min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden"
  >
    <!-- Animated Background -->
    <div class="absolute inset-0">
      <div
        v-for="i in 30"
        :key="i"
        class="absolute bg-white/10 rounded-full animate-pulse"
        :style="{
          width: Math.random() * 200 + 50 + 'px',
          height: Math.random() * 200 + 50 + 'px',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animationDelay: Math.random() * 3 + 's',
          animationDuration: Math.random() * 5 + 3 + 's',
        }"
      ></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
      <!-- 404 Animation Container -->
      <div class="mb-12 relative">
        <!-- Main 404 Text -->
        <div
          class="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-white/20 leading-none select-none"
        >
          404
        </div>

        <!-- Floating Elements -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="relative">
            <!-- Sad Face Icon -->
            <div
              class="w-32 h-32 md:w-40 md:h-40 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl animate-bounce"
            >
              <svg
                class="w-16 h-16 md:w-20 md:h-20 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Card -->
      <div
        class="bg-white/20 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl"
      >
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-lg"
        >
          Sahifa Topilmadi
        </h1>

        <p
          class="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan.
          Bosh sahifaga qaytib, kerakli ma'lumotni toping.
        </p>

        <!-- Action Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <router-link
            to="/"
            class="group inline-flex items-center gap-3 px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <svg
              class="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            <span>Bosh sahifaga qaytish</span>
          </router-link>

          <button
            @click="goBack"
            class="group inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-xl text-white border-2 border-white/30 rounded-2xl font-bold hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
              ></path>
            </svg>
            <span>Orqaga qaytish</span>
          </button>
        </div>

        <!-- Quick Links -->
        <div class="mt-12 pt-8 border-t border-white/30">
          <p class="text-white/80 mb-4 font-medium">Tez havolalar:</p>
          <div class="flex flex-wrap gap-3 justify-center">
            <router-link
              v-for="link in quickLinks"
              :key="link.path"
              :to="link.path"
              class="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-xl text-sm font-medium hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-8 text-white/70 text-sm">
        <p>Agar muammo davom etsa, biz bilan bog'laning:</p>
        <a
          href="mailto:info@techcollege.uz"
          class="text-white font-semibold hover:underline"
        >
          info@techcollege.uz
        </a>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div
      class="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"
    ></div>
    <div
      class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
    ></div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      quickLinks: [
        { name: "Bosh sahifa", path: "/" },
        { name: "Yo'nalishlar", path: "/sections" },
        { name: "O'qituvchilar", path: "/teachers" },
        { name: "Yangiliklar", path: "/news" },
        { name: "Aloqa", path: "/contact" },
      ],
    };
  },
  methods: {
    goBack() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else {
        this.$router.push("/");
      }
    },
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>

<style scoped>
.not-found-page {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Bounce animation for icon */
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-bounce {
  animation: bounce 2s ease-in-out infinite;
}

/* Floating animation for background bubbles */
@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

.bg-white\/10 {
  animation: float linear infinite;
}
</style>
