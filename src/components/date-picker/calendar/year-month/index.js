import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'

import { DateAction, DateState } from '../utils/constant'
import { dayjsType } from '../utils/types'
import { NextBackButton, NextIcon, BackIcon } from '../views'
import {
  Wrapper,
  Header,
  CurrentYearMonthDisplay,
  YearMonthWrapper,
} from './views'

export const YearMonth = ({
  date,
  onMonthAction,
  disabledMonth,
  setDateState,
  ...props
}) => {
  const onIconClick = (action) => () => {
    onMonthAction(action)
  }

  const { disableNextMonth, disablePrevMonth } = disabledMonth
  const currentMonth = date.format('MMM')
  const currentYear = date.format('YYYY')

  const onSetDateState = (dateState) => {
    return () => {
      setDateState(dateState)
    }
  }

  return (
    <Wrapper {...props} data-testid='calendar-year-month'>
      <Header>
        <NextBackButton
          onClick={onIconClick(DateAction.BACK)}
          disabled={disablePrevMonth}
          data-testid='calendar-next-back-wrapper'
        >
          <BackIcon />
          <BackIcon />
        </NextBackButton>
        <YearMonthWrapper>
          <CurrentYearMonthDisplay
            data-testid='current-month-display'
            onClick={onSetDateState(DateState.MONTH)}
          >
            {currentMonth}
          </CurrentYearMonthDisplay>
          <CurrentYearMonthDisplay
            data-testid='current-year-display'
            onClick={onSetDateState(DateState.YEAR)}
          >
            {currentYear}
          </CurrentYearMonthDisplay>
        </YearMonthWrapper>
        <NextBackButton
          onClick={onIconClick(DateAction.NEXT)}
          disabled={disableNextMonth}
          data-testid='calendar-next-back-wrapper'
        >
          <NextIcon />
          <NextIcon />
        </NextBackButton>
      </Header>
    </Wrapper>
  )
}

YearMonth.propTypes = {
  date: dayjsType.isRequired,
  /** Define the month action, BACK or NEXT */
  onMonthAction: PropTypes.func.isRequired,
  /** Object for disabling prev and/or next month arrow */
  disabledMonth: PropTypes.object.isRequired,
  setDateState: PropTypes.func.isRequired,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  YearMonth.displayName = 'YearMonth'
}
