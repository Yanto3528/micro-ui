import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { Title } from './views'

export const ModalTitle = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <Title {...theme.default.component.modal.title} {...props}>
      {children}
    </Title>
  )
}

ModalTitle.propTypes = {
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string,
  margin: PropTypes.string,
}

if (isDev) {
  ModalTitle.displayName = 'ModalTitle'
}
