import styled, { css } from 'styled-components'
import { resolveColor } from '@/utils'
import { fontStyles } from '@/styles'

import { Icon } from '../icon'

export const Wrapper = styled.div.attrs(() => ({
  className: 'aia-accordion-wrapper',
}))`
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  height: ${({ height }) => height};

  ${fontStyles}
  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Item = styled.div.attrs(() => ({
  className: 'aia-accordion-item',
}))`
  color: ${resolveColor('color')};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const HeaderWrapper = styled.div.attrs(() => ({
  className: 'aia-accordion-title',
}))`
  display: flex;
  flex-direction: ${({ arrowPosition }) =>
    arrowPosition === 'right' ? 'row-reverse' : 'row'};
  align-items: center;
  cursor: pointer;
  padding: ${({ padding }) => padding};
  background-color: ${resolveColor('bg')};
  border: 1px solid ${resolveColor('borderColor')};
  transition: all 0.4s;
  ${fontStyles};
  ${({ customStyle }) => customStyle && css(customStyle)};
  ${({ isExpand, activeStyle }) => isExpand && activeStyle && css(activeStyle)};
`

export const HeaderText = styled.span.attrs(() => ({
  className: 'aia-accordion-header-text',
}))`
  flex: 1;
`

export const HeaderIcon = styled(Icon).attrs(() => ({
  className: 'aia-accordion-header-icon',
  name: 'forward',
  size: '1.5em',
}))`
  transform-origin: center;
  transition: all 0.3s ease-out;
  transform: ${({ isExpand }) => (isExpand ? 'rotate(90deg)' : 'none')};
`

export const Content = styled.div.attrs(() => ({
  className: 'aia-accordion-content',
}))`
  width: 100%;
  padding: ${({ padding }) => padding};
  color: ${resolveColor('color')};
  ${({ customStyle }) => customStyle && css(customStyle)};
`
