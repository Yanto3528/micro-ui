import React from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen, within } from '@/test-utils'

import { RenderComponent } from '../../../storybook-helpers'
import { theme } from '../../theme'
import {
  defaultMenu,
  withIconMenu,
  withCustomStyle,
  withSubMenu,
} from '../utils/constant'
import { NavMenu } from '../index'

/* eslint-disable */
const BaseMenu = ({ components, ...props }) => {
  return (
    <NavMenu {...props}>
      <RenderComponent components={components} parentComponent={NavMenu} />
    </NavMenu>
  )
}
/* eslint-enable */

describe('components > NavMenu', () => {
  it('should render correctly', () => {
    render(<BaseMenu components={defaultMenu} />)
    const navWrapper = screen.getByRole('navigation')
    const homeMenu = screen.getByText(/home/i)
    const productMenu = screen.getByText(/product/i)
    const aboutMenu = screen.getByText(/about/i)

    expect(navWrapper).toBeInTheDocument()
    expect(homeMenu).toBeInTheDocument()
    expect(productMenu).toBeInTheDocument()
    expect(aboutMenu).toBeInTheDocument()
  })

  it('should render with icon', () => {
    render(<BaseMenu components={withIconMenu} />)
    const navWrapper = screen.getByRole('navigation')
    const homeMenu = screen.getByText(/home/i)
    const productMenu = screen.getByText(/product/i)
    const aboutMenu = screen.getByText(/about/i)

    expect(navWrapper).toBeInTheDocument()
    expect(homeMenu.children[0]).toHaveAttribute('fill', 'none')
    expect(productMenu.children[0]).toHaveAttribute('fill', 'none')
    expect(aboutMenu.children[0]).toHaveAttribute('fill', 'none')
  })

  it('should render with sub menu', async () => {
    render(<BaseMenu components={withSubMenu} />)

    const productSubMenuWrapper = screen.getByTestId('sub-menu-wrapper')
    const subMenuContainer = within(productSubMenuWrapper).getByTestId(
      'sub-menu-container'
    )
    expect(productSubMenuWrapper.children[0]).toHaveStyle({
      color: theme.colors.primary,
    })
    expect(subMenuContainer.children.length).toBe(3)
  })

  it('should render hamburger menu on max 640px screen', async () => {
    global.innerWidth = 640
    global.dispatchEvent(new Event('resize'))

    render(<BaseMenu components={withIconMenu} />)
    const menuToggler = screen.getByTestId('menu-toggler')
    const hamburgerContainer = screen.getByTestId('hamburger-container')
    const overlay = screen.getByTestId('nav-menu-overlay')
    expect(overlay).toHaveStyle({
      'background-color': 'transparent',
    })
    expect(hamburgerContainer.children[0]).toHaveStyle({
      transform: 'translateY(-50%)',
    })
    userEvent.click(menuToggler)

    expect(overlay).toHaveStyle({
      'background-color': 'rgba(0, 0, 0, 0.15)',
    })
    expect(hamburgerContainer.children[0]).toHaveStyle({
      transform: 'translateY(-50%) rotate(45deg)',
    })
  })

  it('should render with custom styles', () => {
    const customStyle = {
      'margin-bottom': '40px',
    }
    render(
      <BaseMenu
        components={withCustomStyle}
        customStyle={customStyle}
        position='sticky'
      />
    )

    const navWrapper = screen.getByRole('navigation')
    const homeMenu = screen.getByText(/home/i)
    const productMenu = screen.getByText(/product/i)
    const aboutMenu = screen.getByText(/about/i)

    expect(navWrapper).toHaveStyle({
      'margin-bottom': '40px',
      position: 'sticky',
      top: '0',
      left: '0',
    })
    expect(homeMenu).toHaveStyle({
      padding: '20px',
      color: theme.colors.primary,
    })
    expect(productMenu).toHaveStyle({
      padding: '20px',
      color: theme.colors.dark,
    })
    expect(aboutMenu).toHaveStyle({
      padding: '20px',
      color: theme.colors.dark,
    })
  })
})
