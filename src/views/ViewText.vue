<template>
  <lazy-component :component="Page" />
</template>

<script setup lang="ts">
const Page = () => import('@/pages/Text.vue')

defineOptions({
  name: 'TextPage'
})
</script>
