import { dispatch } from './store'
import { actionTypes } from './store/actions'

export const toast = ({ duration = 4000, ...data }) => {
  const id = new Date().getDate() + Math.random() * 100
  const toastData = { id, ...data }

  dispatch({
    type: actionTypes.ADD_OR_UPDATE,
    payload: toastData,
  })

  setTimeout(() => {
    dispatch({
      type: actionTypes.REMOVE,
      payload: id,
    })
  }, duration)
}
