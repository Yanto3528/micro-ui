import React from 'react'

import { theme } from '../theme'
import { Avatar } from './index'

export default {
  title: 'Components/Others/Avatar',
  component: Avatar,
}

const Template = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  ...theme.default.component.avatar,
  src: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
  ...theme.default.component.avatar,
  src: 'https://google.com',
}

export const WithName = Template.bind({})
WithName.args = {
  ...theme.default.component.avatar,
  src: 'https://google.com',
  name: 'Daniel Winson',
}
