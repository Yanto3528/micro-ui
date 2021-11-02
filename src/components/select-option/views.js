import styled, { css } from 'styled-components'
import { resolveColor } from '../../utils'

const solidStyles = css`
  border: 1px solid ${({ theme, bg }) => resolveColor(theme, bg)};
  background-color: ${({ theme, bg }) => resolveColor(theme, bg)};
`

const outlineStyles = css`
  border: 1px solid
    ${({ theme, borderColor }) => resolveColor(theme, borderColor)};

  .aia-select-icon-container {
    color: ${({ theme, borderColor }) => resolveColor(theme, borderColor)};
  }

  &:focus-within {
    border-color: ${({ theme, focusBorderColor, hasError }) =>
      !hasError && resolveColor(theme, focusBorderColor)};
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

export const Wrapper = styled.div.attrs(() => ({
  className: 'aia-select-wrapper',
}))`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${({ padding }) => padding};
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  height: ${({ height }) => height};
  border-radius: ${({ radius, rounded }) => (rounded ? '50px' : radius)};
  transition: border 0.2s;
  cursor: pointer;
  color: ${({ theme, color }) => resolveColor(theme, color)};
  ${resolveVariant};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};

  option {
    color: ${({ theme, color }) => resolveColor(theme, color)};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.colors.danger};
    `}

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const StyledInput = styled.input.attrs(() => ({
  className: 'aia-select-input',
}))`
  font: inherit;
  color: inherit;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  height: 100%;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  text-overflow: ellipsis;

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    font-weight: lighter;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    font-weight: lighter;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    font-weight: lighter;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    font-weight: lighter;
  }
`

export const OptionWrapper = styled.div.attrs(() => ({
  className: 'aia-select-option-wrapper',
}))`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
  max-height: 300px;
  overflow: auto;
`

export const StyledOption = styled.div.attrs(() => ({
  className: 'aia-select-option',
}))`
  display: inline-block;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray2};
  }
`

export const IconContainer = styled.span.attrs(() => ({
  className: 'aia-select-icon-container',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  pointer-events: none;
`
