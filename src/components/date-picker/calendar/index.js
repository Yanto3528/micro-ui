import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { isDev } from '../../../constants'
import { useToggle } from '../../../hooks'
import { DateAction, DaysOfWeek } from './utils/constant'
import { dayjsType } from './utils/types'
import { getDisableMonthData } from './utils/helpers'
import { CalendarYear } from './year'
import { Month } from './month'
import { Days } from './days'
import { Wrapper, YearDisplayWrapper, WeekDayWrapper, WeekDay } from './views'

dayjs.extend(utc)

export const Calendar = ({ value, onChange, startDate, endDate, ...props }) => {
  const [isYearOpen, { onToggle }] = useToggle()
  const [date, setDate] = useState(value)
  const [selectedDate, setSelectedDate] = useState(value)
  const [disabledMonth, setDisabledMonth] = useState({
    disableNextMonth: getDisableMonthData(endDate, selectedDate),
    disablePrevMonth: getDisableMonthData(startDate, selectedDate),
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

    const disableNext = getDisableMonthData(endDate, newDate)
    const disableBack = getDisableMonthData(startDate, newDate)

    setDate(newDate)
    setDisabledMonth({
      disableNextMonth: disableNext,
      disablePrevMonth: disableBack,
    })
  }

  const onSelectDay = (selectedDate, event) => {
    event.stopPropagation()

    setSelectedDate(selectedDate)
    onChange(selectedDate, event)
  }

  return (
    <Wrapper {...props}>
      {isYearOpen ? (
        <CalendarYear
          date={date}
          onToggleOpen={onToggle}
          onYearSelect={onYearSelect}
        />
      ) : (
        <>
          <YearDisplayWrapper onClick={onToggle}>
            <p>{date.format('YYYY')}</p>
          </YearDisplayWrapper>
          <Month
            date={date}
            onMonthAction={onMonthAction}
            disabledMonth={disabledMonth}
          />
          <WeekDayWrapper>
            {DaysOfWeek.map((day, index) => (
              <WeekDay key={`${day}-${index}`}>{day}</WeekDay>
            ))}
          </WeekDayWrapper>
          <Days
            date={date}
            selectedDate={selectedDate}
            onSelectDay={onSelectDay}
            startDate={startDate}
            endDate={endDate}
          />
        </>
      )}
    </Wrapper>
  )
}

Calendar.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([dayjsType, PropTypes.instanceOf(Date)]),
  startDate: PropTypes.oneOfType([dayjsType, PropTypes.instanceOf(Date)]),
  endDate: PropTypes.oneOfType([dayjsType, PropTypes.instanceOf(Date)]),
}

if (isDev) {
  Calendar.displayName = 'Calendar'
}
