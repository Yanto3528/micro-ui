import { css } from 'styled-components'

import { MediaQuery } from '@/utils'

// Arrow Styles
const topArrowStyles = css`
  & + .aia-tooltip-arrow {
    top: -10px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }
`

const bottomArrowStyles = css`
  & + .aia-tooltip-arrow {
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
  }
`

const leftArrowStyles = css`
  & + .aia-tooltip-arrow {
    top: 50%;
    left: -10px;
    transform: translate(-20%, -50%) rotate(-90deg);
  }
`

const rightArrowStyles = css`
  & + .aia-tooltip-arrow {
    top: 50%;
    right: -10px;
    transform: translate(20%, -50%) rotate(90deg);
  }
`

// Responsive Styles
const topResponsiveStyles = css`
  ${MediaQuery.PHABLET`
    width: calc(100vw - 20px);
    top: -10px;
    right: auto;
    bottom: auto;
    left: ${({ posX }) => `calc(-${posX} + 10px)`};
    transform: translate(0, -100%);
    ${topArrowStyles};
  `}
`

const bottomResponsiveStyles = css`
  ${MediaQuery.PHABLET`
    width: calc(100vw - 20px);
    bottom: -10px;
    left: ${({ posX }) => `calc(-${posX} + 10px)`};
    transform: translate(0, 100%);
  `}
`

// Top styles
export const topStartStyles = css`
  top: -10px;
  left: 0;
  transform: translateY(-100%);
  ${topArrowStyles};
  ${topResponsiveStyles};
`

export const topStyles = css`
  top: -10px;
  left: 50%;
  transform: translate(-50%, -100%);
  ${topArrowStyles};
  ${topResponsiveStyles};
`

export const topEndStyles = css`
  top: -10px;
  right: 0;
  transform: translateY(-100%);
  ${topArrowStyles};
  ${topResponsiveStyles};
`

// Bottom styles
export const bottomStartStyles = css`
  bottom: -10px;
  left: 0;
  transform: translateY(100%);
  ${bottomArrowStyles};
  ${bottomResponsiveStyles};
`

export const bottomStyles = css`
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, 100%);
  ${bottomArrowStyles};
  ${bottomResponsiveStyles};
`

export const bottomEndStyles = css`
  bottom: -10px;
  right: 0;
  transform: translateY(100%);
  ${bottomArrowStyles};
  ${bottomResponsiveStyles};
`

// Left Styles
export const leftStartStyles = css`
  top: 0;
  left: -10px;
  transform: translateX(-100%);
  ${leftArrowStyles};
  ${topResponsiveStyles};
`

export const leftStyles = css`
  top: 50%;
  left: -10px;
  transform: translate(-100%, -50%);
  ${leftArrowStyles};
  ${topResponsiveStyles};
`

export const leftEndStyles = css`
  bottom: 0;
  left: -10px;
  transform: translateX(-100%);
  ${leftArrowStyles};
  ${topResponsiveStyles};
`

// Right Styles
export const rightStartStyles = css`
  top: 0;
  right: -10px;
  transform: translateX(100%);
  ${rightArrowStyles};
  ${topResponsiveStyles};
`

export const rightStyles = css`
  top: 50%;
  right: -10px;
  transform: translate(100%, -50%);
  ${rightArrowStyles};
  ${topResponsiveStyles};
`

export const rightEndStyles = css`
  bottom: 0;
  right: -10px;
  transform: translateX(100%);
  ${rightArrowStyles};
  ${topResponsiveStyles};
`
