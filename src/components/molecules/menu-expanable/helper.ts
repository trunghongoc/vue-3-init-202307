import { ref } from 'vue'
import axios from 'axios'
import { useQuery } from 'vue-query'

export const bindKey = (currentObj: any, parentKey?: string) => {
  currentObj.key = parentKey ? `${parentKey}.${currentObj.key}` : currentObj.key

  return currentObj.key
}

export const loopToCookItems = (list: any[], parentKey?: string) => {
  list.forEach((element) => {
    const key = bindKey(element, parentKey)

    if (element.children?.length) {
      loopToCookItems(element.children, key)
    }
  })
}

export function useCounter() {
  const counter = ref(0)

  function increase() {
    counter.value += 1
  }

  return { counter, increase }
}

export const callApi = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/5')
}
export const useCallAPi = () => {
  return useQuery('callApi', callApi)
}
