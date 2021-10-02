import styled from 'styled-components'

import { resolveColor, resolveFontFamily } from '../../utils'

export const DividerWrapper = styled.div.attrs(() => ({
  className: 'aia-divider-wrapper',
}))`
  display: flex;
  align-items: center;
  font-family: ${({ fontFamily }) => resolveFontFamily(fontFamily)};
`

export const Line = styled.span.attrs(() => ({
  className: 'aia-divider-line',
}))`
  flex: 1;
  height: 1px;
  background-color: ${({ theme, bg }) => resolveColor(theme, bg)};
  margin: ${({ margin }) => margin};
`

export const Text = styled.p.attrs(() => ({
  className: 'aia-divider-text',
}))`
  padding: ${({ padding }) => padding};
`
