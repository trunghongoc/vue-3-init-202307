import type { IAIconKeybabProps } from '@/components/atoms/icons/ga-icon/typed'

export interface IMenuItem {
  name: string
  icon?: IAIconKeybabProps
  label?: string
  expanded?: boolean
  onClick?: () => void
  tagName?: string
  props?: any
  children?: IMenuItem[]
}

export interface IMenuItemCooked extends Omit<IMenuItem, 'children'> {
  parentNames: string[]
  children?: IMenuItemCooked[]
}

export interface IMenuProps {
  items: IMenuItem[]
  defaultActiveKeys?: string[]
  isShowFull?: boolean
  activeStrategy?: 'active-ancestors' | 'only-current-item'
}

export interface IMenuItemProps {
  item: IMenuItemCooked
  isShowFull: boolean
  defaultActiveKeys?: string[]
  activeStrategy?: IMenuProps['activeStrategy']
}
