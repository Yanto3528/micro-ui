import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'
import { collapse } from '@/animations'

import { Animate } from '../animate'
import { useAccordionItemContext } from './utils/context'
import { Content } from './views'

export const AccordionContent = React.forwardRef(
  ({ children, onClick, ...props }, ref) => {
    const theme = useTheme()
    const { isExpand } = useAccordionItemContext()

    const handleClick = (event) => {
      event.stopPropagation()
      onClick?.(event)
    }

    return (
      <Animate
        show={isExpand}
        onEnter={collapse.enter}
        onExit={collapse.exit}
        duration={0.4}
        data-testid='animate-accordion-wrapper'
      >
        <Content
          {...theme.default.component.accordion.content}
          {...props}
          onClick={handleClick}
          ref={ref}
        >
          {children}
        </Content>
      </Animate>
    )
  }
)

AccordionContent.propTypes = {
  customStyle: PropTypes.object,
  padding: PropTypes.string,
  onClick: PropTypes.func,
}

if (isDev) {
  AccordionContent.displayName = 'AccordionContent'
}
