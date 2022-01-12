import React from 'react'

import { theme } from '../theme'
import { Flex } from './index'

export default {
  title: 'Components/Others/Flex',
  component: Flex,
}

/* eslint-disable */
const Template = ({ list, ...args }) => {
  return (
    <Flex {...args}>
      {list.map((item, index) => (
        <div
          key={index}
          style={{
            width: '150px',
            padding: '1rem',
            background: 'dodgerblue',
            color: 'white',
          }}
        >
          {item}
        </div>
      ))}
    </Flex>
  )
}
/* eslint-enable */

export const Default = Template.bind({})
Default.args = {
  ...theme.default.component.flex,
  list: ['Box 1', 'Box 2', 'Box 3'],
}
