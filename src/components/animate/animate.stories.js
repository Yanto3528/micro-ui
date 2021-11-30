import React, { useState } from 'react'

import { fade, slide } from '@/animations'
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
      <Animate
        onEnter={fade.enter}
        onExit={fade.exit}
        show={show}
        data-testid='animate-wrapper'
      >
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
      <Animate
        onEnter={slide.enter}
        onExit={slide.exit}
        show={show}
        duration={0.4}
        data-testid='animate-wrapper'
      >
        <div style={{ marginTop: '20px' }}>Animated text</div>
      </Animate>
    </>
  )
}
