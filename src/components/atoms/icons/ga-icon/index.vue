<template>
  <component v-if="aicon" :is="aicon" v-bind="props" />
</template>

<script setup lang="ts">
import { ref, onMounted, inject, computed } from 'vue'
import * as Aicon from '@ant-design/icons-vue'
import { get } from 'lodash'

import { keybabToCamelClass } from '@/utils/keybabToCamel'

import type { IAIconKeybabProps } from './typed'

defineOptions({
  name: 'GaIcon'
})

const props = defineProps<IAIconKeybabProps>()
const aicon = ref<any>()

const loadIcon = () => {
  const iconClass: string = keybabToCamelClass(props.name)

  aicon.value = get(Aicon, iconClass)
}

onMounted(() => {
  loadIcon()
})

</script>