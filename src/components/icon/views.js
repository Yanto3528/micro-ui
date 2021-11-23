import styled, { css } from 'styled-components'
import { getColor } from '@/utils'

const sizeMapper = {
  xs: '1em',
  s: '1.5em',
  m: '2em',
  l: '2.5em',
  xl: '3em',
}

export const Component = styled.i`
  color: ${({ theme, color }) => getColor(theme, color) || 'inherit'};
  font-size: ${({ size }) => sizeMapper[size] || size};
  ${({ customStyle }) => customStyle && css(customStyle)};
`
