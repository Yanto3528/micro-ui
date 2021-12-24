import React from 'react'
import { Activity } from 'react-feather'

import { theme } from '../theme'
import { RadioButton } from './index'

export default {
  title: 'Components/Forms/RadioButton',
  component: RadioButton,
}

const Template = (args) => <RadioButton {...args} />

export const Solid = Template.bind({})
Solid.args = {
  ...theme.default.component.radioButton,
  bg: 'gray.400',
  color: 'white',
  activeBGColor: 'primary',
  activeTextColor: 'white',
  variant: 'solid',
  label: 'Male',
  id: 'radio',
  disabled: false,
  readOnly: false,
}

export const Outline = Template.bind({})
Outline.args = {
  ...theme.default.component.radioButton,
  label: 'Male',
  id: 'radio',
  disabled: false,
  readOnly: false,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  ...Outline.args,
  icon: <Activity />,
}

export const Square = Template.bind({})
Square.args = {
  ...Outline.args,
  label: 'Individual / Family',
  buttonType: 'square',
}

export const SquareWithIcon = Template.bind({})
SquareWithIcon.args = {
  ...Outline.args,
  icon: <Activity />,
  iconSpacing: '10px',
  buttonType: 'square',
}
