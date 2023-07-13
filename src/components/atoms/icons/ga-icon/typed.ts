import type { CSSProperties } from 'vue'

export interface IAIconProps {
  rotate?: number
  spin?: boolean
  style?: CSSProperties
  twoToneColor?: string // hex color
}

export interface IAIconKeybabProps extends IAIconProps {
  name: string
}
