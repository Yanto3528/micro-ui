import styled, { css } from 'styled-components'

import { fontStyles } from '@/styles'
import { getBorderRadius } from '@/utils'

const activeYearStyles = css`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${getBorderRadius};
  color: white;
`

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-calendar-year-wrapper',
}))`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  height: 420px;
  padding: 10px;
  ${fontStyles};
  display: ${({ show }) => (show ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 100;
  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Header = styled.div.attrs(() => ({
  className: 'micro-calendar-year-header',
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
    ${activeYearStyles};
  }
`

export const YearList = styled.div.attrs(() => ({
  className: 'micro-calendar-year-list',
}))`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 10px;
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
