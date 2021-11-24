import React from 'react'
import { Accordion } from './index'

export default {
  title: 'Utils/Accordion',
  component: Accordion,
  subcomponents: {
    Header: Accordion.Header,
    Item: Accordion.Item,
    Content: Accordion.Content,
  },
}

const BaseAccordion = ({ children, ...props }) => {
  return <Accordion {...props}>{children}</Accordion>
}

export const AccordionOpenOne = () => {
  return (
    <BaseAccordion>
      <Accordion.Item defaultOpen>
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
    </BaseAccordion>
  )
}

export const AccordionOpenMultiple = () => {
  return (
    <BaseAccordion allowMultiple>
      <Accordion.Item defaultOpen>
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item defaultOpen>
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
    </BaseAccordion>
  )
}

export const AccordionArrowRight = () => {
  return (
    <BaseAccordion allowMultiple arrowPosition='right'>
      <Accordion.Item>
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
    </BaseAccordion>
  )
}
