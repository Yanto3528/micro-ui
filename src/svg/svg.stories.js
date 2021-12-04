import React from 'react'

import * as SVGIcons from './index'
import { IconContainer, IconWrapper, IconName } from './views'

export default {
  title: 'Icons/SVG',
  component: SVGIcons,
}

/* eslint-disable */
const Template = ({ svgIcons, ...args }) => {
  return (
    <IconContainer>
      {Object.keys(svgIcons).map((iconKey, index) => {
        const IconComponent = SVGIcons[iconKey]

        return (
          <IconWrapper key={index}>
            <IconComponent {...args} />
            <IconName>{iconKey}</IconName>
          </IconWrapper>
        )
      })}
    </IconContainer>
  )
}
/* eslint-enable */

export const AllIcon = Template.bind({})
AllIcon.args = {
  svgIcons: SVGIcons,
  width: '20px',
  color: 'secondary',
}
