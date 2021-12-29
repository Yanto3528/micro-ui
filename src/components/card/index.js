import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { CardBody } from './body'
import { CardTitle } from './title'
import { CardText } from './text'
import { CardGroup } from './group'
import { CardImage } from './image'
import { Wrapper } from './views'

export const Card = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <Wrapper
      {...theme.default.component.card.wrapper}
      {...props}
      data-testid='card-wrapper'
    >
      {children}
    </Wrapper>
  )
}

Card.propTypes = {
  /** Determine whehter to show vertical or horizontal direction */
  direction: PropTypes.oneOf(['column', 'row']),
  width: PropTypes.string,
  height: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  Card.displayName = 'Card'
}

Card.Body = CardBody
Card.Title = CardTitle
Card.Text = CardText
Card.Group = CardGroup
Card.Image = CardImage
