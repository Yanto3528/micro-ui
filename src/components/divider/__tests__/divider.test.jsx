import React from 'react'

import { render, screen } from '@/test-utils'

import { theme } from '../../theme'
import { Divider } from '../index'

describe('components > Divider', () => {
  it('should render correctly', () => {
    render(<Divider data-testid='divider' />)
    const divider = screen.getByTestId('divider')
    expect(divider).toBeInTheDocument()
  })

  it('should render with text', () => {
    render(<Divider text='Divider text' data-testid='divider' />)
    const dividers = screen.getAllByTestId('divider')
    const text = screen.getByText(/divider text/i)
    expect(dividers.length).toBe(2)
    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle({
      'padding-inline': '20px', // default padding inline in theme
    })
  })

  it('should render with different color', () => {
    render(<Divider data-testid='divider' bg='darkYellow' />)
    const divider = screen.getByTestId('divider')
    expect(divider).toHaveStyle({
      'background-color': theme.colors.darkYellow,
    })
  })

  it('should render with custom style', () => {
    render(<Divider data-testid='divider' customStyle={{ padding: '20px' }} />)
    const divider = screen.getByTestId('divider')
    expect(divider).toHaveStyle({
      padding: '20px',
    })
  })

  it('should render with vertical orientation', () => {
    render(
      <div style={{ height: '100px' }}>
        <Divider data-testid='divider' orientation='vertical' />
      </div>
    )
    const divider = screen.getByTestId('divider')
    expect(divider).toHaveStyle({
      width: '1px',
      'writing-mode': 'vertical-lr',
    })
  })

  it('should render with vertical orientation and text', () => {
    render(
      <div style={{ height: '100px' }}>
        <Divider data-testid='divider' text='Today' orientation='vertical' />
      </div>
    )
    const dividers = screen.getAllByTestId('divider')
    const text = screen.getByText(/today/i)
    expect(dividers.length).toBe(2)
    expect(text).toHaveStyle({
      'writing-mode': 'vertical-lr',
      transform: 'rotate(180deg)',
    })
  })
})
