<template>
  <div class="dynamic-layout">
    <component :is="layout">
      <slot />
    </component>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, markRaw } from 'vue'
import { useRoute } from 'vue-router'

import AdminLayout from './admin/index.vue'
import BlankLayout from './blank.vue'

const route = useRoute()
const layout = ref()

defineOptions({
  name: 'DynamicLayoutOk',
  components: {
    AdminLayout,
    BlankLayout
  }
})

const mapping = computed<any>(() => {
  return {
    AdminLayout,
    BlankLayout
  }
})

watch(
  () => route.meta?.layout as string | undefined,
  async (metaLayout) => {
    try {
      const component = mapping.value[metaLayout || 'BlankLayout']
      layout.value = markRaw(component?.default || BlankLayout)
    } catch (e) {
      layout.value = markRaw(BlankLayout)
    }
  },
  { immediate: true }
)
</script>

<style scoped lang="scss"></style>