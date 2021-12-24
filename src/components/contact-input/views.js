import styled, { css } from 'styled-components'
import { resolveColor, getBorderRadius } from '@/utils'
import { fontStyles } from '@/styles'

const outlineFocusStyles = ({ hasError }) => {
  if (!hasError) {
    return css`
      &:focus-within {
        border-color: ${resolveColor('focusBorderColor')};
        .micro-contact-input-separator {
          background-color: ${resolveColor('focusBorderColor')};
        }
      }
    `
  }
}

const solidStyles = css`
  border: 1px solid ${resolveColor('bg')};
  background-color: ${resolveColor('bg')};
`

const outlineStyles = css`
  border: 1px solid ${resolveColor('borderColor')};
  .micro-contact-input-separator {
    background-color: ${resolveColor('borderColor')};
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
  className: 'micro-contact-input-wrapper',
}))`
  display: flex;
  align-items: center;
  border-radius: ${getBorderRadius};
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  height: ${({ height }) => height};
  max-width: 100%;
  padding: ${({ padding }) => padding};
  ${fontStyles};
  color: ${resolveColor('color')};
  transition: border 0.2s;

  ${resolveVariant};
  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.colors.danger};
      .micro-contact-input-separator {
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
  className: 'micro-contact-input',
}))`
  outline: none;
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  color: inherit;
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
    pointer-events: none;
  }
`

export const CountrySelect = styled.select.attrs(() => ({
  className: 'micro-country-select',
}))`
  background: transparent;
  border: none;
  padding-right: 20px;
  outline: none;
  color: inherit;
  font: inherit;

  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  pointer-events: ${({ disabled, readOnly }) =>
    disabled || readOnly ? 'none' : 'initial'};
`

export const Separator = styled.div.attrs(() => ({
  className: 'micro-contact-input-separator',
}))`
  display: inline-block;
  width: 2px;
  height: 100%;
  transition: background-color 0.2s;
  background-color: ${resolveColor('separatorColor')};
  margin-right: 10px;
`
