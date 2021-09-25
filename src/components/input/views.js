import styled, { css } from 'styled-components'
import { resolveColor } from '../../utils'

const solidStyles = css`
  border: 1px solid ${({ theme, bg }) => resolveColor(theme, bg)};
  background-color: ${({ theme, bg }) => resolveColor(theme, bg)};
`

const outlineStyles = css`
  border: 1px solid
    ${({ theme, borderColor }) => resolveColor(theme, borderColor)};

  &:focus {
    border-color: ${({ theme, focusBorderColor, hasError }) =>
      !hasError && resolveColor(theme, focusBorderColor)};
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
  padding-left: ${({ paddingleftElement }) =>
    leftElement && paddingleftElement};
  padding-right: ${({ paddingRightElement }) =>
    rightElement && paddingRightElement};
`

export const Wrapper = styled.div.attrs(() => ({
  className: 'aia-input-wrapper',
}))`
  position: relative;
  display: inline-block;
  width: ${({ fluid }) => fluid && '100%'};
`

export const StyledInput = styled.input.attrs(() => ({
  className: 'aia-input',
}))`
  outline: none;
  color: ${({ theme, color }) => resolveColor(theme, color)};
  border-radius: ${({ rounded, radius }) => (rounded ? '50px' : radius)};
  transition: border 0.2s;
  font-family: ${({ fontFamily }) => fontFamily}, sans-serif;
  font-size: 1.4rem;
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  height: ${({ height }) => height};

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
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RightElement = styled.span.attrs(() => ({
  className: 'aia-input-right-element',
}))`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`
