import React from 'react'

import { isDev } from '@/constants'
import { useTheme, useToggle } from '@/hooks'

import {
  List,
  HamburgerContainer,
  Hamburger,
  MenuToggler,
  Overlay,
} from './views'

export const NavMenuList = ({ children, ...props }) => {
  const theme = useTheme()

  const [isOpen, { onToggle, onClose }] = useToggle(false)

  return (
    <>
      <MenuToggler
        onChange={onToggle}
        checked={isOpen}
        data-testid='menu-toggler'
      />
      <HamburgerContainer data-testid='hamburger-container'>
        <Hamburger isOpen={isOpen} />
      </HamburgerContainer>
      <List
        {...theme.default.component.navMenu.list}
        {...props}
        isOpen={isOpen}
        data-testid='nav-menu-list'
      >
        {children}
      </List>
      <Overlay
        isOpen={isOpen}
        onClick={onClose}
        data-testid='nav-menu-overlay'
      />
    </>
  )
}

if (isDev) {
  NavMenuList.displayName = 'NavMenuList'
}
