<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    
    <!-- Header -->
    <header class="bg-white/10 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <div>
              <h1 class="text-xl font-bold text-white">Admin Panel</h1>
              <p class="text-white/60 text-sm">Tech College CMS</p>
            </div>
          </div>
          
          <div class="flex items-center gap-4">
            <router-link to="/" class="px-4 py-2 text-white/80 hover:text-white transition-colors">
              🏠 Saytga o'tish
            </router-link>
            <button 
              @click="handleLogout"
              class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all"
            >
              🚪 Chiqish
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-4 py-8">
      
      <!-- Tabs -->
      <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-2 mb-8 border border-white/20 inline-flex gap-2">
        <button 
          @click="activeTab = 'teachers'"
          :class="[
            'px-6 py-3 rounded-xl font-semibold transition-all',
            activeTab === 'teachers' 
              ? 'bg-white text-purple-900' 
              : 'text-white hover:bg-white/10'
          ]"
        >
          👔 O'qituvchilar ({{ teachers.length }})
        </button>
        <button 
          @click="activeTab = 'news'"
          :class="[
            'px-6 py-3 rounded-xl font-semibold transition-all',
            activeTab === 'news' 
              ? 'bg-white text-purple-900' 
              : 'text-white hover:bg-white/10'
          ]"
        >
          📰 Yangiliklar ({{ newsList.length }})
        </button>
      </div>

      <!-- Teachers Tab -->
      <div v-if="activeTab === 'teachers'" class="grid lg:grid-cols-2 gap-8">
        
        <!-- Add Teacher Form -->
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
          <h2 class="text-2xl font-bold text-white mb-6">
                          <span v-if="editingTeacher">Tahrirlash</span>
              <span v-else>Yangi qo'shish</span>
          </h2>
          
          <form @submit.prevent="handleTeacherSubmit" class="space-y-4">
            
            <!-- Image Upload -->
            <div>
              <label class="block text-white/80 mb-2 font-medium">Rasm</label>
              <input 
                type="file" 
                @change="handleTeacherImage"
                accept="image/*"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-500 file:text-white hover:file:bg-purple-600 transition-all"
              >
              <div v-if="teacherForm.imagePreview" class="mt-3">
                <img :src="teacherForm.imagePreview" class="w-32 h-32 rounded-xl object-cover border-2 border-white/30">
              </div>
            </div>

            <!-- Full Name -->
            <div>
              <label class="block text-white/80 mb-2 font-medium">Ism Familiya *</label>
              <input 
                v-model="teacherForm.fullName"
                type="text" 
                required
                placeholder="Alisher Navoiy"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
              >
            </div>

            <!-- Subject -->
            <div>
              <label class="block text-white/80 mb-2 font-medium">Fan / Lavozim *</label>
              <input 
                v-model="teacherForm.subject"
                type="text" 
                required
                placeholder="Matematika"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
              >
            </div>

            <!-- Department -->
            <div>
              <label class="block text-white/80 mb-2 font-medium">Bo'lim</label>
              <select 
                v-model="teacherForm.department"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
              >
                <option value="" class="bg-slate-800">Tanlang</option>
                <option value="Rahbariyat" class="bg-slate-800">Rahbariyat</option>
                <option value="Amaliy fanlar" class="bg-slate-800">Amaliy fanlar</option>
                <option value="Tillar" class="bg-slate-800">Tillar</option>
              </select>
            </div>

            <!-- Buttons -->
            <div class="flex gap-3">
              <button 
                type="submit"
                :disabled="teacherLoading"
                class="flex-1 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 disabled:scale-100"
              >
                <span v-if="teacherLoading">Yuklanmoqda...</span>
                <span v-else-if="editingTeacher">Saqlash</span>
                <span v-else>Qo'shish</span>
              </button>
              
              <button 
                v-if="editingTeacher"
                @click="cancelEdit"
                type="button"
                class="px-6 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-xl font-bold transition-all"
              >
                ❌ Bekor qilish
              </button>
            </div>

          </form>
        </div>

        <!-- Teachers List -->
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
          <h2 class="text-2xl font-bold text-white mb-6">📋 Ro'yxat</h2>
          
          <div v-if="teachersLoading" class="text-center py-8">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent"></div>
          </div>

          <div v-else class="space-y-3 max-h-[600px] overflow-y-auto pr-2">
            <div
              v-for="teacher in teachers"
              :key="teacher._id"
              class="bg-white/10 rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all"
            >
              <div class="flex items-center gap-4">
                <img 
                  :src="teacher.teacherImg || 'https://via.placeholder.com/100'" 
                  class="w-16 h-16 rounded-full object-cover border-2 border-white/30"
                >
                <div class="flex-1 min-w-0">
                  <h3 class="text-white font-bold truncate">{{ teacher.fullName }}</h3>
                  <p class="text-white/70 text-sm truncate">{{ teacher.subject }}</p>
                </div>
                <div class="flex gap-2">
                  <button 
                    @click="editTeacher(teacher)"
                    class="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                  </button>
                  <button 
                    @click="deleteTeacher(teacher._id)"
                    class="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- News Tab -->
      <div v-if="activeTab === 'news'" class="grid lg:grid-cols-2 gap-8">
        
        <!-- Add News Form -->
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
          <h2 class="text-2xl font-bold text-white mb-6">
                          <span v-if="editingNews">Tahrirlash</span>
              <span v-else>Yangi qo'shish</span>
          </h2>
          
          <form @submit.prevent="handleNewsSubmit" class="space-y-4">
            
            <!-- Image Upload -->
            <div>
              <label class="block text-white/80 mb-2 font-medium">Rasm</label>
              <input 
                type="file" 
                @change="handleNewsImage"
                accept="image/*"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-500 file:text-white hover:file:bg-purple-600 transition-all"
              >
              <div v-if="newsForm.imagePreview" class="mt-3">
                <img :src="newsForm.imagePreview" class="w-full h-48 rounded-xl object-cover border-2 border-white/30">
              </div>
            </div>

            <!-- Title -->
            <div>
              <label class="block text-white/80 mb-2 font-medium">Sarlavha *</label>
              <input 
                v-model="newsForm.title"
                type="text" 
                required
                placeholder="Yangilik sarlavhasi"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
              >
            </div>

            <!-- Description -->
            <div>
              <label class="block text-white/80 mb-2 font-medium">Matn *</label>
              <textarea 
                v-model="newsForm.description"
                required
                rows="5"
                placeholder="Yangilik matni..."
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <!-- Date -->
            <div>
              <label class="block text-white/80 mb-2 font-medium">Sana</label>
              <input 
                v-model="newsForm.publishedAt"
                type="date"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
              >
            </div>

            <!-- Buttons -->
            <div class="flex gap-3">
              <button 
                type="submit"
                :disabled="newsLoading"
                class="flex-1 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 disabled:scale-100"
              >
                <span v-if="newsLoading">Yuklanmoqda...</span>
                <span v-else-if="editingNews">Saqlash</span>
                <span v-else>Qo'shish</span>
              </button>
              
              <button 
                v-if="editingNews"
                @click="cancelNewsEdit"
                type="button"
                class="px-6 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-xl font-bold transition-all"
              >
                ❌ Bekor qilish
              </button>
            </div>

          </form>
        </div>

        <!-- News List -->
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
          <h2 class="text-2xl font-bold text-white mb-6">📋 Ro'yxat</h2>
          
          <div v-if="newsListLoading" class="text-center py-8">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent"></div>
          </div>

          <div v-else class="space-y-3 max-h-[600px] overflow-y-auto pr-2">
            <div
              v-for="news in newsList"
              :key="news._id"
              class="bg-white/10 rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all"
            >
              <div class="flex items-start gap-4">
                <img 
                  :src="news.img || 'https://via.placeholder.com/100'" 
                  class="w-20 h-20 rounded-lg object-cover border-2 border-white/30"
                >
                <div class="flex-1 min-w-0">
                  <h3 class="text-white font-bold line-clamp-2">{{ news.title }}</h3>
                  <p class="text-white/70 text-sm line-clamp-2 mt-1">{{ news.description }}</p>
                  <p class="text-white/50 text-xs mt-2">{{ formatDate(news.publishedAt) }}</p>
                </div>
                <div class="flex flex-col gap-2">
                  <button 
                    @click="editNews(news)"
                    class="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                  </button>
                  <button 
                    @click="deleteNews(news._id)"
                    class="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/services/api';

export default {
  name: 'AdminDashboard',
  setup() {
    const router = useRouter();
    const activeTab = ref('teachers');

    // Teachers
    const teachers = ref([]);
    const teachersLoading = ref(false);
    const teacherLoading = ref(false);
    const editingTeacher = ref(null);
    const teacherForm = ref({
      fullName: '',
      subject: '',
      department: '',
      teacherImg: null,
      imagePreview: ''
    });

    // News
    const newsList = ref([]);
    const newsListLoading = ref(false);
    const newsLoading = ref(false);
    const editingNews = ref(null);
    const newsForm = ref({
      title: '',
      description: '',
      publishedAt: new Date().toISOString().split('T')[0],
      img: null,
      imagePreview: ''
    });

    // Check auth
    const checkAuth = () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        router.push('/admin');
      }
    };

    const handleLogout = () => {
      localStorage.removeItem('adminToken');
      router.push('/admin');
    };

    // Teachers Functions
    const fetchTeachers = async () => {
      teachersLoading.value = true;
      try {
        const token = localStorage.getItem('adminToken');
        const res = await api.get('/api/teachers', {
          headers: { Authorization: `Bearer ${token}` }
        });
        teachers.value = Array.isArray(res.data) ? res.data : res.data.teachers || [];
      } catch (err) {
        console.error('Fetch teachers error:', err);
        alert('O\'qituvchilarni yuklashda xatolik!');
      } finally {
        teachersLoading.value = false;
      }
    };

    const handleTeacherImage = (e) => {
      const file = e.target.files[0];
      if (file) {
        teacherForm.value.teacherImg = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          teacherForm.value.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    const handleTeacherSubmit = async () => {
      teacherLoading.value = true;
      try {
        const token = localStorage.getItem('adminToken');
        const formData = new FormData();
        formData.append('fullName', teacherForm.value.fullName);
        formData.append('subject', teacherForm.value.subject);
        if (teacherForm.value.department) {
          formData.append('department', teacherForm.value.department);
        }
        if (teacherForm.value.teacherImg) {
          formData.append('teacherImg', teacherForm.value.teacherImg);
        }

        if (editingTeacher.value) {
          await api.put(`/api/teachers/${editingTeacher.value._id}`, formData, {
            headers: { 
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data'
            }
          });
          alert('✅ Muvaffaqiyatli yangilandi!');
        } else {
          await api.post('/api/teachers', formData, {
            headers: { 
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data'
            }
          });
          alert('✅ Muvaffaqiyatli qo\'shildi!');
        }

        resetTeacherForm();
        fetchTeachers();
      } catch (err) {
        console.error('Submit teacher error:', err);
        alert('❌ Xatolik yuz berdi!');
      } finally {
        teacherLoading.value = false;
      }
    };

    const editTeacher = (teacher) => {
      editingTeacher.value = teacher;
      teacherForm.value = {
        fullName: teacher.fullName,
        subject: teacher.subject,
        department: teacher.department || '',
        teacherImg: null,
        imagePreview: teacher.teacherImg || ''
      };
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const deleteTeacher = async (id) => {
      if (!confirm('Rostdan ham o\'chirmoqchimisiz?')) return;
      
      try {
        const token = localStorage.getItem('adminToken');
        await api.delete(`/api/teachers/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert('✅ Muvaffaqiyatli o\'chirildi!');
        fetchTeachers();
      } catch (err) {
        console.error('Delete teacher error:', err);
        alert('❌ O\'chirishda xatolik!');
      }
    };

    const cancelEdit = () => {
      resetTeacherForm();
    };

    const resetTeacherForm = () => {
      editingTeacher.value = null;
      teacherForm.value = {
        fullName: '',
        subject: '',
        department: '',
        teacherImg: null,
        imagePreview: ''
      };
    };

    // News Functions
    const fetchNews = async () => {
      newsListLoading.value = true;
      try {
        const token = localStorage.getItem('adminToken');
        const res = await api.get('/api/news', {
          headers: { Authorization: `Bearer ${token}` }
        });
        newsList.value = Array.isArray(res.data) ? res.data : res.data.news || [];
      } catch (err) {
        console.error('Fetch news error:', err);
        alert('Yangiliklarni yuklashda xatolik!');
      } finally {
        newsListLoading.value = false;
      }
    };

    const handleNewsImage = (e) => {
      const file = e.target.files[0];
      if (file) {
        newsForm.value.img = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          newsForm.value.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    const handleNewsSubmit = async () => {
      newsLoading.value = true;
      try {
        const token = localStorage.getItem('adminToken');
        const formData = new FormData();
        formData.append('title', newsForm.value.title);
        formData.append('description', newsForm.value.description);
        formData.append('publishedAt', newsForm.value.publishedAt);
        if (newsForm.value.img) {
          formData.append('img', newsForm.value.img);
        }

        if (editingNews.value) {
          await api.put(`/api/news/${editingNews.value._id}`, formData, {
            headers: { 
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data'
            }
          });
          alert('✅ Muvaffaqiyatli yangilandi!');
        } else {
          await api.post('/api/news', formData, {
            headers: { 
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data'
            }
          });
          alert('✅ Muvaffaqiyatli qo\'shildi!');
        }

        resetNewsForm();
        fetchNews();
      } catch (err) {
        console.error('Submit news error:', err);
        alert('❌ Xatolik yuz berdi!');
      } finally {
        newsLoading.value = false;
      }
    };

    const editNews = (news) => {
      editingNews.value = news;
      newsForm.value = {
        title: news.title,
        description: news.description,
        publishedAt: news.publishedAt ? news.publishedAt.split('T')[0] : '',
        img: null,
        imagePreview: news.img || ''
      };
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const deleteNews = async (id) => {
      if (!confirm('Rostdan ham o\'chirmoqchimisiz?')) return;
      
      try {
        const token = localStorage.getItem('adminToken');
        await api.delete(`/api/news/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert('✅ Muvaffaqiyatli o\'chirildi!');
        fetchNews();
      } catch (err) {
        console.error('Delete news error:', err);
        alert('❌ O\'chirishda xatolik!');
      }
    };

    const cancelNewsEdit = () => {
      resetNewsForm();
    };

    const resetNewsForm = () => {
      editingNews.value = null;
      newsForm.value = {
        title: '',
        description: '',
        publishedAt: new Date().toISOString().split('T')[0],
        img: null,
        imagePreview: ''
      };
    };

    const formatDate = (date) => {
      if (!date) return '';
      const d = new Date(date);
      return d.toLocaleDateString('uz-UZ');
    };

    onMounted(() => {
      checkAuth();
      fetchTeachers();
      fetchNews();
    });

    return {
      activeTab,
      teachers,
      teachersLoading,
      teacherLoading,
      teacherForm,
      editingTeacher,
      newsList,
      newsListLoading,
      newsLoading,
      newsForm,
      editingNews,
      handleLogout,
      handleTeacherImage,
      handleTeacherSubmit,
      editTeacher,
      deleteTeacher,
      cancelEdit,
      handleNewsImage,
      handleNewsSubmit,
      editNews,
      deleteNews,
      cancelNewsEdit,
      formatDate
    };
  }
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>