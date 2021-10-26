import React from 'react'

import { Label } from './index'
import { theme } from '../theme'

export default {
  title: 'Utils/Label',
  component: Label,
}

const Template = (args) => <Label {...args} />

export const Primary = Template.bind({})
Primary.args = {
  ...theme.default.component.label,
}
