import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { TableHeaderWrapper } from './views'

export const TableHeader = React.forwardRef(({ children, ...props }, ref) => {
  const theme = useTheme()
  return (
    <TableHeaderWrapper
      {...theme.default.component.table.header}
      {...props}
      ref={ref}
    >
      {children}
    </TableHeaderWrapper>
  )
})

TableHeader.propTypes = {
  /** Alignment for the TableHeader, ex: center, left, right. */
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  /** Specify TableHeader width */
  width: PropTypes.string,
  /** customStyle for TableRow*/
  customStyle: PropTypes.object,
  /** TableHeader background-color */
  bg: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  /** Give TableHeader a full width of the current container*/
  fluid: PropTypes.bool,
}

if (isDev) {
  TableHeader.displayName = 'TableHeader'
}
