import React from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen, within, waitFor } from '@/test-utils'

import { Button } from '../../button'
import { Toaster, toast } from '../index'

/* eslint-disable */
const BaseToast = (props) => {
  const onShowToast = () => {
    toast({
      title: props.title ?? 'Success',
      description: props.description ?? 'Successfully saved data',
      duration: props.duration,
      status: props.status ?? 'success',
      position: props.position ?? 'top',
    })
  }

  return (
    <>
      <Button onClick={onShowToast}>Show toast</Button>
      <Toaster {...props} />
    </>
  )
}
/* eslint-enable */

describe('components > Toaster', () => {
  it('should render correctly', () => {
    render(<BaseToast />)

    const toasterContainer = screen.getByTestId('toaster-container')

    expect(toasterContainer).toBeInTheDocument()
    expect(toasterContainer.children.length).toBe(0)
  })

  it('should be able to show toast when click on show toast button', async () => {
    render(<BaseToast duration={1000} />)

    const button = screen.getByRole('button', { name: /show toast/i })

    userEvent.click(button)

    const alert = screen.queryByTestId('toaster-alert')
    expect(alert).toBeInTheDocument()
    expect(within(alert).getByText('Success')).toBeInTheDocument()
    expect(within(alert).getByText(/successfully/i)).toBeInTheDocument()
    expect(within(alert).getByTestId('alert-close')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.queryByTestId('toaster-alert')).not.toBeInTheDocument()
    })
  })

  it('should be able to show toast with only title', () => {
    render(<BaseToast description='' />)

    const button = screen.getByRole('button', { name: /show toast/i })

    userEvent.click(button)

    const alert = screen.queryByTestId('toaster-alert')
    expect(within(alert).getByText('Success')).toBeInTheDocument()
    expect(within(alert).queryByText(/successfully/i)).not.toBeInTheDocument()
    expect(within(alert).getByTestId('alert-close')).toBeInTheDocument()
  })

  it('should be able to show toast with only description', () => {
    render(<BaseToast title='' />)

    const button = screen.getByRole('button', { name: /show toast/i })

    userEvent.click(button)

    const alert = screen.queryByTestId('toaster-alert')
    expect(within(alert).queryByText('Success')).not.toBeInTheDocument()
    expect(within(alert).getByText(/successfully/i)).toBeInTheDocument()
    expect(within(alert).getByTestId('alert-close')).toBeInTheDocument()
  })

  it('should be able to show toast with custom element', () => {
    render(
      <BaseToast
        title=''
        render={() => {
          return (
            <div data-testid='custom-toast'>
              <h1>Custom toast</h1>
            </div>
          )
        }}
      />
    )

    const button = screen.getByRole('button', { name: /show toast/i })

    userEvent.click(button)

    const alert = screen.queryByTestId('toaster-alert')
    expect(alert).not.toBeInTheDocument()

    const customAlert = screen.getByTestId('custom-toast')
    expect(customAlert).toBeInTheDocument()
  })

  it('should be able to delete specific toast', () => {
    render(<BaseToast title='' />)

    const button = screen.getByRole('button', { name: /show toast/i })
    const toasterContainer = screen.getByTestId('toaster-container')

    userEvent.click(button)
    userEvent.click(button)
    userEvent.click(button)

    expect(toasterContainer.children.length).toBe(3)
    const secondAlert = toasterContainer.children[1]
    const closeIcon = within(secondAlert).getByTestId('alert-close')
    userEvent.click(closeIcon)

    expect(toasterContainer.children.length).toBe(2)
  })

  it('should be able to display correct position', () => {
    const { rerender } = render(<BaseToast position='top-left' />)

    const toasterContainer = screen.getByTestId('toaster-container')
    expect(toasterContainer).toHaveStyle({
      top: '2rem',
      left: '2rem',
    })

    rerender(<BaseToast position='top' />)
    expect(toasterContainer).toHaveStyle({
      top: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
    })

    rerender(<BaseToast position='top-right' />)
    expect(toasterContainer).toHaveStyle({
      top: '2rem',
      right: '2rem',
    })

    rerender(<BaseToast position='bottom-left' />)
    expect(toasterContainer).toHaveStyle({
      bottom: '2rem',
      left: '2rem',
    })

    rerender(<BaseToast position='bottom' />)
    expect(toasterContainer).toHaveStyle({
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
    })

    rerender(<BaseToast position='bottom-right' />)
    expect(toasterContainer).toHaveStyle({
      bottom: '2rem',
      right: '2rem',
    })
  })

  it('shold be able to update existing toast', () => {
    const UpdateToast = (props) => {
      const onClick1 = () => {
        toast({
          id: '1',
          title: `Success 1`,
          duration: 5000,
        })
      }

      const onClick2 = () => {
        toast({
          id: '2',
          title: `Success 2`,
          duration: 5000,
        })
      }

      return (
        <>
          <Button onClick={onClick1}>Show Toast 1</Button>
          <Button onClick={onClick2}>Show Toast 2</Button>
          <Toaster {...props} />
        </>
      )
    }
    render(<UpdateToast />)

    const button1 = screen.getByRole('button', { name: /show toast 1/i })
    const button2 = screen.getByRole('button', { name: /show toast 2/i })

    userEvent.click(button1)

    const alert = screen.getByTestId('toaster-alert')
    expect(within(alert).getByText('Success 1')).toBeInTheDocument()

    userEvent.click(button2)
    userEvent.click(button1)
    const alerts = screen.getAllByTestId('toaster-alert')
    expect(alerts.length).toBe(2)
  })

  it('should render with custom style', () => {
    const customStyle = {
      gap: '5rem',
      padding: '2rem',
    }
    render(<BaseToast customStyle={customStyle} />)

    const toasterContainer = screen.getByTestId('toaster-container')
    expect(toasterContainer).toHaveStyle({
      gap: '5rem',
      padding: '2rem',
    })
  })

  it('should not show icon if wrong status is passed in', () => {
    jest.spyOn(console, 'error').mockImplementation(() => jest.fn())
    render(<BaseToast title='' status='non-existent-status' />)

    const button = screen.getByRole('button', { name: /show toast/i })

    userEvent.click(button)

    const alert = screen.queryByTestId('toaster-alert')
    expect(alert.children.length).toBe(3)
    jest.restoreAllMocks()
  })
})
