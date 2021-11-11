import React, { useState } from 'react'

import { fadeIn, fadeOut, slideIn, slideOut } from '@/animations'
import { Button } from '../button'
import { Animate } from './index'

export default {
  title: 'Utils/Animate',
  component: Animate,
}

export const FadeInOut = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <Button onClick={() => setShow((currentShow) => !currentShow)}>
        Toggle Show
      </Button>
      <Animate onEnter={fadeIn} onExit={fadeOut} show={show} duration={0.4}>
        <div style={{ marginTop: '20px' }}>Animated text</div>
      </Animate>
    </>
  )
}

export const SlideInOut = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <Button onClick={() => setShow((currentShow) => !currentShow)}>
        Toggle Show
      </Button>
      <Animate onEnter={slideIn} onExit={slideOut} show={show} duration={0.4}>
        <div style={{ marginTop: '20px' }}>Animated text</div>
      </Animate>
    </>
  )
}
