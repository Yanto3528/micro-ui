import styled from 'styled-components'

import { resolveColor } from '@/utils'
import { fontStyles } from '@/styles'

export const DividerWrapper = styled.div.attrs(() => ({
  className: 'aia-divider-wrapper',
}))`
  display: flex;
  align-items: center;
  width: 100%;
`

export const Line = styled.span.attrs(() => ({
  className: 'aia-divider-line',
}))`
  flex: 1;
  height: 1px;
  background-color: ${resolveColor('bg')};
  margin: ${({ margin }) => margin};
`

export const Text = styled.p.attrs(() => ({
  className: 'aia-divider-text',
}))`
  padding: ${({ textPadding }) => textPadding};
  ${fontStyles};
`
