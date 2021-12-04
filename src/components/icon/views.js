import styled, { css } from 'styled-components'

const sizeMapper = {
  xs: '1em',
  s: '1.5em',
  m: '2em',
  l: '2.5em',
  xl: '3em',
}

export const Component = styled.i`
  color: ${({ theme, color }) => theme.colors[color] || color || 'inherit'};
  font-size: ${({ size }) => sizeMapper[size] || size};
  ${({ customStyle }) => customStyle && css(customStyle)};
`

// For icon stories
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`

export const IconWrapper = styled.div`
  padding: 20px 10px;
  width: 100px;
  height: 100px;
  border: 1px solid lightgray;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  &:hover {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  }
`

export const IconName = styled.p`
  margin-top: 10px;
  color: '#333';
  font-family: AIARegular;
  font-weight: normal;
  font-size: 1.4rem;
  word-wrap: break-word;
  width: 100%;
  text-align: center;
`
