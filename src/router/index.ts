import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/layout/admin/index.vue'
import BlankLayout from '@/layout/blank.vue'

import { useRouterStore } from '@/stores/router'

/*
A factory function to create a dynamic route
which is a functional component
with its immediate child the async component
*/
const lazyRoute = defineAsyncComponent

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AdminLayout,
      children: [
        {
          path: '/',
          name: 'home',
          meta: {
            layout: 'AdminLayout',
            title: 'Dashboard'
          },
          // component: lazyRoute(() => import('@/views/HomeView.vue'))
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'about',
          name: 'about',
          meta: {
            layout: 'AdminLayout',
            title: 'About'
          },
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          // component: lazyRoute(() => import('@/views/AboutView.vue')),
          component: () => import('@/views/AboutView.vue'),
          beforeEnter() {},
          sensitive: true
        }
      ]
    },
    {
      path: '/',
      component: BlankLayout,
      children: [
        {
          path: '/text',
          name: 'text',
          meta: {
            layout: 'BlankLayout',
            title: 'Text'
          },
          // component: lazyRoute(() => import('@/views/ViewText.vue'))
          component: () => import('@/views/ViewText.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to) => {
  const { setCurrentRoute } = useRouterStore()
  setCurrentRoute(to)
})

export default router
