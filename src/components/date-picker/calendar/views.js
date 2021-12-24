import styled, { css } from 'styled-components'

import { fontStyles } from '@/styles'
import { Icon } from '../../icon'

const iconStyles = css`
  color: ${({ theme }) => theme.colors.primary};
  display: inline-block;
  cursor: pointer;
`

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-calendar-wrapper',
}))`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  transform: translateY(100%);
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  padding: 12px;
  width: 100%;
  background-color: white;
  ${fontStyles};
  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const YearDisplayWrapper = styled.div.attrs(() => ({
  className: 'micro-calendar-year-display',
}))`
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  p {
    padding: 10px 30px;
    display: inline-block;
  }
  &:hover > p {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export const NextBackButton = styled.div.attrs(() => ({
  className: 'micro-calendar-next-back-wrapper',
  'data-testid': 'next-back-wrapper',
}))`
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: pointer;
  padding: 0px;
  position: relative;
  font-size: 14px;

  & .aia-calendar-back {
    transform-origin: 50%;
    transform: rotate(180deg);
  }

  & .aia-calendar-back:nth-child(2),
  & .aia-calendar-next:nth-child(2) {
    transition: all 0.3s ease-out;
    position: absolute;
    top: 0px;
    opacity: 0;
  }

  & .aia-calendar-back:nth-child(2) {
    left: 0px;
    will-change: opacity, left;
  }
  & .aia-calendar-next:nth-child(2) {
    right: 0px;
    will-change: opacity, right;
  }

  &:hover {
    & .aia-calendar-back:nth-child(2) {
      transition: all 0.3s ease-out;
      opacity: 1;
      left: -10px;
    }
    & .aia-calendar-next:nth-child(2) {
      transition: all 0.3s ease-out;
      opacity: 1;
      right: -10px;
    }
  }
`

export const NextIcon = styled(Icon).attrs(() => ({
  className: 'micro-calendar-next',
  name: 'forward',
  size: 'l',
}))`
  ${iconStyles};
`

export const BackIcon = styled(Icon).attrs(() => ({
  className: 'micro-calendar-back',
  name: 'forward',
  size: 'l',
}))`
  ${iconStyles};
  transform-origin: 50%;
  transform: rotate(180deg);
`

export const WeekDayWrapper = styled.div.attrs(() => ({
  className: 'micro-calendar-week-day-wrapper',
}))`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  grid-gap: 5px;
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
