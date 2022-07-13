import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { Divider } from '../divider'
import { Title } from './views'

export const ModalTitle = React.forwardRef(({ children, ...props }, ref) => {
  const theme = useTheme()
  return (
    <>
      <Title {...theme.default.component.modal.title} {...props} ref={ref}>
        {children}
      </Title>
      {children && <Divider marginBlock='0' />}
    </>
  )
})

ModalTitle.propTypes = {
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  color: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  ModalTitle.displayName = 'ModalTitle'
}
