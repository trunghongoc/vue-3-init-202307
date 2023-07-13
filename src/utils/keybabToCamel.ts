import { startCase, camelCase } from 'lodash'

export const keybabToCamelClass = (str: string) => {
  return startCase(str).replace(/ /g, '')
}

export const keybabToCamelVar = (str: string) => {
  return camelCase(str)
}
