import React from 'react'

import { render, screen } from '@/test-utils'

import { Grid } from '../index'

const BaseGrid = (props) => (
  <Grid {...props}>
    <div>Box 1</div>
    <div>Box 2</div>
    <div>Box 3</div>
  </Grid>
)

describe('components > Grid', () => {
  it('should render correctly', () => {
    render(<BaseGrid />)

    const gridContainer = screen.getByTestId('grid-container')
    expect(gridContainer).toBeInTheDocument()
    expect(gridContainer.children.length).toBe(3)
  })

  it('should render with minChildWidth props', () => {
    const { rerender } = render(<BaseGrid minChildWidth='150px' />)

    const gridContainer = screen.getByTestId('grid-container')

    expect(gridContainer).toHaveStyle({
      'grid-template-columns': 'repeat(auto-fit,minmax(150px,1fr))',
    })

    // minChildWidth takes precedence over columns
    rerender(<BaseGrid columns={3} minChildWidth='150px' />)
    expect(gridContainer).toHaveStyle({
      'grid-template-columns': 'repeat(auto-fit,minmax(150px,1fr))',
    })
  })

  it('should with columns props', () => {
    const { rerender } = render(<BaseGrid columns={2} />)

    const gridContainer = screen.getByTestId('grid-container')

    expect(gridContainer).toHaveStyle({
      'grid-template-columns': 'repeat(2,1fr)',
    })

    rerender(<BaseGrid columns={{ md: 2, lg: 3, xl: 4 }} />)
    expect(gridContainer).toHaveStyle({
      'grid-template-columns': 'repeat(4,1fr)',
    })

    rerender(<BaseGrid columns={{}} />)
    expect(gridContainer).toHaveStyle({
      'grid-template-columns': '',
    })

    rerender(<BaseGrid columns={[]} />)
    expect(gridContainer).toHaveStyle({
      'grid-template-columns': '',
    })
  })

  it('should render with customStyle', () => {
    render(<BaseGrid customStyle={{ padding: '20px', margin: '10px' }} />)

    const grid = screen.getByTestId('grid-container')

    expect(grid).toHaveStyle({
      display: 'grid',
      gap: '2rem',
      padding: '20px',
      margin: '10px',
    })
  })
})
