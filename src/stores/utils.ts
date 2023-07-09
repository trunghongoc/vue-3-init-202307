import { watch, ref, type Ref } from 'vue'
import { get, set } from 'lodash'

const getStorage = () => JSON.parse(localStorage.getItem('piniaState') || '{}')
const setStorage = (storage: any) => {
  const json = JSON.stringify(storage)
  localStorage.setItem('piniaState', json)
}

const saveToStorage = ({ storagePath, value }: any) => {
  const storage = getStorage()

  set(storage, storagePath, value)
  setStorage(storage)
}

interface IcreatePiniaRefWithLocalStorageArgsOptions {
  deep?: boolean
  keyPath: string
  storage?: 'localStorage' | 'sessionStorage'
}
export function createRefWithStorage<IState>(
  defaultValue: IState,
  options: IcreatePiniaRefWithLocalStorageArgsOptions
) {
  const storage = getStorage()
  const initialValue = get(storage, options.keyPath, defaultValue)
  const value = ref<IState>(initialValue)

  watch(value, (newValue: any) => {
    saveToStorage({
      storagePath: options.keyPath,
      value: newValue
    })
  })

  return value
}
