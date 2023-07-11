<template>
  <div class="template">
    <NavLinkTest />
    <slot />
  </div>
</template>

<script lang="ts">
import { toRefs } from 'vue'
import { useRouterStore } from '@/stores/router'
import { useRoute } from 'vue-router'
import NavLinkTest from '@/components/molecules/nav-link.vue'


export default {
  name: 'BlankLayout',
  components: {
    NavLinkTest
  }
}
</script>

<style scoped lang="scss">
.template {}
</style>
