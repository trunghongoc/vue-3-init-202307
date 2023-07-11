import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { useRouterStore } from '@/stores/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: 'AdminLayout'
      },
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        layout: 'AdminLayout'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      beforeEnter() {},
      sensitive: true
    },
    {
      path: '/text',
      name: 'text',
      meta: {
        layout: 'BlankLayout'
      },
      component: () => import('../views/ViewText.vue')
    }
  ]
})

router.beforeEach((to) => {
  const { setCurrentRoute } = useRouterStore()
  setCurrentRoute(to)
})

export default router
