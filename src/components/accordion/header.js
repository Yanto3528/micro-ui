import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { useAccordionContext, useAccordionItemContext } from './utils/context'
import { HeaderWrapper, HeaderIconWrapper } from './views'

export const AccordionHeader = React.forwardRef(
  ({ iconWrapperStyle, children, ...props }, ref) => {
    const theme = useTheme()
    const { arrowPosition, allowMultiple } = useAccordionContext()
    const { isExpand, activeIndex, index } = useAccordionItemContext()
    const isExpandLocal = allowMultiple
      ? isExpand
      : isExpand && activeIndex === index

    const headerIconProps = theme.default.component.accordion.header

    return (
      <HeaderWrapper
        {...theme.default.component.accordion.header}
        {...props}
        arrowPosition={arrowPosition}
        ref={ref}
      >
        {headerIconProps && (
          <HeaderIconWrapper
            {...headerIconProps}
            {...iconWrapperStyle}
            isExpand={isExpandLocal}
          />
        )}
        {children}
      </HeaderWrapper>
    )
  }
)

AccordionHeader.propTypes = {
  customStyle: PropTypes.object,
  /** Any element for this icon */
  icon: PropTypes.string,
  /** Style for the icon wrapper */
  iconWrapperStyle: PropTypes.shape({
    /** background color for icon wrapper */
    bg: PropTypes.string,
    /** box shadow for icon wrapper */
    boxShadow: PropTypes.string,
    /** padding for icon wrapper */
    padding: PropTypes.string,
  }),
}

if (isDev) {
  AccordionHeader.displayName = 'AccordionHeader'
}
