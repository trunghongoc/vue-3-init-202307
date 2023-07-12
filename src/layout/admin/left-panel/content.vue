<template>
  <div class="content">
    <Menu :items="items" :defaultActiveKeys="defaultActiveKeys" :isShowFull="isExpaned" />
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
    key: 'home', icon: HomeOutlined, label: 'Home', tagName: 'router-link', props: {
      to: '/'
    }
  },
  {
    key: 'about', icon: HomeOutlined, label: 'About', tagName: 'router-link', props: {
      to: '/about'
    }
  },
  {
    key: 'text', icon: HomeOutlined, label: 'Text', tagName: 'router-link', props: {
      to: '/text'
    }
  },
  { key: 'post', icon: HomeOutlined, label: 'Post' },
  { key: 'settings', icon: HomeOutlined, label: 'Setting' },
  {
    key: 'home2',
    icon: HomeOutlined,
    label: 'Dashboard 2',
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
    key: 'home3',
    icon: HomeOutlined,
    label: 'Dashboard 3',
    expanded: false,
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
    key: 'home4',
    icon: HomeOutlined,
    label: 'Dashboard 4',
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
    key: 'home5',
    icon: HomeOutlined,
    label: 'Dashboard 5',
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
    key: 'home6',
    icon: HomeOutlined,
    label: 'Dashboard 6',
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
    key: 'home7',
    icon: HomeOutlined,
    label: 'Dashboard 7',
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
    key: 'home8',
    icon: HomeOutlined,
    label: 'Dashboard 8',
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
])

const defaultActiveKeys = ref(['home'])

const leftPanelStore = useLeftPanelMenuStore()
const { isExpaned } = toRefs(leftPanelStore)
</script>

<style scoped lang="scss">
@import '../variable';

.content {
  padding: 8px;
  box-sizing: border-box;
}
</style>
