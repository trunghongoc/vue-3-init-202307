<template>
  <button @click="clicked">{{ label }}</button>
  <pre>{{ abcdToRefs }}</pre>
  <button @click="changeABC">CHANGE ABC</button>

  <div .some-property="'ahihi'">User:</div>
  <pre>{{ user }}</pre>

  <slot name="ahihi"></slot>

  <div>Count: {{ counter.count }}</div>

  <AppText :text="'ahihi do ngoc'" />

  <a-button type="primary" @click="fetchTodo">Fetch todos</a-button>
</template>

<script setup lang="ts">
import { ref, toRef, onUnmounted, toRefs, reactive, computed, watch, watchEffect, onMounted, getCurrentInstance, inject, defineComponent } from 'vue'
import { useUser } from '@/hooks/useUser'
import type { IProps } from '@/interface/button';
import { useCounterStore } from '@/stores/counter'
import AppText from './AppText.vue'

import { useQuery } from "vue-query"
import axios from 'axios'

const student123 = ref({
  aname: 'Nguyen Van A',
  classes: {
    aname: '1E'
  }
})
// export default defineComponent({
//   props: {
//     label: {
//       type: String,
//       require: true
//     },
//     student: {
//       type: Object,
//       require: true
//     }
//   },
//   setup(props: IProps, context) {
const props = defineProps<IProps>()
// const emmit = defineEmits("")

const fetchTodoList = async () => {
  return axios.get<any>('https://jsonplaceholder.typicode.com/todos').then(res => res.data)
}

const fetchTodoDetail = async (id: string | number) => {
  return axios.get<any>('https://jsonplaceholder.typicode.com/todos/' + id).then(res => res.data)
}

const mockTodoId = 3
const queryList = useQuery("todos", fetchTodoList, {
  // enabled: false
})
const queryDetail = useQuery(["todos", mockTodoId], () => fetchTodoDetail(mockTodoId), {
  enabled: false
})

function fetchTodo() {
  // console.log('===> Query list', queryList)
  // queryList.refetch()
}

watch(queryList.data, () => {
  // console.log("===> queryList:", queryList)
})

const counter = useCounterStore()

onUnmounted(() => {
  // ....
})

const fuser = useUser({ userId: 1, immediate: false })
setTimeout(() => {
  fuser.fetch(2)
}, 2000)

const abcdToRefs = toRefs<IProps>(props)

const changeABC = () => {
  console.log(props)
  abcdToRefs.label.value = 'sineo'
}

const user = reactive({
  aname: 'Nguyen Van A',
  classes: {
    aname: '1E'
  }
})

watch([user], (newVal: any, oldVal: any) => {
  console.log('user changed:', { newVal, oldVal })
})

watchEffect(() => {

})

const exampleRef = ref(1)

const emit = defineEmits<{
  (e: 'clicked', payload: any): void
}>()

const clicked = () => {
  user.classes.aname = '123'
  emit('clicked', { ahihi: 'do ngock' })
}

defineExpose({
  user
})

// context.expose({
//   user
// })

const instance = getCurrentInstance()
const injected = inject('ahihi')

//     return {
//       clicked,
//       _label: abcdToRefs.label,
//       abcdToRefs,
//       changeABC,
//       user,
//     }
//   }
// })
</script>

<style scoped lang="scss">
button {
  color: green;
}
</style>
