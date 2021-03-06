import styled, { css } from 'styled-components'

import { fontStyles } from '@/styles'
import { resolveColor } from '@/utils'

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-calendar-date-input-wrapper',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin-bottom: 10px;
`

export const StyledInput = styled.input.attrs(() => ({
  className: 'micro-calendar-date-input',
}))`
  outline: none;
  background-color: transparent;
  border: 1px solid ${resolveColor('borderColor')};
  border-radius: 4px;
  padding: 6px;
  ${fontStyles};
  color: ${resolveColor('color')};
  transition: all 0.4s;

  ${({ customStyle }) => customStyle && css(customStyle)};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`
