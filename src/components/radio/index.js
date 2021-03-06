import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'
import { getProps } from '@/utils'

import { Wrapper, Label, Check, Checkmark, LabelText } from './views'

const wrapperData = [
  'width',
  'height',
  'fluid',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'color',
  'margin',
  'customStyle',
]

export const Radio = React.forwardRef(
  (
    { label, id = Date.now() + Math.random(), disabled, readOnly, ...props },
    ref
  ) => {
    const theme = useTheme()
    const { radio: defaultRadioProps } = theme.default.component
    const wrapperProps = getProps(props, defaultRadioProps, wrapperData)
    const checkmarkProps = getProps(props, defaultRadioProps, [
      'borderColor',
      'activeColor',
    ])

    return (
      <Wrapper
        {...wrapperProps}
        disabled={disabled || readOnly}
        data-testid='radio-wrapper'
      >
        <Label htmlFor={id} disabled={disabled || readOnly}>
          <Check
            id={id}
            {...defaultRadioProps}
            {...props}
            disabled={disabled}
            ref={ref}
          />
          <Checkmark {...checkmarkProps} data-testid='radio-checkmark' />
          <LabelText>{label}</LabelText>
        </Label>
      </Wrapper>
    )
  }
)

Radio.propTypes = {
  /** Label for radio */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** Border color for radio */
  borderColor: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  id: PropTypes.string,
  margin: PropTypes.string,
  /** Give this a full width of the current container */
  fluid: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  /** Custom style for wrapper */
  customStyle: PropTypes.object,
}

if (isDev) {
  Radio.displayName = 'Radio'
}
