import styled, { css } from 'styled-components'
import { resolveColor, resolveFontFamily } from '@/utils'

const resolveVariant = ({ variant }) => {
  switch (variant) {
    case 'outline':
      return outlineStyles
    default:
      return solidStyles
  }
}

const solidStyles = css`
  background-color: ${({ theme, bg }) => resolveColor(theme, bg)};
  color: ${({ theme, color }) => resolveColor(theme, color)};
  border: 1px solid ${({ theme, bg }) => resolveColor(theme, bg)};
`

const outlineStyles = css`
  background-color: transparent;
  color: ${({ theme, bg }) => resolveColor(theme, bg)};
  border: 1px solid ${({ theme, bg }) => resolveColor(theme, bg)};
`

export const StyledTag = styled.span.attrs(() => ({
  className: 'aia-tag',
}))`
  display: inline-block;
  text-align: center;
  font-family: ${({ fontFamily }) => resolveFontFamily(fontFamily)};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  border-radius: ${({ rounded, radius }) => (rounded ? '50px' : radius)};
  outline: none;
  padding: ${({ padding }) => padding};
  transition: all 0.2s;
  line-height: 1;
  text-transform: ${({ textTransform }) => textTransform};

  ${resolveVariant};

  ${({ customStyle }) => customStyle && css(customStyle)};
`
