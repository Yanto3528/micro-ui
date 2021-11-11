import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { Body } from './views'

export const ModalBody = React.forwardRef(({ children, ...props }, ref) => {
  const theme = useTheme()
  return (
    <Body {...theme.default.component.modal.body} {...props} ref={ref}>
      {children}
    </Body>
  )
})

ModalBody.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  margin: PropTypes.string,
}

if (isDev) {
  ModalBody.displayName = 'ModalBody'
}
