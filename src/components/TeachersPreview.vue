<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
    
    <!-- Background Decorations -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-16">
        <div class="inline-block mb-4">
          <span class="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
            👔 Bizning Rahbariyat
          </span>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] pb-2">
          Texnikum Rahbariyati
        </h2>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-16">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
        <p class="mt-4 text-gray-600">Yuklanmoqda...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-16">
        <div class="bg-red-50 border border-red-200 rounded-xl p-6 max-w-lg mx-auto">
          <p class="text-red-600">{{ error }}</p>
        </div>
      </div>

      <!-- Teachers Grid -->
      <template v-else>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          <div
            v-for="(teacher, index) in leadershipTeachers"
            :key="teacher._id || index"
            class="group relative bg-white/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-indigo-500/20 cursor-pointer"
          >
            <!-- Image Container -->
            <div class="relative overflow-hidden">
              <img
                :src="teacher.teacherImg || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300'"
                :alt="teacher.fullName"
                class="w-full h-[300px] object-cover transition-all duration-300"
              />
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Hover Icon -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <div class="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
              </div>

              <!-- Leadership Badge - Always visible -->
              <div class="absolute top-4 left-4 z-20">
                <span class="px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                  ⭐ Rahbariyat
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-5">
              <h3 class="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-1">
                {{ teacher.fullName }}
              </h3>
              <p class="text-indigo-600 font-medium text-sm mb-3">{{ teacher.subject }}</p>
              
              <!-- Stats/Info -->
            </div>

            <!-- Decorative Corner -->
            <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="leadershipTeachers.length === 0" class="text-center py-16">
          <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Rahbariyat topilmadi</h3>
          <p class="text-gray-600">Backend'da "Rahbariyat" department'i bilan o'qituvchi qo'shing</p>
        </div>

        <!-- View All Button -->
        <div class="text-center mt-12 md:mt-16">
          <router-link
            to="/teachers"
            class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <span>Barcha o'qituvchilarni ko'rish</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </router-link>
        </div>

        <!-- Statistics -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-20">
          <div class="bg-white/60 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div class="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              70
              +
            </div>
            <div class="text-gray-600 font-medium">O'qituvchilar</div>
          </div>

          <div class="bg-white/60 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div class="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div class="text-gray-600 font-medium">Yillik tajriba</div>
          </div>

          <div class="bg-white/60 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div class="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              95%
            </div>
            <div class="text-gray-600 font-medium">Muvaffaqiyat</div>
          </div>

          <div class="bg-white/60 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div class="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              1000+
            </div>
            <div class="text-gray-600 font-medium">Talabalar</div>
          </div>
        </div>
      </template>

    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import api from '@/services/api'; // ✅ Toza api

export default {
  name: 'TeachersPreview',
  setup() {
    const teachers = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const leadershipTeachers = computed(() => {
      // Faqat subject'ga qarab Rahbariyatni filter qilish
      const leadership = teachers.value.filter(teacher => {
        const subject = (teacher.subject || '').toLowerCase().trim();
        
        // Subject'da "direktor" yoki "rahbar" so'zi bo'lsa
        return subject.includes('direktor') || 
               subject.includes('rahbar') ||
               subject.includes('mudir') ||
               subject.includes('boshqarma');
      })
      .reverse();
      
      // Maksimum 4 ta ko'rsatish (Home sahifasi uchun)
      return leadership.slice(0, 4);
    });

    const totalTeachers = computed(() => {
      return teachers.value.length || 50;
    });

    const fetchLeadership = async () => {
      loading.value = true;
      error.value = null;
      
      try {
        // ✅ Token yo'q - oddiy GET so'rov
        const res = await api.get('/api/teachers');
        
        // Turli javob formatlarini qo'llab-quvvatlash
        if (Array.isArray(res.data)) {
          teachers.value = res.data;
        } else if (res.data.teachers && Array.isArray(res.data.teachers)) {
          teachers.value = res.data.teachers;
        } else if (res.data.data && Array.isArray(res.data.data)) {
          teachers.value = res.data.data;
        } else {
          teachers.value = [];
        }
        
      } catch (err) {
        console.error("❌ Leadership API error:", err);
        error.value = "Ma'lumotlarni yuklashda xatolik";
        teachers.value = [];
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchLeadership();
    });

    return {
      teachers,
      loading,
      error,
      leadershipTeachers,
      totalTeachers,
    };
  },
};
</script>

<style scoped>
/* Smooth transitions */
img {
  will-change: transform;
}

/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>