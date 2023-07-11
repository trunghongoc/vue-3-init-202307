<template>
  <div class="menu">
    <MenuItemExpanable v-for="(item, index) of cookedItems" :key="index" :item="item"
      :defaultActiveKeys="defaultActiveKeys" />
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs, provide, onMounted, ref, watch } from 'vue'
import MenuItemExpanable from './item.vue'
import type { IMenuItem, IMenuProps } from './typed'

const props = defineProps<IMenuProps>()
const { items, defaultActiveKeys } = toRefs(props)
const activeKeys = ref<(string | number)[]>([])

const bindKey = (currentObj: any, parentKey?: string) => {
  currentObj.key = parentKey ? `${parentKey}.${currentObj.key}` : currentObj.key

  return currentObj.key
}

const loop = (list: any[], parentKey?: string) => {
  list.forEach(element => {
    const key = bindKey(element, parentKey)

    if (element.children?.length) {
      loop(element.children, key)
    }
  })
}

const cookedItems = computed(() => {
  const cooked: any[] = items.value

  loop(cooked)

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
