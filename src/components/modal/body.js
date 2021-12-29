import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { Alignment } from './utils/constants'
import { Body } from './views'

export const ModalBody = React.forwardRef(({ children, ...props }, ref) => {
  const theme = useTheme()
  return (
    <Body
      {...theme.default.component.modal.body}
      {...props}
      ref={ref}
      data-testid='modal-body'
    >
      {children}
    </Body>
  )
})

ModalBody.propTypes = {
  padding: PropTypes.string,
  /** Alignment of the content, left | center | right */
  alignment: PropTypes.oneOf(Object.keys(Alignment)),
  customStyle: PropTypes.object,
}

if (isDev) {
  ModalBody.displayName = 'ModalBody'
}
