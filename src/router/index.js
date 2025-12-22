import { createRouter, createWebHistory } from 'vue-router'

// Import views
import AdminLogin from '@/views/AdminLogin.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import Sections from '@/views/Sections.vue'
import Teachers from '@/views/Teachers.vue'
import Contact from '@/views/Contact.vue'
import NotFound from '@/views/404.vue'

const routes = [
  // ==================== ADMIN ROUTES ====================
  {
    path: '/admin',
    name: 'AdminLogin',
    component: AdminLogin,
    meta: {
      title: 'Admin Login - Tech College',
      description: 'Admin panel kirish',
      isAdmin: true
    }
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: {
      title: 'Admin Dashboard - Tech College',
      description: 'Admin boshqaruv paneli',
      requiresAuth: true, // Token kerak
      isAdmin: true
    }
  },
  
  // ==================== PUBLIC ROUTES ====================
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Bosh sahifa - Tech College',
      description: 'Tech College - Zamonaviy ta\'lim va kuchli mutaxassislar tayyorlaydigan yetakchi o\'quv muassasasi'
    }
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta: {
      title: 'Yangiliklar - Tech College',
      description: 'Kollejimizdagi so\'nggi yangiliklar va tadbirlar'
    }
  },
  {
    path: '/sections',
    name: 'Sections',
    component: Sections,
    meta: {
      title: 'Yo\'nalishlar - Tech College',
      description: 'Tech College da mavjud ta\'lim yo\'nalishlari va guruhlar'
    }
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: Teachers,
    meta: {
      title: 'O\'qituvchilar - Tech College',
      description: 'Professional va tajribali o\'qituvchilarimiz bilan tanishing'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Aloqa - Tech College',
      description: 'Biz bilan bog\'laning va savollaringizga javob oling'
    }
  },
  
  // ==================== 404 PAGE ====================
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '404 - Sahifa topilmadi',
      description: 'Kechirasiz, bu sahifa mavjud emas'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
  // Scroll behavior
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { 
        top: 0, 
        behavior: 'smooth' 
      }
    }
  }
})

// ==================== NAVIGATION GUARDS ====================
router.beforeEach((to, from, next) => {
  // 1. Update document title
  document.title = to.meta.title || 'Tech College'
  
  // 2. Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || 'Tech College - Zamonaviy ta\'lim markazi')
  }

  // 3. Check authentication for admin routes
  const token = localStorage.getItem('adminToken')
  
  // Agar dashboard'ga kirmoqchi bo'lsa va token bo'lmasa
  if (to.meta.requiresAuth && !token) {
    console.log('🚫 Token yo\'q, login sahifasiga yo\'naltirish...')
    next('/admin')
    return
  }
  
  // Agar login sahifasiga kirmoqchi bo'lsa va token bor bo'lsa
  if (to.path === '/admin' && token) {
    console.log('✅ Token bor, dashboard\'ga yo\'naltirish...')
    next('/admin/dashboard')
    return
  }

  // 4. Continue navigation
  next()
})

// Error handling
router.onError((error) => {
  console.error('Router error:', error)
})

export default router