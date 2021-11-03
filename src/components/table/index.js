import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { getProps } from '../../utils'

import { TableContext } from './utils/context'
import { THead } from './thead'
import { TableHeader } from './table-header'
import { TBody } from './tbody'
import { TableRow } from './table-row'
import { TableData } from './table-data'
import { TableWrapper } from './views'

export const Table = React.forwardRef(({ children, ...props }, ref) => {
  const theme = useTheme()
  const {
    table: { wrapper: defaultTableWrapperProps },
  } = theme.default.component

  const variantProps = getProps(props, defaultTableWrapperProps, ['variant'])

  const value = useMemo(() => {
    return {
      ...variantProps,
    }
  }, [variantProps])

  return (
    <TableContext.Provider value={value}>
      <TableWrapper
        {...theme.default.component.table.wrapper}
        {...props}
        ref={ref}
      >
        {children}
      </TableWrapper>
    </TableContext.Provider>
  )
})

Table.propTypes = {
  /** Specify table width */
  width: PropTypes.string,
  /** Specify table border */
  border: PropTypes.string,
  /** Specify border-spacing for the table*/
  borderSpacing: PropTypes.number,
  /** Give Table a full width of the current container*/
  fluid: PropTypes.bool,
}

Table.Head = THead
Table.Header = TableHeader
Table.Body = TBody
Table.Row = TableRow
Table.Data = TableData

if (isDev) {
  Table.displayName = 'Table'
}
