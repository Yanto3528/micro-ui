import styled, { css } from 'styled-components'
import { Colors, regularFont } from '../../styles'
import Animation from '../animation'

const StyledButton = styled.button.attrs(({ type, className }) => ({
  type: type || '',
  className: className + ' aia-now-button',
}))`
  text-align: center;
  ${regularFont()};
  color: white;
  box-sizing: border-box;
  border: none;
  border-radius: ${({ rounded }) => (rounded ? '26px' : '4px')};
  background-color: ${Colors.Primary};
  outline: none;
  cursor: pointer;
  padding: 12px 32px;
  box-shadow: rgba(170, 8, 54, 0.5) 1px 2px 5px 0px;
  transition: transform 0.2s;
  line-height: 1;

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

  ${({ customStyle }) => customStyle && css(customStyle)};
`

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const LoadingIcon = styled.span`
  height: 1em;
  width: 1em;
  border: 3px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${Animation.spinning} 1s infinite linear;
`

export { StyledButton, IconContainer, LoadingIcon }
