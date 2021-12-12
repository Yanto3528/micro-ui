import React, { useState } from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen, fireEvent } from '@/test-utils'

import { theme } from '../../theme'
import { MultiSelect } from '../index'

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
const ControlledMultiSelect = ({ value: valueProps, ...props }) => {
  const [value, setValue] = useState(valueProps || [])

  return <MultiSelect value={value} onChange={setValue} {...props} />
}
/* eslint-enable */

describe('components > MultiSelect', () => {
  it('should render correctly', () => {
    render(<ControlledMultiSelect options={options} />)
    const select = screen.getByTestId('multi-select-wrapper')
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
        <ControlledMultiSelect options={options} />
      </>
    )
    let optionWrapper = screen.queryByTestId('multi-option-wrapper')
    expect(optionWrapper).not.toBeInTheDocument()
    const selectWrapper = screen.getByTestId('multi-select-wrapper')
    userEvent.click(selectWrapper)
    optionWrapper = screen.getByTestId('multi-option-wrapper')
    expect(optionWrapper).toBeInTheDocument()

    const selectOutside = screen.getByText(/outside of select/i)
    userEvent.click(selectOutside)
    optionWrapper = screen.queryByTestId('multi-option-wrapper')
    expect(optionWrapper).not.toBeInTheDocument()
  })

  it('should render with number option from start to end property', () => {
    render(<ControlledMultiSelect options={numOptions} />)
    const selectWrapper = screen.getByTestId('multi-select-wrapper')
    userEvent.click(selectWrapper)
    for (let i = numOptions.start; i <= numOptions.end; i++) {
      const numberOption = screen.getByText(i)
      expect(numberOption).toBeInTheDocument()
    }
  })

  it('should render with number option from start to end and step property', () => {
    render(<ControlledMultiSelect options={sumOptions} />)
    const selectWrapper = screen.getByTestId('multi-select-wrapper')
    userEvent.click(selectWrapper)
    for (let i = sumOptions.start; i <= sumOptions.end; i += sumOptions.step) {
      const numberOption = screen.getByText(i)
      expect(numberOption).toBeInTheDocument()
    }
  })

  it('should render with filtered options', () => {
    render(<ControlledMultiSelect options={options} filter={['U']} />)
    const selectWrapper = screen.getByTestId('multi-select-wrapper')
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
      <ControlledMultiSelect
        options={options}
        filter={['non-existent-option']}
      />
    )
    const selectWrapper = screen.getByTestId('multi-select-wrapper')
    userEvent.click(selectWrapper)

    const maleOption = screen.getByText(/^male/i)
    const femaleOption = screen.getByText(/^female/i)
    const unknownOption = screen.getByText(/^unknown/i)
    expect(maleOption).toBeInTheDocument()
    expect(femaleOption).toBeInTheDocument()
    expect(unknownOption).toBeInTheDocument()
  })

  it('should not show any options when passed in invalid options props', () => {
    render(<ControlledMultiSelect options={invalidOptions} />)
    const selectWrapper = screen.getByTestId('multi-select-wrapper')
    userEvent.click(selectWrapper)

    const optionWrapper = screen.queryByTestId('multi-option-wrapper')
    expect(optionWrapper).toBeInTheDocument()
    let noOptionFoundText = screen.getByText(/no options found/i)
    expect(noOptionFoundText).toBeInTheDocument()
    userEvent.click(noOptionFoundText)
    noOptionFoundText = screen.queryByText(/no options found/i)
    expect(noOptionFoundText).not.toBeInTheDocument()
  })

  it('should be able to select two of the option', () => {
    render(<ControlledMultiSelect options={options} />)
    const select = screen.getByTestId('multi-select-wrapper')
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('')
    userEvent.click(select)

    const optionWrapper = screen.queryByTestId('multi-option-wrapper')
    expect(optionWrapper).toBeInTheDocument()
    const maleOption = screen.getByText(/^male/i)
    userEvent.click(maleOption)
    expect(optionWrapper).not.toBeInTheDocument()
    let selectedOptions = screen.getAllByTestId('multi-selected-option')
    expect(selectedOptions.length).toBe(1)
    expect(selectedOptions[0]).toHaveTextContent('Male')
    userEvent.click(select)
    const femaleOption = screen.getByText(/^female/i)
    userEvent.click(femaleOption)
    selectedOptions = screen.getAllByTestId('multi-selected-option')
    expect(selectedOptions.length).toBe(2)
  })

  it('should be able to remove selected options', () => {
    render(<ControlledMultiSelect options={options} />)
    const select = screen.getByTestId('multi-select-wrapper')
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('')
    userEvent.click(select)

    const maleOption = screen.getByText(/^male/i)
    userEvent.click(maleOption)
    userEvent.click(select)

    const femaleOption = screen.getByText(/^female/i)
    userEvent.click(femaleOption)
    let selectedOptions = screen.getAllByTestId('multi-selected-option')
    expect(selectedOptions.length).toBe(2)

    // Remove male
    userEvent.click(selectedOptions[0].children[1])
    selectedOptions = screen.getAllByTestId('multi-selected-option')
    expect(selectedOptions.length).toBe(1)
    expect(selectedOptions[0]).toHaveTextContent('Female')

    // Remove female
    userEvent.click(selectedOptions[0].children[1])
    selectedOptions = screen.queryAllByTestId('multi-selected-option')
    expect(selectedOptions.length).toBe(0)
  })

  it('should be able display correct option when passed in value props', () => {
    const selectValues = [
      { value: 'F', name: 'Female' },
      { value: 'M', name: 'Male' },
    ]
    render(<ControlledMultiSelect options={options} value={selectValues} />)
    const selectedOption = screen.getAllByTestId('multi-selected-option')
    expect(selectedOption.length).toBe(2)
    selectValues.forEach((selectedOption) => {
      const selectedValueText = screen.getByText(selectedOption.name)
      expect(selectedValueText).toBeInTheDocument()
    })
  })

  it('should not display option value when passed in value props is not valid', () => {
    jest.spyOn(console, 'error').mockImplementation(() => jest.fn())
    render(<ControlledMultiSelect options={options} value='not-valid-value' />)
    const selectedOption = screen.queryAllByTestId('multi-selected-option')
    expect(selectedOption.length).toBe(0)
    jest.restoreAllMocks()
  })

  it('should be able to search options by typing in the input field', () => {
    render(<ControlledMultiSelect options={options} searchable />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, 'Male')
    expect(input).toHaveValue('Male')

    const optionWrapper = screen.getByTestId('multi-option-wrapper')
    expect(optionWrapper.children.length).toBe(2)
    expect(optionWrapper.children[0]).toHaveTextContent('Male')
    expect(optionWrapper.children[1]).toHaveTextContent('Female')
  })

  it('should be able to search options and select the option', () => {
    render(<ControlledMultiSelect options={options} searchable />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, 'Male')
    expect(input).toHaveValue('Male')

    let optionWrapper = screen.getByTestId('multi-option-wrapper')
    expect(optionWrapper.children.length).toBe(2)
    userEvent.click(optionWrapper.children[0])
    let selectedOptions = screen.getAllByTestId('multi-selected-option')
    expect(selectedOptions.length).toBe(1)

    fireEvent.change(input, { target: { value: 'Fe' } })
    optionWrapper = screen.getByTestId('multi-option-wrapper')
    userEvent.click(optionWrapper.children[0])
    selectedOptions = screen.getAllByTestId('multi-selected-option')
    expect(selectedOptions.length).toBe(2)
    expect(selectedOptions[0]).toHaveTextContent('Male')
    expect(selectedOptions[1]).toHaveTextContent('Female')
  })

  it('should not display value if searched value is not a valid option', () => {
    render(<ControlledMultiSelect options={options} searchable />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, 'm')
    userEvent.clear(input)
    userEvent.type(input, 'asd')

    const optionWrapper = screen.getByTestId('multi-option-wrapper')
    expect(optionWrapper.children.length).toBe(1)
    expect(optionWrapper.children[0]).toHaveTextContent('No options found')
  })

  it('should render search value based on sumOptions', () => {
    render(<ControlledMultiSelect options={sumOptions} searchable />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, '10000')

    const optionWrapper = screen.getByTestId('multi-option-wrapper')
    expect(optionWrapper.children.length).toBe(1)
    expect(optionWrapper.children[0]).toHaveTextContent('10000')
  })

  it('should not show dropdown menu when it is disabled/readOnly', () => {
    const { rerender } = render(
      <ControlledMultiSelect options={sumOptions} disabled />
    )
    const selectWrapper = screen.getByTestId('multi-select-wrapper')
    const optionWrapper = screen.queryByTestId('multi-option-wrapper')
    userEvent.click(selectWrapper)
    expect(optionWrapper).not.toBeInTheDocument()

    rerender(<ControlledMultiSelect options={sumOptions} readOnly />)
    userEvent.click(selectWrapper)
    expect(optionWrapper).not.toBeInTheDocument()
  })

  it('should not be able to remove option when it is disabled/readOnly', () => {
    const optionValues = [{ value: 'M', name: 'Male' }]
    const { rerender } = render(
      <ControlledMultiSelect
        options={sumOptions}
        value={optionValues}
        disabled
      />
    )
    const selectWrapper = screen.getByTestId('multi-select-wrapper')
    const optionWrapper = screen.queryByTestId('multi-option-wrapper')
    const closeIcon = screen.getByTestId('multi-selected-close')
    const selectedOptions = screen.getAllByTestId('multi-selected-option')

    expect(selectedOptions.length).toBe(1)
    userEvent.click(selectWrapper)
    expect(optionWrapper).not.toBeInTheDocument()
    userEvent.click(closeIcon)
    expect(selectedOptions.length).toBe(1)

    rerender(<ControlledMultiSelect options={sumOptions} readOnly />)
    userEvent.click(selectWrapper)
    expect(optionWrapper).not.toBeInTheDocument()
    userEvent.click(closeIcon)
    expect(selectedOptions.length).toBe(1)
  })

  it('should render with style props', () => {
    const values = [{ value: 'M', name: 'Male' }]
    const { rerender } = render(
      <ControlledMultiSelect options={options} value={values} fluid rounded />
    )
    const selectWrapper = screen.getByTestId('multi-select-wrapper')
    const selectedOption = screen.getByTestId('multi-selected-option')
    expect(selectWrapper).toHaveStyle({
      width: '100%',
      'border-radius': '50px',
    })
    expect(selectedOption).toHaveStyle({
      'background-color': theme.colors.gray[200],
      color: theme.colors.dark,
      gap: '4px',
      padding: '4px',
    })

    // Fluid is higher priority than width, so width will not have effect here
    rerender(
      <ControlledMultiSelect
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
      <ControlledMultiSelect
        options={options}
        value={values}
        width='400px'
        height='50px'
        radius='4px'
        hasError
        selectedOptionProps={{
          bg: 'primary',
          color: 'white',
          padding: '10px',
          customStyle: {
            gap: '10px',
          },
        }}
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
    expect(selectedOption).toHaveStyle({
      'background-color': theme.colors.primary,
      color: theme.colors.white,
      padding: '10px',
      gap: '10px',
    })
  })

  it('should render with outline variant props', () => {
    render(<ControlledMultiSelect options={options} variant='outline' />)
    const selectWrapper = screen.getByTestId('multi-select-wrapper')
    expect(selectWrapper).toHaveStyle({
      'border-color': theme.colors.gray[200],
    })
  })
})
