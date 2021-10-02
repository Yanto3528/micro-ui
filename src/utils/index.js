import { merge } from 'lodash-es'

import { theme as baseTheme } from '../components/theme'

export const noop = () => {}

export const resolveColor = (theme, color) => {
  return theme.colors[color] || color
}

export const resolveFontFamily = (fontFamily) => {
  return fontFamily ? `${fontFamily}, sans-serif` : 'sans-serif'
}

export const extendTheme = (newTheme) => {
  return merge(baseTheme, newTheme)
}

export const selectProps = (object, selectedKeys) => {
  let result = {}
  Object.entries(object).forEach(([key, value]) => {
    if (
      (value && !selectedKeys) ||
      (Array.isArray(selectedKeys) && selectedKeys.includes(key))
    ) {
      result[key] = value
    }
  })

  return result
}

export const getProps = (componentProps, defaultThemeProps, selectedKeys) => {
  const componentPropsResult = selectProps(componentProps, selectedKeys)
  const defaultThemePropsResult = selectProps(defaultThemeProps, selectedKeys)

  return {
    ...defaultThemePropsResult,
    ...componentPropsResult,
  }
}
