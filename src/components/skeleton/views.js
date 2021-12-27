import styled, { keyframes, css } from 'styled-components'

import { resolveColor, getBorderRadius } from '@/utils'

const shimmer = keyframes`
  to {
    transform: translateX(100%);
  }
`

export const SkeletonLoading = styled.div.attrs(() => ({
  className: 'micro-skeleton-loading',
}))`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ theme, circle, radius }) =>
    circle ? '50%' : theme.radius[radius] || radius};
  background: ${resolveColor('bg')};
  &:not(:last-child) {
    margin-bottom: ${({ count, spacing }) => count && count > 0 && spacing};
  }
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    border-radius: ${getBorderRadius};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: ${shimmer} ${({ duration }) => duration} infinite;
  }

  ${({ customStyle }) => customStyle && css(customStyle)};
`
