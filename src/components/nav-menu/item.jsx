import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { Item } from './views'

export const NavMenuItem = ({ children, icon, ...props }) => {
  const theme = useTheme()
  return (
    <Item {...theme.default.component.navMenu.item} {...props}>
      {icon && icon}
      {children}
    </Item>
  )
}

NavMenuItem.propTypes = {
  icon: PropTypes.element,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string,
  /** Determined whether it is active or not */
  active: PropTypes.bool,
  customStyle: PropTypes.object,
}

if (isDev) {
  NavMenuItem.displayName = 'NavMenuItem'
}
