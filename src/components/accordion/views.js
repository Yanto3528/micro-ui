import styled, { css } from 'styled-components'
import { resolveColor } from '@/utils'
import { fontStyles } from '@/styles'

import { Icon } from '../icon'

const Wrapper = styled.div.attrs(() => ({
  className: 'aia-accordion-wrapper',
}))`
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  height: auto;

  ${fontStyles}
  ${({ customStyle }) => customStyle && css(customStyle)};
`

const Item = styled.div.attrs(() => ({
  className: 'aia-accordion-item',
}))`
  color: ${resolveColor('color')};
  margin: ${({ margin }) => margin};

  ${({ customStyle }) => customStyle && css(customStyle)};
`

const HeaderWrapper = styled.div.attrs(() => ({
  className: 'aia-accordion-title',
}))`
  display: flex;
  flex-direction: ${({ arrowPosition }) =>
    arrowPosition === 'right' ? 'row-reverse' : 'row'};
  align-items: center;
  cursor: pointer;
  padding: ${({ padding }) => padding};

  ${({ customStyle }) => customStyle && css(customStyle)};
`

const HeaderIconWrapper = styled(Icon).attrs(() => ({
  className: 'aia-accordion-arrow',
  name: 'forward',
  size: '1.5em',
}))`
  transform-origin: center;
  transition: all 0.3s ease-out;
  transform: ${({ isExpand }) => (isExpand ? 'rotate(90deg)' : 'none')};
`

const Content = styled.div.attrs(() => ({
  className: 'aia-accordion-container',
}))`
  width: 100%;
  height: ${({ isExpand }) => (isExpand ? 'auto' : '0px')};

  /** hidden style for accordion */
  transform-origin: center;
  transition: all 0.5s ease-in-out;
  line-height: ${({ isExpand }) => (isExpand ? '1.5' : '0')};
  padding: ${({ isExpand, padding }) => (isExpand ? padding : '0')};
  color: ${({ isExpand }) => (isExpand ? 'black' : 'transparent')};

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export { Wrapper, Item, HeaderWrapper, HeaderIconWrapper, Content }
