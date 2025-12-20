import axios from 'axios';

// Base URL - Render backend
const api = axios.create({
  baseURL: 'https://tech-collage-1.onrender.com',
});

// ✅ GET requests uchun token kerak EMAS
// Interceptor yo'q - oddiy axios instance

export default api;