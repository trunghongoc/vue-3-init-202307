<script setup lang="ts">
import { provide } from 'vue'
import { RouterView } from 'vue-router'
import { useQueryProvider } from "vue-query"
import { ThemeProvider } from 'vue3-styled-components'


useQueryProvider()
</script>

<template>
  <ThemeProvider :theme="{}">
    <!-- <DynamicLayoutOk> -->
    <RouterView />
    <!-- </DynamicLayoutOk> -->
  </ThemeProvider>
</template>

<style scoped lang="scss">
.app {
  .abc {
    color: red;
  }
}
</style>
