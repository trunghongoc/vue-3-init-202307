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
  defaultActiveKeys?: (string | number)[]
}

export interface IMenuItemProps {
  item: IMenuItem
  defaultActiveKeys?: (string | number)[]
}
