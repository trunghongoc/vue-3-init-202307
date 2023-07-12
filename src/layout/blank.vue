<template>
  <div class="template">
    <NavLinkTest />

    <Suspense timeout="0">
      <template #default>
        <router-view />
      </template>

      <template #fallback>
        <div>
          Loading...
        </div>
      </template>
    </Suspense>

    <!-- <RouterView name="default" v-slot="{ Component, route }">
      <transition :name="route.meta.transition" mode="out-in" :duration="300" :key="route.path">
        <Suspense>
          <template #default>
            <component :is="Component" :key="route.path" />
          </template>

          <template #fallback>
            <div>
              Loading...
              <div style="width: 2000px; height: 2000px; background: green;"></div>
            </div>
          </template>
        </Suspense>
      </transition>
    </RouterView> -->
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { useRouterStore } from '@/stores/router'
import { useRoute } from 'vue-router'
import NavLinkTest from '@/components/molecules/nav-link.vue'

defineOptions({
  name: 'BlankLayout',
  components: {
    NavLinkTest
  }
})
</script>

<style scoped lang="scss">
.template {}
</style>
