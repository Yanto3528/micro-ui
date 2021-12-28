import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'
import Placeholder from '@/assets/images/avatar-placeholder.png'

import { StyledImage, AvatarContainer } from './views'

const backgroundColorList = [
  'facebook',
  'twitter',
  'pinterest',
  'youtube',
  'instagram',
  'google',
  'linkedin',
]

export const Avatar = ({ name, src, ...props }) => {
  const theme = useTheme()
  const [isError, setIsError] = useState(false)
  const colorRef = useRef(null)

  useEffect(() => {
    if (!colorRef.current) {
      colorRef.current =
        backgroundColorList[
          Math.floor(Math.random() * backgroundColorList.length)
        ]
    }
  }, [])

  const onError = (event) => {
    setIsError(true)

    event.target.src = Placeholder
  }

  const namePart = name?.includes(' ') ? name?.split(' ') : [name, '']
  const nameInitial =
    typeof name === 'string'
      ? namePart?.[0]?.substring(0, 1)?.toUpperCase() +
        namePart?.[1]?.substring(0, 1)?.toUpperCase()
      : ''

  return (isError || !src) && name ? (
    <AvatarContainer
      {...theme.default.component.avatar}
      {...props}
      bg={colorRef.current}
    >
      {nameInitial}
    </AvatarContainer>
  ) : (
    <StyledImage
      {...theme.default.component.avatar}
      {...props}
      src={src}
      onError={onError}
    />
  )
}

Avatar.propTypes = {
  size: PropTypes.string,
  rounded: PropTypes.bool,
  radius: PropTypes.string,
  showBorder: PropTypes.bool,
  src: PropTypes.string,
  name: PropTypes.string,
}

if (isDev) {
  Avatar.displayName = 'Avatar'
}
