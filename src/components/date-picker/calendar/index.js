import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { isDev } from '@/constants'

import { DateAction, DaysOfWeek, DateState } from './utils/constant'
import { dayjsType } from './utils/types'
import { getDisabledMonthData } from './utils/helpers'
import { CalendarYear } from './year'
import { YearMonth } from './year-month'
import { CalendarMonth } from './month'
import { Days } from './days'
import { DateInput } from './date-input'
import { Wrapper, WeekDayWrapper, WeekDay } from './views'

dayjs.extend(utc)

export const Calendar = ({ value, onChange, startDate, endDate, ...props }) => {
  const [dateState, setDateState] = useState(DateState.DATE)
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
    onSetDisabledMonth(dateToShow)
  }

  const onMonthSelect = (selectedDate) => {
    setDate(selectedDate)
    setDateState(DateState.DATE)
    onSetDisabledMonth(selectedDate)
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

    onSetDisabledMonth(newDate)
    setDate(newDate)
  }

  const onSetDisabledMonth = (newDate) => {
    const disableNext = getDisabledMonthData(endDate, newDate)
    const disableBack = getDisabledMonthData(startDate, newDate)
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
    setDateState(DateState.DATE)
  }

  return (
    <Wrapper {...props.wrapperProps} data-testid='calendar'>
      <CalendarYear
        date={date}
        onToggleOpen={onToggleShowYear}
        onYearSelect={onYearSelect}
        startDate={startDate}
        endDate={endDate}
        show={dateState === DateState.YEAR}
        {...props.yearProps}
      />
      <CalendarMonth
        date={date}
        onMonthSelect={onMonthSelect}
        show={dateState === DateState.MONTH}
        {...props.monthProps}
      />
      <DateInput
        {...props.dateInputProps}
        value={value}
        startDate={startDate}
        endDate={endDate}
        onChange={onDateChange}
      />
      <YearMonth
        date={date}
        onMonthAction={onMonthAction}
        disabledMonth={disabledMonth}
        setDateState={setDateState}
        {...props.yearMonthProps}
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
  yearMonthProps: PropTypes.object,
  monthProps: PropTypes.object,
  dayProps: PropTypes.object,
  dateInputProps: PropTypes.object,
}

if (isDev) {
  Calendar.displayName = 'Calendar'
}
