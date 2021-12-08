import React from 'react'
import { Mail, Eye } from 'react-feather'

import { theme } from '../theme'
import { Input } from './index'

export default {
  title: 'Components/Forms/Input',
  component: Input,
}

const Template = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  ...theme.default.component.input,
  placeholder: 'Please enter your name',
  disabled: false,
  readOnly: false,
  hasError: false,
}

export const Outline = Template.bind({})
Outline.args = {
  ...Primary.args,
  variant: 'outline',
}

export const WithLeftElement = Template.bind({})
WithLeftElement.args = {
  ...Primary.args,
  type: 'email',
  placeholder: 'Please enter your email',
  leftElement: <Mail size='1.4rem' color='gray' />,
}

export const WithRightElement = Template.bind({})
WithRightElement.args = {
  ...Primary.args,
  type: 'password',
  placeholder: 'Please enter your password',
  rightElement: <Eye size='1.4rem' color='gray' />,
}

export const WithLeftAndRightElement = Template.bind({})
WithLeftAndRightElement.args = {
  ...Primary.args,
  type: 'text',
  leftElement: <Mail size='1.4rem' color='gray' />,
  rightElement: <Eye size='1.4rem' color='gray' />,
}
