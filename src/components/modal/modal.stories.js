import React, { useState } from 'react'
import { Home } from 'react-feather'

import { Modal } from './index'
import { Button } from '../button'

export default {
  title: 'Utils/Modal',
  component: Modal,
  subcomponents: {
    Title: Modal.Title,
    Close: Modal.Close,
    Body: Modal.Body,
    Content: Modal.Content,
    Actions: Modal.Actions,
  },
}

const BaseModal = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} {...props}>
        {children}
      </Modal>
    </>
  )
}

export const Default = () => {
  return (
    <BaseModal>
      <Modal.Close />
      <Modal.Header icon={<Home />}>Modal Header</Modal.Header>
      <Modal.Content>
        <Modal.Title>We are sorry</Modal.Title>
        <Modal.Body>
          We apologise but we can&apos;t accept your online application due to
          following condition(s). Please approach your insurance representative
          for other options or call our customer service centre 1800-248-8000.
        </Modal.Body>
        <Button>Back to Home</Button>
      </Modal.Content>
    </BaseModal>
  )
}

export const AIA = () => {
  return (
    <BaseModal radius='4px'>
      <Modal.Close position='left' />
      <Modal.Header bg='primary' height='60px'>
        Modal Header
      </Modal.Header>
      <Modal.Content padding='20px' alignment='left'>
        <Modal.Body>
          We apologise but we can&apos;t accept your online application due to
          following condition(s). Please approach your insurance representative
          for other options or call our customer service centre 1800-248-8000.
        </Modal.Body>
        <Modal.Actions alignment='right'>
          <Button bg='secondary' rounded={false} radius='4px'>
            Cancel
          </Button>
          <Button rounded={false} radius='4px'>
            Confirm
          </Button>
        </Modal.Actions>
      </Modal.Content>
    </BaseModal>
  )
}
