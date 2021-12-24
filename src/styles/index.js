import { css } from 'styled-components'

export const fontStyles = css`
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize] || fontSize};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
`
