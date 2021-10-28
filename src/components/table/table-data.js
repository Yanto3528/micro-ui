import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { TableDataWrapper } from './views'

export const TableData = React.forwardRef(({ children, ...props }, ref) => {
  const theme = useTheme()
  return (
    <TableDataWrapper
      {...theme.default.component.table.data}
      {...props}
      ref={ref}
    >
      {children}
    </TableDataWrapper>
  )
})

TableData.propTypes = {
  /** Specify TableData width */
  width: PropTypes.string,
  /** Give table a full width of the current container*/
  fluid: PropTypes.bool,
  /** Specify TableData padding */
  padding: PropTypes.string,
  /** Specify TableData border */
  border: PropTypes.string,
  /** Centering specifed TableData */
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  cursor: PropTypes.string,
  lineHeight: PropTypes.string,
  /** Alignment for the Tabledata, ex: center, left, right. */
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
}

if (isDev) {
  TableData.displayName = 'TableData'
}
