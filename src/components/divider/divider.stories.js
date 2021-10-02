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
