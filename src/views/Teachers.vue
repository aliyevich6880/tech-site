<template>
  <div class="teachers-page">
    <!-- Hero Section -->
    <section
      class="relative w-full h-96 md:h-[500px] flex items-center justify-center overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600"
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
        <p class="text-lg md:text-xl lg:text-2xl text-white/90 font-light">
          Professional va tajribali o'qituvchilarimiz bilan tanishing
        </p>
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

    <!-- Teachers Grid -->
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
          <div class="text-center mb-12">
            <h2
              class="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              {{ selectedDepartment }}
            </h2>
            <p class="text-gray-600 text-lg">
              {{ filteredTeachers.length }} ta o'qituvchi
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            <div
              v-for="(teacher, index) in filteredTeachers"
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
                <p class="text-indigo-600 font-semibold text-sm mb-3">
                  {{ teacher.subject }}
                </p>
              </div>
            </div>
          </div>

          <div v-if="filteredTeachers.length === 0" class="text-center py-16">
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
import { ref, computed, onMounted } from 'vue';
import api from '@/services/api';

export default {
  name: 'Teachers',
  setup() {
    const searchQuery = ref('');
    const selectedDepartment = ref('Barchasi');
    const departments = ref(['Barchasi', 'Rahbariyat', 'Amaliy fanlar', 'Tilllar']);
    const teachers = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const filteredTeachers = computed(() => {
      let filtered = teachers.value;
      if (searchQuery.value.trim()) {
        const q = searchQuery.value.toLowerCase().trim();
        filtered = filtered.filter(t =>
          (t.fullName || '').toLowerCase().includes(q) ||
          (t.subject || '').toLowerCase().includes(q) ||
          (t.department || '').toLowerCase().includes(q)
        );
      }
      if (selectedDepartment.value !== 'Barchasi') {
        if (selectedDepartment.value === 'Rahbariyat') {
          filtered = filtered.filter(t => {
            const val = ((t.department || '') + ' ' + (t.subject || '')).toLowerCase();
            return val.includes('direktor') || val.includes('rahbar') || val.includes('mudir') || val.includes('boshqarma');
          });
        } else {
          filtered = filtered.filter(t => {
            const dept = (t.department || '').toLowerCase();
            const subj = (t.subject || '').toLowerCase();
            const sel = selectedDepartment.value.toLowerCase();
            return dept.includes(sel) || subj.includes(sel);
          });
        }
      }
      return filtered;
    });

    const fetchTeachers = async () => {
      loading.value = true;
      error.value = null;
      try {
        const res = await api.get('/api/teachers');
        if (Array.isArray(res.data)) teachers.value = res.data;
        else if (res.data.teachers) teachers.value = res.data.teachers;
        else if (res.data.data) teachers.value = res.data.data;
        else teachers.value = [];
        teachers.value.sort((a,b) => (a._id || '').localeCompare(b._id || ''));
      } catch(err) {
        error.value = err.response?.data?.message || err.message || 'Xatolik yuz berdi';
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => fetchTeachers());

    return {
      searchQuery, selectedDepartment, departments, teachers,
      filteredTeachers, loading, error, fetchTeachers
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
</style>
