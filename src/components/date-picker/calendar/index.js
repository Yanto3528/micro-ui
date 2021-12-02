import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { isDev } from '@/constants'
import { useToggle } from '@/hooks'

import { DateAction, DaysOfWeek } from './utils/constant'
import { dayjsType } from './utils/types'
import { getDisabledMonthData } from './utils/helpers'
import { CalendarYear } from './year'
import { Month } from './month'
import { Days } from './days'
import { DateInput } from './date-input'
import { Wrapper, YearDisplayWrapper, WeekDayWrapper, WeekDay } from './views'

dayjs.extend(utc)

export const Calendar = ({ value, onChange, startDate, endDate, ...props }) => {
  const [isYearOpen, { onToggle }] = useToggle()
  const [date, setDate] = useState(value)
  const [selectedDate, setSelectedDate] = useState(value)
  const [disabledMonth, setDisabledMonth] = useState({
    disableNextMonth: getDisabledMonthData(endDate, selectedDate),
    disablePrevMonth: getDisabledMonthData(startDate, selectedDate),
  })

  useEffect(() => {
    setDate(value)
    setSelectedDate(value)
  }, [value])

  const onYearSelect = (selectedYear) => {
    const currentMonth = date.format('MM')
    const dateValue = `${selectedYear}-${currentMonth}`

    const dateToShow = dayjs(dateValue)
    setDate(dateToShow)
  }

  const onMonthAction = (action) => {
    let newDate = date.clone()
    switch (action) {
      case DateAction.BACK:
        newDate = newDate.subtract(1, 'M')
        break
      case DateAction.NEXT:
        newDate = newDate.add(1, 'M')
        break
    }

    const disableNext = getDisabledMonthData(endDate, newDate)
    const disableBack = getDisabledMonthData(startDate, newDate)

    setDate(newDate)
    setDisabledMonth({
      disableNextMonth: disableNext,
      disablePrevMonth: disableBack,
    })
  }

  const onDateChange = (selectedDate, event) => {
    event.stopPropagation()

    setSelectedDate(selectedDate)
    onChange?.(selectedDate, event)
  }

  const onToggleShowYear = (event) => {
    event.stopPropagation()
    onToggle()
  }

  return (
    <Wrapper {...props.wrapperProps} data-testid='calendar'>
      {isYearOpen ? (
        <CalendarYear
          date={date}
          onToggleOpen={onToggleShowYear}
          onYearSelect={onYearSelect}
          {...props.yearProps}
        />
      ) : (
        <>
          <DateInput
            {...props.dateInputProps}
            value={value}
            startDate={startDate}
            endDate={endDate}
            onChange={onDateChange}
          />
          <YearDisplayWrapper onClick={onToggleShowYear}>
            <p data-testid='year-display'>{date.format('YYYY')}</p>
          </YearDisplayWrapper>
          <Month
            date={date}
            onMonthAction={onMonthAction}
            disabledMonth={disabledMonth}
            {...props.monthProps}
          />
          <WeekDayWrapper>
            {DaysOfWeek.map((day, index) => (
              <WeekDay key={`${day}-${index}`}>{day}</WeekDay>
            ))}
          </WeekDayWrapper>
          <Days
            date={date}
            selectedDate={selectedDate}
            onSelectDay={onDateChange}
            startDate={startDate}
            endDate={endDate}
            {...props.dayProps}
          />
        </>
      )}
    </Wrapper>
  )
}

Calendar.propTypes = {
  onChange: PropTypes.func,
  value: dayjsType.isRequired,
  startDate: PropTypes.oneOfType([dayjsType, PropTypes.instanceOf(Date)]),
  endDate: PropTypes.oneOfType([dayjsType, PropTypes.instanceOf(Date)]),
  wrapperProps: PropTypes.object,
  yearProps: PropTypes.object,
  monthProps: PropTypes.object,
  dayProps: PropTypes.object,
  dateInputProps: PropTypes.object,
}

if (isDev) {
  Calendar.displayName = 'Calendar'
}
