import styled from 'styled-components'

import { customStyles } from '@/styles'

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-flex-wrapper',
}))`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => gap};
  flex-wrap: ${({ wrap }) => wrap};
  flex-direction: ${({ direction }) => direction};

  ${customStyles}
`
