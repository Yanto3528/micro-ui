import styled, { css } from 'styled-components'

export const AnimateWrapper = styled.div`
  ${({ animation, duration, timing, repeat }) =>
    animation &&
    css`
      animation-name: ${animation};
      animation-duration: ${duration ? `${duration}s` : '1s'};
      animation-timing-function: ${timing};
      animation-fill-mode: forwards;
      animation-iteration-count: ${repeat};
    `}
`
