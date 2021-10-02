import React, { useState } from 'react'
import { Home } from 'react-feather'

import { Modal } from './index'
import { Button } from '../button'
import { Divider } from '../divider'

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
      <Modal.Header icon={<Home />} />
      <Modal.Content>
        <Modal.Title>We are sorry</Modal.Title>
        <Modal.Body>
          We apologise but we can't accept your online application due to
          following condition(s). Please approach your insurance representative
          for other options or call our customer service centre 1800-248-8000.
        </Modal.Body>
        <Modal.Actions>
          <Button bg='secondary'>Cancel</Button>
          <Button>Confirm</Button>
        </Modal.Actions>
      </Modal.Content>
    </BaseModal>
  )
}

export const WithoutHeader = () => {
  return (
    <BaseModal radius='4px'>
      <Modal.Close color='secondary' />
      <Modal.Content alignment='left'>
        <Modal.Title margin='0'>We are sorry</Modal.Title>
        <Divider />
        <Modal.Body>
          We apologise but we can't accept your online application due to
          following condition(s). Please approach your insurance representative
          for other options or call our customer service centre 1800-248-8000.
        </Modal.Body>
        <Modal.Actions position='right'>
          <Button bg='secondary'>Cancel</Button>
          <Button>Confirm</Button>
        </Modal.Actions>
      </Modal.Content>
    </BaseModal>
  )
}
