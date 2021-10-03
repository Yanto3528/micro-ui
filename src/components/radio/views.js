import styled, { css } from 'styled-components'

import { resolveColor, resolveFontFamily } from '../../utils'
import { RadioType } from './utils/constants'

const checklistStyles = css`
  width: 0.3em;
  height: 0.5em;
  border: solid white;
  border-width: 0 0.1em 0.1em 0;
  -webkit-transform: translate(-50%, -60%) rotate(45deg) scale(0, 0);
  -ms-transform: translate(-50%, -60%) rotate(45deg) scale(0, 0);
  transform: translate(-50%, -60%) rotate(45deg) scale(0, 0);
`

const circularStyles = css`
  width: 0.5em;
  height: 0.5em;
  background-color: white;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0, 0);
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
      return css`
        -webkit-transform: translate(-50%, -60%) rotate(45deg) scale(1, 1);
        -ms-transform: translate(-50%, -60%) rotate(45deg) scale(1, 1);
        transform: translate(-50%, -60%) rotate(45deg) scale(1, 1);
      `
    default:
      return css`
        transform: translate(-50%, -50%) scale(1, 1);
        -webkit-transform: translate(-50%, -50%) scale(1, 1);
        -ms-transform: translate(-50%, -50%) scale(1, 1);
      `
  }
}

export const Wrapper = styled.div.attrs(() => ({
  className: 'aia-radio-wrapper',
}))`
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
      cursor: not-allowed;
    `}
`

export const Label = styled.label.attrs(() => ({
  className: 'aia-radio-label',
}))`
  display: block;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ fontFamily }) => resolveFontFamily(fontFamily)};
  color: ${({ theme, color }) => resolveColor(theme, color)};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`

export const LabelText = styled.span.attrs(() => ({
  className: 'aia-radio-label-text',
}))`
  padding-left: 1.8em;
  display: inline-block;
`

export const Check = styled.input.attrs(() => ({
  className: 'aia-radio',
  type: 'radio',
}))`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked ~ .aia-radio-checkmark {
    background-color: ${({ theme, activeColor }) =>
      resolveColor(theme, activeColor)};
    border-color: ${({ theme, activeColor }) =>
      resolveColor(theme, activeColor)};
  }

  &:checked ~ .aia-radio-checkmark:after {
    ${resolveCheckedRadioType};
  }
`

export const Checkmark = styled.span.attrs(() => ({
  className: 'aia-radio-checkmark',
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 1.2em;
  height: 1.2em;
  background-color: transparent;
  border: 1px solid
    ${({ theme, borderColor }) => resolveColor(theme, borderColor)};
  border-radius: ${({ radius, variant }) =>
    variant === RadioType.circular ? '50%' : radius};
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
