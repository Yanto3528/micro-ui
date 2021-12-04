import React from 'react'

import { Icon } from './index'
import { allIconNames } from './icon-names'
import { IconContainer, IconWrapper, IconName } from './views'

export default {
  title: 'Icons/Fonts',
  component: Icon,
}

const Template = (args) => {
  return (
    <IconContainer>
      {allIconNames.map((iconName) => {
        return (
          <IconWrapper>
            <Icon {...args} name={iconName} />
            <IconName>{iconName}</IconName>
          </IconWrapper>
        )
      })}
    </IconContainer>
  )
}

export const FontIcons = Template.bind({})
FontIcons.args = {
  size: 's',
  color: 'secondary',
}
