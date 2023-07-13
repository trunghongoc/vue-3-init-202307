import { h, defineAsyncComponent } from 'vue'

export const lazyLoadComponent = (f: any) => () =>
  Promise.resolve(() => h(defineAsyncComponent(f)))

export const lazy = lazyLoadComponent
