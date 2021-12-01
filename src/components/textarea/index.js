import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'
import { getProps } from '@/utils'

import { Wrapper, StyledTextarea } from './views'

const wrapperPropsData = ['width', 'fluid']

export const Textarea = React.forwardRef(({ fluid, ...props }, ref) => {
  const theme = useTheme()
  const wrapperProps = getProps(
    props,
    theme.default.component.textarea,
    wrapperPropsData
  )
  return (
    <Wrapper {...wrapperProps}>
      <StyledTextarea
        {...theme.default.component.textarea}
        {...props}
        fluid={fluid}
        ref={ref}
      />
    </Wrapper>
  )
})

Textarea.propTypes = {
  /** Background color for textarea */
  bg: PropTypes.string,
  /** Text color for textarea */
  color: PropTypes.string,
  padding: PropTypes.string,
  radius: PropTypes.string,
  /** Round the textarea border radius */
  rounded: PropTypes.bool,
  variant: PropTypes.oneOf(['solid', 'outline']),
  /**Border color for outline variant */
  borderColor: PropTypes.string,
  /** Border color when focusing on the textarea, only applicable for outline variant */
  focusBorderColor: PropTypes.string,
  /** Show "danger" color as border color */
  hasError: PropTypes.bool,
  width: PropTypes.string,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  /** Give textarea  a full width of the current container*/
  fluid: PropTypes.bool,
  /** Ability to resize a textaerea, put "both" or "vertical" or "horizontal", or "none" */
  resize: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  Textarea.displayName = 'Textarea'
}
