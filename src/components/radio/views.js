import styled, { css } from 'styled-components'

import { resolveColor } from '@/utils'
import { checklistStyles, checkedChecklistStyles, fontStyles } from '@/styles'

import { RadioType } from './utils/constants'

const circularStyles = css`
  width: 0.5em;
  height: 0.5em;
  background-color: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`

const resolveVariant = ({ variant }) => {
  switch (variant) {
    case RadioType.check:
      return checklistStyles
    default:
      return circularStyles
  }
}

const resolveCheckedRadioType = ({ variant }) => {
  switch (variant) {
    case RadioType.check:
      return checkedChecklistStyles
    default:
      return css`
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
      `
  }
}

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-radio-wrapper',
}))`
  ${fontStyles};
  color: ${resolveColor('color')};
  margin: ${({ margin }) => margin};
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  height: ${({ height }) => height};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
      cursor: not-allowed;
    `}
  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Label = styled.label.attrs(() => ({
  className: 'micro-radio-label',
}))`
  display: block;
  position: relative;
  margin: ${({ margin }) => margin};
  cursor: pointer;
  color: ${resolveColor('color')};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`

export const LabelText = styled.span.attrs(() => ({
  className: 'micro-radio-label-text',
}))`
  padding-left: 1.8em;
  display: inline-block;
`

export const Check = styled.input.attrs(() => ({
  className: 'micro-radio',
  type: 'radio',
}))`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked ~ .micro-radio-checkmark {
    background-color: ${resolveColor('activeColor')};
    border-color: ${resolveColor('activeColor')};
  }

  &:checked ~ .micro-radio-checkmark:after {
    ${resolveCheckedRadioType};
  }
`

export const Checkmark = styled.span.attrs(() => ({
  className: 'micro-radio-checkmark',
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 1.2em;
  height: 1.2em;
  background-color: transparent;
  border: 1px solid ${resolveColor('borderColor')};
  border-radius: ${({ theme, radius, variant }) =>
    variant === RadioType.circular ? '50%' : theme.radius[radius] || radius};
  transition: all 0.3s ease-out;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    ${resolveVariant};
    transition: all 0.3s ease-out;
  }
`
