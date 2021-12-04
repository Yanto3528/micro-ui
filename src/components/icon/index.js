import React from 'react'
import { object, string } from 'prop-types'

import { Component } from './views'

export const Icon = (props) => {
  const { name, className, ...attr } = props
  return <Component className={`icon-${name} ${className}`} {...attr} />
}

Icon.propTypes = {
  className: string,
  /** Name for the icon */
  name: string.isRequired,
  /** Size for the icon, can be xs, s, m, l or any valid size like px, em, rem, etc */
  size: string.isRequired,
  color: string,
  customStyle: object,
}

Icon.defaultProps = {
  className: '',
  size: 's',
  customStyle: {},
}
