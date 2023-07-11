<template>
  <div class="footer" :class="{ expaned: isExpaned }">
    <div class="items">
      <ButtonIcon @click="toggleExpaned">
        <LeftOutlined v-if="isExpaned" />
        <RightOutlined v-else />
      </ButtonIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, watch } from 'vue'
import ButtonIcon from '@/components/atoms/buttons/button-icon.vue'
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';
import { useLeftPanelMenuStore } from '@/stores/leftPanelMenu'

const leftPanelStore = useLeftPanelMenuStore()
const { isExpaned, toggleExpaned } = toRefs(leftPanelStore)
</script>

<style scoped lang="scss">
@import '../variable';

.footer {
  padding: 8px;
  box-sizing: border-box;

  .items {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
