import styled, { css } from 'styled-components'
import { getColor, resolveColor } from '@/utils'
import { fontStyles } from '@/styles'

const solidStyles = css`
  border: 1px solid ${resolveColor('bg')};
  background-color: ${resolveColor('bg')};
`

const outlineStyles = css`
  border: 1px solid ${resolveColor('borderColor')};

  & + .aia-input-right-element,
  & + .aia-input-left-element {
    color: ${resolveColor('borderColor')};
  }

  &:focus {
    border-color: ${({ theme, focusBorderColor, hasError }) =>
      !hasError && getColor(theme, focusBorderColor)};

    & + .aia-input-right-element,
    & + .aia-input-left-element {
      color: ${({ theme, focusBorderColor, hasError }) =>
        !hasError && getColor(theme, focusBorderColor)};
    }
  }
`

const iconElementStyles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  > * {
    cursor: pointer;
    transition: color 0.2s;
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

const resolvePadding = ({ padding, leftElement, rightElement }) => css`
  padding: ${padding};
  padding-left: ${({ paddingLeftElement }) =>
    leftElement && paddingLeftElement};
  padding-right: ${({ paddingRightElement }) =>
    rightElement && paddingRightElement};
`

export const Wrapper = styled.div.attrs(() => ({
  className: 'aia-input-wrapper',
}))`
  position: relative;
  display: inline-block;
  color: ${resolveColor('color')};
  ${fontStyles};
  width: ${({ fluid }) => fluid && '100%'};
  max-width: 100%;
`

export const StyledInput = styled.input.attrs(() => ({
  className: 'aia-input',
}))`
  outline: none;
  border-radius: ${({ rounded, radius }) => (rounded ? '50px' : radius)};
  transition: border 0.2s;
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  height: ${({ height }) => height};
  max-width: 100%;
  font: inherit;

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

  &:disabled,
  &:read-only {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${resolveVariant};
  ${resolvePadding};
  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.colors.danger};
    `}

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const LeftElement = styled.span.attrs(() => ({
  className: 'aia-input-left-element',
}))`
  ${iconElementStyles};
  left: 15px;
`

export const RightElement = styled.span.attrs(() => ({
  className: 'aia-input-right-element',
}))`
  ${iconElementStyles};
  right: 15px;
`
