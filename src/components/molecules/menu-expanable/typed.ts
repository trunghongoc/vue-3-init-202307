import type { VueElement } from 'vue'

export interface IMenuItem {
  key: string | number
  icon?: VueElement
  label?: string
  onClick?: () => void
  tagName?: string
  props?: any
  children?: IMenuItem[]
}

export interface IMenuProps {
  items: IMenuItem[]
  activeKey?: string | number | (string | number)[]
}

export interface IMenuItemProps {
  item: IMenuItem
  activeKey?: string | number | (string | number)[]
}
