import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0 3rem;
  margin: 0 auto;
`

export const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.dark1};
  text-align: center;
`

export const AuthHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: ${({ marginBottom }) => marginBottom || '2rem'};
  h1 {
    font-size: 2rem;
  }
`

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
`

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`

export const BoldLabel = styled.span`
  font-weight: bold;
`

export const SocialAccountButton = styled.button`
  outline: none;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  width: 6rem;
  height: 5rem;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;

  img {
    height: 2.5rem;
  }
`
