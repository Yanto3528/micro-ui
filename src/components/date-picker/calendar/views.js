import styled, { css } from 'styled-components'
import { ChevronRight, ChevronLeft } from 'react-feather'

import { fontStyles } from '@/styles'

const iconStyles = css`
  color: ${({ theme }) => theme.colors.primary};
  display: inline-block;
  cursor: pointer;
`

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-calendar-wrapper',
}))`
  position: absolute;
  bottom: 45px;
  left: 0;
  z-index: 10;
  transform: translateY(100%);
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  padding: 12px;
  width: 335px;
  height: 420px;
  background-color: white;
  ${fontStyles};
  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const NextBackButton = styled.div.attrs(() => ({
  className: 'micro-calendar-next-back-wrapper',
}))`
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: pointer;
  padding: 0px;
  position: relative;
  font-size: 14px;

  & .micro-calendar-back:nth-child(2),
  & .micro-calendar-next:nth-child(2) {
    transition: all 0.3s ease-out;
    position: absolute;
    top: 0px;
    opacity: 0;
  }

  & .micro-calendar-back:nth-child(2) {
    left: 0px;
    will-change: opacity, left;
  }
  & .micro-calendar-next:nth-child(2) {
    right: 0px;
    will-change: opacity, right;
  }

  &:hover {
    & .micro-calendar-back:nth-child(2) {
      transition: all 0.3s ease-out;
      opacity: 1;
      left: -10px;
    }
    & .micro-calendar-next:nth-child(2) {
      transition: all 0.3s ease-out;
      opacity: 1;
      right: -10px;
    }
  }
`

export const NextIcon = styled(ChevronRight).attrs(() => ({
  className: 'micro-calendar-next',
  size: '2em',
}))`
  ${iconStyles};
`

export const BackIcon = styled(ChevronLeft).attrs(() => ({
  className: 'micro-calendar-back',
  size: '2em',
}))`
  ${iconStyles};
`

export const WeekDayWrapper = styled.div.attrs(() => ({
  className: 'micro-calendar-week-day-wrapper',
}))`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  grid-gap: 10px;
  background-color: transparent;
  margin-top: 12px;
  margin-bottom: 20px;
`

export const WeekDay = styled.span.attrs({
  className: 'micro-calendar-week-day',
})`
  display: inline-block;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkGray};
  text-align: center;
  background-color: transparent;
  user-select: none;
`
