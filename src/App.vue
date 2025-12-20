<template>
  <div class="app-container" :class="currentSeason">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content with Fixed Page Transitions -->
    <router-view v-slot="{ Component }">
      <transition 
        name="page" 
        mode="out-in"
      >
        <component :is="Component" :key="$route.fullPath" />
      </transition>
    </router-view>

    <!-- Footer -->
    <Footer />

    <!-- Scroll to Top Button -->
    <transition name="fade">
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 animate-bounce right-8 z-50 w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
        aria-label="Scroll to top"
      >
        <svg 
          class="w-6 h-6 group-hover:-translate-y-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </transition>

    <!-- Loading Overlay -->
    <transition name="fade">
      <div 
        v-if="isLoading" 
        class="fixed inset-0 z-[9999] bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"
      >
        <div class="text-center center">
          <div class="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center mb-6 animate-bounce shadow-2xl">
            <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-xl">TC</span>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-white mb-2">Tech College</h2>
          <div class="flex gap-2 justify-center">
            <div class="w-2 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 0s"></div>
            <div class="w-2 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
            <div class="w-2 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      showScrollTop: false,
      isLoading: true,
      currentSeason: 'winter'
    }
  },
  methods: {
    handleScroll() {
      this.showScrollTop = window.scrollY > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    detectSeason() {
      const month = new Date().getMonth() + 1
      if (month >= 3 && month <= 5) this.currentSeason = 'spring'
      else if (month >= 6 && month <= 8) this.currentSeason = 'summer'
      else if (month >= 9 && month <= 11) this.currentSeason = 'autumn'
      else this.currentSeason = 'winter'
    }
  },
  mounted() {
    // Detect season
    this.detectSeason()

    // Add scroll listener
    window.addEventListener('scroll', this.handleScroll)

    // Hide loading after page loads
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
/* Import Tailwind & Custom CSS */
@import './assets/main.css';

/* Global Styles */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Loading Animation */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 1s ease-in-out infinite;
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #6366f1, #8b5cf6);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #4f46e5, #7c3aed);
}

/* Disable text selection on buttons */
button {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Focus styles for accessibility */
*:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}

/* Prevent horizontal scroll */
body {
  overflow-x: hidden;
}
</style>