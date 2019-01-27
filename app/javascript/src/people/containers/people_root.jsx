import React from 'react'
import { Provider } from 'react-redux'

import rootReducer from '../reducers'
import configureStore from 'Shared/configure_store'

import PeopleContainer from './people_container'

const store = configureStore(rootReducer)

const PeopleRoot = () => {
  return (~
    %Provider(store={ store })
      %PeopleContainer
  ~)
}

export default PeopleRoot
