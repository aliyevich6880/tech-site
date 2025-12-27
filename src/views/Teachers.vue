<template>
  <div class="teachers-page">
    <!-- Hero Section -->
    <section
      class="relative w-full h-96 md:h-[500px] flex items-center justify-center overflow-hidden"
    >
      <img
        src="@/assets/about.jpg"
        alt="Teachers Hero"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/40"></div>
      <div
        class="relative z-10 bg-white/20 backdrop-blur-2xl p-8 md:p-12 rounded-3xl text-center text-white max-w-4xl mx-4 border border-white/30 shadow-2xl"
      >
        <div class="inline-block mb-4">
          <span
            class="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg"
          >
            👨‍🏫 Bizning Jamoa
          </span>
        </div>
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-black mb-4 drop-shadow-lg"
        >
          O'qituvchilar
        </h1>
      </div>
    </section>

    <!-- Filter Section -->
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
                placeholder="O'qituvchi qidirish..."
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

          <!-- Filters -->
          <div class="flex flex-wrap gap-3 justify-center">
            <button
              v-for="dept in departments"
              :key="dept"
              @click="selectedDepartment = dept"
              :class="[ 
                'px-5 py-2.5 rounded-xl font-semibold transition-all duration-300',
                selectedDepartment === dept
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md hover:scale-105 border border-gray-200'
              ]"
            >
              {{ dept }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Teachers Section -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute inset-0"
          style="background-image: radial-gradient(circle at 2px 2px, #6366f1 1px, transparent 0); background-size: 40px 40px;"
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
              @click="fetchTeachers"
              class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Qayta urinish
            </button>
          </div>
        </div>

        <!-- Content -->
        <template v-else>
          <!-- Rahbariyat Section (Cards) -->
          <div v-if="allLeadership.length > 0" class="mb-20">
            <div class="text-center mb-12">
              <h2
                class="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              >
                Rahbariyat
              </h2>
              <p class="text-gray-600 text-lg">
                {{ allLeadership.length }} ta rahbar
              </p>
            </div>

            <!-- Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
              <div
                v-for="(teacher, index) in currentLeadershipPage"
                :key="teacher._id || index"
                class="group relative bg-white/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-indigo-500/20 cursor-pointer"
              >
                <div class="relative overflow-hidden h-56">
                  <img
                    :src="teacher.teacherImg || 'https://via.placeholder.com/300?text=Teacher'"
                    :alt="teacher.fullName"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div class="p-5">
                  <h3 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {{ teacher.fullName }}
                  </h3>
                  <p class="text-indigo-600 font-semibold text-sm">
                    {{ teacher.subject }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Carousel Controls - Rahbariyat -->
            <div v-if="leadershipTotalPages > 1" class="flex items-center justify-center gap-6 mt-8">
              <button
                @click="prevLeadershipPage"
                :disabled="leadershipCurrentPage === 1"
                :class="[
                  'p-3 rounded-xl transition-all duration-300',
                  leadershipCurrentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-110 hover:shadow-lg'
                ]"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              <div class="flex items-center gap-3">
                <span class="text-lg font-bold text-gray-800">
                  {{ leadershipCurrentPage }} / {{ leadershipTotalPages }}
                </span>
                <div class="flex gap-2">
                  <div
                    v-for="page in leadershipTotalPages"
                    :key="page"
                    :class="[
                      'h-2 rounded-full transition-all duration-300',
                      page === leadershipCurrentPage
                        ? 'w-8 bg-gradient-to-r from-indigo-600 to-purple-600'
                        : 'w-2 bg-gray-300'
                    ]"
                  ></div>
                </div>
              </div>

              <button
                @click="nextLeadershipPage"
                :disabled="leadershipCurrentPage === leadershipTotalPages"
                :class="[
                  'p-3 rounded-xl transition-all duration-300',
                  leadershipCurrentPage === leadershipTotalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-110 hover:shadow-lg'
                ]"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Fan O'qituvchilari Section (List Carousel) -->
          <div v-if="allTeachers.length > 0">
            <div class="text-center mb-12">
              <h2
                class="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                Fan O'qituvchilari
              </h2>
              <p class="text-gray-600 text-lg">
                {{ allTeachers.length }} ta o'qituvchi
              </p>
            </div>

            <!-- Carousel Controls Top -->
          

            <!-- List View with Animation -->
            <div class="max-w-4xl mx-auto">
              <transition name="slide-fade" mode="out-in">
                <div :key="teachersCurrentPage" class="space-y-4">
                  <div
                    v-for="(teacher, index) in currentTeachersPage"
                    :key="teacher._id || index"
                    class="group bg-white/60 backdrop-blur-xl rounded-2xl p-5 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    :style="{ animationDelay: `${index * 50}ms` }"
                  >
                    <div class="flex items-center gap-4">
                      <!-- Icon/Avatar -->
                      <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>

                      <!-- Info -->
                      <div class="flex-grow min-w-0">
                        <h3 class="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors truncate">
                          {{ teacher.fullName }}
                        </h3>
                        <p class="text-sm text-purple-600 font-semibold">
                          {{ teacher.subject }}
                        </p>
                      </div>

                      <!-- Arrow -->
                      <div class="flex-shrink-0">
                        <svg class="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
            <!-- Carousel Controls Bottom -->
            <div v-if="teachersTotalPages > 1" class="flex items-center justify-center gap-6 mb-6 mt-8">
              <button
                @click="prevTeachersPage"
                :disabled="teachersCurrentPage === 1"
                :class="[
                  'p-3 rounded-xl transition-all duration-300',
                  teachersCurrentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-110 hover:shadow-lg'
                ]"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                </svg>
              </button>

              <div class="flex items-center gap-3">
                <span class="text-lg font-bold text-gray-800">
                  {{ teachersCurrentPage }} / {{ teachersTotalPages }}
                </span>
                <div class="flex gap-2">
                  <div
                    v-for="page in teachersTotalPages"
                    :key="page"
                    :class="[
                      'h-2 rounded-full transition-all duration-300',
                      page === teachersCurrentPage
                        ? 'w-8 bg-gradient-to-r from-purple-600 to-pink-600'
                        : 'w-2 bg-gray-300'
                    ]"
                  ></div>
                </div>
              </div>

              <button
                @click="nextTeachersPage"
                :disabled="teachersCurrentPage === teachersTotalPages"
                :class="[
                  'p-3 rounded-xl transition-all duration-300',
                  teachersCurrentPage === teachersTotalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-110 hover:shadow-lg'
                ]"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="allLeadership.length === 0 && allTeachers.length === 0" class="text-center py-16">
            <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Hech narsa topilmadi</h3>
            <p class="text-gray-600">Qidiruv so'rovingizni o'zgartiring</p>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue';
import api from '@/services/api';

export default {
  name: 'Teachers',
  setup() {
    // States
    const searchQuery = ref('');
    const selectedDepartment = ref('Barchasi');
    const departments = ref(['Barchasi', 'Rahbariyat', 'Fan o\'qituvchilari']);
    const teachers = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const leadershipCurrentPage = ref(1);
    const teachersCurrentPage = ref(1);
    const ITEMS_PER_PAGE = 10;

    // Rahbariyatni aniqlash
    const isLeadership = (teacher) => {
      const val = ((teacher.department || '') + ' ' + (teacher.subject || '')).toLowerCase();
      return val.includes('direktor') || val.includes('rahbar') || 
             val.includes('boshqarma') || val.includes('hisobchi') || 
             val.includes('kutubxona') || val.includes('boshlig\'i') || 
             val.includes('kadrlar') || val.includes('psixolog') || 
             val.includes('bosh') || val.includes('uslubchi');
    };

    // Barcha rahbarlar
    const allLeadership = computed(() => {
      let filtered = teachers.value.filter(t => isLeadership(t));

      if (searchQuery.value.trim()) {
        const q = searchQuery.value.toLowerCase().trim();
        filtered = filtered.filter(t =>
          (t.fullName || '').toLowerCase().includes(q) ||
          (t.subject || '').toLowerCase().includes(q) ||
          (t.department || '').toLowerCase().includes(q)
        );
      }

      if (selectedDepartment.value === 'Fan o\'qituvchilari') {
        return [];
      }

      return filtered;
    });

    // Barcha oddiy o'qituvchilar
    const allTeachers = computed(() => {
      let filtered = teachers.value.filter(t => !isLeadership(t));

      if (searchQuery.value.trim()) {
        const q = searchQuery.value.toLowerCase().trim();
        filtered = filtered.filter(t =>
          (t.fullName || '').toLowerCase().includes(q) ||
          (t.subject || '').toLowerCase().includes(q) ||
          (t.department || '').toLowerCase().includes(q)
        );
      }

      if (selectedDepartment.value === 'Rahbariyat') {
        return [];
      }

      return filtered;
    });

    // Pagination calculations
    const leadershipTotalPages = computed(() => {
      return Math.ceil(allLeadership.value.length / ITEMS_PER_PAGE);
    });

    const teachersTotalPages = computed(() => {
      return Math.ceil(allTeachers.value.length / ITEMS_PER_PAGE);
    });

    const currentLeadershipPage = computed(() => {
      const start = (leadershipCurrentPage.value - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      return allLeadership.value.slice(start, end);
    });

    const currentTeachersPage = computed(() => {
      const start = (teachersCurrentPage.value - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      return allTeachers.value.slice(start, end);
    });

    // Navigation functions
    const nextLeadershipPage = () => {
      if (leadershipCurrentPage.value < leadershipTotalPages.value) {
        leadershipCurrentPage.value++;
      }
    };

    const prevLeadershipPage = () => {
      if (leadershipCurrentPage.value > 1) {
        leadershipCurrentPage.value--;
      }
    };

    const nextTeachersPage = () => {
      if (teachersCurrentPage.value < teachersTotalPages.value) {
        teachersCurrentPage.value++;
      }
    };

    const prevTeachersPage = () => {
      if (teachersCurrentPage.value > 1) {
        teachersCurrentPage.value--;
      }
    };

    // Reset pages
    const resetPages = () => {
      leadershipCurrentPage.value = 1;
      teachersCurrentPage.value = 1;
    };

    // API dan ma'lumot olish
    const fetchTeachers = async () => {
      loading.value = true;
      error.value = null;
      try {
        const res = await api.get('/api/teachers');
        if (Array.isArray(res.data)) {
          teachers.value = res.data;
        } else if (res.data.teachers) {
          teachers.value = res.data.teachers;
        } else if (res.data.data) {
          teachers.value = res.data.data;
        } else {
          teachers.value = [];
        }
        teachers.value.sort((a, b) => (a._id || '').localeCompare(b._id || ''));
      } catch (err) {
        error.value = err.response?.data?.message || err.message || 'Xatolik yuz berdi';
      } finally {
        loading.value = false;
      }
    };

    // Lifecycle
    onMounted(() => fetchTeachers());

    // Qidiruv yoki filter o'zgarganda sahifalarni reset qilish
    watch([searchQuery, selectedDepartment], () => {
      resetPages();
    });

    return {
      searchQuery,
      selectedDepartment,
      departments,
      teachers,
      loading,
      error,
      allLeadership,
      allTeachers,
      currentLeadershipPage,
      currentTeachersPage,
      leadershipCurrentPage,
      teachersCurrentPage,
      leadershipTotalPages,
      teachersTotalPages,
      nextLeadershipPage,
      prevLeadershipPage,
      nextTeachersPage,
      prevTeachersPage,
      fetchTeachers,
      ITEMS_PER_PAGE
    };
  }
};
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Slide fade animation */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-enter-from {
  transform: translateY(20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>