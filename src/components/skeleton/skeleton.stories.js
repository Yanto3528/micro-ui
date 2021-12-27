import React from 'react'

import { theme } from '../theme'
import { Skeleton } from './index'

export default {
  title: 'Components/Others/Skeleton',
  component: Skeleton,
}

const Template = (args) => (
  <div style={{ width: '335px' }}>
    <Skeleton {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  ...theme.default.component.skeleton,
}

export const Multiple = Template.bind({})
Multiple.args = {
  ...Default.args,
  count: 3,
  spacing: '1rem',
}

export const Circle = Template.bind({})
Circle.args = {
  ...Default.args,
  circle: true,
  width: '5rem',
  height: '5rem',
}

export const Example = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.5rem',
          marginBottom: '1rem',
        }}
      >
        <Skeleton circle width='5rem' height='5rem' />
        <div>
          <Skeleton width='15rem' customStyle={{ 'margin-bottom': '0.8rem' }} />
          <Skeleton width='10rem' />
        </div>
      </div>
      <Skeleton count={3} width='30rem' />
    </>
  )
}
