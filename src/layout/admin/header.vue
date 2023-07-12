<template>
  <div class="page-header" :class="{ 'menu-expanded': isExpaned }">
    <div class="layout">
      <div class="title" id="layout-admin-page-header-title">{{ title }}</div>

      <div class="content" id="layout-admin-page-header-content"></div>

      <div class="right" id="layout-admin-page-header-right">
        <div class="teleport-area">
          <div id="layout-admin-page-header-right-teleport-area"></div>
        </div>

        <div class="menu-actions">
          <a-dropdown>
            <ButtonIcon>
              <UserOutlined />
            </ButtonIcon>

            <template #overlay>
              <a-menu>
                <a-menu-item>1st menu item</a-menu-item>
                <a-menu-item>2nd menu item</a-menu-item>
                <a-menu-item>3rd menu item</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { useLeftPanelMenuStore } from '@/stores/leftPanelMenu'

import { UserOutlined } from '@ant-design/icons-vue'
import ButtonIcon from '@/components/atoms/buttons/button-icon.vue'


const leftPanelStore = useLeftPanelMenuStore()
const { isExpaned } = toRefs(leftPanelStore)

const route = useRoute()

defineOptions({
  name: 'LayoutAdminPageHeader'
})

const title = computed(() => {
  return route.meta.title
})
</script>

<style scoped lang="scss">
@import './variable';

.page-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: $header-height;
  box-sizing: border-box;
  border-bottom: 1px solid $border-color;
  background: #fff;
  padding: 0 16px 0 ($menu-width-collapsed + 16px);

  .layout {
    display: flex;
    column-gap: 8px;

    .title {
      display: flex;
      line-height: $header-height;
      font-size: 18px;
    }

    .right {
      display: flex;
      flex: 1;
      column-gap: 8px;

      .teleport-area {
        display: flex;
        align-items: center;
        flex: 1;

        #layout-admin-page-header-right-teleport-area {
          width: 100%;
        }
      }

      .menu-actions {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }

  &.menu-expanded {
    padding: 0 16px 0 ($menu-width-expaned + 16px);
  }
}
</style>
