import styled from 'styled-components'

import { resolveColor, resolveFontFamily } from '@/utils'
import { fontStyles } from '@/styles'

import { Alignment } from './utils/constants'

export const Overlay = styled.div.attrs(() => ({
  className: 'aia-modal-overlay',
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
  className: 'aia-modal-wrapper',
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
}))`
  margin: 0 10px;
  background-color: ${resolveColor('bg')};
  border-radius: ${({ radius }) => radius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: 100%;
  position: relative;
  overflow-x: hidden;
  font-family: ${({ fontFamily }) => resolveFontFamily(fontFamily)};
`

export const HeaderWrapper = styled.div.attrs(() => ({
  className: 'aia-modal-header-wrapper',
}))`
  height: 90px;
  background-image: ${({ bgImage }) => bgImage};
  background-color: ${resolveColor('bg')};
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`

export const HeaderIconWrapper = styled.div.attrs(() => ({
  className: 'aia-modal-header-icon-wrapper',
}))`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: ${({ padding }) => padding};
  border-radius: 50%;
  background-color: ${resolveColor('bg')};
  box-shadow: ${({ boxShadow }) => boxShadow};
`

export const CloseWrapper = styled.div.attrs(() => ({
  className: 'aia-modal-close-wrapper',
}))`
  position: absolute;
  z-index: 10;
  top: 10px;
  right: 10px;
  background-color: ${resolveColor('bg')};
  width: 2em;
  height: 2em;
  color: ${resolveColor('color')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ radius }) => radius};
  cursor: pointer;

  .aia-modal-close-icon {
    background-color: ${resolveColor('color')};
    &:after {
      background-color: ${resolveColor('color')};
    }
  }
`

export const CloseIcon = styled.span.attrs(() => ({
  className: 'aia-modal-close-icon',
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
  className: 'aia-modal-title',
}))`
  ${fontStyles};
  margin: ${({ margin }) => margin};
`

export const Content = styled.div.attrs(() => ({
  className: 'aia-modal-content',
}))`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignment }) => Alignment[alignment]};
  text-align: ${({ alignment }) => alignment};
  padding: ${({ padding }) => padding};
`

export const Body = styled.p.attrs(() => ({
  className: 'aia-modal-body',
}))`
  color: ${resolveColor('color')};
  margin: ${({ margin }) => margin};
  ${fontStyles};
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
`
