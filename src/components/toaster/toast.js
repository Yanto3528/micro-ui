import { dispatch } from './store'
import { actionTypes } from './store/actions'

export const toast = (data) => {
  const id = new Date().getDate() + Math.random() * 100
  const toastData = { ...data, id: data.id ?? id }

  dispatch({
    type: actionTypes.ADD_OR_UPDATE,
    payload: toastData,
  })
}
