import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

import { isDev } from '@/constants'
import { Divider } from '@/components/divider'

import { dayjsType } from '../utils/types'
import { NextBackButton, NextIcon, BackIcon } from '../views'
import { Wrapper, Header, CurrentYear, MonthList, Month } from './views'

const monthLength = 12

export const CalendarMonth = ({
  date,
  onMonthSelect,
  radius,
  show,
  ...props
}) => {
  const currentYearDisplay = Number(date.format('YYYY'))

  const [currentYear, setCurrentYear] = useState(currentYearDisplay)

  useEffect(() => {
    setCurrentYear(currentYearDisplay)
  }, [currentYearDisplay])

  const onClickNext = () => {
    setCurrentYear((previousYear) => previousYear + 1)
  }

  const onClickBack = () => {
    setCurrentYear((previousYear) => previousYear - 1)
  }

  const onSelectMonth = (monthValue) => () => {
    const selectedDate = `${currentYear}-${monthValue}`

    const dateValue = dayjs(selectedDate)
    onMonthSelect(dateValue)
  }

  const generateMonth = () => {
    const months = []
    for (let i = 0; i < monthLength; i++) {
      const isSelected = i === Number(date.get('month'))
      months.push(
        <Month
          isSelected={isSelected}
          key={`month-${i}`}
          onClick={onSelectMonth(i + 1)}
          radius={radius}
        >
          {date.month(i).format('MMMM')}
        </Month>
      )
    }

    return months
  }

  return (
    <Wrapper {...props} data-testid='calendar-month' show={show}>
      <Header>
        <NextBackButton
          onClick={onClickBack}
          data-testid='month-next-back-year-wrapper'
        >
          <BackIcon />
          <BackIcon />
        </NextBackButton>
        <CurrentYear data-testid='month-current-year-display' radius={radius}>
          {currentYear}
        </CurrentYear>
        <NextBackButton
          onClick={onClickNext}
          data-testid='month-next-back-year-wrapper'
        >
          <NextIcon />
          <NextIcon />
        </NextBackButton>
      </Header>
      <Divider />
      <MonthList>{generateMonth()}</MonthList>
    </Wrapper>
  )
}

CalendarMonth.propTypes = {
  onMonthSelect: PropTypes.func.isRequired,
  date: dayjsType.isRequired,
  /** Determine whether to show month picker or not */
  show: PropTypes.bool.isRequired,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  radius: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  CalendarMonth.displayName = 'CalendarMonth'
}
