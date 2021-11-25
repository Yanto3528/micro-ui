import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'
import { getProps } from '@/utils'

import { Wrapper, Label, Check, IconContainer } from './views'

const labelPropsData = [
  'fontFamily',
  'fontSize',
  'activeTextColor',
  'activeBGColor',
  'color',
  'bg',
  'radius',
  'padding',
  'margin',
  'fluid',
  'width',
  'height',
  'size',
  'variant',
  'buttonType',
  'iconSpacing',
  'customStyle',
]

export const RadioButton = React.forwardRef(
  (
    {
      label,
      id = Date.now() + Math.random(),
      disabled,
      readOnly,
      icon,
      ...props
    },
    ref
  ) => {
    const theme = useTheme()
    const { radioButton: defaultRadioButtonProps } = theme.default.component

    const labelProps = getProps(props, defaultRadioButtonProps, labelPropsData)

    return (
      <Wrapper disabled={disabled || readOnly}>
        <Check
          id={id}
          {...defaultRadioButtonProps}
          {...props}
          variant={labelProps.variant}
          disabled={disabled}
          readOnly={readOnly}
          ref={ref}
        />
        <Label
          htmlFor={id}
          {...labelProps}
          variant={labelProps.variant}
          disabled={disabled || readOnly}
        >
          {icon && <IconContainer>{icon}</IconContainer>}
          {label}
        </Label>
      </Wrapper>
    )
  }
)

RadioButton.propTypes = {
  /** Label for radio button*/
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** Border radius for radio button*/
  radius: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  /** Text color, applicable for solid variant only */
  color: PropTypes.string,
  /** Text color for when radio is active */
  activeTextColor: PropTypes.string,
  /** Background color for when radio is active, only applicable for solid variant */
  activeBGColor: PropTypes.string,
  /** Background color for radio. For outline variant the color becomes border color and bg color when active */
  bg: PropTypes.string,
  /** Border radius for radio button */
  radius: PropTypes.string,
  /** padding for radio button */
  padding: PropTypes.string,
  /** margin for radio button */
  margin: PropTypes.string,
  /** Give this a full width of the current container (not applicable for square buttonType) */
  fluid: PropTypes.bool,
  /** width for radio button, does not affect square buttonType */
  width: PropTypes.string,
  /** height for radio button, does not affect square buttonType */
  height: PropTypes.string,
  disabled: PropTypes.bool,
  /** only for square buttonType which will set both width and height */
  size: PropTypes.string,
  readOnly: PropTypes.bool,
  /** Variant for radio button */
  variant: PropTypes.oneOf(['solid', 'outline']),
  /** Button type for radio button */
  buttonType: PropTypes.oneOf(['default', 'square']),
  /** Spacing between the icon and text, horizontal for default buttonType and vertical for square buttonType */
  iconSpacing: PropTypes.string,
  /** Apply custom style for radio button */
  customStyle: PropTypes.object,
  icon: PropTypes.element,
  id: PropTypes.string,
}

if (isDev) {
  RadioButton.displayName = 'RadioButton'
}
