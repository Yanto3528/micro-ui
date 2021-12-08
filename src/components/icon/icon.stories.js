import React from 'react'

import { Icon } from './index'
import { allIconNames } from './icon-names'
import { IconContainer, IconWrapper, IconName } from './views'

export default {
  title: 'Components/Others/Icons',
  component: Icon,
}

const Template = (args) => {
  return (
    <IconContainer>
      {allIconNames.map((iconName, iconIndex) => {
        return (
          <IconWrapper key={iconIndex}>
            <Icon {...args} name={iconName} />
            <IconName>{iconName}</IconName>
          </IconWrapper>
        )
      })}
    </IconContainer>
  )
}

export const All = Template.bind({})
All.args = {
  size: 's',
  color: 'secondary',
}
