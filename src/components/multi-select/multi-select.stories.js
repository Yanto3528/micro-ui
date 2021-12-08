import React from 'react'

import { theme } from '../theme'
import { MultiSelect } from './index'

const options = [
  { value: '1', name: 'Singaporean' },
  { value: '2', name: 'Singaporean PR' },
  { value: '3', name: 'Dependent Pass' },
  { value: '4', name: 'Employment Pass' },
  { value: '5', name: 'Social visits Pass' },
  { value: '6', name: 'Student Pass' },
  { value: '7', name: 'Others' },
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
  title: 'Components/Forms/MultiSelect',
  component: MultiSelect,
}

const Template = (args) => {
  const [value, setValue] = React.useState(args.value || [])

  return <MultiSelect {...args} value={value} onChange={setValue} />
}

export const Default = Template.bind({})
Default.args = {
  ...theme.default.component.multiSelect,
  readOnly: false,
  disabled: false,
  placeholder: 'Select residential status',
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
