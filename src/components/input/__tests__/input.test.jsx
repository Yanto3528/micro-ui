import React, { useState } from 'react'
import userEvent from '@testing-library/user-event'
import { Plus, Calendar } from 'react-feather'

import { render, screen } from '@/test-utils'

import { theme } from '../../theme'
import { Input } from '../index'

/* eslint-disable */
const ControlledInput = ({ value: propsValue, ...props }) => {
  const [value, setValue] = useState(propsValue || '')

  const onChange = (event) => {
    setValue(event.currentTarget.value)
  }

  return <Input {...props} value={value} onChange={onChange} />
}
/* eslint-enable */

describe('components > Input', () => {
  it('should render correctly', () => {
    render(<Input placeholder='Enter your name' />)
    const input = screen.getByPlaceholderText(/name/i)
    expect(input).toBeInTheDocument()
  })

  it('should be able to type something and display it', () => {
    render(<Input placeholder='Enter your name' />)
    const input = screen.getByPlaceholderText(/name/i)
    userEvent.type(input, 'John doe')

    expect(input).toHaveValue('John doe')

    userEvent.clear(input)
    expect(input).toHaveValue('')
  })

  it('should render with left element when specified', () => {
    const { rerender } = render(
      <Input placeholder='Enter your name' leftElement={<Plus />} />
    )
    const leftElement = screen.queryByTestId('left-element')
    expect(leftElement).toBeInTheDocument()
    expect(leftElement.children.length).toBe(1)
    expect(leftElement.children[0]).toBeInTheDocument()

    rerender(<Input placeholder='Enter your name' />)
    expect(leftElement).not.toBeInTheDocument()
  })

  it('should render with right element when specified', () => {
    const { rerender } = render(
      <Input placeholder='Enter your name' rightElement={<Plus />} />
    )
    const rightElement = screen.queryByTestId('right-element')
    expect(rightElement).toBeInTheDocument()
    expect(rightElement.children.length).toBe(1)
    expect(rightElement.children[0]).toBeInTheDocument()

    rerender(<Input placeholder='Enter your name' />)
    expect(rightElement).not.toBeInTheDocument()
  })

  it('should render with both left and right element when specified', () => {
    const { rerender } = render(
      <Input
        placeholder='Enter your name'
        leftElement={<Plus />}
        rightElement={<Calendar />}
      />
    )
    const leftElement = screen.queryByTestId('left-element')
    expect(leftElement).toBeInTheDocument()
    expect(leftElement.children.length).toBe(1)
    expect(leftElement.children[0]).toBeInTheDocument()

    const rightElement = screen.queryByTestId('right-element')
    expect(rightElement).toBeInTheDocument()
    expect(rightElement.children.length).toBe(1)
    expect(rightElement.children[0]).toBeInTheDocument()

    rerender(<Input placeholder='Enter your name' />)
    expect(leftElement).not.toBeInTheDocument()
    expect(rightElement).not.toBeInTheDocument()
  })

  it('should show correct value when type in something with controlled input', () => {
    render(<ControlledInput placeholder='Enter your name' />)
    const input = screen.getByPlaceholderText(/name/i)
    userEvent.type(input, 'Jane Smith')
    expect(input).toHaveValue('Jane Smith')
  })

  it('should show value when passed value props for controlled input', () => {
    render(<ControlledInput placeholder='Enter your name' value='Jacky' />)
    const input = screen.getByPlaceholderText(/name/i)
    expect(input).toHaveValue('Jacky')
  })

  it('should render with style props', () => {
    const { rerender } = render(
      <Input placeholder='Enter your name' fluid rounded />
    )
    const input = screen.getByPlaceholderText(/name/i)
    const wrapper = screen.getByTestId('input-wrapper')
    expect(input).toHaveStyle({
      'border-radius': '50px',
      'border-color': theme.colors.gray[100],
      'background-color': theme.colors.gray[100],
    })
    expect(wrapper).toHaveStyle({
      width: '100%',
    })

    // Fluid is higher priority than width, so width will not have any effect here
    // Rounded is higher priority than radius, so radius will not have effect here
    rerender(
      <Input
        placeholder='Enter your name'
        fluid
        width='400px'
        rounded
        radius='8px'
      />
    )
    expect(input).toHaveStyle({
      'border-radius': '50px',
    })
    expect(wrapper).toHaveStyle({
      width: '100%',
    })

    rerender(
      <Input
        placeholder='Enter your name'
        width='400px'
        height='50px'
        radius='8px'
        hasError
        customStyle={{
          'margin-bottom': '20px',
          padding: '10px',
        }}
      />
    )
    expect(input).toHaveStyle({
      height: '50px',
      padding: '10px',
      'border-radius': '8px',
      'border-color': theme.colors.danger,
      'margin-bottom': '20px',
    })
    expect(wrapper).toHaveStyle({
      width: '400px',
    })
  })

  it('should render with outline variant', () => {
    render(
      <ControlledInput
        placeholder='Enter your name'
        variant='outline'
        borderColor='secondary'
      />
    )
    const input = screen.getByPlaceholderText(/name/i)
    expect(input).toHaveStyle({
      'border-color': theme.colors.secondary,
    })
    userEvent.type(input, 'Sarah')
    expect(input).toHaveValue('Sarah')
    expect(input).toHaveStyle({
      'border-color': theme.colors.primary,
    })
  })
})
