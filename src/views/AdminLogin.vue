<!-- <template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
    <div class="relative z-10 w-full max-w-md">
      <div class="text-center mb-8">
        <div class="inline-block p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mb-4 shadow-2xl">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        </div>
        <h1 class="text-4xl font-black text-white mb-2">Admin Panel</h1>
        <p class="text-white/70">Tech College CMS</p>
      </div>

      <div class="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/20">
        <div v-if="error" class="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
          <p class="text-red-200 text-sm text-center">{{ error }}</p>
        </div>

        <div class="space-y-6">
          <div>
            <label class="block text-white/90 font-semibold mb-2">👤 Username</label>
            <input v-model="username" @keyup.enter="handleLogin" type="text" placeholder="admin" required
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all">
          </div>

          <div>
            <label class="block text-white/90 font-semibold mb-2">🔒 Password</label>
            <input v-model="password" @keyup.enter="handleLogin" type="password" placeholder="••••••••" required
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all">
          </div>

          <button @click="handleLogin" :disabled="loading"
            class="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed">
            <span v-if="loading">Yuklanmoqda...</span>
            <span v-else>🚀 Kirish</span>
          </button>
        </div>
      </div>

      <div class="text-center mt-6">
        <router-link to="/" class="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
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

    const handleLogin = async () => {
      if (!username.value.trim() || !password.value.trim()) {
        error.value = 'Username va password kiriting!';
        return;
      }
      loading.value = true;
      error.value = '';
      try {
        const response = await api.post('/api/auth/login', {
          username: username.value.trim(),
          password: password.value.trim()
        });
        if (response.data.token) {
          localStorage.setItem('adminToken', response.data.token);
          router.push('/admin/dashboard');
        } else {
          error.value = 'Token topilmadi!';
        }
      } catch (err) {
        error.value = err.response?.data?.message || 'Xatolik yuz berdi!';
      } finally {
        loading.value = false;
      }
    };

    return { username, password, loading, error, handleLogin };
  }
};
</script> -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
    <div class="relative z-10 w-full max-w-md">
      <div class="text-center mb-8">
        <div class="inline-block p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mb-4 shadow-2xl">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        </div>
        <h1 class="text-4xl font-black text-white mb-2">Admin Panel</h1>
        <p class="text-white/70">Tech College CMS</p>
      </div>

      <div class="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/20">
        <div v-if="error" class="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
          <p class="text-red-200 text-sm text-center">{{ error }}</p>
        </div>

        <div class="space-y-6">
          <div>
            <label class="block text-white/90 font-semibold mb-2">👤 Username</label>
            <input v-model="username" @keyup.enter="handleLogin" type="text" placeholder="admin" required
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all">
          </div>

          <div>
            <label class="block text-white/90 font-semibold mb-2">🔒 Password</label>
            <input v-model="password" @keyup.enter="handleLogin" type="password" placeholder="••••••••" required
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all">
          </div>

          <button @click="handleLogin" :disabled="loading"
            class="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed">
            <span v-if="loading">Yuklanmoqda...</span>
            <span v-else>🚀 Kirish</span>
          </button>
        </div>
      </div>

      <div class="text-center mt-6">
        <router-link to="/" class="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
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
import { authStore } from '@/stores/authStores'; // Qo'shildi

export default {
  name: 'AdminLogin',
  setup() {
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const loading = ref(false);
    const error = ref('');

    const handleLogin = async () => {
      if (!username.value.trim() || !password.value.trim()) {
        error.value = 'Username va password kiriting!';
        return;
      }
      loading.value = true;
      error.value = '';
      try {
        const response = await api.post('/api/auth/login', {
          username: username.value.trim(),
          password: password.value.trim()
        });
        if (response.data.token) {
          // localStorage o'rniga authStore
          authStore.setToken(response.data.token);
          router.push('/admin/dashboard');
        } else {
          error.value = 'Token topilmadi!';
        }
      } catch (err) {
        error.value = err.response?.data?.message || 'Xatolik yuz berdi!';
      } finally {
        loading.value = false;
      }
    };

    return { username, password, loading, error, handleLogin };
  }
};
</script>
