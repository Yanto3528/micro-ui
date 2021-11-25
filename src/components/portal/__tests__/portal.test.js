import React from 'react'

import { render, screen } from '@/test-utils'

import { Portal } from '../index'

describe('components > Portal', () => {
  it('should render correctly', () => {
    render(<Portal>Portal content</Portal>)
    const content = screen.getByText(/portal content/i)
    expect(content).toBeInTheDocument()
  })
})
