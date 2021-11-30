import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { useAccordionContext, AccordionItemContext } from './utils/context'
import { Item } from './views'

export const AccordionItem = React.forwardRef(
  ({ children, index, ...props }, ref) => {
    const theme = useTheme()
    const { activeIndex, setActiveIndex, allowMultiple, allowToggle } =
      useAccordionContext()
    const [isExpand, setIsExpand] = useState(false)

    const onExpandClick = () => {
      if (allowMultiple) {
        setIsExpand((prevState) => !prevState)
      }
      setActiveIndex(allowToggle ? (activeIndex === index ? -1 : index) : index)
    }

    const value = useMemo(() => {
      let isExpandValue = index === activeIndex
      if (allowMultiple) {
        isExpandValue = isExpand
      }
      return {
        isExpand: isExpandValue,
        activeIndex,
        index,
      }
    }, [isExpand, activeIndex, index, allowMultiple])

    return (
      <AccordionItemContext.Provider value={value}>
        <Item
          {...theme.default.component.accordion.item}
          {...props}
          onClick={onExpandClick}
          ref={ref}
          data-testid='accordion-item'
        >
          {children}
        </Item>
      </AccordionItemContext.Provider>
    )
  }
)

AccordionItem.propTypes = {
  customStyle: PropTypes.object,
  margin: PropTypes.string,
  padding: PropTypes.string,
  /** Determine whether it should expand or not based on active index */
  index: PropTypes.number,
}

if (isDev) {
  AccordionItem.displayName = 'AccordionItem'
}
