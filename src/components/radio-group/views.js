import styled, { css } from 'styled-components'

export const Wrapper = styled.div.attrs(() => ({
  className: 'aia-radio-group',
}))`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};

  ${({ customStyle }) => customStyle && css(customStyle)};
`
