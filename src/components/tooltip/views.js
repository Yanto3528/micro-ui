import styled, { css } from 'styled-components'

import { fontStyles } from '@/styles'
import { resolveColor, getBorderRadius } from '@/utils'

import {
  topStartStyles,
  topStyles,
  topEndStyles,
  bottomStartStyles,
  bottomStyles,
  bottomEndStyles,
  leftStartStyles,
  leftStyles,
  leftEndStyles,
  rightStartStyles,
  rightStyles,
  rightEndStyles,
} from './utils/styles'

const PlacementStyles = {
  'top-start': topStartStyles,
  top: topStyles,
  'top-end': topEndStyles,
  'bottom-start': bottomStartStyles,
  bottom: bottomStyles,
  'bottom-end': bottomEndStyles,
  'left-start': leftStartStyles,
  left: leftStyles,
  'left-end': leftEndStyles,
  'right-start': rightStartStyles,
  right: rightStyles,
  'right-end': rightEndStyles,
}

const resolvePlacement = ({ placement }) => {
  return PlacementStyles[placement]
}

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-tooltip-wrapper',
}))`
  display: inline-block;
  position: relative;
  ${fontStyles};
`

export const Content = styled.div.attrs(() => ({
  className: 'micro-tooltip-content',
}))`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: absolute;
  background-color: ${resolveColor('bg')};
  color: ${resolveColor('color')};
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  padding: ${({ padding }) => padding};
  border-radius: ${getBorderRadius()};
  white-space: pre-wrap;
  z-index: 8;
  ${resolvePlacement};

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Arrow = styled.span.attrs(() => ({
  className: 'micro-tooltip-arrow',
}))`
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid ${resolveColor('bg')};
  position: absolute;
  z-index: 9;
`
