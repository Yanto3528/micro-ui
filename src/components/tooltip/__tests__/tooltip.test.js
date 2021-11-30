import React from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen, fireEvent, waitFor } from '@/test-utils'

import { theme } from '../../theme'
import { Tooltip } from '../index'

describe('component > Tooltip', () => {
  it('should render correctly', () => {
    render(<Tooltip content='tooltip content'>Hover me</Tooltip>)
    const hoverText = screen.getByText(/hover me/i)
    expect(hoverText).toBeInTheDocument()
    userEvent.hover(hoverText)
    const tooltipContent = screen.getByTestId('tooltip-content')
    expect(tooltipContent).toBeInTheDocument()
  })

  it('should be able to hover/unhover and show/hide tooltip content', async () => {
    render(<Tooltip content='tooltip content'>Hover me</Tooltip>)
    const hoverText = screen.getByText(/hover me/i)
    userEvent.hover(hoverText)

    let tooltipContent = screen.getByTestId('tooltip-content')
    expect(tooltipContent).toBeInTheDocument()
    expect(tooltipContent).toHaveStyle({
      top: '-10px',
      left: '50%',
      transform: 'translate(-50%,-100%)',
    })

    userEvent.unhover(hoverText)
    fireEvent.animationEnd(screen.getByTestId('animate-tooltip-wrapper'))
    await waitFor(() => {
      expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument()
    })

    userEvent.hover(hoverText)
    tooltipContent = screen.getByTestId('tooltip-content')
    expect(tooltipContent).toBeInTheDocument()
  })

  it('should render with all types of placement', async () => {
    // Top start
    const { rerender } = render(
      <Tooltip content='tooltip content' placement='top-start'>
        Hover me
      </Tooltip>
    )
    const hoverText = screen.getByText(/hover me/i)
    userEvent.hover(hoverText)

    const tooltipContent = screen.getByTestId('tooltip-content')
    expect(tooltipContent).toHaveStyle({
      top: '-10px',
      left: '0',
      transform: 'translateY(-100%)',
    })

    const tooltipProps = [
      {
        placement: 'top',
        expectedStyle: {
          top: '-10px',
          left: '50%',
          transform: 'translate(-50%,-100%)',
        },
      },
      {
        placement: 'top-end',
        expectedStyle: {
          top: '-10px',
          right: '0',
          transform: 'translateY(-100%)',
        },
      },
      {
        placement: 'bottom-start',
        expectedStyle: {
          bottom: '-10px',
          left: '0',
          transform: 'translateY(100%)',
        },
      },
      {
        placement: 'bottom',
        expectedStyle: {
          bottom: '-10px',
          left: '50%',
          transform: 'translate(-50%,100%)',
        },
      },
      {
        placement: 'bottom-end',
        expectedStyle: {
          bottom: '-10px',
          right: '0',
          transform: 'translateY(100%)',
        },
      },
      {
        placement: 'left-start',
        expectedStyle: {
          top: '0',
          left: '-10px',
          transform: 'translateX(-100%)',
        },
      },
      {
        placement: 'left',
        expectedStyle: {
          top: '50%',
          left: '-10px',
          transform: 'translate(-100%,-50%)',
        },
      },
      {
        placement: 'left-end',
        expectedStyle: {
          bottom: '0',
          left: '-10px',
          transform: 'translateX(-100%)',
        },
      },
      {
        placement: 'right-start',
        expectedStyle: {
          top: '0',
          right: '-10px',
          transform: 'translateX(100%)',
        },
      },
      {
        placement: 'right',
        expectedStyle: {
          top: '50%',
          right: '-10px',
          transform: 'translate(100%,-50%)',
        },
      },
      {
        placement: 'right-end',
        expectedStyle: {
          bottom: '0',
          right: '-10px',
          transform: 'translateX(100%)',
        },
      },
    ]

    tooltipProps.forEach(({ placement, expectedStyle }) => {
      rerender(
        <Tooltip content='tooltip content' placement={placement}>
          Hover me
        </Tooltip>
      )
      expect(tooltipContent).toHaveStyle(expectedStyle)
    })
  })

  it('should render with/without arrow', () => {
    const { rerender } = render(
      <Tooltip content='tooltip content'>Hover me</Tooltip>
    )
    const hoverText = screen.getByText(/hover me/i)
    userEvent.hover(hoverText)
    let tooltipArrow = screen.getByTestId('tooltip-arrow')
    expect(tooltipArrow).toBeInTheDocument()

    rerender(
      <Tooltip content='tooltip content' hasArrow={false}>
        Hover me
      </Tooltip>
    )
    tooltipArrow = screen.queryByTestId('tooltip-arrow')
    expect(tooltipArrow).not.toBeInTheDocument()
  })

  it('should render with style props', () => {
    const { rerender } = render(
      <Tooltip content='tooltip content' rounded>
        Hover me
      </Tooltip>
    )
    const hoverText = screen.getByText(/hover me/i)
    userEvent.hover(hoverText)

    const tooltipContent = screen.getByTestId('tooltip-content')
    expect(tooltipContent).toHaveStyle({
      'border-radius': '50px',
      'background-color': theme.colors.secondary,
    })

    // Rounded is higher priority than radius, so radius will not have effect here
    rerender(
      <Tooltip content='tooltip content' rounded radius='8px'>
        Hover me
      </Tooltip>
    )
    expect(tooltipContent).toHaveStyle({
      'border-radius': '50px',
    })

    rerender(
      <Tooltip
        content='tooltip content'
        width='400px'
        height='200px'
        radius='8px'
        padding='20px'
        customStyle={{
          'margin-bottom': '20px',
        }}
      />
    )
    expect(tooltipContent).toHaveStyle({
      width: '400px',
      height: '200px',
      padding: '20px',
      'border-radius': '8px',
      'margin-bottom': '20px',
    })
  })
})
