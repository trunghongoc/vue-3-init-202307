import { defineAsyncComponent, h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/layout/admin/index.vue'
import BlankLayout from '@/layout/blank.vue'

import { Spin } from 'ant-design-vue'

import { useRouterStore } from '@/stores/router'
// import { lazy } from '@/utils/lazyLoadComponent'

const lazy = (callback: any) => defineAsyncComponent(callback)

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
          // component: lazy(() => import('@/views/HomeView.vue'))
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
          // component: lazy(() => import('@/views/AboutView.vue')),
          component: () => import('@/views/AboutView.vue'),
          beforeEnter() {},
          sensitive: true
        },
        {
          path: 'tsx',
          name: 'tsx',
          meta: {
            layout: 'AdminLayout',
            title: 'TSX page'
          },
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          // component: lazy(() => import('@/views/AboutView.vue')),
          component: () => import('@/views/TsxView.tsx'),
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
          // component: lazy(() => import('@/views/ViewText.vue'))
          component: () => import('@/views/ViewText.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to) => {
  // const { setCurrentRoute } = useRouterStore()
  // setCurrentRoute(to)
})

export default router
