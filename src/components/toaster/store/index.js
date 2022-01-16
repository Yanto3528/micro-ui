import { useState, useEffect } from 'react'

import { actionTypes } from './actions'

const createSubsribeable = () => {
  const subscribers = new Set()

  return {
    subscribe: (cb) => {
      subscribers.add(cb)

      return () => {
        subscribers.delete(cb)
      }
    },
    publish: (data) => {
      subscribers.forEach((subscriber) => subscriber(data))
    },
  }
}

const subscribers = createSubsribeable()
let defaultState = { toasts: [] }

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      }
    case actionTypes.UPDATE:
      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === action.payload.id
            ? { ...toast, ...action.payload }
            : toast
        ),
      }
    case actionTypes.ADD_OR_UPDATE:
      return state.toasts.find((toast) => toast.id === action.payload.id)
        ? reducer(state, { type: actionTypes.UPDATE, payload: action.payload })
        : reducer(state, { type: actionTypes.ADD, payload: action.payload })
    case actionTypes.REMOVE:
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload),
      }
    default:
      return state
  }
}

export const dispatch = (action) => {
  defaultState = reducer(defaultState, action)
  subscribers.publish(defaultState)
}

export const useToast = (defaultOptions) => {
  const [state, setState] = useState(defaultState)

  useEffect(() => {
    const unsubsribe = subscribers.subscribe(setState)
    return () => {
      defaultState = { toasts: [] }
      unsubsribe()
    }
  }, [])

  const onSetState = (data) => {
    setState(data)
    subscribers.publish(data)
  }

  const mergedToasts = state.toasts.map((toast) => {
    return {
      ...defaultOptions,
      ...toast,
    }
  })

  return [{ ...state, toasts: mergedToasts }, onSetState]
}
