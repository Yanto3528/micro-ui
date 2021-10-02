import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { Body } from './views'

export const ModalBody = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <Body {...theme.default.component.modal.body} {...props}>
      {children}
    </Body>
  )
}

ModalBody.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  margin: PropTypes.string,
}

if (isDev) {
  ModalBody.displayName = 'ModalBody'
}
