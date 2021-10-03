import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { getProps } from '../../utils'
import { Wrapper, Label, Check, Checkmark, LabelText } from './views'

export const Radio = React.forwardRef(
  ({ label, id, disabled, readOnly, ...props }, ref) => {
    const theme = useTheme()
    const { radio: defaultRadioProps } = theme.default.component
    const checkmarkProps = getProps(props, defaultRadioProps, [
      'borderColor',
      'radius',
      'variant',
    ])

    const labelProps = getProps(props, defaultRadioProps, [
      'fontFamily',
      'fontSize',
      'color',
    ])

    return (
      <Wrapper disabled={disabled || readOnly}>
        <Label htmlFor={id} {...labelProps} disabled={disabled || readOnly}>
          <LabelText>{label}</LabelText>
          <Check
            id={id}
            {...defaultRadioProps}
            {...props}
            disabled={disabled}
            ref={ref}
          />
          <Checkmark {...checkmarkProps} />
        </Label>
      </Wrapper>
    )
  }
)

Radio.propTypes = {
  /** Label for radio */
  label: PropTypes.string,
  /** Border color for radio */
  borderColor: PropTypes.string,
  /** Border radius for radio */
  radius: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  variant: PropTypes.oneOf(['check', 'circular']),
  id: PropTypes.string.isRequired,
}

if (isDev) {
  Radio.displayName = 'Radio'
}