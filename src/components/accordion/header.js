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
        data-testid='accordion-header'
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
  /** Icon for when it is expanded, can be anything */
  openIcon: PropTypes.any,
  /** Icon for when it is not expanded, can be anything*/
  closeIcon: PropTypes.any,
  /** Style for the icon wrapper */
  bg: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  padding: PropTypes.string,
  color: PropTypes.string,
}

if (isDev) {
  AccordionHeader.displayName = 'AccordionHeader'
}
