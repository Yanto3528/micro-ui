import React from 'react'

import { theme } from '../theme'
import { UnitNumber } from './index'

export default {
  title: 'Forms/UnitNumber',
  component: UnitNumber,
}

const Template = (args) => <UnitNumber {...args} />

export const Default = Template.bind({})
Default.args = {
  ...theme.default.component.unitNumber,
  placeholder: 'xxxx',
  disabled: false,
  readOnly: false,
  hasError: false,
}

export const Outline = Template.bind({})
Outline.args = {
  ...Default.args,
  variant: 'outline',
}

export const Test = () => {
  const firstInputRef = React.useRef(null)
  const secondInputRef = React.useRef(null)
  
  React.useEffect(() => {
    firstInputRef.current.focus()
  }, [])

  return <UnitNumber firstInputRef={firstInputRef} secondInputRef={secondInputRef} />
}
