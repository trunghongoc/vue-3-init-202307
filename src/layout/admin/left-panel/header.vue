<template>
  <div class="header">
    <div class="user">
      <ButtonIcon @click="clickUserIcon">
        <UserOutlined />
      </ButtonIcon>

      <span v-show="isExpaned">trunghongoc</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, watch } from 'vue'
import { message } from 'ant-design-vue'

import { LeftOutlined, RightOutlined, UserOutlined } from '@ant-design/icons-vue'

import ButtonIcon from '@/components/atoms/buttons/button-icon.vue'
import { useLeftPanelMenuStore } from '@/stores/leftPanelMenu'

const leftPanelStore = useLeftPanelMenuStore()
const { isExpaned } = toRefs(leftPanelStore)

const clickUserIcon = () => {
  message.info('clicked user icon')
}
</script>

<style scoped lang="scss">
@import '../variable';

.header {
  padding: 8px;
  box-sizing: border-box;

  .user {
    display: flex;
    align-items: center;

    .button {
      margin-right: 6px;
    }
  }
}
</style>
