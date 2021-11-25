import React from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen } from '@/test-utils'

import { theme } from '../../theme'
import { Icon } from '../../icon'
import { RadioButton } from '../index'

describe('components > RadioButton', () => {
  it('should render correctly', () => {
    render(<RadioButton label='Click me' variant='solid' />)
    const radio = screen.getByRole('radio')
    const label = screen.getByText(/click me/i)
    expect(radio).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })

  it('should render with icon', () => {
    render(<RadioButton label='Click me' icon={<Icon name='male' />} />)
    const label = screen.getByText(/click me/i)
    expect(label.children[0]).toHaveClass('aia-radio-button-icon-container')
    expect(label.children[0].children[0]).toHaveClass('icon-male')
  })

  it('should be able to tick the radio button', () => {
    render(<RadioButton label='Click me' />)
    const radio = screen.getByRole('radio')
    expect(radio).not.toBeChecked()
    userEvent.click(radio)
    expect(radio).toBeChecked()
  })

  it('should not be able to tick radio button if it is disabled/readOnly', () => {
    const { rerender } = render(<RadioButton label='tick me' disabled />)
    const radio = screen.getByRole('radio')
    expect(radio).toBeDisabled()

    rerender(<RadioButton label='Click me' readOnly />)
    expect(() => userEvent.click(radio)).toThrow()
    expect(radio).not.toBeChecked()
  })

  it('should render with variant outline style', () => {
    render(<RadioButton label='Click me' variant='outline' />)
    const label = screen.getByText(/click me/i)
    expect(label).toHaveStyle({
      color: theme.colors.primary,
      'border-color': theme.colors.primary,
    })
  })

  it('should render with buttonType square style', () => {
    render(<RadioButton label='Click me' buttonType='square' size='200px' />)
    const label = screen.getByText(/click me/i)
    expect(label).toHaveStyle({
      width: '200px',
      height: '200px',
    })
  })

  it('should render radio button with width/fluid props', () => {
    const { rerender } = render(<RadioButton label='Click me' fluid />)
    const label = screen.getByText(/click me/i)
    expect(label).toHaveStyle({
      width: '100%',
    })

    rerender(<RadioButton label='Click me' fluid width='400px' />)
    expect(label).toHaveStyle({
      width: '100%',
    })

    rerender(<RadioButton label='Click me' width='400px' height='100px' />)
    expect(label).toHaveStyle({
      width: '400px',
      height: '100px',
    })
  })

  it('should render radio with customStyle', () => {
    render(
      <RadioButton label='Click me' customStyle={{ 'margin-bottom': '20px' }} />
    )
    const label = screen.getByText(/click me/i)
    expect(label).toHaveStyle({
      'margin-bottom': '20px',
    })
  })
})
