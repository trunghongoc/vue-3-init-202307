<template>
  <div class="dynamic-layout">
    <component :is="layout">
      <slot />
    </component>
  </div>
</template>

<script lang="ts">
import { computed, ref, shallowRef, watch, toRefs } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouterStore } from '@/stores/router'
import AdminLayout from './admin/index.vue'
import BlankLayout from './blank.vue'
import { useRoute } from 'vue-router'

export default {
  name: 'DynamicLayout',
  components: {
    AdminLayout,
    BlankLayout
  },
  setup() {
    const routerStore = useRouterStore()
    const { currentRoute } = storeToRefs<any>(routerStore)

    const layout = computed(() => {
      return currentRoute?.value?.meta?.layout || 'AdminLayout'
    })

    return {
      layout,
      currentRoute
    }
  }
}
</script>

<style scoped lang="scss">
.template {
  .body {}
}
</style>
