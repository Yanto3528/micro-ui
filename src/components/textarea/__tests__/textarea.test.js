import React, { useState } from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen } from '@/test-utils'

import { theme } from '../../theme'
import { Textarea } from '../index'

/* eslint-disable */
const ControlledTextarea = ({ value: propsValue, ...props }) => {
  const [value, setValue] = useState(propsValue || '')

  const onChange = (event) => {
    setValue(event.currentTarget.value)
  }

  return <Textarea {...props} value={value} onChange={onChange} />
}
/* eslint-enable */

describe('components > Textarea', () => {
  it('should render correctly', () => {
    render(<Textarea placeholder='Enter description' />)
    const textarea = screen.getByRole('textbox')
    expect(textarea).toBeInTheDocument()
  })

  it('should be able to type something and display it', () => {
    render(<Textarea placeholder='Enter description' />)
    const textarea = screen.getByRole('textbox')
    userEvent.type(textarea, 'John doe')

    expect(textarea).toHaveValue('John doe')

    userEvent.clear(textarea)
    expect(textarea).toHaveValue('')
  })

  it('should show correct value when type in something with controlled textarea', () => {
    render(<ControlledTextarea placeholder='Enter description' />)
    const textarea = screen.getByRole('textbox')
    userEvent.type(textarea, 'Jane Smith')
    expect(textarea).toHaveValue('Jane Smith')
  })

  it('should show value when passed value props for controlled textarea', () => {
    render(<ControlledTextarea placeholder='Enter description' value='Jacky' />)
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveValue('Jacky')
  })

  it('should render with style props', () => {
    const { rerender } = render(
      <Textarea placeholder='Enter description' fluid rounded />
    )
    const textarea = screen.getByRole('textbox')
    const wrapper = screen.getByTestId('textarea-wrapper')
    expect(textarea).toHaveStyle({
      'border-radius': '50px',
      'border-color': theme.colors.lightGray,
      'background-color': theme.colors.lightGray,
    })
    expect(wrapper).toHaveStyle({
      width: '100%',
    })

    // Fluid is higher priority than width, so width will not have any effect here
    // Rounded is higher priority than radius, so radius will not have effect here
    rerender(
      <Textarea
        placeholder='Enter description'
        fluid
        width='400px'
        rounded
        radius='8px'
      />
    )
    expect(textarea).toHaveStyle({
      'border-radius': '50px',
    })
    expect(wrapper).toHaveStyle({
      width: '100%',
    })

    rerender(
      <Textarea
        placeholder='Enter description'
        width='400px'
        radius='8px'
        hasError
        customStyle={{
          'margin-bottom': '20px',
          padding: '10px',
        }}
      />
    )
    expect(textarea).toHaveStyle({
      padding: '10px',
      'border-radius': '8px',
      'border-color': theme.colors.primary,
      'margin-bottom': '20px',
    })
    expect(wrapper).toHaveStyle({
      width: '400px',
    })
  })

  it('should render with outline variant', () => {
    render(
      <ControlledTextarea
        placeholder='Enter description'
        variant='outline'
        borderColor='secondary'
      />
    )
    const textarea = screen.getByRole('textbox')
    userEvent.type(textarea, 'Sarah')
    expect(textarea).toHaveValue('Sarah')
    expect(textarea).toHaveStyle({
      'border-color': theme.colors.secondary,
    })
  })
})
