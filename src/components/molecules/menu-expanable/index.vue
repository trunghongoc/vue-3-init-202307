<template>
  <div class="menu">
    <MenuItemExpanable v-for="(item, index) of items" :key="index" :item="item" :activeKey="activeKey" />
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import MenuItemExpanable from './item.vue'
import type { IMenuItem, IMenuProps } from './typed'

const props = defineProps<IMenuProps>()
const { items, activeKey } = toRefs(props)
</script>

<style scoped lang="scss">
.menu {}
</style>
