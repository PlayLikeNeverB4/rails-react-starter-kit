import { combineReducers } from 'redux'
import people from './people'
import misc from './misc'

export default combineReducers({
  misc,
  people,
})
