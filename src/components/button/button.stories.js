import React from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaGoogle,
  FaCog,
} from 'react-icons/fa'

import { Button } from './index'
import { theme } from '../theme'

export default {
  title: 'Components/Forms/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
}

const SocialButtons = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  youtube: FaYoutube,
  instagram: FaInstagram,
  pinterest: FaPinterest,
  linkedin: FaLinkedin,
  google: FaGoogle,
}

const Template = (args) => <Button {...args} />

const SocialTemplate = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'flex-start',
      }}
    >
      {Object.entries(SocialButtons).map(([name, SocialIcon]) => {
        const label = name.substring(0, 1).toUpperCase() + name.substring(1)
        return (
          <Button
            key={name}
            {...args}
            bg={name}
            leftIcon={<SocialIcon />}
            width='120px'
          >
            {label}
          </Button>
        )
      })}
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  ...theme.default.component.button,
  loading: false,
  disabled: false,
  width: '',
  height: '',
  children: 'Submit',
}

export const Outline = Template.bind({})
Outline.args = {
  ...Primary.args,
  children: 'Submit',
  variant: 'outline',
}

export const Loading = Template.bind({})
Loading.args = {
  ...Primary.args,
  children: 'Submit',
  loading: true,
  loadingText: 'Loading...',
}

export const WithLeftIcon = Template.bind({})
WithLeftIcon.args = {
  ...Primary.args,
  children: 'Settings',
  leftIcon: <FaCog />,
}

export const WithRightIcon = Template.bind({})
WithRightIcon.args = {
  ...Primary.args,
  children: 'Settings',
  rightIcon: <FaCog />,
}

export const WithLeftRightIcon = Template.bind({})
WithLeftRightIcon.args = {
  ...Primary.args,
  children: 'Settings',
  leftIcon: <FaCog />,
  rightIcon: <FaCog />,
}

export const IconButton = Template.bind({})
IconButton.args = {
  ...Primary.args,
  children: null,
  leftIcon: <FaCog />,
}

export const SocialButton = SocialTemplate.bind({})
SocialButton.args = {
  ...Primary.args,
}
