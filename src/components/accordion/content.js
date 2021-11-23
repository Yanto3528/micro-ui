import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { useAccordionContext, useAccordionItemContext } from './utils/context'
import { Content } from './views'

export const AccordionContent = React.forwardRef(
  ({ children, ...props }, ref) => {
    const theme = useTheme()

    const { allowMultiple } = useAccordionContext()
    const { activeIndex, dataKey, isExpand } = useAccordionItemContext()
    const isExpandLocal = allowMultiple
      ? isExpand
      : isExpand && activeIndex === dataKey

    return (
      <Content
        {...theme.default.component.accordion.content}
        {...props}
        isExpand={isExpandLocal}
        ref={ref}
      >
        {children}
      </Content>
    )
  }
)

AccordionContent.propTypes = {
  padding: PropTypes.string,
}

if (isDev) {
  AccordionContent.displayName = 'AccordionContent'
}
