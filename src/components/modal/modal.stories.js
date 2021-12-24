import React, { useState } from 'react'

import { Modal } from './index'
import { Button } from '../button'

export default {
  title: 'Components/Others/Modal',
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
      <Modal.Close position='left' />
      <Modal.Title>Delete Post</Modal.Title>
      <Modal.Content>
        <Modal.Body>Are you sure you want to delete this?</Modal.Body>
        <Modal.Actions>
          <Button bg='gray.200' color='dark'>
            Cancel
          </Button>
          <Button>Confirm</Button>
        </Modal.Actions>
      </Modal.Content>
    </BaseModal>
  )
}

export const WithHeader = () => {
  return (
    <BaseModal>
      <Modal.Close position='left' color='white' />
      <Modal.Header>Delete Post</Modal.Header>
      {/* <Modal.Title>Delete Post</Modal.Title> */}
      <Modal.Content>
        <Modal.Body>Are you sure you want to delete this?</Modal.Body>
        <Modal.Actions>
          <Button bg='gray.200' color='dark'>
            Cancel
          </Button>
          <Button>Confirm</Button>
        </Modal.Actions>
      </Modal.Content>
    </BaseModal>
  )
}
