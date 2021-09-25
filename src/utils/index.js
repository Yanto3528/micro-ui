import { merge } from 'lodash-es'

import { theme as baseTheme } from '../components'

export const noop = () => {}

export const resolveColor = (theme, color) => {
  return theme.colors[color] || color
}

export const extendTheme = (newTheme) => {
  return merge(baseTheme, newTheme)
}
