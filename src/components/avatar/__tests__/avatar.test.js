import React from 'react'

import { render, screen, fireEvent } from '@/test-utils'
import Placeholder from '@/assets/images/avatar-placeholder.png'

import { Avatar } from '../index'

const validImageSrc =
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
const nonValidImageSrc = 'https://google.com'

describe('components > Avatar', () => {
  it('should render correctly', () => {
    render(<Avatar src={validImageSrc} />)
    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('should render placeholder image when passed in invalid src', async () => {
    render(<Avatar src={nonValidImageSrc} />)
    const image = screen.getByRole('img')
    fireEvent.error(image)
    expect(image).toHaveAttribute('src', Placeholder.toString())
  })

  it('should render name if cannot load image', () => {
    render(<Avatar src={nonValidImageSrc} name='Yanto Lee' />)
    const image = screen.getByRole('img')
    fireEvent.error(image)

    const avatarContainer = screen.getByTestId('avatar-container')
    expect(avatarContainer).toBeInTheDocument()
    expect(avatarContainer).toHaveTextContent('YL')
  })

  it('should render with custom style for valid image src', () => {
    const customStyle = {
      padding: '20px',
    }

    render(
      <Avatar
        src={validImageSrc}
        size='4rem'
        rounded={false}
        radius='4px'
        customStyle={customStyle}
      />
    )
    const image = screen.getByRole('img')

    expect(image).toHaveStyle({
      padding: '20px',
      width: '4rem',
      height: '4rem',
      'border-radius': '4px',
    })
  })

  it('should render with custom style for non valid image src with name', () => {
    const customStyle = {
      padding: '20px',
    }

    render(
      <Avatar
        src={nonValidImageSrc}
        name='Yanto Lee'
        size='4rem'
        rounded={false}
        radius='4px'
        customStyle={customStyle}
      />
    )
    const image = screen.getByRole('img')
    fireEvent.error(image)

    const avatarContainer = screen.getByTestId('avatar-container')

    expect(avatarContainer).toHaveStyle({
      padding: '20px',
      width: '4rem',
      height: '4rem',
      'border-radius': '4px',
    })
  })
})
