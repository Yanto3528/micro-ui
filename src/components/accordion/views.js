import styled, { css } from 'styled-components'

import { resolveColor } from '@/utils'
import { fontStyles } from '@/styles'

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-accordion-wrapper',
}))`
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  max-width: 100%;
  height: ${({ height }) => height};

  ${fontStyles};
  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Item = styled.div.attrs(() => ({
  className: 'micro-accordion-item',
}))`
  color: ${resolveColor('color')};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const HeaderWrapper = styled.div.attrs(() => ({
  className: 'micro-accordion-title',
}))`
  display: flex;
  flex-direction: ${({ arrowPosition }) =>
    arrowPosition === 'right' ? 'row-reverse' : 'row'};
  align-items: center;
  cursor: pointer;
  padding: ${({ padding }) => padding};
  background-color: ${resolveColor('bg')};
  border: 1px solid ${resolveColor('borderColor')};
  color: ${resolveColor('color')};
  transition: all 0.4s;
  ${fontStyles};
  ${({ customStyle }) => customStyle && css(customStyle)};
  ${({ isExpand, activeStyle }) => isExpand && activeStyle && css(activeStyle)};
`

export const HeaderText = styled.span.attrs(() => ({
  className: 'micro-accordion-header-text',
}))`
  flex: 1;
`

export const HeaderIconContainer = styled.div.attrs(() => ({
  className: 'micro-accordion-header-icon-container',
}))`
  > svg {
    transform-origin: center;
    transition: all 0.2s ease-out;
    transform: ${({ isExpand }) => (isExpand ? 'rotate(180deg)' : 'none')};
  }
`

export const Content = styled.div.attrs(() => ({
  className: 'micro-accordion-content',
}))`
  width: 100%;
  padding: ${({ padding }) => padding};
  color: ${resolveColor('color')};
  ${({ customStyle }) => customStyle && css(customStyle)};
`
