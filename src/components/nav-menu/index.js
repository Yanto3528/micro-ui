import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { NavMenuList } from './list'
import { NavMenuItem } from './item'
import { NavMenuSubMenu } from './sub-menu'
import { Wrapper } from './views'

export const NavMenu = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <Wrapper {...theme.default.component.navMenu.wrapper} {...props}>
      {children}
    </Wrapper>
  )
}

NavMenu.propTypes = {
  bg: PropTypes.string,
  position: PropTypes.oneOf(['sticky', 'relative']),
  customStyle: PropTypes.object,
}

if (isDev) {
  NavMenu.displayName = 'NavMenu'
}

NavMenu.List = NavMenuList
NavMenu.Item = NavMenuItem
NavMenu.SubMenu = NavMenuSubMenu
