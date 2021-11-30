import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'
import { collapse } from '@/animations'

import { Animate } from '../animate'
import { useAccordionItemContext } from './utils/context'
import { Content } from './views'

export const AccordionContent = React.forwardRef(
  ({ children, ...props }, ref) => {
    const theme = useTheme()
    const { isExpand } = useAccordionItemContext()

    return (
      <Animate
        show={isExpand}
        onEnter={collapse.enter}
        onExit={collapse.exit}
        duration={0.4}
      >
        <Content
          {...theme.default.component.accordion.content}
          {...props}
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
}

if (isDev) {
  AccordionContent.displayName = 'AccordionContent'
}
