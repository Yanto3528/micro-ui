import React from 'react'
import Button from './index'

export default {
  title: 'Forms/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  rounded: false,
  loading: false,
  disabled: false,
  variant: 'solid',
  radius: '',
  width: '',
  height: '',
  bg: 'Primary',
  fluid: false,
  textColor: 'white',
  children: 'Submit',
}

export const ButtonWithIcon = Template.bind({})
ButtonWithIcon.args = {
  ...Primary.args,
  children: null,
  icon: <span>icon</span>,
}
