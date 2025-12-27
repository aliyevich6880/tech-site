<template>
  <nav
    class="fixed w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg transition-all duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <!-- Logo -->
        <router-link to="/" class="rounded-full">
          <img
            src="@/assets/Gemini.png"
            alt="Payariq tumani 2-son texnikumi"
            class="logo-img"
          />
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-1">
          <router-link
            v-for="item in menuItems"
            :key="item.name"
            :to="item.path"
            class="px-5 py-2.5 rounded-xl font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 relative overflow-hidden group"
          >
            <span class="relative z-10">{{ item.name }}</span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
            ></div>
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-3 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all active:scale-95 focus:ring-4 focus:ring-indigo-500/30"
        >
          <svg
            class="h-6 w-6 text-gray-800 transition-transform duration-300"
            :class="{ 'rotate-90': isOpen }"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isOpen"
        class="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20 shadow-lg"
      >
        <router-link
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          @click="closeMenu"
          class="block px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white transition-all duration-300 font-medium border-b border-white/10 last:border-b-0"
        >
          {{ item.name }}
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false,
      menuItems: [
        { name: "Bosh sahifa", path: "/" },
        { name: "Yo'nalishlar", path: "/sections" },
        { name: "O'qituvchilar", path: "/teachers" },
        { name: "Yangiliklar", path: "/news" },
        { name: "Aloqada bo'lish", path: "/contact" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
  watch: {
    $route() {
      this.closeMenu();
    },
  },
};
</script>

<style scoped>
/* Active link style */
.router-link-active {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
}
.logo-img {
  height: 50px; /* Logotip o'lchamini loyihaga moslang */
  width: auto;
  object-fit: contain;
  border-radius: 50%;
}

/* Smooth backdrop blur for better performance */
@supports (backdrop-filter: blur(20px)) {
  nav {
    backdrop-filter: blur(20px);
  }
}

@supports not (backdrop-filter: blur(20px)) {
  nav {
    background: rgba(255, 255, 255, 0.95);
  }
}
</style>
