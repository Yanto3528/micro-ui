import React from 'react'
import dayjs from 'dayjs'

import { theme } from '../index'
import { DatePicker } from './index'

export default {
  title: 'Forms/DatePicker',
  component: DatePicker,
}

const Template = (args) => <DatePicker {...args} />

export const Test = () => {
  const [value, setValue] = React.useState()
  const [checkboxValue, setCheckboxValue] = React.useState(false)

  console.log('value: ', value)
  console.log('value format: ', dayjs().add(1, 'day').format('DD/MM/YYYY'))
  console.log(
    'value utc format: ',
    dayjs().add(1, 'day').utc(true).startOf('day').format('DD/MM/YYYY')
  )

  React.useEffect(() => {
    if (checkboxValue) {
      setValue(dayjs('1999-08-10'))
    } else {
      setValue(dayjs('2001-05-10'))
    }
  }, [checkboxValue])

  return (
    <>
      <input
        type='checkbox'
        checked={checkboxValue}
        onChange={(event) => setCheckboxValue(event.target.checked)}
      />
      <DatePicker
        placeholder='Enter your date of birth'
        value={value}
        onChange={setValue}
      />
    </>
  )
}

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
