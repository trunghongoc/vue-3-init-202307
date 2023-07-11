<template>
  <div class="page-header" :class="{ 'menu-expanded': isExpaned }">
    <div class="layout">

    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { useLeftPanelMenuStore } from '@/stores/leftPanelMenu'

const leftPanelStore = useLeftPanelMenuStore()
const { isExpaned } = toRefs(leftPanelStore)
</script>

<style scoped lang="scss">
@import './variable';

.page-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: $header-height;
  box-sizing: border-box;
  border-bottom: 1px solid $border-color;
  background: #fff;
  padding: 0 16px 0 ($menu-width-collapsed + 16px);

  &.menu-expanded {
    padding: 0 16px 0 ($menu-width-expaned + 16px);
  }
}
</style>
