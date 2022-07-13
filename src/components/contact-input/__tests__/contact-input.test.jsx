import React, { useState } from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen } from '@/test-utils'

import { theme } from '../../theme'
import { ContactInput } from '../index'

/* eslint-disable */
const ControlledContactInput = (props) => {
  const [value, setValue] = useState(props.value || '')

  return (
    <>
      <p data-testid='contact-input-value'>{value}</p>
      <ContactInput value={value} onChange={setValue} {...props} />
    </>
  )
}
/* eslint-enable */

describe('components > ContactInput', () => {
  it('should render correctly with solid variant styles', () => {
    render(<ContactInput />)
    const input = screen.getByRole('textbox')
    const countryCode = screen.getByRole('combobox')

    expect(input).toBeInTheDocument()
    expect(countryCode).toBeInTheDocument()
  })

  it('should be able to select country code and type in the input', () => {
    render(<ContactInput />)
    const input = screen.getByRole('textbox')
    const countryCode = screen.getByRole('combobox')

    userEvent.selectOptions(countryCode, ['+65'])
    expect(screen.getByRole('option', { name: /\+62/ }).selected).toBe(false)
    expect(screen.getByRole('option', { name: /\+65/ }).selected).toBe(true)
    expect(screen.getByRole('option', { name: /\+60/ }).selected).toBe(false)

    userEvent.type(input, '81111111')
    expect(input).toHaveValue('81111111')
  })

  it('should be able to select country code and type in the input with controlled component', () => {
    render(<ControlledContactInput />)
    const input = screen.getByRole('textbox')
    const countryCode = screen.getByRole('combobox')
    const contactInputValue = screen.getByTestId('contact-input-value')

    userEvent.selectOptions(countryCode, ['+65'])
    expect(screen.getByRole('option', { name: /\+62/ }).selected).toBe(false)
    expect(screen.getByRole('option', { name: /\+65/ }).selected).toBe(true)
    expect(screen.getByRole('option', { name: /\+60/ }).selected).toBe(false)

    userEvent.type(input, '81111111')
    expect(input).toHaveValue('81111111')
    expect(contactInputValue).toHaveTextContent('+6581111111')
  })

  it('should be able to pass in custom countryCode', () => {
    const supportedCode = [
      { value: '62', name: '62' },
      { value: '65', name: '65' },
      { value: '60', name: '60' },
    ]
    render(<ControlledContactInput supportedCode={supportedCode} />)
    const input = screen.getByRole('textbox')
    const countryCode = screen.getByRole('combobox')
    const contactInputValue = screen.getByTestId('contact-input-value')

    userEvent.selectOptions(countryCode, ['62'])
    expect(screen.getByRole('option', { name: /62/ }).selected).toBe(true)
    expect(screen.getByRole('option', { name: /65/ }).selected).toBe(false)
    expect(screen.getByRole('option', { name: /60/ }).selected).toBe(false)

    userEvent.type(input, '12345678')
    expect(input).toHaveValue('12345678')
    expect(contactInputValue).toHaveTextContent('6212345678')
  })

  it('should display default empty value when country code is invalid', () => {
    render(<ControlledContactInput value='1234567890' />)
    const input = screen.getByRole('textbox')
    const contactInputValue = screen.getByTestId('contact-input-value')

    expect(input).toHaveValue('')
    expect(screen.getByRole('option', { name: /\+65/ }).selected).toBe(true)
    expect(screen.getByRole('option', { name: /\+62/ }).selected).toBe(false)
    expect(screen.getByRole('option', { name: /\+60/ }).selected).toBe(false)
    expect(contactInputValue).toHaveTextContent('1234567890')
  })

  it('should return correct value for empty and not empty input value', () => {
    render(<ControlledContactInput />)
    const input = screen.getByRole('textbox')
    const contactInputValue = screen.getByTestId('contact-input-value')

    expect(input).toHaveValue('')
    userEvent.type(input, '811')
    expect(contactInputValue).toHaveTextContent('+65811')
    userEvent.type(input, '{backspace}{backspace}{backspace}')
    expect(contactInputValue).toHaveTextContent('')
  })

  it('should render outline variant style correctly', () => {
    const { rerender } = render(
      <ContactInput variant='outline' borderColor='secondary' />
    )
    const contactInputWrapper = screen.getByTestId('contact-input-wrapper')
    expect(contactInputWrapper).toHaveStyle({
      'border-color': theme.colors.secondary,
    })

    rerender(<ContactInput variant='outline' hasError />)
    expect(contactInputWrapper).toHaveStyle({
      'border-color': theme.colors.danger,
    })
  })

  it('should render with rounded/radius corner correctly', () => {
    const { rerender } = render(<ContactInput rounded />)
    const contactInputWrapper = screen.getByTestId('contact-input-wrapper')
    expect(contactInputWrapper).toHaveStyle({
      'border-radius': '50px',
    })

    // Rounded props is prioritized first than radius thus border-radius will follow rounded
    rerender(<ContactInput rounded radius='4px' />)
    expect(contactInputWrapper).toHaveStyle({
      'border-radius': '50px',
    })

    rerender(<ContactInput radius='4px' />)
    expect(contactInputWrapper).toHaveStyle({
      'border-radius': '4px',
    })
  })

  it('should render with width/fluid, height props correctly', () => {
    const { rerender } = render(<ContactInput fluid />)
    const contactInputWrapper = screen.getByTestId('contact-input-wrapper')
    expect(contactInputWrapper).toHaveStyle({
      width: '100%',
    })

    // Fluid props is prioritized first than width thus width will follow fluid
    rerender(<ContactInput fluid width='400px' />)
    expect(contactInputWrapper).toHaveStyle({
      width: '100%',
    })

    rerender(<ContactInput width='400px' height='100px' />)
    expect(contactInputWrapper).toHaveStyle({
      width: '400px',
      height: '100px',
    })
  })

  it('should render disabled/readOnly state correctly', () => {
    const { rerender } = render(<ContactInput disabled />)
    const contactInputWrapper = screen.getByTestId('contact-input-wrapper')
    const input = screen.getByRole('textbox')
    const countryCode = screen.getByRole('combobox')

    expect(contactInputWrapper).toHaveStyle({
      opacity: '0.7',
      cursor: 'not-allowed',
    })
    expect(input).toBeDisabled()
    expect(countryCode).toBeDisabled()

    rerender(<ContactInput readOnly />)
    expect(contactInputWrapper).toHaveStyle({
      opacity: '0.7',
      cursor: 'not-allowed',
    })

    expect(input).toHaveAttribute('readonly')
    expect(countryCode).toHaveAttribute('readonly')
  })

  it('should render with custom style', () => {
    render(<ContactInput customStyle={{ 'margin-bottom': '20px' }} />)
    const contactInputWrapper = screen.getByTestId('contact-input-wrapper')

    expect(contactInputWrapper).toHaveStyle({
      'margin-bottom': '20px',
    })
  })
})
