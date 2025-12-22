// import axios from 'axios';

// // Backend URL - Render.com
// const API_URL = 'https://tech-collage-1.onrender.com';

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

// // Request interceptor - har bir so'rovga token qo'shish
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('adminToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor - xatolarni qayta ishlash
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // Token muddati tugagan
//       localStorage.removeItem('adminToken');
//       window.location.href = '/admin';
//     }
//     return Promise.reject(error);
//   }
// );

// export default api;
import axios from 'axios';
import { getAuthToken } from '@/stores/authStores';

// Backend URL - Render.com
const API_URL = 'https://tech-collage-1.onrender.com';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor - har bir so'rovga token qo'shish
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken(); // localStorage o'rniga authStore
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - xatolarni qayta ishlash
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token muddati tugagan
      import('@/stores/authStores').then(({ authStore }) => {
        authStore.logout();
        window.location.href = '/admin';
      });
    }
    return Promise.reject(error);
  }
);

export default api;