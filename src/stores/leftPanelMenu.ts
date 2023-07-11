import { ref, reactive, watch, computed, readonly, toRefs } from 'vue'
import { defineStore } from 'pinia'
import { createRefWithStorage } from '@/stores/utils'

const defaultValue = Object.freeze({
  expaned: true
})

export const useLeftPanelMenuStore = defineStore('leftPanelMenu', () => {
  const isExpaned = createRefWithStorage<boolean>(defaultValue.expaned, {
    keyPath: 'leftPanelMenu.expaned',
    storage: 'localStorage'
  })

  const setExpaned = (_isExpaned: boolean) => {
    console.log({
      current: isExpaned.value,
      next: _isExpaned
    })

    isExpaned.value = _isExpaned
  }

  const toggleExpaned = () => {
    isExpaned.value = !isExpaned.value
  }

  return {
    isExpaned,
    setExpaned,
    toggleExpaned
  }
})
