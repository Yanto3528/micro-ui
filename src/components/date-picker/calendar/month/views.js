import styled from 'styled-components'

export const Wrapper = styled.div.attrs(() => ({
  className: 'aia-calendar-year-wrapper',
}))`
  text-align: center;
  font-family: AIAMedium;
`

export const Header = styled.div.attrs(() => ({
  className: 'aia-calendar-year-header',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CurrentMonth = styled.div.attrs(() => ({
  className: 'aia-calendar-year-current-year',
}))`
  padding: 4px 10px;
  margin: 0 10px;
  width: 100px;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`
