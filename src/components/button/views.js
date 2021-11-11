import styled, { css } from 'styled-components'

import { spinning } from '@/animations'
import { resolveColor, resolveFontFamily } from '@/utils'

const solidStyles = css`
  background-color: ${({ theme, bg }) => resolveColor(theme, bg)};
  color: ${({ theme, color }) => resolveColor(theme, color)};
  border: 1px solid ${({ theme, bg }) => resolveColor(theme, bg)};
  .aia-button-spinner {
    border-color: ${({ theme, color }) => resolveColor(theme, color)};
    border-top-color: transparent;
  }
`

const outlineStyles = css`
  background-color: transparent;
  color: ${({ theme, bg }) => resolveColor(theme, bg)};
  border: 1px solid ${({ theme, bg }) => resolveColor(theme, bg)};
  &:hover {
    background-color: ${({ theme, bg }) => resolveColor(theme, bg)};
    color: ${({ theme, color }) => resolveColor(theme, color)};
    .aia-button-spinner {
      border-color: ${({ theme, color }) => resolveColor(theme, color)};
      border-top-color: transparent;
    }
  }
  .aia-button-spinner {
    border-color: ${({ theme, bg }) => resolveColor(theme, bg)};
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
  className: 'aia-button',
}))`
  text-align: center;
  font-family: ${({ fontFamily }) => resolveFontFamily(fontFamily)};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  border: none;
  border-radius: ${({ rounded, radius }) => (rounded ? '50px' : radius)};
  outline: none;
  cursor: pointer;
  padding: ${({ padding }) => padding};
  transition: all 0.2s;
  line-height: 1;
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  height: ${({ height }) => height};

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

export const IconContainer = styled.span.attrs(() => ({
  className: 'aia-button-icon-container',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const LoadingIcon = styled.span.attrs(() => ({
  className: 'aia-button-spinner',
}))`
  height: 1em;
  width: 1em;
  border: 0.15em solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinning} 1s infinite linear;
`

export const LoadingText = styled.span.attrs(() => ({
  className: 'loading-text',
}))`
  display: inline-block;
  margin: 0 5px;
`
