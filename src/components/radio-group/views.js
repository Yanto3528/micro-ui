import styled from 'styled-components'

export const Wrapper = styled.div.attrs(() => ({
  className: 'aia-radio-group',
}))`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  > *:not(:last-child) {
    margin-right: ${({ direction, gap }) => direction === 'row' && gap};
    margin-bottom: ${({ direction, gap }) => direction !== 'row' && gap};
  }
`
