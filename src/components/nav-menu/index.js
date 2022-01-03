import React from 'react'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { NavMenuList } from './list'
import { NavMenuItem } from './item'
import { Wrapper } from './views'

export const NavMenu = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <Wrapper {...theme.default.component.navMenu.wrapper} {...props}>
      {children}
    </Wrapper>
  )
}

if (isDev) {
  NavMenu.displayName = 'NavMenu'
}

NavMenu.List = NavMenuList
NavMenu.Item = NavMenuItem
