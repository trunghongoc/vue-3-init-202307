<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useQueryProvider } from "vue-query"

useQueryProvider()
</script>

<template>
  <RouterView />
</template>

<style scoped lang="scss">
.app {
  .abc {
    color: red;
  }
}
</style>
