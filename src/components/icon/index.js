import React from 'react'
import { object, string } from 'prop-types'
import { Component } from './views'

export const Icon = (props) => {
  const { name, className, ...attr } = props
  return <Component className={`icon-${name} ${className}`} {...attr} />
}

Icon.propTypes = {
  className: string,
  name: string.isRequired,
  size: string.isRequired,
  color: string,
  customStyle: object,
}

Icon.defaultProps = {
  className: '',
  size: 's',
  color: 'primary',
  customStyle: {},
}
