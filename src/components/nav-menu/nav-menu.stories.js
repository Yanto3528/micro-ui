import React from 'react'

import { RenderComponent } from '../../storybook-helpers'
import { defaultMenu, withIconMenu, withSubMenu } from './utils/constant'
import { NavMenu } from './index'

export default {
  title: 'Components/Others/NavMenu',
  component: NavMenu,
}

/* eslint-disable */
const Template = ({ components, children, ...args }) => {
  return (
    <>
      <NavMenu {...args}>
        {components ? (
          <RenderComponent components={components} parentComponent={NavMenu} />
        ) : (
          children
        )}
      </NavMenu>
      <div style={{ height: '200vh' }}>
        <p>This is content</p>
      </div>
    </>
  )
}
/* eslint-enable */

export const Default = Template.bind({})
Default.args = {
  position: 'sticky',
  bg: 'white',
  customStyle: {
    'box-shadow': '0 1px 5px rgba(0,0,0,0.15)',
  },
  components: defaultMenu,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  components: withIconMenu,
}

export const WithSubMenu = Template.bind({})
WithSubMenu.args = {
  components: withSubMenu,
}
