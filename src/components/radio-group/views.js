import styled, { css } from 'styled-components'

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-radio-group',
}))`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  width: ${({ fluid, width }) => (fluid ? '100%' : width)};
  flex-wrap: wrap;
  gap: ${({ gap }) => gap};
  max-width: 100%;

  ${({ customStyle }) => customStyle && css(customStyle)};
`
