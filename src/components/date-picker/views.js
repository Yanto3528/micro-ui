import styled from 'styled-components'
import { Input } from '../input'

export const Wrapper = styled.div.attrs(() => ({
  className: 'aia-date-picker-wrapper',
}))`
  position: relative;
  display: inline-block;
  width: ${({ fluid, width }) => (fluid ? '100%' : width)};
  max-width: 100%;
  z-index: 10;
`

export const StyledInput = styled(Input)`
  &:read-only {
    opacity: 1;
    cursor: pointer;
  }
`
