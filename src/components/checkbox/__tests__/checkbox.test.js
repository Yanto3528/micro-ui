import React, { useState } from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen } from '@/test-utils'

import { Checkbox } from '../index'

const ControlledCheckbox = () => {
  const [value, setValue] = useState(false)

  const onChange = (event) => setValue(event.currentTarget.checked)

  return <Checkbox label='Tick me' value={value} onChange={onChange} />
}

describe('components > Checkbox', () => {
  it('should render correctly', () => {
    const { rerender } = render(<Checkbox label='Tick me' />)
    const checkbox = screen.getByRole('checkbox', { name: /tick/i })
    expect(checkbox).toBeInTheDocument()

    rerender(<Checkbox />)
    const checkboxLabel = screen.queryByTestId('checkbox-label')
    expect(checkboxLabel).not.toBeInTheDocument()
  })

  it('should able to check and uncheck checkbox', () => {
    render(<Checkbox label='Tick me' />)
    const checkbox = screen.getByRole('checkbox', { name: /tick/i })
    expect(checkbox).not.toBeChecked()

    userEvent.click(checkbox)
    expect(checkbox).toBeChecked()

    userEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('should able to check and uncheck checkbox with controlled component', () => {
    render(<ControlledCheckbox />)
    const checkbox = screen.getByRole('checkbox', { name: /tick/i })
    expect(checkbox).not.toBeChecked()

    userEvent.click(checkbox)
    expect(checkbox).toBeChecked()

    userEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('should not be able to check/unchecked when disabled/readOnly', () => {
    const { rerender } = render(<Checkbox label='Tick me' disabled />)
    const checkbox = screen.getByRole('checkbox', { name: /tick/i })
    expect(checkbox).toBeDisabled()
    expect(() => userEvent.click(checkbox)).toThrow()
    expect(checkbox).not.toBeChecked()

    rerender(<Checkbox label='Tick me' readOnly />)
    expect(() => userEvent.click(checkbox)).toThrow()
    expect(checkbox).not.toBeChecked()
  })

  it('should render checkbox with width/fluid props', () => {
    const { rerender } = render(<Checkbox label='Tick me' fluid />)
    const checkboxWrapper = screen.getByTestId('checkbox-wrapper')
    expect(checkboxWrapper).toHaveStyle({
      width: '100%',
    })

    rerender(<Checkbox label='Tick me' fluid width='400px' />)
    expect(checkboxWrapper).toHaveStyle({
      width: '100%',
    })

    rerender(<Checkbox label='Tick me' width='400px' height='100px' />)
    expect(checkboxWrapper).toHaveStyle({
      width: '400px',
      height: '100px',
    })
  })

  it('should render checkbox with customStyle', () => {
    render(
      <Checkbox label='Tick me' customStyle={{ 'margin-bottom': '20px' }} />
    )
    const checkboxWrapper = screen.getByTestId('checkbox-wrapper')
    expect(checkboxWrapper).toHaveStyle({
      'margin-bottom': '20px',
    })
  })
})
