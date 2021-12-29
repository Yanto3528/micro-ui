import React, { useState } from 'react'

import { RenderComponent } from '../../storybook-helpers'
import { Button } from '../button'
import { Modal } from './index'

export default {
  title: 'Components/Others/Modal',
  component: Modal,
  subcomponents: {
    Title: Modal.Title,
    Close: Modal.Close,
    Body: Modal.Body,
    Text: Modal.Text,
    Actions: Modal.Actions,
  },
}

/* eslint-disable */
const Template = ({ components, ...args }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={onClose}>
        <RenderComponent components={components} parentComponent={Modal} />
      </Modal>
    </>
  )
}
/* eslint-enable */

export const Default = Template.bind({})
Default.args = {
  components: [
    {
      type: 'Modal.Close',
    },
    {
      type: 'Modal.Title',
      props: {
        children: 'Delete Post',
      },
    },
    {
      type: 'Modal.Body',
      components: [
        {
          type: 'Modal.Text',
          props: {
            children: 'Are you sure you want to delete this?',
          },
        },
        {
          type: 'Modal.Actions',
          components: [
            {
              type: 'Button',
              props: {
                bg: 'gray.200',
                color: 'dark',
                children: 'Cancel',
              },
            },
            {
              type: 'Button',
              props: {
                children: 'Confirm',
              },
            },
          ],
        },
      ],
    },
  ],
}

export const WithHeader = Template.bind({})
WithHeader.args = {
  components: [
    {
      type: 'Modal.Close',
      props: {
        color: 'white',
      },
    },
    {
      type: 'Modal.Header',
      props: {
        children: 'Delete Post',
      },
    },
    {
      type: 'Modal.Body',
      components: [
        {
          type: 'Modal.Text',
          props: {
            children: 'Are you sure you want to delete this?',
          },
        },
        {
          type: 'Modal.Actions',
          components: [
            {
              type: 'Button',
              props: {
                bg: 'gray.200',
                color: 'dark',
                children: 'Cancel',
              },
            },
            {
              type: 'Button',
              props: {
                children: 'Confirm',
              },
            },
          ],
        },
      ],
    },
  ],
}
