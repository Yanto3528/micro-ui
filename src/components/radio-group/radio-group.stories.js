import React from 'react'
import { Activity, Airplay } from 'react-feather'

import { RadioGroup } from './index'

export default {
  title: 'Components/Forms/RadioGroup',
  subcomponents: { Radio: RadioGroup.Radio, Button: RadioGroup.Button },
  component: RadioGroup,
}

export const ColumnRadio = () => {
  const [value, setValue] = React.useState('M')

  return (
    <RadioGroup value={value} onChange={setValue} name='gender'>
      <RadioGroup.Radio value='M'>Male</RadioGroup.Radio>
      <RadioGroup.Radio value='F'>Female</RadioGroup.Radio>
      <RadioGroup.Radio value='U'>Unknown</RadioGroup.Radio>
    </RadioGroup>
  )
}

export const ColumnButton = () => {
  const [value, setValue] = React.useState('Y')

  return (
    <RadioGroup
      value={value}
      onChange={setValue}
      name='goodHealth'
      width='160px'
    >
      <RadioGroup.Button value='Y'>Yes</RadioGroup.Button>
      <RadioGroup.Button value='N'>No</RadioGroup.Button>
    </RadioGroup>
  )
}

export const ColumnButtonSquare = () => {
  const [value, setValue] = React.useState('individual')

  return (
    <RadioGroup value={value} onChange={setValue} name='customerApply'>
      <RadioGroup.Button value='individual' buttonType='square'>
        Individual / Family
      </RadioGroup.Button>
      <RadioGroup.Button value='corporateCustomer' buttonType='square'>
        AIA Corporate Customer
      </RadioGroup.Button>
    </RadioGroup>
  )
}

export const RowRadio = () => {
  const [value, setValue] = React.useState('M')

  return (
    <RadioGroup value={value} onChange={setValue} name='gender' direction='row'>
      <RadioGroup.Radio value='M'>Male</RadioGroup.Radio>
      <RadioGroup.Radio value='F'>Female</RadioGroup.Radio>
      <RadioGroup.Radio value='U'>Unknown</RadioGroup.Radio>
    </RadioGroup>
  )
}

export const RowButton = () => {
  const [value, setValue] = React.useState('M')

  return (
    <RadioGroup
      value={value}
      onChange={setValue}
      name='gender'
      direction='row'
      width='335px'
    >
      <RadioGroup.Button value='M' icon={<Activity />}>
        Male
      </RadioGroup.Button>
      <RadioGroup.Button value='F' icon={<Airplay />}>
        Female
      </RadioGroup.Button>
    </RadioGroup>
  )
}

export const RowButtonSquare = () => {
  const [value, setValue] = React.useState('M')

  return (
    <RadioGroup
      value={value}
      onChange={setValue}
      name='gender'
      direction='row'
      gap='30px'
      width='335px'
    >
      <RadioGroup.Button
        value='M'
        buttonType='square'
        icon={<Activity />}
        iconSpacing='10px'
      >
        Male
      </RadioGroup.Button>
      <RadioGroup.Button
        value='F'
        buttonType='square'
        icon={<Airplay />}
        iconSpacing='10px'
      >
        Female
      </RadioGroup.Button>
    </RadioGroup>
  )
}

export const RowButtonRounded = () => {
  const [value, setValue] = React.useState('M')

  return (
    <RadioGroup
      value={value}
      onChange={setValue}
      name='gender'
      direction='row'
      gap='30px'
      width='335px'
    >
      <RadioGroup.Button
        value='M'
        buttonType='square'
        icon={<Activity />}
        iconSpacing='10px'
        radius='50%'
      >
        Male
      </RadioGroup.Button>
      <RadioGroup.Button
        value='F'
        buttonType='square'
        icon={<Airplay />}
        iconSpacing='10px'
        radius='50%'
      >
        Female
      </RadioGroup.Button>
    </RadioGroup>
  )
}
