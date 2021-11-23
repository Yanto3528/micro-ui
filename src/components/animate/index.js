import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { AnimateWrapper } from './views'

export const Animate = ({ show, onEnter, onExit, children, ...props }) => {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (show) {
      setShouldRender(true)
    }
  }, [show])

  const onAnimationEnd = () => {
    if (!show) {
      setShouldRender(false)
    }
  }

  return (
    shouldRender && (
      <AnimateWrapper
        onAnimationEnd={onAnimationEnd}
        animation={show ? onEnter : onExit}
        {...props}
      >
        {children}
      </AnimateWrapper>
    )
  )
}

Animate.propTypes = {
  /**
   * if set to true, then children will show onEnter animation,
   * if set to false, then children will show onExit animation
   */
  show: PropTypes.bool.isRequired,
  /** Keyframes from styled-components for when component enter */
  onEnter: PropTypes.object.isRequired,
  /** Keyframes from styled-components for when component exit */
  onExit: PropTypes.object.isRequired,
  /** CSS timing */
  timing: PropTypes.string,
  /** Alias for CSS animation-iteration-count */
  repeat: PropTypes.string,
  /** Animation duration */
  duration: PropTypes.number,
  /** width */
  width: PropTypes.string,
}
