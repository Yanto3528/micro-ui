import React from 'react'

import { theme } from '../theme'
import { Radio } from './index'

export default {
  title: 'Components/Forms/Radio',
  component: Radio,
}

const Template = (args) => <Radio {...args} />

export const Circular = Template.bind({})
Circular.args = {
  ...theme.default.component.radio,
  label: 'Select this radio',
  id: 'radio',
  disabled: false,
  readOnly: false,
}

export const Check = Template.bind({})
Check.args = {
  ...Circular.args,
  variant: 'check',
}
