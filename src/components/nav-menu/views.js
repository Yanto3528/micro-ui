import styled, { css } from 'styled-components'

import { fontStyles, customStyles } from '@/styles'
import { MediaQuery, resolveColor } from '@/utils'

const resolvePosition = ({ position }) => {
  switch (position) {
    case 'sticky':
      return css`
        position: sticky;
        top: 10px;
        left: 0;
      `
    default:
      return css`
        position: relative;
      `
  }
}

const mobileActiveItemStyles = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`

const activeItemStyles = css`
  color: ${({ theme }) => theme.colors.primary};
`

export const Wrapper = styled.nav.attrs(() => ({
  className: 'micro-nav-menu-wrapper',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${resolveColor('bg')};
  ${resolvePosition};
  z-index: 5;

  ${customStyles};
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

    .micro-nav-menu-item {
      padding: 14px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.dark};
      &:hover {
        ${mobileActiveItemStyles};
      }
    }
  `)}

  ${customStyles};
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
      &:before {
        top: 0;
      }
      &:after {
        top: 0;
        transform: rotate(-90deg);
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
  position: relative;
  transition: all 0.2s;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    ${activeItemStyles};
  }

  ${({ active }) => active && activeItemStyles}

  ${MediaQuery.DOUBLE_SMALLEST(css`
    ${({ active }) => active && mobileActiveItemStyles}
  `)}

  ${customStyles};
`

export const SubMenuWrapper = styled.div.attrs(() => ({
  className: 'micro-nav-menu-sub-menu-wrapper',
}))`
  ${fontStyles};
  cursor: pointer;
  display: block;
  color: ${resolveColor('color')};
  position: relative;
  transition: all 0.2s;

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: ${({ gap }) => gap};
    padding: ${({ padding }) => padding};

    &:hover {
      ${activeItemStyles};
    }

    ${({ active }) => active && activeItemStyles}

    ${MediaQuery.DOUBLE_SMALLEST(css`
      padding: 14px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.dark};
      &:hover {
        ${mobileActiveItemStyles};
      }

      ${({ active }) => active && mobileActiveItemStyles}
    `)}
  }

  &:hover {
    > .micro-nav-menu-sub-menu-container {
      transform: translateY(100%) scaleY(1);
      opacity: 1;
    }

    ${MediaQuery.DOUBLE_SMALLEST(css`
      > .micro-nav-menu-sub-menu-container {
        max-height: 100vh;
        transform: translateY(0);
        transition: max-height 0.8s;
      }
    `)}
  }
`

export const SubMenuContainer = styled.div.attrs(() => ({
  className: 'micro-nav-menu-sub-menu-container',
}))`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 120px;
  z-index: 0;
  transform: translateY(100%) scaleY(0);
  transform-origin: top;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transition: opacity 0.4s, transform 0.4s;
  > ${Item} {
    border-radius: 4px;
    &:hover {
      ${mobileActiveItemStyles};
    }
  }

  ${MediaQuery.DOUBLE_SMALLEST(css`
    position: relative;
    z-index: 2;
    width: 100%;
    transform: translateY(0);
    max-height: 0px;
    opacity: 1;
    overflow: hidden;
    transition: max-height 0.8s cubic-bezier(0, 1, 0, 1);
    & > div.micro-nav-menu-item {
      padding-left: 30px;
    }
  `)}
`
