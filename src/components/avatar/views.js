import styled from 'styled-components'

import { getBorderRadius, resolveColor } from '@/utils'

export const StyledImage = styled.img.attrs(() => ({
  className: 'micro-avatar',
}))`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${getBorderRadius('50%')};
  border: ${({ showBorder }) => showBorder && `3px solid white`};
  background-color: ${resolveColor('bg')};
  object-fit: cover;
  display: block;
`

export const AvatarContainer = styled.div.attrs(() => ({
  className: 'micro-avatar-container',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${getBorderRadius('50%')};
  background-color: ${resolveColor('bg')};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ size }) => `calc(${size} / 3)`};
  font-weight: 600;
  letter-spacing: 1px;
`
