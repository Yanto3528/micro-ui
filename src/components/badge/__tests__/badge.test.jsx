import React from 'react'

import { render, screen } from '@/test-utils'

import { theme } from '../../theme'
import { Badge } from '../index'

describe('components > Badge', () => {
  it('should render correctly', () => {
    render(<Badge>Reactjs</Badge>)
    const content = screen.getByText(/reactjs/i)
    expect(content).toBeInTheDocument()
  })

  it('should render with style props', () => {
    const { rerender } = render(<Badge rounded>Success</Badge>)
    const successBadge = screen.getByText(/success/i)
    expect(successBadge).toHaveStyle({
      'border-radius': '50px',
      'text-transform': 'uppercase',
    })

    // Rounded is higher priority than radius, so radius will not have effect here
    rerender(
      <Badge rounded radius='4px'>
        Success
      </Badge>
    )
    expect(successBadge).toHaveStyle({
      'border-radius': '50px',
    })

    rerender(
      <Badge
        radius='4px'
        padding='4px'
        textTransform='lowercase'
        customStyle={{ margin: '10px', width: '100px', height: '30px' }}
      >
        Success
      </Badge>
    )
    expect(successBadge).toHaveStyle({
      'border-radius': '4px',
      padding: '4px',
      'text-transform': 'lowercase',
      margin: '10px',
      width: '100px',
      height: '30px',
    })
  })

  it('should render with outline variant', () => {
    render(<Badge variant='outline'>Success</Badge>)
    const successBadge = screen.getByText(/success/i)
    expect(successBadge).toHaveStyle({
      'background-color': 'transparent',
      'border-color': theme.colors.primary,
      color: theme.colors.primary,
    })
  })
})
