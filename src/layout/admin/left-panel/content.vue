<template>
  <div class="content">
    <Menu :items="items" :defaultActiveKeys="defaultActiveKeys" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, watch, toRefs } from 'vue'
import { useLeftPanelMenuStore } from '@/stores/leftPanelMenu'
import Menu from '@/components/molecules/menu-expanable/index.vue'

import {
  MailOutlined,
  QqOutlined,
  AppstoreOutlined,
  SettingOutlined,
  HomeOutlined
} from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'

const items = ref([
  {
    key: 'home',
    icon: HomeOutlined,
    label: 'Dashboard',
    expanded: true,
    children: [
      { key: 'pie-chart', icon: HomeOutlined, label: 'Pie Chart' },
      { key: 'stock-chart', label: 'Stock Chart' },
      {
        key: 'column-chart',
        icon: HomeOutlined,
        label: 'Column chart',
        children: [
          { key: 'last-year', icon: HomeOutlined, label: 'Last years' }
        ]
      }
    ]
  },
  {
    key: 'about', icon: HomeOutlined, label: 'About', tagName: 'router-link', props: {
      to: '/about'
    }
  },
  { key: 'post', icon: HomeOutlined, label: 'Post' },
  { key: 'settings', icon: HomeOutlined, label: 'Setting' },
])

const defaultActiveKeys = ref(['home'])
</script>

<style scoped lang="scss">
@import '../variable';

.content {
  padding: 8px;
  box-sizing: border-box;
}
</style>
