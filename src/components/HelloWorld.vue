<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios';

const data = ref(null)

defineProps<{
  msg: string
}>()


onMounted(() => {
  axios.get('https://jsonplaceholder.typicode.com/todos/5').then(res => {
    data.value = res.data
  })
})
</script>

<template>
  <div>{{ msg }}</div>

  <div id="hhh">{{ data }}</div>
</template>
