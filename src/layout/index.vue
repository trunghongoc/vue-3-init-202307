<template>
  <div class="dynamic-layout">
    <router-view v-slot="{ Component }">
      <component :is="layout">
        <lazy-component :component="Component" />
      </component>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
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

const layout = computed(() => {
  return route?.meta?.layout || 'AdminLayout'
})
</script>

<style scoped lang="scss">
.template {
  .body {}
}
</style>
