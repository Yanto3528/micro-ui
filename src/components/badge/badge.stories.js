import React from 'react'

import { theme } from '../theme'
import { Badge } from './index'

export default {
  title: 'Components/Others/Badge',
  component: Badge,
}

const Template = (args) => <Badge {...args} />

export const Solid = Template.bind({})
Solid.args = {
  ...theme.default.component.tag,
  children: 'Technology',
  variant: 'solid',
}

export const Rounded = Template.bind({})
Rounded.args = {
  ...Solid.args,
  rounded: true,
}

export const Outline = Template.bind({})
Outline.args = {
  ...Solid.args,
  variant: 'outline',
}

export const OutlineRounded = Template.bind({})
OutlineRounded.args = {
  ...Outline.args,
  rounded: true,
}
