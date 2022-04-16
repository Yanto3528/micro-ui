import React from 'react'

import { NavMenu, Input, Button, Divider, Flex } from '@/components'
import GoogleIcon from '../assets/icons/icons-google.png'
import GithubIcon from '../assets/icons/icons-github.png'
import FacebookIcon from '../assets/icons/icons-facebook.png'
import {
  Container,
  Wrapper,
  AuthHeader,
  AuthForm,
  Label,
  SocialAccountButton,
} from './views'

export const Login = () => {
  return (
    <>
      <Container>
        <NavMenu>
          <NavMenu.Item>Micro UI</NavMenu.Item>
          <NavMenu.List>
            <NavMenu.Item>Home</NavMenu.Item>
            <NavMenu.Item>Products</NavMenu.Item>
            <NavMenu.Item>Pricing</NavMenu.Item>
            <NavMenu.Item>About</NavMenu.Item>
          </NavMenu.List>
        </NavMenu>
      </Container>
      <Wrapper>
        <div>
          <AuthHeader>
            <p style={{ fontSize: '3rem' }}>👋</p>
            <h1>Welcome Back</h1>
            <p>Let&apos;s build something great</p>
          </AuthHeader>
          <AuthForm>
            <div>
              <Label>E-mail or phone number</Label>
              <Input
                type='email'
                placeholder='Enter your email or phone number'
              />
            </div>
            <div>
              <Label>Password</Label>
              <Input type='password' placeholder='Enter your password' />
            </div>
            <Button>Sign in</Button>
          </AuthForm>
          <Divider
            text='Or do it via other accounts'
            marginBlock='3rem'
            fontSize='1.2rem'
          />
          <Flex gap='2rem' justify='center'>
            <SocialAccountButton>
              <img src={GoogleIcon} alt='google login' />
            </SocialAccountButton>
            <SocialAccountButton>
              <img src={GithubIcon} alt='github login' />
            </SocialAccountButton>
            <SocialAccountButton>
              <img src={FacebookIcon} alt='facebook login' />
            </SocialAccountButton>
          </Flex>
        </div>
      </Wrapper>
    </>
  )
}
