import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { ActionsWrapper } from './views'
import { Alignment } from './utils/constants'

export const ModalActions = React.forwardRef(({ children, ...props }, ref) => {
  const theme = useTheme()
  return (
    <ActionsWrapper
      {...theme.default.component.modal.actions}
      {...props}
      ref={ref}
    >
      {children}
    </ActionsWrapper>
  )
})

ModalActions.propTypes = {
  /** specify the alignment of buttons */
  alignment: PropTypes.oneOf(Object.keys(Alignment)),
  /** Spacing for each of the button */
  spacing: PropTypes.string,
}

if (isDev) {
  ModalActions.displayName = 'ModalActions'
}
