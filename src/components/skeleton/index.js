import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'
import { SkeletonLoading } from './views'

export const Skeleton = ({ count, ...otherProps }) => {
  const skeletonCountArray =
    count && count > 0 ? new Array(count).fill(null) : []

  const theme = useTheme()

  return (
    <>
      {skeletonCountArray.length > 0 ? (
        skeletonCountArray.map((_, index) => (
          <SkeletonLoading
            {...theme.default.component.skeleton}
            {...otherProps}
            key={`skeleton-${index}`}
            count={count}
            aria-label='loading'
          />
        ))
      ) : (
        <SkeletonLoading
          {...theme.default.component.skeleton}
          {...otherProps}
          aria-label='loading'
        />
      )}
    </>
  )
}

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  count: PropTypes.number,
  circle: PropTypes.bool,
  spacing: PropTypes.string,
  duration: PropTypes.string,
}

if (isDev) {
  Skeleton.displayName = 'Skeleton'
}
