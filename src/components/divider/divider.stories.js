import React from 'react'
import { Divider } from './index'
import { theme } from '../theme'

export default {
  title: 'Utils/Divider',
  component: Divider,
}

const Template = (args) => <Divider {...args} />

export const Default = Template.bind({})
Default.args = {
  ...theme.default.component.divider,
}

export const WithText = Template.bind({})
WithText.args = {
  ...theme.default.component.divider,
  text: 'Today',
  textPadding: '0 20px',
}
