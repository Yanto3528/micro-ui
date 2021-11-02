import React from 'react'

import { theme } from '../theme'
import { Select } from './index'

const options = [
  { value: 'M', name: 'Male' },
  { value: 'F', name: 'Female' },
  { value: 'U', name: 'Unknown' },
]

const numOptions = {
  start: 1,
  end: 40,
}

const sumOptions = {
  start: 5000,
  end: 30000,
  step: 5000,
}

export default {
  title: 'Forms/Select',
  component: Select,
}

const Template = (args) => {
  const [value, setValue] = React.useState(args.value || '')

  return <Select {...args} value={value} onChange={setValue} />
}

export const Default = Template.bind({})
Default.args = {
  ...theme.default.component.select,
  placeholder: 'Select your gender',
  options,
}

export const Outline = Template.bind({})
Outline.args = {
  ...Default.args,
  variant: 'outline',
}

export const Filtered = Template.bind({})
Filtered.args = {
  ...Default.args,
  filter: ['U'],
}

export const Searchable = Template.bind({})
Searchable.args = {
  ...Default.args,
  searchable: true,
}

export const Number = Template.bind({})
Number.args = {
  ...Default.args,
  value: 0,
  options: numOptions,
  placeholder: 'Select your number',
}

export const SumAssured = Template.bind({})
SumAssured.args = {
  ...Default.args,
  value: 0,
  options: sumOptions,
  placeholder: 'Select your sum assured',
}
