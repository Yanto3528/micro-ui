import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { useModalContext } from './utils/context'
import { CloseWrapper, CloseIcon } from './views'

export const ModalClose = React.forwardRef(({ icon, ...props }, ref) => {
  const { onClose } = useModalContext()
  const theme = useTheme()
  return (
    <CloseWrapper
      {...theme.default.component.modal.close}
      {...props}
      onClick={onClose}
      ref={ref}
      data-testid='modal-close'
    >
      {icon ? icon : <CloseIcon />}
    </CloseWrapper>
  )
})

ModalClose.propTypes = {
  /** Any element, svg, span, etc */
  icon: PropTypes.any,
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
