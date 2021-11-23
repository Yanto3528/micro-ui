import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { useAccordionContext, AccordionItemContext } from './utils/context'
import { Item } from './views'

export const AccordionItem = React.forwardRef(
  ({ children, dataKey, defaultOpen, ...props }, ref) => {
    const theme = useTheme()
    const { activeIndex, setActiveIndex, allowMultiple } = useAccordionContext()
    const [isExpand, setIsExpand] = useState(defaultOpen)

    const onExpandClick = () => {
      setIsExpand((prevState) => !prevState)
      setActiveIndex(dataKey)
    }

    const value = useMemo(() => {
      return { isExpand, activeIndex, dataKey, allowMultiple }
    }, [isExpand, activeIndex, dataKey, allowMultiple])

    return (
      <AccordionItemContext.Provider value={value}>
        <Item
          {...theme.default.component.accordion.item}
          {...props}
          onClick={onExpandClick}
          ref={ref}
        >
          {children}
        </Item>
      </AccordionItemContext.Provider>
    )
  }
)

AccordionItem.propTypes = {
  margin: PropTypes.string,
  dataKey: PropTypes.number,
  /* to decide if accordion item is intially open or not */
  defaultOpen: PropTypes.bool,
}

if (isDev) {
  AccordionItem.displayName = 'AccordionItem'
}
