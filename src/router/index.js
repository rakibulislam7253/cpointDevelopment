import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from '../layout/MainLayout.vue'
import Profile from '../views/Profile.vue'
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
          needsAuth: true
        }
      },
      {
        path: '/profile',
        name: 'profil',
        component: Profile
      },

      {
        path: '/domaininfo',
        name: 'domaininfo',
        component: function () {
          return import('../views/Domain/DomainInfo.vue')
        }
      },
      {
        path: '/about',
        name: 'about',
        component: function () {
          return import('../views/AboutView.vue')
        }
      },

      {
        path: '/gallery',
        name: 'gallery',
        component: function () {
          return import('../views/Gallery.vue')
        }
      },

      {
        path: '/calender',
        name: 'calender',
        component: function () {
          return import('../views/Calendar.vue')
        }
      },
      {
        path: '/UOM',
        name: 'components',
        component: function () {
          return import('../components/Constraction/Unit Of Management.vue')
        }
      },
      {
        path: '/testing',
        name: 'testing',
        component: function () {
          return import('../views/Testing.vue')
        }
      },
      {
        path: '/branch',
        name: '/branch',
        component: function () {
          return import('../components/Branch/Branch.vue')
        }
      },

    ]
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    }
  },
  {
    path: '/registration',
    name: '/registration',
    component: function () {
      return import('../views/Registration.vue')
    }
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach()

export default router
