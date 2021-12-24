import styled, { css } from 'styled-components'

import { getColor, resolveColor, getBorderRadius } from '@/utils'
import { fontStyles } from '@/styles'

const solidStyles = css`
  border: 1px solid ${resolveColor('bg')};
  background-color: ${resolveColor('bg')};
`

const outlineStyles = css`
  border: 1px solid ${resolveColor('borderColor')};

  .micro-multi-select-icon-container {
    color: ${resolveColor('borderColor')};
  }

  &:focus-within {
    border-color: ${({ theme, focusBorderColor, hasError }) =>
      !hasError && getColor(theme, focusBorderColor)};
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
  className: 'micro-multi-select-wrapper',
}))`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 5px;
  flex-wrap: wrap;
  padding: ${({ padding }) => padding};
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  height: ${({ height }) => height};
  max-width: 100%;
  border-radius: ${getBorderRadius};
  transition: border 0.2s;
  cursor: pointer;
  color: ${resolveColor('color')};
  ${resolveVariant};
  ${fontStyles};
  z-index: 6;

  option {
    color: ${resolveColor('color')};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.colors.danger};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
      cursor: not-allowed;
    `}

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const StyledInput = styled.input.attrs(() => ({
  className: 'micro-multi-select-input',
}))`
  font: inherit;
  color: inherit;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  flex: 1;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  text-overflow: ellipsis;
  height: 20px;
  width: 10px;
  max-width: 100%;

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

  pointer-events: ${({ disabled, readOnly }) =>
    disabled || readOnly ? 'none' : 'auto'};
`

export const SelectedWrapper = styled.div.attrs(() => ({
  className: 'micro-multi-select-selected-wrapper',
}))`
  display: flex;
  align-items: center;
  background-color: ${resolveColor('bg')};
  width: auto;
  height: 20px;
  ${fontStyles};
  color: ${resolveColor('color')};
  border-radius: ${getBorderRadius};
  padding: ${({ padding }) => padding};
  gap: 4px;

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const OptionWrapper = styled.div.attrs(() => ({
  className: 'micro-multi-select-option-wrapper',
}))`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
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
  className: 'micro-multi-select-option',
}))`
  display: inline-block;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`

export const IconContainer = styled.span.attrs(() => ({
  className: 'micro-multi-select-icon-container',
}))`
  position: absolute;
  transform: translateY(20%);
  top: 0;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  pointer-events: none;

  > * {
    cursor: pointer;
    transition: color 0.2s;
  }
`
