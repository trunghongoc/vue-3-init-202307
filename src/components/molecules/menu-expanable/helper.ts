import { ref } from 'vue'
import axios from 'axios'
import { useQuery } from 'vue-query'

import type { IMenuItem, IMenuItemCooked } from './typed'

export const bindParentNames = (
  item: IMenuItem,
  parentNames: string[]
): string[] => {
  ;(item as IMenuItemCooked).parentNames = [...parentNames, item.name]

  return (item as IMenuItemCooked).parentNames
}

export const loopBindParentNames = (
  items: IMenuItem[],
  parentNames: string[]
) => {
  items.forEach((item: IMenuItem) => {
    const names: string[] = bindParentNames(item, parentNames)

    if (item.children?.length) {
      loopBindParentNames(item.children, names)
    }
  })
}

export const findByName = (
  items: IMenuItemCooked[],
  name: string
): IMenuItemCooked | null => {
  for (const item of items) {
    if (item.name === name) {
      return item
    }

    if (item.children) {
      const result = findByName(item.children, name)
      if (result) {
        return result
      }
    }
  }

  return null
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
