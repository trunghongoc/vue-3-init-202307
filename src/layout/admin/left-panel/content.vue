<template>
  <div class="content">
    <Menu :items="items" :defaultActiveKeys="defaultActiveKeys" :isShowFull="isExpaned" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, watch, toRefs, onMounted } from 'vue'
import { message } from 'ant-design-vue'
import { useRoute } from 'vue-router'
import { useLeftPanelMenuStore } from '@/stores/leftPanelMenu'
import Menu from '@/components/molecules/menu-expanable/index.vue'
import type { IMenuItem } from '@/components/molecules/menu-expanable/typed'

const route = useRoute()

const items = ref<IMenuItem[]>([
  {
    name: 'home', icon: { name: 'home-outlined' }, label: 'Dashboard', tagName: 'router-link', props: {
      to: '/'
    }
  },
  {
    name: 'about', icon: { name: 'appstore-outlined' }, label: 'About', tagName: 'router-link', props: {
      to: '/about'
    }
  },
  {
    name: 'tsx', icon: { name: 'gateway-outlined' }, label: 'TSX style', tagName: 'router-link', props: {
      to: '/tsx'
    }
  },
  {
    name: 'tsx2', icon: { name: 'gateway-outlined' }, label: 'TSX 2 style', tagName: 'router-link', props: {
      to: '/tsx2'
    }
  },
  {
    name: 'text', icon: { name: 'setting-outlined' }, label: 'Text', tagName: 'router-link', props: {
      to: '/text'
    }
  },
  {
    name: 'analysis',
    icon: { name: 'home-outlined' },
    label: 'Analysis',
    expanded: true,
    children: [
      { name: 'pie-chart', icon: { name: 'home-outlined' }, label: 'Pie Chart', onClick: () => message.info('clicked Pie Chart') },
      { name: 'stock-chart', label: 'Stock Chart', onClick: () => message.info('clicked Stock Chart') },
      {
        name: 'column-chart',
        icon: { name: 'home-outlined' },
        label: 'Column chart',
        onClick: () => message.info('clicked Column chart'),
        children: [
          { name: 'last-year', icon: { name: 'home-outlined' }, label: 'Last years', onClick: () => message.info('clicked Last years') },
        ]
      }
    ]
  },
])

const defaultActiveKeys = ref([])

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
