import styled, { css } from 'styled-components'
import { resolveColor, getBorderRadius } from '@/utils'
import { fontStyles } from '@/styles'

const outlineFocusStyles = ({ hasError }) => {
  if (!hasError) {
    return css`
      &:focus-within {
        border-color: ${resolveColor('focusBorderColor')};
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
  className: 'micro-unit-number-wrapper',
}))`
  display: flex;
  align-items: center;
  border-radius: ${getBorderRadius};
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  max-width: 100%;
  ${fontStyles};
  color: ${resolveColor('color')};
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

  ${({ disabled, readOnly }) =>
    (disabled || readOnly) &&
    css`
      cursor: not-allowed;
      opacity: 0.7;
    `}

  padding: ${({ padding }) => padding};
  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Separator = styled.span.attrs(() => ({
  className: 'micro-unit-number-separator',
}))`
  margin-right: 10px;
`

export const StyledInput = styled.input.attrs(() => ({
  className: 'micro-unit-number-input',
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

  text-align: ${({ alignment }) => alignment};
`
