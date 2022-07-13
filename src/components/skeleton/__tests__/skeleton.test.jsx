import React from 'react'

import { render, screen } from '@/test-utils'

import { theme } from '../../theme'
import { Skeleton } from '../index'

describe('components > Skeleton', () => {
  it('should render correctly', () => {
    render(<Skeleton />)
    const loadingSkeleton = screen.getByLabelText(/loading/i)
    expect(loadingSkeleton).toBeInTheDocument()
  })

  it('should render multiple loading skeleton when passed in count props', () => {
    const { rerender } = render(<Skeleton count={3} />)
    let loadingSkeletons = screen.getAllByLabelText(/loading/i)
    expect(loadingSkeletons.length).toBe(3)

    rerender(<Skeleton count={0} />)
    loadingSkeletons = screen.queryAllByLabelText(/loading/i)
    expect(loadingSkeletons.length).toBe(1)
  })

  it('should render circle skeleton when passed in circle props', () => {
    render(<Skeleton circle />)
    const loadingSkeleton = screen.getByLabelText(/loading/i)
    expect(loadingSkeleton).toHaveStyle({
      'border-radius': '50%',
    })
  })

  it('should render with customStyle', () => {
    const skeletonCustomStyle = {
      padding: '20px',
    }

    render(
      <Skeleton
        width='100px'
        height='30px'
        bg='primary'
        radius='6px'
        customStyle={skeletonCustomStyle}
      />
    )
    const loadingSkeleton = screen.getByLabelText(/loading/i)

    expect(loadingSkeleton).toHaveStyle({
      width: '100px',
      height: '30px',
      'background-color': theme.colors.primary,
      padding: '20px',
      'border-radius': '6px',
    })
  })
})
