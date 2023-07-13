import type { IAIconKeybabProps } from '@/components/atoms/icons/ga-icon/typed'

export interface IMenuItem {
  key: string
  icon?: IAIconKeybabProps
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
  isShowFull?: boolean
  activeStrategy?: 'active-ancestors' | 'only-current-item'
}

export interface IMenuItemProps {
  item: IMenuItem
  isShowFull: boolean
  defaultActiveKeys?: string[]
  activeStrategy?: IMenuProps['activeStrategy']
}
