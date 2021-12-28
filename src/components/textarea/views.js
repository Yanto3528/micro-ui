import styled, { css } from 'styled-components'

import { getColor, resolveColor, getBorderRadius } from '@/utils'
import { fontStyles } from '@/styles'

const solidStyles = css`
  border: 1px solid ${resolveColor('bg')};
  background-color: ${resolveColor('bg')};
`

const outlineStyles = css`
  border: 1px solid ${resolveColor('borderColor')};

  &:focus {
    border-color: ${({ theme, focusBorderColor, hasError }) =>
      !hasError && getColor(theme, focusBorderColor)};
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
  className: 'micro-textarea-wrapper',
}))`
  display: inline-block;
  width: ${({ fluid, width }) => (fluid ? '100%' : width)};
  max-width: 100%;
`

export const StyledTextarea = styled.textarea.attrs(() => ({
  className: 'micro-textarea',
}))`
  outline: none;
  color: ${resolveColor('color')};
  border-radius: ${getBorderRadius()};
  transition: border 0.2s;
  ${fontStyles};
  width: 100%;
  padding: ${({ padding }) => padding};
  resize: ${({ resize }) => resize};

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
