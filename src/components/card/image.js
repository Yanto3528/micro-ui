import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { Image } from './views'

export const CardImage = (props) => {
  const theme = useTheme()
  return <Image {...theme.default.component.card.image} {...props} />
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
