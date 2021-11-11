import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { HeaderWrapper, HeaderIconWrapper } from './views'

export const ModalHeader = React.forwardRef(
  ({ icon, iconWrapperStyle, ...props }, ref) => {
    const theme = useTheme()
    const headerIconProps =
      theme.default.component.modal.header.iconWrapperStyle

    return (
      <HeaderWrapper
        {...theme.default.component.modal.header}
        {...props}
        ref={ref}
      >
        {icon && (
          <HeaderIconWrapper {...headerIconProps} {...iconWrapperStyle}>
            {icon}
          </HeaderIconWrapper>
        )}
      </HeaderWrapper>
    )
  }
)

ModalHeader.propTypes = {
  /** Any element for this icon */
  icon: Element,
  /** By default it has linear-gradient color */
  bgImage: PropTypes.string,
  /** Style for the icon wrapper */
  iconWrapperStyle: PropTypes.shape({
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
