import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { CloseWrapper, CloseIcon } from './views'
import { useModalContext } from './index'

export const ModalClose = React.forwardRef(({ icon, ...props }, ref) => {
  const { onClose } = useModalContext()
  const theme = useTheme()
  return (
    <CloseWrapper
      {...theme.default.component.modal.close}
      onClick={onClose}
      {...props}
      ref={ref}
    >
      {icon ? icon : <CloseIcon />}
    </CloseWrapper>
  )
})

ModalClose.propTypes = {
  /** Any element, svg, span, etc */
  icon: Element,
  /** Background color for icon wrapper */
  bg: PropTypes.string,
  /** The color for default close icon if no icon specified */
  color: PropTypes.string,
  /** Border radius for the icon wrapper */
  radius: PropTypes.string,
}

if (isDev) {
  ModalClose.displayName = 'ModalClose'
}
