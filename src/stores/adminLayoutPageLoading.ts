import { ref, reactive, watch, computed } from 'vue'
import { defineStore } from 'pinia'
import { createRefWithStorage } from '@/stores/utils'

const defaultValue = Object.freeze({
  loading: false
})

export const useAdminLayoutPageLoadingStore = defineStore(
  'adminLayoutPageLoading',
  () => {
    const loading = ref(false)

    function setLoading(isLoading: boolean) {
      loading.value = isLoading
    }

    return { loading, setLoading }
  }
)
