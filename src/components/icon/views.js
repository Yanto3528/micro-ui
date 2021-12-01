import styled, { css } from 'styled-components'

const sizeMapper = {
  xs: '1em',
  s: '1.5em',
  m: '2em',
  l: '2.5em',
  xl: '3em',
}

export const Component = styled.i`
  color: ${({ theme, color }) => theme.colors[color] || color || 'inherit'};
  font-size: ${({ size }) => sizeMapper[size] || size};
  ${({ customStyle }) => customStyle && css(customStyle)};
`
