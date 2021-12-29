import React from 'react'

import { RenderComponent } from '../../storybook-helpers'
import { defaultCard, horizontalCard } from './utils/constant'
import { Card } from './index'

export default {
  title: 'components/Others/Card',
  component: Card,
}

/* eslint-disable */
const Template = ({ components, ...args }) => {
  return (
    <Card {...args}>
      <RenderComponent components={components} parentComponent={Card} />
    </Card>
  )
}
/* eslint-enable */

export const Default = Template.bind({})
Default.args = {
  components: defaultCard,
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: 'row',
  gap: '1rem',
  width: '60rem',
  components: horizontalCard,
}
