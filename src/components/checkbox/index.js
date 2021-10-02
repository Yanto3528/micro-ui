import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { getProps } from '../../utils'
import { Label, Check, Checkmark, LabelText } from './views'

export const Checkbox = React.forwardRef(({ label, id, ...props }, ref) => {
  const theme = useTheme()
  const { checkbox: defaultCheckboxProps } = theme.default.component
  const checkmarkProps = getProps(props, defaultCheckboxProps, [
    'borderColor',
    'radius',
  ])

  const labelProps = getProps(props, defaultCheckboxProps, [
    'fontFamily',
    'fontSize',
  ])

  return (
    <Label htmlFor={id} {...labelProps}>
      <LabelText>{label}</LabelText>
      <Check id={id} {...defaultCheckboxProps} {...props} ref={ref} />
      <Checkmark {...checkmarkProps} />
    </Label>
  )
})

Checkbox.propTypes = {
  /** Label for checkbox */
  label: PropTypes.string,
  /** Border color for checkbox */
  borderColor: PropTypes.string,
  /** Border radius for checkbox */
  radius: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string.isRequired,
}

if (isDev) {
  Checkbox.displayName = 'Checkbox'
}
