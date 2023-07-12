import type { VueElement } from 'vue'

export interface IMenuItem {
  key: string
  icon?: VueElement
  label?: string
  expanded?: boolean
  onClick?: () => void
  tagName?: string
  props?: any
  children?: IMenuItem[]
}

export interface IMenuProps {
  items: IMenuItem[]
  defaultActiveKeys?: string[]
  isShowFull: boolean
}

export interface IMenuItemProps {
  item: IMenuItem
  isShowFull: boolean
  defaultActiveKeys?: string[]
}
