import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'

import { isDev } from '@/constants'
import { dayjsType } from '../utils/types'
import { checkDateRange } from '../utils/helpers'
import { Wrapper, SingleDay } from './views'

dayjs.extend(isBetween)

const DAYS_COUNT = 6 * 7 // 6 rows and 7 columns

export const Days = ({
  date,
  selectedDate,
  startDate,
  endDate,
  onSelectDay,
  ...props
}) => {
  const handleSelectDay = (selectedDay, isDateInRange) => (event) => {
    if (!isDateInRange) {
      return
    }

    onSelectDay(selectedDay, event)
  }

  const generateDays = () => {
    const days = []

    let daysOfMonth = date.startOf('month').day(1)
    if (daysOfMonth.date() > 1 && daysOfMonth.month() === date.month()) {
      daysOfMonth = daysOfMonth.subtract(1, 'w')
    }

    // Defined the methods to be called by dayjs
    const checkMethod =
      !!startDate && !!endDate
        ? 'isBetween'
        : startDate
        ? 'isAfter'
        : endDate
        ? 'isBefore'
        : ''

    let counter = 0
    while (counter !== DAYS_COUNT) {
      const dayValue = daysOfMonth.date()
      const isCurrentMonth = daysOfMonth.month() === date.month()

      const isDateInRange = checkMethod
        ? checkDateRange[checkMethod](daysOfMonth, startDate, endDate)
        : true

      days.push(
        <SingleDay
          key={daysOfMonth.valueOf()}
          isDifferentMonth={!isCurrentMonth}
          isSelected={daysOfMonth.isSame(selectedDate, 'day')}
          isDateInRange={isDateInRange}
          onClick={handleSelectDay(daysOfMonth, isDateInRange)}
          {...props}
        >
          {dayValue}
        </SingleDay>
      )

      const nextDate = daysOfMonth.add(1, 'days')

      daysOfMonth = nextDate
      counter++
    }

    return days
  }

  return <Wrapper>{generateDays()}</Wrapper>
}

Days.propTypes = {
  /** current date to show days */
  date: dayjsType.isRequired,
  /** current value to determine which date is selected */
  selectedDate: dayjsType.isRequired,
  startDate: PropTypes.oneOfType([dayjsType, PropTypes.instanceOf(Date)]),
  endDate: PropTypes.oneOfType([dayjsType, PropTypes.instanceOf(Date)]),
  onSelectDay: PropTypes.func.isRequired,
  /** Background-color when hover or in selected state */
  activeBg: PropTypes.string,
  /** Text color when hover or in selected state */
  activeColor: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  Days.displayName = 'Days'
}
