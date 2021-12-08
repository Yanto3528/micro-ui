import React from 'react'
import dayjs from 'dayjs'

import { theme } from '../index'
import { DatePicker } from './index'

export default {
  title: 'Components/Forms/DatePicker',
  component: DatePicker,
}

const Template = (args) => <DatePicker {...args} />

export const Default = Template.bind({})
Default.args = {
  ...theme.default.component.datePicker,
  hasError: false,
  // value: dayjs('2000-11-10'),
  value: new Date(),
  placeholder: 'Select date of birth',
}

export const Outline = Template.bind({})
Outline.args = {
  ...Default.args,
  variant: 'outline',
}

export const WithStartDate = Template.bind({})
WithStartDate.args = {
  ...Default.args,
  startDate: dayjs().subtract(7, 'days'),
}

export const WithEndDate = Template.bind({})
WithEndDate.args = {
  ...Default.args,
  endDate: dayjs().add(1, 'month'),
}

export const WithStartAndEndDate = Template.bind({})
WithStartAndEndDate.args = {
  ...Default.args,
  startDate: dayjs().subtract(7, 'days'),
  endDate: dayjs().add(14, 'days'),
}

export const WithLeftLabel = Template.bind({})
WithLeftLabel.args = {
  ...Default.args,
  leftElement: <span>Ends</span>,
  paddingLeftElement: '60px',
}
