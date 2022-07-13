import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { HeaderWrapper } from './views'

export const ModalHeader = React.forwardRef(({ children, ...props }, ref) => {
  const theme = useTheme()

  return (
    <HeaderWrapper
      {...theme.default.component.modal.header}
      {...props}
      ref={ref}
      data-testid='modal-header'
    >
      {children}
    </HeaderWrapper>
  )
})

ModalHeader.propTypes = {
  /** By default it has linear-gradient color */
  bgImage: PropTypes.string,
  /** Background color */
  bg: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  ModalHeader.displayName = 'ModalHeader'
}
