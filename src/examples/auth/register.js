import React from 'react'

import { NavMenu, Input, Button, Divider, Flex, Checkbox } from '@/components'
import GoogleIcon from '../assets/icons/icons-google.png'
import GithubIcon from '../assets/icons/icons-github.png'
import FacebookIcon from '../assets/icons/icons-facebook.png'
import {
  Container,
  Wrapper,
  AuthHeader,
  AuthForm,
  Label,
  BoldLabel,
  SocialAccountButton,
} from './views'

export const Register = () => {
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
          <AuthHeader marginBottom='5rem'>
            <h1>Create your account</h1>
            <p>It&apos;s free and easy</p>
          </AuthHeader>
          <AuthForm>
            <div>
              <Label>Full name</Label>
              <Input placeholder='Enter your name' />
            </div>
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
            <div>
              <Checkbox
                label={
                  <>
                    By creating an account means that you agree to the{' '}
                    <BoldLabel>Terms and Condition,</BoldLabel> and our{' '}
                    <BoldLabel>Privacy Policy</BoldLabel>
                  </>
                }
              />
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
