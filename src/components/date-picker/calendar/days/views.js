import styled, { css } from 'styled-components'
import { resolveColor } from '@/utils'

const activeDayStyles = ({ isDateInRange }) =>
  isDateInRange &&
  css`
    background-color: ${({ theme, activeBg }) => resolveColor(theme, activeBg)};
    color: ${({ theme, activeColor }) => resolveColor(theme, activeColor)};
  `

const daySelectedStyles = ({ isSelected }) => isSelected && activeDayStyles

export const Wrapper = styled.div.attrs(() => ({
  className: 'aia-calendar-days-wrapper',
}))`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
`

export const SingleDay = styled.p.attrs(() => ({
  className: 'aia-calendar-days-single-day',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: ${({ isDateInRange }) => (isDateInRange ? 'pointer' : 'not-allowed')};
  opacity: ${({ isDateInRange }) => (isDateInRange ? '1' : '0.5')};
  user-select: none;
  border-radius: 50%;
  padding: calc(calc(100% - 1em) / 2) 0;
  line-height: 1;
  transition: background-color 0.4s;

  ${({ isDifferentMonth, isDateInRange }) =>
    (isDifferentMonth || !isDateInRange) &&
    css`
      color: ${({ theme }) => theme.colors.darkGray};
    `}

  ${daySelectedStyles};
  &:hover {
    ${activeDayStyles}
  }

  ${({ customStyle }) => customStyle && css(customStyle)};
`
