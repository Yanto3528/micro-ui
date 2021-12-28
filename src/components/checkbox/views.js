import styled, { css } from 'styled-components'

import { resolveColor, getBorderRadius } from '@/utils'
import { fontStyles } from '@/styles'

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-checkbox-wrapper',
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
  className: 'micro-checkbox-label',
}))`
  display: flex;
  align-items: center;
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
  className: 'micro-checkbox-label-text',
}))`
  padding-left: 0.5em;
  display: inline-block;
  width: 100%;
  height: 100%;
`

export const Check = styled.input.attrs(() => ({
  className: 'micro-checkbox',
  type: 'checkbox',
}))`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;

  &:checked ~ .micro-checkbox-checkmark {
    background-color: ${resolveColor('activeColor')};
    border-color: ${resolveColor('activeColor')};
  }

  &:checked ~ .micro-checkbox-checkmark:after {
    -webkit-transform: translate(-50%, -60%) rotate(45deg) scale(1, 1);
    -ms-transform: translate(-50%, -60%) rotate(45deg) scale(1, 1);
    transform: translate(-50%, -60%) rotate(45deg) scale(1, 1);
  }
`

export const Checkmark = styled.span.attrs(() => ({
  className: 'micro-checkbox-checkmark',
}))`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.3em;
  height: 1.3em;
  aspect-ratio: 1 / 1;
  background-color: transparent;
  border: 0.1em solid ${resolveColor('borderColor')};
  border-radius: ${getBorderRadius()};
  transition: all 0.3s ease-out;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0.35em;
    height: 0.6em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    -webkit-transform: translate(-50%, -60%) rotate(45deg) scale(0, 0);
    -ms-transform: translate(-50%, -60%) rotate(45deg) scale(0, 0);
    transform: translate(-50%, -60%) rotate(45deg) scale(0, 0);
    transition: all 0.3s ease-out;
  }

  &:hover {
    border-color: ${resolveColor('activeColor')};
  }
`
