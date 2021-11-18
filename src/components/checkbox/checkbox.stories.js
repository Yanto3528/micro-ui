import React from 'react'

import { theme } from '../theme'
import { Checkbox } from './index'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
}

const Template = (args) => <Checkbox {...args} />

export const Primary = Template.bind({})
Primary.args = {
  ...theme.default.component.checkbox,
  label: 'Tick this checkbox',
  disabled: false,
  readOnly: false,
}

export const WithoutLabel = Template.bind({})
WithoutLabel.args = {
  ...Primary.args,
  label: '',
}
