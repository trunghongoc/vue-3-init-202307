<template>
  <div class="dynamic-layout">
    <component :is="layout">
      <slot />
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, shallowRef, watch, toRefs, defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouterStore } from '@/stores/router'
import AdminLayout from './admin/index.vue'
import BlankLayout from './blank.vue'
import { useRoute } from 'vue-router'

defineOptions({
  name: 'DynamicLayout',
  components: {
    AdminLayout,
    BlankLayout
  }
})

const route = useRoute()

const routerStore = useRouterStore()

const layout = computed(() => {
  return route?.meta?.layout || 'AdminLayout'
})
</script>

<style scoped lang="scss">
.template {
  .body {}
}
</style>
