import styled, { css } from 'styled-components'

import { fontStyles } from '@/styles'
import { MediaQuery, resolveColor } from '@/utils'

export const Wrapper = styled.nav.attrs(() => ({
  className: 'micro-nav-menu-wrapper',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

export const List = styled.div.attrs(() => ({
  className: 'micro-nav-menu-list',
}))`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap};
  transition: transform 0.4s;

  ${MediaQuery.DOUBLE_SMALLEST(css`
    flex-direction: column;
    align-items: stretch;
    padding-top: 4rem;
    position: fixed;
    left: 0;
    top: 0;
    width: 250px;
    height: 100vh;
    z-index: 10;
    background-color: white;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(calc(-100vw - 100%))'};
    gap: 0;

    > .micro-nav-menu-item {
      padding: 14px;
      font-weight: 600;
    }
    > .micro-nav-menu-item:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  `)}
`

export const HamburgerContainer = styled.div.attrs(() => ({
  className: 'micro-nav-menu-hamburger-container',
}))`
  display: none;
  width: 25px;
  height: 25px;
  position: absolute;
  right: 0;
  cursor: pointer;
  z-index: 11;

  ${MediaQuery.DOUBLE_SMALLEST(css`
    display: block;
  `)}
`

export const Hamburger = styled.div.attrs(() => ({
  className: 'micro-nav-menu-hamburger',
}))`
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.dark};
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  transition: all 0.4s;

  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    transition: all 0.4s;
  }

  &:before {
    top: 8px;
  }

  &:after {
    top: -8px;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateY(-50%) rotate(45deg);
      &:before,
      &:after {
        transform: rotate(90deg);
        top: 0;
      }
    `};
`

export const Overlay = styled.div.attrs(() => ({
  className: 'micro-nav-menu-overlay',
}))`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  height: 0px;
  transition: background-color 0.4s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: rgba(0, 0, 0, 0.15);
      height: auto;
      z-index: 9;
    `}
`

export const MenuToggler = styled.input.attrs(() => ({
  className: 'micro-nav-menu-menu-toggler',
  type: 'checkbox',
}))`
  display: none;
  position: absolute;
  width: 25px;
  height: 25px;
  right: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 12;

  ${MediaQuery.DOUBLE_SMALLEST(css`
    display: block;
  `)};
`

export const Item = styled.div.attrs(() => ({
  className: 'micro-nav-menu-item',
}))`
  ${fontStyles};
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
  color: ${resolveColor('color')};
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
