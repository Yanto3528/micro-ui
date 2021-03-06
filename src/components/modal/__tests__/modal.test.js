import React from 'react'
import userEvent from '@testing-library/user-event'
import { X as CloseIcon } from 'react-feather'

import { render, screen, fireEvent, waitFor } from '@/test-utils'
import { useToggle } from '@/hooks'

import { Button } from '../../button'
import { Modal } from '../index'

const BaseModal = ({ children, ...props }) => {
  const [isOpen, { onOpen, onClose }] = useToggle(false)

  return (
    <>
      <Button onClick={onOpen}>Toggle modal</Button>
      <Modal {...props} isOpen={isOpen} onClose={onClose}>
        {children}
      </Modal>
    </>
  )
}

describe('components > Modal', () => {
  it('should render correctly', () => {
    render(
      <BaseModal>
        <Modal.Close />
        <Modal.Header>Modal Header</Modal.Header>
        <Modal.Body>
          <Modal.Title>We are sorry</Modal.Title>
          <Modal.Text>Modal text</Modal.Text>
          <Modal.Actions>
            <Button>Back to Home</Button>
          </Modal.Actions>
        </Modal.Body>
      </BaseModal>
    )

    const button = screen.getByRole('button', { name: /toggle modal/i })
    userEvent.click(button)

    const modalWrapper = screen.getByTestId('modal-wrapper')
    const modalClose = screen.getByTestId('modal-close')
    const modalHeader = screen.getByTestId('modal-header')
    const modalBody = screen.getByTestId('modal-body')
    const modalTitle = screen.getByText(/we are sorry/i)
    const modalText = screen.getByText(/modal text/i)
    const modalActions = screen.getByTestId('modal-action')

    expect(modalWrapper).toBeInTheDocument()
    expect(modalClose).toBeInTheDocument()
    expect(modalHeader).toBeInTheDocument()
    expect(modalHeader).toHaveTextContent('Modal Header')
    expect(modalBody).toBeInTheDocument()
    expect(modalTitle).toBeInTheDocument()
    expect(modalText).toBeInTheDocument()
    expect(modalActions).toBeInTheDocument()
  })

  it('should be able to open and close modal', async () => {
    render(
      <BaseModal>
        <Modal.Close icon={<CloseIcon />} />
        <Modal.Body>
          <Modal.Text>Modal text</Modal.Text>
        </Modal.Body>
      </BaseModal>
    )

    let modalWrapper = screen.queryByTestId('modal-wrapper')
    expect(modalWrapper).not.toBeInTheDocument()
    const button = screen.getByRole('button', { name: /toggle modal/i })
    userEvent.click(button)
    modalWrapper = screen.getByTestId('modal-wrapper')
    expect(modalWrapper).toBeInTheDocument()

    // Close modal by clicking on the overlay
    const modalOverlay = screen.getByTestId('modal-overlay')
    userEvent.click(modalOverlay)
    fireEvent.animationEnd(screen.getByTestId('animate-modal-wrapper'))
    await waitFor(() => {
      expect(screen.queryByTestId('modal-wrapper')).not.toBeInTheDocument()
    })

    // Close modal by clicking on close icon
    userEvent.click(button)
    modalWrapper = screen.getByTestId('modal-wrapper')
    expect(modalWrapper).toBeInTheDocument()
    const modalClose = screen.getByTestId('modal-close')
    expect(modalClose.children[0]).toBeInTheDocument()
    userEvent.click(modalClose)
    fireEvent.animationEnd(screen.getByTestId('animate-modal-wrapper'))
    await waitFor(() => {
      expect(screen.queryByTestId('modal-wrapper')).not.toBeInTheDocument()
    })
  })

  it('should render with customStyle', () => {
    const modalProps = {
      wrapper: {
        radius: '8px',
        customStyle: {
          padding: '10px',
        },
      },
      close: {
        radius: '4px',
        customStyle: {
          margin: '10px',
        },
      },
      header: {
        customStyle: {
          'margin-bottom': '10px',
        },
      },
      body: {
        padding: '20px',
        customStyle: {
          margin: '10px',
        },
      },
      title: {
        margin: '30px',
        customStyle: {
          'text-transform': 'uppercase',
        },
      },
      text: {
        margin: '20px',
        customStyle: {
          padding: '10px',
        },
      },
      actions: {
        customStyle: {
          padding: '20px',
        },
      },
    }
    const { wrapper, close, header, body, title, text, actions } = modalProps
    render(
      <Modal isOpen {...modalProps.wrapper}>
        <Modal.Close {...modalProps.close} />
        <Modal.Header {...modalProps.header}>Modal Header</Modal.Header>
        <Modal.Body {...modalProps.body}>
          <Modal.Title {...modalProps.title}>We are sorry</Modal.Title>
          <Modal.Text {...modalProps.text}>Modal text</Modal.Text>
          <Modal.Actions {...modalProps.actions}>
            <Button>Back to Home</Button>
          </Modal.Actions>
        </Modal.Body>
      </Modal>
    )

    const modalWrapper = screen.getByTestId('modal-wrapper')
    const modalClose = screen.getByTestId('modal-close')
    const modalHeader = screen.getByTestId('modal-header')
    const modalBody = screen.getByTestId('modal-body')
    const modalTitle = screen.getByText(/we are sorry/i)
    const modalText = screen.getByText(/modal text/i)
    const modalActions = screen.getByTestId('modal-action')

    expect(modalWrapper).toHaveStyle({
      'border-radius': wrapper.radius,
      padding: wrapper.customStyle.padding,
    })

    expect(modalClose).toHaveStyle({
      'border-radius': close.radius,
      margin: close.customStyle.margin,
    })

    expect(modalHeader).toHaveStyle({
      'margin-bottom': header.customStyle['margin-bottom'],
    })

    expect(modalBody).toHaveStyle({
      padding: body.padding,
      margin: body.customStyle.margin,
    })

    expect(modalTitle).toHaveStyle({
      margin: title.margin,
      'text-transform': title.customStyle['text-transform'],
    })

    expect(modalText).toHaveStyle({
      margin: text.margin,
      padding: text.customStyle.padding,
    })

    expect(modalActions).toHaveStyle({
      padding: actions.customStyle.padding,
    })
  })

  it('should throw an error when using <Modal.Close /> outside of Modal component', () => {
    jest.spyOn(console, 'error').mockImplementation(() => jest.fn())
    expect(() => render(<Modal.Close />)).toThrow()
    jest.restoreAllMocks()
  })
})
