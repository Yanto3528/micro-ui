import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { Content } from './views'

export const Alignment = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

export const ModalContent = React.forwardRef(({ children, ...props }, ref) => {
  const theme = useTheme()
  return (
    <Content {...theme.default.component.modal.content} {...props} ref={ref}>
      {children}
    </Content>
  )
})

ModalContent.propTypes = {
  padding: PropTypes.string,
  /** Alignment of the content, left | center | right */
  alignment: PropTypes.oneOf(Object.keys(Alignment)),
}

if (isDev) {
  ModalContent.displayName = 'ModalContent'
}
