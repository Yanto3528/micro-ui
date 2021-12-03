import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { isDev } from '@/constants'

import { Button } from '../../../button'
import { dayjsType } from '../utils/types'
import { checkDateRange } from '../utils/helpers'
import { Wrapper, StyledInput } from './views'

dayjs.extend(utc)

const DATE_FORMAT = 'DD/MM/YYYY'

export const DateInput = ({
  value,
  onChange,
  startDate,
  endDate,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value.format(DATE_FORMAT))
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleInputChange = (event) => {
    setInputValue(event.currentTarget.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      const formattedDate = dayjs(inputValue, DATE_FORMAT)
      // console.log('KeyUp InputValue: ', inputValue)
      // console.log('formattedDate: ', formattedDate)
      const checkMethod =
        !!startDate && !!endDate
          ? 'isBetween'
          : !!startDate
          ? 'isAfter'
          : !!endDate
          ? 'isBefore'
          : ''

      const inDateRange = checkMethod
        ? checkDateRange[checkMethod](formattedDate, startDate, endDate)
        : true
      const dateResult = inDateRange ? formattedDate : value

      // console.log('inDateRange: ', inDateRange)
      // console.log('dateResult: ', dateResult)

      if (!dateResult.isValid()) {
        onChange?.(value, event)
        setInputValue(value.format(DATE_FORMAT))
        return
      }

      onChange?.(dateResult, event)
      setInputValue(dateResult.format(DATE_FORMAT))
    }
  }

  const handleTodayClick = (event) => {
    onChange?.(dayjs().startOf('day'), event)
  }

  return (
    <Wrapper data-testid='calendar-date-input-wrapper'>
      <StyledInput
        {...props}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        maxLength={10}
        ref={inputRef}
        data-testid='calendar-date-input'
      />
      <Button
        variant='outline'
        padding='7px 16px'
        rounded={false}
        radius='4px'
        width='40%'
        onClick={handleTodayClick}
      >
        Today
      </Button>
    </Wrapper>
  )
}

DateInput.propTypes = {
  value: dayjsType.isRequired,
  onChange: PropTypes.func,
  startDate: PropTypes.oneOfType([dayjsType, PropTypes.instanceOf(Date)]),
  endDate: PropTypes.oneOfType([dayjsType, PropTypes.instanceOf(Date)]),
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  borderColor: PropTypes.string,
  /** Custom style for input */
  customStyle: PropTypes.object,
}

if (isDev) {
  DateInput.displayName = 'DateInput'
}
