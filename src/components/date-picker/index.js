import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import utc from 'dayjs/plugin/utc'

import { isDev } from '@/constants'
import { useTheme, useToggle, useClickOutside } from '@/hooks'
import { getProps } from '@/utils'

import { dayjsType } from './calendar/utils/types'
import { Calendar } from './calendar'
import { Wrapper, StyledInput } from './views'

dayjs.extend(isBetween)
dayjs.extend(customParseFormat)
dayjs.extend(utc)

export const DatePicker = React.forwardRef(
  (
    {
      value,
      onChange,
      dateFormat = 'DD/MM/YYYY',
      startDate,
      endDate,
      ...props
    },
    ref
  ) => {
    const [dateValue, setDateValue] = useState(
      dayjs(value || undefined)
        .utc(true)
        .startOf('day')
    )
    const [isOpen, { onOpen, onClose }] = useToggle()
    const theme = useTheme()
    const wrapperRef = useClickOutside(onClose)

    useEffect(() => {
      const isUtcDate = dayjs(value).isUTC()
      setDateValue(
        isUtcDate
          ? value.startOf('day')
          : dayjs(value || undefined)
              .utc(true)
              .startOf('day')
      )
    }, [value, dateFormat])

    const { datePicker: defaultDatePickerProps } = theme.default.component

    const wrapperProps = getProps(props, defaultDatePickerProps, [
      'width',
      'fluid',
    ])

    const { calendarProps } = getProps(props, defaultDatePickerProps, [
      'calendarProps',
    ])

    const handleDateChange = (selectedDate, event) => {
      // Convert to UTC to match server time
      const utcDate = dayjs(selectedDate).utc(true)
      setDateValue(utcDate)
      onChange?.(utcDate.toDate(), event)
      onClose()
    }

    return (
      <Wrapper
        {...wrapperProps}
        onClick={onOpen}
        ref={wrapperRef}
        data-testid='date-picker-wrapper'
      >
        <StyledInput
          {...theme.default.component.datePicker}
          {...props}
          type='text'
          readOnly
          value={value ? dateValue.format(dateFormat) : ''}
          ref={ref}
        />
        {isOpen && (
          <Calendar
            value={dateValue}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            onClose={onClose}
            {...calendarProps}
          />
        )}
      </Wrapper>
    )
  }
)

DatePicker.propTypes = {
  /** return javascript date object when choosing date or key in valid date input field,
   * value returned will be based on UTC time and not local time format.
   */
  onChange: PropTypes.func,
  /** The date format, defaults to DD/MM/YYYY, for full supported date format, check dayjs documentation */
  dateFormat: PropTypes.string,
  /** value for the date, must be one of dayjs instance, date object, string or number */
  value: PropTypes.oneOfType([
    dayjsType,
    PropTypes.instanceOf(Date),
    PropTypes.string,
    PropTypes.number,
  ]),
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
  DatePicker.displayName = 'DatePicker'
}
