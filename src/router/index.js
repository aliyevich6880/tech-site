// import { createRouter, createWebHistory } from 'vue-router'

// // Import views
// import AdminLogin from '@/views/AdminLogin.vue'
// import AdminDashboard from '@/views/AdminDashboard.vue'
// import Home from '@/views/Home.vue'
// import News from '@/views/News.vue'
// import Sections from '@/views/Sections.vue'
// import Teachers from '@/views/Teachers.vue'
// import Contact from '@/views/Contact.vue'
// import NotFound from '@/views/404.vue'

// const routes = [
//   {
//     path: '/admin',
//     name: 'AdminLogin',
//     component: AdminLogin
//   },
//   {
//     path: '/admin/dashboard',
//     name: 'AdminDashboard',
//     component: AdminDashboard
//   },
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//     meta: {
//       title: 'Bosh sahifa - Tech College',
//       description: 'Tech College - Zamonaviy ta\'lim va kuchli mutaxassislar tayyorlaydigan yetakchi o\'quv muassasasi'
//     }
//   },
//   {
//     path: '/news',
//     name: 'News',
//     component: News,
//     meta: {
//       title: 'Yangiliklar - Tech College',
//       description: 'Kollejimizdagi so\'nggi yangiliklar va tadbirlar'
//     }
//   },
//   {
//     path: '/sections',
//     name: 'Sections',
//     component: Sections,
//     meta: {
//       title: 'Yo\'nalishlar - Tech College',
//       description: 'Tech College da mavjud ta\'lim yo\'nalishlari va guruhlar'
//     }
//   },
//   {
//     path: '/teachers',
//     name: 'Teachers',
//     component: Teachers,
//     meta: {
//       title: 'O\'qituvchilar - Tech College',
//       description: 'Professional va tajribali o\'qituvchilarimiz bilan tanishing'
//     }
//   },
//   {
//     path: '/contact',
//     name: 'Contact',
//     component: Contact,
//     meta: {
//       title: 'Aloqa - Tech College',
//       description: 'Biz bilan bog\'laning va savollaringizga javob oling'
//     }
//   },
//   // 404 Page - Must be last
//   {
//     path: '/:pathMatch(.*)*',
//     name: 'NotFound',
//     component: NotFound,
//     meta: {
//       title: '404 - Sahifa topilmadi',
//       description: 'Kechirasiz, bu sahifa mavjud emas'
//     }
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
//   // Scroll behavior
//   scrollBehavior(to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition
//     } else if (to.hash) {
//       return {
//         el: to.hash,
//         behavior: 'smooth'
//       }
//     } else {
//       return { 
//         top: 0, 
//         behavior: 'smooth' 
//       }
//     }
//   }
// })

// // Navigation guards
// router.beforeEach((to, from, next) => {
//   // Update document title
//   document.title = to.meta.title || 'Tech College'
  
//   // Update meta description
//   const metaDescription = document.querySelector('meta[name="description"]')
//   if (metaDescription) {
//     metaDescription.setAttribute('content', to.meta.description || 'Tech College - Zamonaviy ta\'lim markazi')
//   }

//   // Continue navigation
//   next()
// })

// // Error handling
// router.onError((error) => {
//   console.error('Router error:', error)
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import { authStore } from '@/stores/authStores' // Qo'shildi

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
  {
    path: '/admin',
    name: 'AdminLogin',
    component: AdminLogin,
    meta: { requiresGuest: true } // Qo'shildi
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: { requiresAuth: true } // Qo'shildi
  },
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
  // 404 Page - Must be last
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

// Navigation guards
router.beforeEach((to, from, next) => {
  // Update document title
  document.title = to.meta.title || 'Tech College'
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || 'Tech College - Zamonaviy ta\'lim markazi')
  }

  // Auth guard
  const isAuth = authStore.isAuth()

  if (to.meta.requiresAuth && !isAuth) {
    // Admin panel uchun login kerak
    next('/admin')
  } else if (to.meta.requiresGuest && isAuth) {
    // Allaqachon login bo'lgan bo'lsa dashboard ga
    next('/admin/dashboard')
  } else {
    next()
  }
})

// Error handling
router.onError((error) => {
  console.error('Router error:', error)
})

export default router