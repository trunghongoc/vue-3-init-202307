import { ref, reactive, watch, computed, readonly, toRefs } from 'vue'
import { defineStore } from 'pinia'
import { createRefWithStorage } from '@/stores/utils'

const defaultValue = Object.freeze({
  prevRouter: null,
  currentRoute: null
})

export const useRouterStore = defineStore('router', () => {
  const prevRouter = ref(null)
  const currentRoute = ref(null)

  const setCurrentRoute = (newRoute: any) => {
    // console.log('===> currentRoute.setCurrentRoute', newRoute)
    prevRouter.value = currentRoute.value
    currentRoute.value = newRoute
  }

  return {
    prevRouter: prevRouter,
    currentRoute: currentRoute,
    setCurrentRoute: setCurrentRoute
  }
})
