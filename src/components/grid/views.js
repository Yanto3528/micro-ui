import styled, { css } from 'styled-components'

import { customStyles } from '@/styles'
import { MediaQuery } from '@/utils'

const columnsMap = {
  '3xl': MediaQuery.FULL_HD,
  '2xl': MediaQuery.MEDIUM_SCREEN,
  xl: MediaQuery.DESKTOP,
  lg: MediaQuery.TABLET,
  md: MediaQuery.DOUBLE_SMALLEST,
  sm: MediaQuery.PHONE,
  xs: MediaQuery.SMALLEST,
}

const minChildStyles = ({ minChildWidth }) =>
  minChildWidth &&
  css`
    grid-template-columns: repeat(auto-fit, minmax(${minChildWidth}, 1fr));
  `

const columnStyles = ({ columns }) =>
  columns &&
  typeof columns !== 'object' &&
  css`
    grid-template-columns: repeat(${columns}, 1fr);
  `

const columnObjectStyles = ({ columns }) => {
  if (typeof columns !== 'object') {
    return
  }

  if (Array.isArray(columns)) {
    return
  }

  const mediaQueries = []
  let lastColumnValue = 0
  Object.entries(columnsMap).forEach(([columnKey, columnMediaQuery]) => {
    const columnValue = parseInt(columns[columnKey], 10)

    if (columnValue) {
      lastColumnValue = lastColumnValue === 0 ? columnValue : lastColumnValue
      mediaQueries.push(
        columnMediaQuery(css`
          grid-template-columns: repeat(${columnValue}, 1fr);
        `)
      )
    }
  })

  if (lastColumnValue > 0) {
    mediaQueries.unshift(css`
      grid-template-columns: repeat(${lastColumnValue}, 1fr);
    `)
  }

  return mediaQueries
}

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-grid-wrapper',
}))`
  display: grid;
  gap: ${({ gap }) => gap};
  column-gap: ${({ columnGap }) => columnGap};
  row-gap: ${({ rowGap }) => rowGap};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justify }) => justify};

  ${columnStyles};
  ${minChildStyles};
  ${columnObjectStyles};

  ${customStyles}
`
