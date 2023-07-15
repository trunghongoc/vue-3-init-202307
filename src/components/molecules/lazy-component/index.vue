<template>
  <Suspense timeout="0">
    <template #default>
      <component :is="asyncComponent" />
    </template>

    <template #fallback>
      <a-spin v-show="isShowSpiner" />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import type { AsyncComponentLoader } from 'vue'

defineOptions({
  name: 'LazyComponent'
})

const props = withDefaults(defineProps<{
  component: AsyncComponentLoader
  isShowSpiner?: boolean
}>(), {
  isShowSpiner: true
})

const asyncComponent = defineAsyncComponent(props.component)
</script>