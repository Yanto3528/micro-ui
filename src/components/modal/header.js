import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { HeaderWrapper, HeaderIconWrapper } from './views'

export const ModalHeader = React.forwardRef(
  ({ icon, iconWrapperProps, children, ...props }, ref) => {
    const theme = useTheme()
    const headerIconProps =
      theme.default.component.modal.header.iconWrapperProps

    return (
      <HeaderWrapper
        {...theme.default.component.modal.header}
        {...props}
        ref={ref}
        data-testid='modal-header'
      >
        {icon && (
          <HeaderIconWrapper {...headerIconProps} {...iconWrapperProps}>
            {icon}
          </HeaderIconWrapper>
        )}
        {children}
      </HeaderWrapper>
    )
  }
)

ModalHeader.propTypes = {
  /** Any element for this icon */
  icon: PropTypes.any,
  /** By default it has linear-gradient color */
  bgImage: PropTypes.string,
  /** Style for the icon wrapper */
  iconWrapperProps: PropTypes.shape({
    /** background color for icon wrapper */
    bg: PropTypes.string,
    /** box shadow for icon wrapper */
    boxShadow: PropTypes.string,
    /** padding for icon wrapper */
    padding: PropTypes.string,
  }),
}

if (isDev) {
  ModalHeader.displayName = 'ModalHeader'
}
