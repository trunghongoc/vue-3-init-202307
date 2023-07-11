<template>
  <span class="button" :class="[value.size]" :style="{
    background: value.bg,
    color: value.color
  }">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue'

const props = defineProps<{
  size?: 'sm' | 'md' | 'lg'
  bg?: string
  color?: string
}>()

const { size, bg, color } = toRefs(props)

const value = computed(() => ({
  size: size?.value || 'sm',
  bg: bg?.value || '#eee',
  color: color?.value
}))
</script>

<style scoped lang="scss">
.button {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  padding: 8px;

  .sm {
    min-width: 32px;
    height: 32px;
  }

  .md {
    min-width: 42px;
    height: 42px;
  }

  .lg {
    min-width: 50px;
    height: 50px;
  }
}
</style>