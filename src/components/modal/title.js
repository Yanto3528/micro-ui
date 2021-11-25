import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { Title } from './views'

export const ModalTitle = React.forwardRef(({ children, ...props }, ref) => {
  const theme = useTheme()
  return (
    <Title {...theme.default.component.modal.title} {...props} ref={ref}>
      {children}
    </Title>
  )
})

ModalTitle.propTypes = {
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string,
  margin: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  ModalTitle.displayName = 'ModalTitle'
}
