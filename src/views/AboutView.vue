<template>
  <lazy-component :component="Page" />
</template>

<script setup lang="ts">
const Page = () => import('@/pages/About.vue')

defineOptions({
  name: 'AboutPage'
})
</script>
