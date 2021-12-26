import styled from 'styled-components'

import { fontStyles } from '@/styles'

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-calendar-year-month-wrapper',
}))`
  text-align: center;
  ${fontStyles};
`

export const Header = styled.div.attrs(() => ({
  className: 'micro-calendar-year-month-header',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const YearMonthWrapper = styled.div.attrs(() => ({
  className: 'micro-calendar-year-month-wrapper',
}))`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const CurrentYearMonthDisplay = styled.div.attrs(() => ({
  className: 'micro-calendar-year-current-month',
}))`
  padding: 4px 10px;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`
