<template>
  jhjhggjk
  <Teleport to="#layout-admin-page-header-right-teleport-area">
    <slot />
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import type { IPageHeaderProps } from './typed'

defineOptions({
  name: 'LayoutAdminPageHeaderTeleport'
})
</script>

<style scoped lang="scss"></style>