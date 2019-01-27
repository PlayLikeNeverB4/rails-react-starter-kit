import { showNotification, showErrorNotification, callApi } from 'Shared/helpers'

export const ActionTypes = {
  FETCH_INITIAL_DATA_REQUEST: 'FETCH_INITIAL_DATA_REQUEST',
  FETCH_INITIAL_DATA_RECEIVED: 'FETCH_INITIAL_DATA_RECEIVED',
}

export const fetchInitialData = () => dispatch => {
  dispatch({
    type: ActionTypes.FETCH_INITIAL_DATA_REQUEST,
  })

  const dataURL = '/people/fetch'
  callApi(dataURL)
  .then(json => {
    showNotification('Successfully fetched the initial data!')
    dispatch({
      type: ActionTypes.FETCH_INITIAL_DATA_RECEIVED,
      data: json,
    })
  })
  .catch(() => {
    showErrorNotification('Error while fetching the initial data')
  })
}
