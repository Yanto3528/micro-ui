import React from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen } from '@/test-utils'

import { Radio } from '../index'

describe('components > Radio', () => {
  it('should render correctly', () => {
    render(<Radio label='Tick me' />)
    const radio = screen.getByRole('radio')
    expect(radio).toBeInTheDocument()
  })

  it('should be able to tick the radio', () => {
    render(<Radio label='Tick me' />)
    const radio = screen.getByRole('radio')
    expect(radio).not.toBeChecked()
    userEvent.click(radio)
    expect(radio).toBeChecked()
  })

  it('should not be able to tick radio if it is disabled/readOnly', () => {
    const { rerender } = render(<Radio label='tick me' disabled />)
    const radio = screen.getByRole('radio')
    expect(radio).toBeDisabled()

    rerender(<Radio label='Tick me' readOnly />)
    expect(() => userEvent.click(radio)).toThrow()
    expect(radio).not.toBeChecked()
  })

  it('should render with variant check style', () => {
    render(<Radio label='Tick me' variant='check' />)
    const radio = screen.getByRole('radio')
    expect(radio).toBeInTheDocument()
  })

  it('should render radio with width/fluid props', () => {
    const { rerender } = render(<Radio label='Tick me' fluid />)
    const radioWrapper = screen.getByTestId('radio-wrapper')
    expect(radioWrapper).toHaveStyle({
      width: '100%',
    })

    rerender(<Radio label='Tick me' fluid width='400px' />)
    expect(radioWrapper).toHaveStyle({
      width: '100%',
    })

    rerender(<Radio label='Tick me' width='400px' height='100px' />)
    expect(radioWrapper).toHaveStyle({
      width: '400px',
      height: '100px',
    })
  })

  it('should render radio with customStyle', () => {
    render(<Radio label='Tick me' customStyle={{ 'margin-bottom': '20px' }} />)
    const radioWrapper = screen.getByTestId('radio-wrapper')
    expect(radioWrapper).toHaveStyle({
      'margin-bottom': '20px',
    })
  })
})
