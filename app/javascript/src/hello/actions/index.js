import { showNotification, showErrorNotification } from 'Shared/helpers'

export const ActionTypes = {
  FETCH_INITIAL_DATA_REQUEST: 'FETCH_INITIAL_DATA_REQUEST',
  FETCH_INITIAL_DATA_RECEIVED: 'FETCH_INITIAL_DATA_RECEIVED',
}

export const fetchInitialData = () => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.FETCH_INITIAL_DATA_REQUEST,
  })

  const state = getState()
  const dataURL = state.misc.fetchInitialDataURL
  fetch(dataURL, {
    method: 'GET',
    credentials: 'same-origin',
  })
  .then(response => Promise.all([ response, response.json() ]))
  .then(([ response, json ]) => {
    if (response.status === 200) {
      showNotification('Successfully fetched the initial data!')
      dispatch({
        type: ActionTypes.FETCH_INITIAL_DATA_RECEIVED,
        data: json,
      })
    } else {
      showErrorNotification('Error while fetching the initial data')
    }
  })
  .catch(() => {
    showErrorNotification('Error while fetching the initial data')
  })
}
