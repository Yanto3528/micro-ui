import styled, { css } from 'styled-components'

import { resolveColor, getBorderRadius } from '@/utils'
import { checklistStyles, checkedChecklistStyles, fontStyles } from '@/styles'

export const Wrapper = styled.div.attrs(() => ({
  className: 'aia-checkbox-wrapper',
}))`
  display: inline-block;
  ${fontStyles};
  color: ${resolveColor('color')};
  margin: ${({ margin }) => margin};
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  height: ${({ height }) => height};
  ${({ customStyle }) => customStyle && css(customStyle)};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
      cursor: not-allowed;
    `}
`

export const Label = styled.label.attrs(() => ({
  className: 'aia-checkbox-label',
}))`
  display: inline-block;
  width: 100%;
  height: 100%;
  min-height: 1em;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`

export const LabelText = styled.span.attrs(() => ({
  className: 'aia-checkbox-label-text',
}))`
  padding-left: 1.8em;
  display: inline-block;
  width: 100%;
  height: 100%;
`

export const Check = styled.input.attrs(() => ({
  className: 'aia-checkbox',
  type: 'checkbox',
}))`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;

  &:checked ~ .aia-checkbox-checkmark {
    background-color: ${resolveColor('activeColor')};
    border-color: ${resolveColor('activeColor')};
  }

  &:checked ~ .aia-checkbox-checkmark:after {
    ${checkedChecklistStyles};
  }
`

export const Checkmark = styled.span.attrs(() => ({
  className: 'aia-checkbox-checkmark',
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 1.2em;
  height: 1.2em;
  background-color: transparent;
  border: 1px solid ${resolveColor('borderColor')};
  border-radius: ${getBorderRadius};
  transition: all 0.3s ease-out;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    ${checklistStyles};
    transition: all 0.3s ease-out;
  }
`
