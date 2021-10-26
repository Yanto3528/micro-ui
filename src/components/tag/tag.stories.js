import React from 'react'

import { theme } from '../theme'
import { Tag } from './index'

export default {
  title: 'Utils/Tag',
  component: Tag,
}

const Template = (args) => <Tag {...args} />

export const SolidTag = Template.bind({})
SolidTag.args = {
  ...theme.default.component.tag,
  children: 'Tag',
  variant: 'solid',
}

export const OutlineTag = Template.bind({})
OutlineTag.args = {
  ...theme.default.component.tag,
  children: 'Tag',
  variant: 'outline',
}
