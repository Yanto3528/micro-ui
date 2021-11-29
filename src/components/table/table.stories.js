import React from 'react'

import { Table } from './index'

export default {
  title: 'Utils/Table',
  component: Table,
  subcomponents: {
    Head: Table.THead,
    Header: Table.TableHeader,
    Body: Table.TBody,
    Row: Table.Row,
    Data: Table.Data,
  },
}

export const Default = () => {
  return (
    <Table variant='default'>
      <Table.Head>
        <Table.Row>
          <Table.Header>No</Table.Header>
          <Table.Header>Name</Table.Header>
          <Table.Header>Gender</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Data>1</Table.Data>
          <Table.Data>John Doe</Table.Data>
          <Table.Data>Male</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>2</Table.Data>
          <Table.Data>Sarah Smith</Table.Data>
          <Table.Data>Female</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>3</Table.Data>
          <Table.Data>Steve Will</Table.Data>
          <Table.Data>Male</Table.Data>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export const Striped = () => {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header>No</Table.Header>
          <Table.Header>Name</Table.Header>
          <Table.Header>Gender</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Data>1</Table.Data>
          <Table.Data>John Doe</Table.Data>
          <Table.Data>Male</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>2</Table.Data>
          <Table.Data>Sarah Smith</Table.Data>
          <Table.Data>Female</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>3</Table.Data>
          <Table.Data>Steve Will</Table.Data>
          <Table.Data>Male</Table.Data>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
