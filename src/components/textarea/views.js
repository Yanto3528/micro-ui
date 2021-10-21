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
  className: 'aia-textarea-wrapper',
}))`
  position: relative;
  display: inline-block;
  width: ${({ fluid }) => fluid && '100%'};
`

export const StyledTextarea = styled.textarea.attrs(() => ({
  className: 'aia-textarea',
}))`
  outline: none;
  color: ${({ theme, color }) => resolveColor(theme, color)};
  border-radius: ${({ rounded, radius }) => (rounded ? '20px' : radius)};
  transition: border 0.2s;
  font-family: ${({ fontFamily }) => resolveFontFamily(fontFamily)};
  font-size: ${({ fontSize }) => fontSize};
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  padding: ${({ padding }) => padding};
  resize: ${({ resize }) => (resize ? resize : 'none')};

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

  ${resolveVariant}
  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.colors.danger};
    `}

  ${({ customStyle }) => customStyle && css(customStyle)}
`
