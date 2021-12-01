import styled, { css } from 'styled-components'

export const Wrapper = styled.div.attrs(() => ({
  className: 'aia-radio-group',
}))`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  flex-wrap: wrap;
  gap: ${({ gap }) => gap};
  max-width: 100%;

  ${({ customStyle }) => customStyle && css(customStyle)};
`
