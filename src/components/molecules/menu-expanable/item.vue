<template>
  <a-tooltip :title="isShowFull ? '' : item.label" placement="right">
    <div class="wrapper" :class="{ 'show-less': !isShowFull }">
      <component :is="tagName" v-bind="item.props" class="item"
        :class="{ active: isActive, 'has-children': item.children }" @click="onClickItem">
        <div class="left-icon" v-if="item?.icon">
          <ga-icon v-bind="item.icon" />
        </div>

        <div v-show="isShowFull" class="label" :class="{ 'no-icon': !item?.icon }">{{ item.label }}</div>

        <div class="right-icon" v-show="isShowFull && item.children">
          <UpOutlined v-if="expanded" />
          <DownOutlined v-else />
        </div>
      </component>

      <div class="sub-menu" v-if="item.children" v-show="expanded">
        <MenuItemExpanable v-for="(childItem, index) of item.children" :key="index" :item="childItem"
          :isShowFull="isShowFull" />
      </div>
    </div>
  </a-tooltip>
</template>

<script setup lang="ts">
import { ref, toRefs, computed, onMounted, defineComponent, inject } from 'vue'
import type { VueElement } from 'vue'
import type { IMenuItem, IMenuItemProps } from './typed'

import { LeftOutlined, RightOutlined, UserOutlined, DownOutlined, UpOutlined } from '@ant-design/icons-vue'

defineOptions({
  name: 'MenuItemExpanable'
})

const props = withDefaults(defineProps<IMenuItemProps>(), {
  isShowFull: true,
  defaultActiveKeys: () => [],
  activeStrategy: 'active-ancestors'
})

const { item, isShowFull, activeStrategy, defaultActiveKeys } = toRefs(props)

const activeKeys = ref<(string | number)[]>([])

const expanded = ref(false)

const menuExpanableContext = inject<any>('menuExpanableContext')

const onClickItem = () => {
  if (item.value?.onClick) {
    item.value?.onClick()
  }

  if (item.value?.children) {
    expanded.value = !expanded.value

    return
  }

  menuExpanableContext.activeKey.value = item.value.name
  const activeAllAncestors = activeStrategy?.value === 'active-ancestors'

  if (!item.value?.children && activeAllAncestors) {
    menuExpanableContext.activeKeys.value = [...item.value.parentNames, item.value.name]
    return
  }

  if (!item.value?.children && !activeAllAncestors) {
    menuExpanableContext.activeKeys.value = [item.value.name]
    return
  }
}

const isActive = computed(() => {
  return menuExpanableContext.activeKeys.value.includes(item.value.name)
})

const tagName = computed(() => {
  if (item.value?.tagName) {
    return item.value.tagName
  }

  return 'div'
})

const bindingProps = computed(() => {
  if (item.value.children) {
    return item.value
  }


  const { onClick, ...rest } = item.value?.props || {}
  return rest
})

onMounted(() => {
  expanded.value = !!item.value.expanded
  const _defaultActiveKeys = defaultActiveKeys?.value || []
  activeKeys.value = [...activeKeys.value, ..._defaultActiveKeys]
})
</script>

<style scoped lang="scss">
@import '@/scss/variables/color';

.wrapper {
  margin-bottom: 1px;

  .item {
    padding: 8px 0;
    border-radius: 3px;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
    user-select: none;
    color: $text-black;
    position: relative;

    .label {
      display: flex;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &.no-icon {
        padding-left: 8px;
      }
    }

    .left-icon,
    .right-icon {
      width: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:not(:last-child) {
      margin-bottom: 1px;
    }

    &:hover {
      background: #eee;
    }

    &.active {
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 3px;
        height: 100%;
        background: #2980b9;
      }

      background: #eee;

      &.has-children {
        &::before {
          background: #ddd;
        }
      }
    }
  }

  .sub-menu {
    margin-left: 24px;
    border-radius: 3px;

    &.show-full {}
  }

  &.show-less {
    .sub-menu {
      display: none;
    }
  }
}
</style>