import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { Alignment } from './utils/constants'
import { Content } from './views'

export const ModalContent = React.forwardRef(({ children, ...props }, ref) => {
  const theme = useTheme()
  return (
    <Content
      {...theme.default.component.modal.content}
      {...props}
      ref={ref}
      data-testid='modal-content'
    >
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
