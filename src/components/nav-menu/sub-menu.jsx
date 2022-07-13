import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { SubMenuWrapper, SubMenuContainer } from './views'

export const NavMenuSubMenu = ({ children, icon, title, ...props }) => {
  const theme = useTheme()

  return (
    <SubMenuWrapper
      {...theme.default.component.navMenu.subMenu}
      {...props}
      data-testid='sub-menu-wrapper'
    >
      <div>
        {icon && icon}
        <p>{title}</p>
      </div>
      <SubMenuContainer data-testid='sub-menu-container'>
        {children}
      </SubMenuContainer>
    </SubMenuWrapper>
  )
}

NavMenuSubMenu.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
}

if (isDev) {
  NavMenuSubMenu.displayName = 'NavMenuSubMenu'
}
