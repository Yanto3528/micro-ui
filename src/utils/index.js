import { merge } from 'lodash-es'
import { css } from 'styled-components'

import { theme as baseTheme } from '../components/theme'

export const noop = () => {}

export const getColor = (theme, color) => theme.colors[color] || color

export const resolveColor = (key) => {
  return ({ theme, ...props }) => getColor(theme, props[key])
}

export const resolveFontFamily = (fontFamily) => {
  return fontFamily && `${fontFamily}, sans-serif`
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

export const mergeRefs = (...refs) => {
  const filteredRefs = refs.filter(Boolean)
  if (!filteredRefs.length) return null
  if (filteredRefs.length === 0) return filteredRefs[0]
  return (innerRef) => {
    for (const ref of filteredRefs) {
      if (typeof ref === 'function') {
        ref(innerRef)
      } else if (ref) {
        ref.current = innerRef
      }
    }
  }
}

export const getMediaQuery = (screenSize) => {
  return (...args) =>
    css`
      @media (max-width: ${screenSize}px) {
        ${css(...args)}
      }
    `
}

export const MediaQuery = {
  /** @media(max-width: 1920px) */
  FULL_HD: getMediaQuery(1920),
  /** @media(max-width: 1660px) */
  LARGE_SCREEN: getMediaQuery(1660),
  /** @media(max-width: 1440px) */
  MEDIUM_SCREEN: getMediaQuery(1440),
  /** @media(max-width: 1366px) */
  SMALL_SCREEN: getMediaQuery(1366),
  /** @media(max-width: 1280px) */
  LAPTOP: getMediaQuery(1280),
  /** @media(max-width: 1024px) */
  DESKTOP: getMediaQuery(1024),
  /** @media(max-width: 960px) */
  RESPONSIVE: getMediaQuery(960),
  /** @media(max-width: 768px) */
  TABLET: getMediaQuery(768),
  /** @media(max-width: 640px) */
  DOUBLE_SMALLEST: getMediaQuery(640),
  /** @media(max-width: 426px) */
  PHABLET: getMediaQuery(426),
  /** @media(max-width: 375px) */
  PHONE: getMediaQuery(375),
  /** @media(max-width: 320px) */
  SMALLEST: getMediaQuery(320),
}
