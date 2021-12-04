import styled from 'styled-components'

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
  color: ${({ theme }) => theme.colors.secondary};
  font-family: AIARegular;
  font-weight: normal;
  font-size: 1.4rem;
  word-wrap: break-word;
  width: 100%;
  text-align: center;
`
