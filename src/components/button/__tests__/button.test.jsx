import React from 'react'
import { render, screen } from '@/test-utils'
import { FaCog } from 'react-icons/fa'

import { theme } from '../../theme'
import { Button } from '../index'

vi.mock('../../../constants', () => ({ isDev: false }))
beforeEach(() => {
  vi.resetModules()
})

describe('components > button', () => {
  it('should render button with correct text', () => {
    render(<Button>Submit</Button>)
    const button = screen.getByRole('button', { name: /submit/i })
    expect(button).toHaveTextContent('Submit')
  })

  it('should render button with loading and isDisabled', () => {
    const { rerender } = render(<Button loading>Submit</Button>)
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toBeInTheDocument()

    rerender(
      <Button loading loadingText='Submitting'>
        Submit
      </Button>
    )
    const button = screen.getByRole('button', { name: /submitting/i })
    expect(button).toHaveTextContent('Submitting')
    expect(button).toBeDisabled()
  })

  it('should render button with disabled state', () => {
    render(<Button disabled>Submit</Button>)
    const button = screen.getByRole('button', { name: /submit/i })
    expect(button).toHaveTextContent('Submit')
    expect(button).toBeDisabled()
  })

  it('should render button with passed in bg and text color', () => {
    const { rerender } = render(
      <Button bg='secondary' color='white'>
        Submit
      </Button>
    )
    let button = screen.getByRole('button', { name: /submit/i })
    expect(button).toHaveStyle({
      'background-color': theme.colors.secondary,
      color: theme.colors.white,
    })

    rerender(
      <Button bg='#ff0000' color='dodgerblue'>
        Submit
      </Button>
    )
    expect(button).toHaveStyle({
      'background-color': '#ff0000',
      color: 'dodgerblue',
    })
  })

  it('should render button with outline variant styles', () => {
    const { rerender } = render(<Button variant='outline'>Submit</Button>)
    let button = screen.getByRole('button', { name: /submit/i })
    expect(button).toHaveStyle({
      'background-color': 'transparent',
      'border-color': theme.colors.primary,
      color: theme.colors.primary,
    })

    rerender(
      <Button variant='outline' bg='secondary'>
        Submit
      </Button>
    )
    expect(button).toHaveStyle({
      'border-color': theme.colors.secondary,
      color: theme.colors.secondary,
    })
  })

  it('should render button with rounded/radius corner', () => {
    const { rerender } = render(<Button rounded>Submit</Button>)
    let button = screen.getByRole('button', { name: /submit/i })
    expect(button).toHaveStyle({
      'border-radius': '50px',
    })

    rerender(
      <Button rounded radius='4px'>
        Submit
      </Button>
    )
    expect(button).toHaveStyle({
      'border-radius': '50px',
    })

    rerender(
      <Button rounded={false} radius='4px'>
        Submit
      </Button>
    )
    expect(button).toHaveStyle({
      'border-radius': '4px',
    })
  })

  it('should render button with icon', () => {
    // With Left Icon
    const { rerender } = render(<Button leftIcon={<FaCog />}>Settings</Button>)
    const button = screen.getByRole('button', { name: /settings/i })
    expect(button).toHaveTextContent('Settings')
    expect(button.children[0]).toHaveClass('micro-button-icon-container')

    // With right Icon
    rerender(<Button rightIcon={<FaCog />}>Settings</Button>)
    expect(button.children[0]).toHaveClass('micro-button-icon-container')

    // With Both Left and Right Icon
    rerender(
      <Button leftIcon={<FaCog />} rightIcon={<FaCog />}>
        Settings
      </Button>
    )
    expect(button.children[0]).toHaveClass('micro-button-icon-container')
    expect(button.children[1]).toHaveClass('micro-button-icon-container')
  })

  it('should render button with fluid and width props', () => {
    const { rerender } = render(<Button fluid>Submit</Button>)
    let button = screen.getByRole('button', { name: /submit/i })
    expect(button).toHaveStyle({
      width: '100%',
    })

    rerender(
      <Button fluid width='500px'>
        Submit
      </Button>
    )
    expect(button).toHaveStyle({
      width: '100%',
    })

    rerender(<Button width='500px'>Submit</Button>)
    expect(button).toHaveStyle({
      width: '500px',
    })
  })

  it('should render button with custom style', () => {
    render(<Button customStyle={{ 'margin-top': '20px' }}>Submit</Button>)
    let button = screen.getByRole('button', { name: /submit/i })
    expect(button).toHaveStyle({
      'margin-top': '20px',
    })
  })
})
