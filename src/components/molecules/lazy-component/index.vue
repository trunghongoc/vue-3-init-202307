<template>
  <Suspense timeout="0">
    <template #default>
      <component :is="asyncComponent" />
    </template>

    <template #fallback>
      <a-spin />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

defineOptions({
  name: 'LazyComponent'
})

const props = defineProps(['component'])

const asyncComponent = defineAsyncComponent(props.component)
</script>