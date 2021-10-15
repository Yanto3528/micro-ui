import React from 'react'

import { RadioGroup } from './index'

export default {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
}

export const Column = () => {
  const [value, setValue] = React.useState('M')

  return (
    <RadioGroup value={value} onChange={setValue} name='gender'>
      <RadioGroup.Radio value='M'>Male</RadioGroup.Radio>
      <RadioGroup.Radio value='F'>Female</RadioGroup.Radio>
      <RadioGroup.Radio value='U'>Unknown</RadioGroup.Radio>
    </RadioGroup>
  )
}

export const Row = () => {
  const [value, setValue] = React.useState('M')

  return (
    <RadioGroup value={value} onChange={setValue} name='gender' direction='row'>
      <RadioGroup.Radio value='M'>Male</RadioGroup.Radio>
      <RadioGroup.Radio value='F'>Female</RadioGroup.Radio>
      <RadioGroup.Radio value='U'>Unknown</RadioGroup.Radio>
    </RadioGroup>
  )
}
