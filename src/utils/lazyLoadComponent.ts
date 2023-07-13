import { h, defineAsyncComponent } from 'vue'

export const lazyLoadComponent = (f: any) => () => {
  return Promise.resolve(() => h(defineAsyncComponent(f)))
}

export const lazy1 = lazyLoadComponent

export const lazy2 = (f: any) => () => {
  return () => h(defineAsyncComponent(f))
}

export const lazy = defineAsyncComponent
