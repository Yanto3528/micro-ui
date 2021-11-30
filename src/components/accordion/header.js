import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { useAccordionContext, useAccordionItemContext } from './utils/context'
import { HeaderWrapper, HeaderIcon, HeaderText } from './views'

export const AccordionHeader = React.forwardRef(
  ({ children, openIcon, closeIcon, ...props }, ref) => {
    const theme = useTheme()
    const { arrowPosition } = useAccordionContext()
    const { isExpand } = useAccordionItemContext()

    return (
      <HeaderWrapper
        {...theme.default.component.accordion.header}
        {...props}
        arrowPosition={arrowPosition}
        isExpand={isExpand}
        ref={ref}
      >
        {(!openIcon || !closeIcon) && <HeaderIcon isExpand={isExpand} />}
        {openIcon && isExpand && openIcon}
        {closeIcon && !isExpand && closeIcon}
        <HeaderText>{children}</HeaderText>
      </HeaderWrapper>
    )
  }
)

AccordionHeader.propTypes = {
  /** Custom style for header */
  customStyle: PropTypes.object,
  /** Icon for when it is expanded */
  openIcon: PropTypes.string,
  /** Icon for when it is not expanded */
  closeIcon: PropTypes.string,
  /** Style for the icon wrapper */
  bg: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  padding: PropTypes.string,
}

if (isDev) {
  AccordionHeader.displayName = 'AccordionHeader'
}
