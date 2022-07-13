import React from 'react'

import { render, screen } from '@/test-utils'

import { theme } from '../../theme'
import { Table } from '../index'

/* eslint-disable */
const TableComponent = ({
  tableProps,
  tableHeaderProps,
  tableRowProps,
  tableDataProps,
}) => {
  return (
    <Table {...tableProps}>
      <Table.Head>
        <Table.Row>
          <Table.Header {...tableHeaderProps}>No</Table.Header>
          <Table.Header {...tableHeaderProps}>Name</Table.Header>
          <Table.Header {...tableHeaderProps}>Gender</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row {...tableRowProps}>
          <Table.Data {...tableDataProps}>1</Table.Data>
          <Table.Data {...tableDataProps}>John Doe</Table.Data>
          <Table.Data {...tableDataProps}>Male</Table.Data>
        </Table.Row>
        <Table.Row {...tableRowProps}>
          <Table.Data {...tableDataProps}>2</Table.Data>
          <Table.Data {...tableDataProps}>Sarah Smith</Table.Data>
          <Table.Data {...tableDataProps}>Female</Table.Data>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
/* eslint-enable */

describe('components > Table', () => {
  it('should render correctly', () => {
    render(<TableComponent />)
    const table = screen.getByRole('table')
    const rows = screen.getAllByRole('row')
    const headers = screen.getAllByRole('columnheader')
    const cells = screen.getAllByRole('cell')

    expect(table).toBeInTheDocument()
    expect(rows.length).toBe(3)
    expect(headers.length).toBe(3)
    expect(cells.length).toBe(6)
  })

  it('should render with default and striped variant', () => {
    const { rerender } = render(
      <TableComponent tableProps={{ variant: 'default' }} />
    )
    const row = screen.getByRole('row', { name: /2 sarah smith female/i })
    expect(row).not.toHaveStyle({
      'background-color': theme.colors.gray[100],
    })

    rerender(<TableComponent tableProps={{ variant: 'striped' }} />)
    expect(row).toHaveStyle({
      'background-color': theme.colors.gray[100],
    })
  })

  it('should render with customStyle', () => {
    const props = {
      tableProps: {
        fluid: true,
        customStyle: {
          'margin-bottom': '30px',
        },
      },
      tableRowProps: {
        stripeColor: 'secondary',
        customStyle: {
          padding: '20px',
        },
      },
      tableHeaderProps: {
        fluid: true,
        customStyle: {
          padding: '10px',
        },
      },
      tableDataProps: {
        fluid: true,
        alignment: 'center',
        customStyle: {
          'margin-bottom': '10px',
        },
      },
    }
    render(<TableComponent {...props} />)
    const table = screen.getByRole('table')
    const rows = screen.getAllByRole('row')
    const headers = screen.getAllByRole('columnheader')
    const cells = screen.getAllByRole('cell')

    expect(table).toHaveStyle({
      'margin-bottom': '30px',
    })

    expect(rows[1]).not.toHaveStyle({
      'background-color': theme.colors.secondary,
    })
    expect(rows[2]).toHaveStyle({
      'background-color': theme.colors.secondary,
    })

    for (let i = 0; i < headers.length; i++) {
      expect(headers[i]).toHaveStyle({
        padding: '10px',
      })
    }

    for (let i = 0; i < cells.length; i++) {
      expect(cells[i]).toHaveStyle({
        'text-align': 'center',
        'margin-bottom': '10px',
      })
    }
  })

  it('should throw an error when using <Table.Row /> outside of Table component', () => {
    vi.spyOn(console, 'error').mockImplementation(() => vi.fn())
    expect(() => render(<Table.Row />)).toThrow()
    vi.restoreAllMocks()
  })
})
