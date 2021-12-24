import styled, { css } from 'styled-components'

import { fontStyles } from '@/styles'

const activeYearStyles = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-calendar-year-wrapper',
}))`
  text-align: center;
  ${fontStyles};
  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Header = styled.div.attrs(() => ({
  className: 'micro-calendar-year-header',
}))`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CurrentYear = styled.div.attrs(() => ({
  className: 'micro-calendar-year-current-year',
}))`
  padding: 4px 10px;
  margin: 0 10px;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    ${activeYearStyles};
  }
`

export const YearList = styled.div.attrs(() => ({
  className: 'micro-calendar-year-list',
}))`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
`

export const Year = styled.div.attrs(() => ({
  className: 'micro-calendar-year-text',
}))`
  padding: 10px;
  cursor: pointer;
  ${({ isSelected }) => isSelected && activeYearStyles};
  &:hover {
    ${activeYearStyles}
  }
`
