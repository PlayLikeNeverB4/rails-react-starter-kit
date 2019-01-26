import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import rootReducer from '../reducers'
import configureStore from 'Shared/configure_store'

import HelloContainer from './hello_container'

const HelloRoot = ({
  fetchInitialDataURL,
}) => {
  const state = {
    misc: {
      fetchInitialDataURL,
    },
  }
  const store = configureStore(rootReducer, state)
  return (~
    %Provider(store={ store })
      %HelloContainer
  ~)
}

HelloRoot.propTypes = {
  fetchInitialDataURL: PropTypes.string.isRequired,
}

export default HelloRoot
