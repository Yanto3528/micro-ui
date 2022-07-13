import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { ImageContainer, Image } from './views'

export const CardImage = (props) => {
  const theme = useTheme()
  return (
    <ImageContainer width={props.width} height={props.height}>
      <Image {...theme.default.component.card.image} {...props} />
    </ImageContainer>
  )
}

CardImage.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  CardImage.displayName = 'CardImage'
}
