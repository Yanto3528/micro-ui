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
  (
    {
      children,
      arrowPosition,
      allowMultiple,
      allowToggle,
      defaultIndex,
      ...props
    },
    ref
  ) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex)
    const theme = useTheme()
    const { wrapper: defaultAccordionProps } = theme.default.component.accordion

    const value = useMemo(() => {
      return {
        activeIndex,
        setActiveIndex,
        arrowPosition: arrowPosition || defaultAccordionProps.arrowPosition,
        allowMultiple,
        allowToggle,
      }
    }, [
      activeIndex,
      setActiveIndex,
      arrowPosition,
      allowMultiple,
      allowToggle,
      defaultAccordionProps,
    ])

    return (
      <AccordionContext.Provider value={value}>
        <Wrapper
          {...defaultAccordionProps}
          {...props}
          ref={ref}
          data-testid='accordion-wrapper'
        >
          {React.Children.map(children, (childElement, itemIndex) => {
            return (
              childElement &&
              React.cloneElement(childElement, {
                ...childElement.props,
                index: itemIndex,
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
  /** Default value for which item to be shown by default */
  defaultIndex: PropTypes.number,
  arrowPosition: PropTypes.oneOf(['left', 'right']),
  /** Set the behaviour of accordion when multiple tab is opened
   *
   * Higher priority than allowToggle
   */
  allowMultiple: PropTypes.bool,
  /** Allow open and close for single tab only */
  allowToggle: PropTypes.bool,
  /** If true then it width will be 100% */
  fluid: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
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
