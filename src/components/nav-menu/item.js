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

if (isDev) {
  NavMenuItem.displayName = 'NavMenuItem'
}

NavMenuItem.propTypes = {
  icon: PropTypes.element,
}
