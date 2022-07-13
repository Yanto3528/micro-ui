import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render as renderWithProvider, screen } from '@/test-utils'

import { Button } from '../../components/button'
import { useToggle, useClickOutside } from '../index'

const TestClickOutside = () => {
  const [isOpen, { onOpen, onClose }] = useToggle(false)
  const clickRef = useClickOutside(onClose)

  return (
    <>
      <p>Outside div</p>
      <div ref={clickRef} onClick={onOpen} data-testid='click-outside-wrapper'>
        {isOpen && <p>Inside div</p>}
      </div>
    </>
  )
}

describe('hooks > useTheme', () => {
  it('should not throw error when calling useTheme inside ThemeProvider', () => {
    renderWithProvider(<Button>Submit</Button>)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('should throw error when calling useTheme outside of ThemeProvider', () => {
    vi.spyOn(console, 'error').mockImplementation(() => vi.fn())
    expect(() => render(<Button>Submit</Button>)).toThrow()
    vi.restoreAllMocks()
  })
})

describe('hooks > useToggle', () => {
  it('should return false when not passing defaultValue to useToggle', () => {
    const { result } = renderHook(() => useToggle())
    expect(result.current[0]).toBe(false)
  })

  it('should return defaultValue when passed to useToggle', () => {
    const { result } = renderHook(() => useToggle(true))
    expect(result.current[0]).toBe(true)
  })

  it('should be able to call onOpen, onClose, and onToggle to change the state', () => {
    const { result } = renderHook(() => useToggle())
    expect(result.current[0]).toBe(false)

    act(() => {
      result.current[1].onOpen()
    })
    expect(result.current[0]).toBe(true)

    act(() => {
      result.current[1].onClose()
    })
    expect(result.current[0]).toBe(false)

    act(() => {
      result.current[1].onToggle()
    })
    expect(result.current[0]).toBe(true)

    act(() => {
      result.current[1].onToggle()
    })
    expect(result.current[0]).toBe(false)
  })
})

describe('hooks > useClickOutside', () => {
  it('should show/hide inside div when clicking inside/outside div', () => {
    render(<TestClickOutside />)
    const wrapper = screen.getByTestId('click-outside-wrapper')
    userEvent.click(wrapper)

    let insideDiv = screen.getByText(/inside div/i)
    expect(insideDiv).toBeInTheDocument()

    const outsideDiv = screen.getByText(/outside div/i)
    userEvent.click(outsideDiv)

    insideDiv = screen.queryByText(/inside div/i)
    expect(insideDiv).not.toBeInTheDocument()
  })
})
