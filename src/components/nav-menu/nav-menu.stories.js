import React from 'react'

import { RenderComponent } from '../../storybook-helpers'
import { defaultMenu, withIconMenu } from './utils/constant'
import { NavMenu } from './index'

export default {
  title: 'Components/Others/NavMenu',
  component: NavMenu,
}

/* eslint-disable */
const Template = ({ components, children, ...args }) => {
  return (
    <NavMenu {...args}>
      {components ? (
        <RenderComponent components={components} parentComponent={NavMenu} />
      ) : (
        children
      )}
    </NavMenu>
  )
}
/* eslint-enable */

export const Default = Template.bind({})
Default.args = {
  components: defaultMenu,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  components: withIconMenu,
}
