import styled, { css } from 'styled-components'

export const AnimateWrapper = styled.div.attrs(() => ({
  className: 'aia-animate-wrapper',
}))`
  width: ${({ width }) => width};
  ${({ animation, duration, timing, repeat }) =>
    animation &&
    css`
      animation-name: ${animation};
      animation-duration: ${duration ? `${duration}s` : '1s'};
      animation-timing-function: ${timing};
      animation-fill-mode: both;
      animation-iteration-count: ${repeat};
    `}
`
