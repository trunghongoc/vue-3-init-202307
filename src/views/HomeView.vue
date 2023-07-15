<template>
  <lazy-component :component="Page" :isShowSpiner="true" />
</template>

<script setup lang="ts">
const Page = () => import('@/pages/Home.vue')

defineOptions({
  name: 'HomePage'
})
</script>
