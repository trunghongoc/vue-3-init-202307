<template>
  <component :is="tagName" v-bind="item.props" class="item" :class="{ active: isActive }" @click="onClickItem">
    <div class="left-icon" v-if="item?.icon">
      <component :is="item.icon" />
    </div>

    <div class="label" :class="{ 'no-icon': !item?.icon }">{{ item.label }}</div>

    <div class="right-icon" v-if="item.children">
      <UpOutlined v-if="expanded" />
      <DownOutlined v-else />
    </div>
  </component>

  <div class="sub-menu" v-if="item.children" v-show="expanded">
    <MenuItemExpanable v-for="(childItem, index) of item.children" :key="index" :item="childItem" />
  </div>
</template>

<script lang="ts">
import { ref, toRefs, computed, onMounted, defineComponent } from 'vue'
import type { IMenuItem, IMenuItemProps } from './typed'

import { LeftOutlined, RightOutlined, UserOutlined, DownOutlined, UpOutlined } from '@ant-design/icons-vue'

export default {
  name: 'MenuItemExpanable',
  props: {
    item: {
      type: Object
    },
    activeKey: {
      type: [String, Number, Array]
    }
  },
  components: {
    DownOutlined,
    UpOutlined
  },
  setup(props: IMenuItemProps) {
    const { item, activeKey } = toRefs(props)

    const activeKeys = computed(() => {
      const keys = Array.isArray(activeKey.value) ? activeKey.value : [activeKey.value]

      return keys
    })

    const expanded = ref(false)

    const onClickItem = () => {
      if (item.value?.children) {
        expanded.value = !expanded.value

        return;
      }
    }

    const isActive = computed(() => {
      return activeKeys.value.includes(item.value.key)
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
    })

    return {
      item, activeKey, activeKeys, tagName, isActive, onClickItem, expanded, bindingProps
    }
  }
}

// const props = defineProps<IMenuItem>()
</script>

<style scoped lang="scss">
.item {
  padding: 8px 0;
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  user-select: none;

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
    border-left: 3px solid #2980b9;
    background: #eee;
  }
}

.sub-menu {
  margin-left: 24px;
  border-radius: 3px;
}
</style>