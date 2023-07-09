import { ref, reactive, watch, computed } from 'vue'
import { defineStore } from 'pinia'
import { createRefWithStorage } from '@/stores/utils'

const defaultValue = Object.freeze({
  count: 0,
  user: null
})

export const useCounterStore = defineStore('counter', () => {
  // const count = ref(defaultValue.count)
  const count = createRefWithStorage(defaultValue.count, {
    keyPath: 'counter.count',
    storage: 'localStorage'
  })
  const user = ref(defaultValue.user)

  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  // connectStorage(count, defaultValue.count, 'counter.count')

  return { count, user, doubleCount, increment }
})
