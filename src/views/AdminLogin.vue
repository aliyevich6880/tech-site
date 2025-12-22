<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
    
    <!-- Background Animation -->
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="i in 20" :key="i" 
        class="absolute bg-white/5 rounded-full blur-3xl animate-pulse"
        :style="{
          width: Math.random() * 300 + 100 + 'px',
          height: Math.random() * 300 + 100 + 'px',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animationDelay: Math.random() * 5 + 's',
          animationDuration: Math.random() * 10 + 10 + 's'
        }">
      </div>
    </div>

    <!-- Login Card -->
    <div class="relative z-10 w-full max-w-md">
      
      <!-- Logo/Title -->
      <div class="text-center mb-8">
        <div class="inline-block p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mb-4 shadow-2xl">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        </div>
        <h1 class="text-4xl font-black text-white mb-2">Admin Panel</h1>
        <p class="text-white/70">Tech College CMS</p>
      </div>

      <!-- Login Form -->
      <div class="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/20">
        
        <!-- Error Message -->
        <div v-if="error" class="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
          <p class="text-red-200 text-sm text-center">{{ error }}</p>
        </div>

        <!-- Success Message -->
        <div v-if="success" class="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl">
          <p class="text-green-200 text-sm text-center">✅ Kirish muvaffaqiyatli!</p>
        </div>

        <div class="space-y-6">
          
          <!-- Username -->
          <div>
            <label class="block text-white/90 font-semibold mb-2">👤 Username</label>
            <input 
              v-model="username"
              @keyup.enter="handleLogin"
              type="text" 
              placeholder="admin"
              required
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
            >
          </div>

          <!-- Password -->
          <div>
            <label class="block text-white/90 font-semibold mb-2">🔒 Password</label>
            <input 
              v-model="password"
              @keyup.enter="handleLogin"
              type="password" 
              placeholder="••••••••"
              required
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
            >
          </div>

          <!-- Submit Button -->
          <button 
            @click="handleLogin"
            :disabled="loading"
            class="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed"
          >
            <span v-if="loading" class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Yuklanmoqda...
            </span>
            <span v-else>🚀 Kirish</span>
          </button>

        </div>

        <!-- Info -->
        <div class="mt-6 pt-6 border-t border-white/10">
          <p class="text-white/60 text-sm text-center">🔐 Xavfsiz kirish tizimi</p>
        </div>

      </div>

      <!-- Back to Home -->
      <div class="text-center mt-6">
        <router-link to="/" class="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Bosh sahifaga qaytish
        </router-link>
      </div>

    </div>

  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/services/api';

export default {
  name: 'AdminLogin',
  setup() {
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const loading = ref(false);
    const error = ref('');
    const success = ref(false);

    const handleLogin = async () => {
      // Validation
      if (!username.value.trim() || !password.value.trim()) {
        error.value = 'Username va password kiriting!';
        return;
      }

      loading.value = true;
      error.value = '';
      success.value = false;

      try {
        console.log('🔄 Login qilish boshlandi...');
        console.log('👤 Username:', username.value);

        const response = await api.post('/api/auth/login', {
          username: username.value.trim(),
          password: password.value.trim()
        });

        console.log('✅ Response:', response.data);

        if (response.data.token) {
          // Token saqlash
          localStorage.setItem('adminToken', response.data.token);
          success.value = true;
          console.log('✅ Token saqlandi!');

          // 1 soniyadan keyin dashboardga o'tish
          setTimeout(() => {
            router.push('/admin/dashboard');
          }, 1000);
        } else {
          throw new Error('Token qaytmadi');
        }

      } catch (err) {
        console.error('❌ Login xatosi:', err);
        console.error('❌ Response:', err.response?.data);
        
        if (err.response?.status === 401) {
          error.value = 'Username yoki password xato!';
        } else if (err.code === 'ERR_NETWORK') {
          error.value = 'Backend bilan bog\'lanib bo\'lmadi!';
        } else {
          error.value = err.response?.data?.message || 'Xatolik yuz berdi!';
        }
      } finally {
        loading.value = false;
      }
    };

    return {
      username,
      password,
      loading,
      error,
      success,
      handleLogin
    };
  }
};
</script>