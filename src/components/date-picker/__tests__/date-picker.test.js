import React, { useState } from 'react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { render, screen } from '@/test-utils'

import { DatePicker } from '../index'

dayjs.extend(utc)

const DEFAULT_DATE_FORMAT = 'DD/MM/YYYY'

const formatDateToValue = (date) => {
  return JSON.stringify(date.utc(true).startOf('day').toDate())
}

/* eslint-disable */
const ControlledDatePicker = ({ value: propsValue, ...props }) => {
  const [value, setValue] = useState(propsValue)

  return (
    <>
      <p>{JSON.stringify(value)}</p>
      <DatePicker {...props} value={value} onChange={setValue} />
    </>
  )
}
/* eslint-enable */

describe('components > DatePicker', () => {
  describe('Uncontrolled DatePicker', () => {
    let dateInput
    beforeEach(() => {
      render(<DatePicker placeholder='Enter your date of birth' />)
      dateInput = screen.getByPlaceholderText(/date of birth/i)
      userEvent.click(dateInput)
    })

    it('should render correctly', () => {
      const dateWrapper = screen.getByTestId('date-picker-wrapper')

      const calendar = screen.queryByTestId('calendar')
      expect(calendar).toBeInTheDocument()
      expect(dateInput).toBeInTheDocument()
      expect(dateWrapper).toBeInTheDocument()
    })

    describe('Choosing date from calendar', () => {
      it('should be able to choose a year', () => {
        const thisYear = dayjs().format('YYYY')
        const nextYear = dayjs().add(1, 'year').format('YYYY')

        const yearDisplay = screen.queryByTestId('year-display')
        expect(yearDisplay).toHaveTextContent(thisYear)
        userEvent.click(yearDisplay)

        const calendarYear = screen.queryByTestId('calendar-year')
        expect(calendarYear).toBeInTheDocument()

        const nextYearText = screen.queryByText(nextYear)
        expect(nextYearText).toBeInTheDocument()
        userEvent.click(nextYearText)
        expect(calendarYear).not.toBeInTheDocument()

        const nextYearDisplay = screen.getByTestId('year-display')
        expect(nextYearDisplay).toHaveTextContent(nextYear)
      })

      it('should be able to select prev and next 20 year', () => {
        const currentYear = dayjs().format('YYYY')
        const limitYearShown = 20
        const startYear = currentYear - (currentYear % limitYearShown)
        const endYear = startYear + limitYearShown - 1

        const yearDisplay = screen.queryByTestId('year-display')
        userEvent.click(yearDisplay)

        const current20YearText = screen.getByTestId('current-year')
        expect(current20YearText).toHaveTextContent(`${startYear}-${endYear}`)

        const nextBackWrapper = screen.getAllByTestId('next-back-wrapper')
        const [prev20YearButton, next20YearButton] = nextBackWrapper

        userEvent.click(prev20YearButton.children[0])
        expect(current20YearText).toHaveTextContent(
          `${startYear - 20}-${endYear - 20}`
        )

        userEvent.click(next20YearButton.children[0])
        userEvent.click(next20YearButton.children[0])
        expect(current20YearText).toHaveTextContent(
          `${startYear + 20}-${endYear + 20}`
        )

        const next20YearText = screen.getByText(`${startYear + 20}`)
        userEvent.click(next20YearText)

        const next20YearDisplay = screen.getByTestId('year-display')
        expect(next20YearDisplay).toHaveTextContent(`${startYear + 20}`)
      })

      it('should be able to select previous/next month', () => {
        const currentMonth = dayjs().format('MMMM')
        const prevMonth = dayjs().subtract(1, 'month').format('MMMM')
        const nextMonth = dayjs().add(1, 'month').format('MMMM')

        const currentMonthDisplay = screen.getByTestId('current-month')
        expect(currentMonthDisplay).toHaveTextContent(currentMonth)

        const nextBackWrapper = screen.getAllByTestId('next-back-wrapper')
        const [prevMonthButton, nextMonthButton] = nextBackWrapper

        userEvent.click(prevMonthButton.children[0])

        expect(currentMonthDisplay).toHaveTextContent(prevMonth)
        userEvent.click(nextMonthButton.children[0])
        expect(currentMonthDisplay).toHaveTextContent(currentMonth)
        userEvent.click(nextMonthButton.children[0])
        expect(currentMonthDisplay).toHaveTextContent(nextMonth)
      })

      it('should be able to select today and display that in the input', () => {
        const today = dayjs().format(DEFAULT_DATE_FORMAT)
        const todayDate = dayjs().get('date')

        const todayDateTexts = screen.getAllByText(todayDate)
        userEvent.click(todayDateTexts[0])

        const calendar = screen.queryByTestId('calendar')
        expect(calendar).not.toBeInTheDocument()

        expect(dateInput).toHaveValue(today)
      })

      it('should be able to select 11 October 2021 and display that in the input', () => {
        const date = dayjs().month(9).year(2021)
        const yearValue = date.format('YYYY')

        let yearText = screen.getByText(yearValue)
        userEvent.click(yearText)
        // Need to find year text again and click on it
        yearText = screen.getByText(yearValue)
        userEvent.click(yearText)

        const monthToClick = dayjs().diff(date, 'month')
        const nextBackWrapper = screen.getAllByTestId('next-back-wrapper')
        const [prevMonthButton] = nextBackWrapper

        for (let i = 0; i < monthToClick; i++) {
          userEvent.click(prevMonthButton.children[0])
        }

        const dateTexts = screen.getAllByText('11')
        userEvent.click(dateTexts[0])

        expect(dateInput).toHaveValue('11/10/2021')
      })

      it('should be able to select 1 year and 2 month on 20th date and display that in the input', () => {
        const oneYearAgo = dayjs().subtract(1, 'year').format('YYYY')
        const prev2Month = dayjs().subtract(2, 'month').format('MMMM')

        const yearDisplay = screen.queryByTestId('year-display')
        userEvent.click(yearDisplay)

        const oneYearAgoText = screen.queryByText(oneYearAgo)
        userEvent.click(oneYearAgoText)

        const nextYearDisplay = screen.getByTestId('year-display')
        expect(nextYearDisplay).toHaveTextContent(oneYearAgo)

        const currentMonthDisplay = screen.getByTestId('current-month')

        const nextBackWrapper = screen.getAllByTestId('next-back-wrapper')
        const [prevMonthButton] = nextBackWrapper

        userEvent.click(prevMonthButton.children[0])
        userEvent.click(prevMonthButton.children[0])

        expect(currentMonthDisplay).toHaveTextContent(prev2Month)

        const date20 = screen.getByText('20')
        expect(date20).toBeInTheDocument()
        userEvent.click(date20)

        const calendar = screen.queryByTestId('calendar')
        expect(calendar).not.toBeInTheDocument()

        const expectedDisplayDate = dayjs()
          .subtract(1, 'year')
          .subtract(2, 'month')
          .date(20)
          .format(DEFAULT_DATE_FORMAT)
        expect(dateInput).toHaveValue(expectedDisplayDate)
      })
    })

    describe('Key in date from input field', () => {
      it('should be able to key in valid date for input', () => {
        const validDate = '20/10/2000'
        userEvent.type(dateInput, validDate)
        userEvent.type(dateInput, '{enter}')

        expect(dateInput).toHaveValue(validDate)
      })

      it('should display default/previous date value when key in invalid date format', () => {
        const invalidDate = '211/10/2000'
        const invalidDate2 = 'invalid-date-format'
        const validDate = '29/09/1999'
        const currentDateValue = dayjs().format(DEFAULT_DATE_FORMAT)

        // Type invalid date without any value, input will show today instead
        userEvent.type(dateInput, `${invalidDate}{Enter}`)
        expect(dateInput).toHaveValue(currentDateValue)

        // Enter valid date and correctly display the date
        userEvent.clear(dateInput)
        userEvent.type(dateInput, `${validDate}{Enter}`)
        expect(dateInput).toHaveValue(validDate)

        // Enter invalid date again, this time it will default to previous date value
        userEvent.clear(dateInput)
        userEvent.type(dateInput, `${invalidDate2}{Enter}`)
        expect(dateInput).toHaveValue(validDate)
      })
    })
  })

  describe('Controlled DatePicker', () => {
    it('should return correct value when key in by input field', () => {
      render(<ControlledDatePicker placeholder='Enter your date of birth' />)
      const dateInput = screen.getByPlaceholderText(/date of birth/i)
      const date = '19/10/2000'
      userEvent.type(dateInput, `${date}{Enter}`)
      expect(dateInput).toHaveValue(date)
      const expectedValue = screen.getByText(
        formatDateToValue(dayjs('2000-10-19'))
      )
      expect(expectedValue).toBeInTheDocument()
    })

    it('should return correct value when passed value props', () => {
      const oneMonthAgo = dayjs().subtract(1, 'month')
      const oneMonthFromNow = dayjs()
        .add(1, 'month')
        .format(DEFAULT_DATE_FORMAT)

      render(
        <ControlledDatePicker
          placeholder='Enter your date of birth'
          value={oneMonthAgo}
        />
      )
      const dateInput = screen.getByPlaceholderText(/date of birth/i)
      let expectedValue = screen.getByText(JSON.stringify(oneMonthAgo))
      expect(dateInput).toHaveValue(oneMonthAgo.format(DEFAULT_DATE_FORMAT))
      expect(expectedValue).toBeInTheDocument()

      userEvent.clear(dateInput)
      userEvent.type(dateInput, `${oneMonthFromNow}{Enter}`)
      expect(dateInput).toHaveValue(oneMonthFromNow)
    })

    it('should return correct value choosing from calendar', () => {
      render(<ControlledDatePicker placeholder='Enter your date of birth' />)
      const dateInput = screen.getByPlaceholderText(/date of birth/i)
      userEvent.click(dateInput)

      const today = dayjs().format(DEFAULT_DATE_FORMAT)
      const todayDate = dayjs().get('date')

      const todayDateTexts = screen.getAllByText(todayDate)
      userEvent.click(todayDateTexts[0])

      const calendar = screen.queryByTestId('calendar')
      expect(calendar).not.toBeInTheDocument()

      expect(dateInput).toHaveValue(today)
      const expectedValue = screen.getByText(formatDateToValue(dayjs()))
      expect(expectedValue).toBeInTheDocument()
    })

    it('should not be able to select date which is older than given startDate', () => {
      const startDate = dayjs().subtract(1, 'month').date(15)
      render(
        <ControlledDatePicker
          placeholder='Enter your date of birth'
          startDate={startDate}
        />
      )
      const dateInput = screen.getByPlaceholderText(/date of birth/i)
      userEvent.click(dateInput)

      const nextBackWrapper = screen.getAllByTestId('next-back-wrapper')
      const [prevMonthButton] = nextBackWrapper
      userEvent.click(prevMonthButton.children[0])

      const oneMonthAgoEl = screen.getAllByText(startDate.get('date'))
      const oneMonthAgo = oneMonthAgoEl[oneMonthAgoEl.length - 1]
      expect(oneMonthAgo).toBeInTheDocument()
      expect(oneMonthAgo).toHaveStyle({
        cursor: 'not-allowed',
      })

      userEvent.click(oneMonthAgo)
      const calendar = screen.queryByTestId('calendar')
      expect(calendar).toBeInTheDocument()
      expect(dateInput).toHaveValue('')
    })

    it('should not be able to select date which is newer than given endDate', () => {
      const endDate = dayjs().add(1, 'month').date(15)
      render(
        <ControlledDatePicker
          placeholder='Enter your date of birth'
          endDate={endDate}
        />
      )
      const dateInput = screen.getByPlaceholderText(/date of birth/i)
      userEvent.click(dateInput)

      const nextBackWrapper = screen.getAllByTestId('next-back-wrapper')
      const nextMonthButton = nextBackWrapper[1]

      userEvent.click(nextMonthButton.children[0])

      // Need to add 1 day from endDate to get the disabled date
      const oneMonthInFutureEl = screen.getAllByText(
        endDate.add(1, 'day').get('date')
      )
      const oneMonthInFuture = oneMonthInFutureEl[oneMonthInFutureEl.length - 1]
      expect(oneMonthInFuture).toBeInTheDocument()
      expect(oneMonthInFuture).toHaveStyle({
        cursor: 'not-allowed',
      })

      userEvent.click(oneMonthInFuture)
      const calendar = screen.queryByTestId('calendar')
      expect(calendar).toBeInTheDocument()
      expect(dateInput).toHaveValue('')
    })

    it('should only be able to select date between startDate and endDate', () => {
      const startDate = dayjs().subtract(1, 'month').date(15)
      const endDate = dayjs().add(1, 'month').date(15)
      render(
        <ControlledDatePicker
          placeholder='Enter your date of birth'
          startDate={startDate}
          endDate={endDate}
        />
      )
      const dateInput = screen.getByPlaceholderText(/date of birth/i)
      userEvent.click(dateInput)

      let nextBackWrapper = screen.getAllByTestId('next-back-wrapper')
      const prevMonthButton = nextBackWrapper[0]

      userEvent.click(prevMonthButton.children[0])

      const oneMonthAgoEl = screen.getAllByText(startDate.get('date'))
      const oneMonthAgo = oneMonthAgoEl[oneMonthAgoEl.length - 1]
      expect(oneMonthAgo).toHaveStyle({
        cursor: 'not-allowed',
      })
      userEvent.click(oneMonthAgo)
      expect(dateInput).toHaveValue('')

      const startSelectDate = startDate.add(1, 'day')
      const startSelectElements = screen.getAllByText(
        startSelectDate.get('date')
      )
      const startSelectText =
        startSelectElements[startSelectElements.length - 1]
      expect(startSelectText).toHaveStyle({
        cursor: 'pointer',
      })
      userEvent.click(startSelectText)
      const expectedValue = screen.getByText(formatDateToValue(startSelectDate))
      expect(expectedValue).toBeInTheDocument()
      expect(dateInput).toHaveValue(startSelectDate.format(DEFAULT_DATE_FORMAT))

      userEvent.click(dateInput)
      nextBackWrapper = screen.getAllByTestId('next-back-wrapper')
      const nextMonthButton = nextBackWrapper[1]
      userEvent.click(nextMonthButton.children[0])
      userEvent.click(nextMonthButton.children[0])

      // Need to add 1 day from endDate to get the disabled date
      const oneMonthInFutureEl = screen.getAllByText(
        endDate.add(1, 'day').get('date')
      )
      const oneMonthInFuture = oneMonthInFutureEl[oneMonthInFutureEl.length - 1]
      expect(oneMonthInFuture).toBeInTheDocument()
      expect(oneMonthInFuture).toHaveStyle({
        cursor: 'not-allowed',
      })

      const endSelectableDateEl = screen.getAllByText(endDate.get('date'))
      const endSelectableDate =
        endSelectableDateEl[endSelectableDateEl.length - 1]
      userEvent.click(endSelectableDate)
      expect(dateInput).toHaveValue(endDate.format(DEFAULT_DATE_FORMAT))
    })

    it('should only be able to key in date newer than startDate in input field', () => {
      const startDate = dayjs().subtract(1, 'month')
      const afterStartDate = startDate.add(1, 'day')

      render(
        <ControlledDatePicker
          placeholder='Enter your date of birth'
          startDate={startDate}
        />
      )
      // If key in disabled date, it will default to today, else will default to previous value
      const dateInput = screen.getByPlaceholderText(/date of birth/i)
      userEvent.type(
        dateInput,
        `${startDate.format(DEFAULT_DATE_FORMAT)}{Enter}`
      )
      let expectedValue = screen.getByText(formatDateToValue(dayjs()))
      expect(dateInput).toHaveValue(dayjs().format(DEFAULT_DATE_FORMAT))
      expect(expectedValue).toBeInTheDocument()

      userEvent.clear(dateInput)
      userEvent.type(
        dateInput,
        `${afterStartDate.format(DEFAULT_DATE_FORMAT)}{Enter}`
      )
      expectedValue = screen.getByText(formatDateToValue(afterStartDate))
      expect(expectedValue).toBeInTheDocument()
      expect(dateInput).toHaveValue(afterStartDate.format(DEFAULT_DATE_FORMAT))
    })

    it('should only be able to key in date older than endDate in input field', () => {
      const endDate = dayjs().add(1, 'month')
      const afterEndDate = endDate.add(1, 'day')

      render(
        <ControlledDatePicker
          placeholder='Enter your date of birth'
          endDate={endDate}
        />
      )
      // If key in disabled date, it will default to today, else will default to previous value
      const dateInput = screen.getByPlaceholderText(/date of birth/i)
      userEvent.type(
        dateInput,
        `${afterEndDate.format(DEFAULT_DATE_FORMAT)}{Enter}`
      )
      let expectedValue = screen.getByText(formatDateToValue(dayjs()))
      expect(dateInput).toHaveValue(dayjs().format(DEFAULT_DATE_FORMAT))
      expect(expectedValue).toBeInTheDocument()

      userEvent.clear(dateInput)
      userEvent.type(dateInput, `${endDate.format(DEFAULT_DATE_FORMAT)}{Enter}`)
      expectedValue = screen.getByText(formatDateToValue(endDate))
      expect(expectedValue).toBeInTheDocument()
      expect(dateInput).toHaveValue(endDate.format(DEFAULT_DATE_FORMAT))
    })

    it('should only be able to key in date between startDate and endDate in input field', () => {
      const startDate = dayjs().subtract(1, 'month')
      const endDate = dayjs().add(1, 'month')
      const validDate = dayjs().add(1, 'day').format(DEFAULT_DATE_FORMAT)
      const beforeStartDate = startDate
        .subtract(1, 'day')
        .format(DEFAULT_DATE_FORMAT)
      const afterEndDate = endDate.add(1, 'day').format(DEFAULT_DATE_FORMAT)

      render(
        <ControlledDatePicker
          placeholder='Enter your date of birth'
          startDate={startDate}
          endDate={endDate}
        />
      )
      const dateInput = screen.getByPlaceholderText(/date of birth/i)
      userEvent.type(dateInput, `${validDate}{Enter}`)
      const expectedValue = screen.getByText(
        formatDateToValue(dayjs().add(1, 'day'))
      )
      expect(dateInput).toHaveValue(validDate)
      expect(expectedValue).toBeInTheDocument()

      // If key in disabled date, it will default to previous value
      userEvent.clear(dateInput)
      userEvent.type(dateInput, `${beforeStartDate}{Enter}`)
      expect(dateInput).toHaveValue(validDate)

      userEvent.clear(dateInput)
      userEvent.type(dateInput, `${afterEndDate}{Enter}`)
      expect(dateInput).toHaveValue(validDate)
    })
  })

  describe('Style for DatePicker', () => {
    it('should render with fluid/width and height props', () => {
      const { rerender } = render(
        <DatePicker placeholder='Enter your date of birth' fluid />
      )
      const wrapper = screen.getByTestId('date-picker-wrapper')
      const dateInput = screen.getByPlaceholderText(/date of birth/i)
      expect(wrapper).toHaveStyle({
        width: '100%',
      })
      expect(dateInput).toHaveStyle({
        width: '100%',
      })

      // Fluid is higher priority than width so width will not have any effect
      rerender(
        <DatePicker
          placeholder='Enter your date of birth'
          fluid
          width='400px'
        />
      )
      expect(wrapper).toHaveStyle({
        width: '100%',
      })
      expect(dateInput).toHaveStyle({
        width: '100%',
      })

      rerender(
        <DatePicker
          placeholder='Enter your date of birth'
          width='400px'
          height='50px'
        />
      )
      expect(wrapper).toHaveStyle({
        width: '400px',
      })
      expect(dateInput).toHaveStyle({
        width: '400px',
        height: '50px',
      })
    })
  })

  it('should render with custom calendar style', () => {
    const calendarProps = {
      wrapperProps: {
        customStyle: {
          padding: '20px',
          'border-radius': '8px',
        },
      },
      yearProps: {
        customStyle: {
          padding: '4px',
          'text-transform': 'uppercase',
        },
      },
      monthProps: {
        customStyle: {
          padding: '8px',
          'text-align': 'left',
        },
      },
      dayProps: {
        customStyle: {
          'border-radius': '20px',
        },
      },
    }
    render(
      <DatePicker
        placeholder='Enter your date of birth'
        calendarProps={calendarProps}
      />
    )
    const dateInput = screen.getByPlaceholderText(/date of birth/i)
    userEvent.click(dateInput)

    const calendar = screen.getByTestId('calendar')
    expect(calendar).toHaveStyle(calendarProps.wrapperProps.customStyle)

    const currentYear = dayjs().format('YYYY')
    userEvent.click(screen.getByText(currentYear))
    const calendarYear = screen.getByTestId('calendar-year')
    expect(calendarYear).toHaveStyle(calendarProps.yearProps.customStyle)
    userEvent.click(screen.getByText(currentYear))

    const calendarMonth = screen.getByTestId('calendar-month')
    expect(calendarMonth).toHaveStyle(calendarProps.monthProps.customStyle)

    const currentMonthDate = screen.getByText(dayjs().date(20).format('DD'))
    expect(currentMonthDate).toHaveStyle(calendarProps.dayProps.customStyle)
  })
})
