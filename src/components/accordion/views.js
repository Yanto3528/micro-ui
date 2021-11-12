import styled, { css } from 'styled-components'
import { resolveColor } from '@/utils'
import { fontStyles } from '@/styles'

import { Icon } from '../icon'

const Wrapper = styled.div.attrs(() => ({
  className: 'aia-accordion-wrapper',
}))`
  width: 100%;
  height: auto;
  border: '5px solid red';
  border-radius: '10px';
  ${fontStyles}
  ${({ wrapperCustomStyle }) => wrapperCustomStyle && css(wrapperCustomStyle)};
`

const Title = styled.div.attrs(() => ({
  className: 'aia-accordion-title',
}))`
  display: flex;
  flex-direction: ${({ arrowPosition }) =>
    arrowPosition === 'right' ? 'row-reverse' : 'row'};
  align-items: center;
  cursor: pointer;
  padding: ${({ padding }) => padding};

  font-size: ${({ padding }) => padding || '18px'};
  ${fontStyles}
`

const TitleText = styled.span.attrs(() => ({
  className: 'aia-accordion-title-text',
}))`
  color: ${({ theme, bg }) => resolveColor(theme, bg)};

  ${fontStyles}
  ${({ titleCustomStyle }) => titleCustomStyle && css(titleCustomStyle)};
`

const ArrowIcon = styled(Icon).attrs(() => ({
  className: 'aia-accordion-arrow',
  name: 'forward',
  size: 'l',
}))`
  font-size: 1.5em;

  transform-origin: center;
  transition: all 0.3s ease-out;
  transform: ${({ isExpand }) => (isExpand ? 'rotate(90deg)' : 'none')};
`

const Content = styled.div.attrs(() => ({
  className: 'aia-accordion-container',
}))`
  width: 100%;
  height: ${({ isExpand }) => (isExpand ? 'auto' : '0px')};
  overflow: ${({ isExpand }) => (isExpand ? 'visible' : 'hidden')};

  padding: ${({ padding }) => padding || '20px 10px'};
  transform-origin: center;
  transition: all 0.3s ease-out;

  ${({ contentCustomStyle }) => contentCustomStyle && css(contentCustomStyle)};
`

export { Wrapper, Title, TitleText, Content, ArrowIcon }
