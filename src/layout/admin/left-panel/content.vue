<template>
  <div class="content">
    <Menu :items="items" :defaultActiveKeys="defaultActiveKeys" :isShowFull="isExpaned" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, watch, toRefs } from 'vue'
import { useLeftPanelMenuStore } from '@/stores/leftPanelMenu'
import Menu from '@/components/molecules/menu-expanable/index.vue'
import type { IMenuItem } from '@/components/molecules/menu-expanable/typed'

const items = ref<IMenuItem[]>([
  {
    key: 'dashboard', icon: { name: 'home-outlined' }, label: 'Dashboard', tagName: 'router-link', props: {
      to: '/'
    }
  },
  {
    key: 'about', icon: { name: 'appstore-outlined' }, label: 'About', tagName: 'router-link', props: {
      to: '/about'
    }
  },
  {
    key: 'text', icon: { name: 'setting-outlined' }, label: 'Text', tagName: 'router-link', props: {
      to: '/text'
    }
  },
  {
    key: 'analysis',
    icon: { name: 'home-outlined' },
    label: 'Analysis',
    expanded: true,
    children: [
      { key: 'pie-chart', icon: { name: 'home-outlined' }, label: 'Pie Chart' },
      { key: 'stock-chart', label: 'Stock Chart' },
      {
        key: 'column-chart',
        icon: { name: 'home-outlined' },
        label: 'Column chart',
        children: [
          { key: 'last-year', icon: { name: 'home-outlined' }, label: 'Last years' }
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
