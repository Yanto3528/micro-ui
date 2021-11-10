import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../../../constants'
import { DateAction } from '../utils/constant'
import { dayjsType } from '../utils/types'
import { NextBackButton, NextIcon, BackIcon } from '../views'
import { Wrapper, Header, CurrentMonth } from './views'

export const Month = ({
  date,
  onMonthAction,
  disabledMonth = {},
  ...props
}) => {
  const onIconClick = (action) => () => {
    onMonthAction(action)
  }

  const { disableNextMonth, disablePrevMonth } = disabledMonth
  const currentMonth = date.format('MMMM')

  return (
    <Wrapper {...props}>
      <Header>
        <NextBackButton
          onClick={onIconClick(DateAction.BACK)}
          disabled={disablePrevMonth}
        >
          <BackIcon />
          <BackIcon />
        </NextBackButton>
        <CurrentMonth>{currentMonth}</CurrentMonth>
        <NextBackButton
          onClick={onIconClick(DateAction.NEXT)}
          disabled={disableNextMonth}
        >
          <NextIcon />
          <NextIcon />
        </NextBackButton>
      </Header>
    </Wrapper>
  )
}

Month.propTypes = {
  date: dayjsType.isRequired,
  /** Define the month action, BACK or NEXT */
  onMonthAction: PropTypes.func.isRequired,
  /** Object for disabling prev and/or next month arrow */
  disabledMonth: PropTypes.object,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  Month.displayName = 'Month'
}
