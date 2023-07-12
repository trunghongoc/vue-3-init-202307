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

const props = defineProps<IMenuProps>()
const { items, isShowFull, defaultActiveKeys } = toRefs(props)
const activeKeys = ref<(string | number)[]>([])

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
  defaultActiveKeys,
  activeKeys
})
</script>

<style scoped lang="scss">
.menu {}
</style>
