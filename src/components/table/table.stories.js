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
    <Table>
      <Table.Head>
        <Table.Header>Test</Table.Header>
        <Table.Header>Test 2</Table.Header>
        <Table.Header>Test 3</Table.Header>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Data>Data Test</Table.Data>
          <Table.Data>Data Test 2</Table.Data>
          <Table.Data>Data Test 3</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>Data Test</Table.Data>
          <Table.Data>Data Test 2</Table.Data>
          <Table.Data>Data Test 3</Table.Data>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
