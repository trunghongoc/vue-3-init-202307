import 'ant-design-vue/dist/antd.css'
import './assets/main.css'

import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'

import antd from 'ant-design-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.provide('ahihi', {
  key: 'ahihi_nek',
  val_nek: {
    score: 10
  }
})

const pinia = createPinia()
const piniaLocalstorage = JSON.parse(localStorage.getItem('piniaState') || '{}')

console.log('piniaLocalstorage:', piniaLocalstorage)

export function myPiniaPlugin(context: any) {
  console.log('==> used context:', context)

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

app.mount('#app')
