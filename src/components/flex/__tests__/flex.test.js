import React from 'react'

import { render, screen } from '@/test-utils'

import { Flex } from '../index'

const BaseFlex = (props) => {
  return (
    <Flex {...props}>
      <div>Box 1</div>
      <div>Box 2</div>
      <div>Box 3</div>
    </Flex>
  )
}

describe('components > Flex', () => {
  it('should render correctly', () => {
    render(<BaseFlex />)

    const flex = screen.getByTestId('flex-container')

    expect(flex).toBeInTheDocument()
    expect(flex.children.length).toBe(3)
  })

  it('should render with customStyle', () => {
    const { rerender } = render(<BaseFlex />)

    let flex = screen.getByTestId('flex-container')

    expect(flex).toHaveStyle({
      display: 'flex',
      gap: '2rem',
      'align-items': 'center',
      'justify-content': 'flex-start',
      'flex-wrap': 'nowrap',
      'flex-direction': 'row',
    })

    rerender(
      <BaseFlex customStyle={{ padding: '20px', 'flex-wrap': 'wrap' }} />
    )
    flex = screen.getByTestId('flex-container')
    expect(flex).toHaveStyle({
      padding: '20px',
      'flex-wrap': 'wrap',
    })
  })
})
