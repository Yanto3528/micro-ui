import React from 'react'

import { theme } from '../theme'
import { UnitNumber } from './index'

export default {
  title: 'Forms/UnitNumber',
  component: UnitNumber,
}

const Template = (args) => <UnitNumber {...args} />

export const Primary = Template.bind({})
Primary.args = {
  ...theme.default.component.unitNumber,
  placeholder: 'Unit number placeholder',
  disabled: false,
  readOnly: false,
  hasError: false,
}

export const Outline = Template.bind({})
Outline.args = {
  ...Primary.args,
  variant: 'outline',
}
