import styled, { css } from 'styled-components'

import { resolveColor, resolveFontFamily } from '@/utils'
import { ButtonType, Variant } from './utils/constants'

const defaultStyles = css`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex-direction: row;
  .aia-radio-button-icon-container {
    margin-right: ${({ iconSpacing }) => iconSpacing};
  }
`

const squareStyles = css`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  flex-direction: column;
  .aia-radio-button-icon-container {
    margin-bottom: ${({ iconSpacing }) => iconSpacing};
  }
`

const outlineStyles = css`
  color: ${({ theme, bg }) => resolveColor(theme, bg)};
  border: 1px solid ${({ theme, bg }) => resolveColor(theme, bg)};

  &:hover {
    background-color: ${({ theme, bg }) => resolveColor(theme, bg)};
    color: ${({ theme, activeTextColor }) =>
      resolveColor(theme, activeTextColor)};
  }
`

const solidStyles = css`
  color: ${({ theme, color }) => resolveColor(theme, color)};
  background-color: ${({ theme, bg }) => resolveColor(theme, bg)};

  &:hover {
    background-color: ${({ theme, activeBGColor }) =>
      resolveColor(theme, activeBGColor)};
    color: ${({ theme, activeTextColor }) =>
      resolveColor(theme, activeTextColor)};
  }
`

const resolveButtonType = ({ buttonType }) => {
  switch (buttonType) {
    case ButtonType.square:
      return squareStyles
    default:
      return defaultStyles
  }
}

const resolveVariant = ({ variant }) => {
  switch (variant) {
    case Variant.outline:
      return outlineStyles
    default:
      return solidStyles
  }
}

export const Wrapper = styled.div.attrs(() => ({
  className: 'aia-radio-button-wrapper',
}))`
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
      cursor: not-allowed;
    `}
`

export const Label = styled.label.attrs(() => ({
  className: 'aia-radio-button-label',
}))`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  border-radius: ${({ radius }) => radius};
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ fontFamily }) => resolveFontFamily(fontFamily)};

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.4s;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  ${resolveButtonType};
  ${resolveVariant};

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Check = styled.input.attrs(() => ({
  className: 'aia-radio-button',
  type: 'radio',
}))`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + .aia-radio-button-label {
    background-color: ${({ theme, bg, variant, activeBGColor }) =>
      variant === Variant.outline
        ? resolveColor(theme, bg)
        : resolveColor(theme, activeBGColor)};
    color: ${({ theme, activeTextColor }) =>
      resolveColor(theme, activeTextColor)};
  }
`

export const IconContainer = styled.span.attrs(() => ({
  className: 'aia-radio-button-icon-container',
}))`
  display: inline-block;
`
