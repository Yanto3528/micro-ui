import { merge } from 'lodash-es'

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
  const filteredRefs = refs.filter(Boolean);
  if (!filteredRefs.length) return null;
  if (filteredRefs.length === 0) return filteredRefs[0];
  return innerRef => {
    for (const ref of filteredRefs) {
      if (typeof ref === 'function') {
        ref(innerRef);
      } else if (ref) {
        ref.current = innerRef;
      }
    }
  };
};