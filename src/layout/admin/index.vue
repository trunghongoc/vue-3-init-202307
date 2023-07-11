<template>
  <div class="template">
    <div class="header" :class="{ 'menu-expaned': isExpaned }">
      <PageHeader />
    </div>

    <div class="menu" :class="{ 'menu-expaned': isExpaned }">
      <LeftPanel />
    </div>

    <div class="body" :class="{ 'menu-expaned': isExpaned }">
      <div class="body-layout">
        <NavLinkTest />
        <Suspense>
          <slot />

          <template #fallback>
            Loading...
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { useRouterStore } from '@/stores/router'
import { useRoute } from 'vue-router'

import { useLeftPanelMenuStore } from '@/stores/leftPanelMenu'

import NavLinkTest from '@/components/molecules/nav-link.vue'
import PageHeader from './header.vue'
import LeftPanel from './left-panel/index.vue'
import { onMounted, watch, toRaw } from 'vue';

const leftPanelStore = useLeftPanelMenuStore()
const { isExpaned } = toRefs(leftPanelStore)
</script>

<style scoped lang="scss">
@import './variable';

.template {
  .body {
    box-sizing: border-box;
    padding-top: $header-height;
    padding-left: $menu-width-collapsed;

    .body-layout {
      box-sizing: border-box;
      padding: 16px;
    }

    &.menu-expaned {
      padding-left: $menu-width-expaned;
    }
  }
}
</style>
