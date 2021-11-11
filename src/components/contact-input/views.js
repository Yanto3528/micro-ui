import styled, { css } from 'styled-components'
import { resolveColor, resolveFontFamily } from '@/utils'

const outlineFocusStyles = ({ hasError }) => {
  if (!hasError) {
    return css`
      &:focus-within {
        border-color: ${({ theme, focusBorderColor }) =>
          resolveColor(theme, focusBorderColor)};
        .aia-contact-input-separator {
          background-color: ${({ theme, focusBorderColor }) =>
            resolveColor(theme, focusBorderColor)};
        }
      }
    `
  }
}

const solidStyles = css`
  border: 1px solid ${({ theme, bg }) => resolveColor(theme, bg)};
  background-color: ${({ theme, bg }) => resolveColor(theme, bg)};
`

const outlineStyles = css`
  border: 1px solid
    ${({ theme, borderColor }) => resolveColor(theme, borderColor)};
  .aia-contact-input-separator {
    background-color: ${({ theme, borderColor }) =>
      resolveColor(theme, borderColor)};
  }

  ${outlineFocusStyles};
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
  className: 'aia-contact-input-wrapper',
}))`
  display: flex;
  align-items: center;
  border-radius: ${({ rounded, radius }) => (rounded ? '50px' : radius)};
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  font-family: ${({ fontFamily }) => resolveFontFamily(fontFamily)};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ theme, color }) => resolveColor(theme, color)};
  transition: border 0.2s;

  ${resolveVariant};
  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.colors.danger};
      .aia-contact-input-separator {
        background-color: ${({ theme }) => theme.colors.danger};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.7;
    `}

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const StyledInput = styled.input.attrs(() => ({
  className: 'aia-contact-input',
}))`
  outline: none;
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  color: inherit;

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
    pointer-events: none;
  }
`

export const CountrySelect = styled.select.attrs(() => ({
  className: 'aia-country-select',
}))`
  background: transparent;
  border: none;
  padding-right: 20px;
  outline: none;
  color: inherit;

  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  pointer-events: ${({ disabled, readOnly }) =>
    disabled || readOnly ? 'none' : 'initial'};
`

export const Separator = styled.div.attrs(() => ({
  className: 'aia-contact-input-separator',
}))`
  display: inline-block;
  width: 2px;
  height: 100%;
  transition: background-color 0.2s;
  background-color: ${({ theme, separatorColor }) =>
    resolveColor(theme, separatorColor)};
  margin-right: 10px;
`
