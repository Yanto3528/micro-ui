import React from 'react'

import { ContactInput } from './index'
import { theme } from '../theme'

export default {
  title: 'Components/Forms/ContactInput',
  component: ContactInput,
}

const Template = (args) => <ContactInput {...args} />

export const Default = Template.bind({})
Default.args = {
  ...theme.default.component.contactInput,
  placeholder: 'Enter your mobile number',
  hasError: false,
  disabled: false,
  readOnly: false,
}

export const Outline = Template.bind({})
Outline.args = {
  ...Default.args,
  variant: 'outline',
  separatorColor: 'primary',
  fluid: false,
}
