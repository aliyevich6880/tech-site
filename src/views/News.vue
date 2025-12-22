<template>
  <div class="news-page">
    <!-- Hero Section -->
    <section
      class="relative w-full h-96 md:h-[500px] flex items-center justify-center overflow-hidden"
    >
      <!-- Background Image -->
      <img
        src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600"
        alt="News Hero"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/40"></div>

      <!-- Animated Particles -->
      <div class="absolute inset-0">
        <div
          v-for="i in 15"
          :key="i"
          class="absolute bg-white/10 rounded-full animate-pulse"
          :style="{
            width: Math.random() * 150 + 30 + 'px',
            height: Math.random() * 150 + 30 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 3 + 's',
            animationDuration: Math.random() * 4 + 3 + 's',
          }"
        ></div>
      </div>

      <div
        class="relative z-10 bg-white/20 backdrop-blur-2xl p-8 md:p-12 rounded-3xl text-center text-white max-w-4xl mx-4 border border-white/30 shadow-2xl"
      >
        <div class="inline-block mb-4">
          <span
            class="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg"
          >
            📰 So'nggi Yangiliklar
          </span>
        </div>
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-black mb-4 drop-shadow-lg"
        >
          Yangiliklar
        </h1>
        <p class="text-lg md:text-xl lg:text-2xl text-white/90 font-light">
          Texnikumimizdagi so'nggi yangiliklar va tadbirlar haqida ma'lumot
        </p>
      </div>
    </section>

    <!-- Search and Filter Section -->
    <section
      class="py-8 bg-white/50 backdrop-blur-sm sticky top-20 z-40 border-b border-gray-200"
    >
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
          <!-- Search -->
          <div class="w-full md:w-96">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Yangilik qidirish..."
                class="w-full px-4 py-3 pl-12 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all bg-white/80 backdrop-blur-sm"
              />
              <svg
                class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>

          <!-- Sort Options -->
          <div class="flex gap-3">
            <button
              @click="sortBy = 'newest'"
              :class="[
                'px-4 py-2 rounded-xl font-semibold transition-all',
                sortBy === 'newest'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                  : 'bg-white/60 text-gray-700 hover:bg-white'
              ]"
            >
              Eng yangi
            </button>
            <button
              @click="sortBy = 'oldest'"
              :class="[
                'px-4 py-2 rounded-xl font-semibold transition-all',
                sortBy === 'oldest'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                  : 'bg-white/60 text-gray-700 hover:bg-white'
              ]"
            >
              Eng eski
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- News Grid -->
    <section
      class="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden"
    >
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute inset-0"
          style="
            background-image: radial-gradient(
              circle at 2px 2px,
              #6366f1 1px,
              transparent 0
            );
            background-size: 40px 40px;
          "
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-16">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
          <p class="mt-4 text-gray-600">Yuklanmoqda...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-16">
          <div class="bg-red-50 border border-red-200 rounded-xl p-6 max-w-lg mx-auto">
            <h3 class="text-xl font-bold text-red-700 mb-2">Xatolik yuz berdi</h3>
            <p class="text-red-600 mb-4">{{ error }}</p>
            <button 
              @click="fetchNews"
              class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Qayta urinish
            </button>
          </div>
        </div>

        <!-- Content -->
        <template v-else>
          <!-- Results Count -->
          <div class="text-center mb-12">
            <h2
              class="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Barcha Yangiliklar
            </h2>
            <p class="text-gray-600 text-lg">
              {{ filteredNews.length }} ta yangilik topildi
            </p>
          </div>

          <!-- News Cards Grid -->
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="(news, index) in paginatedNews"
              :key="news._id || index"
              @click="openModal(news)"
              class="group bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-indigo-500/20 cursor-pointer border border-white/50"
            >
              <!-- Image -->
              <div class="relative overflow-hidden h-56">
                <img
                  :src="news.img || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400'"
                  :alt="news.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>

                <!-- Date Badge -->
                <div class="absolute top-4 right-4">
                  <span
                    class="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full shadow-lg"
                  >
                    {{ formatDate(news.publishedAt) }}
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="p-6">
                <h3
                  class="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2"
                >
                  {{ news.title }}
                </h3>
                <p class="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {{ news.description }}
                </p>

                <!-- Footer -->
                <div
                  class="flex items-center justify-between pt-4 border-t border-gray-200"
                >
                  <div class="flex items-center gap-2 text-sm text-gray-500">
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>{{ formatTime(news.publishedAt) }}</span>
                  </div>
                  <button
                    class="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all"
                  >
                    <span>Batafsil</span>
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="filteredNews.length === 0" class="text-center py-16">
            <div
              class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              Hech narsa topilmadi
            </h3>
            <p class="text-gray-600">Qidiruv so'rovingizni o'zgartiring</p>
          </div>

          <!-- Load More Button -->
          <div v-if="filteredNews.length > displayCount" class="text-center mt-12">
            <button
              @click="loadMore"
              class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <span>Ko'proq yuklash</span>
              <svg
                class="w-5 h-5 group-hover:translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </button>
          </div>
        </template>
      </div>
    </section>

    <!-- Modal -->
    <transition name="modal">
      <div
        v-if="selectedNews"
        @click="closeModal"
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div
          @click.stop
          class="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          <!-- Modal Image -->
          <div class="relative h-64 md:h-96">
            <img
              :src="selectedNews.img || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800'"
              :alt="selectedNews.title"
              class="w-full h-full object-cover"
            />
            <button
              @click="closeModal"
              class="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg
                class="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="p-6 md:p-8">
            <div class="flex items-center gap-3 mb-4 text-sm text-gray-500">
              <span>📅 {{ formatDate(selectedNews.publishedAt) }}</span>
              <span>•</span>
              <span>🕒 {{ formatTime(selectedNews.publishedAt) }}</span>
            </div>

            <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              {{ selectedNews.title }}
            </h2>

            <div class="prose prose-lg max-w-none">
              <p class="text-gray-700 leading-relaxed whitespace-pre-line">
                {{ selectedNews.description }}
              </p>
            </div>

            <!-- Modal Footer -->
            <div class="mt-8 pt-6 border-t border-gray-200 flex justify-end">
              <button
                @click="closeModal"
                class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import api from '@/services/api';

export default {
  name: 'News',
  setup() {
    const searchQuery = ref('');
    const sortBy = ref('newest');
    const newsList = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const displayCount = ref(9);
    const selectedNews = ref(null);

    const filteredNews = computed(() => {
      let filtered = [...newsList.value];

      if (searchQuery.value.trim() !== '') {
        const query = searchQuery.value.toLowerCase().trim();
        filtered = filtered.filter(n => {
          const title = (n.title || '').toLowerCase();
          const description = (n.description || '').toLowerCase();
          return title.includes(query) || description.includes(query);
        });
      }

      filtered.sort((a, b) => {
        const dateA = new Date(a.publishedAt);
        const dateB = new Date(b.publishedAt);
        return sortBy.value === 'newest' ? dateB - dateA : dateA - dateB;
      });

      return filtered;
    });

    const paginatedNews = computed(() => filteredNews.value.slice(0, displayCount.value));

    const formatDate = (date) => {
      if (!date) return "Noma'lum";
      const d = new Date(date);
      const months = ['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentabr','Oktabr','Noyabr','Dekabr'];
      return `${d.getDate()} ${months[d.getMonth()]}`;
    };

    const formatTime = (date) => {
      if (!date) return '';
      const d = new Date(date);
      const now = new Date();
      const diffDays = Math.floor((now - d) / (1000*60*60*24));
      if (diffDays === 0) return 'Bugun';
      if (diffDays === 1) return 'Kecha';
      if (diffDays < 7) return `${diffDays} kun oldin`;
      return formatDate(date);
    };

    const loadMore = () => displayCount.value += 9;

    const openModal = (news) => {
      selectedNews.value = news;
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      selectedNews.value = null;
      document.body.style.overflow = '';
    };

    const fetchNews = async () => {
      loading.value = true;
      error.value = null;
      try {
        const res = await api.get('/api/news');
        if (Array.isArray(res.data)) newsList.value = res.data;
        else if (res.data.news) newsList.value = res.data.news;
        else if (res.data.data) newsList.value = res.data.data;
        else newsList.value = [];
      } catch(err) {
        error.value = err.response?.data?.message || err.message || "Noma'lum xatolik";
        newsList.value = [];
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchNews();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return {
      searchQuery,
      sortBy,
      newsList,
      loading,
      error,
      displayCount,
      selectedNews,
      filteredNews,
      paginatedNews,
      formatDate,
      formatTime,
      loadMore,
      openModal,
      closeModal,
      fetchNews
    };
  }
};
</script>



<style scoped>
.news-page {
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

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.9);
}
</style>