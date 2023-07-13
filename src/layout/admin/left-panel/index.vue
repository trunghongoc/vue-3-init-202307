<template>
  <div class="menu" :class="{
    expaned: isExpaned
  }">
    <div class="header">
      <Header />
    </div>

    <div class="content">
      <Content />
    </div>

    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

import Header from './header.vue'
import Content from './content.vue'
import Footer from './footer.vue'

import { useLeftPanelMenuStore } from '@/stores/leftPanelMenu'

const leftPanelStore = useLeftPanelMenuStore()
const { isExpaned } = toRefs(leftPanelStore)
</script>

<style scoped lang="scss">
@import '../variable';

.menu {
  height: 100vh;
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  border-right: 1px solid $border-color;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  flex-direction: column;
  width: $menu-width-collapsed;

  .header {
    /* background: #f2f1f4;
    border-bottom: 1px solid #eee; */
  }

  .content {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    /* overflow-anchor: none; */
    /* overscroll-behavior: contain; */
  }

  .footer {}

  &.expaned {
    width: $menu-width-expaned;
  }
}
</style>
