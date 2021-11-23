import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { AccordionContext } from './utils/context'
import { AccordionItem } from './item'
import { AccordionHeader } from './header'
import { AccordionContent } from './content'
import { Wrapper } from './views'

export const Accordion = React.forwardRef(
  ({ children, arrowPosition, defaultOpen, allowMultiple, ...props }, ref) => {
    const theme = useTheme()
    const [activeIndex, setActiveIndex] = useState(0)

    const value = useMemo(() => {
      return {
        activeIndex,
        setActiveIndex,
        arrowPosition,
        allowMultiple,
        defaultOpen,
      }
    }, [activeIndex, setActiveIndex, arrowPosition, allowMultiple, defaultOpen])

    return (
      <AccordionContext.Provider value={value}>
        <Wrapper {...theme.default.component.accordion} {...props} ref={ref}>
          {React.Children.map(children, (childElement, itemIndex) => {
            return (
              childElement &&
              React.cloneElement(childElement, {
                dataKey: itemIndex,
                ...childElement.props,
              })
            )
          })}
        </Wrapper>
      </AccordionContext.Provider>
    )
  }
)

Accordion.propTypes = {
  customStyle: PropTypes.object,
  arrowPosition: PropTypes.oneOf(['left', 'right']),
  /** Set the behaviour of accordion when multiple tab is opened */
  allowMultiple: PropTypes.bool,
  /** Set the default for accordion state */
  defaultOpen: PropTypes.bool,
  /** If true then it width will be 100% */
  fluid: PropTypes.bool,
  /** Font styles */
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
}

Accordion.Item = AccordionItem
Accordion.Header = AccordionHeader
Accordion.Content = AccordionContent

if (isDev) {
  Accordion.displayName = 'Accordion'
}
