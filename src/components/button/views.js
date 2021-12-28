import styled, { css } from 'styled-components'

import { spinning } from '@/animations'
import { resolveColor, getBorderRadius } from '@/utils'
import { fontStyles } from '@/styles'

const solidStyles = css`
  background-color: ${resolveColor('bg')};
  color: ${resolveColor('color')};
  border: 1px solid ${resolveColor('bg')};
  .micro-button-spinner {
    border-color: ${resolveColor('color')};
    border-top-color: transparent;
  }
`

const outlineStyles = css`
  background-color: transparent;
  color: ${resolveColor('bg')};
  border: 1px solid ${resolveColor('bg')};
  &:hover {
    background-color: ${resolveColor('bg')};
    color: ${resolveColor('color')};
    .micro-button-spinner {
      border-color: ${resolveColor('color')};
      border-top-color: transparent;
    }
  }
  .micro-button-spinner {
    border-color: ${resolveColor('bg')};
    border-top-color: transparent;
  }
`

const resolveVariant = ({ variant }) => {
  switch (variant) {
    case 'outline':
      return outlineStyles
    default:
      return solidStyles
  }
}

export const StyledButton = styled.button.attrs(() => ({
  className: 'micro-button',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 5px;
  border: none;
  border-radius: ${getBorderRadius};
  outline: none;
  cursor: pointer;
  padding: ${({ padding }) => padding};
  transition: all 0.2s;
  line-height: 1;
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  height: ${({ height }) => height};
  ${fontStyles}

  :hover:not(:disabled) {
    opacity: 0.95;
  }
  :active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${resolveVariant};

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const LoadingIcon = styled.span.attrs(() => ({
  className: 'micro-button-spinner',
}))`
  height: 1em;
  width: 1em;
  border: 0.15em solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinning} 1s infinite linear;
`

export const IconContainer = styled.span.attrs(() => ({
  className: 'micro-button-icon-container',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
`
