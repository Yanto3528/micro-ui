import styled, { css } from 'styled-components'

import { resolveColor, getBorderRadius } from '@/utils'
import { fontStyles } from '@/styles'

import { Alignment } from './utils/constants'

const resolveClosePosition = ({ position }) => {
  switch (position) {
    case 'left':
      return css({ left: '10px' })
    default:
      return css({ right: '10px' })
  }
}

export const Overlay = styled.div.attrs(() => ({
  className: 'micro-modal-overlay',
}))`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-modal-wrapper',
}))`
  background-color: ${resolveColor('bg')};
  border-radius: ${getBorderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: 90vw;
  position: relative;
  overflow-x: hidden;
  ${fontStyles};

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const HeaderWrapper = styled.div.attrs(() => ({
  className: 'micro-modal-header-wrapper',
}))`
  height: ${({ height }) => height};
  background-color: ${resolveColor('bg')};
  position: relative;
  color: ${resolveColor('color')};
  margin-bottom: ${({ hasIcon }) => (hasIcon ? '20px' : '0px')};
  padding: ${({ padding }) => padding};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${fontStyles};

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const HeaderIconWrapper = styled.div.attrs(() => ({
  className: 'micro-modal-header-icon-wrapper',
}))`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: ${({ padding }) => padding};
  border-radius: 50%;
  background-color: ${resolveColor('bg')};
  box-shadow: ${({ boxShadow }) => boxShadow};
  color: ${resolveColor('color')};

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const CloseWrapper = styled.div.attrs(() => ({
  className: 'micro-modal-close-wrapper',
}))`
  position: absolute;
  z-index: 10;
  top: 10px;
  background-color: ${resolveColor('bg')};
  width: 2em;
  height: 2em;
  color: ${resolveColor('color')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${getBorderRadius};
  cursor: pointer;
  ${resolveClosePosition};

  .micro-modal-close-icon {
    background-color: ${resolveColor('color')};
    &:after {
      background-color: ${resolveColor('color')};
    }
  }

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const CloseIcon = styled.span.attrs(() => ({
  className: 'micro-modal-close-icon',
}))`
  width: 1.3em;
  height: 0.15em;
  position: relative;
  transform: rotate(45deg);

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }
`

export const Title = styled.h3.attrs(() => ({
  className: 'micro-modal-title',
}))`
  ${fontStyles};
  color: ${resolveColor('color')};
  margin: ${({ margin }) => margin};

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Content = styled.div.attrs(() => ({
  className: 'micro-modal-content',
}))`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignment }) => Alignment[alignment]};
  text-align: ${({ alignment }) => alignment};
  padding: ${({ padding }) => padding};

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Body = styled.p.attrs(() => ({
  className: 'micro-modal-body',
}))`
  color: ${resolveColor('color')};
  margin: ${({ margin }) => margin};
  ${fontStyles};

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const ActionsWrapper = styled.div.attrs(() => ({
  className: 'actions-wrapper',
}))`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ alignment }) => Alignment[alignment]};
  margin-top: 20px;
  > *:not(:last-child) {
    margin-right: ${({ spacing }) => spacing};
  }

  ${({ customStyle }) => customStyle && css(customStyle)};
`
