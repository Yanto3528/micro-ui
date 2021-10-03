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
  id: 'check',
  disabled: false,
  readOnly: false,
}
