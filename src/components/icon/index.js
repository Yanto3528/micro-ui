import React from 'react'
import { object, string, oneOf } from 'prop-types'
import { Colors } from '../../styles'
import { Component } from './views'

export const Icon = (props) => {
  const { name, className, ...attr } = props
  return <Component className={`icon-${name} ${className}`} {...attr} />
}

Icon.propTypes = {
  className: string,
  name: string.isRequired,
  size: oneOf(['xs', 's', 'm', 'l', 'xl']),
  color: string,
  customStyle: object,
}

Icon.defaultProps = {
  className: '',
  size: 's',
  color: Colors.Primary,
  customStyle: {},
}
