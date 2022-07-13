import React from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen, waitFor, fireEvent } from '@/test-utils'

import { FadeInOut, SlideInOut } from '../animate.stories'

describe('components > Animate', () => {
  it('should wait for elements to show / hide with fade in and fade out animation', async () => {
    render(<FadeInOut />)
    fireEvent.animationEnd(screen.getByTestId('animate-wrapper'))
    const text = await screen.findByText(/animated text/i)
    expect(text).toBeInTheDocument()

    const button = screen.getByRole('button', { name: /show/i })
    userEvent.click(button)
    fireEvent.animationEnd(screen.getByTestId('animate-wrapper'))
    await waitFor(() => {
      expect(screen.queryByText(/animated text/i)).not.toBeInTheDocument()
    })
  })

  it('should wait for elements to show / hide with slide in and slide out animation', async () => {
    render(<SlideInOut />)
    const text = await screen.findByText(/animated text/i)
    expect(text).toBeInTheDocument()

    const button = screen.getByRole('button', { name: /show/i })
    userEvent.click(button)
    fireEvent.animationEnd(screen.getByTestId('animate-wrapper'))
    await waitFor(() => {
      expect(screen.queryByText(/animated text/i)).not.toBeInTheDocument()
    })
  })
})
