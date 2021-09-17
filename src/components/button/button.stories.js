import React from 'react'
import Button from './index'

export default {
  title: 'Forms/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  rounded: false,
  loading: false,
  disabled: false,
  children: 'Submit',
}
