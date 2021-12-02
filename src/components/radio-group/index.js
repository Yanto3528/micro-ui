import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { RadioGroupContext } from './utils/context'
import { RadioGroupRadio } from './radio'
import { RadioGroupButton } from './button'
import { Wrapper } from './views'

export const RadioGroup = React.forwardRef(
  ({ children, value, onChange, name, ...props }, ref) => {
    const theme = useTheme()

    const contextValue = useMemo(() => {
      return { value, name, onChange }
    }, [value, name, onChange])
    return (
      <Wrapper
        {...theme.default.component.radioGroup.wrapper}
        {...props}
        ref={ref}
        role='radio-group'
      >
        <RadioGroupContext.Provider value={contextValue}>
          {children}
        </RadioGroupContext.Provider>
      </Wrapper>
    )
  }
)

RadioGroup.propTypes = {
  /** determine which radio is active, value must match the value given to each radio children */
  value: PropTypes.string.isRequired,
  /** name for the radio group, will also pass this to each children */
  name: PropTypes.string.isRequired,
  /** whenever children radio are clicked, its value will be passed to this function */
  onChange: PropTypes.func.isRequired,
  /** Determine the direction for radio group */
  direction: PropTypes.oneOf(['column', 'row']),
  /** The gap between each children radio */
  gap: PropTypes.string,
  width: PropTypes.string,
  fluid: PropTypes.bool,
  customStyle: PropTypes.object,
}

if (isDev) {
  RadioGroup.displayName = 'RadioGroup'
}

RadioGroup.Radio = RadioGroupRadio
RadioGroup.Button = RadioGroupButton
