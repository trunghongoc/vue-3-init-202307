<template>
  <div class="content">
    <Menu :items="items" :activeKey="activeKey" />
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
    label: 'Dashboard Dashboard Dashboard Dashboard Dashboard',
    expanded: true,
    children: [
      { key: 'home.1', icon: HomeOutlined, label: 'Dashboard 1' },
      { key: 'home.2', label: 'Dashboard 2' },
      {
        key: 'home.3',
        icon: HomeOutlined,
        label: 'Dashboard 3',
        children: [
          { key: 'home.3.1', icon: HomeOutlined, label: 'Dashboard 3.1' }
        ]
      }
    ]
  },
  {
    key: 'about', icon: HomeOutlined, label: 'About', tagName: 'router-link', props: {
      to: '/about'
    }
  },
  { key: 'about', icon: HomeOutlined, label: 'About' },
  { key: 'settings', icon: HomeOutlined, label: 'Setting' },
  {
    key: 'home2',
    icon: HomeOutlined,
    label: 'Dashboard 2',
    expanded: false,
    children: [
      {
        key: 'home.1', icon: HomeOutlined, label: 'Go to About', tagName: 'router-link', props: {
          to: '/about'
        }
      },
      {
        key: 'home.1', icon: HomeOutlined, label: 'Go to google', tagName: 'a', props: {
          href: 'https://google.com',
          target: '_blank',
          onClick: (event: any) => {
            event.preventDefault()
            alert('ok')
          }
        }
      },
    ]
  }
])

const activeKey = ref(['home'])
</script>

<style scoped lang="scss">
@import '../variable';

.content {
  padding: 8px;
  box-sizing: border-box;
}
</style>
