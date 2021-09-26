import keyMirror from 'keymirror'
import { css } from 'styled-components'

export const AnchorPosition = keyMirror({
  TOP_LEFT: null,
  TOP_CENTER: null,
  TOP_RIGHT: null,
  BOTTOM_LEFT: null,
  BOTTOM_CENTER: null,
  BOTTOM_RIGHT: null,
})

export const RadioType = keyMirror({
  CHECK: null,
  CIRCULAR: null,
})

export const ComponentTheme = keyMirror({
  WhiteRed: null,
  WhiteGray: null,
  Gray: null,
  Disable: null,
})

export const CrossComponentZIndex = {
  DEFAULT: 10,
  ACTIVE_COMPONENT: 11,
}

export const SliderSpacing = {
  DESKTOP: 30,
  MOBILE: 10,
}

export const ScreenSizeLimit = {
  FULL_HD: 1920,
  LARGE_SCREEN: 1660,
  MEDIUM_SCREEN: 1440,
  SMALL_SCREEN: 1366,
  LAPTOP: 1280,
  DESKTOP: 1024,
  RESPONSIVE: 960,
  TABLET: 768,
  DOUBLE_SMALLEST: 640,
  PHABLET: 426,
  PHONE: 375,
  SMALLEST: 320,
}

export const MediaQuery = Object.keys(ScreenSizeLimit).reduce(
  (finalObject, currentKey) => {
    const value = ScreenSizeLimit[currentKey]
    finalObject[currentKey] = (...args) => css`
      @media (max-width: ${value}px) {
        ${css(...args)}
      }
    `
    return finalObject
  },
  {}
)

export const YesNoType = keyMirror({
  SQUARE: null,
  BUTTON: null,
})

export const AddRemoveStyle = keyMirror({
  Primary: null,
  White: null,
})

export const ListStyle = keyMirror({
  COLUMN: null,
  ROW: null,
})

export const TimeFormat = keyMirror({
  START: null,
  END: null,
})
