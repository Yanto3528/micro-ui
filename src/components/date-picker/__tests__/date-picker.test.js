import React, { useState } from 'react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { render, screen } from '@/test-utils'

import { DatePicker } from '../index'

dayjs.extend(utc)

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

let dateInput
describe('components > DatePicker', () => {
  describe('Uncontrolled DatePicker', () => {
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
        const today = dayjs().format('DD/MM/YYYY')
        const todayDate = dayjs().get('date')

        const todayDateText = screen.getByText(todayDate)
        userEvent.click(todayDateText)

        const calendar = screen.queryByTestId('calendar')
        expect(calendar).not.toBeInTheDocument()

        expect(dateInput).toHaveValue(today)
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
          .format('DD/MM/YYYY')
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
        const currentDateValue = dayjs().format('DD/MM/YYYY')

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
        JSON.stringify(dayjs('2000-10-19').utc(true).toDate())
      )
      expect(expectedValue).toBeInTheDocument()
    })

    it('should return correct value choosing from calendar', () => {
      render(<ControlledDatePicker placeholder='Enter your date of birth' />)
      const dateInput = screen.getByPlaceholderText(/date of birth/i)
      userEvent.click(dateInput)

      const today = dayjs().format('DD/MM/YYYY')
      const todayDate = dayjs().get('date')

      const todayDateText = screen.getByText(todayDate)
      userEvent.click(todayDateText)

      const calendar = screen.queryByTestId('calendar')
      expect(calendar).not.toBeInTheDocument()

      expect(dateInput).toHaveValue(today)
      const expectedValue = screen.getByText(
        JSON.stringify(dayjs().startOf('day').utc(true).toDate())
      )
      expect(expectedValue).toBeInTheDocument()
    })

    it('should not be able to select date which is older than given startDate', () => {
      const startDate = dayjs().subtract(1, 'month')
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

      const oneMonthAgo = screen.getByText(startDate.get('date'))
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
      const endDate = dayjs().add(1, 'month')
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
      const oneMonthInFuture = screen.getByText(
        endDate.add(1, 'day').get('date')
      )
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
      const startDate = dayjs().subtract(1, 'month')
      const endDate = dayjs().add(1, 'month')
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

      const oneMonthAgo = screen.getByText(startDate.get('date'))
      expect(oneMonthAgo).toHaveStyle({
        cursor: 'not-allowed',
      })
      userEvent.click(oneMonthAgo)
      expect(dateInput).toHaveValue('')

      const startSelectDate = startDate.add(1, 'day')
      const startSelectText = screen.getByText(startSelectDate.get('date'))
      expect(startSelectText).toHaveStyle({
        cursor: 'pointer',
      })
      userEvent.click(startSelectText)
      const expectedValue = screen.getByText(
        JSON.stringify(startSelectDate.utc(true).startOf('day').toDate())
      )
      expect(expectedValue).toBeInTheDocument()
      expect(dateInput).toHaveValue(startSelectDate.format('DD/MM/YYYY'))

      userEvent.click(dateInput)
      nextBackWrapper = screen.getAllByTestId('next-back-wrapper')
      const nextMonthButton = nextBackWrapper[1]
      userEvent.click(nextMonthButton.children[0])
      userEvent.click(nextMonthButton.children[0])

      // Need to add 1 day from endDate to get the disabled date
      const oneMonthInFuture = screen.getByText(
        endDate.add(1, 'day').get('date')
      )
      expect(oneMonthInFuture).toBeInTheDocument()
      expect(oneMonthInFuture).toHaveStyle({
        cursor: 'not-allowed',
      })

      const endChooseableDate = screen.getByText(endDate.get('date'))
      userEvent.click(endChooseableDate)
      expect(dateInput).toHaveValue(endDate.format('DD/MM/YYYY'))
    })
  })
})
