import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { useRadioGroupContext } from './utils/context'
import { Radio } from '../radio'

export const RadioGroupRadio = React.forwardRef(
  ({ value, children, ...props }, ref) => {
    const {
      value: radioGroupValue,
      name: radioGroupName,
      onChange,
    } = useRadioGroupContext()
    const theme = useTheme()

    const handleChange = (event) => {
      onChange(value, event)
    }

    return (
      <Radio
        {...theme.default.component.radioGroup.radio}
        {...props}
        checked={value === radioGroupValue}
        onChange={handleChange}
        label={children}
        id={`${radioGroupName}-${value}`}
        name={radioGroupName}
        ref={ref}
      />
    )
  }
)

RadioGroupRadio.propTypes = {
  value: PropTypes.string.isRequired,
}

if (isDev) {
  RadioGroupRadio.displayName = 'RadioGroupRadio'
}
