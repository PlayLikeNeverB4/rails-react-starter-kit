import _ from 'lodash'
import { ActionTypes } from '../actions'

const {
  FETCH_INITIAL_DATA_REQUEST,
  FETCH_INITIAL_DATA_RECEIVED,
} = ActionTypes

const initialState = {
  loadingData: false,
}

const misc = (state = initialState, action) => {
  if (_.isUndefined(state.loadingData)) {
    state = {
      ...initialState,
      ...state,
    }
  }
  switch (action.type) {
    case FETCH_INITIAL_DATA_REQUEST:
      return {
        ...state,
        loadingData: true,
      }
    case FETCH_INITIAL_DATA_RECEIVED:
      return {
        ...state,
        loadingData: false,
      }
    default:
      return state
  }
}

export default misc
