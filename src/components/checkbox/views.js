import styled, { css } from 'styled-components'

import { resolveColor, resolveFontFamily } from '../../utils'

export const Wrapper = styled.div.attrs(() => ({
  className: 'aia-checkbox-wrapper',
}))`
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
  className: 'aia-checkbox-label-text',
}))`
  padding-left: 1.8em;
  display: inline-block;
`

export const Check = styled.input.attrs(() => ({
  className: 'aia-checkbox',
  type: 'checkbox',
}))`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked ~ .aia-checkbox-checkmark {
    background-color: ${({ theme, activeColor }) =>
      resolveColor(theme, activeColor)};
    border-color: ${({ theme, activeColor }) =>
      resolveColor(theme, activeColor)};
  }

  &:checked ~ .aia-checkbox-checkmark:after {
    -webkit-transform: translate(-50%, -60%) rotate(45deg) scale(1, 1);
    -ms-transform: translate(-50%, -60%) rotate(45deg) scale(1, 1);
    transform: translate(-50%, -60%) rotate(45deg) scale(1, 1);
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
  border: 1px solid
    ${({ theme, borderColor }) => resolveColor(theme, borderColor)};
  border-radius: ${({ radius }) => radius};
  transition: all 0.3s ease-out;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0.3em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.1em 0.1em 0;
    -webkit-transform: translate(-50%, -60%) rotate(45deg) scale(0, 0);
    -ms-transform: translate(-50%, -60%) rotate(45deg) scale(0, 0);
    transform: translate(-50%, -60%) rotate(45deg) scale(0, 0);
    transition: all 0.3s ease-out;
  }
`
