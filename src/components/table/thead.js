import React from 'react'

import { isDev } from '../../constants'

export const THead = React.forwardRef(({ children }, ref) => {
  return <thead ref={ref}>{children}</thead>
})

if (isDev) {
  THead.displayName = 'THead'
}
