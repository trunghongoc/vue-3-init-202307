<template>
  <div></div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue';
import { useAdminLayoutPageLoadingStore } from '@/stores/adminLayoutPageLoading'

defineOptions({
  name: 'AdminLayoutLoadingBar'
})

const adminLayoutPageLoadingStore = useAdminLayoutPageLoadingStore()

onUnmounted(() => {
  console.log('====> before unmounted')
  adminLayoutPageLoadingStore.setLoading(false)
})
</script>