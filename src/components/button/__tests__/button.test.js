import React from 'react'
import { render, screen } from '@/test-utils'

import { theme } from '../../theme'
import { Icon } from '../../icon'
import { Button } from '../index'

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
    render(<Button icon={<Icon name='add' />}>Add</Button>)
    const button = screen.getByRole('button', { name: /add/i })
    expect(button).toHaveTextContent('Add')
    expect(button.children[0]).toHaveClass('icon-add')
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
