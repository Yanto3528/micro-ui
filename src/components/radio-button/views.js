import styled, { css } from 'styled-components'

import { getColor, resolveColor, getBorderRadius } from '@/utils'
import { fontStyles } from '@/styles'

import { ButtonType, Variant } from './utils/constants'

const defaultStyles = css`
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
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
  color: ${resolveColor('bg')};
  border: 1px solid ${resolveColor('bg')};

  &:hover {
    background-color: ${resolveColor('bg')};
    color: ${resolveColor('activeTextColor')};
  }
`

const solidStyles = css`
  color: ${resolveColor('color')};
  background-color: ${resolveColor('bg')};

  &:hover {
    background-color: ${resolveColor('activeBGColor')};
    color: ${resolveColor('activeTextColor')};
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
  className: 'micro-radio-button-wrapper',
}))`
  flex: 1;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
      cursor: not-allowed;
    `}
`

export const Label = styled.label.attrs(() => ({
  className: 'micro-radio-button-label',
}))`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  border-radius: ${getBorderRadius};
  ${fontStyles};
  cursor: pointer;

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
  className: 'micro-radio-button',
  type: 'radio',
}))`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  pointer-events: ${({ readOnly }) => (readOnly ? 'none' : 'auto')};

  &:checked + .aia-radio-button-label {
    background-color: ${({ theme, bg, variant, activeBGColor }) =>
      variant === Variant.outline
        ? getColor(theme, bg)
        : getColor(theme, activeBGColor)};
    color: ${resolveColor('activeTextColor')};
  }
`

export const IconContainer = styled.span.attrs(() => ({
  className: 'micro-radio-button-icon-container',
}))`
  display: inline-block;
`
