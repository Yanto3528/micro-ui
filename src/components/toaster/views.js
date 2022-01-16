import styled, { css, keyframes } from 'styled-components'

import { MediaQuery, resolveColor } from '@/utils'
import { customStyles } from '@/styles'

const topPositions = ['top-left', 'top', 'top-right']
const bottomPositions = ['bottom-left', 'bottom', 'bottom-right']

const slideTopIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const slideBottomIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const resolveTopPosition = ({ position }) =>
  topPositions.includes(position) &&
  css`
    top: 2rem;
    left: ${position === 'top-left' ? '2rem' : 'auto'};
    right: ${position === 'top-right' ? '2rem' : 'auto'};
    align-items: ${position === 'top-left' ? 'flex-start' : 'flex-end'};
    ${position === 'top' &&
    css`
      left: 50%;
      transform: translateX(-50%);
      align-items: center;
    `}
    > .micro-alert-wrapper {
      animation: ${slideTopIn} 0.4s forwards ease-in-out;
    }
  `

const resolveBottomPosition = ({ position }) =>
  bottomPositions.includes(position) &&
  css`
    top: auto;
    left: auto;
    bottom: 2rem;
    left: ${position === 'bottom-left' ? '2rem' : 'auto'};
    right: ${position === 'bottom-right' ? '2rem' : 'auto'};
    align-items: ${position === 'bottom-left' ? 'flex-start' : 'flex-end'};
    ${position === 'bottom' &&
    css`
      left: 50%;
      transform: translateX(-50%);
      align-items: center;
    `}

    > .micro-alert-wrapper {
      animation: ${slideBottomIn} 0.4s forwards ease-in-out;
    }
  `

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-toaster-wrapper',
}))`
  position: fixed;
  ${resolveTopPosition};
  ${resolveBottomPosition};
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  max-width: 100%;

  ${MediaQuery.PHABLET(css`
    width: 100vw;
    top: 0;
    left: 0;
    padding: 1rem;
  `)}

  ${customStyles};
`

export const AlertWrapper = styled.div.attrs(() => ({
  className: 'micro-alert-wrapper',
}))`
  position: relative;
  overflow: hidden;
  background: white;
  border-radius: 4px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 50rem;
  min-width: 30rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  color: ${resolveColor('color')};
`

export const AlertContentContainer = styled.div.attrs(() => ({
  className: 'micro-alert-content-container',
}))`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  p {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`

export const AlertTitle = styled.h3.attrs(() => ({
  className: 'micro-alert-title',
}))`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};
`

export const AlertBar = styled.div.attrs(() => ({
  className: 'micro-alert-bar',
}))`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${resolveColor('bg')};
  width: 4px;
`

export const AlertCloseContainer = styled.div.attrs(() => ({
  className: 'micro-alert-close',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray[400]};
  cursor: pointer;
`
