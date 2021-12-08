import React from 'react'
import { ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs'

import * as SVGIcons from './index'
import { IconContainer, IconWrapper, IconName } from './views'
import CustomMdxDocumentation from './svg.mdx'

export default {
  title: 'SVG/Icon',
  component: SVGIcons,
  parameters: {
    docs: {
      /* eslint-disable */
      page: () => {
        return (
          <>
            <CustomMdxDocumentation />
            <ArgsTable story={PRIMARY_STORY} />
          </>
        )
      },
      /* eslint-enable */
    },
  },
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

export const All = Template.bind({})
All.args = {
  svgIcons: SVGIcons,
  width: '20px',
  color: 'secondary',
}
