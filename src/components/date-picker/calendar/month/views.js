import styled, { css } from 'styled-components'

import { fontStyles } from '@/styles'
import { getBorderRadius } from '@/utils'

const activeMonthStyles = css`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${getBorderRadius};
  color: white;
`

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-calendar-month-wrapper',
}))`
  text-align: center;
  height: 420px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: ${({ show }) => (show ? 'block' : 'none')};
  ${fontStyles};
  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Header = styled.div.attrs(() => ({
  className: 'micro-calendar-month-header',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CurrentYear = styled.div.attrs(() => ({
  className: 'micro-calendar-year-current-year',
}))`
  padding: 4px 10px;
  margin: 0 10px;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    ${activeMonthStyles};
  }
`

export const MonthList = styled.div.attrs(() => ({
  className: 'micro-calendar-month-list',
}))`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 60px;
  margin-top: 10px;
`

export const Month = styled.div.attrs(() => ({
  className: 'micro-calendar-month-text',
}))`
  padding: 10px;
  cursor: pointer;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.dark};
  transition: all 0.4s;

  ${({ isSelected }) => isSelected && activeMonthStyles};
  &:hover {
    ${activeMonthStyles}
  }
`
