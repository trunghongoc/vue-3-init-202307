<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useQueryProvider } from "vue-query"
import DynamicLayout from '@/layout/index.vue'
import AdminLayout from '@/layout/admin/index.vue'

useQueryProvider()
</script>

<template>
  <DynamicLayout>
    <RouterView />
  </DynamicLayout>
</template>

<style scoped lang="scss">
.app {
  .abc {
    color: red;
  }
}
</style>
