import 'ant-design-vue/dist/antd.css'
import './assets/main.css'

import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from 'vue-query'

import antd from 'ant-design-vue'

import App from './App.vue'
import router from './router'

async function initMockServer() {
  if (process.env.NODE_ENV === 'development') {
    const { startBrowserMsw } = await import('./mocks/browser')

    startBrowserMsw()
  }
}

await initMockServer()

const app = createApp(App)

app.provide('ahihi', {
  key: 'ahihi_nek',
  val_nek: {
    score: 10
  }
})

const pinia = createPinia()
const piniaLocalstorage = JSON.parse(localStorage.getItem('piniaState') || '{}')

export function myPiniaPlugin(context: any) {
  watch(
    pinia.state,
    (state) => {
      // persist the whole state to the local storage whenever it changes
      //   localStorage.setItem('piniaState', JSON.stringify(state))
    },
    { deep: true }
  )
}

pinia.use(myPiniaPlugin)

app.use(pinia)
app.use(router)
app.use(antd)
app.use(VueQueryPlugin)

app.mount('#app')
