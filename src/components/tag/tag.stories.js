import React from 'react'

import { theme } from '../theme'
import { Tag } from './index'

export default {
  title: 'Utils/Tag',
  component: Tag,
}

const Template = (args) => <Tag {...args} />

export const Solid = Template.bind({})
Solid.args = {
  ...theme.default.component.tag,
  children: 'Tag',
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
