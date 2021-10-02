import styled from 'styled-components'

import { resolveColor } from '../../utils'

export const DividerWrapper = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme, bg }) => resolveColor(theme, bg)};
  margin: ${({ margin }) => margin};
`
