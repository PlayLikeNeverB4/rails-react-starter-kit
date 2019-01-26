import { ActionTypes } from '../actions'

const {
  FETCH_INITIAL_DATA_RECEIVED,
} = ActionTypes

const people = (state = {}, action) => {
  switch (action.type) {
    case FETCH_INITIAL_DATA_RECEIVED:
      return {
        ...state,
        ...action.data.people,
      }
    default:
      return state
  }
}

export default people
