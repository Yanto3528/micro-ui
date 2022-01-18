import React from 'react'

import { Button } from '../button'
import { theme } from '../theme'
import { Toaster } from './index'
import { toast } from './toast'

export default {
  title: 'Components/Others/Toaster',
  component: Toaster,
}

const Template = (args) => {
  const onClick = () => {
    toast({
      title: args.title,
      description: args.description,
      status: args.status,
      duration: args.duration,
      position: args.position,
    })
  }

  return (
    <>
      <Button onClick={onClick} bg={args.status}>
        Show {args.status} toast
      </Button>
      <Toaster {...args} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  ...theme.default.component.toaster,
  title: 'Success',
  description: 'Successfully saved data',
}

export const Error = Template.bind({})
Error.args = {
  ...Default.args,
  title: 'Error',
  description: 'Something went wrong when retrieving data',
  status: 'danger',
}

export const Info = Template.bind({})
Info.args = {
  ...Default.args,
  title: 'Info',
  description: 'You have new mail in your inbox',
  status: 'info',
}

export const Warning = Template.bind({})
Warning.args = {
  ...Default.args,
  title: 'Warning',
  description: 'Please update your software to latest version',
  status: 'warning',
}

export const WithTitleOnly = Template.bind({})
WithTitleOnly.args = {
  ...Default.args,
  description: '',
}

export const WithDescriptionOnly = Template.bind({})
WithDescriptionOnly.args = {
  ...Default.args,
  title: '',
}

export const WithCustomToast = Template.bind({})
WithCustomToast.args = {
  ...Default.args,
  status: 'success',
  render: (toast) => {
    return (
      <div
        style={{
          display: 'flex',
          background: 'white',
          boxShadow: '0 1px 10px rgba(0,0,0,0.15)',
          gap: '1rem',
          alignItems: 'center',
          fontSize: '1.6rem',
          padding: '2rem',
        }}
      >
        <h1
          style={{
            margin: '0',
            fontSize: '1.6rem',
            color: theme.colors[toast.status],
          }}
        >
          {toast.title}
        </h1>
        <p>{toast.description}</p>
      </div>
    )
  },
}
