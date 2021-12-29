import React, { useState } from 'react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { render, screen, fireEvent } from '@/test-utils'

import { theme } from '../../theme'
import { DatePicker } from '../index'

dayjs.extend(utc)

const DEFAULT_DATE_FORMAT = 'DD/MM/YYYY'
const ENTER_KEY = '{enter}'

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
    let dateDisplayInput
    beforeEach(() => {
      render(<DatePicker placeholder='Enter your date of birth' />)
      dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)
      userEvent.click(dateDisplayInput)
    })

    it('should render correctly', () => {
      const dateWrapper = screen.getByTestId('date-picker-wrapper')

      const calendar = screen.queryByTestId('calendar')
      expect(calendar).toBeInTheDocument()
      expect(dateDisplayInput).toBeInTheDocument()
      expect(dateWrapper).toBeInTheDocument()
    })

    describe('Choosing date from calendar', () => {
      it('should be able to choose a year', () => {
        const thisYear = dayjs().format('YYYY')
        const nextYear = dayjs().add(1, 'year').format('YYYY')

        const yearDisplay = screen.queryByTestId('current-year-display')
        expect(yearDisplay).toHaveTextContent(thisYear)
        userEvent.click(yearDisplay)

        const calendarYear = screen.queryByTestId('calendar-year')
        expect(calendarYear).toBeInTheDocument()

        const nextYearText = screen.queryByText(nextYear)
        expect(nextYearText).toBeInTheDocument()
        userEvent.click(nextYearText)
        expect(calendarYear).toHaveStyle({
          display: 'none',
        })

        const nextYearDisplay = screen.getByTestId('current-year-display')
        expect(nextYearDisplay).toHaveTextContent(nextYear)
      })

      it('should be able to select prev and next 20 year', () => {
        const currentYear = dayjs().format('YYYY')
        const limitYearShown = 20
        const startYear = currentYear - (currentYear % limitYearShown)
        const endYear = startYear + limitYearShown - 1

        const yearDisplay = screen.queryByTestId('current-year-display')
        userEvent.click(yearDisplay)

        const current20YearText = screen.getByTestId('current-year')
        expect(current20YearText).toHaveTextContent(`${startYear}-${endYear}`)

        const nextBackWrapper = screen.getAllByTestId('year-next-back-wrapper')
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

        const next20YearDisplay = screen.getByTestId('current-year-display')
        expect(next20YearDisplay).toHaveTextContent(`${startYear + 20}`)
      })

      it('should be able to select previous/next month', () => {
        const currentMonth = dayjs().format('MMM')
        const prevMonth = dayjs().subtract(1, 'month').format('MMM')
        const nextMonth = dayjs().add(1, 'month').format('MMM')

        const currentMonthDisplay = screen.getByTestId('current-month-display')
        expect(currentMonthDisplay).toHaveTextContent(currentMonth)

        const nextBackWrapper = screen.getAllByTestId(
          'calendar-next-back-wrapper'
        )
        const [prevMonthButton, nextMonthButton] = nextBackWrapper

        userEvent.click(prevMonthButton.children[0])

        expect(currentMonthDisplay).toHaveTextContent(prevMonth)
        userEvent.click(nextMonthButton.children[0])
        expect(currentMonthDisplay).toHaveTextContent(currentMonth)
        userEvent.click(nextMonthButton.children[0])
        expect(currentMonthDisplay).toHaveTextContent(nextMonth)
      })
    })
  })

  describe('Controlled DatePicker', () => {
    it('should return the same value when passing in utc date', () => {
      const utcDate = dayjs().utc(true)
      render(
        <ControlledDatePicker
          placeholder='Enter your date of birth'
          value={utcDate}
        />
      )

      const expectedValue = screen.getByText(JSON.stringify(utcDate))
      expect(expectedValue).toBeInTheDocument()
    })

    it('should return correct value when key in by input field', () => {
      const date = '19/10/2000'
      const invalidDate = '111/11/200'
      render(<ControlledDatePicker placeholder='Enter your date of birth' />)

      const wrapper = screen.getByTestId('date-picker-wrapper')
      const dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)

      userEvent.click(wrapper)
      let dateInput = screen.getByTestId('calendar-date-input')
      userEvent.clear(dateInput)
      userEvent.type(dateInput, `${date}${ENTER_KEY}`)
      expect(dateDisplayInput).toHaveValue(date)
      let expectedValue = screen.getByText(
        formatDateToValue(dayjs('2000-10-19'))
      )
      expect(expectedValue).toBeInTheDocument()

      // Test when entering invalid date (it should return the previous value)
      userEvent.click(wrapper)
      dateInput = screen.getByTestId('calendar-date-input')
      userEvent.clear(dateInput)
      userEvent.type(dateInput, `${invalidDate}${ENTER_KEY}`)
      expect(dateDisplayInput).toHaveValue(date)
      expectedValue = screen.getByText(formatDateToValue(dayjs('2000-10-19')))
      expect(expectedValue).toBeInTheDocument()
    })

    it("should be able to click on today button and display today's date in the input", () => {
      render(<ControlledDatePicker placeholder='Enter your date of birth' />)

      const wrapper = screen.getByTestId('date-picker-wrapper')
      const dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)

      userEvent.click(wrapper)
      let dateInput = screen.getByTestId('calendar-date-input')
      userEvent.clear(dateInput)
      userEvent.type(dateInput, '10/08/2000{enter}')
      expect(dateDisplayInput).toHaveValue('10/08/2000')

      userEvent.click(wrapper)
      const todayButton = screen.getByRole('button', { name: /today/i })
      userEvent.click(todayButton)
      expect(dateDisplayInput).toHaveValue(dayjs().format(DEFAULT_DATE_FORMAT))
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
      const dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)
      const wrapper = screen.getByTestId('date-picker-wrapper')
      let expectedValue = screen.getByText(JSON.stringify(oneMonthAgo))
      expect(dateDisplayInput).toHaveValue(
        oneMonthAgo.format(DEFAULT_DATE_FORMAT)
      )
      expect(expectedValue).toBeInTheDocument()

      userEvent.click(wrapper)
      const dateInput = screen.getByTestId('calendar-date-input')
      userEvent.clear(dateInput)
      userEvent.type(dateInput, `${oneMonthFromNow}${ENTER_KEY}`)
      expect(dateDisplayInput).toHaveValue(oneMonthFromNow)
    })

    it('should return correct value choosing from calendar', () => {
      render(<ControlledDatePicker placeholder='Enter your date of birth' />)
      const dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)
      userEvent.click(dateDisplayInput)

      const today = dayjs().format(DEFAULT_DATE_FORMAT)
      const todayDate = dayjs().get('date')

      const todayDateTexts = screen.getAllByText(todayDate)
      userEvent.click(todayDateTexts[todayDateTexts.length - 1])

      const calendar = screen.queryByTestId('calendar')
      expect(calendar).not.toBeInTheDocument()

      expect(dateDisplayInput).toHaveValue(today)
      const expectedValue = screen.getByText(formatDateToValue(dayjs()))
      expect(expectedValue).toBeInTheDocument()
    })

    it('should be able to select today and display that in the input', () => {
      render(<ControlledDatePicker placeholder='Enter your date of birth' />)
      const dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)
      const wrapper = screen.getByTestId('date-picker-wrapper')

      const today = dayjs().format(DEFAULT_DATE_FORMAT)
      const todayDate = dayjs().get('date')

      userEvent.click(wrapper)
      const todayDateTexts = screen.getAllByText(todayDate)
      userEvent.click(todayDateTexts[todayDateTexts.length - 1])

      const calendar = screen.queryByTestId('calendar')
      expect(calendar).not.toBeInTheDocument()

      expect(dateDisplayInput).toHaveValue(today)
    })

    it('should be able to select 11 October 2021 and display that in the input', () => {
      render(<ControlledDatePicker placeholder='Enter your date of birth' />)
      const dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)
      const wrapper = screen.getByTestId('date-picker-wrapper')

      const date = dayjs().month(9).year(2021)
      const yearValues = date.format('YYYY')

      userEvent.click(wrapper)
      let yearText = screen.getByTestId('current-year-display')
      userEvent.click(yearText)
      // Need to find year text again and click on it
      yearText = screen.getAllByText(yearValues)[0]
      userEvent.click(yearText)

      const currentMonth = screen.getByTestId('current-month-display')
      userEvent.click(currentMonth)

      const octoberMonthsFormat = screen.getByText(date.format('MMMM'))
      userEvent.click(octoberMonthsFormat)

      const dateTexts = screen.getAllByText('11')
      userEvent.click(dateTexts[0])

      expect(dateDisplayInput).toHaveValue('11/10/2021')
    })

    it('should be able to select 1 year and 2 month on 20th date and display that in the input', () => {
      render(<ControlledDatePicker placeholder='Enter your date of birth' />)
      const dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)
      const wrapper = screen.getByTestId('date-picker-wrapper')
      const oneYearAgo = dayjs().subtract(1, 'year').format('YYYY')
      const prev2Month = dayjs().subtract(2, 'month').format('MMM')

      userEvent.click(wrapper)
      const yearDisplay = screen.queryByTestId('current-year-display')
      userEvent.click(yearDisplay)

      const oneYearAgoText = screen.queryByText(oneYearAgo)
      userEvent.click(oneYearAgoText)

      const nextYearDisplay = screen.getByTestId('current-year-display')
      expect(nextYearDisplay).toHaveTextContent(oneYearAgo)

      const currentMonthDisplay = screen.getByTestId('current-month-display')

      const nextBackWrapper = screen.getAllByTestId(
        'calendar-next-back-wrapper'
      )
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

      expect(dateDisplayInput).toHaveValue(expectedDisplayDate)
    })

    it('should be able to select specific months and next year', () => {
      render(<ControlledDatePicker placeholder='Enter your date of birth' />)
      const dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)
      const wrapper = screen.getByTestId('date-picker-wrapper')
      userEvent.click(wrapper)

      const nextYear = dayjs().add(1, 'year').format('YYYY')

      const currentMonthDisplay = screen.getByTestId('current-month-display')
      userEvent.click(currentMonthDisplay)

      const calendarMonth = screen.getByTestId('calendar-month')
      expect(calendarMonth).toHaveStyle({
        display: 'block',
      })

      // Test for clicking prev and next button to select different years for month
      const nextBackWrapper = screen.getAllByTestId(
        'month-next-back-year-wrapper'
      )
      const monthCurrentYearDisplay = screen.getByTestId(
        'month-current-year-display'
      )
      expect(monthCurrentYearDisplay).toHaveTextContent(dayjs().format('YYYY'))

      const [previousYearButton, nextYearButton] = nextBackWrapper
      userEvent.click(previousYearButton)

      expect(monthCurrentYearDisplay).toHaveTextContent(
        dayjs().subtract(1, 'year').format('YYYY')
      )

      userEvent.click(nextYearButton)
      userEvent.click(nextYearButton)
      expect(monthCurrentYearDisplay).toHaveTextContent(nextYear)

      const julyMonth = screen.getByText(/july/i)
      expect(julyMonth).toBeInTheDocument()

      userEvent.click(julyMonth)

      const date20 = screen.getAllByText('20')[0]
      userEvent.click(date20)

      expect(dateDisplayInput).toHaveValue(`20/07/${nextYear}`)
    })

    it('should not be able to select date which is older than given startDate', () => {
      const startDate = dayjs().subtract(1, 'month').date(15)
      render(
        <ControlledDatePicker
          placeholder='Enter your date of birth'
          startDate={startDate}
        />
      )
      const dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)
      userEvent.click(dateDisplayInput)

      const nextBackWrapper = screen.getAllByTestId(
        'calendar-next-back-wrapper'
      )
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
      expect(dateDisplayInput).toHaveValue('')
    })

    it('should not be able to select date which is newer than given endDate', () => {
      const endDate = dayjs().add(1, 'month').date(15)
      render(
        <ControlledDatePicker
          placeholder='Enter your date of birth'
          endDate={endDate}
        />
      )
      const dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)
      userEvent.click(dateDisplayInput)

      const nextBackWrapper = screen.getAllByTestId(
        'calendar-next-back-wrapper'
      )
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
      expect(dateDisplayInput).toHaveValue('')
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
      const dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)
      userEvent.click(dateDisplayInput)

      let nextBackWrapper = screen.getAllByTestId('calendar-next-back-wrapper')
      const prevMonthButton = nextBackWrapper[0]

      userEvent.click(prevMonthButton.children[0])

      const oneMonthAgoEl = screen.getAllByText(startDate.get('date'))
      const oneMonthAgo = oneMonthAgoEl[oneMonthAgoEl.length - 1]
      expect(oneMonthAgo).toHaveStyle({
        cursor: 'not-allowed',
      })
      userEvent.click(oneMonthAgo)
      expect(dateDisplayInput).toHaveValue('')

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
      expect(dateDisplayInput).toHaveValue(
        startSelectDate.format(DEFAULT_DATE_FORMAT)
      )

      userEvent.click(dateDisplayInput)
      nextBackWrapper = screen.getAllByTestId('calendar-next-back-wrapper')
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
      expect(dateDisplayInput).toHaveValue(endDate.format(DEFAULT_DATE_FORMAT))
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
      const dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)
      const wrapper = screen.getByTestId('date-picker-wrapper')
      userEvent.click(wrapper)

      let dateInput = screen.getByTestId('calendar-date-input')
      userEvent.type(
        dateInput,
        `${startDate.format(DEFAULT_DATE_FORMAT)}${ENTER_KEY}`
      )
      let expectedValue = screen.getByText(formatDateToValue(dayjs()))
      expect(dateDisplayInput).toHaveValue(dayjs().format(DEFAULT_DATE_FORMAT))
      expect(expectedValue).toBeInTheDocument()

      userEvent.click(wrapper)
      dateInput = screen.getByTestId('calendar-date-input')
      userEvent.clear(dateInput)
      userEvent.type(
        dateInput,
        `${afterStartDate.format(DEFAULT_DATE_FORMAT)}${ENTER_KEY}`
      )
      expectedValue = screen.getByText(formatDateToValue(afterStartDate))
      expect(expectedValue).toBeInTheDocument()
      expect(dateDisplayInput).toHaveValue(
        afterStartDate.format(DEFAULT_DATE_FORMAT)
      )
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
      const dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)
      const wrapper = screen.getByTestId('date-picker-wrapper')
      userEvent.click(wrapper)

      let dateInput = screen.getByTestId('calendar-date-input')
      userEvent.clear(dateInput)
      userEvent.type(
        dateInput,
        `${afterEndDate.format(DEFAULT_DATE_FORMAT)}${ENTER_KEY}`
      )

      let expectedValue = screen.getByText(formatDateToValue(dayjs()))
      expect(dateDisplayInput).toHaveValue(dayjs().format(DEFAULT_DATE_FORMAT))
      expect(expectedValue).toBeInTheDocument()
      userEvent.click(wrapper)

      userEvent.clear(dateInput)
      dateInput = screen.getByTestId('calendar-date-input')
      userEvent.type(
        dateInput,
        `${endDate.format(DEFAULT_DATE_FORMAT)}${ENTER_KEY}`
      )
      expectedValue = screen.getByText(formatDateToValue(endDate))
      expect(expectedValue).toBeInTheDocument()
      expect(dateDisplayInput).toHaveValue(endDate.format(DEFAULT_DATE_FORMAT))
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
      const dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)
      const wrapper = screen.getByTestId('date-picker-wrapper')
      userEvent.click(wrapper)
      let dateInput = screen.getByTestId('calendar-date-input')
      fireEvent.change(dateInput, { target: { value: validDate } })
      fireEvent.keyUp(dateInput, { key: 'Enter' })

      const expectedValue = screen.getByText(
        formatDateToValue(dayjs().add(1, 'day'))
      )
      expect(dateDisplayInput).toHaveValue(validDate)
      expect(expectedValue).toBeInTheDocument()

      // If key in disabled date, it will default to previous value
      userEvent.click(wrapper)
      dateInput = screen.getByTestId('calendar-date-input')
      userEvent.clear(dateInput)
      fireEvent.change(dateInput, { target: { value: beforeStartDate } })
      fireEvent.keyUp(dateInput, { key: 'Enter' })
      expect(dateDisplayInput).toHaveValue(validDate)

      userEvent.click(wrapper)
      dateInput = screen.getByTestId('calendar-date-input')
      userEvent.clear(dateInput)
      fireEvent.change(dateInput, { target: { value: afterEndDate } })
      fireEvent.keyUp(dateInput, { key: 'Enter' })
      expect(dateDisplayInput).toHaveValue(validDate)
    })
  })

  describe('Style for DatePicker', () => {
    it('should render with fluid/width and height props', () => {
      const { rerender } = render(
        <DatePicker placeholder='Enter your date of birth' fluid />
      )
      const wrapper = screen.getByTestId('date-picker-wrapper')
      const dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)
      expect(wrapper).toHaveStyle({
        width: '100%',
      })
      expect(dateDisplayInput).toHaveStyle({
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
      expect(dateDisplayInput).toHaveStyle({
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
      expect(dateDisplayInput).toHaveStyle({
        width: '100%',
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
      dateInputProps: {
        borderColor: 'secondary',
        customStyle: {
          padding: '10px 15px',
        },
      },
    }
    render(
      <DatePicker
        placeholder='Enter your date of birth'
        calendarProps={calendarProps}
      />
    )
    const dateDisplayInput = screen.getByPlaceholderText(/date of birth/i)
    userEvent.click(dateDisplayInput)

    const calendar = screen.getByTestId('calendar')
    expect(calendar).toHaveStyle(calendarProps.wrapperProps.customStyle)

    const currentYear = screen.getByTestId('current-year-display')
    userEvent.click(currentYear)
    const calendarYear = screen.getByTestId('calendar-year')
    expect(calendarYear).toHaveStyle(calendarProps.yearProps.customStyle)
    userEvent.click(currentYear)

    const calendarMonth = screen.getByTestId('calendar-month')
    expect(calendarMonth).toHaveStyle(calendarProps.monthProps.customStyle)

    const currentMonthDate = screen.getByText(dayjs().date(20).format('DD'))
    expect(currentMonthDate).toHaveStyle(calendarProps.dayProps.customStyle)

    const dateInput = screen.getByTestId('calendar-date-input')
    expect(dateInput).toHaveStyle({
      'border-color': theme.colors.secondary,
      padding: '10px 15px',
    })
  })
})
