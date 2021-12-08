import React from 'react'
import { Plus } from 'react-feather'

import { Button } from './index'
import { theme } from '../theme'

export default {
  title: 'Components/Forms/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  ...theme.default.component.button,
  loading: false,
  disabled: false,
  width: '',
  height: '',
  children: 'Submit',
}

export const Outline = Template.bind({})
Outline.args = {
  ...Primary.args,
  children: 'Submit',
  variant: 'outline',
}

export const Loading = Template.bind({})
Loading.args = {
  ...Primary.args,
  children: 'Submit',
  loading: true,
  loadingText: 'Loading...',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  ...Primary.args,
  children: null,
  icon: <Plus size='1.2rem' />,
}
