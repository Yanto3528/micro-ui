import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { ActionsWrapper } from './views'

export const Position = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

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
  /** specify the position for the alignment of buttons */
  position: PropTypes.oneOf(Object.keys(Position)),
  /** Spacing for each of the button */
  spacing: PropTypes.string,
}

if (isDev) {
  ModalActions.displayName = 'ModalActions'
}
