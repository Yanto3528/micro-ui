import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { useTableContext } from './utils/context'
import { TableRowWrapper } from './views'

export const TableRow = React.forwardRef(({ children, ...props }, ref) => {
  const theme = useTheme()
  const { variant } = useTableContext()

  return (
    <TableRowWrapper
      {...theme.default.component.table.row}
      {...props}
      variant={variant}
      ref={ref}
    >
      {children}
    </TableRowWrapper>
  )
})

TableRow.propTypes = {
  /** Background color for when variant is striped */
  stripeColor: PropTypes.string,
  /** customStyle for TableRow*/
  customStyle: PropTypes.object,
}

if (isDev) {
  TableRow.displayName = 'TableRow'
}
