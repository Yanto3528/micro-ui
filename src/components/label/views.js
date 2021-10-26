import styled, { css } from 'styled-components'
import { resolveColor, resolveFontFamily } from '../../utils'

export const StyledLabel = styled.label.attrs(() => ({
  className: 'aia-label',
}))`
  text-align: center;
  font-family: ${({ fontFamily }) => resolveFontFamily(fontFamily)};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  border: none;
  border-radius: ${({ rounded, radius }) => (rounded ? '50px' : radius)};
  outline: none;
  background-color: ${({ theme, bg }) => resolveColor(theme, bg)};
  color: ${({ theme, color }) => resolveColor(theme, color)};
  padding: ${({ padding }) => padding};
  transition: all 0.2s;
  line-height: 1;
  text-transform: uppercase;

  ${({ customStyle }) => customStyle && css(customStyle)};
`
