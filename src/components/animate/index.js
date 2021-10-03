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
  show: PropTypes.bool.isRequired,
  onEnter: PropTypes.object.isRequired,
  onExit: PropTypes.object.isRequired,
  timing: PropTypes.string,
  repeat: PropTypes.string,
  duration: PropTypes.number,
}
