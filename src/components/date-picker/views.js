import styled from 'styled-components'

export const Wrapper = styled.div.attrs(() => ({
  className: 'aia-date-picker-wrapper',
}))`
  position: relative;
  display: inline-block;
  width: ${({ fluid, width }) => (fluid ? '100%' : width)};
`
