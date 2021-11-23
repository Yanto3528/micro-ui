import React from 'react'

import { Divider } from './index'
import { theme } from '../theme'

export default {
  title: 'Utils/Divider',
  component: Divider,
}

const Template = (args) => <Divider {...args} />
const VerticalTemplate = (args) => (
  <div style={{ height: args.height }}>
    <Divider {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  ...theme.default.component.divider,
}

export const WithText = Template.bind({})
WithText.args = {
  ...theme.default.component.divider,
  text: 'Today',
}

export const WithVerticalOrientation = VerticalTemplate.bind({})
WithVerticalOrientation.args = {
  ...Default.args,
  height: '200px',
  orientation: 'vertical',
}

export const WithVerticalAndText = VerticalTemplate.bind({})
WithVerticalAndText.args = {
  ...WithVerticalOrientation.args,
  text: 'Today',
}
