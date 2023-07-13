<template>
  <div class="menu">
    <MenuItemExpanable v-for="(item, index) of cookedItems" :key="index" :item="item"
      :defaultActiveKeys="defaultActiveKeys" :isShowFull="isShowFull" />
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs, provide, onMounted, ref, watch, toRaw } from 'vue'
import { useRoute } from 'vue-router'
import MenuItemExpanable from './item.vue'
import type { IMenuItem, IMenuProps, IMenuItemCooked } from './typed'
import { findByName, loopBindParentNames } from './helper'

defineOptions({
  name: 'MenuExpanable',
  inheritAttrs: false,
  customOptions: {}
})

const route = useRoute()

const props = withDefaults(defineProps<IMenuProps>(), {
  isShowFull: true,
  activeStrategy: 'active-ancestors',
  defaultActiveKeys: () => []
})
const { items, isShowFull, activeStrategy, defaultActiveKeys } = toRefs(props)

const activeKeys = ref<(string | number)[]>([])
const activeKey = ref<string | null>(null)

const cookedItems = computed((): IMenuItemCooked[] => {
  const cooked: IMenuItem[] = items.value
  loopBindParentNames(cooked, [])
  return cooked as IMenuItemCooked[]
})

const getDefaultActiveKeys = () => {
  const pageName: string = route.name as string;
  if (pageName) {
    const item: IMenuItemCooked | null = findByName(cookedItems.value, pageName)

    if (item) {
      activeKeys.value = [...defaultActiveKeys.value, ...item.parentNames, item.name]
    }
  }
}

watch(cookedItems, () => {
  console.log(cookedItems)
})

onMounted(() => {
  getDefaultActiveKeys()
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
