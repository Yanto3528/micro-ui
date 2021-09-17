import styled, { css } from 'styled-components'
import { regularFont } from '../../styles'
import Animation from '../../animations'
import { resolveColor } from '../../utils'

const solidStyles = css`
  background-color: ${({ bg }) => resolveColor(bg)};
  color: ${({ textColor }) => resolveColor(textColor)};
  border: 1px solid ${({ bg }) => resolveColor(bg)};
  ${LoadingIcon} {
    border-color: ${({ textColor }) => resolveColor(textColor)};
  }
`

const outlineStyles = css`
  background-color: transparent;
  color: ${({ bg }) => resolveColor(bg)};
  border: 1px solid ${({ bg }) => resolveColor(bg)};
  &:hover {
    background-color: ${({ bg }) => resolveColor(bg)};
    color: ${({ textColor }) => resolveColor(textColor)};
    .aia-now-button-spinner {
      border-color: ${({ textColor }) => resolveColor(textColor)};
      border-top-color: transparent;
    }
  }
  .aia-now-button-spinner {
    border-color: ${({ bg }) => resolveColor(bg)};
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

export const StyledButton = styled.button.attrs(({ type, className }) => ({
  type: type || '',
  className: className ? className + ' aia-now-button' : 'aia-now-button',
}))`
  text-align: center;
  ${regularFont()};
  border: none;
  border-radius: ${({ rounded, radius }) => (rounded ? '26px' : radius || '4px')};
  outline: none;
  cursor: pointer;
  padding: 12px 32px;
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

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const LoadingIcon = styled.span.attrs(({ className }) => ({
  className: className + ' aia-now-button-spinner',
}))`
  height: 1em;
  width: 1em;
  border: 3px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${Animation.spinning} 1s infinite linear;
`
