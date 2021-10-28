import React from 'react'

import { isDev } from '../../constants'

export const TBody = React.forwardRef(({ children }, ref) => {
  return <tbody ref={ref}>{children}</tbody>
})

if (isDev) {
  TBody.displayName = 'TBody'
}
