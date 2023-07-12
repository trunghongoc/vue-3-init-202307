<template>
  <template v-if="isExistTeleportTarget">
    <Teleport :to="targetEle">
      <slot />
    </Teleport>
  </template>
  <div></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import type { IPageHeaderProps } from './typed'

defineOptions({
  name: 'LayoutAdminPageHeaderTeleport'
})

const targetEle = ref<string>('#layout-admin-page-header-right-teleport-area')
const isExistTeleportTarget = ref<boolean>(false)
const times = ref<number>(0)
const maxTimes: number = 10

const tryToCreateTeleport = () => {
  let ele = document.querySelector(targetEle.value)

  if (ele) {
    isExistTeleportTarget.value = true
    return
  }

  const interval = setInterval(() => {
    if (times.value >= maxTimes) {
      clearInterval(interval)
    }

    ele = document.querySelector(targetEle.value)
    times.value++

    if (ele) {
      isExistTeleportTarget.value = true
      clearInterval(interval)
    }
  }, 200)

  onBeforeUnmount(() => {
    clearInterval(interval)
  })
}

onMounted(() => {
  tryToCreateTeleport()
})

</script>

<style scoped lang="scss"></style>