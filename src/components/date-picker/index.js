import React, { useState } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import { isDev } from '@/constants'
import { useTheme, useToggle, useClickOutside } from '@/hooks'
import { getProps } from '@/utils'

import { dayjsType } from './calendar/utils/types'
import { Input } from '../input'
import { Calendar } from './calendar'
import { Wrapper } from './views'

dayjs.extend(isBetween)
dayjs.extend(customParseFormat)

export const DatePicker = ({
  value,
  onChange,
  dateFormat = 'DD/MM/YYYY',
  startDate,
  endDate,
  ...props
}) => {
  const [dateValue, setDateValue] = useState(value ? dayjs(value) : dayjs())
  const [inputValue, setInputValue] = useState('')
  const [isOpen, { onOpen, onClose }] = useToggle()
  const theme = useTheme()
  const ref = useClickOutside(onClose)

  const { datePicker: defaultDatePickerProps } = theme.default.component

  const wrapperProps = getProps(props, defaultDatePickerProps, [
    'width',
    'fluid',
  ])

  const { calendarProps } = getProps(props, defaultDatePickerProps, [
    'calendarProps',
  ])

  const handleInputChange = (event) => {
    setInputValue(event.currentTarget.value)
  }

  const handleDateChange = (selectedDate) => {
    if (!selectedDate) {
      return
    }
    // Convert to UTC to match server time
    const utcDate = dayjs(selectedDate).utc(true)
    setInputValue(utcDate.format(dateFormat))
    setDateValue(utcDate)
    onChange(utcDate.toDate())
    onClose()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      const formattedDate = dayjs(inputValue, 'DD/MM/YYYY')
      if (dayjs.isDayjs(formattedDate)) {
        const checkMethod =
          !!startDate && !!endDate
            ? 'isBetween'
            : !!startDate
            ? 'isAfter'
            : !!endDate
            ? 'isBefore'
            : ''

        const inDateRange = checkMethod
          ? formattedDate[checkMethod](startDate, endDate)
          : true
        const dateResult = inDateRange ? formattedDate : dateValue

        if (!dateResult.isValid()) {
          return
        }

        // Convert to UTC to match server time
        const utcDate = dayjs(dateResult).utc(true)

        onChange(utcDate.toDate())
        setInputValue(utcDate.format(dateFormat))
        setDateValue(utcDate)
        onClose()
      }
    }
  }

  return (
    <Wrapper ref={ref} onClick={onOpen} {...wrapperProps}>
      <Input
        {...theme.default.component.datePicker}
        {...props}
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        maxLength={10}
      />
      {isOpen && (
        <Calendar
          value={dateValue}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          {...calendarProps}
        />
      )}
    </Wrapper>
  )
}

DatePicker.propTypes = {
  /** return javascript date object when choosing date or key in valid date input field,
   * value returned will be based on UTC time and not local time format.
   */
  onChange: PropTypes.func,
  /** The date format, defaults to DD/MM/YYYY, for full supported date format, check dayjs documentation */
  dateFormat: PropTypes.string,
  /** value for the date, must be one of dayjs instance or javascript date object */
  value: PropTypes.oneOfType([dayjsType, PropTypes.instanceOf(Date)]),
  /** startDate to prevent user to key in date before specified startDate, must be one of dayjs instance or javascript date object */
  startDate: PropTypes.oneOfType([dayjsType, PropTypes.instanceOf(Date)]),
  /** endDate to prevent user to key in date after specified endDate, must be one of dayjs instance or javascript date object */
  endDate: PropTypes.oneOfType([dayjsType, PropTypes.instanceOf(Date)]),
  /** Background color for input */
  bg: PropTypes.string,
  /** Text color for input */
  color: PropTypes.string,
  padding: PropTypes.string,
  radius: PropTypes.string,
  /** Round the input border radius */
  rounded: PropTypes.bool,
  variant: PropTypes.oneOf(['solid', 'outline']),
  /** Border color for outline variant */
  borderColor: PropTypes.string,
  /** Border color when focusing on the input, only applicable for outline variant */
  focusBorderColor: PropTypes.string,
  /** Show "danger" color as border color */
  hasError: PropTypes.bool,
  /** Left element for input, for example email icon */
  leftElement: PropTypes.element,
  /** Right element for input, useful for creating password eye */
  rightElement: PropTypes.element,
  width: PropTypes.string,
  height: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  /** Give input a full width of the current container */
  fluid: PropTypes.bool,
  /** Padding left for when leftElement is specified */
  paddingLeftElement: PropTypes.string,
  /** Padding right for when rightElement is specified */
  paddingRightElement: PropTypes.string,
}

if (isDev) {
  DatePicker.dipslayName = 'DatePicker'
}
