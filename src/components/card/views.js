import styled, { css } from 'styled-components'

import { fontStyles } from '@/styles'
import { getBorderRadius, resolveColor } from '@/utils'

export const Wrapper = styled.div.attrs(() => ({
  className: 'micro-card-wrapper',
}))`
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  flex-direction: ${({ direction }) => direction};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: ${getBorderRadius()};
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  ${({ direction }) =>
    direction === 'row' &&
    css`
      > .micro-card-image,
      > .micro-card-body,
      > * {
        width: 50%;
        height: 100%;
      }
    `}

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Title = styled.h5.attrs(() => ({
  className: 'micro-card-title',
}))`
  ${fontStyles};
  color: ${resolveColor('color')};
  margin-bottom: 0.5rem;

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Body = styled.div.attrs(() => ({
  className: 'micro-card-body',
}))`
  padding: ${({ padding }) => padding};
  width: 100%;
  height: 100%;

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Text = styled.p.attrs(() => ({
  className: 'micro-card-text',
}))`
  ${fontStyles};
  color: ${resolveColor('color')};
  &:not(:last-child) {
    margin-bottom: ${({ marginBottom }) => marginBottom};
  }

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Group = styled.div.attrs(() => ({
  className: 'micro-card-group',
}))`
  margin-bottom: ${({ marginBottom }) => marginBottom};

  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const Image = styled.img.attrs(() => ({
  className: 'micro-card-image',
}))`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: cover;
  display: block;
  border-radius: ${getBorderRadius('50%')};

  ${({ customStyle }) => customStyle && css(customStyle)};
`
