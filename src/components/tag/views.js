import styled, { css } from 'styled-components'

import { resolveColor } from '@/utils'
import { fontStyles } from '@/styles'

const resolveVariant = ({ variant }) => {
  switch (variant) {
    case 'outline':
      return outlineStyles
    default:
      return solidStyles
  }
}

const solidStyles = css`
  background-color: ${resolveColor('bg')};
  color: ${resolveColor('color')};
  border: 1px solid ${resolveColor('bg')};
`

const outlineStyles = css`
  background-color: transparent;
  color: ${resolveColor('bg')};
  border: 1px solid ${resolveColor('bg')};
`

export const StyledTag = styled.span.attrs(() => ({
  className: 'aia-tag',
}))`
  display: inline-block;
  text-align: center;
  ${fontStyles};
  border-radius: ${({ rounded, radius }) => (rounded ? '50px' : radius)};
  outline: none;
  padding: ${({ padding }) => padding};
  transition: all 0.2s;
  line-height: 1;
  text-transform: ${({ textTransform }) => textTransform};

  ${resolveVariant};

  ${({ customStyle }) => customStyle && css(customStyle)};
`
