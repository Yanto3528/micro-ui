import React, { useState } from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen, fireEvent } from '@/test-utils'

import { theme } from '../../theme'
import { Select } from '../index'

const options = [
  { value: 'M', name: 'Male' },
  { value: 'F', name: 'Female' },
  { value: 'U', name: 'Unknown' },
]

const numOptions = {
  start: 1,
  end: 40,
}

const sumOptions = {
  start: 5000,
  end: 30000,
  step: 5000,
}

const invalidOptions = {
  invalidKey: '',
  otherProps: '',
}

/* eslint-disable */
const ControlledSelect = ({ value: valueProps, ...props }) => {
  const [value, setValue] = useState(valueProps || '')

  return <Select value={value} onChange={setValue} {...props} />
}
/* eslint-enable */

describe('components > Select', () => {
  it('should render correctly', () => {
    render(<ControlledSelect options={options} />)
    const select = screen.getByTestId('select-wrapper')
    expect(select).toBeInTheDocument()
    userEvent.click(select)

    const maleOption = screen.getByText(/^male/i)
    const femaleOption = screen.getByText(/^female/i)
    const unknownOption = screen.getByText(/^unknown/i)
    expect(maleOption).toBeInTheDocument()
    expect(femaleOption).toBeInTheDocument()
    expect(unknownOption).toBeInTheDocument()
  })

  it('should close dropdown menu when clicking outside of select component', () => {
    render(
      <>
        <p>Outside of select</p>
        <ControlledSelect options={options} />
      </>
    )
    let optionWrapper = screen.queryByTestId('option-wrapper')
    expect(optionWrapper).not.toBeInTheDocument()
    const selectWrapper = screen.getByTestId('select-wrapper')
    userEvent.click(selectWrapper)
    optionWrapper = screen.getByTestId('option-wrapper')
    expect(optionWrapper).toBeInTheDocument()

    const selectOutside = screen.getByText(/outside of select/i)
    userEvent.click(selectOutside)
    optionWrapper = screen.queryByTestId('option-wrapper')
    expect(optionWrapper).not.toBeInTheDocument()
  })

  it('should render with number option from start to end property', () => {
    render(<ControlledSelect options={numOptions} />)
    const selectWrapper = screen.getByTestId('select-wrapper')
    userEvent.click(selectWrapper)
    for (let i = numOptions.start; i <= numOptions.end; i++) {
      const numberOption = screen.getByText(i)
      expect(numberOption).toBeInTheDocument()
    }
  })

  it('should render with number option from start to end and step property', () => {
    render(<ControlledSelect options={sumOptions} />)
    const selectWrapper = screen.getByTestId('select-wrapper')
    userEvent.click(selectWrapper)
    for (let i = sumOptions.start; i <= sumOptions.end; i += sumOptions.step) {
      const numberOption = screen.getByText(i)
      expect(numberOption).toBeInTheDocument()
    }
  })

  it('should render with filtered options', () => {
    render(<ControlledSelect options={options} filter={['U']} />)
    const selectWrapper = screen.getByTestId('select-wrapper')
    userEvent.click(selectWrapper)

    const maleOption = screen.getByText(/^male/i)
    const femaleOption = screen.getByText(/^female/i)
    const unknownOption = screen.queryByText(/^unknown/i)
    expect(maleOption).toBeInTheDocument()
    expect(femaleOption).toBeInTheDocument()
    expect(unknownOption).not.toBeInTheDocument()
  })

  it('should not filter options if passed in invalid filter value', () => {
    render(
      <ControlledSelect options={options} filter={['non-existent-option']} />
    )
    const selectWrapper = screen.getByTestId('select-wrapper')
    userEvent.click(selectWrapper)

    const maleOption = screen.getByText(/^male/i)
    const femaleOption = screen.getByText(/^female/i)
    const unknownOption = screen.getByText(/^unknown/i)
    expect(maleOption).toBeInTheDocument()
    expect(femaleOption).toBeInTheDocument()
    expect(unknownOption).toBeInTheDocument()
  })

  it('should not show any options when passed in invalid options props', () => {
    render(<ControlledSelect options={invalidOptions} />)
    const selectWrapper = screen.getByTestId('select-wrapper')
    userEvent.click(selectWrapper)

    const optionWrapper = screen.queryByTestId('option-wrapper')
    expect(optionWrapper).toBeInTheDocument()
    let noOptionFoundText = screen.getByText(/no options found/i)
    expect(noOptionFoundText).toBeInTheDocument()
    userEvent.click(noOptionFoundText)
    noOptionFoundText = screen.queryByText(/no options found/i)
    expect(noOptionFoundText).not.toBeInTheDocument()
  })

  it('should be able to select one of the option', () => {
    render(<ControlledSelect options={options} />)
    const select = screen.getByTestId('select-wrapper')
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('')
    userEvent.click(select)

    const optionWrapper = screen.queryByTestId('option-wrapper')
    expect(optionWrapper).toBeInTheDocument()
    const maleOption = screen.getByText(/^male/i)
    userEvent.click(maleOption)
    expect(optionWrapper).not.toBeInTheDocument()
    expect(input).toHaveValue('Male')
  })

  it('should be able display correct option when passed in value props', () => {
    render(<ControlledSelect options={options} value='F' />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('Female')
  })

  it('should not display option value when passed in value props is not valid', () => {
    render(<ControlledSelect options={options} value='not-valid-value' />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('')
  })

  it('should be able to search options by typing in the input field', () => {
    render(<ControlledSelect options={options} searchable />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, 'Male')
    fireEvent.blur(input)
    expect(input).toHaveValue('Male')
  })

  it('should not display value if searched value is not a valid option', () => {
    render(<ControlledSelect options={options} searchable />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, 'm')
    userEvent.clear(input)
    userEvent.type(input, 'male')
    fireEvent.blur(input)
    expect(input).toHaveValue('')
  })

  it('should render search value based on sumOptions', () => {
    render(<ControlledSelect options={sumOptions} searchable />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, '10000')
    fireEvent.blur(input)
    expect(input).toHaveValue('10000')
  })

  it('should not show dropdown menu when it is disabled/readOnly', () => {
    const { rerender } = render(
      <ControlledSelect options={sumOptions} disabled />
    )
    const selectWrapper = screen.getByTestId('select-wrapper')
    const optionWrapper = screen.queryByTestId('option-wrapper')
    userEvent.click(selectWrapper)
    expect(optionWrapper).not.toBeInTheDocument()

    rerender(<ControlledSelect options={sumOptions} readOnly />)
    userEvent.click(selectWrapper)
    expect(optionWrapper).not.toBeInTheDocument()
  })

  it('should render with style props', () => {
    const { rerender } = render(
      <ControlledSelect options={options} fluid rounded />
    )
    const selectWrapper = screen.getByTestId('select-wrapper')
    expect(selectWrapper).toHaveStyle({
      width: '100%',
      'border-radius': '50px',
    })

    // Fluid is higher priority than width, so width will not have effect here
    rerender(
      <ControlledSelect
        options={options}
        fluid
        width='400px'
        rounded
        radius='4px'
      />
    )
    expect(selectWrapper).toHaveStyle({
      width: '100%',
      'border-radius': '50px',
    })

    rerender(
      <ControlledSelect
        options={options}
        width='400px'
        height='50px'
        radius='4px'
        hasError
        customStyle={{
          'margin-bottom': '20px',
        }}
      />
    )
    expect(selectWrapper).toHaveStyle({
      width: '400px',
      height: '50px',
      'border-color': theme.colors.danger,
      'border-radius': '4px',
      'margin-bottom': '20px',
    })
  })

  it('should render with outline variant props', () => {
    render(<ControlledSelect options={options} variant='outline' />)
    const selectWrapper = screen.getByTestId('select-wrapper')
    expect(selectWrapper).toHaveStyle({
      'border-color': theme.colors.primary,
    })
  })
})
