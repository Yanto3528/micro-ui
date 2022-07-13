import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { Text } from './views'

export const ModalText = React.forwardRef(({ children, ...props }, ref) => {
  const theme = useTheme()
  return (
    <Text {...theme.default.component.modal.text} {...props} ref={ref}>
      {children}
    </Text>
  )
})

ModalText.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  margin: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  ModalText.displayName = 'ModalText'
}
