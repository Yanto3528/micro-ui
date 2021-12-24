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

export const Checkbox = React.forwardRef(
  (
    { label, id = Date.now() + Math.random(), disabled, readOnly, ...props },
    ref
  ) => {
    const theme = useTheme()
    const { checkbox: defaultCheckboxProps } = theme.default.component
    const wrapperProps = getProps(props, defaultCheckboxProps, wrapperData)
    const checkmarkProps = getProps(props, defaultCheckboxProps, [
      'borderColor',
      'activeColor',
      'radius',
    ])

    return (
      <Wrapper
        {...wrapperProps}
        disabled={disabled || readOnly}
        data-testid='checkbox-wrapper'
      >
        <Label htmlFor={id} disabled={disabled || readOnly}>
          <Check
            id={id}
            {...defaultCheckboxProps}
            {...props}
            disabled={disabled}
            ref={ref}
          />
          <Checkmark {...checkmarkProps} />
          {label && <LabelText data-testid='checkbox-label'>{label}</LabelText>}
        </Label>
      </Wrapper>
    )
  }
)

Checkbox.propTypes = {
  /** Label for checkbox */
  label: PropTypes.string,
  /** Border color for checkbox */
  borderColor: PropTypes.string,
  /** Border radius for checkbox */
  radius: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fluid: PropTypes.bool,
  margin: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  id: PropTypes.string,
  /** Custom style for checkbox wrapper */
  customStyle: PropTypes.object,
}

if (isDev) {
  Checkbox.displayName = 'Checkbox'
}
