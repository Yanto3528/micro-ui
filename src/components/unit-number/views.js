import styled, { css } from 'styled-components'
import { resolveColor, resolveFontFamily } from '../../utils'

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

export const Wrapper = styled.div.attrs(() => ({
  className: 'aia-unit-number-wrapper'
}))`
  position: relative;
  width: ${({ fluid }) => fluid && '100%'};
  height: ${({ height }) => height};
  line-height: 40px;

  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
`

export const Separator = styled.span.attrs(() => ({
  className: 'aia-unit-number-separator'
}))`
  margin: ${({ margin }) => margin};
`

export const StyledInput = styled.input.attrs(() => ({
  className: 'aia-unit-number-input'
}))`
  outline: none;
  color: ${({ theme, color }) => resolveColor(theme, color)};
  border-radius: ${({ rounded, radius }) => (rounded ? '50px' : radius)};
  transition: border 0.2s;
  font-family: ${({ fontFamily }) => resolveFontFamily(fontFamily)};
  font-size: ${({ fontSize }) => fontSize};
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

  padding: ${({ padding }) => padding};

  ${resolveVariant}
  ${({ hasError }) =>
  hasError &&
  css`
    border-color: ${({ theme }) => theme.colors.danger};
  `}

  ${({ customStyle }) => customStyle && css(customStyle)};

`