import axios from 'axios'
import { ref } from 'vue'

export const useUser = ({ userId, immediate }: any) => {
  const loading = ref(false)
  const error = ref(undefined)
  const result = ref(undefined)

  const fetch = (id: number) => {
    loading.value = true
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        result.value = response.data
        loading.value = false
      })
      .catch((err) => {
        error.value = err
        loading.value = false
      })
  }

  if (immediate) {
    fetch(userId)
  }

  return { loading, error, result, fetch }
}
