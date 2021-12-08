import React from 'react'

import { theme } from '../theme'
import { Tooltip } from './index'

export default {
  title: 'Components/Others/Tooltip',
  component: Tooltip,
}

const Template = (args) => <Tooltip {...args} />

export const Default = Template.bind({})
Default.args = {
  ...theme.default.component.tooltip,
  children: 'Hover me',
  content: 'This is tooltip content',
  style: { marginTop: '100px', marginLeft: '100px' },
}

export const LongContent = Template.bind({})
LongContent.args = {
  ...Default.args,
  content:
    'This is a super loooonnggg content which has a lot of text and paragraph going on this. Make it supperrr looonggg',
}

export const WithTemplateString = Template.bind({})
WithTemplateString.args = {
  ...Default.args,
  content: `
  1. This is an example item
  2. This is an example item
  3. This is an example item`,
}

export const WithCustomContent = Template.bind({})
WithCustomContent.args = {
  ...Default.args,
  content: (
    <>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Hello there</li>
        <li>Hello there</li>
        <li>Hello there</li>
      </ul>
    </>
  ),
}
