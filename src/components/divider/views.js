import styled, { css } from 'styled-components'

import { resolveColor } from '@/utils'
import { fontStyles } from '@/styles'

const horizontalStyles = css`
  width: 100%;
`

const verticalStyles = css`
  height: 100%;
  width: fit-content;
  flex-direction: column;
  .aia-divider-line {
    width: 1px;
    writing-mode: vertical-lr;
    height: 100%;
  }

  .aia-divider-text {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
  }
`

const resolveOrientation = ({ orientation }) => {
  switch (orientation) {
    case 'vertical':
      return verticalStyles
    default:
      return horizontalStyles
  }
}

export const DividerWrapper = styled.div.attrs(() => ({
  className: 'micro-divider-wrapper',
}))`
  display: flex;
  align-items: center;
  ${resolveOrientation};
`

export const Line = styled.span.attrs(() => ({
  className: 'micro-divider-line',
}))`
  flex: 1;
  height: 1px;
  background-color: ${resolveColor('bg')};
  margin-block: ${({ marginBlock }) => marginBlock};

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Text = styled.p.attrs(() => ({
  className: 'micro-divider-text',
}))`
  padding-inline: ${({ textPaddingInline }) => textPaddingInline};
  ${fontStyles};
  color: ${resolveColor('color')};
`
