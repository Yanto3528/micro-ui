import { keyframes } from 'styled-components'

export const slide = {
  enter: keyframes`
    from {
      transform: translateY(-40px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `,
  exit: keyframes`
    from {
      opacity: 1;
      transform: translateY(0);
    }

    to {
      transform: translateY(-40px);
      opacity: 0;
    }
  `,
}

export const fade = {
  enter: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,
  exit: keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `,
}

export const collapse = {
  enter: keyframes`
    from {
      max-height: 0px;
      overflow: hidden;
    }
    to {
      max-height: 100vh;
      overflow: initial;
    }
  `,
  exit: keyframes`
    from {
      max-height: 100vh;
      overflow: initial;
    }
    to {
      max-height: 0px;
      overflow: hidden;
    }
  `,
}

export const spinning = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

export const shake = keyframes`
  0% {
    transform: rotate(0deg);
  }
  70% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(-7deg);
  }
  90% {
    transform: rotate(7deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

export const bubble = keyframes`
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(0.9);
  }
  40% {
    transform: scale(1.1);
  }
  60% {
    transform: scale(0.95);
  }
  80% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`
