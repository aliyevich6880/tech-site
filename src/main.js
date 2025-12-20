import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Tailwind CSS
import './assets/main.css'

// Create Vue app instance
const app = createApp(App)

// Use router
app.use(router)

// Global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error('Global error:', err)
  console.error('Error info:', info)
}

// Global warning handler (development only)
if (process.env.NODE_ENV === 'development') {
  app.config.warnHandler = (msg, vm, trace) => {
    console.warn('Vue warning:', msg)
  }
}

// Mount the app
app.mount('#app')

// Add console message
console.log('%c🎓 Tech College', 'font-size: 24px; font-weight: bold; color: #6366f1;')
console.log('%cZamonaviy Ta\'lim Markazi', 'font-size: 14px; color: #8b5cf6;')