import React from 'react'

import { theme } from '../theme'
import { Grid } from './index'

export default {
  title: 'Components/Others/Grid',
  component: Grid,
}

/* eslint-disable */
const Template = ({ list, ...args }) => {
  return (
    <Grid {...args}>
      {list.map((_, index) => (
        <div
          key={index}
          style={{
            padding: '1rem',
            background: 'dodgerblue',
            color: 'white',
          }}
        >
          Box {index + 1}
        </div>
      ))}
    </Grid>
  )
}
/* eslint-enable */

export const Default = Template.bind({})
Default.args = {
  ...theme.default.component.grid,
  columns: 2,
  customStyle: {
    width: '600px',
  },
  list: new Array(10).fill(null),
}

export const WithColumnObject = Template.bind({})
WithColumnObject.args = {
  ...theme.default.component.grid,
  columns: { xs: 1, sm: 1, md: 3, lg: 2 },
  list: new Array(10).fill(null),
}

export const WithMinChildWidth = Template.bind({})
WithMinChildWidth.args = {
  ...theme.default.component.grid,
  minChildWidth: '150px',
  customStyle: {
    'max-width': '800px',
  },
  list: new Array(10).fill(null),
}
