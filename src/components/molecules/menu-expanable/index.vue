<template>
  <div class="menu">
    <MenuItemExpanable v-for="(item, index) of cookedItems" :key="index" :item="item"
      :defaultActiveKeys="defaultActiveKeys" :isShowFull="isShowFull" />
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs, provide, onMounted, ref, watch } from 'vue'
import MenuItemExpanable from './item.vue'
import type { IMenuItem, IMenuProps } from './typed'
import { loopToCookItems } from './helper'

defineOptions({
  name: 'MenuExpanable',
  inheritAttrs: false,
  customOptions: {}
})

const props = withDefaults(defineProps<IMenuProps>(), {
  isShowFull: true,
  activeStrategy: 'active-ancestors'
})
const { items, isShowFull, activeStrategy, defaultActiveKeys } = toRefs(props)

console.log("=====>activeStrategy", {
  isShowFull,
  activeStrategy
})
const activeKeys = ref<(string | number)[]>([])
const activeKey = ref<string | null>(null)

const cookedItems = computed(() => {
  const cooked: any[] = items.value

  loopToCookItems(cooked)

  return cooked
})

watch(cookedItems, () => {
  console.log(cookedItems)
})

onMounted(() => {
  activeKeys.value = defaultActiveKeys?.value || []
})

provide('menuExpanableContext', {
  items,
  cookedItems,
  defaultActiveKeys,
  activeKeys,
  activeKey
})
</script>

<style scoped lang="scss">
.menu {}
</style>
