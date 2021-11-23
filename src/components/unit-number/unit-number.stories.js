import React from 'react'

import { theme } from '../theme'
import { UnitNumber } from './index'

export default {
  title: 'Forms/UnitNumber',
  component: UnitNumber,
}

const Template = (args) => <UnitNumber {...args} />

export const Default = Template.bind({})
Default.args = {
  ...theme.default.component.unitNumber,
  placeholder: 'xxxx',
  disabled: false,
  readOnly: false,
  hasError: false,
}

export const Outline = Template.bind({})
Outline.args = {
  ...Default.args,
  variant: 'outline',
}
