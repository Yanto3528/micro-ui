import React from 'react'

import { theme } from '../theme'
import { Textarea } from './index'

export default {
  title: 'Forms/Textarea',
  component: Textarea,
}

const Template = (args) => <Textarea {...args} />

export const Primary = Template.bind({})
Primary.args = {
  ...theme.default.component.textarea,
  placeholder: 'Textarea placeholder',
  disabled: false,
  readonly: false,
  hasError: false,
}

export const Outline = Template.bind({})
Outline.args = {
  ...Primary.args,
  variant: 'outline',
}