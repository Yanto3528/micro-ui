import styled, { css } from 'styled-components'

import { resolveColor } from '@/utils'
import { fontStyles } from '@/styles'

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
  display: flex;
  align-items: center;
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
  padding-left: 0.5em;
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
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${resolveColor('activeColor')};
  }

  &:checked ~ .micro-radio-checkmark:after {
    opacity: 1;
  }
`

export const Checkmark = styled.span.attrs(() => ({
  className: 'micro-radio-checkmark',
}))`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5em;
  height: 1.5em;
  background-color: transparent;
  border: 0.2em solid ${resolveColor('borderColor')};
  border-radius: 50%;
  transition: all 0.3s ease-out;

  &:after {
    content: '';
    width: 0.8em;
    height: 0.8em;
    background-color: ${resolveColor('activeColor')};
    border-radius: 50%;
    opacity: 0;
    transition: all 0.3s ease-out;
  }

  &:hover {
    border-color: ${resolveColor('activeColor')};
  }
`
