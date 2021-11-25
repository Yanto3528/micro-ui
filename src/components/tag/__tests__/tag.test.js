import React from 'react'

import { render, screen } from '@/test-utils'

import { theme } from '../../theme'
import { Tag } from '../index'

describe('components > Portal', () => {
  it('should render correctly', () => {
    render(<Tag>Reactjs</Tag>)
    const content = screen.getByText(/reactjs/i)
    expect(content).toBeInTheDocument()
  })

  it('should render with style props', () => {
    const { rerender } = render(<Tag rounded>Success</Tag>)
    const successTag = screen.getByText(/success/i)
    expect(successTag).toHaveStyle({
      'border-radius': '50px',
      'text-transform': 'uppercase',
    })

    // Rounded is higher priority than radius, so radius will not have effect here
    rerender(
      <Tag rounded radius='4px'>
        Success
      </Tag>
    )
    expect(successTag).toHaveStyle({
      'border-radius': '50px',
    })

    rerender(
      <Tag
        radius='4px'
        padding='4px'
        textTransform='lowercase'
        customStyle={{ margin: '10px', width: '100px', height: '30px' }}
      >
        Success
      </Tag>
    )
    expect(successTag).toHaveStyle({
      'border-radius': '4px',
      padding: '4px',
      'text-transform': 'lowercase',
      margin: '10px',
      width: '100px',
      height: '30px',
    })
  })

  it('should render with outline variant', () => {
    render(<Tag variant='outline'>Success</Tag>)
    const successTag = screen.getByText(/success/i)
    expect(successTag).toHaveStyle({
      'background-color': 'transparent',
      'border-color': theme.colors.primary,
      color: theme.colors.primary,
    })
  })
})
