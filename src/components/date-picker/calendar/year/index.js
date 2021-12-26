import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { Divider } from '@/components/divider'

import { dayjsType } from '../utils/types'
import { NextBackButton, NextIcon, BackIcon } from '../views'
import { Wrapper, Header, CurrentYear, YearList, Year } from './views'

const limitYearShown = 20

export const CalendarYear = ({
  date,
  onToggleOpen,
  onYearSelect,
  radius,
  show,
  ...props
}) => {
  const currentYear = Number(date.format('YYYY'))
  const startYear = currentYear - (currentYear % limitYearShown)
  const endYear = startYear + limitYearShown - 1

  const [fromYear, setFromYear] = useState(startYear)
  const [toYear, setToYear] = useState(endYear)

  useEffect(() => {
    setFromYear(startYear)
    setToYear(endYear)
  }, [startYear, endYear])

  const onClickNext = () => {
    const startDecade = toYear + 1
    const endDecade = startDecade + limitYearShown - 1

    setFromYear(startDecade)
    setToYear(endDecade)
  }

  const onClickBack = () => {
    const startDecade = fromYear - limitYearShown
    const endDecade = startDecade + limitYearShown - 1

    setFromYear(startDecade)
    setToYear(endDecade)
  }

  const onSelectYear = (yearValue) => (event) => {
    onYearSelect(yearValue)
    onToggleOpen(event)
  }

  const generateYear = () => {
    const years = []

    for (let i = 0; i < limitYearShown; i++) {
      const nextYear = fromYear + i
      const isSelected = nextYear === Number(date.format('YYYY'))

      years.push(
        <Year
          isSelected={isSelected}
          key={`year-${i}`}
          onClick={onSelectYear(nextYear)}
          radius={radius}
        >
          {nextYear}
        </Year>
      )
    }

    return years
  }

  return (
    <Wrapper {...props} data-testid='calendar-year' show={show}>
      <Header>
        <NextBackButton
          onClick={onClickBack}
          data-testid='year-next-back-wrapper'
        >
          <BackIcon />
          <BackIcon />
        </NextBackButton>
        <CurrentYear
          onClick={onToggleOpen}
          data-testid='current-year'
          radius={radius}
        >
          {`${fromYear}-${toYear}`}
        </CurrentYear>
        <NextBackButton
          onClick={onClickNext}
          data-testid='year-next-back-wrapper'
        >
          <NextIcon />
          <NextIcon />
        </NextBackButton>
      </Header>
      <Divider />
      <YearList>{generateYear()}</YearList>
    </Wrapper>
  )
}

CalendarYear.propTypes = {
  onToggleOpen: PropTypes.func.isRequired,
  onYearSelect: PropTypes.func.isRequired,
  date: dayjsType.isRequired,
  /** Determine whether to show the year picker or not */
  show: PropTypes.bool.isRequired,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  radius: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  CalendarYear.displayName = 'CalendarYear'
}
