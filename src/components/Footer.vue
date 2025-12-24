<template>
  <footer
    class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
  >
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 2px 2px,
            white 1px,
            transparent 0
          );
          background-size: 40px 40px;
        "
      ></div>
    </div>

    <!-- Gradient Overlay -->
    <div
      class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    ></div>

    <!-- Main Footer Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-16">
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        <!-- Logo & About -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3 mb-4">
            <div
              class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <span class="text-white font-bold text-xl">TC</span>
            </div>
            <h2
              class="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              Tech College
            </h2>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            Zamonaviy ta'lim va kuchli mutaxassislar tayyorlashga qaratilgan
            texnikumimiz o'quvchilar uchun eng yaxshi sharoitlarni yaratadi.
          </p>

          <!-- Social Media -->
          <div class="flex gap-3 pt-4">
            <a
              href="https://www.facebook.com/aliyevich8"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 active:scale-95 group"
            >
              <svg
                class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a
              href="https://t.me/aliyevich8"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 active:scale-95 group"
            >
              <svg
                class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/al1yevich_8/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 active:scale-95 group"
            >
              <svg
                class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3
            class="text-xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Bo'limlar
          </h3>
          <ul class="space-y-3">
            <li v-for="link in links" :key="link.name">
              <router-link
                :to="link.path"
                class="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
              >
                <span
                  class="w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"
                ></span>
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3
            class="text-xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Aloqa
          </h3>
          <ul class="space-y-4">
            <li
              class="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
            >
              <svg
                class="w-5 h-5 mt-1 text-indigo-400 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span
                >Qumchuq MFY, Furqat ko'cha 4-bino</span
              >
            </li>
            <li
              class="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
            >
              <svg
                class="w-5 h-5 mt-1 text-indigo-400 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <a href="tel:+998979239001" class="hover:underline"
                >+998 97-923-90-01</a
              >
            </li>
            <li
              class="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
            >
              <svg
                class="w-5 h-5 mt-1 text-indigo-400 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <a href="mailto:pt2texnikum@gmail.com" class="hover:underline"
                >pt2texnikum@gmail.com</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="relative z-10 border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-gray-400 text-sm text-center md:text-left">
            © {{ currentYear }} Tech College. Barcha huquqlar himoyalangan.
          </p>
          <div class="flex gap-6 text-sm">
            <a href="#" class="text-gray-400 hover:text-white transition-colors"
              >Maxfiylik siyosati</a
            >
            <a href="#" class="text-gray-400 hover:text-white transition-colors"
              >Foydalanish shartlari</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div
      class="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"
    ></div>
    <div
      class="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
    ></div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      links: [
        { name: "Home", path: "/" },
        { name: "O'qituvchilar", path: "/teachers" },
        { name: "Yangiliklar", path: "/news" },
        { name: "Yo'nalishlar", path: "/sections" },
        { name: "Aloqa", path: "/contact" },
      ],
    };
  },
};
</script>

<style scoped>
/* Smooth hover transitions */
a {
  position: relative;
}

a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #6366f1, #8b5cf6);
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}
</style>
