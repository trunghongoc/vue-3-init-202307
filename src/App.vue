<script setup lang="ts">
import { provide } from 'vue'
import { RouterView } from 'vue-router'
import { useQueryProvider } from "vue-query"

useQueryProvider()
</script>

<template>
  <!-- <DynamicLayoutOk> -->
  <RouterView />
  <!-- </DynamicLayoutOk> -->
</template>

<style scoped lang="scss">
.app {
  .abc {
    color: red;
  }
}
</style>
