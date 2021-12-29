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
    Text: Modal.Text,
    Actions: Modal.Actions,
  },
}

const UI = {
  Button: Button,
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
        {components.map((component, componentIndex) => {
          const ChildComponent = component.type.includes('Modal')
            ? Modal[component.type.split('.')[1]]
            : UI[component.type]

          if (ChildComponent) {
            return component.components ? (
              <ChildComponent key={componentIndex}>
                {component.components.map((nestedChild, nestedChildIndex) => {
                  const NestedChildComponent = nestedChild.type.includes(
                    'Modal'
                  )
                    ? Modal[nestedChild.type.split('.')[1]]
                    : UI[nestedChild.type]

                  if (NestedChildComponent) {
                    return nestedChild.components ? (
                      <NestedChildComponent key={nestedChildIndex}>
                        {nestedChild.components.map(
                          (descendantChild, descendantChildIndex) => {
                            const DescendantChildComponent =
                              descendantChild.type.includes('Modal')
                                ? Modal[descendantChild.type.split('.')[1]]
                                : UI[descendantChild.type]

                            return (
                              DescendantChildComponent && (
                                <DescendantChildComponent
                                  key={descendantChildIndex}
                                  {...descendantChild.props}
                                />
                              )
                            )
                          }
                        )}
                      </NestedChildComponent>
                    ) : (
                      <NestedChildComponent
                        key={nestedChildIndex}
                        {...nestedChild.props}
                      />
                    )
                  }
                })}
              </ChildComponent>
            ) : (
              <ChildComponent key={componentIndex} {...component.props} />
            )
          } else {
            return null
          }
        })}
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
